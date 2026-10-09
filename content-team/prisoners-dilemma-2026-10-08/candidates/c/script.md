# Candidate C — Teach the fox a fix

Status: Draft

Set aside for archive. Lens: Teach it back. Reference beat: Betty’s Brain-style explaining to a guide who tests precisely the learner’s claim. Bounded instructions change one or both actions against disclosed rules; there is no free-text grading or inferred motive. No other candidates were inspected.

17 beats, 16 forward taps, seven multi-option decisions. The first personal statement and expectation are unscored. First consequence arrives at tap 2 on every route. The prediction now receives immediate feedback before the fix decision. The comparison later explicitly restores two confessions before comparing changes. Prison and café fix prompts state the concrete sentence/profit goal without repeating the “both” option label. The repeated final cost question has been removed: the draft stops after worked reason feedback, with no claim of learning evidence.

All first-pass files are preserved under first-pass/. The version before this logic repair is preserved under pre-repair/. Structural checker passes; runtime and fox are unchanged. Final repaired wording has not been browser-checked here. No human testing, enjoyment, comprehension, retention or transfer evidence exists. The numerical tables remain those supplied in the common packet. Boredom risk remains: four-row rule cards and fixed-case comparisons can feel like a worksheet. This bounded repair removes known confusion; it is not a recommendation to develop this candidate further.

---

deck: /Users/rohithpaull/build-sprint-app/content-team/prisoners-dilemma-2026-10-08/candidates/c/deck.html
title: Teach the fox a fix | status: Draft | candidate: c | lens: Teach it back — guide tests your exact claim
scenes: 17 | reachable: 17 | decisions (2+ choices): 7 | endings: 1
first consequence (structural taps): earliest=2 | latest=2
longest declared route (structural taps): 16
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# Teach the fox a fix

Status: Draft

## s01 (start) — mood: speaking
- Guide: You and your accomplice Ravi robbed a jewellery store. You’re caught, in separate rooms. Get the fewest prison years for yourself. You control only your statement.
- Visual: {"type": "cards", "items": [{"title": "Fictional game", "lines": ["You cannot talk to Ravi. Neither of you sees the other’s final statement before choosing. You have no way to make Ravi keep a promise."]}, {"title": "Your two statements", "lines": ["Stay silent: refuse the deal. Confess: accept it and name Ravi."]}]}
- Choice: "Read the deal" → s02

## s02 — mood: thinking
- Guide: Here’s the whole deal. Ravi also wants the fewest years for himself. What statement do you make?
- Visual: {"type": "cards", "items": [{"title": "Both stay silent", "lines": ["You: 1 year · Ravi: 1 year"]}, {"title": "Only you confess", "lines": ["You: 0 years · Ravi: 5 years"]}, {"title": "Only Ravi confesses", "lines": ["You: 5 years · Ravi: 0 years"]}, {"title": "Both confess", "lines": ["You: 3 years · Ravi: 3 years"]}], "caption": "Your goal: the fewest prison years for yourself. Zero = no prison years."}
- Choice: "Stay silent" → s03 (set {'first': 'silent'})
- Choice: "Confess" → s03 (set {'first': 'confess'})
- Author note: Unscored personal statement. Assigned goal is not a moral judgment. Both conditional outcomes follow; Ravi is never selected reactively.

## s03 (consequence) — mood: thinking
- Guide [first=silent]: You stay silent. Your sentence depends on Ravi’s statement: 1 year if he stays silent; 5 if he confesses.
- Guide [default]: You confess. Your sentence depends on Ravi’s statement: 0 years if he stays silent; 3 if he confesses.
- Visual: {"first=silent": {"type": "cards", "items": [{"title": "Ravi stays silent", "lines": ["Your silence → you 1 year, Ravi 1 year."]}, {"title": "Ravi confesses", "lines": ["Your silence → you 5 years, Ravi 0 years."]}]}, "default": {"type": "cards", "items": [{"title": "Ravi stays silent", "lines": ["Your confession → you 0 years, Ravi 5 years."]}, {"title": "Ravi confesses", "lines": ["Your confession → you 3 years, Ravi 3 years."]}]}}
- Choice: "Imagine both confess" → s04

