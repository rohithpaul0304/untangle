deck: /tmp/untangle-jtbd-b/deck.html
title: The rehearsal repair | status: Draft | candidate: B | lens: Repair the thing
scenes: 16 | reachable: 16 | decisions (2+ choices): 4 | endings: 1
first consequence (structural taps): earliest=1 | latest=1
longest declared route (structural taps): 12
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# The rehearsal repair

Status: Superseded. Founder rejected this opening and the shared interview-prep premise on 7 October 2026.

## hook (start) — mood: surprised
- Guide: You run this interview-practice app. Ask Mira why she left. Your hunch is unscored.
- Visual: {"type": "cards", "items": [{"title": "Five-star review. Subscription cancelled.", "lines": ["Mira · today"]}], "caption": "A fictional customer story."}
- Choice: "“Done with interviews?”" → reply_done (set {'hunch': 'done'})
- Choice: "“Still missing something?”" → reply_missing (set {'hunch': 'missing'})
- Choice: "“What changed for you?”" → reply_unknown (set {'hunch': 'unknown'})

## reply_done (consequence) — mood: thinking
- Guide: You asked if preparation was over. Here’s Mira.
- Visual: {"type": "message", "from": "Mira · today", "text": "“I accepted an offer. I have no more interviews planned, so I don’t need preparation now.”"}
- Choice: "Rewind to before her interview" → past

## reply_missing (consequence) — mood: thinking
- Guide: You asked what she was missing. Here’s Mira.
- Visual: {"type": "message", "from": "Mira · today", "text": "“I don’t need preparation now. I have no more interviews planned—I accepted an offer.”"}
- Choice: "Rewind to before her interview" → past

## reply_unknown (consequence) — mood: thinking
- Guide: You left the explanation open. Here’s Mira.
- Visual: {"type": "message", "from": "Mira · today", "text": "“I accepted an offer, and I have no more interviews planned. I don’t need preparation now.”"}
- Choice: "Rewind to before her interview" → past

## past — mood: thinking
- Guide: Before that interview, what did she need help with?
- Visual: {"type": "cards", "items": [{"title": "Reconstruction · before the interview", "lines": ["A two-minute project answer, then questions. Mira wanted to show why her experience suited the role."]}, {"title": "Her rehearsal", "lines": ["Accurate in relaxed conversation. In the recording, her main result came after two minutes."]}, {"title": "Her evenings", "lines": ["She worked late. Friends were rarely free when she could practise."]}]}
- Input: Before her interview, she needs to ___; ___ is stopping her. → help
- Author note: Unscored inference. Preserve the learner’s own words; no automatic grading. This reconstructs the past, not a new interview after cancellation.

## help — mood: thinking
- Guide: Repair her next rehearsal. Which help should come first?
- Visual: {"type": "cards", "items": [{"title": "Structured rehearsal", "lines": ["Record the whole answer; stop at 2:00. Replay, organise opening/evidence/result, retry. No surprise questions."]}, {"title": "Follow-up rehearsal", "lines": ["Answer varied unseen questions; replay responses. No complete timed opening or help organising it."]}], "caption": "Both work privately when she is free. Neither has a price or time advantage. You can combine them later."}
- Choice: "Load structured rehearsal" → timed (set {'first_help': 'structured'})
- Choice: "Load follow-up rehearsal" → questions_first (set {'first_help': 'followup'})
- Author note: First-help choice is conditional on disclosed evidence and fixed capabilities. Controls change the visible rehearsal console; no hiring outcome is controlled.

## questions_first (consequence) — mood: thinking
- Guide: You loaded follow-ups. A new question opens; the opening answer stays untouched.
- Visual: {"type": "repair", "title": "A fresh question", "mode": "Follow-up rehearsal", "tracks": [{"label": "“Why that approach?”", "detail": "Record a response → replay it."}, {"label": "Opening answer", "detail": "Result still after 2:00. No timed opening attempt here.", "outside": true}], "footer": "Useful for the conversation. The documented opening gap remains."}
- Choice: "Switch to the timed-answer repair" → timed
- Author note: Worked recovery after the less direct first help. No fluency gain or response quality is invented.

