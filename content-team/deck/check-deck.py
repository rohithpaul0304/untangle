#!/usr/bin/env python3
"""Check a deck.html before it goes to the fun gate.

Usage:
  python3 check-deck.py path/to/deck.html            # validate and report
  python3 check-deck.py path/to/deck.html --export   # also print Markdown

Checks declared graph structure and the 12-tap first-consequence target.
Conditional branches are all included; bounds are structural, not a proof of
runtime state or elapsed time. One declared choice/input transition is one tap.
Exit code 1 on structural or pacing errors.
"""
import json
import re
import sys
from collections import deque


CONDITION = re.compile(r"[\w.-]+\s*(=|!=)\s*(.+)", re.ASCII)


def load(path):
    with open(path, encoding="utf-8") as source:
        html = source.read()
    m = re.search(r'<script id="deck" type="application/json">(.*?)</script>', html, re.S)
    if not m:
        sys.exit('error: no <script id="deck" type="application/json"> block found')
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError as e:
        sys.exit(f"error: deck JSON does not parse: {e}")


def targets(value):
    """Include every declared branch, without evaluating learner state."""
    if isinstance(value, str):
        return [value]
    if isinstance(value, dict):
        return [target for v in value.values() for target in targets(v)]
    return []


def edges(scene):
    out = []
    for choice in scene.get("choices", []) or []:
        out.extend(targets(choice.get("next")))
    if scene.get("input") is not None:
        out.extend(targets(scene["input"].get("next")))
    return list(dict.fromkeys(out))


def check_target(value, where, errors):
    """The engine resolves one level of condition map, with default fallback."""
    if isinstance(value, str) and value.strip():
        return
    if isinstance(value, dict) and value:
        if "default" not in value:
            errors.append(f"{where}: conditional next needs a default target for unmatched state")
        for condition, target in value.items():
            if condition != "default" and not CONDITION.fullmatch(condition):
                errors.append(f"{where}: invalid next condition '{condition}'")
            if not isinstance(target, str) or not target.strip():
                errors.append(f"{where} [{condition}]: target must be a nonempty scene id (nested maps are not supported by the engine)")
        return
    errors.append(f"{where}: missing or invalid next target; expected a scene id or condition map")


def distances(graph, start):
    if start not in graph:
        return {}
    dist = {start: 0}
    queue = deque([start])
    while queue:
        cur = queue.popleft()
        for target in graph[cur]:
            if target not in dist:
                dist[target] = dist[cur] + 1
                queue.append(target)
    return dist


def longest_distances(graph, start):
    """Longest distances in a reachable acyclic graph; None means a cycle."""
    incoming = dict.fromkeys(graph, 0)
    for outgoing in graph.values():
        for target in outgoing:
            incoming[target] += 1
    queue = deque(s for s, count in incoming.items() if count == 0)
    order = []
    while queue:
        cur = queue.popleft()
        order.append(cur)
        for target in graph[cur]:
            incoming[target] -= 1
            if incoming[target] == 0:
                queue.append(target)
    if len(order) != len(graph):
        return None
    longest = {start: 0} if start in graph else {}
    for cur in order:
        if cur in longest:
            for target in graph[cur]:
                longest[target] = max(longest.get(target, 0), longest[cur] + 1)
    return longest


