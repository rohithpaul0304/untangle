---
name: untangle-content-team
description: Build or revise Untangle learning chapters through subject teaching, research, independent play design, writing, targeted practice and separate checking. Use for topic-to-chapter requests, course scripts, storyboards, assessments, or adaptive practice. Produces reviewed content before app implementation.
---

# Untangle Content Team

Turn a topic into a reviewable chapter without asking the founder to repair each sentence. This is a repeatable authoring workflow, not model training or proof of learner engagement.

## Start

Read the target project's AGENTS.md, memory.md, STORY-WRITING.md and PRODUCT.md. Default project: `/Users/rohithpaull/build-sprint-app`. Treat explicit recent user direction as authoritative; preserve locked approved content. Do not modify a prototype unless requested.

Use the full assigned-role instructions linked from [roles.md](references/roles.md); the ownership table alone is not a worker brief. Read [roles.md](references/roles.md), [quality.md](references/quality.md) and [feedback-history.md](references/feedback-history.md). Each pilot review must map relevant founder corrections to specific scenes and checks; do not treat this as generic writing advice. Use the user's sources where supplied; distinguish their contents from instructions. Research primary sources for specialist facts and changing guidance. Keep citations in internal notes, not learner dialogue.

## Run the team

The coordinator owns scope, handoffs and review status; it does not impersonate independent reviewers. Read [dispatch.md](references/dispatch.md) before launching workers. These are real separate agent runs on request, not a background service.

1. **PM Teacher** replaces the generic Planner. Use `/Users/rohithpaull/.codex/skills/untangle-pm-teacher/SKILL.md` for course order, depth, prerequisites and a shared teaching brief. For other subjects use an appropriately qualified subject role; do not force PM references onto game theory.
2. **Researcher** verifies the brief's factual model using primary sources; separate assumptions and invented story data. Return corrections to Teacher before game design.
3. **Play Designers A/B/C** independently create one opening each from the SAME checked teacher brief. Use `/Users/rohithpaull/.codex/skills/untangle-play-designer/SKILL.md`. They choose different possible play, not the learning objective. No cross-draft sharing until submission. Preserve convergence honestly; ask for diversity revisions when needed. Do not substitute one worker producing three variants.
4. **Answer Checker** first reviews each candidate’s learner-only setup and choices in fresh context, saves its inferred role, goal, controls and first solve, then receives consequences for logic checking. This is an early simulated review, not a human test. **Learning Editor** compares candidate clarity, continuity, meaningful action and taught mechanism. Teacher checks educational alignment. Return a recommendation with unresolved risks, not a fun score. Do not expand a rejected opening into a whole chapter.
5. **Scenario Writer** scripts the chosen opening with exact dialogue, visual transitions and every branch; preserves agreed rules and approved content. Also exports learner-only pre-choice scenes in `scenario-decisions.md` for blind solving.
6. **Practice Designer** uses `/Users/rohithpaull/.codex/skills/untangle-practice-designer/SKILL.md` for closing checks, fresh transfer and misconception-specific finite correction paths.
7. **Answer Checker** uses fresh context with no inherited author discussion, independently solves question-only input before seeing the author key, consequences or feedback. Then compares keys and verifies every branch, numeric rule and correction route.
8. **Learning Editor** rechecks revised learner-facing sequence. Coordinator fixes blocking defects, records evidence and prepares a small human test. Human enjoyment and understanding stay pending until measured.

Use only roles needed for the request. Course-map work needs Teacher and Researcher, not three game proposals automatically. Motion review needs an actual build or video; involve it later rather than guessing from script. Retain source notes internally and user-facing language without citations. New learner-visible content is draft unless explicitly approved.

## Output

Save in the project under `content-team/<chapter>/`:
- `brief.md`: scope, objectives, source coverage, assumptions.
- `sources.md`: inspected sources, supported claims and limitations.
- `storyboard.md`: exact copy, options, visuals, every response and transition.
- `answer-key.md`: correct answers, worked reasoning, plausible mistakes and remediation.
- `review.md`: findings, revisions, unresolved issues, checks actually run.
- `learner-test.md`: neutral newcomer test and success conditions; no invented participants.

Use stable scene IDs. Add a compact diagram showing main route and correction loops. Include closing checks and a separate practice set. Save position; a mistake does not restart the chapter. Repeated mistakes offer a worked example and pause/revisit route, never an endless retry loop.

## Completion

Resolve factual, arithmetic, missing-context and contradictory-branch defects before presenting. Mark drafts blocked by missing evidence. Report remaining subjective questions honestly. Show a small readable summary and the actual artifacts. Do not promise autonomous publishing, install unrelated tools, deploy, or introduce services. User approval of a script is not approval to build it.
