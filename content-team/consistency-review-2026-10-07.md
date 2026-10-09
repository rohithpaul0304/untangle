# Team consistency review — 7 October 2026

Status: AI-checked

Scope: repair the rebuilt team's instructions and deck-checking tool. Content creation remains paused. No course, learner script, deck HTML, app prototype, or locked lesson was edited.

## Resolved

- Startup instructions now protect both blind answer checking and cold deck review from author context. The teaching brief is sent only to roles that need it.
- Teacher and Learning Scientist are separate workers for sign-off. Playtest Lead compares candidates; coordinator records selection.
- Quality rechecks the expanded full scene before practice. Meaning-changing repairs invalidate affected checks; changed play is reviewed again.
- Candidate play review still precedes exhaustive answer checking, while Intake/Teaching verify the premise first. Known false claims never pass because they seem entertaining.
- Builds require an explicit build request. Deck-only authoring and testing remain valid. Every authorized build has a state-model owner and instrumentation plan before construction.
- Status labels now agree. Human-tested means a real test occurred, not that it succeeded. AI-only play review is recorded as design evidence, not human enjoyment. Material assumptions and evidence limits remain visible.
- Unresolved rules or accessibility defects remain failures even when someone is assigned to fix them.
- Team count corrected to 11 teams and 24 role contracts; current diagram includes scene rechecks, optional build and defect routing.

## Checker repair

The old checker used shortest-route distances as though they were longest-route pacing. It could pass a quick branch while missing a slow branch. The new checker reports earliest/latest first-consequence distances over every declared route, preserves longer paths through merges, flags pre-consequence cycles and endings, rejects broken targets, and checks that reachable scenes have a path to an ending. Cycles are never reported as a finite longest route.

Conditional branches are conservatively included regardless of actual variable reachability. This is a structural check, not runtime-state simulation, measured reading time, or a human engagement test. Conditional targets require a default fallback. Actual conditional routes still need browser play when content is authorized.

## Verification

- 30 synthetic regression tests pass against each installed checker copy.
- All four existing example/template decks pass the checker; their authored HTML remains unchanged.
- Shared studio and Untangle checker/test files are identical.
- All five skill packages pass the Skill Creator format validator.
- Local Markdown references resolve.
- Separate reviewer reread the final startup rules, pipeline, role ownership, project rules and diagram: no remaining blocking contradictions in those inspected files.

No browser UI changes were made or tested in this pass. No full content-team trial or human learning test occurred. Next step, when the founder resumes content: one opening through the revised workflow before a full chapter.
