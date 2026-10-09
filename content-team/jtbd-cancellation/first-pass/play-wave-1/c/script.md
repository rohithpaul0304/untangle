# Candidate C — teach it back

Status: Draft

Lens: **TEACH IT BACK**. Reference beat: a teachable agent carries out the learner’s explanation, and the resulting opportunity or gap follows disclosed rules. This uses an interaction pattern; it makes no empirical claim about that pattern’s effectiveness.

The learner advises the fox. The first unscored hunch selects the exact question the fox sends to Mira. Later, a recommendation names a tool and its purpose; the fox opens that tool and the resulting recording or unexpected question becomes the consequence. The guide does not merely mark an answer and explain it.

First screen: the learner is the fox’s adviser; Mira has given five stars and cancelled; the immediate goal is to investigate why; the only decision is which question to ask. No cancellation motive is scored before Mira speaks.

The present, reconstruction of the past, and alternate past are labelled separately. The two help capabilities remain fixed. The first rehearsal consequence shows only the opportunity to repair/test a gap, not guaranteed improvement. The changed-obstacle move preserves Mira’s interview, available time and desired progress. Every less-direct recommendation receives a worked path. No free-text scoring, invented fluency, hiring effect, new price advantage, or new intervention appears.

The useful discovery is that the same customer, product category and broad goal can call for different first help when the obstacle changes. The concept is named only after the first recommendation and consequence. The stop offers one practical question and teases the later feature-request encounter without expanding it.

Concrete risk: choosing between prewritten recommendations may still feel like a quiz. The playtest should check whether the fox’s visible action makes the learner feel responsible for setting up a real opportunity, and whether the capability cards are too wordy. Roughly 1–2 minutes is a target, not measured timing. This draft has not been browser-tested or human-tested.

The exact deck export follows, including all author notes and outcomes. Do not use this file for a blind learner check; use learner-only.md.

---

deck: /tmp/untangle-jtbd-c/deck.html
title: Five stars. Then gone. | status: Draft | candidate: C | lens: TEACH IT BACK
scenes: 15 | reachable: 15 | decisions (2+ choices): 3 | endings: 1
first consequence (structural taps): earliest=1 | latest=1
longest declared route (structural taps): 10
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# Five stars. Then gone.

Status: Draft

## s01 (start) — mood: thinking
- Guide: You’re my adviser. Why did Mira cancel? Pick a first hunch; no score.
- Visual: {"type": "hook", "title": "Five-star review. Subscription cancelled.", "name": "Mira", "rating": "★★★★★", "detail": "A fictional interview-practice app"}
- Choice: "Maybe she found other help. Ask her." → s02_other (set {'hunch': 'other help'})
- Choice: "Maybe she’s finished preparing. Ask her." → s02_finished (set {'hunch': 'finished preparing'})
- Choice: "We don’t know yet. Ask what changed." → s02_unknown (set {'hunch': 'unknown'})
- Author note: Only the hook facts precede this unscored hypothesis. The learner advises the fox which question to ask; the fox sends exactly that question. No motive is scored or attributed to the learner.

## s02_finished (consequence) — mood: surprised
- Guide: You sent me to check whether preparation was over. Here’s Mira’s reply.
- Visual: {"type": "exchange", "question": "Did you cancel because you’d finished preparing?", "reply": "I accepted an offer. I have no more interviews planned, so I don’t need preparation now."}
- Choice: "Rewind to before her interview" → s03_past
- Author note: Present-day fictional account. This explains Mira’s stated cancellation reason; it does not show that the app caused hiring. All first hypotheses receive the same factual account after their distinct question.

## s02_other (consequence) — mood: surprised
- Guide: You sent me to check for other help. Here’s Mira’s reply.
- Visual: {"type": "exchange", "question": "Did you cancel because you found other help?", "reply": "I accepted an offer. I have no more interviews planned, so I don’t need preparation now."}
- Choice: "Rewind to before her interview" → s03_past
- Author note: Present-day fictional account. This explains Mira’s stated cancellation reason; it does not show that the app caused hiring. All first hypotheses receive the same factual account after their distinct question.

