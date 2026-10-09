# Branch notes — B

Status: Draft.

## What is fixed

The only performance evidence is supplied by the Teacher: originally the main result falls after the two-minute stop; in the alternate earlier case the opening already fits, but an unexpected follow-up disrupts it. The offer and cancellation are actual fictional present facts. Neither preparation branch rewrites those facts. No added price, deadline, duration advantage, performance improvement or hiring guarantee. The illustrative recording uses content labels instead of invented project metrics.

## How the repair works

The selected help changes the console. Structured rehearsal visibly stops the existing recording before its result. Follow-up rehearsal instead opens an unseen question and leaves the timed opening unrepaired. In the structured console the learner can put the result first or after the context: both are supported, unscored next-take plans. The choice really changes the order displayed, and the replay carries that exact chosen order into a fresh record/stop/review cycle. The old recording is unchanged, and the new take is still to be tested.

This is the constraint on the reference beat: the replay shows a newly possible check rather than fabricating that Mira immediately becomes fluent. In the alternate case the opening already fits. Reusing the structured console visibly leaves the unexpected-question slot empty; switching mode reveals a fresh question and a response-review opportunity.

## Interpretation and support

- Hook: three unscored hypotheses, each acknowledged with its actual question and Mira’s known account in a different order. No hypothesis is graded.
- Preparation inference: unscored free text, stored in the session log. Review its reasoning independently; a matching tool button does not establish understanding.
- First help: structured rehearsal most directly addresses the disclosed gap. Follow-up rehearsal still offers credible conversation practice and receives a worked switch.
- Plan edit: two reasonable supported edits, no better/worse score. Neither is evidence of independent subject mastery.
- Changed obstacle: follow-up rehearsal most directly addresses the remaining gap. Structured can maintain the opening but leaves the evidenced difficulty untouched; the route supplies a worked change.

## Tooling and pacing

- Local template copy only. Embedded fox block is byte-for-byte preserved.
- Added an accessible labelled rehearsal visual using the same DOM and button system, with a two-minute stop and explicit before/after plan order. Reduced motion retains the complete final state. No dependencies or added assets.
- Learner mode hides candidate/lens/status metadata, tap counter and misleading branch-count progress bar. End log is collapsed and copyable. Footer has ../../index.html for the installed candidate’s return link; it is not expected to resolve at the temporary build path.
- Decisions increment only when a multi-choice button is committed, not on render. Each full route commits four such choices: hypothesis, first help, plan edit, changed-obstacle help. Free text is unscored and not added to that counter.
- Checker: 16 scenes, all reachable, one ending. First feedback is tap 1 on every route. The first preparation consequence is tap 4; the worked switch adds one tap on that branch. Full routes are 10–12 taps.
- Intended duration roughly 1–2 minutes, unmeasured. Reading and typing can extend it.
- Structure and runtime path checks are not browser playtesting, clarity, fun or learning evidence. Shared browser reserved for coordinator and fresh reviewer.

## All complete paths

IDs are author-only. The inference input has no routing effect.

1. `done` / `structured` / `result_first` / `structured` — 11 taps: `hook → reply_done → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
2. `done` / `structured` / `result_first` / `followup` — 10 taps: `hook → reply_done → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
3. `done` / `structured` / `context_first` / `structured` — 11 taps: `hook → reply_done → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
4. `done` / `structured` / `context_first` / `followup` — 10 taps: `hook → reply_done → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
5. `done` / `followup` / `result_first` / `structured` — 12 taps: `hook → reply_done → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
6. `done` / `followup` / `result_first` / `followup` — 11 taps: `hook → reply_done → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
7. `done` / `followup` / `context_first` / `structured` — 12 taps: `hook → reply_done → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
8. `done` / `followup` / `context_first` / `followup` — 11 taps: `hook → reply_done → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
9. `missing` / `structured` / `result_first` / `structured` — 11 taps: `hook → reply_missing → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
10. `missing` / `structured` / `result_first` / `followup` — 10 taps: `hook → reply_missing → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
11. `missing` / `structured` / `context_first` / `structured` — 11 taps: `hook → reply_missing → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
12. `missing` / `structured` / `context_first` / `followup` — 10 taps: `hook → reply_missing → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
13. `missing` / `followup` / `result_first` / `structured` — 12 taps: `hook → reply_missing → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
14. `missing` / `followup` / `result_first` / `followup` — 11 taps: `hook → reply_missing → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
15. `missing` / `followup` / `context_first` / `structured` — 12 taps: `hook → reply_missing → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
16. `missing` / `followup` / `context_first` / `followup` — 11 taps: `hook → reply_missing → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
17. `unknown` / `structured` / `result_first` / `structured` — 11 taps: `hook → reply_unknown → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
18. `unknown` / `structured` / `result_first` / `followup` — 10 taps: `hook → reply_unknown → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
19. `unknown` / `structured` / `context_first` / `structured` — 11 taps: `hook → reply_unknown → past → help → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
20. `unknown` / `structured` / `context_first` / `followup` — 10 taps: `hook → reply_unknown → past → help → timed → plan → replay → concept → changed → changed_followup → end`.
21. `unknown` / `followup` / `result_first` / `structured` — 12 taps: `hook → reply_unknown → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
22. `unknown` / `followup` / `result_first` / `followup` — 11 taps: `hook → reply_unknown → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
23. `unknown` / `followup` / `context_first` / `structured` — 12 taps: `hook → reply_unknown → past → help → questions_first → timed → plan → replay → concept → changed → changed_timed → worked_followup → end`.
24. `unknown` / `followup` / `context_first` / `followup` — 11 taps: `hook → reply_unknown → past → help → questions_first → timed → plan → replay → concept → changed → changed_followup → end`.
