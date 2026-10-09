# Candidate A — design notes

Status: Superseded. Founder rejected this opening and the shared interview-prep premise on 7 October 2026.

Lens: **Investigate**. Reference beat: **Duolingo Adventures** character dialogue. Mira supplies motives and circumstances in her own words. The player chooses a hypothesis-linked evidence source, then the order of a recording and voice note. All evidence is available before judging help.

Role: member of the interview app’s team. Event: Mira left a five-star review and cancelled. Immediate goal: find out why. First control: choose a hunch and follow it to a specific piece of Mira’s evidence. Later control: provide the first preparation help in a clearly labelled reconstruction of the past.

Discovery: use is serving progress in a situation. Cancellation can accompany a stated end to the need. In the first preparation case the main result lies beyond the stop; the timed rehearsal offers a way to reorganise and test it. In the alternate case the opening already fits; a new question creates the relevant reviewable response. Nothing claims improved fluency or that the app caused the offer.

The first help buttons couple an action with the obstacle it addresses. This opening checks selection among supplied reasons; it does not claim independent free-text job formulation, transfer, retention or mastery.

Every first-choice branch reveals different evidence first and is acknowledged. No hypothesis is scored. Every preparation branch shows the specific opportunity plus the remaining gap. The unsuccessful changed-case ending offers a worked successful path before the common stop.

Visual cause: the recording places the main result after the 2:00 stop; replay exposes that omission. Reorganising shows a proposed next attempt, not a magically improved recording. The alternate recording puts the result inside the stop. Choosing varied questions replaces the main visual with an unseen prompt and a record/replay path while keeping the prepared opening unchanged beneath it. All information remains labelled with reduced motion.

Target: roughly 1–2 minutes, to measure in play. Four decisions per route: hunch/source, evidence order, first help plus reason, changed-case help plus reason. No forced timer. Meaningful selection remains keyboard accessible through native buttons. The compact fox is preserved from the template. Author status, lens, tap counter and a collapsed session export are only in `?author=1` mode. Decisions are counted on commitment. The ending links back to the installed gallery at `../../index.html`.

Stopping point: Mira’s case closes with the usable question and a later real-company connection. Concrete risk: reading two evidence objects and comparing capabilities may feel like paperwork. The cold play should test whether the character-led investigation creates curiosity before any polished motion is considered.

Validation: structural checker only; no browser play conducted by this designer. The full export follows.

---

deck: /tmp/untangle-jtbd-a/deck.html
title: Mira’s case | status: Draft | candidate: A | lens: Investigate
scenes: 18 | reachable: 18 | decisions (2+ choices): 4 | endings: 1
first consequence (structural taps): earliest=1 | latest=1
longest declared route (structural taps): 12
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# Mira’s case

Status: Draft

## hook (start) — mood: thinking
- Guide: You’re on the interview app’s team. Mira left this. Why did she go? Follow your hunch.
- Visual: {"type": "hook", "text": "Five-star review. Subscription cancelled."}
- Choice: "Maybe it fell short. Read her note." → note (set {'hunch': 'fell-short'})
- Choice: "Maybe her plans changed. Ask Mira." → reply (set {'hunch': 'plans-changed'})
- Author note: Unscored hypotheses. Only the approved hook facts are visible. First choice changes which piece of Mira’s account appears first; no hidden-fact grading.

## note (consequence) — mood: thinking
- Guide: You opened her note. She points to needing less preparation.
- Visual: {"type": "message", "from": "Mira’s cancellation note", "text": "“I don’t need interview preparation right now.”"}
- Choice: "Ask what changed" → present

## reply (consequence) — mood: thinking
- Guide: You asked about her plans. The interviews have stopped.
- Visual: {"type": "message", "from": "Mira · now", "text": "“I accepted an offer. No more interviews planned.”"}
- Choice: "Hear why she cancelled" → present

## present — mood: thinking
- Guide: Five stars and leaving can both make sense. What was the practice for?
- Visual: {"type": "message", "from": "Mira · now", "text": "“I accepted an offer. No more interviews planned, so I don’t need preparation now.”"}
- Choice: "Look back before her interview" → past
- Author note: Her stated cancellation reason, not evidence that the app caused hiring. Next scene explicitly reconstructs the past.

## past — mood: thinking
- Guide: Back before that interview: you’re choosing her first preparation help. Open something she left you.
- Visual: {"type": "message", "from": "Mira · before the interview", "text": "“I want to show why my experience fits. My project answer gets two minutes, then questions.”"}
- Choice: "Play Mira’s recorded answer" → record-first (set {'opened': 'recording'})
- Choice: "Read Mira’s voice-note transcript" → voice-first (set {'opened': 'voice-note'})
- Author note: Historical reconstruction. The player selects concrete character evidence; order changes, both pieces arrive before the help decision.

## record-first — mood: thinking
- Guide: You played her answer. Watch where the main result lands.
- Visual: {"type": "tape", "mode": "late", "title": "Mira’s original rehearsal", "caption": "Her main result comes after the two-minute limit."}
- Choice: "Read her voice note too" → voice-second

## voice-first — mood: thinking
- Guide: You opened her voice note. She knows her project. Practising with someone is harder.
- Visual: {"type": "message", "from": "Mira · before the interview", "text": "“I can describe the project accurately in a relaxed chat. I work late; friends are rarely around when I can practise.”"}
- Choice: "Play her recorded answer too" → record-second