## s04 — mood: thinking
- Guide: Imagine you both confess: 3 years each. Ravi keeps confessing. If only you become silent, what happens to your years?
- Visual: {"type": "cards", "items": [{"title": "Both stay silent", "lines": ["You: 1 year · Ravi: 1 year"]}, {"title": "Only you confess", "lines": ["You: 0 years · Ravi: 5 years"]}, {"title": "Only Ravi confesses", "lines": ["You: 5 years · Ravi: 0 years"]}, {"title": "Both confess", "lines": ["You: 3 years · Ravi: 3 years"]}], "caption": "Your goal: the fewest prison years for yourself. Zero = no prison years."}
- Choice: "My years fall" → s04_result (set {'expect': 'fall'})
- Choice: "My years stay the same" → s04_result (set {'expect': 'stay the same'})
- Choice: "My years rise" → s04_result (set {'expect': 'rise'})
- Author note: Unscored bounded expectation captured before any solo-switch result. The personal statement is not misconception evidence.

## s04_result (consequence) — mood: thinking
- Guide: You expected your years to {{expect}}. Ravi keeps confessing. Change only your statement to silence: your sentence rises from 3 years to 5. His falls to 0.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 5, "from": 3}, {"label": "Ravi’s years", "value": 0, "from": 3}], "caption": "Both confess: 3 / 3 → only you silent: 5 / 0. Ravi’s statement has not changed."}
- Choice: "Try a fix" → s05
- Author note: Immediate unscored prediction feedback, before any further decision. Explicitly retains Ravi confessing and changes only the learner’s statement.

## s05 — mood: thinking
- Guide: Back to 3 years each. You want 1 year, and so does Ravi. Teach me your fix: which statements should I change to silence?
- Visual: {"type": "cards", "items": [{"title": "Both stay silent", "lines": ["You: 1 year · Ravi: 1 year"]}, {"title": "Only you confess", "lines": ["You: 0 years · Ravi: 5 years"]}, {"title": "Only Ravi confesses", "lines": ["You: 5 years · Ravi: 0 years"]}, {"title": "Both confess", "lines": ["You: 3 years · Ravi: 3 years"]}], "caption": "Your goal: the fewest prison years for yourself. Zero = no prison years."}
- Choice: "Change only my statement" → s06 (set {'fix': 'you'})
- Choice: "Change only Ravi’s statement" → s06 (set {'fix': 'ravi'})
- Choice: "Change both statements" → s06 (set {'fix': 'both'})
- Author note: Teach-back claim is bounded, not AI graded. Changes are labelled comparison controls, not powers available to the prisoner.

## s06 (consequence) — mood: thinking
- Guide [fix=you]: You changed only your statement to silence. Ravi still confesses. Your years rise: 3 → 5. One change cannot deliver two silences.
- Guide [fix=ravi]: You changed only Ravi’s statement to silence. You still confess. His years rise: 3 → 5. One change cannot deliver two silences.
- Guide [default]: You changed both statements to silence. Both sentences fall: 3 → 1. This fix needs two changes; your own statement controls just one.
- Visual: {"fix=you": {"type": "counters", "items": [{"label": "Your years", "value": 5, "from": 3}, {"label": "Ravi’s years", "value": 0, "from": 3}], "caption": "Both confess: 3 / 3 → only you silent: 5 / 0."}, "fix=ravi": {"type": "counters", "items": [{"label": "Your years", "value": 0, "from": 3}, {"label": "Ravi’s years", "value": 5, "from": 3}], "caption": "Both confess: 3 / 3 → only Ravi silent: 0 / 5."}, "default": {"type": "counters", "items": [{"label": "Your years", "value": 1, "from": 3}, {"label": "Ravi’s years", "value": 1, "from": 3}], "caption": "Both confess: 3 / 3 → both silent: 1 / 1."}}
- Choice: "Check the other changes" → s07

## s07 — mood: thinking
- Guide: Start again from two confessions: 3 years each. Here are the three changes side by side. Then keep Ravi’s statement still and compare your choices.
- Visual: {"type": "cards", "items": [{"title": "Change from both confessing: 3 / 3", "lines": ["Only you silent → 5 / 0. Only Ravi silent → 0 / 5. Both silent → 1 / 1."]}, {"title": "Ravi keeps his statement", "lines": ["Ravi silent: your confession gives 0, your silence 1.", "Ravi confessing: your confession gives 3, your silence 5."]}, {"title": "Why confessing helps you", "lines": ["Confessing rewards you when Ravi is silent and costs you fewer years when he confesses."]}]}
- Choice: "Look from Ravi’s room" → s08
- Author note: All alternative changes remain visible in a mandatory comparison. Numbers are ordered you / Ravi. No retries or loops.

