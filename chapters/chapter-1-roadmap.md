# Chapter 1 — Journey map and pause/resume

Text-level product direction, 5 October 2026. Reference: the founder’s supplied Duolingo path screenshot. Borrow the idea of a visible staged journey, not its artwork, round node shapes, layout, currencies or navigation. No new interface or save system is implemented yet.

## Original direction — A fox-led expedition

A clean illustrated map connects small destinations: a game table, camp, basketball court, harbour, market, workshop, clearing and railway station. Use compact landmark cards joined by a path, with readable names and one short goal on each card. The scenery supports navigation; it must not make the next action harder to find or require panning through a giant landscape.

Keep the softer approved fox beside the current destination or in the bottom companion area. A welcoming gesture points to Continue; a short reaction marks a finished stage. Avoid a permanent bouncing character or a large fox covering the map. Do not imitate Duolingo’s coloured discs, star badges, energy counters or bottom navigation just because they appear in the reference.

Header: Chapter 1 — Think strategically. Under it, show the current region and progress. A prominent Continue card names the precise unfinished activity. Example: “Pass to the open teammate — try the changed defence.” Its button says Continue game, Continue explanation or Continue quiz according to what it actually opens.

## Four regions, fourteen stages

The chapter remains one substantial learning experience. Regions make it readable and resumable; they are not separate purchase gates or new chapters.

### Region 1 — Other people have plans

1. Find my hidden number. Search, switch roles, then explain game theory, players, goals and rationality.
2. Win the final, not every round. Look ahead to the finalist and audience vote.
3. Pass to the open teammate. Observe a defence responding to the team’s play.

### Region 2 — Your goal changes your move

4. Protect a lead or catch up. Sail as leader, then challenger.
5. How firm should your offer be? Bargain and inspect what locking an offer removes.
6. Help your future self. Arrange a future choice and consider flexibility.
7. Who goes first? Examine shared benefits, individual costs and changed incentives.

### Region 3 — What do they know and value?

8. Do we both know? Introduce shared information and common knowledge. The one-person/two-person green-eyed explanation is a guided side activity here; larger groups stay optional.
9. Don’t become predictable. Rock–paper–scissors and genuine random selection.
10. What does the other person know? Private information and selective offers.
11. The other person isn’t you. Different goals, taxi perspectives and the supplied payment thought experiment.

### Region 4 — Put it together

12. Run a railway. McKinsey’s final teaching application: responses under changing conditions.
13. Check what stuck. Closing multiple-choice check with explanations.
14. Try it somewhere new. Separate practice quiz with fresh scenarios.

The personalised recap follows Stage 14 within the chapter finish screen, rather than adding a decorative stage with no task. Chapter 2 then appears with its existing app-access/completion conditions.

## Interest and progression

The map shows the whole chapter and makes the main path clear. The initial interest choice can start learners at an accessible mystery or sports activity; foundational teaching follows whichever opening they play. Completed activities remain completed if they return to the default sequence. Advanced stages require their prerequisites, rather than arbitrary engagement locks.

An unready destination can show its name, goal and the prerequisite: “Learn about players and choices first.” Do not imply that all remaining stages are playable already or all candidates have been published. Unreleased stages say Coming soon; a visual roadmap must not misrepresent a text draft as a shipped course.

Optional deeper examples appear as branches, not barriers across the main path. AI-recommended review is a separate relevant stop with an explanation of why it was suggested. It must not reset the main chapter progress or scatter new compulsory nodes after every mistake.

## Stage states

- Ready: available to start, with a concrete goal.
- In progress: unfinished; shows the saved activity and Continue.
- Completed: activity requirements finished; replay available. This does not automatically mean permanent mastery.
- Suggested review: relevant concept needs another look; keep completion evidence intact.
- Not ready: required prerequisite is stated.
- Coming soon: not released; do not promise an unlock through playing or installing.

Within a game, discovery, explanation and changed-situation practice are saved separately. Finishing the first round does not prematurely mark the whole stage complete. A guided correction and an independent answer are distinct evidence.

## Pause at any time

Provide a visible Return to map action throughout games, explanations and quizzes. Do not make a person finish a whole game before leaving, lose earned progress for closing the app, or display a punishment for taking a break.

Save after each meaningful action: stage and scene, player’s committed move, opponent’s committed move, authored rules/version, outcome already revealed, reflection/explanation already shown, quiz responses and their feedback exposure. Save temporary answer selection too, while distinguishing it from a submitted answer.

Returning should restore the same problem, not generate a different hidden number, deal, opponent move or question. A pause must not let the learner reroll an unfavourable result. An outcome committed before a pause stays committed. Restore animation at a sensible settled point with a short recap; do not needlessly replay a long animation or advance beyond an unseen explanation.

Examples:

- Hidden number, guess two: return to the same secret, remaining guesses and eliminated stones.
- Basketball after a pass: restore the resolved outcome and the next useful action without performing a duplicate pass.
- Concept explanation: return to the same explanation step, not the beginning of the whole chapter.
- MCQ check: preserve which answers and explanations were seen.
- Independent practice: restore the same question set, submitted and draft answers, and which help was requested. Preserve the original score separately from retries.

On return, show one short line: “You were comparing the new defence.” Continue places the learner back at that step. Replay and Start over are separate choices; replay does not erase completion or award duplicate XP.

## Save honesty and access

Convex remains the planned backend. This document defines expected behaviour; current prototypes are not evidence that chapter state sync works. Account-linked progress should restore on other supported devices when sync has completed. Without an account, any local progress must be described as tied to the current device until linked.

If a move cannot sync, preserve it locally where supported and show a brief pending-save state. Never claim progress is safely synced before confirmation. Reconcile saved moves and rewards without duplicate attempts when connection returns. Changing published content must not silently replace a paused problem; preserve its version or explain an explicit migration.

Respect reduced motion and larger text. Labels convey progress without relying on colour. Controls remain readable and usable without decorative motion. A long map may scroll, but Continue must remain easy to reach and the current stop easy to locate.

## Before implementation

Review the text-level stages and game rules, then prepare a static map design for founder review. After the story and map are agreed, build and test exact resume behaviour: leave before committing a move, after commitment but before its animation ends, during teaching, on an unanswered question, after quiz submission, and during a failed save. Verify no rerolls, skipped teaching or duplicate rewards. No design or runtime implementation is implied by this draft.
