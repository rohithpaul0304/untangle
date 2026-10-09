# Independent learner-copy review of new openings

Draft snapshot: ORIGINAL A (lunch-delivery bottleneck) and ORIGINAL C (photo-booth bottleneck), before A/B redesign. Review captured 2026-10-07T09:19:03.386036+00:00. Do not apply A findings to revised A without re-reading it.

Reviewed only `/tmp/untangle-opening-a-learner.md` and `/tmp/untangle-opening-c-learner.md`. No author drafts, answer keys, or coordinator preferences inspected. B pending. This is an AI reading and branch-solving exercise, not human play, a browser test, or evidence of enjoyment.

## A — The extra pair of hands

**Role:** run a lunch-delivery service. **Goal:** maximize lunches delivered to six doors. **Control:** place one helper at orders, cooking or delivery; helper adds two to that station's per-run limit. Role and goal are introduced before quantities. Every ticket passes all three stations, each stage greedily handles what arrives, run order is fixed, and no mid-run reassignment is allowed. These rules are sufficient to solve both moves without hidden assumptions.

**Independent branch solution:**

| Move | Effective limits: orders/cook/deliver | Reaches doors | Waiting before orders/cook/deliver |
|---|---|---:|---|
| First: Orders | 6/2/3 | 2 | 0/4/0 |
| First: Cook | 4/4/3 | 3 | 2/0/1 |
| First: Deliver | 4/2/5 | 2 | 2/2/0 |
| Second: Orders | 6/4/3 | 3 | 0/2/1 |
| Second: Cook | 4/6/3 | 3 | 2/0/1 |
| Second: Deliver | 4/4/5 | 4 | 2/0/0 |

All six authored outcomes agree with these calculations and account for all six tickets. First optimum is Cook; after the oven, optimum is Deliver. The new run explicitly clears queues and uses fresh tickets, avoiding an accidental carryover rule.

**What the second move adds:** The best location changes when the kitchen's baseline capacity changes. Someone repeating “help the kitchen” now loses one delivery. This tests whether they follow the new constraint rather than memorize a station. First feedback already says delivery becomes the limit after helping cooking, however, so the second correct move is heavily prepared. It is guided application, not independent evidence of an unprompted insight.

**Concrete issues / confusion risks:**

- A nonoptimal second choice can choose Finish without seeing where the helper goes to produce four deliveries. Feedback says four is possible “elsewhere,” then the stopping point gives a general work tip. Supply the actual Deliver allocation and four-delivery movement before Finish on either wrong branch. Do not force endless retries. C already specifies this safeguard.
- “What held the lunches back?” offers an optional unscored response but specifies no response control or handling. Decide whether this is private reflection with a single See why button, or a captured text answer; do not imply that a typed answer receives a personalized evaluation when no response is authored.
- First-screen rules are five visible bullets plus prompt and three limits. None is mathematically redundant, but they compete with the request to act. In a rendered test check whether “one run goes left-to-right once” and “leftovers wait” are noticed; missing that rule changes how people imagine a real kitchen working. Do not hide those rules to reduce visible text.
- The reflective question's singular “what” may refer to the current limit or the original limit. On Cook branch, current delivery limits output to three; on the other branches, cooking limits output to two. The common explanation eventually covers both. A branch-specific wording such as “What stopped another lunch reaching a door in this run?” makes the reference precise.

**Concrete repetition/boredom risk:** The second move is the same placement/run activity with one number changed and a strongly signposted target. That is valid teaching but provides only one new decision distinction. Do not call it a new kind of game or proof of lasting interest. The optional open response offers reflection, but whether people use it is untested.

## C — Fix the photo booth

**Role:** run a festival photo app. **Goal:** deliver as many of six photos as possible; second run sets a concrete target of four. **Control:** place two +1 upgrades among Receive, Clean up and Send, including both at one machine. Limits are per run, processing is serial once, leftovers wait, and upgrades can move before commitment. Rules are sufficient for all six allocations in each run.