## s02_unknown (consequence) — mood: surprised
- Guide: You left the reason open. I asked what changed.
- Visual: {"type": "exchange", "question": "What changed that led you to cancel?", "reply": "I accepted an offer. I have no more interviews planned, so I don’t need preparation now."}
- Choice: "Rewind to before her interview" → s03_past
- Author note: Present-day fictional account. This explains Mira’s stated cancellation reason; it does not show that the app caused hiring. All first hypotheses receive the same factual account after their distinct question.

## s03_past — mood: thinking
- Guide: Rewind: before that interview. What should I have set up first?
- Visual: {"type": "cards", "caption": "A past reconstruction. You choose preparation, not the hiring decision.", "items": [{"title": "The interview", "lines": ["Two-minute project answer, then questions. Mira wanted to show why her experience suited the role."]}, {"title": "Her recording", "lines": ["Accurate in relaxed conversation. In rehearsal, her main result came after two minutes."]}, {"title": "Her evening", "lines": ["She worked late; friends were rarely free to practise."]}]}
- Choice: "See the help I can give her" → s04_advice

## s04_advice — mood: waiting
- Guide: Her result missed the limit. Tell me which help to open first, and why.
- Visual: {"type": "cards", "caption": "Both work privately in her free time. No price or duration advantage. Combining them later is allowed.", "items": [{"title": "Structured rehearsal", "lines": ["Record the same project answer; stop at two minutes. Replay, organise opening/evidence/result, retry.", "No unexpected questions."]}, {"title": "Follow-up rehearsal", "lines": ["Record and replay answers to varied, unseen project questions.", "No complete timed opening answer or organising support."]}]}
- Choice: "Structured: help her fit the project answer into two minutes." → s05_structure (set {'first': 'structured'})
- Choice: "Follow-ups: help her handle questions after the project answer." → s05_follow (set {'first': 'follow-up'})
- Author note: Recommendations pair a concrete help choice with its intended use. The situation, desired progress, observed obstacle and both capabilities have been disclosed before the learner sends advice. No points or free-text grading.

## s05_follow (consequence) — mood: speaking
- Guide: You asked for follow-ups. I opened one. Her complete opening answer stays untested.
- Visual: {"type": "practice", "mode": "question", "title": "Fox opened follow-up rehearsal", "state": "Unseen follow-up", "question": "Why did you choose that approach?", "gap": "Opening answer: main result still beyond 2:00.", "opportunity": "New response recorded → replay available", "untested": "No complete opening-answer attempt in this mode."}
- Choice: "What would target the first gap?" → s05_worked
- Author note: Useful practice responding beyond a prepared answer. The response content and success are not invented. The documented opening-answer gap remains untested by this mode.

## s05_structure (consequence) — mood: speaking
- Guide: You asked for a timed answer. I opened it. Her result is beyond the stop.
- Visual: {"type": "practice", "mode": "cutoff", "title": "Fox opened structured rehearsal", "state": "Starting recording • stopped at 2:00", "parts": ["Opening", "Evidence", "Main result"], "gap": "The main result isn’t in this recording.", "opportunity": "Replay → reorganise → retry the same answer", "untested": "Unexpected follow-ups remain untested."}
- Choice: "What was the practice for?" → s06_concept
- Author note: Fixed authored starting recording, based on preceding evidence. This opens a direct way to repair and test the timing/structure gap. It does not show improved fluency or a successful interview.

## s05_worked — mood: speaking
- Guide: For that late result, start here: replay the cutoff, reorganise, retry.
- Visual: {"type": "practice", "mode": "cutoff", "title": "Worked path: structured rehearsal", "state": "Starting recording • stopped at 2:00", "parts": ["Opening", "Evidence", "Main result"], "gap": "The main result isn’t in this recording.", "opportunity": "Replay → reorganise → retry the same answer", "untested": "Unexpected follow-ups remain untested."}
- Choice: "What was the practice for?" → s06_concept
- Author note: Worked explanation after the less-direct first choice; do not count this as an independently selected recommendation.