## s08 — mood: thinking
- Guide: Imagine you’re in Ravi’s room. He faces the same pressure. Your statement stays put while he weighs his two choices.
- Visual: {"type": "cards", "items": [{"title": "Your statement stays put", "lines": ["You silent: Ravi’s confession gives him 0 years; his silence gives him 1.", "You confessing: Ravi’s confession gives him 3 years; his silence gives him 5."]}, {"title": "The shared result", "lines": ["Both silent: 1 year each, better for both than 3 each. But 0 still beats 1 for either person."]}]}
- Choice: "Name the problem" → s09

## s09 — mood: thinking
- Guide: Both can prefer the shared fix while each has a reason to leave it. That’s the prisoner’s dilemma.
- Visual: {"type": "concept", "name": "Prisoner’s dilemma", "definition": "Each person has an action that improves their own result whichever fixed action the other takes. Yet both taking it leaves both worse off than the other shared outcome. Here, confessing gives each fewer years in either case, but 3 each is worse than 1 each."}
- Choice: "Try another setting" → s10
- Author note: Conditional on the assigned goal and exact deal. Not a prediction that everyone confesses. Loyalty and fairness can be other goals; trust alone does not change 0 versus 1.

## s10 — mood: thinking
- Guide: Now you run a café. Make the most profit today—money left after costs. A nearby café owner chooses separately. Neither sees the other’s choice. Your move?
- Visual: {"type": "cards", "items": [{"title": "Both keep usual prices", "lines": ["You ₹5,000 · Other ₹5,000"]}, {"title": "Only you discount", "lines": ["You ₹6,000 · Other ₹2,000"]}, {"title": "Only the other discounts", "lines": ["You ₹2,000 · Other ₹6,000"]}, {"title": "Both discount", "lines": ["You ₹3,000 · Other ₹3,000"]}], "caption": "Today only. These profits already include every cost."}
- Choice: "Run a discount" → s11 (set {'cafe': 'discount'})
- Choice: "Keep usual prices" → s11 (set {'cafe': 'usual'})
- Author note: Fictional one-day model, not business evidence. Profit = money after costs; no future effects or unlisted costs. Goal explicitly changes from fewer years to more profit.

## s11 (consequence) — mood: thinking
- Guide [cafe=discount]: You run a discount. You earn ₹6,000 if the other keeps usual prices, or ₹3,000 if they discount. The same pressure appears here.
- Guide [default]: You keep usual prices. You earn ₹5,000 if the other does too, or ₹2,000 if they discount. Now compare changing only your action.
- Visual: {"type": "cards", "items": [{"title": "Your profit if the other café stays put", "lines": ["Other usual: your discount ₹6,000 > your usual ₹5,000.", "Other discount: your discount ₹3,000 > your usual ₹2,000."]}, {"title": "The other owner has the same comparison", "lines": ["You usual: their discount ₹6,000 > their usual ₹5,000.", "You discount: their discount ₹3,000 > their usual ₹2,000."]}]}
- Choice: "Teach the fox a fix" → s12

## s12 — mood: thinking
- Guide: Imagine your café and the nearby café earn ₹3,000 apiece from discounts. You want ₹5,000 each. Teach me your fix: whose prices should I change?
- Visual: {"type": "cards", "items": [{"title": "Both keep usual prices", "lines": ["You ₹5,000 · Other ₹5,000"]}, {"title": "Only you discount", "lines": ["You ₹6,000 · Other ₹2,000"]}, {"title": "Only the other discounts", "lines": ["You ₹2,000 · Other ₹6,000"]}, {"title": "Both discount", "lines": ["You ₹3,000 · Other ₹3,000"]}], "caption": "Today only. These profits already include every cost."}
- Choice: "Change only my prices" → s13 (set {'cafefix': 'solo'})
- Choice: "Change both cafés’ prices" → s13 (set {'cafefix': 'joint'})
- Author note: Comparison control explicitly changes one or both actions. Does not imply real owners can control rivals or recommend price coordination.

