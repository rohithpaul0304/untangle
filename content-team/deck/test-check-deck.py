#!/usr/bin/env python3
"""Synthetic graph tests for the deck checker; no course content fixtures."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.dont_write_bytecode = True

# Accept a checker path so the same tests can verify an installed copy.
CHECKER = Path(sys.argv.pop(1)) if len(sys.argv) > 1 and not sys.argv[1].startswith("-") else Path(__file__).with_name("check-deck.py")
spec = importlib.util.spec_from_file_location("checker", CHECKER)
checker = importlib.util.module_from_spec(spec)
spec.loader.exec_module(checker)


def scene(*outgoing, **flags):
    return dict(line="Synthetic fixture", choices=[{"label": f"Route {n}", "next": target} for n, target in enumerate(outgoing, 1)], **flags)


def deck(scenes, start="s"):
    return dict(meta={"title": "Synthetic deck"}, start=start, scenes=scenes)


def analyze(scenes):
    return checker.analyze(deck(scenes))


class GraphTests(unittest.TestCase):
    def assert_error(self, result, text):
        self.assertTrue(any(text in error for error in result["errors"]), result["errors"])

    def test_valid_linear(self):
        r = analyze({"s": scene("c"), "c": scene("end", consequence=True), "end": scene(end=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"], r["longest"]), (1, 1, 2))

    def test_fast_branch_does_not_hide_thirteen_tap_branch(self):
        scenes = {"s": scene("c", "n1"), "c": scene("end", consequence=True), "end": scene(end=True)}
        for n in range(1, 13):
            scenes[f"n{n}"] = scene(f"n{n + 1}" if n < 12 else "c")
        r = analyze(scenes)
        self.assertEqual((r["earliest"], r["latest"]), (1, 13))
        self.assertEqual(r["longest"], 14)
        self.assert_error(r, "every declared route must reach it within 12")

    def test_twelve_taps_is_inclusive(self):
        scenes = {"s": scene("n1"), "c": scene(end=True, consequence=True)}
        for n in range(1, 12):
            scenes[f"n{n}"] = scene(f"n{n + 1}" if n < 11 else "c")
        r = analyze(scenes)
        self.assertEqual(r["errors"], [])
        self.assertEqual(r["latest"], 12)

    def test_shortcut_merge_retains_slow_path(self):
        r = analyze({"s": scene("merge", "a"), "a": scene("b"), "b": scene("merge"), "merge": scene("c"), "c": scene("end", consequence=True), "end": scene(end=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"], r["longest"]), (2, 4, 5))

    def test_distinct_first_consequences(self):
        r = analyze({"s": scene("c1", "a"), "a": scene("c2"), "c1": scene("end", consequence=True), "c2": scene("end", consequence=True), "end": scene(end=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"]), (1, 2))

    def test_later_consequence_does_not_extend_first(self):
        r = analyze({"s": scene("c1"), "c1": scene("a", consequence=True), "a": scene("c2"), "c2": scene(end=True, consequence=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"]), (1, 1))

    def test_start_is_consequence(self):
        r = analyze({"s": scene("end", consequence=True), "end": scene(end=True)})
        self.assertEqual((r["earliest"], r["latest"]), (0, 0))
        self.assertEqual(r["errors"], [])

    def test_self_loop_with_exit_is_unbounded_before_consequence(self):
        r = analyze({"s": scene("s", "c"), "c": scene(end=True, consequence=True)})
        self.assertEqual(r["earliest"], 1)
        self.assertIsNone(r["latest"])
        self.assertIsNone(r["longest"])
        self.assert_error(r, "cycle before its first consequence")

    def test_multiple_node_cycle_before_consequence(self):
        r = analyze({"s": scene("a"), "a": scene("s", "c"), "c": scene(end=True, consequence=True)})
        self.assert_error(r, "cycle before its first consequence")
        self.assertIsNone(r["longest"])

    def test_cycle_after_consequence_does_not_change_first_bound(self):
        r = analyze({"s": scene("c"), "c": scene("loop", consequence=True), "loop": scene("loop", "end"), "end": scene(end=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"]), (1, 1))
        self.assertIsNone(r["longest"])

    def test_dead_branch_next_missing(self):
        r = analyze({"s": {"choices": [{"label": "Valid", "next": "c"}, {"label": "Broken"}]}, "c": scene(end=True, consequence=True)})
        self.assert_error(r, "choice 2: missing or invalid next target")
        self.assert_error(r, "can stop before its first consequence")
        self.assertTrue(r["first_can_stop"])

    def test_reference_missing(self):
        r = analyze({"s": scene("c", "absent"), "c": scene(end=True, consequence=True)})
        self.assert_error(r, "points to missing scene 'absent'")
        self.assertTrue(r["first_can_stop"])

    def test_invalid_target_types(self):
        for target in (None, "", 5, False, [], {}, {"default": None}, {"default": {"default": "c"}}):
            with self.subTest(target=target):
                r = analyze({"s": scene(target, "c"), "c": scene(end=True, consequence=True)})
                self.assertTrue(r["errors"])
                self.assertTrue(r["first_can_stop"])

    def test_dead_scene(self):
        r = analyze({"s": scene("c", "dead"), "dead": scene(), "c": scene(end=True, consequence=True)})
        self.assert_error(r, "dead: dead end")
        self.assert_error(r, "dead: no declared path to an ending")
        self.assert_error(r, "dead: a declared route can stop")

    def test_no_consequence(self):
        r = analyze({"s": scene("end"), "end": scene(end=True)})
        self.assert_error(r, "no reachable first consequence")
        self.assert_error(r, "ends before its first consequence")

    def test_ending_branch_before_consequence(self):
        r = analyze({"s": scene("c", "early"), "c": scene(end=True, consequence=True), "early": scene(end=True)})
        self.assertEqual(r["earliest"], 1)
        self.assert_error(r, "early: a declared route ends before")
        self.assertTrue(r["first_can_stop"])

    def test_end_can_still_have_declared_routes(self):
        # The engine renders declared choices on end scenes too.
        r = analyze({"s": scene("c", end=True), "c": scene("c", consequence=True, end=True)})
        self.assertIsNone(r["longest"])
        self.assert_error(r, "s: a declared route ends before")

    def test_route_with_no_path_to_ending_after_consequence(self):
        r = analyze({"s": scene("c"), "c": scene("loop", "end", consequence=True), "loop": scene("loop"), "end": scene(end=True)})
        self.assert_error(r, "loop: no declared path to an ending")
        self.assertEqual(r["latest"], 1)

    def test_no_end_exists(self):
        r = analyze({"s": scene("s", consequence=True)})
        self.assert_error(r, 'no scene is marked "end": true')
        self.assert_error(r, "no declared path to an ending")

    def test_valid_conditional_branches_all_expanded(self):
        r = analyze({"s": scene({"choice=a": "c", "choice!=a": "a", "default": "a"}), "a": scene("c"), "c": scene(end=True, consequence=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"]), (1, 2))
        self.assertEqual(len(r["dist"]), 3)

    def test_bad_conditional_branches(self):
        for target, message in (({"choice=a": "c"}, "needs a default target"), ({"oops": "c", "default": "c"}, "invalid next condition"), ({"choice=a": "missing", "default": "c"}, "points to missing scene")):
            with self.subTest(target=target):
                self.assert_error(analyze({"s": scene(target), "c": scene(end=True, consequence=True)}), message)

    def test_input_routes(self):
        r = analyze({"s": {"input": {"next": {"reflection=yes": "c", "default": "a"}}}, "a": scene("c"), "c": scene(end=True, consequence=True)})
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["earliest"], r["latest"]), (1, 2))
        self.assert_error(analyze({"s": {"input": {}}, "end": scene(end=True, consequence=True)}), "input: missing or invalid next target")

    def test_invalid_shapes_do_not_crash(self):
        for value in (None, [], {"start": []}, {"scenes": []}, deck({"s": []}), deck({"s": {"choices": [4]}}), deck({"s": {"input": 5}})):
            with self.subTest(value=value):
                self.assertTrue(checker.analyze(value)["errors"])

    def test_unreachable_and_missing_start(self):
        r = analyze({"s": scene(end=True, consequence=True), "other": scene(end=True, consequence=True)})
        self.assert_error(r, "other: unreachable from start")
        self.assert_error(checker.analyze(deck({"end": scene(end=True)}, start="absent")), "start scene 'absent' does not exist")

    def test_long_graph_does_not_hit_recursion_limit(self):
        scenes = {"s": scene("n0")}
        for n in range(1100):
            scenes[f"n{n}"] = scene(f"n{n + 1}" if n < 1099 else "end", consequence=n == 0)
        scenes["end"] = scene(end=True)
        r = analyze(scenes)
        self.assertEqual(r["errors"], [])
        self.assertEqual((r["latest"], r["longest"]), (1, 1101))


class CLITests(unittest.TestCase):
    def run_cli(self, content, *args):
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "fixture.html"
            path.write_text(content, encoding="utf-8")
            return subprocess.run([sys.executable, str(CHECKER), str(path), *args], text=True, capture_output=True)

    def render(self, data):
        return '<script id="deck" type="application/json">' + json.dumps(data) + '</script>'

    def test_export_preserves_script_content_and_metadata(self):
        data = deck({"s": scene("c"), "c": scene(end=True, consequence=True)})
        data["scenes"]["s"].update(line={"default": "Hello"}, note="Author only", mood="waiting", visual={"type": "text", "text": "Preview"})
        data["scenes"]["s"]["choices"][0]["set"] = {"picked": "a"}
        r = self.run_cli(self.render(data), "--export")
        self.assertEqual(r.returncode, 0, r.stderr + r.stdout)
        for expected in ("# Synthetic deck", "## s (start) — mood: waiting", "- Guide [default]: Hello", "- Author note: Author only", '- Choice: "Route 1" → c', "(set {'picked': 'a'})", "- Visual:", "## c (consequence, end)", "earliest=1 | latest=1", "do not prove runtime state or elapsed time"):
            self.assertIn(expected, r.stdout)

    def test_cli_errors_exit_one_but_export_still_works(self):
        r = self.run_cli(self.render(deck({"s": scene(end=True)})), "--export")
        self.assertEqual(r.returncode, 1)
        self.assertIn("# Synthetic deck", r.stdout)
        self.assertNotIn("Structure and declared-route pacing OK", r.stdout)

    def test_cli_cycle_never_reports_finite_longest(self):
        r = self.run_cli(self.render(deck({"s": scene("s", "c"), "c": scene(end=True, consequence=True)})))
        self.assertEqual(r.returncode, 1)
        self.assertIn("latest=unbounded (pre-consequence cycle)", r.stdout)
        self.assertIn("longest declared route (structural taps): unbounded", r.stdout)

    def test_cli_ending_branch_never_claims_bounded_latest(self):
        r = self.run_cli(self.render(deck({"s": scene("c", "early"), "c": scene(end=True, consequence=True), "early": scene(end=True)})))
        self.assertEqual(r.returncode, 1)
        self.assertIn("latest=not guaranteed", r.stdout)

    def test_bad_html_and_json(self):
        for content in ("not a deck", '<script id="deck" type="application/json">{</script>'):
            with self.subTest(content=content):
                r = self.run_cli(content)
                self.assertEqual(r.returncode, 1)
                self.assertIn("error:", r.stderr)
                self.assertNotIn("Traceback", r.stderr)


if __name__ == "__main__":
    unittest.main()