**Independent branch solution:** R = Receive, C = Clean up, S = Send. Queue columns are before R/C/S.

| Allocation | First effective limits | First delivered; queues | Second effective limits | Second delivered; queues |
|---|---|---|---|---|
| RR | 6/2/4 | 2; 0/4/0 | 6/3/3 | 3; 0/3/0 |
| CC | 4/4/4 | 4; 2/0/0 | 4/5/3 | 3; 2/0/1 |
| SS | 4/2/6 | 2; 2/2/0 | 4/3/5 | 3; 2/1/0 |
| RC | 5/3/4 | 3; 1/2/0 | 5/4/3 | 3; 1/1/1 |
| RS | 5/2/5 | 2; 1/3/0 | 5/3/4 | 3; 1/2/0 |
| CS | 4/3/5 | 3; 2/1/0 | 4/4/4 | 4; 2/0/0 |

All twelve authored outcomes match; each delivered-plus-waiting total is six. First optimum is both upgrades on Clean up; second optimum is one each on Clean up and Send. Identical pegs mean six allocations cover all substantive branches, regardless of which peg is placed first.

**What the second move adds:** First move rewards concentrating resources on one uniquely limiting stage. Second has two equally limiting stages, so the previously successful concentration does not raise delivered output. Splitting upgrades is required. This is a distinct capacity-allocation inference, although the controls and serial calculation repeat. The taught bottleneck idea alone does not tell the learner to always concentrate or always split; they must inspect the current numbers.

**Concrete issues / confusion risks:**

- The first consequence immediately reveals the concept and rule. There is no reflection prompt, alternate first-run attempt, or comparison with the optimum before naming. A learner who used both upgrades on Receive sees only two deliveries and then receives the explanation. This does not make the question unfair, but it limits evidence that they themselves noticed why another allocation helps. If retaining the project requirement for reflection before naming, add one optional “What stopped another photo?” thought prompt on the existing consequence view, not another compulsory screen.
- “Previous run finished” plus explicit empty machines and fresh photos adequately resets state. Preserve those visible cues: otherwise discarded leftovers could seem to disappear to make the math work.
- “Your slowest step” informally means smallest per-run capacity here, not literal elapsed processing time. The visible per-run limits make this resolvable. If later extending the lesson to timing, avoid silently treating rate, latency and batch size as interchangeable.
- “Group-photo mode” changes two capacities with no causal explanation. Because the new numbers are disclosed before choosing, this is a fair changed-rule exercise. It may nevertheless feel like a reskinned numeric puzzle rather than a consequence of handling group photos. This is a concrete narrative question for newcomer testing, not a factual blocker.

**Correction route check:** Every three-delivery second result offers reset or Finish; Finish shows the correct CS placement and its four-photo result. Thus failure does not block teaching, create an endless retry, or skip the worked solution. Four-delivery success reaches the same closing principle without unnecessary retry. First wrong responses still receive their matching visible consequence and explanation.

**Concrete repetition/boredom risk:** Both rounds use the same pegs and run button. The tied-limit case adds reasoning, but the record supplies only two rounds and cannot establish sustained attention. Four-versus-three can become a calculation exercise if the queue motion is unclear; the visual should keep every waiting photo at its next machine as authored.

## Shared findings

- Both start with a clear adult role, a concrete output goal, and control over scarce help/upgrades. Neither forces a lesson-navigation choice.
- No hidden payoff, incorrect arithmetic, missing substantive allocation branch, invented learner motive, commercial-effect claim, or engagement claim found in the inspected learner copy.
- Both require distinguishing local work from output reaching a customer, with a useful work takeaway. Neither demonstrates an actual customer-facing product decision outside its fixed-capacity model; the extrapolation is an analogy.
- No timers are needed to solve these games. A explicitly says no countdown; C describes capacity per run rather than speed pressure.
- Current notes concern authored copy, not whether queue motion, touch controls, saved progress, or small-screen readability work in an implementation.

