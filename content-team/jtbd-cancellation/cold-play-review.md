# JTBD openings — initial cold observations

Status: Superseded candidate set. Partial AI review; no gate pass.

Reviewer: AI Playtest Lead. This is an AI design review, not a human enjoyment test. Viewport: 390 × 844. Review date: 7 October 2026.

## Scope and stop point

The initial packet contained the Playtest Lead role, fun gate and fun theory, the browser skill/API, and three rendered URLs. No lesson brief, project history, author script, source HTML, candidate JSON, hidden answer key, VOICE.md or REJECTED.md was read. A UI-only route helper was read but not executed. One use of the browser's `text` command unexpectedly returned non-rendered status/scene labels for A (“concept”, “Status: Draft · Candidate A · Lens: Investigate”); subsequent reads used visible `innerText`, accessibility snapshots, and screenshots. No author notes or script data were opened.

The founder's rejection reached the reviewer only after A and B's ordinary cold routes and C's first screen had been observed. At that instruction, review stopped. These observations precede and are independent of the preference message. All-branch coverage was NOT completed. No candidate passed the full gate.

## A — Mira’s case

URL: http://127.0.0.1:8176/candidates/a/deck.html

Cold route completed, 11 taps after arrival:

1. “Maybe her plans changed. Ask Mira.” → “I accepted an offer. No more interviews planned.” This is an information reveal, not a changed customer outcome.
2. “Hear why she cancelled” → adds “so I don’t need preparation now.” Mostly repeats the prior reveal.
3. “Look back before her interview” → “I want to show why my experience fits. My project answer gets two minutes, then questions.”
4. “Play Mira’s recorded answer” → a visual timing diagram: “Her main result comes after the two-minute limit.”
5. “Read her voice note too” → accurate in relaxed conversation, late work hours, friends rarely available.
6. “Choose her first help” → timed opening versus varied questions. Both private, no cost/time advantage.
7. “Time her opening: get the result inside the limit.” → “The stop exposes the missing result; she can reorganise and retry.” This is the first substantive help decision and first choice-conditioned help consequence. It offers a next attempt; it does not show a new successful delivery.
8. “Name what mattered” → Jobs to Be Done definition and explanation of why a timed opening helps.
9. “One detail changes” → opening now fits, unexpected follow-up makes her lose her thread.
10. “Vary her questions: practise finding her thread.” → a new question and recording/replay opportunity; explicitly does not prove readiness for all questions.
11. “Close Mira’s case” → “In this situation, they need to get from ___ to ___. What’s stopping them?” and a next-company prompt.

Counts for this route: first information reveal = tap 1; first substantive help decision = tap 7; first help-specific consequence = tap 7. Two substantive help decisions. The opening hunch and evidence-order choices choose information, rather than changing customer progress. Seven taps are single-option navigation/continuation. Alternate branches not played.

Cold observations:

- Role/goal are clear: “You’re on the interview app’s team. … Why did she go?” The five-star cancellation is a legible contradiction.
- The second screen repeats the first discovery, stretching the path before a consequential decision.
- The timing diagram communicates the obstruction clearly. The original result sits beyond the “2:00 stop”.
- The main help choice is heavily cued: the diagram has already stated exactly what fails, and the option says “get the result inside the limit.” Both options sound plausible in isolation, but the visible evidence makes this a direct match.
- The alternate case changes the obstruction, so it is not literally the same answer. However, “unexpected follow-up” maps directly to “Vary her questions”, making it a narrow recognition exercise.
- The learner recommends a tool, then reads its possible use. No actual newly performed interview answer is shown. This limits the strength of the demonstrated consequence.
- Phone screenshots showed readable text, large controls, and no visible horizontal overflow on the inspected screens. Large empty areas separate the evidence and guide on shorter screens.
- “Play Mira’s recorded answer” led to a labelled visual diagram. Audio playback was not tested; do not claim it works or fails.

