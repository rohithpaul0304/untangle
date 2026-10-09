Status: Draft
Packet: JTBD-PRACTICE · v0.2 · Authoring rules, no running app

## Sequence and classification
S1 → S2 → definition → G1 → G2 → Q1 → Q2 → Q3 → END.
Main questions G1/G2/Q1/Q2/Q3: objective, one first attempt and at most one supported retry each. Optional written reasons are unscored. Show all main evidence before selection; hide the key and correction items until their routes open.
R1/R2: objective fresh-correction items, at most one presentation/attempt each in the whole run. No assessment result from a shown solution counts as fresh evidence.
Every item and scene uses v0.2; concept JTBD-01. Choice-specific destinations and misconception hypotheses are in practice-key.md. ACTIVITY/FEATURE/OLD_PURPOSE target R1 (find current purpose); INVENTED_MOTIVE targets R2 (limit claims to evidence).

## Complete transition rules
Let O be the interrupted main item and NEXT(O) its next main question, or END for Q3.

| Current event | Show | Destination |
|---|---|---|
| Main first correct | Exact correct-choice feedback | NEXT(O) |
| Main first incorrect, target R unused | Exact wrong-choice feedback; save O | R as fresh-correction |
| R correct | Exact correct-choice feedback | O with answer cleared, supported-retry |
| R incorrect (second error in route) | Exact wrong-choice feedback and R worked path | CHOICE: pause or supported retry O |
| Main first incorrect, target R already exposed | Exact wrong-choice feedback and O worked path; flag review needed | CHOICE: pause or supported retry O |
| Supported retry correct | Exact correct-choice feedback; record supported completion | NEXT(O) |
| Supported retry incorrect | Exact wrong-choice feedback and O worked path; flag review needed | CHOICE: pause or continue to NEXT(O) |
| Skip main item, either attempt | “Left for review.” Mark unattempted if never answered; otherwise incomplete/review needed | NEXT(O) |
| Skip R | “Left for review.” Mark correction unattempted and concept review needed | CHOICE: pause or supported retry O |
| Pause anywhere | Save exact item, route state and pending destination | PAUSED |
| Resume | Restore saved version, evidence and route state; never reset attempt budget | Saved destination |
| END | Counts: independent first successes, completed with support, review needed, unattempted | Finite end; no mastery/unlock claim |

PAUSED is a resumable endpoint, not success. The choice screen has precisely Pause and Continue; Continue means the destination specified in its row. If paused before submission, the same attempt remains open. If paused after feedback, resume at the pending next step. Selections already submitted stay in history. Skipped items are not silently marked correct. An optional later revisit is outside this packet and cannot erase the first run.

## Correction limit
Two fresh corrections cannot cover unlimited first errors. Therefore an already-exposed correction is never recycled as a fresh item. The finite fallback is an explicit worked path plus one supported retry. This is an intentional exception to “every first error gets a fresh item,” imposed by the two-item limit. It remains visible in the review report. No chapter restart or loops.
Maximum submissions: five first attempts + two correction attempts + five supported retries = 12. Every return to O is supported and has a cleared selection.

## Proposed progress record
chapter_id JTBD-PRACTICE; chapter_version v0.2; concept_id JTBD-01; item_id; item_version; immutable selected_response; response_state (correct/incorrect/unattempted/incomplete); attempt_kind (first/fresh-correction/supported-retry); feedback_shown (exact option feedback ID and worked-path ID, if any); return_destination; pending_destination; correction_exposed {R1,R2}; supported_retry_used per main item; review_needed_concepts; paused_state.
Preserve an append-only response history. Pin keys to v0.2; migration requires an explicit new run, not silent regrading. No backend is implied.
