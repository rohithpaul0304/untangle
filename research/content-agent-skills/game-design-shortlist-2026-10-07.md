# Open-source game-design skills for Untangle

Research date: 7 October 2026. Public GitHub repository search for game-design skills, followed by primary repository README, actual agent/skill source and license inspection using gstack Browse. No packages installed or executed. This is a focused shortlist, not exhaustive market coverage or a benchmark of generated games.

## Recommended starting source: fagemx/gstack-game

Repository: https://github.com/fagemx/gstack-game
Actual MIT license inspected: https://github.com/fagemx/gstack-game/blob/main/LICENSE

Inspected instructions:
- https://github.com/fagemx/gstack-game/blob/main/skills/game-ideation/SKILL.md.tmpl
- https://github.com/fagemx/gstack-game/blob/main/skills/feel-pass/SKILL.md.tmpl
- https://github.com/fagemx/gstack-game/blob/main/skills/playtest/SKILL.md.tmpl

Game ideation asks for the player's intended experience, designs the recurring action/feedback/reward sequence, challenges whether it is satisfying without progression rewards, and distinguishes imagined enjoyment from observed play. This directly addresses Untangle's worksheet-like pilot. Its stock workflow repeatedly asks the founder to decide: adapt it to use our existing decisions and produce bounded alternatives independently.

Feel-pass inspects input response, anticipation/action/impact/resolution, rhythm, dead time, visual hierarchy and payoff. It requires a playable build or detailed gameplay video and is a diagnostic rather than a content generator. Use only after the interaction exists. Its rigid timing thresholds, subjective score and unsupported statement that 40–50% of feel is audio are not validated universal facts. Do not import these as hard gates for a quiet learning app.

Playtest produces a test plan and observation sheet. It explicitly does not simulate or run human tests. Useful for uncoached play, exact quotes and hypotheses. Its numerical thresholds, sample-size claims and legal/consent boilerplate need independent review; the template is not research proof or legal advice.

These are Claude Code-oriented templates with shared preamble/tool/artifact dependencies. Codex adaptation is required; raw template copying is not a verified installation. Preserve MIT notices if adapting substantive text. Do not carry over the full build/deploy workflow or change the Convex stack.

## Second source: Donchitos/Claude-Code-Game-Studios

Repository: https://github.com/Donchitos/Claude-Code-Game-Studios
Actual MIT license inspected: https://github.com/Donchitos/Claude-Code-Game-Studios/blob/main/LICENSE

Inspected agent sources:
- https://github.com/Donchitos/Claude-Code-Game-Studios/blob/main/.claude/agents/game-designer.md
- https://github.com/Donchitos/Claude-Code-Game-Studios/blob/main/.claude/agents/narrative-director.md

Game Designer defines playable rules, short action cycles, readable consequences, challenge and recovery. Narrative Director defines branching, character motivation, pacing and alignment between story and rewarded behavior. Together they cover a gap in our team: editor/planner roles checked instruction but did not design compelling play.

Adapt selected responsibilities into one small Untangle Play Designer role before the lesson writer. The full studio includes engine/programming/release roles, hooks and repeated permission requests; importing all of it would add unrelated machinery and founder work. Framework names alone are not evidence of design quality. Its own README warns that heavier documentation did not produce the best play quality in its internal comparison; that is a repository claim, not independently reproduced evidence.

## Excluded from open-source recommendation

https://github.com/Stanestane/game-design-skills-bundle

README explicitly identifies PolyForm Noncommercial 1.0.0, commercial-use licensing requirements and source-available rather than OSI open source. Has relevant flow/failure/core-loop audits, but does not meet a straightforward permissive open-source selection for this commercial product. No skill text adapted or installed.

## Proposed agent responsibility

Input: taught concept, correct model, prior approved/rejected examples, audience and device constraints.

Output: three short playable openings with different actions, not three copywriting variations. Each names role, goal, control, visible consequence, uncertainty and what learning changes the player's next move. Select one using concrete failure checks, then produce one complete interaction before any chapter expansion.

Questions it must resolve: Is making the decision interesting? Does the world respond differently? Can the player understand why? Does knowledge improve the next move? Would the activity still offer something without XP or a mascot? Which answer is genuinely checkable and which remains a tradeoff?

Keep truth/answer checking independent. Simulated player review catches possible confusion; only real play can test enjoyment. Preserve every previous founder correction. No claim these sources guarantee fun; no output tests run yet.

Next proposed action: adapt selected MIT game-design instructions into an Untangle Play Designer, then compare three first-minute candidates before writing another full chapter.
