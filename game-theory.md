# Game theory — curriculum and exercises

## Current chapter order — 5 October 2026

Chapter 1 is now the introduction to game theory: [You’re not choosing alone](chapters/chapter-1-introduction.md). Chapter 2 holds the previously drafted prisoner’s dilemma and cigarette advertising story: [Can We Trust Each Other?](chapters/chapter-2-prisoners-dilemma.md). These are text-level working drafts; the new introductory scenario has not been approved or prototyped. This order supersedes older Chapter 1 assignments and the earlier six-chapter numbering below. The later roadmap needs a separate revision; do not infer renumbering or new releases. Keep Chapter 1 as the complete website introduction and continue Chapter 2 onward in the app under the existing completion/access rule.


Updated: 4 October 2026.

This is Untangle's curriculum source of truth: chapter order, lesson objectives, exercise designs, answer logic, and targeted practice. PRODUCT.md owns platform, access, saving, and release behaviour. This document is a design specification, not a published question bank or a claim that the app exists.

## 1. Reference and teaching approach

Reference supplied by the founder: Giacomo Bonanno, *Game Theory: Parts I and II, with 88 solved exercises* (2015), University of California, Davis. Local file: `/Users/rohithpaull/Downloads/847845893.pdf`. The supplied PDF has 242 pages; printed book page 1 is PDF page 6.

Reviewed its contents, introduction, early explanations, and sample exercise sections across all six chapters. This is not a page-by-page mathematical audit. The reference emphasises concepts followed by exercises, chapter challenges, and detailed solutions. We will use that learning pattern with short interactive lessons, original scenarios, explicit checks, and explanations after an attempt.

The title page labels the book CC BY-NC-ND 4.0. This plan uses it as a subject reference and creates original exercise designs; it does not import the book's wording, diagrams, or 88 exercises into the product. Any proposal to publish the book's material itself needs a separate permissions review.

Use the six main topic areas as a curriculum spine, not a claim of complete textbook coverage. Proof-heavy sections, auctions, mechanism design, infinite strategy sets, and advanced equilibrium refinements are enrichment work rather than prerequisites to finishing the introductory app course. The mapping below makes those omissions visible.

Each concept follows: first exercise set → “What did you learn so far?” → visible concept name and explanation → guided practice → independent practice → final reflection. The full teaching sequence is specified below; the exercise catalogue is not the screen order. Target 3–5 minutes per lesson, subject to testing. A chapter contains several lessons and is not promised to fit into five minutes.

## 2. Chapters and access

| Chapter | Learner-facing title | Core concepts | Reference reading, printed pages | Where |
| --- | --- | --- | --- | --- |
| 1 | When your choice meets someone else's | Players, choices, preferences, payoff tables, best responses, dominance, Nash equilibrium | §§1.1–1.2, pp. 5–15; §§1.5–1.6, pp. 26–33; exercise section pp. 37–44 | Entire core chapter on website and in app |
| 2 | Think one move ahead | Decision trees, full plans, backward induction, credible actions | §§2.1–2.5, pp. 56–73; exercises pp. 74–81 | App, after chapter 1 |
| 3 | What can the other person see? | Hidden actions, information sets, subgames, sequential credibility | §§3.1–3.5, pp. 96–120; exercises pp. 121–127 | App, after chapter 2 |
| 4 | Make decisions under uncertainty | Probability, expected money, utility, risk preferences | §§4.1–4.3, pp. 145–162; exercises pp. 163–166 | App, after chapter 3 |
| 5 | When being predictable hurts | Mixed strategies, expected payoffs, mixed equilibrium | §§5.1–5.4, pp. 172–190; exercises pp. 191–197 | App, after chapter 4 |
| 6 | Put timing and uncertainty together | Random choices at decision points, outcome probabilities, sequential equilibrium checks | §§6.1–6.3, pp. 208–220; exercises pp. 221–226 | App, after chapter 5 |

The reference's solution sections begin on printed pages 45, 82, 128, 167, 198, and 227. They are study references, not product answer content.

A short orientation lives inside chapter 1, not behind a separate signup or installation step. Chapter 1 must be a useful, complete experience. Show the whole chapter list on the website, with later chapters clearly labelled “Continue in the app.” Do not truncate chapter 1 halfway through an exercise.

Access has two conditions for chapters 2–6: the learner is continuing in the app, and the previous chapter is complete. Installation is not chapter completion. Account creation is not chapter completion. Unreleased chapters say “Coming soon”; do not promise that installing unlocks unpublished content. This is an app-install progression rule, not a purchase rule.

## Approved interaction direction — playable simulations

The exercises below are learning objectives and scenario material, not a requirement to present a quiz. Discovery sets should be playable runs with visible consequences. Guided exercises become replay and comparison tools; independent exercises become fresh situations where the learner acts and briefly explains the result. Retain the reflection → named concept → further practice sequence after the initial simulations.

Use the approved fox throughout. The earlier thread mascot is retired as a product direction; do not overwrite or delete its concept file. The first simulation should let learners operate the Lunch Rush price sign, open the stall, see daily earnings, and replay a changed price with the other stall held fixed. Preserve the authored rules and outcomes. PRODUCT.md defines the experience; CHARACTER.md defines the companion.

## Teaching sequence — experience, name, explain, apply

The app should feel like a guided conversation with a problem. Learners first have enough information to make a meaningful attempt. They then get language for the pattern they have encountered, and use that language to solve the rest of the exercises. Do not make them finish an entire chapter before explaining its concepts.

### Stage 1: First exercise set — “Try this”

Begin with two or three closely connected decisions in one concrete situation. State the goal, available choices, what the other person can see, and how outcomes work. Reveal consequences after each attempt, but save the formal concept explanation for the end of this opening set. Teach any prerequisite vocabulary immediately if it is necessary to understand the task; withholding the new concept is not a reason to make instructions mysterious.

The questions should form a small investigation: choose for yourself, inspect the other person's incentive, then compare the resulting outcomes. Use one idea at a time. Do not make every first set a calculation exercise or pretend a preferred personal choice has one correct answer. A question about the game's fixed rules can be scored; an open strategic choice is an observation to discuss.

Wrong answers do not delay the explanation. After an attempt, show the relevant consequence and let the learner continue. A “Help me compare” action can highlight the relevant two values without giving away the entire lesson. Opening attempts are recorded as pre-explanation evidence, not failure of a concept we have not taught yet.

### Stage 2: Pause — “What did you learn so far?”

After the first set, ask the learner to describe the pattern. Prefer a short choice among explanations with an optional one-sentence answer, so typing is not a barrier. Use a neutral question such as “What changes when only you switch?” rather than “Did you notice that the selfish choice is better?”

Respond to the actual answer. If they noticed part of the pattern, acknowledge precisely that part and explain what is missing. If they are unsure, show the comparison again. Do not use generic praise or claim they have mastered the topic. This pause bridges their experience to the named concept; it is not a high-stakes quiz and never blocks the teaching card.

### Stage 3: Concept reveal — the name must be visible

Show a dedicated card with the exact concept name as a prominent heading: **Nash equilibrium**, **Best response**, **Backward induction**, or the relevant term. Under it, provide a short plain-language definition, connect it to the exact exercise the learner just attempted, then explain one important limit or common confusion.

The default card should be readable on a phone, with an optional “Show the reasoning” expansion for a fuller worked explanation. An optional expansion must not hide information required for the next exercise. Keep the term visible as a small lesson label during subsequent practice and available in the recap. Concept names can appear on the chapter map; it is the definition and explanation that come after the first exercise set, not a secret word that must be hidden everywhere.

The card always shows, including after a perfect first set. If the learner struggled, use more scaffolding; do not replace the named concept with an endless stream of questions. Match the example to their answer while preserving the reviewed explanation's meaning.

### Stage 4: Rest of the exercises — “Now use it”