def analyze(deck):
    errors, warnings = [], []
    check_em_dashes(deck, errors)
    if not isinstance(deck, dict):
        deck = {}
        errors.append("deck must be an object")
    raw_scenes = deck.get("scenes")
    if not isinstance(raw_scenes, dict) or not raw_scenes:
        errors.append("deck has no scenes object")
        raw_scenes = {}
    scenes, bad_routes = {}, set()
    for sid, raw in raw_scenes.items():
        if not isinstance(raw, dict):
            errors.append(f"{sid}: scene must be an object")
            raw = {}
            bad_routes.add(sid)
        sc = dict(raw)
        choices = sc.get("choices") or []
        if not isinstance(choices, list):
            errors.append(f"{sid}: choices must be a list")
            choices = []
            bad_routes.add(sid)
        sc["choices"] = []
        for index, choice in enumerate(choices, 1):
            if not isinstance(choice, dict):
                errors.append(f"{sid}: choice {index} must be an object")
                bad_routes.add(sid)
                continue
            sc["choices"].append(choice)
            before = len(errors)
            check_target(choice.get("next"), f"{sid}: choice {index}", errors)
            if len(errors) != before:
                bad_routes.add(sid)
            label = choice.get("label")
            if isinstance(label, str) and len(label) > 70:
                warnings.append(f"{sid}: choice label over 70 characters: '{label[:40]}…'")
        if sc.get("input") is not None:
            before = len(errors)
            if not isinstance(sc["input"], dict):
                errors.append(f"{sid}: input must be an object")
                sc["input"] = None
            else:
                check_target(sc["input"].get("next"), f"{sid}: input", errors)
            if len(errors) != before:
                bad_routes.add(sid)
        if not str(sc.get("line", "")).strip() and not isinstance(sc.get("line"), dict):
            warnings.append(f"{sid}: empty guide line")
        if len(sc["choices"]) > 4:
            warnings.append(f"{sid}: {len(sc['choices'])} choices; two meaningful choices usually beat five vague ones")
        scenes[sid] = sc

    start = deck.get("start")
    if not isinstance(start, str) or start not in scenes:
        errors.append(f"start scene '{start}' does not exist")
        start = None
    graph = {}
    for sid, sc in scenes.items():
        declared = edges(sc)
        graph[sid] = [target for target in declared if target in scenes]
        for target in declared:
            if target not in scenes:
                errors.append(f"{sid}: points to missing scene '{target}'")
                bad_routes.add(sid)
        if not sc.get("end") and not graph[sid]:
            errors.append(f"{sid}: dead end (no valid outgoing route, not marked end)")
            bad_routes.add(sid)

    dist = distances(graph, start)
    for sid in scenes:
        if sid not in dist:
            errors.append(f"{sid}: unreachable from start")
    ends = [sid for sid, sc in scenes.items() if sc.get("end")]
    if not ends:
        errors.append('no scene is marked "end": true')
    # Every reachable branch must have a route to an ending, even after feedback.
    reverse = {sid: [] for sid in scenes}
    for sid, outgoing in graph.items():
        for target in outgoing:
            reverse[target].append(sid)
    can_end, queue = set(ends), deque(ends)
    while queue:
        for sid in reverse[queue.popleft()]:
            if sid not in can_end:
                can_end.add(sid)
                queue.append(sid)
    for sid in dist:
        if sid not in can_end:
            errors.append(f"{sid}: no declared path to an ending")

    decisions = [sid for sid, sc in scenes.items() if len(sc["choices"]) >= 2]
    if not decisions:
        warnings.append("no scene offers two or more choices; the learner never decides anything")
    reachable_graph = {sid: graph[sid] for sid in dist}
    longest = longest_distances(reachable_graph, start)
    # First-consequence nodes are boundaries: later loops/feedback do not alter
    # first feedback. Preserve all incoming paths so merges retain slow routes.
    first_graph = {sid: [] if scenes[sid].get("consequence") else graph[sid] for sid in dist}
    first_dist = distances(first_graph, start)
    first_graph = {sid: first_graph[sid] for sid in first_dist}
    first_nodes = [sid for sid in first_dist if scenes[sid].get("consequence")]
    earliest = min((first_dist[sid] for sid in first_nodes), default=None)
    first_longest = longest_distances(first_graph, start)
    pacing_errors = []
    if earliest is None:
        pacing_errors.append('no reachable first consequence is marked "consequence": true')
    if first_longest is None:
        pacing_errors.append("a declared route can cycle before its first consequence; no finite tap bound")
    for sid in first_dist:
        if scenes[sid].get("consequence"):
            continue
        if scenes[sid].get("end"):
            pacing_errors.append(f"{sid}: a declared route ends before its first consequence")
        elif sid in bad_routes or not first_graph[sid]:
            pacing_errors.append(f"{sid}: a declared route can stop before its first consequence")
    latest = max((first_longest[sid] for sid in first_nodes), default=None) if first_longest is not None else None
    if latest is not None and latest > 12:
        pacing_errors.append(f"latest first consequence arrives at tap {latest}; every declared route must reach it within 12")
    errors.extend(f"pacing: {error}" for error in pacing_errors)
    return dict(scenes=scenes, start=start, errors=errors, warnings=warnings,
                dist=dist, ends=ends, decisions=decisions, earliest=earliest,
                latest=latest, first_cycle=first_longest is None,
                first_can_stop=any(not scenes[sid].get("consequence") and
                                   (scenes[sid].get("end") or sid in bad_routes or not first_graph[sid])
                                   for sid in first_dist),
                longest=None if longest is None else max(longest.values(), default=0))


