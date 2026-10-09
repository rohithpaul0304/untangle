Status: Draft · Provisional; opening fun gate pending.
Packet: JTBD-REPAIR-PRACTICE · v0.3 · Authoring only

## Provenance and ID adapter
routes-v0.2-preserved.md is a byte-for-byte copy of archive-v0.2/routes.md. It preserves the existing finite route logic and is not itself the current sequence. The old learner/key originals are untouched. R1/R2 learner and key excerpts are verbatim, version v0.2. Main IDs have changed; no old answer letter or saved attempt may be reused.

Current sequence: FILM-A choice → selected response beat → FILM-B choice → selected response beat → concept beat → JTBD-GA-03 → JTBD-GB-03 → JTBD-QA-03 → JTBD-QB-03 → JTBD-QC-03 → END.
Scenario predictions are unscored, one submission each; either answer advances after its response. Skip advances with unattempted recorded. Pause/resume preserves the pending beat and never submits for the learner. These demonstrations are not independent practice successes.

| Old slot | Current main ID, v0.3 | Correct option ID | Error → existing correction | NEXT |
|---|---|---|---|---|
| G1 | JTBD-GA-03 | OCCASION | EXPLORE → R1; COLLECTION → R2 | JTBD-GB-03 |
| G2 | JTBD-GB-03 | POSSIBLE | SWITCH/STAY → R2 | JTBD-QA-03 |
| Q1 | JTBD-QA-03 | OPEN | TALK/TREAT → R2 | JTBD-QB-03 |
| Q2 | JTBD-QB-03 | HOST | OCCASION → R1 | JTBD-QC-03 |
| Q3 | JTBD-QC-03 | AGAIN | GROUP → R1 | END |

## Current finite rules
Apply the complete transition table in routes-v0.2-preserved.md to current O and NEXT above. First correct → next. First wrong → exact current option feedback, then unused target R. Correction correct → cleared supported retry O. Correction wrong → correction feedback plus preserved worked path, then Pause or Continue to supported retry O. If correction was already exposed, show current O worked path, flag review needed, then Pause or Continue to supported retry O. Never call an exposed correction fresh.
Supported retry correct → next with support recorded. Supported retry wrong → current option feedback and worked path, review needed, then Pause or Continue to next. Skip main → next; never-answered is unattempted, previously answered remains incomplete/review needed. Skip correction → review needed, then Pause or Continue to supported retry O. Pause saves exact open attempt or pending destination. Resume restores that state without a new budget. END reports separate first successes, support, review needed and unattempted; no mastery/unlock claim.
No chapter restart. Five first mains + two corrections + five supported retries = at most 12 assessed submissions, plus two unscored scenario predictions. One first and one supported attempt per main; one exposure/attempt per correction across the run. The preserved route's two-correction limit and worked-example fallback remain explicit limitations.

Progress proposal: preserve the v0.2 fields, but chapter_id JTBD-REPAIR-PRACTICE, chapter_version v0.3; main item_version v0.3 and correction item_version v0.2. Record option IDs scoped to item, exact feedback shown, pending destination, correction exposure and retry budgets. Keep immutable first answers, append later responses, pin the mixed-version key to this packet. No backend exists.