Offer a guided set that uses the concept explicitly, then an independent set in a different situation. In the guided set, highlight the comparison or reveal one step at a time. In the independent set, remove those cues. Include at least one counterexample: a tempting answer that fails for a clear reason. Changing only names and numbers is not enough to test transfer.

AI can choose from reviewed variants based on the learner's difficulty: reading the outcome table, holding the other person's choice fixed, checking both players, or applying a definition too broadly. It cannot skip the concept reveal, generate a new answer key, or move to a locked chapter. A confident wrong explanation deserves a targeted comparison, not just an easier arithmetic problem.

### Stage 5: Close — “What you learned”

After the remaining exercises, show the named concept again and a concrete summary. Separate “You practised…” from evidence such as “You correctly checked both players in a new situation.” If a check remains unresolved, say “Next, practise…” rather than issuing a mastery badge. Ask a fresh independent question when needed, save completion, and show the next lesson.

This creates two useful pauses: **“What did you learn so far?”** before the concept reveal, and **“What you learned”** after practice. The first encourages reflection; the second consolidates the concept and states the next step. Neither is a long lecture.

### Standard set size and content records

Proposed default per concept: 2–3 discovery prompts, one reflection prompt, a named teaching card, 2 guided applications, and 2 independent applications. These are pacing defaults to test, not a fixed quota that forces every lesson to be the same length. A chapter combines several such concept loops; split an overloaded loop into resumable parts instead of claiming it fits five minutes.

Each exercise record identifies its role: discovery, guided practice, independent check, or later review. Each concept also has a reflection prompt, teaching-card copy, worked explanation, misconception feedback, and recap copy. Save the learner's exact place in this sequence so reopening never jumps from an opening exercise straight to an exit check. Record when an answer was given relative to teaching, whether a hint was used, and whether the answer was already shown.

## Wording review — 4 October 2026

User feedback: the lunch-stall example can stay, but “Standard” and “Discount” were confusing. The opening prototype keeps the same game and payoffs. Player buttons now say **Keep your price** and **Lower your price**. Outcome labels say **Same price** or **Lower price**. Every money amount represents **daily earnings after costs**, not the menu price of a lunch. State that distinction before the first exercise and keep it visible with outcomes.

Use “Mira keeps her price”, “This time, Mira lowers her price”, and “What would help Mira?” instead of terminology-heavy prompts. Explain one-person changes as “you change; Mira keeps her price” before using “changing alone” in the Nash equilibrium definition. Older Standard/Discount labels in the mathematical design notes below refer to these same choices and must not be copied into learner-facing screens.

The brief meeting-friends replacement was not retained: the founder clarified that the example should remain, with simpler wording. This feedback concerns terminology; it is not evidence that the revised lesson has been validated with learners.

## Playful lesson experience — short rounds, visible discoveries

The requested direction is Duolingo-inspired pacing and warmth with an original Untangle identity. This is a creative design direction, not a review of Duolingo's current features. Turn the existing teaching sequence into something the learner plays: a small situation, a choice, an animated consequence, a discovery, and a new challenge. Do not replace learning with points or turn the curriculum into a long quiz sheet.

### The feeling

Use colourful illustrated scenes, chunky answer buttons, a clear progress trail, and friendly reactions. The tone is curious and lightly cheeky, suitable for young adults. Characters can be surprised by the bill, competitive about lunch stalls, or puzzled by a negotiation. The joke belongs to the situation, never to a learner who struggles. Use original character art and copy.

Approved companion: **the orange fox**, with raspberry ear interiors and tail tip. Its name is not yet chosen. Use the same identity and emotion language across every chapter; see CHARACTER.md. It is a companion, not a hidden opponent or an authority claiming to read the learner's mind. It points out the next useful comparison, celebrates a completed activity, and introduces the concept card. Character dialogue is scripted unless clearly presented as AI help.

A small animation can make a number meaningful: the bill unfolds, two price boards flip together, or a route lights up as the player checks a branch. In simultaneous games, animate committed choices together or explicitly state they were chosen independently. Animation order must not falsely imply that a player reacted to a hidden action.

### A round should ask for one thing

Keep one clear in-scene action at a time. Let learners change the relevant object, run the scene, observe consequences, and replay. Use a short question only when reflection or an understanding check calls for one; answer-choice screens are secondary to the simulation. Show complete rules through a persistent “Game rules” button and put any essential rule directly in the question. A playful headline must never hide the information needed to answer.

Vary interaction types across a lesson: tap a decision; tap the person who benefits from switching; select a path through a tree; match an outcome with its explanation; choose which sentence fixes a flawed argument. Offer tap alternatives to any dragging, labels alongside colour, and text equivalents for animated outcomes. Do not add a countdown to ordinary learning questions.

Use a bottom action that changes with the stage: **Check**, **See what happened**, **Show me the idea**, **Try a new situation**, or **Continue**. A response is committed only once; repeated taps must not grant extra rewards or record extra attempts.

### Rewards that support the lesson

Start with a visible round-progress trail, a concept-card collection, and **10 XP per newly completed lesson**. Explain XP once as experience points earned for completing lessons. Award it after the required activities and recap, not per correct tap, not for an untested personal choice, and not based on response speed. Store the award once for each learner, lesson, and reward version; replaying or transferring progress does not award it again. Correcting a mistake and using hints do not reduce the reward.

The first concept reveal adds a card labelled **Introduced** to the learner's collection. Independent checks may later change its status to **Practised**, with a separate “Review suggested” cue when appropriate. The card is a record of learning activity, not a certificate of mastery. Each card contains the exact concept name, its definition, and a familiar example and can be reopened during practice.

A chapter challenge is a “Final round” using already taught ideas in a new situation. It is not a timed boss fight or an extra surprise requirement. The existing independent chapter checks determine completion and unlocks; XP does not. On completion, animate the next published chapter opening. Chapter one's reward and recap come before the install prompt.

Daily streaks and leaderboards remain later options. There are no lives that run out, lost points for mistakes, paid retries, or shame messages. Sound and gentle haptics are optional; respect device settings and reduced-motion preferences. No celebration should block the next action.

### Feedback should carry the lesson

For a correct objective comparison: **“Yes—₹40 beats ₹30 when the other stall keeps its discount.”** This tells the learner why it works. Do not reward a business or moral choice as “correct” unless the question explicitly asks about the stated goal.

For an incorrect comparison: **“Let's freeze the other stall's choice. Which amount belongs to you now?”** Highlight only the relevant values and offer another attempt or a worked example. Once the answer has been shown, record any subsequent response as guided practice rather than independent evidence.

For uncertainty: **“Not sure yet? Try changing just one choice.”** Always keep help easy to reach. After the discovery set, proceed to the explanation even if all opening answers were wrong.

After a learner fixes an error: **“That's the difference: one person changed, not both.”** Avoid generic “Genius!” or “You're a master!” messages. A celebration should match what was actually completed.

### Playable story treatment — Lunch Rush

Use the existing two-stall Nash-equilibrium model, with its exact profit table unchanged. Give Stall A the learner-facing name **Your stall**, and Stall B **Mira's stall**. A short label says **Practice simulation · fixed profit rules**. Both sellers choose Standard or Discount independently for the same day. Every outcome uses the authored amounts: Standard/Standard=(₹60,₹60), Standard/Discount=(₹30,₹80), Discount/Standard=(₹80,₹30), Discount/Discount=(₹40,₹40).

**Opening scene:** “Lunch rush. Two stalls. One street. Pick tomorrow's price plan.” Let the learner explore both options before committing. The complete profit comparison is visible; no hidden rival AI decides the answer.

**Discovery round 1 — “Mira keeps her standard price.”** Ask which of your plans earns more, holding Mira's choice fixed. Offer Standard: ₹60 or Discount: ₹80. Show the two stalls' receipts after the answer.

**Discovery round 2 — “New case: Mira discounts.”** This is explicitly a separate comparison, not a reaction to the learner's last move. Offer Standard: ₹30 or Discount: ₹40. The learner sees that the best response remains Discount.