## timed (consequence) — mood: thinking
- Guide [first_help=followup]: You switched modes. Now her opening stops before the result.
- Guide [default]: You loaded structured rehearsal. Her opening stops before the result.
- Visual: {"type": "repair", "title": "Replay · her recorded answer", "mode": "Structured rehearsal", "tracks": [{"label": "Opening", "detail": "Why the project began."}, {"label": "Evidence", "detail": "What I did, step by step."}, {"label": "Result", "detail": "What changed because of my work.", "outside": true}], "boundaryAfter": 1, "footer": "Organise the next attempt below. This recording stays unchanged."}
- Choice: "Start with the result" → plan (set {'plan_order': 'result_first', 'plan_label': 'Result → opening → evidence.'})
- Choice: "Put result after the context" → plan (set {'plan_order': 'context_first', 'plan_label': 'Opening → result → evidence.'})
- Author note: The authored replay follows the supplied fact: the main result falls outside the two-minute limit. The next action uses only structured rehearsal’s organising capability.

## plan — mood: thinking
- Guide [plan_order=context_first]: You kept the context first and moved the result ahead of the detail.
- Guide [default]: You put the result first. The context and detail now follow it.
- Visual: {"plan_order=context_first": {"type": "repair", "title": "Your repair · next-answer plan", "mode": "Structured rehearsal", "tracks": [{"label": "Opening", "detail": "Why the project began."}, {"label": "Result", "detail": "What changed because of my work.", "moved": true}, {"label": "Evidence", "detail": "What I did, step by step."}], "footer": "The order changed. Her delivery still needs a fresh recording."}, "default": {"type": "repair", "title": "Your repair · next-answer plan", "mode": "Structured rehearsal", "tracks": [{"label": "Result", "detail": "What changed because of my work.", "moved": true}, {"label": "Opening", "detail": "Why the project began."}, {"label": "Evidence", "detail": "What I did, step by step."}], "footer": "The order changed. Her delivery still needs a fresh recording."}}
- Choice: "Replay the repaired session" → replay
- Author note: Both edits are unscored, plausible next-take plans. The learner changes the visible artifact, not Mira’s historical outcome. This is an unscored supported repair, not a claim that she now speaks better.

## replay — mood: thinking
- Guide: Now she can test that order against the two-minute stop—and hear what survives.
- Visual: {"type": "repair", "title": "Next attempt · ready to record", "mode": "Structured rehearsal", "tracks": [{"label": "Your chosen order", "detail": "{{plan_label}}", "moved": true}, {"label": "Record → stop at 2:00", "detail": "A complete opening attempt."}, {"label": "Replay → revise → retry", "detail": "Check whether the main point fits."}], "footer": "Surprise questions: still untested."}
- Choice: "What was the app really for?" → concept
- Author note: Replay demonstrates changed tool opportunity, not a fabricated successful performance. The next take has not happened. The same visible plan feeds the record-stop-review loop.

## concept — mood: speaking
- Guide: The target was showing her experience—not collecting more practice.
- Visual: {"type": "concept", "name": "Jobs to Be Done", "definition": "The progress someone seeks in a particular situation. Here: present relevant experience within the interview’s constraints, while practising alone. “Job” means that progress, not employment.", "caption": "Mira’s offer explains why she left. It does not prove the app caused the offer."}
- Choice: "Try one changed obstacle" → changed

## changed — mood: thinking
- Guide: Same interview. Same evenings. Change one thing: she loses her thread on surprise questions.
- Visual: {"type": "cards", "items": [{"title": "Alternate version · before that interview", "lines": ["Her opening is already clear within two minutes. An unexpected follow-up breaks her flow."]}, {"title": "Same two tools", "lines": ["Structured: timed opening + organise + replay; no surprises.", "Follow-ups: unseen questions + replay; no complete timed opening."]}]}
- Choice: "Keep structured rehearsal" → changed_timed (set {'second_help': 'structured'})
- Choice: "Switch to follow-up rehearsal" → changed_followup (set {'second_help': 'followup'})
- Author note: Only the obstacle changes. Deadline, interview, availability, desired progress and capabilities stay fixed. This is an alternate earlier preparation case, not a later interview.

## changed_followup (consequence) — mood: thinking
- Guide: You changed the help because the obstacle changed. Here comes a fresh question.
- Visual: {"type": "repair", "title": "Follow-up rehearsal", "mode": "Follow-up rehearsal", "tracks": [{"label": "“What would you change?”", "detail": "A question she had not prepared for.", "moved": true}, {"label": "New response → replay → retry", "detail": "She can inspect where this response loses its thread."}], "footer": "This tests one response, not every future question."}
- Choice: "Keep the useful move" → end