Screenshots inspected: `checks/jtbd-a-first.png`, `checks/jtbd-a-evidence.png`, `checks/jtbd-a-choice.png`, `checks/jtbd-a-second.png`. Additional captures: `checks/jtbd-a-note.png`, `checks/jtbd-a-first-consequence.png`.

## B — The rehearsal repair

URL: http://127.0.0.1:8176/candidates/b/deck.html

Cold route completed, 10 taps after arrival:

1. “What changed for you?” → accepted offer, no interviews planned, no current need for preparation.
2. “Rewind to before her interview” → two-minute answer, late result, late work hours.
3. “Choose her first help” → structured versus follow-up rehearsal.
4. “Load structured rehearsal” → recorded answer stops before the result. This is the first substantive tool decision and a choice-conditioned display, but restates a known fact about the original recording.
5. “Start with the result” → visible card order becomes Result → Opening → Evidence. First visible learner-caused repair of the plan.
6. “Replay the repaired session” → “Next attempt · ready to record”; “Now she can test that order against the two-minute stop—and hear what survives.” No replay result is shown.
7. “What was the app really for?” → Jobs to Be Done definition; distinguishes “job” from employment, and says the offer does not prove app causation.
8. “Try one changed obstacle” → opening fits but an unexpected follow-up breaks flow.
9. “Switch to follow-up rehearsal” → unseen question, response/replay opportunity.
10. “Keep the useful move” → reusable question and next-product prompt. Did not open “Session notes for the reviewer”.

Counts for this route: first information reveal = tap 1; first substantive tool decision = tap 4; first visible learner-caused repair = tap 5. Three substantive decisions (tool, ordering, changed-obstacle tool), one unscored hunch, six navigation taps. Alternate branches not played. The gate must distinguish the tool-display response at 4 from the actual changed plan at 5.

Cold observations:

- Clear role: “You run this interview-practice app.” Explicitly labels the story fictional and opening hunch unscored.
- It reaches a help decision sooner than A and allows a visible local edit: the result card changes position because of the learner's choice.
- “Replay the repaired session” is misleading against the next heading “Next attempt · ready to record”. The promised action is a replay, while the displayed state is a plan for a future recording. This is a concrete control/consequence mismatch on the played route.
- The second task changes the obstruction but presents the matching tool in near-identical words. It supports application at a very narrow level; it does not establish broader transfer.
- The definition and non-causation caveat are clear, but the core play remains diagnosis → obvious matching tool → read proposed use. It does not demonstrate the completed customer's progress.
- Inspected phone screens were readable with large controls. The visible repair cards are stronger evidence of learner agency than A's future opportunity text.

Screenshots inspected: `checks/jtbd-b-first.png`, `checks/jtbd-b-repair.png`.

## C — Five stars. Then gone.

URL: http://127.0.0.1:8176/candidates/c/deck.html

Only the first screen was observed; zero taps. The review stopped on instruction before choosing anything.

- The opening is the same underlying contradiction: “Five-star review. Subscription cancelled.” It is explicitly a fictional interview-practice app.
- The role says “You’re my adviser. Why did Mira cancel?” The speaker's relationship to the app is not established on this first screen. The immediate task is clear; the adviser relationship is less specific than A/B.
- The three hunches include other help, finished preparing, and “We don’t know yet. Ask what changed.” The guess is explicitly unscored.
- No consequences, later decisions, controls beyond opening options, or ending were tested. No tap-to-consequence claim is available.

Screenshot inspected: `checks/jtbd-c-first.png`.

## Cold diagnosis before founder feedback

A and B share the same teaching spine and opening story. B gives a more direct visible repair, while A gives more staged evidence, but neither cold route makes the key help decision difficult once the obstruction is stated. Their second moves mostly ask the learner to match a newly named obstruction to a tool with the same wording. The observable issue is the decision design and demonstrated consequence; sentence polish would not by itself change it. C's first screen shares the premise, but its later play was not reviewed.

No claim is made about felt enjoyment, human surprise, full branch correctness, or full accessibility.