**Discovery round 3 — “Switch seats.”** Put the learner in Mira's position while Your stall is fixed at Discount. Compare Mira's ₹30 at Standard with ₹40 at Discount. Now both players' incentives have been examined. Return to the overview with both discounting and each earning ₹40.

**Reflection — “What did you learn so far?”** Ask “Can either stall earn more by switching alone?” Choices: **Yes**, **No**, **Need a hint**. Let learners tap each stall to test its alternative. Then show the supported observation: “Neither stall gains by switching alone. Yet both would earn more if both used Standard.”

**Discovery celebration:** the fox perks up its ears and gives a delighted reaction. Display **“There's a name for this.”** Reveal a prominent **Nash equilibrium** card with: “Nobody can improve their outcome by changing only their own choice while everyone else keeps theirs the same.” Beneath it: “Both discount: ₹40 each. Switch alone: ₹30 for the switcher.” Add “It doesn't have to be the best result for everyone.” The full reviewed explanation remains one tap away.

**After the reveal — “Break the balance.”** Show both stalls at Standard, earning ₹60 each. Ask the learner to find a profitable one-player switch. Correct answer: either stall can switch to Discount and earn ₹80 while the other remains Standard. The consequence animation exposes why this outcome fails the Nash test.

**Fresh challenge — “Meet me where?”** Move to the existing Library/Café coordination game. Let learners identify both matching-location equilibria, then explain why mismatched locations fail. Keep **Nash equilibrium** visible as the concept label. Use a separate short follow-up for the two-lane game with no pure-strategy equilibrium, rather than stretching one sitting indefinitely.

**Lesson finish:** “You checked both players. That's the key.” Show **What you learned**, the concept card, **+10 XP** if this is the first completion, and **Next: [actual next published lesson]**. The recap explains the one-player-change test. If independent checks remain, show “One more comparison to practise” and retain the completed stages; do not show a false completion or reset the learner.

The label **Lunch Rush** adds personality; **Nash equilibrium** supplies the actual learning vocabulary. Use both. Other lesson names can be **The Bill Trap** for shared costs, **Your Move** for best responses, **One More Offer** for negotiation, and **Keep Them Guessing** for mixed strategies. Use original final titles and original scenes rather than another product's artwork or characters.

### Chapter-one ending

Give the website learner a real finish: a chapter-completion animation, the concepts introduced and practised, and one sentence about what they can now do. Then offer **“Continue to Chapter 2 in the app”** with a truthful availability state and a way to carry progress over. Include **“Review Chapter 1”** as a secondary action. No fake urgency, mystery reward, or unfinished exercise is needed to make continuing appealing.

## 3. Completion and review rules

Proposed initial rule, to validate with learners:

- A lesson is finished after the learner attempts the first set, reaches the reflection and named concept explanation, completes the required post-explanation activities, and sees the final recap. An error must not force them to restart the chapter.
- A chapter is complete after its core lessons and a short exit check with at least one independent check per core learning objective.
- If an objective is missed, provide a worked explanation, a guided practice item, then a different independent check for that objective. Keep successful objectives recorded.
- “Show solution” helps learning but does not count as independently passing that item. A new item is required afterward.
- Once all core objectives pass, unlock the next published chapter in the app. Later review errors do not relock completed chapters.
- Completion is a progression milestone, not proof of lasting mastery. Track later retention separately.

Each required objective needs at least two distinct assessment items plus a guided practice item before its chapter is publishable. Use new contexts or reasoning tasks, not just shuffled choices. The exercise designs below are seeds: chapters are not release-ready until their full question bank, alternate checks, explanations, and accessibility have been reviewed.

## 4. Chapter 1 — When your choice meets someone else's

**Purpose:** recognise a strategic situation and explain why an individually sensible choice can produce a poor shared outcome.

**Six short lessons:**

1. Who is choosing? Identify players, actions, and what each person knows.
2. What does each person want? Separate money received from a person's stated preferences.
3. Read the possible outcomes. Explore a small table, with one player's score first and the other second.
4. Find a best response. Hold the other player's action fixed before comparing your choices.
5. Compare choices across every case. Distinguish strict dominance, weak dominance, and equal choices; try a guided elimination example.
6. Find a stable outcome. Test one-player changes to identify Nash equilibrium, then compare it with an outcome both prefer.

Start with the existing bill split as an interactive hook. Revisit it after the simpler two-player exercises. Do not present an eight-player payoff table. The concert is a transfer exercise for the individual-versus-group distinction, not a full model of a stadium or proof of a unique equilibrium.

### How this chapter should unfold

The opening bill split is a hook: learners experience a surprising result, reflect on it, and receive a short named preview of the idea. It is not a demand to master an eight-player game immediately. The chapter then builds the tools needed to explain that result: who is choosing, what each person prefers, how to read outcomes, and what changes when only one person switches. Return to the hook once these tools are in place.

After each opening set, introduce its concept by name. **Preferences** explains why the same monetary outcome can appeal differently to different people. **Payoff table** names the grid of outcomes and makes clear whose value comes first. **Best response** names the action that works best given the other person's fixed choice. **Dominant strategy** compares that action across every possible opponent choice. **Nash equilibrium** then asks whether everyone's choices are best responses to one another.

Do not collapse best response, dominance, and equilibrium into one definition. A best response depends on a specified opponent choice. A dominant strategy works across all their choices. A Nash equilibrium is a combination of players' strategies; it is not a label for one person's action. The course should demonstrate these differences, not rely on learners remembering a glossary.

### Flagship lesson: a fuller introduction to Nash equilibrium

This is the detailed model for the rest of the course. The learning objective is to test whether anyone benefits from changing only their own choice, while keeping everyone else's choice unchanged. Being able to repeat the term is not enough.

**Original setting — two lunch stalls.** Two nearby stalls choose tomorrow's price plan at the same time: Standard or Discount. Neither sees the other's decision first. Each wants the higher daily profit. The following profits are fixed rules of this fictional exercise, not a claim about real shops. The first amount belongs to Stall A and the second to Stall B.

| A / B | Standard | Discount |
| --- | --- | --- |
| Standard | (₹60, ₹60) | (₹30, ₹80) |
| Discount | (₹80, ₹30) | (₹40, ₹40) |

**First set: let them discover the tension.** Put the learner in charge of Stall A. First hold Stall B at Standard and ask which plan gives A more profit. Reveal that Discount produces ₹80 instead of ₹60. Then hold B at Discount and ask again: Discount now produces ₹40 instead of ₹30. Finally let them examine Stall B's decision under the same conditions. The visible result is both stalls discounting and earning ₹40 each.

Do not describe Discount as universally good business advice. These conclusions follow only from the displayed profits and simultaneous choices. If the learner chooses Standard, show its consequence and comparison without assigning a moral label. Before the concept reveal, ask whether either stall could improve its profit by changing its plan alone.

**Reflection prompt: “What did you learn so far?”** Offer these ideas in accessible language: “Either stall can earn more by switching alone”; “Neither stall can earn more by switching alone”; “Neither stall is allowed to change.” The supported answer is the second. The third is useful because it distinguishes having no incentive to switch from being prohibited from switching.

Follow with “Would both stalls prefer earning ₹60 each?” Yes. Now the learner has encountered the central puzzle: both would prefer a different shared outcome, yet changing alone from the current outcome does not help either one.

**Concept reveal — learner-facing copy:**

> **Nash equilibrium**
>
> A Nash equilibrium is a set of choices where no player can improve their outcome by changing only their own choice, while everyone else's choice stays the same.
>
> Both stalls discounting is a Nash equilibrium here. Each earns ₹40. If either stall switches to Standard while the other keeps its discount, the switching stall earns ₹30 instead.
>
> That does not make this the best shared result. Both would earn ₹60 at Standard. But if one switches from that shared result to Discount, it can earn ₹80. That is why both charging Standard is not an equilibrium in this game.