## s06_concept — mood: celebrating
- Guide: Practice served a purpose. Once that need ended, five stars and cancellation fit together.
- Visual: {"type": "concept", "name": "Jobs to Be Done", "definition": "The progress someone seeks in a situation. Mira needed to present relevant experience clearly under interview limits, without a practice partner. “Job” means progress."}
- Choice: "Change one thing in the past" → s07_changed
- Author note: Name follows the observed mechanism and learner’s recommendation. The interview outcome is not attributed to the app. This is one customer’s account, not a universal rule about cancellation.

## s07_changed — mood: waiting
- Guide: Same earlier interview. Her opening now fits; an unexpected question makes her lose her thread. What should I open first?
- Visual: {"type": "cards", "caption": "Alternate past. Same deadline, late evenings and aim. Both tools still work privately, with the same capabilities.", "items": [{"title": "Structured rehearsal", "lines": ["Repeat, replay and organise the two-minute opening. No unexpected questions."]}, {"title": "Follow-up rehearsal", "lines": ["Record and replay replies to unseen questions. No timed opening attempt or organising help."]}]}
- Choice: "Structured: refine her prepared opening answer." → s08_fixed (set {'second': 'structured'})
- Choice: "Follow-ups: work on replies when the conversation changes." → s08_fresh (set {'second': 'follow-up'})
- Author note: The changed evidence is disclosed before choice. Only the obstacle changes; both tools retain exactly their prior capabilities.

## s08_fixed (consequence) — mood: speaking
- Guide: You asked to refine the opening. I opened it. Her result fits; no unexpected question appears.
- Visual: {"type": "practice", "mode": "fits", "title": "Fox opened structured rehearsal", "state": "Starting recording • main point within 2:00", "parts": ["Opening", "Evidence", "Main result"], "gap": "Unexpected responses remain untested.", "opportunity": "Replay → refine → retry the prepared answer", "untested": "Maintains the opening; leaves the changed gap."}
- Choice: "Switch me to follow-up rehearsal" → s08_repair
- Author note: Unsuccessful application ending with worked repair. The prepared answer already fits according to disclosed evidence. No invented learning gain. Maintaining it has credible benefit, but it is no longer the best-supported first help.

## s08_fresh (consequence) — mood: celebrating
- Guide: You sent me to the new gap. This unseen question gives her a fresh response to review.
- Visual: {"type": "practice", "mode": "question", "title": "Fox opened follow-up rehearsal", "state": "Unseen follow-up", "question": "What would you change if you did the project again?", "gap": "Other questions and the real interview remain untested.", "opportunity": "Fresh response recorded → review → retry", "untested": "This exercises the changed gap."}
- Choice: "Keep the useful question" → s09_end
- Author note: The selected help exercises the evidenced gap. The authored outcome is an opportunity to review and retry, not proof of handling other questions or hiring.

## s08_repair (consequence) — mood: speaking
- Guide: Switched. A fresh question; a response to review and retry.
- Visual: {"type": "practice", "mode": "question", "title": "Fox opened follow-up rehearsal", "state": "Unseen follow-up", "question": "What would you change if you did the project again?", "gap": "Other questions and the real interview remain untested.", "opportunity": "Fresh response recorded → review → retry", "untested": "This exercises the changed gap."}
- Choice: "Keep the useful question" → s09_end
- Author note: Worked successful path after the structured choice. Supported response, not independent mastery.

## s09_end (end) — mood: waiting
- Guide: Before recommending help: what is this person trying to do, and what’s stopping them now?
- Visual: {"type": "text", "text": "Next: spot the progress behind a feature request."}
- Author note: Opening stops here. Parcel transfer and historical company comparison belong to the later lesson and are deliberately not expanded in this candidate. Human timing, learning and enjoyment remain untested.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