## s13 (consequence) — mood: thinking
- Guide [cafefix=solo]: You changed only your café to usual prices. Your profit falls ₹3,000 → ₹2,000; the other rises to ₹6,000. Their discount stayed in place.
- Guide [default]: You changed both cafés to usual prices. Each profit rises ₹3,000 → ₹5,000. Both actions had to change.
- Visual: {"cafefix=solo": {"type": "counters", "items": [{"label": "Your profit ₹", "value": 2000, "from": 3000}, {"label": "Other café’s profit ₹", "value": 6000, "from": 3000}], "caption": "Original rules · before ₹3,000 / ₹3,000 → only you usual ₹2,000 / ₹6,000. Both usual would give ₹5,000 / ₹5,000."}, "default": {"type": "counters", "items": [{"label": "Your profit ₹", "value": 5000, "from": 3000}, {"label": "Other café’s profit ₹", "value": 5000, "from": 3000}], "caption": "Original rules · before ₹3,000 / ₹3,000 → both usual ₹5,000 / ₹5,000. Only you usual would give ₹2,000 / ₹6,000."}}
- Choice: "Add one new cost" → s14

## s14 — mood: thinking
- Guide: Now imagine each café running a discount pays ₹2,000 extra that day. Usual prices pay none. Everything else stays the same. Your move?
- Visual: {"type": "cards", "items": [{"title": "Both keep usual prices", "lines": ["You ₹5,000 · Other ₹5,000"]}, {"title": "Only you discount", "lines": ["You ₹4,000 · Other ₹2,000"]}, {"title": "Only the other discounts", "lines": ["You ₹2,000 · Other ₹4,000"]}, {"title": "Both discount", "lines": ["You ₹1,000 · Other ₹1,000"]}], "caption": "New cost: every discounting café pays ₹2,000 extra. Usual prices pay none. Final daily profit shown."}
- Choice: "Run a discount" → s15 (set {'new': 'discount'})
- Choice: "Keep usual prices" → s15 (set {'new': 'usual'})
- Author note: Changed profits disclosed before the action, never a surprise deduction. This is the actual changed-condition challenge.

## s15 (consequence) — mood: thinking
- Guide [new=discount]: You kept the discount. The new cost leaves ₹4,000 against usual prices or ₹1,000 against a discount—₹1,000 less than your alternative in either case. What changed the best move?
- Guide [default]: You chose usual prices. You earn ₹5,000 against usual prices or ₹2,000 against a discount—₹1,000 more than discounting in either case. What changed the best move?
- Visual: {"type": "cards", "items": [{"title": "New cost · your choice versus alternative", "lines": ["Other usual: your usual ₹5,000; your discount ₹4,000.", "Other discount: your usual ₹2,000; your discount ₹1,000."]}]}
- Choice: "The cost changed discount profits" → s16 (set {'reason': 'cost'})
- Choice: "The cost changed the other’s choice" → s16 (set {'reason': 'choice'})
- Author note: Reason linked to a disclosed rule. Both alternatives have parallel sentence structure; no scoring colours or verdict.

## s16 (end) — mood: thinking
- Guide [reason=cost]: You pointed to discount profits. Yes: ₹6,000 − ₹2,000 = ₹4,000. Usual prices still earn ₹5,000 against the same other action.
- Guide [default]: You pointed to the other’s choice. The new rule doesn’t choose for them. Hold them at usual prices: discount now earns ₹6,000 − ₹2,000 = ₹4,000; usual still earns ₹5,000.
- Visual: {"type": "cards", "items": [{"title": "What the cost changes", "lines": ["Best action: discount → usual prices.", "Usual wins ₹5,000 > ₹4,000 and ₹2,000 > ₹1,000."]}, {"title": "Same for the other café", "lines": ["Each now prefers usual prices whether the other discounts or not. Both keeping usual prices earns ₹5,000 each. Helping yourself now reaches the better shared result."]}, {"title": "Take it with you", "lines": ["Before “everyone should stop,” ask: what happens to someone who stops alone—and what makes continuing attractive?"]}]}
- Author note: End after worked cost feedback. No retry, repeated final quiz or claimed learning evidence. Next proposed activity is a delayed check in a new situation, not part of this archived draft.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
