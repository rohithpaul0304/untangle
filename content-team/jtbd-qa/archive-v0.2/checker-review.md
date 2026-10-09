# JTBD practice checker review

Status: Informed verification of text authoring packet; no running implementation or learner trial tested.
Version checked: JTBD-PRACTICE v0.2, concept JTBD-01; all scenes and items designated v0.2.

## Disclosed inputs and separation

Phase 1 read only the checker role instructions and learner packet v0.1. Independent answers were saved at /tmp/jtbd-qa-first-solve.md before any key was supplied.
Phase 2 read /tmp/jtbd-qa/practice-learner.md, practice-key.md, routes.md and review-draft.md, all v0.2. No source research, project content, web, code, or implementation was inspected. This review is informed verification, not a second blind solve. Historical source accuracy is outside the supplied assessment boundary.

## Verdict

No material answer, feedback, or route defect found within this bounded text assessment. All seven keys match the saved independent answers. The v0.2 changes resolve the two blind-solve wording nuances. Two small authoring limitations and one implementation clarification remain below; none changes a correct answer or blocks the text packet's proposed route.

## Item and option verification

| Item | Key | All option feedback checked |
|---|---|---|
| G1 | B | A correctly distinguishes purchase/activity from purpose. B agrees with the explicit hunger/boredom evidence. C distinguishes product qualities from purpose; it does not assert that thickness was independently observed. |
| G2 | C | A correctly identifies future discovery as inappropriate to the new immediate need. B rejects an unsupported wish to impress. C states the visible deadline-driven purpose. |
| Q1 | A | A reflects today's wish to talk with parents. B properly limits tiredness to last week. C labels the special-treat motive as possible but unestablished. |
| Q2 | B | A and C reject motives absent from the evidence. B reflects identifying late orders and assigning follow-up before Monday. The revised quotation now makes that timing explicit. |
| Q3 | C | A identifies the recording activity. B identifies proposed product qualities. C captures the engineer's need for fault details. The worked path retains the customer's no-repeat requirement. |
| R1 | B | A identifies note-taking as an activity, C distinguishes tool qualities, and B reflects continuity for the next technician. The worked path does not invent additional customer motives. |
| R2 | C | A and B reject unsupported motives. C now says only that the call needs a quiet place; it no longer narrows quiet to an unstated hearing difficulty. |

Every item has exactly one best option within the supplied evidence. No outside product knowledge is needed. No prose grading or universal claim about customer motives is imposed. Worked paths are consistent with the visible situations. There are no calculations or unit conversions in the item content.

## Route coverage and stopping behavior

- Each of five main items has a first-correct route to the next main item and eventually END.
- Each first-error option has an explicit correction target in the key: ACTIVITY/FEATURE/OLD_PURPOSE to R1; INVENTED_MOTIVE to R2. Both correction targets are reachable.
- For an unused correction, both correct and incorrect results return to the interrupted main item as a supported retry, with the incorrect route offering pause first and showing a worked path.
- Correction skip is covered: correction remains unattempted, concept needs review, and the learner can pause or return for the supported retry.
- An exposed correction is never reused as fresh evidence. A subsequent matching error shows the main item's worked path, flags review, and offers pause or its one supported retry. A skipped correction is also exposed, consistent with the one-presentation limit.
- Supported success advances and is explicitly recorded as supported completion, never independent mastery. Supported failure shows the worked path, flags review, and offers pause or advancement; it cannot restart a retry loop.
- Main-item skip is covered for either attempt. An unanswered first item is unattempted; a previously answered item remains incomplete/review-needed. Neither is silently marked successful.
- Pause before submission keeps the same attempt open. Pause after feedback preserves the pending destination. Resume restores the version and attempt budget; submitted history is not overwritten. PAUSED is a resumable stop, not success.
- Final advancement from Q3 resolves to END. Repeated failures consume a finite budget and can finish with review needed. The deliberate user choice to remain paused does not create an assessment loop.
- Maximum submissions is correctly bounded at 5 main first attempts + 2 fresh correction attempts + 5 supported retries = 12. The bound is achievable if both correction types are used and all main items need retries. Skips cannot increase it.
- All returns to a main item clear the prior selection, and append-only history preserves the first response. Version pinning prevents silent regrading.
- No mastery or unlock claim is made at END. The two-correction limit and exhausted-pool fallback are explicitly disclosed as support, including when a worked example has already shown the solution.

## Answer exposure

The learner file contains no explicit answer key or response feedback. G1's answer is intentionally taught by S1 and the definition; this is guided recognition rather than an unseen independent transfer question. Corrective feedback and worked paths can reveal the answer after a committed error, but every return is then classified as supported, which is appropriate.

R1/R2 appear at the bottom of the learner source file. The route specification requires hiding them until opened. This is consistent for a prepared delivery, but a raw-file handout would not enforce that rule. No running delivery was supplied, so hiding and answer-clearing behavior are specifications, not observed behavior.

## Non-blocking limitations / owner

1. **R1 / assessment author:** R1 is a weaker match for OLD_PURPOSE errors from G2 or Q1 than for activity/feature errors: its own situation does not contain an earlier competing purpose. Its closing worked-path reminder and the main-item retry still address the distinction. The review draft already discloses this limitation; do not characterize a correct R1 answer alone as evidence that temporal-purpose confusion is resolved.
2. **END / progress-rule owner:** The four proposed summary counts do not specify their denominator or exclusivity. In particular, a supported success after an exhausted correction pool can coexist with a concept review flag; correction results also exist in history. Before implementation, decide whether counts cover only the five main items and present review flags separately or as overlapping labels. Otherwise a naive display could suggest inconsistent totals. This does not invalidate the 12-submission budget or the current no-mastery rule.
3. **R1/R2 exposure / delivery owner:** Preserve the specified route hiding when turning the source packet into an actual guided exchange. Handing over the complete learner file in advance exposes correction items and prevents calling them unseen later. This is a delivery constraint, not a detected answer-key leak in the proposed guided flow.

## Next check

A human tryout can assess whether people understand the distinctions and support prompts. This document certifies only the bounded text consistency checks above, not enjoyment, comprehension, retention, source history, or implemented behavior.