def _walk_strings(value, path="deck"):
    if isinstance(value, str):
        yield path, value
    elif isinstance(value, dict):
        for k, v in value.items():
            yield from _walk_strings(v, f"{path}.{k}")
    elif isinstance(value, list):
        for i, v in enumerate(value):
            yield from _walk_strings(v, f"{path}[{i}]")


def check_em_dashes(deck, errors):
    """Founder rule (2026-10-09): no em-dash anywhere a learner can read."""
    for path, text in _walk_strings(deck):
        if "\u2014" in text:
            errors.append(f"{path}: contains an em-dash; use a full stop or a comma")


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    path = sys.argv[1]
    export = "--export" in sys.argv
    try:
        deck = load(path)
    except OSError as e:
        sys.exit(f"error: cannot read deck: {e}")
    result = analyze(deck)
    scenes, start, dist = result["scenes"], result["start"], result["dist"]
    errors, warnings = result["errors"], result["warnings"]
    meta = deck.get("meta") if isinstance(deck, dict) else None
    meta = meta if isinstance(meta, dict) else {}
    print(f"deck: {path}")
    print(f"title: {meta.get('title', '')} | status: {meta.get('status', 'Draft')} | candidate: {meta.get('candidate', '-')} | lens: {meta.get('lens', '-')}")
    print(f"scenes: {len(scenes)} | reachable: {len(dist)} | decisions (2+ choices): {len(result['decisions'])} | endings: {len(result['ends'])}")
    latest = "unbounded (pre-consequence cycle)" if result["first_cycle"] else result["latest"]
    if result["first_can_stop"]:
        latest = "not guaranteed (route can end or stop first)" + ("; cycle also present" if result["first_cycle"] else "")
    print(f"first consequence (structural taps): earliest={result['earliest'] if result['earliest'] is not None else 'not reachable'} | latest={latest if latest is not None else 'not reachable'}")
    print(f"longest declared route (structural taps): {result['longest'] if result['longest'] is not None else 'unbounded (reachable cycle)'}")
    print("Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.")
    for warning in warnings:
        print("warning:", warning)
    for error in errors:
        print("error:", error)

    if export:
        print("\n---\n")
        print(f"# {meta.get('title', 'Deck')}\n")
        print(f"Status: {meta.get('status', 'Draft')}\n")
        for sid in sorted(scenes, key=lambda s: (dist.get(s, 10**6), s)):
            sc = scenes[sid]
            flags = []
            if sid == start:
                flags.append("start")
            if sc.get("consequence"):
                flags.append("consequence")
            if sc.get("end"):
                flags.append("end")
            print(f"## {sid}" + (f" ({', '.join(flags)})" if flags else "") + (f" — mood: {sc['mood']}" if sc.get("mood") else ""))
            line = sc.get("line")
            if isinstance(line, dict):
                for key, value in line.items():
                    print(f"- Guide [{key}]: {value}")
            else:
                print(f"- Guide: {line}")
            if sc.get("visual"):
                print(f"- Visual: {json.dumps(sc['visual'], ensure_ascii=False)}")
            if sc.get("input") is not None:
                print(f"- Input: {sc['input'].get('placeholder', '')} → {sc['input'].get('next')}")
            for choice in sc["choices"]:
                nxt = choice.get("next")
                print(f"- Choice: \"{choice.get('label')}\" → {nxt if isinstance(nxt, str) else json.dumps(nxt)}" + (f" (set {choice['set']})" if choice.get("set") else ""))
            if sc.get("note"):
                print(f"- Author note: {sc['note']}")
            print()
    if errors:
        print(f"\n{len(errors)} error(s). Fix them before the fun gate.")
        sys.exit(1)
    print("\nStructure and declared-route pacing OK. This says nothing about fun, clarity or correctness.")


if __name__ == "__main__":
    main()