**“Show the reasoning” expansion.** Explain the check as three steps: pick an outcome, test Stall A's alternative with B fixed, then test Stall B's alternative with A fixed. If either can earn strictly more, that outcome fails. If neither can, it passes. Equal alternatives do not disqualify an equilibrium: the requirement is no strictly better unilateral change. “Stable” here refers to this incentive check, not a guarantee that real people will remain there, reach it, or never cooperate.

**Second set: guided application.** Ask learners to inspect the Standard/Standard outcome. Highlight Stall A's profit if it changes alone: ₹60 becomes ₹80. One profitable switch already disproves equilibrium, although the same calculation works for B. Next inspect Standard/Discount. Stall A can move from ₹30 to ₹40 by discounting, so this outcome also fails. The other mismatch fails symmetrically. End by asking learners to mark the only equilibrium, Discount/Discount, and justify it with both players' alternatives.

**Third set: use the concept in a different kind of game.** Two friends independently choose to meet at the Library or Café. They each receive a satisfaction score of 3 when they meet and 0 when they choose different places. Ask for every Nash equilibrium. Both Library/Library and Café/Café pass, while the two mismatches fail. There is no dominant location: each person's best choice depends on the friend's choice. This tests transfer beyond the original discount story and shows that a game can have more than one equilibrium.

**Fourth set: a counterexample to “every game has a stable pair of fixed choices.”** Use a two-lane tag game. A runner chooses Left or Right; a catcher chooses a lane at the same time. If lanes match, catcher gets 1 and runner 0; if they differ, runner gets 1 and catcher 0. At a match, the runner benefits by switching. At a mismatch, the catcher benefits by switching. Therefore no pair of fixed choices passes. Explain that these fixed choices are called **pure strategies**. Do not claim the game has no Nash equilibrium of any kind; chapter 5 introduces randomised strategies and the 50–50 equilibrium.

The multiple-equilibrium and no-pure-equilibrium activities can be a second short part of this lesson. Keep the first discovery, reflection, and named concept reveal together; do not bury the explanation behind all four sets.

**Final reflection: “What you learned.”**

> You practised finding a Nash equilibrium by checking whether either player could do better by changing alone. An equilibrium does not have to be the best outcome for everyone. Some games have several equilibria, and some have none among fixed choices.
>
> Before calling an outcome an equilibrium, ask: “What if only this player changed?” Then check the next player.

Follow this recap with a fresh independent check if the learner has not yet demonstrated both-player reasoning without hints. The original answer and the worked solution are not assessment evidence by themselves.

### Original exercise families for the rest of chapter one

**Shared workspace bookings:** begin with two people choosing meeting times, add their stated preferences, and let learners assemble outcomes from choices. After the first set, reveal **Players, actions, and preferences**. Continue with a case where one person values convenience while another values meeting together, so the best action cannot be read from money alone.

**Delivery-slot choices:** give a complete table of two businesses choosing Morning or Afternoon. First ask for the better action with the other business held fixed. Reveal **Best response**, then change the fixed choice and ask whether the answer changes. An independent version should have different best responses in different columns, preventing the false rule that one action is always best.

**Two service plans:** show the learner their own scores for Plan A and Plan B under several opponent choices. Let them notice a plan that is always better, then reveal **Strict dominance**. Continue with a plan that ties in one case and wins in another to introduce **Weak dominance**, followed by two plans that tie everywhere. This is a separate concept loop, not a footnote inside the Nash card.

**Shared costs:** revisit the bill split after the equilibrium lesson. Ask about changing one order, then everyone's orders. Reveal or reinforce **Individual incentives and collective outcomes**. Continue with the concert as a different setting where a sensible response to the current situation is different from the shared outcome people would prefer. Do not label the concert an identical payoff game.

These are original content directions. Before publication, each family must have complete authored outcomes, reviewed explanations, guided variants, and fresh assessment items. The detailed seeds below provide material for these sets; they are not instructions to expose every answer key on one page.

### Supporting exercise catalogue — not the learner-facing sequence

**GT1-01 — Map the situation.** Two flatmates separately choose whether to use the shared kitchen at 7 pm or 8 pm. They cannot see the other's choice before deciding. Select the players, actions, and number of joint action combinations. **Answer:** two flatmates; two times each; four combinations. We cannot yet say what either should do without knowing their preferences and outcomes. **Diagnoses:** confusing an outcome with an action, or assuming a preference.

**GT1-02 — Same outcome, different goal.** Compare outcomes A: you receive ₹60 and your friend ₹0; B: each receives ₹40. Person X ranks A above B because only their own money matters. Person Y ranks B above A because this shared outcome matters more to them. Ask whether one action must be best for both. **Answer:** no; use each person's stated ranking. No moral judgement is attached. **Checks:** preferences, not merely money.