B will be reviewed separately from its learner copy when delivered. Next useful check is to fix A's finish route and make the reflection handling explicit, then ask a newcomer to explain why their second allocation changes delivered output without coaching.

# Revised A and final B — independent learner-only review

Snapshot: revised A titled “The photo she meant to keep”; B titled “The phone that wouldn’t stop”; original C “Fix the photo booth” remains the inspected C candidate. Read only the learner files. Original A findings above concern the retired lunch-service candidate and are not carried over as findings about this new A.

## Revised A — The photo she meant to keep

**First interpretation:** I am the designer of Maya's photo app. I can place either a pre-action review or a post-action Undo component, not alter Maya's fixed selection mistake. I must keep her photo safe while making ordinary deletion of an already-selected photo one tap. On the second move I must prevent the recipient from receiving a private photo, and extra taps are explicitly permitted.

**Rules and independent solution:**

| Move and choice | Outcome from visible rules | Goal result |
|---|---|---|
| Delete + Review | Maya sees wrong full photo and chooses Keep; deletion never occurs | Photo safe; ordinary deletion requires confirmation, so one-tap requirement fails |
| Delete + Undo | Removal preserves original; Maya notices immediately and restores it before leaving | Photo safe; an ordinary, nonmistaken deletion remains one tap; both requirements met |
| Share + Review | Maya sees private photo and chooses Go back before sending | Recipient never receives photo; meets goal |
| Share + Undo | Recipient gets an immediate copy; Maya clears only her own sent copy | Recipient still has photo; privacy goal fails |

All four authored outcomes follow the disclosed tester and app rules. No need to assume that real users always read review sheets or notice mistakes immediately: the copy explicitly scopes those behaviors to this tester. Preserving the original until leaving the screen is sufficient for first-run Undo because her noticing and use are immediate. This is a simulated design choice, not general proof of how people behave.

**What the second move adds:** The same familiar component ceases to meet the goal when an action changes another person's device beyond its control. Learner must distinguish restoring local state from recovering the consequence. That is a useful new inference, not a numeric repetition. It is guided transfer: the second visible rule explicitly says the recipient's copy cannot be removed. It tests use of the rule, not discovery of a hidden system property. The goal also removes the first one-tap constraint; both reversibility and the allowed interaction cost change, so do not infer which change drove an observed switch without asking for the learner's reason.

**Actionable issues:**

1. **Shared reflection misdescribes Review branch.** “What made that mistake recoverable?” follows a branch where the deletion was prevented, not undone. Use branch-specific “What stopped the deletion?” after Review and “What let the photo come back?” after Undo, or common “What kept Maya from losing her photo?” The following explanation correctly distinguishes prevention from recovery; preserve that distinction in the question too.
2. **“This slip is fixed” has two readings.** It can mean predetermined for the replay or repaired. The next actions require it to persist. Say “In this replay, Maya always selects the wrong photo” or “This selection mistake stays the same.”
3. **Share failure can finish without worked successful outcome.** After Undo, Finish can lead directly to a broad principle. Show the Review route with an empty recipient phone before the stopping point if that is the learner's only second-move result. Keep Change Share optional and avoid a forced retry.
4. **Optional response handling is underspecified.** As with original A and B, specify private reflection versus captured answer. A text box with no authored acknowledgment should not imply a personalized evaluation.
5. **Preview scope needs to be explicit.** “Exact working preview” / “Preview its behavior” could mean component placement, or the entire Maya replay before commitment. Define whether the preview only demonstrates where and when the sheet/bar appears. If it already shows final consequences, record the move as supported exploration, not an unaided prediction.

**Concrete attention/confusion risks:** There are five rule bullets before first action; much of the decisive behavior is supplied in them. A person can therefore succeed by spotting “Undo adds none” and “cannot remove recipient's copy” without explaining recovery. Conversely, omitting those rules would make the choice unfair. Test whether the learner can explain the consequence in their own words and handle a new case; do not interpret a correct component click as understanding. Maya's dialogue and visible photo loss provide a concrete stake, but no human reaction has been observed.