## changed_timed (consequence) — mood: thinking
- Guide: You kept the timed opening. That can refine it; the surprise gap is still untouched.
- Visual: {"type": "repair", "title": "Replay · another prepared answer", "mode": "Structured rehearsal", "tracks": [{"label": "Opening + evidence + result", "detail": "Already clear before the two-minute stop."}, {"label": "Unexpected follow-up", "detail": "None in this mode.", "outside": true}], "footer": "The same repair no longer targets the remaining obstacle."}
- Choice: "Switch modes and replay the repair" → worked_followup
- Author note: Unsuccessful ending of the learner’s attempt followed by a worked path. Do not claim structured rehearsal is useless.

## end (end) — mood: waiting
- Guide: Next time someone asks for a feature, find the progress—and what blocks it.
- Visual: {"type": "cards", "items": [{"title": "Before choosing the help…", "lines": ["“In this situation, they need to get from ___ to ___. What is stopping them?”"]}, {"title": "Next question", "lines": ["Would you recognise the same idea when a customer asks for a completely different product?"]}]}
- Author note: Bounded opening ends here. Parcel transfer and real-world company payoff are outside this candidate. No learning, engagement, retention or hiring effects have been measured.

## worked_followup — mood: thinking
- Guide: Switching brings the missing test: an unseen question, then a response she can review.
- Visual: {"type": "repair", "title": "Worked repair · follow-up rehearsal", "mode": "Follow-up rehearsal", "tracks": [{"label": "“What would you change?”", "detail": "A question she had not prepared for.", "moved": true}, {"label": "New response → replay → retry", "detail": "She can inspect where this response loses its thread."}], "footer": "The opening already fits. The changed conversation needs testing."}
- Choice: "Keep the useful move" → end
- Author note: Supported worked path after the second choice misses the evidenced obstacle. No independent success is claimed.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.

## Design notes

Status: Draft.

- Lens: Repair the thing. Reference beat: Untangle’s local reversibility opening—inspect a wrong-photo delete, add review/undo, replay; Share changes the constraint. Only the inspect/change/replay/changed-obstacle rhythm is borrowed.
- The artifact is Mira’s rehearsal console and its next-answer plan. The learner first chooses which capability to load, sees that mode’s actual affordances, chooses where to move the result in the next-answer plan, and replays the repaired session to see the record/stop/review loop it now permits.
- The move does not silently rewrite her recorded performance. The original recording remains cut before the result. The revised order is a plan, and a fresh recording is explicitly still needed. This avoids inventing fluency gains or implying the app caused the offer.
- First scene: app owner; cancelled five-star customer; goal is to ask why; control is the question to Mira. The unscored hypothesis changes the question and response order, with no grading or invented motive.
- Before preparation choice, the learner writes a progress/obstacle sentence. Its content is preserved in the session log and is unscored. The following mode choice completes the circumstance → progress → obstacle → help chain before confirmation.
- The first help choice protects preparation for either the timed opening or its following conversation. The revealed recording makes the immediate gap visible; the less direct choice keeps the original gap visible and leads to a worked repair.
- Rule arrival: present hypothesis; explicit rewind; original evidence and inference; tool capabilities; chosen tool; tangible edit; replay opportunity; named concept; changed-obstacle application.
- Second move changes only the remaining obstacle. Clear timed opening is now given; unseen follow-ups interrupt the flow. The tools do not change. Every unsuccessful route receives an explicit worked path.
- Short fox lines, stable console shapes, a visible 2:00 stop, and a moving result card carry the causal change. Reduced motion retains the same labels and final states.
- The ending stops at the usable customer question and leaves the next application open. No parcel scene, Netflix scene, prototype edit or deployment.
- Intended reading/play time is roughly 1–2 minutes, unmeasured. Typing a short inference may extend it.
- Concrete risk: the mode choice may still feel like a quiz unless the result-card movement and replay make the rehearsal console feel like an object being repaired. A cold play review must decide; the checker cannot.
- Browser play, clarity, enjoyment, learning and transfer are untested by this designer.
