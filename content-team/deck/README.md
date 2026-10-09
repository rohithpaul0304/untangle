# Deck: the playable unit of review

Status: Untangle copy of the studio deck tooling (source of truth: `~/.codex/skills/learning-studio/deck/`). This copy differs only by the character block, which holds the approved fox. A deck is a self-contained HTML file a person taps through on a phone: one guide line per screen, one thing to do, a consequence that replaces the screen. Every Play Designer delivers one; the fun gate plays them; people can test them before any build exists.

## Files

- `deck-template.html`: copy this to `candidates/<x>/deck.html` and replace the JSON in `<script id="deck">`. The guide character lives in `<script id="character">`; clients replace it with their own (Untangle's copy has the fox).
- `example-deck.html`: the v1 "customer who wants your whole team" opening (`../pm-pilot/opening-rethink.md`) rendered as a deck. Draft, unapproved; it exists to show what a candidate looks like when it arrives at the fun gate. The studio copy has a tutorial deck showing every visual type.
- `check-deck.py`: `python3 check-deck.py deck.html` validates structure and prints taps to the first consequence; `--export` prints the whole script as Markdown so `script.md` never drifts from the deck.

## The deck JSON

```
{ "meta": {"title", "lesson", "candidate", "lens", "status", "author"},
  "start": "s01",
  "scenes": { "<id>": { ...scene } } }
```

A scene: `line` (the guide's words; a string, or an object of conditions such as `{"choice=a": "…", "default": "…"}`), `mood` (`waiting`, `speaking`, `thinking`, `surprised`, `celebrating`), `visual` (optional, below), `choices` (list of `{"label", "next", "set": {"var": "value"}, "primary": true}`; `next` may also be a condition object), `input` (an unscored free-text reflection: `{"placeholder", "button", "next", "save"}`), `consequence: true` on the first screens where the learner sees the result of a choice (the checker measures taps to it), `end: true` on endings, `note` (author-only text; shown in author mode and in the export, never to learners), `set` (variables to set on entry). `{{var}}` in any text inserts a variable.

Visual types: `counters` (`items: [{"label", "value"}]`; numbers animate from the previous scene's value for the same label), `people` (`groups: [{"label", "count", "color"}]`), `cards` (`items: [{"title", "lines": [], "selected": true}]`), `board` (`columns: [{"title", "items": [], "empty": "…"}]`), `message` (`from`, `text`: another character speaking), `concept` (`name`, `definition`: the concept card, only after the mechanism), `image` (`src`, `alt`), `text` (`text`). Any visual may carry a `caption`.

## Rules the template enforces

One beat per screen; a committed choice replaces the screen; the guide stays compact at the bottom; reduced motion removes all transitions and number animation; every control is a real button at least 48px tall; keyboard and screen-reader order follow the beat. Taps and decisions are counted; the end screen shows a session log the facilitator can copy for `test-log.md`.

## What a deck is not

Not the build. Drag and drop, live simulations and real motion belong to the Prototype Engineer. A deck proves the opening works as a sequence of choices and consequences, which is what the fun gate and early human tests need.

## Structural pacing checks

`python3 check-deck.py deck.html` reports earliest and latest first-consequence taps across every declared branch. Routes ending or cycling before feedback, missing targets, unreachable scenes, and routes with no ending fail. Every declared opening route must reach feedback within 12 taps. Conditional targets need a default fallback; all declared branches are included conservatively. These bounds do not simulate variable state, voluntary restarts or elapsed time: confirm actual routes by playing the deck. A cycle anywhere makes the reported longest structural route unbounded.

`python3 test-check-deck.py` runs synthetic graph regression tests, not learner-content or enjoyment tests. The shared studio and Untangle checker copies must remain identical. Exported Markdown is an author view with outcomes and notes; never give `--export` output to a blind checker as a learner-only packet.