## record-second — mood: thinking
- Guide: Now her recording. Watch where the main result lands.
- Visual: {"type": "tape", "mode": "late", "title": "Mira’s original rehearsal", "caption": "Her main result comes after the two-minute limit."}
- Choice: "Choose her first help" → help

## voice-second — mood: thinking
- Guide: She knows her project. Finding someone at her hours is harder.
- Visual: {"type": "message", "from": "Mira · before the interview", "text": "“I can describe the project accurately in a relaxed chat. I work late; friends are rarely around when I can practise.”"}
- Choice: "Choose her first help" → help

## help — mood: thinking
- Guide: Help her show why she fits, using her preparation time well. Which help—and why?
- Visual: {"type": "capabilities", "items": [{"title": "Timed opening", "lines": ["Record → stop at 2:00 → replay.", "Organise opening, evidence, result; retry.", "No unexpected questions."]}, {"title": "Varied questions", "lines": ["Unseen follow-ups → respond → replay.", "No full timed opening or organising help."]}], "caption": "Both work privately, at her hours. Neither has a cost or time advantage. You can combine them later."}
- Choice: "Time her opening: get the result inside the limit." → first-timed (set {'first': 'timed', 'first_reason': 'result before the stop'})
- Choice: "Vary her questions: prepare for a changing conversation." → first-varied (set {'first': 'varied', 'first_reason': 'respond beyond a prepared answer'})
- Author note: Each answer commits help plus an obstacle-based reason. The circumstance and sought progress are stated before the choice. Choice is conditional best fit, not universal value. No fluency or hiring claims.

## first-timed (consequence) — mood: thinking
- Guide: You chose the timed opening. The stop exposes the missing result; she can reorganise and retry.
- Visual: {"type": "tape", "mode": "reorder", "title": "Timed opening · replay", "caption": "Opportunity: bring the result forward, then test the whole answer again. Unexpected questions remain untested."}
- Choice: "Name what mattered" → concept

## first-varied (consequence) — mood: thinking
- Guide: You chose new questions. She can practise this response; the late opening result is still untouched.
- Visual: {"type": "tape", "mode": "follow-late", "title": "Varied questions · new prompt", "question": "“Why did you choose that approach?”", "caption": "A fresh response can be recorded and replayed. Her full opening has not been revised or timed."}
- Choice: "Name what mattered" → concept
- Author note: Useful benefit acknowledged; observed first obstacle remains. Concept screen gives the worked fit for this case.

## concept — mood: thinking
- Guide [first=timed]: You aimed the help at what was in her way. That’s the useful shift.
- Guide [default]: For that late result, start with the timed opening. Save new questions for later.
- Visual: {"type": "concept", "name": "Jobs to Be Done", "definition": "The progress someone seeks in their situation. Mira wanted to show why her experience fit—not just do more practice. Her late result made a timed, organised opening the first useful help."}
- Choice: "One detail changes" → changed
- Author note: Job means desired progress, not employment. The changed case is an alternate preparation situation, not another interview after cancellation.

## changed — mood: thinking
- Guide: Same interview, same hours. Imagine only this obstacle changed. What does she need first now?
- Visual: {"type": "changed", "text": "“My opening is clear and fits two minutes. But an unexpected follow-up makes me lose my thread.”", "items": [{"title": "Timed opening", "lines": ["Full answer, 2-minute stop, organise, retry.", "No unexpected questions."]}, {"title": "Varied questions", "lines": ["Unseen follow-ups, record and replay.", "No full timed opening or organising help."]}], "caption": "Alternate version of the earlier preparation. Same goal, deadline and availability; both still work privately."}
- Choice: "Time her opening: keep her main answer clear." → second-timed (set {'second': 'timed'})
- Choice: "Vary her questions: practise finding her thread." → second-varied (set {'second': 'varied'})

## second-timed (consequence) — mood: thinking
- Guide: You kept the timed opening. Her result fits—but no surprise question arrives.
- Visual: {"type": "tape", "mode": "fits", "title": "Timed opening · alternate case", "caption": "She can refine the prepared answer again. Responding when the conversation changes is still untested."}
- Choice: "See the help that reaches this gap" → worked

## second-varied (consequence) — mood: thinking
- Guide: You sent a new question. Now the response she loses her thread in can be recorded and replayed.
- Visual: {"type": "tape", "mode": "follow-fits", "title": "Varied questions · alternate case", "question": "“What would you do differently next time?”", "caption": "This exercises the changed obstacle. One response doesn’t prove readiness for every question."}
- Choice: "Close Mira’s case" → end

## end (end) — mood: waiting
- Guide: Mira’s case is closed. A useful product can lose a customer when the need ends.
- Visual: {"type": "concept", "name": "Before you add a feature…", "definition": "“In this situation, they need to get from ___ to ___. What’s stopping them?”", "caption": "Next: use the same question to look at a company you already know."}
- Author note: Bounded opening ends here. No parcel or historical company lesson yet. Voluntary continuation, timing, understanding and enjoyment require playtesting.

## worked — mood: thinking
- Guide: Switch to varied questions. A fresh prompt gives her a response to review and retry.
- Visual: {"type": "tape", "mode": "follow-fits", "title": "Worked path · varied questions", "question": "“What would you do differently next time?”", "caption": "Clear opening → unexpected question → review that response. This reaches the remaining gap."}
- Choice: "Close Mira’s case" → end
- Author note: Supported worked path after the unsuccessful second recommendation. No mastery credit; does not claim performance improved.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