## B — The phone that wouldn’t stop

**First interpretation:** I run a chat app, with a single global Ping/Silent rule affecting two correctly labelled messages. Dev needs an immediate code; Sana wants tomorrow's conversation left quiet. First-night options cannot satisfy both needs. Next night I can set separate rules by message type; the people have swapped roles. I must get Sana inside while Dev stays asleep.

**Independent solution:**

| Move and choice | Recipient of code | Sleeping recipient of optional chat | Meets both needs? |
|---|---|---|---|
| First: Ping | Dev reads immediately and enters | Sana wakes | No |
| First: Silent | Dev's code unread until tomorrow; outside | Sana sleeps | No |
| Second: Ping/Ping | Sana enters | Dev wakes | No |
| Second: Ping/Silent | Sana enters | Dev sleeps | Yes |
| Second: Silent/Ping | Sana outside | Dev wakes | No |
| Second: Silent/Silent | Sana outside | Dev sleeps | No |

Order of second pair is Time-sensitive / Can wait. All six consequences match visible rules. The deliberately artificial named-recipient delivery avoids uncertainty about whether everyone in a real group receives the same message. Accurate message labels are disclosed as a simulation assumption rather than silently granting a classification ability.

**What the second move adds:** One undifferentiated rule is replaced by message-based rules, and character roles reverse so “always ping Dev” is inadequate. This teaches distinguishing situations from permanent user labels. It is more than replaying the first binary choice. However, options never let the learner make the permanent-person rule: its failure is explained by the guide rather than experienced as a chosen consequence. Both useful labels and separate controls are supplied by the author. The second move is therefore direct application of the proposed distinction, not independent discovery of the distinction.

**Actionable issues / limitations:**

1. **Unsuccessful second result can exit before a worked resolution.** Ping/Ping, Silent/Ping and Silent/Silent all offer Finish opening immediately. On Finish, show the Ping/Silent outcome if not already experienced, with code delivered and optional chat left unread. Keep Adjust optional; no retry trap.
2. **Optional short response has no specified input/feedback contract.** State whether it is private reflection or captured text. Do not imply the app interpreted the proposed change if it always supplies one response.
3. **Second move is very strongly cued.** “Time-sensitive,” “Can wait,” “Ping,” and “Silent” almost spell out the required mapping. The story demonstrates why a global rule fails, but does not require the learner to work out which circumstance matters. This is a concrete risk under the founder's “too simple / no work takeaway” correction. It is not evidence that anyone was bored. Do not add a hidden label error just to make the answer surprising; a later honest application could require identifying the relevant need from a concrete request before showing its category.
4. **Both first moves necessarily fail one need.** This is a legitimate design limitation to investigate, not a wrong-answer check. Preserve the absence of grading and acknowledge that the learner could not satisfy both with available controls. Avoid recording either initial choice as a misconception about notification design.

**Concrete attention/confusion risks:** Door-code and sleep stakes are immediately recognizable, and the first conflicting outcomes are easy to see. But the second move can feel like obeying the newly supplied correct policy rather than solving a design problem. The role reversal adds meaning only if the learner notices it and can explain why rules follow the need. Ask for that explanation before congratulating performance.

## Comparing final A, final B and C as candidates

These are different lesson concepts and task formats. Their topics, emotional stakes, rule lengths, actions, and second-move difficulty vary together. A preference for one cannot identify whether story format, subject interest, or difficulty caused the preference. Do not describe this as an isolated test of one writing variable.

