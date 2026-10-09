# Chapter 1 — source fidelity and teaching review

5 October 2026. Reviewed the supplied professor transcript, the supplied Chapter 1 of The Art of Strategy, the supplied McKinsey article and the current prototype. This reviews teaching quality, not visual polish or learner retention. It does not claim access to missing course videos.

## Finding

The current prototype is not a faithful translation of the sources' reasoning. Source coverage in a document is not equivalent to teaching those ideas in the game. It often tells the learner what happens, gives an obvious action, then attaches a concept name. Adding incremental screens fixes information density but does not restore the intellectual problem.

The user asked for accessible presentation and substantial learning. The prototype confused simple language with simple reasoning. Preserve short screens and concrete actions, but require a meaningful prediction, comparison, or inference.

## What the professor actually does

The supplied transcript begins by referring to a prisoner puzzle already assigned. It then asks what rationality means and challenges the answer that it means emotionless decision-making. It introduces goal-directed choice, asks whether humans behave that way, and explains why rationality is useful as a benchmark rather than a universal description of behaviour.

It next asks whether knowing that someone is rational is sufficient. The answer is developed through layers of knowledge about what other people know. It finally distinguishes an individual optimisation problem from a game: players have choices and goals, but crucially their outcomes depend on one another's choices.

This is a sequence of questions and distinctions, not a string of trivial tasks. It is also a lecture referring to a prior video, not evidence of a Duolingo-style interaction design. Our app should translate its conceptual work into interaction without pretending the professor used our invented game mechanics.

Accuracy notes: the circular wording about common knowledge needs a clearer definition in the adaptation. Rationality/common knowledge are the introductory course assumptions, not requirements of all game-theory models. The prisoner puzzle must use a truthful public statement that at least one person has green eyes, not a statement directly revealing everyone's colour.

## What was lost in the first three games

### 1. Number guessing

Book mechanism: guessing a randomly chosen number differs from guessing against someone who wants to avoid paying you and anticipates your search. The authors also illustrate that an opponent's advice can serve the opponent's interests.

Prototype mechanism: search for a random number, then hide from a disclosed fixed midpoint algorithm. This demonstrates a search rule and exploiting a predictable machine. It does not sufficiently teach strategic interaction with an opponent who anticipates the learner, and no longer contains the book's central contrast in full.

Repair direction: explicitly compare chance with a motivated opponent. Let the learner inspect a simple opponent's objective and what information it had before choosing. Show how that changes the distribution of likely hiding places. Commit the secret before the learner acts; never change it to manufacture a twist. Do not declare a precise best guess without a stated model. Keep the fox as an honest guide, separate from the opponent. Do not replicate the book's rhetorical trap as a cheating game.

### 2. Winning by losing

Book mechanism: Richard's alliance with Rudy makes choosing a finalist costly. Kelly has her own reason to eliminate Rudy, because of audience preferences. Richard can benefit if Kelly makes that selection instead. Physical challenge uncertainty and the possibility of waiting complicate the calculation.

Prototype mechanism: predetermined branches tell the learner who wins and whom they choose, then ask which labelled path they want. It preserves an outcome but removes the need to work out the other contestant's incentive. Simplification went too far.

Repair direction: use consistent names, introduce the final vote first, then let the learner reason from the other contestant's perspective about whom they would choose. Introduce the alliance only when its consequence can be understood. Compare staying, stepping aside, and waiting under explicit assumptions. Do not begin Chapter 1 with all those dependencies. Later placement is a recommendation, not silently approved renumbering.

### 3. Basketball

Book mechanism: a strong player's threat can attract defensive attention, helping teammates even if that player's own scoring falls. A player's visible personal results may therefore understate their contribution. The further example examines how improving one capability changes an opponent's defence and can help another capability.

Prototype mechanism: pass to an unguarded teammate. This teaches a familiar basketball action, not the more interesting inference about strategic response and misleading performance measures.

Repair direction: compare the team's performance before and after defenders focus on the strong player. Let the learner inspect individual scoring and teammates' opportunities, then explain why a decline in individual scoring need not mean the player became less valuable. Use clearly authored example data, not invented historical statistics. Do not present the book's dated hot-hand empirical claim as current scientific consensus.

## Other gaps

- Rationality: the token refusal is useful only if the learner distinguishes goals from consistency. Announcing every preference and then immediately asking which character accepts is a trivial comprehension check. Let learners first expose their assumption about money, then inspect the character's stated values, then apply the distinction to another case. Do not judge the learner's own fairness preferences.
- Common knowledge: the countdown changes both knowledge and timing. It is an accessible coordination example, but insufficient on its own to establish the professor's stronger claim about nested knowledge. Use a careful guided small puzzle to demonstrate the distinction, without falsely equating read receipts with common knowledge.
- McKinsey: inspecting factor labels is not yet applying the article. Learners must make a provisional choice, identify the assumption it depends on, see one assumption change, then reconsider the action and rival response. No single action is universally correct.
- Everyday examples: recommendations such as “communicate clearly” and “plan ahead” are takeaways people already know. An application should change the interpretation of an observed choice or result.
- Assessment: the existing bank mostly checks interpretation and definitions. It needs fresh questions that discriminate the deeper mechanisms above. The current counts of 12 and 24 do not prove adequate depth.

## Teaching standard replacing the previous standard

For every encounter, author these six items before adding screens:

1. The plausible initial belief the learner might hold.
2. The decision, prediction or inference they can make with the information shown.
3. The other player's goal and response, or the information structure that matters.
4. The evidence or changed condition that makes the initial belief worth reconsidering.
5. A concise explanation of why the result occurred, with the concept name.
6. A fresh situation that distinguishes understanding from repeating the last action.

Reveal these one at a time, but do not convert every sentence into a compulsory tap. Interaction should do reasoning work, not merely dismiss text. A learner who already anticipates the result still gets a meaningful next challenge; do not force a wrong answer.

## Proposed revised opening direction

Begin with the professor's question: what makes a situation a game? Compare an individual choice with the same choice becoming dependent on another person's objective and decision. Then develop rationality and the distinction between private knowledge and common knowledge. Use book stories where they sharpen a concept, not as an obligation to make ten equally long mini-games in the source's printed order. Keep the book connections and McKinsey's final application; depth comes from causal reasoning rather than the number of stops.

One promising concrete first encounter is the book's random chooser versus motivated chooser comparison, rewritten so the change in incentives is the event the learner experiences. It needs a complete, non-cheating opponent model and a meaningful transfer question before implementation. The current robot game is not accepted as that finished lesson.

## Evidence available and missing

Available: one foundations transcript duplicated in the attachment; the book's ten tales; full pasted McKinsey text; previously reviewed taxi-payment reading. Course navigation lists titles for Examples of Simultaneous Games and later lessons, but their teaching transcripts are absent. The green-eyed video is referred to, not included. Do not invent the professor's games from course titles or claim the whole course has been reviewed.

No further cosmetic prototype revision is warranted as a substitute for this content correction. Next work should produce one source-faithful encounter, review its reasoning end to end, and only then carry that teaching standard through the chapter.
