# Untangle — six-story playable preview

Source: chapters/chapter-1-six-storyboards-v3.md, with the master script's 24 reviewed questions. Separate from the older chapter-one prototype.

Run from the project folder:

```sh
python3 -m http.server 4190 --bind 127.0.0.1 --directory prototypes
```

Open http://127.0.0.1:4190/chapter-one-v3/ .

Includes six branching stories, chapter path, single-screen responses, approved fox gesture sprites, scene motion, reduced motion, browser-local progress, 12 feedback questions and 12 fresh practice questions. All stories are open for preview testing. No backend, sign-in, AI or deployment is claimed. Completion measures viewing the story, not mastery. No custom terminal handoff needed.

Browser checks on 5 October 2026:
- All 117 authored choice transitions rendered and followed.
- All six journeys completed through actual button handlers, including railway evidence and future comparisons.
- 24 correct-answer paths yielded expected totals; fresh-practice explanations stayed hidden until completion.
- Pausing on a feedback screen restored that feedback on return.
- Reload preserved current story scene.
- Replay did not duplicate completion.
- No horizontal overflow across story screens at 375px width; no browser console errors.
- Mobile, tablet and desktop screenshots inspected. These checks do not establish learner engagement or comprehension.

Deliberate limits: fixed authored simulations; no quantitative railway profit model; storage stays in this browser. Remaining design work: learner testing, richer character/environment art, and longer-term adaptive practice. Existing question banks remain finite and repeats are review.
