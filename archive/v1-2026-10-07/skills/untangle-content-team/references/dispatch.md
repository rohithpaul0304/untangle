# Real worker dispatch

Launch separate workers for independent tasks when available and authorized. Current host supports three child workers concurrently, plus coordinator. Do not claim all roles run at once. Run three designers together; after their submissions, run reviews in a later wave. Do not make user manage workers.

## Minimal assignment packet

Every worker gets the full assigned-role file linked in roles.md. Every worker gets: role; requested artifact and exact path; relevant skill path; permitted source files; user's latest direction and approval boundary; scope/no-build boundary; expected concise output; honest evidence labels. Pass only inputs needed for the job. Explicitly prohibit reading other designers' drafts before submission. Reviewer receives learner-only questions first, not hidden keys. Launch blind reviewers with fresh context (for collaboration tools, fork_turns="none"), not an inherited author conversation. Supply an explicit file allowlist and record disclosures. A reused worker exposed to keys, outcomes or author reasoning cannot perform the blind solve; choose a fresh worker or report that blind review is unavailable.

Root alone dispatches the three Play Designers. Each assignment explicitly says single-designer mode: one proposal, no nested delegation, no other drafts.

Scenario Writer must save a separate `scenario-decisions.md` containing only learner-visible setup, rules and choices before consequences, alongside the complete storyboard and key. For sequential decisions, reveal only earlier information a learner would already have seen. Checker saves each first solution before receiving that decision’s outcome, author reasoning or answer key. Then inspect the full script for branch consistency. Practice items use the same two-stage protocol.

Suggested waves:
1. Teacher brief; Researcher verifies. They may begin independent source work concurrently, but Teacher's final brief must incorporate verified corrections before downstream work.
2. Designers A/B/C independently; no shared drafts. Same learning objective, open interaction choice.
3. A fresh Answer Checker reviews candidate learner-only files before receiving consequences, saving first interpretations and solves. Then Editor and Teacher assess candidates; record defects and selection rationale. Only then writer expands within authorized scope.
4. Practice Designer authors items/key/routes. Checker gets learner file only, saves first solve, then sees key. Editor inspects language and route clarity separately.

Reviewers must not be the authors of what they check. A worker may take a later unrelated role if it did not author or read the hidden key. Record actual roles and artifacts, not imaginary persistent staff. If capacity fails, wait/reuse suitable nonauthor workers. If independence cannot be achieved, report the limitation rather than silently calling coordinator self-review independent.

## Completion record

Keep a short manifest: artifact version, author role, reviewer role, inputs disclosed, checks run, defects fixed, unresolved questions, and human-test status. Source availability does not prove its claims; skills are tools, not authorities. Keep first drafts when comparing significant revisions. Never treat a passed YAML validator as quality validation.

## Scope and escalation

Resolve routine wording, file organization and tools autonomously using prior user decisions. Ask only for missing product choices that materially change direction. Do not introduce auto-publishing, external messages, deployments, scheduled background runs or new paid services. A team setup request does not authorize rebuilding the whole app.

Designers must also start with fresh context and identical explicit briefs; inherited coordinator history can disclose a favored draft. Blind-checker packets exclude author memory and briefs until phase 2, even when general role instructions normally require them. Record review invalidation when a fact, rule, key or branch changes.