For GT1-03 through GT1-06 use an original two-person project-credit game. Each independently chooses Contribute or Coast. These are fixed preference scores for the model, not predictions about real people. Each cell lists (your score, partner's score).

| You / Partner | Contribute | Coast |
| --- | --- | --- |
| Contribute | (4, 4) | (1, 6) |
| Coast | (6, 1) | (2, 2) |

**GT1-03 — Read a cell.** You contribute and your partner coasts. Select each score. **Answer:** you 1, partner 6; do not swap the order.

**GT1-04 — Hold one choice fixed.** Partner contributes: which action gives you more? Repeat with partner coasting. **Answer:** Coast in both cases, since 6 > 4 and 2 > 1. **Feedback:** compare within the relevant column, not across different partner choices.

**GT1-05 — Check stability.** Select all outcomes where neither person can improve by changing alone. **Answer:** only (Coast, Coast). At (Contribute, Contribute), either can improve 4 to 6. At either mismatched outcome, the contributor improves 1 to 2 by coasting. At (Coast, Coast), changing alone lowers one's score 2 to 1. **Checks:** test both players, not just the learner.

**GT1-06 — Stable does not mean best for everyone.** Compare both contributing with both coasting. **Answer:** both contributing gives each 4 instead of 2, but each has an incentive to switch while the other contributes. **Feedback:** Nash equilibrium concerns a one-player change; it does not mean the fairest or jointly best outcome.

**GT1-07 — Strict, weak, or equal?** Show only one player's scores across two possible opponent choices. Pair A=(5,3), B=(2,1): A strictly dominates B. Pair C=(5,1), D=(2,1): C weakly but not strictly dominates D. Pair E=(4,2), F=(4,2): equivalent, not weak dominance under our definition. Define weak dominance as at least as good everywhere and strictly better somewhere; strict dominance therefore also meets that definition. Require “weak but not strict” where exclusive labels are needed.

**GT1-08 — Remove one bad option at a time.** Rows A,B,C; columns L,R. Cells are A/L=(3,2), A/R=(2,1), B/L=(2,0), B/R=(1,3), C/L=(0,1), C/R=(0,2). **Answer:** A strictly dominates B and C. After removing them, column player prefers L to R (2 > 1); the remaining outcome is A/L. Ask learners to explain each deletion. Do not imply all games reduce to one result, or that weak-dominance deletion has the same guarantees.

**GT1-09 — Bill split, own change.** Under the authored eight-friend rules below, compare changing only your ₹600 order to ₹200 while all seven other orders stay expensive. **Answer:** payment falls ₹600 to ₹550; you save ₹50 but give up an upgrade worth ₹150, making you ₹100 worse off under the stated preferences. **Checks:** individual marginal cost versus the sticker-price difference.

**GT1-10 — Bill split, everyone's change.** Everyone switches from expensive to cheap. **Answer:** each pays ₹200 instead of ₹600, saves ₹400, and gives up ₹150 of extra food value; each is ₹250 better off. **Checks:** distinguish the shared change from changing alone.

**GT1-11 — Concert transfer.** With the rows ahead standing, which action restores the view under the stated model? Compare with everyone seated. **Answer:** standing restores the view but costs effort; everyone seated provides that view without the effort. **Checks:** a best response to the current crowd is not the same as the preferred shared outcome.

**GT1-12 — More than one stable outcome.** Two friends choose North or South meeting spots. Matching at either spot gives each 3; mismatching gives each 0. **Answer:** (North, North) and (South, South) are both Nash equilibria, and neither location is a dominant action. **Checks:** best response can depend on the other person; equilibrium need not be unique.

### Exit check and targeted practice

Core objectives: identify players/actions/preferences; read payoff order; find a best response; distinguish dominance cases; test equilibrium for both players; distinguish individual and shared changes. Build six independent exit items, one per objective, using fresh authored situations. GT1-01–12 supply teaching examples, not a ready-made repeat-only exam.

If the learner swaps the payoff order, practise table reading before asking for equilibrium. If they compare two players changing together, return to a fixed-opponent comparison. If they assume the largest total score is an equilibrium, ask which player would change at that outcome. Passing a strategic scenario choice alone never clears these objectives.

**Chapter challenge:** build a two-by-two game from a short authored situation, mark best responses, and explain whether a stable outcome benefits both players. Offer a worked solution after the attempt. The challenge is optional enrichment, not a surprise gate.

**Enrichment mapping:** the reference's second-price auction (§1.3), pivotal mechanism (§1.4), and infinite strategy sets (§1.7) are not in the first published chapter. Add separately labelled app enrichment later if useful; do not advertise the course as full coverage of the textbook.

## 5. Chapter 2 — Think one move ahead

### Experience first, then name the method

Open with a negotiation whose responses are explicitly stated. Let the learner choose an opening price and experience the buyer's response. In the next exercise, bring them directly to the final decision: accept an offer or keep the item. Only after they have compared those options ask them to revisit the opening choice. The point is to make the usefulness of thinking from the end visible, not to reward guessing the buyer's hidden intentions.

At “What did you learn so far?”, ask which later decision changes their preferred opening. Reveal **Backward induction** with this explanation: “Solve the last decision first. Then use that result to work back to the decision before it.” Connect every step to the path they just played, including an alternative they did not take. Show the entire small tree or accessible stacked paths so the explanation does not depend on remembering a hidden branch.

The rest of the set moves from scripted responses to two decision-makers with stated preferences. Use the market-entry game below: predict the established seller's response, then decide whether to enter. A changed-payoff version tests whether learners can revise their answer. Introduce **Credible threat** only after they have noticed that a promised response would hurt the person making it once the decision arrives. Define it as a threat the player would actually prefer to carry out under the game's conditions.

Use a separate mini-set for **Strategy as a complete plan**: ask what the buyer would do after either package offer, including the one not actually made. Explain why a full strategy says what to do at every decision point available to that player. Finish with a fresh tree and a recap explaining both the final response and how it changes the opening move. Do not call a lucky opening choice evidence of backward reasoning.


**Lessons:** read a decision tree; separate an action from a complete contingent plan; solve the final choice first; work back to the opening choice; test whether a threat would actually be carried out. Reference chapter 2.

**Existing activity:** the authored phone sale below illustrates planning against a known scripted response. It is not sufficient by itself to teach a two-player equilibrium: add a tree with both players' stated preferences.

**GT2-01 — Work back from the counteroffer.** Phone buyer offers ₹9,000; keeping the phone is worth ₹7,000. **Answer:** accept. With the published response rules, opening at ₹10,000 leads to ₹9,000, beating ₹8,000 and keeping the phone.

**GT2-02 — Find a credible response.** A small vendor chooses Stay out or Enter a market. Stay out yields (entrant 0, incumbent 5). After Enter, incumbent chooses Welcome, yielding (2,3), or Price war, yielding (-1,1). Everyone prefers their higher score. **Answer:** incumbent welcomes because 3 > 1; entrant therefore enters because 2 > 0. A promise to start a price war is not credible under these scores.

**GT2-03 — Write the whole plan.** A seller may offer a Basic or Premium package; buyer sees it and chooses Accept or Reject in either case. Ask how many pure plans the buyer has. **Answer:** four: accept both, accept only Basic, accept only Premium, reject both. A plan specifies even an unreached decision.

**GT2-04 — Change one payoff.** In GT2-02 change incumbent's Price war score from 1 to 4, keeping all other numbers fixed. **Answer:** it now chooses Price war (4 > 3), so the entrant stays out (0 > -1). **Checks:** reason from incentives rather than memorising a story.

Exit objectives: read a tree, write a contingent plan, solve final responses, derive an initial choice, and distinguish a credible from an empty threat. If the last choice is wrong, practise it before replaying the whole tree. Optional challenge: add a third decision and solve from the end; ties must show all equally preferred actions.

## 6. Chapter 3 — What can the other person see?

### Make the information difference visible

Start with two versions of the same booking situation. In one, the first person's choice is visible before the second chooses; in the other it is hidden. Ask the learner to propose a plan in each. Reveal exactly what the second person can see before asking why one conditional plan works in the visible version but cannot be followed in the hidden version.

After “What did you learn so far?”, show **Information set**: “These are decision points a player cannot tell apart using what they know.” Visually link those points, but provide equivalent text. The limitation is available information, not the player's intelligence. The order in which a diagram is drawn does not itself tell the player what happened.

In the remaining set, let learners sort feasible and impossible plans, then repair an impossible plan without giving the player extra information. In a later loop, let them inspect a promised response in an unreached branch. Reveal **Subgame-perfect equilibrium** only after they see why a Nash equilibrium can depend on a threat that would not be chosen when the moment arrives. Explain it as an equilibrium that also makes sense in every valid self-contained subgame.

The guided practice marks a valid subgame; the independent practice asks the learner to find one and check its incentives. An information set cannot be sliced in half to manufacture a subgame. End with a comparison: “Was the plan wrong because of incentives, or impossible because of information?” This separation matters more than memorising two similar-sounding terms.


**Lessons:** visible versus hidden earlier actions; information sets (decision points a player cannot tell apart); complete plans under limited information; subgames (self-contained parts of a game); checking credible play in every such part. Introduce chance branches without yet demanding expected-utility calculations. Reference chapter 3.

**GT3-01 — Hidden booking.** Asha chooses Morning or Evening privately; Bala then chooses without seeing Asha's choice. **Answer:** Bala's two possible decision points belong to one information set. Drawing Bala second does not give him knowledge he does not have.

**GT3-02 — Can that plan be used?** In GT3-01 a proposed plan says “Morning if Asha picked Morning; Evening otherwise.” **Answer:** not feasible with the stated information. If Asha's choice is revealed first, it becomes feasible.

**GT3-03 — A self-contained branch.** Use a visible first choice followed by a player decision with no links to outside nodes. Then hide the first choice and link the two decision points. **Answer:** the isolated decision can begin a subgame in the first case, but either single node cannot begin one in the second. Define all diagrams and show an accessible text equivalent before publication.

**GT3-04 — Check an unreached decision.** Reuse GT2-02. “Stay out; Price war if entry occurs” is a Nash equilibrium of the full strategy game, because neither player can gain from a unilateral change given those plans. But **it is not subgame-perfect**: if entry happens, incumbent prefers Welcome (3 > 1). “Enter; Welcome” passes the sequential check. **Checks:** an unreached threat can support Nash equilibrium yet fail a credibility check.

Exit objectives: identify what a player knows, reject an impossible contingent action, identify a valid subgame, and check play in an unreached subgame. Target information errors before equilibrium questions. Optional challenge: draw both hidden and visible versions of the same game and explain why their allowed plans differ.

## 7. Chapter 4 — Make decisions under uncertainty

### Let a choice reveal the missing information

Begin with a guaranteed token reward and a clearly described lottery. Invite a personal preference without grading it. Then ask a different, objective question: what is the average reward if the lottery is repeated many times? Show the weighted contributions from each outcome. Use “What did you learn so far?” to distinguish a guaranteed result from an average.

Reveal **Expected value**: “Multiply each possible amount by its probability, then add the results.” The learner sees the name after computing a concrete example. Explain that an expectation need not be an amount the game ever pays on a single play. The rest of that set uses a changed probability and a new reward distribution, with probabilities checked to sum to one.

Start the next loop with two fictional people who choose differently between the same gamble and guarantee. Supply their preferences rather than assuming one is mistaken. Reveal **Expected utility** after a set using the authored utility values: “Weight how this person values each outcome by its probability.” Contrast it with expected money, which weights the monetary amounts. The distinction must remain visible during practice.

Finish with cases where the answer is “There is not enough information.” A ranking of sure amounts does not determine a risky preference. The final recap should say what the learner can calculate and what requires additional assumptions, rather than branding them as a risk-taker based on one answer. Proofs and abstract axioms are optional enrichment after the practical distinction is clear.


**Lessons:** probabilities and lotteries; expected monetary value; preferences over risky outcomes; expected utility (probability-weighted preference values); why rankings alone do not determine risky choices. Reference chapter 4. Use fictional points and explicit preferences rather than advice about real investments.

**GT4-01 — Weighted average.** A game gives 20 tokens with probability 1/4, otherwise 4. **Answer:** expected tokens = (1/4 × 20) + (3/4 × 4) = 8. This is an average across repeats, not a guaranteed payout.

**GT4-02 — Same average, different preferences.** Compare 8 tokens for sure with a 50–50 chance of 0 or 16. A learner is told u(0)=0, u(8)=3, u(16)=4. **Answer:** the guaranteed choice has utility 3; the lottery has expected utility 2, so this modelled player chooses the guarantee. Do not infer a person's universal risk attitude from a single personal choice.

**GT4-03 — Ranks are not enough.** You only know someone prefers 16 tokens to 8 to 0. Can you decide whether they prefer certain 8 or the GT4-02 lottery? **Answer:** no; an ordinal ranking of sure outcomes is insufficient to compare these lotteries.

**GT4-04 — Preserve the comparison.** Replace GT4-02's utility values with v=2u+5. **Answer:** sure 8 now has 11; the lottery has expected utility 9. The preference is preserved. Positive scaling and adding a constant preserve expected-utility comparisons; arbitrary rank-preserving changes need not.

Exit objectives: calculate an expectation, distinguish money from utility, compare using a supplied utility scale, and recognise when information is insufficient. Optional challenge: check the consistency of a small, original set of lottery comparisons; formal representation proofs remain enrichment.

## 8. Chapter 5 — When being predictable hurts

### Revisit Nash equilibrium through unpredictability

Open with the runner and catcher from chapter one's counterexample. Ask the learner to predict what happens when one player always chooses the same lane. Let them try a fixed pattern, then show how an opponent who knows that pattern can respond. A short sequence of observed wins is not itself proof that a strategy is good; show the model's probabilities and payoffs.

At “What did you learn so far?”, ask whether merely choosing the opposite lane next time solves the problem. Reveal **Mixed strategy**: “Choose between your actions using probabilities, rather than always making one fixed choice.” A deterministic alternating pattern is still predictable if known. The new idea is deliberate randomisation, not careless guessing.

After a guided probability-slider set, reveal **Mixed-strategy Nash equilibrium**. It is still the same no-profitable-one-player-change test, now applied to strategies that can use probabilities. In the symmetric two-lane game, both players choosing each lane with probability one-half passes that test. Holding the opponent at that mixture leaves no alternative strategy with a higher expected score.

The rest of the exercises includes a biased opponent and an asymmetric payoff table. The biased case prevents “always choose 50–50” from becoming a false rule. The asymmetric case teaches why the probabilities depend on incentives. Work through making the other player indifferent between the actions they actually mix, then verify both players and any unused actions. Finish by contrasting a pure equilibrium, multiple pure equilibria, and a mixed equilibrium; do not imply the randomised outcome removes uncertainty about who wins an individual round.


**Lessons:** predictable actions; a mixed strategy (randomising over actions); expected payoffs; making the opponent indifferent; checking pure and mixed equilibria. Reference chapter 5. Require chapter 4's probability and utility foundation.

Use an original two-door tagging game: runner chooses Red or Blue; guard chooses which door to cover. Runner's score is -1 if caught and +1 if not; guard's score is the negative of runner's. These are specified utilities for this game.

**GT5-01 — Predictable route.** Runner always chooses Red. **Answer:** guard covers Red. **Checks:** “random” is not the same as “choose the previous winning move.”

**GT5-02 — Find the balance.** Guard covers Red with probability q. Runner's expected Red score is 1−2q and Blue score is 2q−1. **Answer:** q=1/2 makes the runner indifferent. Similarly the runner chooses each door with probability 1/2 to make the guard indifferent. Jointly these form the mixed equilibrium; verify both players.

**GT5-03 — Exploit a bias.** Guard covers Red with probability 0.8. **Answer:** choose Blue, whose expected score is 0.6; Red gives -0.6. A 50–50 mix is not a best response to every possible opponent.

**GT5-04 — Asymmetric scores.** Runner payoff matrix is Red/Red=-3, Red/Blue=1, Blue/Red=2, Blue/Blue=-1; guard's is the negative. **Answer:** runner mixes Red with probability 3/7 and guard covers Red with probability 2/7. Runner payoff is 1−4q for Red and 3q−1 for Blue; equalise them. Guard indifference follows by equalising runner payoff 2−5p versus 2p−1. Check unused actions before asserting equilibrium in larger games.

Exit objectives: calculate expected payoffs, respond to a biased opponent, solve a two-action indifference equation, and verify both players' best responses. If algebra blocks understanding, use a probability slider before symbolic solving. Optional enrichment: dominance by a mixture and rationalizability (actions consistent with iterated best-response reasoning), with a separate authored bank.

## 9. Chapter 6 — Put timing and uncertainty together

### Combine familiar tools before adding a new label

Begin with a short decision tree containing a player choice and an independent chance event. Ask for the probability of a particular ending, then for the weighted value of all endings. After the opening set, “What did you learn so far?” should surface that reaching an outcome may require several events along a path. Reveal **Path probability** and connect multiplying along a path with adding across mutually exclusive endings.

In the next loop, let a player choose a full plan at the start, then contrast that with selecting an action probabilistically at each information set. Reveal **Behavioural strategy**: “A rule assigning action probabilities at each information set where you may have to choose.” Keep **Mixed strategy** beside it for comparison, because mixing over complete plans and choosing locally are different descriptions. Explain the role of remembering one's earlier choices and observations before mentioning when the descriptions can produce equivalent outcome distributions.

The remaining exercises combine these probabilities with backward reasoning. Use a small continuation game already taught in chapter five, work out its expected value, then return to the earlier decision. Ask for reasoning in an unreached continuation as well as the realised path. This reinforces subgame perfection instead of suggesting that only what happened on screen matters.

End with “What you learned” across the whole course: whose preferences matter, what they know, what can change, and whether choices are fixed or randomised. Include a clear limit: subgame perfection does not settle every question about beliefs at hidden or unreached decisions. Those extensions belong in a later course rather than an unexplained final challenge.


**Lessons:** chance versus deliberate randomisation; randomising at each available decision point; complete plans versus local probabilities; calculating path probabilities; checking equilibrium in every proper subgame and recognising what that check cannot resolve. Reference chapter 6.

**GT6-01 — Multiply along a path.** Player continues with probability 0.6; if play continues, an independent chance draw awards 10 points with probability 0.25 and otherwise 0. Stopping gives 2 points. **Answer:** chance of reaching the 10-point outcome is 0.15; total expected score is (0.6 × 0.25 × 10) + (0.4 × 2) = 2.3. The terminal probabilities are 0.15, 0.45, 0.4 and sum to 1.

**GT6-02 — Count complete plans.** A player has two distinct information sets with two available actions each. **Answer:** four pure plans; a distribution over these plans has three independent probabilities. Randomising separately at the two information sets uses two independent probabilities. Do not confuse possible plans with decisions encountered on one play.

**GT6-03 — Choice at each point.** With perfect recall, a player remembers their own earlier actions and observations. Explain the difference between choosing a complete contingent plan randomly at the start and assigning random choices at information sets. **Answer criterion:** identifies where randomisation occurs and notes that equivalence in outcome distributions relies on assumptions such as perfect recall; it does not mean the two descriptions have identical parameters.

**GT6-04 — Work back through a mixed continuation.** Entrant chooses Out for payoffs (entrant 0, defender 1), or In followed by the fair two-door game from chapter 5, with an additional entry cost of 0.2 for the entrant. **Answer:** the continuation's mixed equilibrium has value 0 before the cost, hence -0.2 for the entrant; Out is preferred. Specify equilibrium play in the continuation even when it is not reached.

**GT6-05 — Know the limit.** Show a game with an information set that prevents a proper subgame from starting at a disputed decision. **Answer criterion:** the learner recognises that subgame perfection alone may not resolve every unreasonable-looking off-path plan; more refined analysis would need additional concepts. This is a design brief pending a reviewed diagram and full solution, not a publishable question.

Exit objectives: path probabilities, expected payoffs, full-plan versus local randomisation, and credible continuation analysis. Optional final challenge combines a visible first decision with a reviewed mixed-strategy continuation. Do not claim coverage of advanced belief-based equilibrium concepts that have not been taught.

## 10. Exercise specification and AI rules

Every publishable exercise needs:

- Stable ID; chapter and lesson IDs; concept tags; prerequisite concepts; content version.
- Status: draft, reviewed, or published. Source provenance and author/reviewer details.
- Complete rules: players, actions, information, preference scores, probabilities, tie handling, and all branches.
- Interaction type: select, calculate, fill a table, trace a tree, predict, or explain briefly.
- Teaching stage: discovery, reflection, concept reveal, guided practice, independent check, or recap; concept card and prior-attempt references where applicable.
- Accepted answers or an explicit rubric; a worked explanation; hints in increasing detail.
- Misconception tags; a guided follow-up and distinct assessment alternatives.
- Accessibility text for every visual and a deterministic calculation check where applicable.

AI may explain within these rules, evaluate a short explanation against the rubric, and recommend a reviewed item the learner can access. It must preserve the first-set → reflection → named concept → remaining-practice sequence. A discovery error cannot be treated as failure to understand a definition not yet introduced. It cannot invent payoff changes, publish questions, mark uncertain evidence as mastery, or bypass chapter gates. Objective answers and calculations use fixed checks in Convex. Keep model/version and rubric/version with AI results.

Within an unlocked chapter, practise weak concepts before advancing. Earlier completed chapters remain reviewable. Never recommend a question from a locked or unpublished chapter. On the website, recommendations stay inside chapter 1, even if the learner has finished later chapters in the app. Use a reviewed explanation and rule-based selection if AI is unavailable.

Free-text assessments are low-stakes learning feedback. If the rubric cannot distinguish an incomplete answer from a language issue, offer a clearer structured check rather than blocking the learner indefinitely.

## 11. Existing authored scenario rules

Retained from the earlier product document to avoid changing the game's mathematics while reorganising the course. Bill split and concert belong to chapter 1; phone sale belongs to chapter 2. The original direct-next-action labels below are replaced by the chapter's lesson flow when implemented. These are internal content rules, not evidence of tested learning outcomes.

### Scenario 1: the bill split

**Visible setup**

> Eight friends. Everyone pays an equal share. You choose before seeing anyone else's order.
>
> The ₹200 dish is good. You would pay up to ₹150 extra for the ₹600 dish. Your friends feel the same.
>
> Which do you order?

Choices: **₹200 dish** / **₹600 dish**.

**Author's rules**

- Each diner values the upgrade at ₹150 and prefers a higher food value minus payment.
- Choosing the upgrade adds ₹400 to the total bill and ₹50 to that diner's own payment, regardless of others' orders.
- The upgrade therefore gives each diner a net benefit of ₹100 compared with choosing cheap while everyone else's order stays fixed.
- All seven simulated diners independently choose expensive. They never copy or react to the player's hidden choice.
- These preferences are rules of this game, not claims about what people should enjoy or how real friends always behave.

**Reveal**

Orders appear with brief reasoning, such as:

> Arjun thinks: “The upgrade adds only ₹50 to my share. It's worth ₹150 to me.”

Vary wording, but keep the reasoning faithful to the rules. Show that choices were made independently; animation order does not mean later diners saw earlier orders.

| Your choice | Other seven | Total bill | Your payment |
| --- | --- | --- | --- |
| ₹200 | ₹600 each | ₹4,400 | ₹550 |
| ₹600 | ₹600 each | ₹4,800 | ₹600 |

Show the player's actual bill first. Then show changing only their order: cheap saves ₹50 but gives up an upgrade they value at ₹150.

Finally show everyone choosing cheap: everyone pays ₹200. Compared with everyone choosing expensive, each saves ₹400 and gives up only ₹150 of extra food value. Everyone would be ₹250 better off under that shared outcome.

Do not call the cheap choice morally wrong. Show the difference between what benefits one diner given the others' orders and what benefits the whole group.

**Teaching beat**

> Everyone ordering expensive is a Nash equilibrium: changing only your own order makes you worse off under these rules.
>
> Yet everyone would prefer the bill if all ordered cheap.

Next activity: a chapter-1 understanding check, then the concert transfer lesson when appropriate.

Do not interrupt the reveal with an account or profile form. Continue directly to the understanding check or next activity.

### Scenario 2: the concert

**Visible setup**

> You're in the middle of a concert crowd. The row ahead stands up.
>
> Stand, and you get your old view back with sore legs. Stay seated, and your view is blocked. Seeing the show matters more to you than resting your legs.

Choices: **Stand** / **Stay seated**.

**Author's rules**

- This is a simplified middle section of a crowd, not a model of every stadium seat.
- Everyone in this section has the same ranking: clear view while seated, then clear view while standing, then blocked view while seated.
- The frontward rows are already standing and remain standing during this decision. The simulated people nearby stand to restore their views.
- Standing restores the original view; it does not create a better view than everyone sitting.

**Reveal**

> Meera thinks: “I'd rather sit, but I can't see unless I stand too.”

Show the crowd standing. If the player stood, restore their original view and show the cost of standing. If they sat, show the blocked view. Then demonstrate both alternatives with the crowd held fixed: sitting alone blocks the view; standing restores it.

Compare with everyone seated: same clear view, rested legs. End with one sentence:

> Standing helps you once others stand. Everyone sitting would feel better.

This reinforces the tension between an individual response and a shared outcome. Do not claim the concert has an identical payoff table to the bill split or that the model proves a unique outcome for an entire stadium.

Next activity: chapter-1 review or exit check. Phone sale is introduced in chapter 2 inside the app.

### Scenario 3: selling a phone

**Visible setup**

> Your old phone is worth ₹7,000 to you if you keep it. A buyer messages on OLX.
>
> This practice buyer follows three fixed rules:
> - Ask ₹8,000: they accept.
> - Ask ₹10,000: they make a final offer of ₹9,000.
> - Ask ₹12,000: they leave.
>
> What price do you ask?

Choices: **₹8,000** / **₹10,000** / **₹12,000**.

**Author's rules**

- The player's goal is the highest final value: sale proceeds, or ₹7,000 of value from keeping the phone.
- No fees, delays, hidden offers, or later buyers exist in this game.
- At ₹9,000, the player chooses **Accept** or **Keep my phone**. All other branches end without a further decision.
- Buyer rules are visible before the choice. This is planning against a known response, not guessing a hidden price or claiming that real buyers always bargain this way.

**Reveal**

Show a brief buyer thought matched to the branch: “₹8,000 works for me,” “I'll offer ₹9,000, final,” or “₹12,000 is above my limit.” Then show the actual outcome and all three possible paths:

| Opening price | Buyer response | Final value to you |
| --- | --- | --- |
| ₹8,000 | Accepts | ₹8,000 cash |
| ₹10,000 | Offers ₹9,000 | Accept: ₹9,000 cash; decline: keep phone worth ₹7,000 |
| ₹12,000 | Leaves | Keep phone worth ₹7,000 |

Highlight the player's path. Work backward visibly: at the counteroffer, ₹9,000 beats keeping a ₹7,000 phone; knowing that, opening at ₹10,000 beats the other openings.

Use a tree only if readable on a phone. Otherwise use three stacked paths with the same alternatives. Showing only the actual path is insufficient: the comparison is the lesson.

**Teaching beat**

> This is backward induction: start at the last decision and work back.
>
> You'd accept ₹9,000 rather than keep a ₹7,000 phone. That makes ₹10,000 your best opening against this buyer.

End state: finish this chapter-2 lesson, then practise backward induction in a fresh situation. A successful phone-sale choice alone does not demonstrate understanding.



Prototype price clarification: lunch prices are ₹20 (keep the usual price) and ₹15 (lower it). Each stall sign shows the price per lunch; a separate receipt shows daily earnings after costs. Selecting an answer previews both stalls before submission. These concrete prices label the existing actions; the authored daily-earnings table remains unchanged. The amounts are fictional game rules, not a real business forecast.


## Playable simulation models — version 1

The prototype now gives the price labels an explicit accounting model. Each lunch costs ₹10 to make. Revenue equals price times lunches sold; daily earnings equal revenue minus those costs. Customer counts below are fictional authored assumptions, not empirical predictions. Each animated customer represents one lunch sold.

| Customer model | Your price / Mira's price | Lunches sold: you / Mira | Daily earnings: you / Mira |
| --- | --- | --- | --- |
| Price-sensitive | ₹20 / ₹20 | 6 / 6 | ₹60 / ₹60 |
| Price-sensitive | ₹20 / ₹15 | 3 / 16 | ₹30 / ₹80 |
| Price-sensitive | ₹15 / ₹20 | 16 / 3 | ₹80 / ₹30 |
| Price-sensitive | ₹15 / ₹15 | 8 / 8 | ₹40 / ₹40 |
| Loyal | ₹20 / ₹20 | 6 / 6 | ₹60 / ₹60 |
| Loyal | ₹20 / ₹15 | 5 / 7 | ₹50 / ₹35 |
| Loyal | ₹15 / ₹20 | 7 / 5 | ₹35 / ₹50 |
| Loyal | ₹15 / ₹15 | 6 / 6 | ₹30 / ₹30 |

The price-sensitive model preserves the earlier payoff table: ₹15 strictly dominates ₹20, with both charging ₹15 the unique pure-strategy Nash equilibrium. In the loyal model, ₹20 strictly dominates ₹15, with both charging ₹20 the unique pure-strategy equilibrium. Keep the settings separate in history and comparisons. The lesson is that changing an assumption can change the strategic conclusion, not that either price is universal business advice.

The learner can set Mira's posted price as a scenario parameter. Within a run it stays fixed; the simulated rival never reads or reacts to a hidden selection. Runs are independent what-if experiments, not a repeated-game model with reputation or learning. The fox is a companion, not that rival.

The current fox is a transparent illustrated asset with short motion reactions; it is not a fully animated expression system yet. Further poses can build on the approved character reference.


## After-exercise real-world case: cigarette advertising

Place this story after the learner has explored all four price pairs with price-sensitive customers and has received the Nash equilibrium explanation. Keep it optional and expandable, with a visible title, reading time, author attribution, and source note. Do not interrupt a simulation with a reading. The prototype uses exploration completion, not a claim of mastery.

### Teaching connection

Name the prisoner's dilemma: lowering the price earns more for either stall at either fixed rival price (80 > 60 and 40 > 30), but mutual lower prices earn less than mutual higher prices (40 < 60). Both lowering is also a Nash equilibrium: neither can improve by switching alone. Those two concepts are related but are not synonyms. Changing to loyal customers removes this particular dilemma.

### Real-world story

The US cigarette broadcast advertising ban took effect in January 1971. Mitchell and Mulherin studied major tobacco firms' stock returns around the ban's development, finding positive abnormal returns consistent with expected advantages for established firms. Their argument includes barriers to entry for new brands and the removal of required anti-smoking broadcast messages. Do not reduce their paper to an advertising-cost savings story.

Use the story to ask learners to notice how a rule can change available moves and competitive incentives. Treat an advertising prisoners' dilemma as a simplified teaching analogy, not a game structure empirically established by this paper. No graded quiz follows the story; invite another simulation with different customer assumptions.

### Source and limits

Mark L. Mitchell and J. Harold Mulherin, *Finessing the Political System: The Cigarette Advertising Ban*, pp. 855–862. Source: user-supplied pasted reading. Publication date and journal metadata have not been independently verified; online records were blocked during checking. Do not invent a DOI or link.

Stock returns measure investor expectations, not realized profit changes or health outcomes. Do not present the findings as proof that advertising bans generally fail to reduce smoking. Attribute the historical interpretation to the authors. Use original summary prose rather than reproducing the full paper.

### Reusable chapter pattern

Play → explain and name the concept → apply it in further play → show an optional real-world case → cite the source and separate evidence from our analogy. Keep the app-wide fox as companion and the case as a short story, not a lecture or multiple-choice screen.

## Guided prisoner’s dilemma flow — current prototype direction

Supersedes the open-ended Lunch Rush exploration for the first learner test. One fox-led scene, one short prompt, and clearly named actions. Use Coin Camp to remove the extra burden of prices, revenue, and costs. Each friend starts a fresh trial with three coins. Sharing transfers the whole bag and doubles its value for the recipient; keeping retains three coins. Payoffs (you, Mira): share/share = 6/6; keep/share = 9/0; share/keep = 0/9; keep/keep = 3/3. Keeping strictly dominates sharing, but mutual sharing beats mutual keeping for both.

Teach the rule first. The fox asks what the learner will do when Mira shares. Offer “Share my 3 coins” and “Keep my 3 coins.” Animate sunset and accumulating coins, explain that outcome, then explicitly rewind and guide the learner through the other action. Repeat with Mira keeping. Mira’s action is revealed for these teaching trials to compare incentives; do not imply a surprise reactive opponent. This is guided discovery, not a scored quiz. No action earns a right/wrong label.

Show the two shared outcomes visually, explain the temptation, then name and explain prisoner’s dilemma. Follow with three small cigarette-advertising story beats, with source details behind an expandable note. Distinguish a simplified advertising analogy from the Mitchell–Mulherin findings. A second example waits for the user’s source; do not invent it or show a broken placeholder. Defer Nash equilibrium and alternate demand settings from this first flow.

The orange fox is rendered as an animated vector character in the prototype, with blinking, tail motion, happy, worried, thinking and surprised states. Maintain orange/cream/raspberry visual identity. Reduced-motion preferences stop decorative animation. This prototype has no persistent progress or backend connection.


## Expanded Chapter 1 — 5 October 2026

Founder direction: a long chapter with multiple book-based games, concept explanations after play, McKinsey at the end of teaching, then a closing MCQ check and a separate practice quiz. Current plan: chapters/chapter-1-introduction.md; ten book-inspired game storyboards plus railway capstone: chapters/chapter-1-games.md; twelve closing MCQs and twenty-four fresh practice alternatives: chapters/chapter-1-practice-bank.md. This supersedes the smaller seven-question plan and generic route proposals. Exact qualitative game branches still need implementation review; live games, Convex scoring and AI routing are not built. Chapter 2 retains prisoner’s dilemma and the cigarette example.