| Candidate | First control | New distinction in second move | Strongest concrete test question | Main unresolved risk |
|---|---|---|---|---|
| A | Place Review or Undo | Locally recoverable removal versus an external copy that persists | “Why can the same Undo work for one action and fail for the other?” | Copy may supply answer without learner understanding; prevention/recovery reflection mismatch |
| B | Set global notification policy | Message-based needs as the same people's contexts switch | “Why shouldn't the rule be ‘always ping Dev’?” | Accurate urgency labels make correct mapping nearly automatic |
| C | Allocate two limited upgrades | One bottleneck versus two tied limits requiring a split | “Why didn't putting both upgrades on cleanup help in the second run?” | Can become a numerical allocation exercise detached from a convincing photo-app decision |

**Recommendation for the next small test:** Test revised A after the concrete wording/finish-route fixes. Reason: it offers a testable distinction between preventing a consequence and undoing it, with visible state on two phones. This is a review judgment about what to test, not a prediction of fun, retention or market success. C provides the strongest fully enumerated allocation exercise and can be a subsequent contrasting candidate. B is useful for checking immediate clarity but gives weaker evidence of reasoning beyond following supplied labels.

**Concrete first-test criteria, no coaching:**

- Before first move, ask learner to state their role, two goals and available components. Record exact words and whether rules need rereading.
- After each committed result, ask what changed on each phone and what stayed recoverable. Do not supply “local” or “external copy” as answer clues.
- After Share, ask why the first successful component was insufficient for the new goal. A valid explanation says the recipient already has a copy Undo cannot remove; merely naming Review is not enough.
- Give a short fresh case with all necessary rules: a message enters a holding tray after Send; nobody receives it until a later release; Undo removes it from that tray before release. A fictional sender notices immediately; ordinary sending should stay one tap. Ask whether a real Undo can protect against the noticed mistake and what would change after release. This checks the recoverability boundary without depending on real email-service behavior.
- Record which answer was independent, which followed a reread, and which followed explanation. Wrong answers should guide revision, not be blamed on the learner.
- Offer a genuine stop after the opening and record whether the learner voluntarily requests another puzzle. One choice to continue is an observation, not proof of habit replacement or lasting engagement.

No human participant, browser playthrough, answer timing or observed boredom is claimed. No author notes were read and no candidate files edited.

# Saved final candidate recheck

Read only saved learner files `content-team/play-openings/opening-a-learner.md` and `opening-b-learner.md` in the project. Did not inspect accompanying author files.

**Resolved in A:** deterministic-mistake wording is now unambiguous; shared reflection asks how the change protected the photo and fits both prevention and recovery; reflection is explicitly no text field/no grading; unsuccessful Share Finish now supplies a labelled alternative replay with Review before sending. The alternative is not credited to the earlier choice. Original independent branch solutions remain valid.

**Resolved in B:** reflection has an explicit no-input/no-grading contract. Every unsuccessful second result now leads, on Finish, to a labelled worked Ping/Silent example with both goals visibly met. Earlier unsuccessful choice is not marked correct. All six independently derived outcomes remain valid.

**Remaining small specification issue in A:** pre-commit “exact working preview” / “Preview its behavior” still does not say whether it reveals Maya's final response. Clarify preview is component placement/appearance only, with tester response and final consequence reserved for Replay. If intentionally revealing the whole behavior first, preserve that design but describe the move as supported exploration, not independent prediction. This ambiguity need not invalidate content; it affects implementation and interpretation of test evidence.

**Remaining hypotheses, not defects proved by review:** A has substantial explicit rules and changed constraints; B's labels directly cue its answer; C may feel like a capacity calculation. The next small test recommendation remains A, contingent on checking comprehension rather than assuming interest. Comparing unlike topics cannot isolate a single writing technique. No human-play or engagement claim is supported by this review.

## Coordinator final revision record

After reviewer recheck, A's pre-action preview was narrowed to placement and appearance only; Maya's response and final outcome appear only after Replay. Both full and learner scripts carry this clarification. No full chapter or prototype was produced. The model check script passes A's two-stage constraints, six B outcomes and twelve C outcomes. It does not validate enjoyment, animation or timing. Human participants remain zero.
