# Three openings, three independent designers

Scripts only. AI-reviewed; no human playtest or motion test. No chapter expanded.

## A — The photo she meant to keep

**You design a photo app. Maya deletes the wrong photo.**

Repair the interface by placing a **Review sheet** or **Undo bar** into the app. Watch Maya use the control you chose. Then repair Share: an Undo button can clear your screen while leaving the private photo on the recipient's phone.

**Discovery:** reversibility. A recovery button only works when the consequence can actually be reversed.

**What you do:** inspect a mistaken tap, change the interface, replay its effect, adapt to a consequence that crosses to another device.

**Why test it:** the same control has a different safety limit in the second situation. The lesson can be shown through two phones without relying on a report.

**Risk:** two components could still feel like a binary quiz; the toy rule that this user reliably notices mistakes must stay clear. The one-tap goal is a design constraint, not a universal rule for deletion.

[Read learner sequence](opening-a-learner.md)

## B — The phone that wouldn't stop

**You run a chat app. One person needs a door code. Another is asleep.**

Set Ping or Silent and watch both phones. Then split the rule by message urgency as the two people swap circumstances.

**Discovery:** needs depend on context, not permanent labels for people.

**What you do:** configure notification switches; see a door open or someone wake; repair the rule.

**Why test it:** immediate, visible effects and little arithmetic.

**Risk:** accurate urgency labels make the solution obvious. This is the weakest candidate for the founder's request for a nontrivial discovery. Keep it as a comparison, not the recommended next build.

[Read learner sequence](opening-b-learner.md)

## C — The queue that won't move

**You run a festival photo booth. Six friends want their photos. You have two upgrades.**

Drop upgrades onto Receive, Clean up or Send. Run the machines and watch photos pile up or arrive on phones. The next batch has two equally limiting steps; pouring both upgrades into one no longer works.

**Discovery:** bottlenecks. Improving one part does not necessarily improve the finished result.

**What you do:** place two upgrades, run the system, watch queues, then solve a changed constraint.

**Why test it:** strongest hands-on manipulation of these candidates; the second puzzle requires splitting resources.

**Risk:** explicit capacities may still feel like arithmetic homework. The one-run processing rules are a simplified game model.

[Read learner sequence](opening-c-learner.md)

## Recommendation

Test **A first**, with **C as the alternative**. Independent reviewer favors A's useful distinction between preventing a mistake and reversing its consequence; C offers stronger manipulation but may feel more abstract. B is clear but too predictable to prioritize. These are design judgments, not evidence that users will enjoy A or C.

All three were independently authored. Their first drafts converged on bottlenecks; two were then independently revised under different interaction constraints. See `team.md` and `first-pass/` for that history. Different concepts mean this is a comparison of complete openings, not a controlled test of interaction style alone.

The next test is one unfamiliar person's uncoached explanation and second move, using `human-test.md`. No full chapter or production prototype should be inferred from this recommendation.
