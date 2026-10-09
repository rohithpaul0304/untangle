# Candidate C — Teach the fox a fix

Status: Draft

Lens: Teach it back. Reference beat: Betty’s Brain-style explaining to a guide who tests precisely the learner’s claim. After the personal statement and bounded expectation, the learner instructs the fox to change one or both statements. The exact instruction executes against the fixed deal. Café instructions repeat this role, and the extra campaign cost makes the previous action lose its advantage. All explanation choices are bounded; there is no free-text grading or inferred motive.

18 beats; 17 forward taps on every route; eight multi-option decisions. First personal statement and expectation are unscored. Structural checker passes: earliest/latest first consequence 2/2 taps, no cycles, all 18 scenes reachable. Conditional screens keep routes equal in length. Full initial deal precedes decisions; comparison scenes preserve relevant rules.

Concrete boredom risk: long four-row deal cards and the fixed-case comparisons may feel like reading a worksheet. Teach-back choices carry real scope differences, but this remains untested. Template fox and runtime are preserved. Root reviewed the first opening; revised wording and remaining runtime branches await informed root review; no human testing or timing measurement. The final attempt follows worked feedback and cannot establish independent transfer or retention.

Sources: supplied common designer packet only; no external research or other candidates read. Fixed prison and café rules are the packet’s approved invented models.



Revision: saved all three first-pass artifacts under first-pass/. Replaced learner-facing author-method language with story instructions. Numeric rules, branch conditions, choices, outcomes and pacing are unchanged.

---

deck: /Users/rohithpaull/build-sprint-app/content-team/prisoners-dilemma-2026-10-08/candidates/c/deck.html
title: Teach the fox a fix | status: Draft | candidate: c | lens: Teach it back — guide tests your exact claim
scenes: 18 | reachable: 18 | decisions (2+ choices): 8 | endings: 1
first consequence (structural taps): earliest=2 | latest=2
longest declared route (structural taps): 17
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
- Choice: "My years fall" → s05 (set {'expect': 'fall'})
- Choice: "My years stay the same" → s05 (set {'expect': 'stay the same'})
- Choice: "My years rise" → s05 (set {'expect': 'rise'})
- Author note: Unscored bounded expectation captured before any solo-switch result. The personal statement is not misconception evidence.

## s05 — mood: thinking
- Guide: Teach me your fix for 3 years each. Imagine changing these statements: which change gets both of you to 1 year? I’ll try your fix.
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
- Guide: You expected your years to {{expect}}. With Ravi still confessing, your solo silence raises them: 3 → 5. Here’s the snag in the shared fix.
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
- Guide: Imagine both cafés discount and earn ₹3,000 each. Give me a price change that gets both to ₹5,000. I’ll try your fix.
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

## s16 — mood: thinking
- Guide [reason=cost]: You pointed to discount profits. Yes: ₹6,000 − ₹2,000 = ₹4,000. Usual prices still earn ₹5,000 against the same other action.
- Guide [default]: You pointed to the other’s choice. The new rule doesn’t choose for them. Hold them at usual prices: discount now earns ₹6,000 − ₹2,000 = ₹4,000; usual still earns ₹5,000.
- Visual: {"type": "cards", "items": [{"title": "What the cost changes", "lines": ["Best action: discount → usual prices.", "Usual wins ₹5,000 > ₹4,000 and ₹2,000 > ₹1,000."]}, {"title": "Same for the other café", "lines": ["Each now prefers usual prices whether the other discounts or not. Both keeping usual prices earns ₹5,000 each. Helping yourself now reaches the better shared result."]}]}
- Choice: "Give the fox one final instruction" → s17
- Author note: Worked successful path after every reason response. Even two misses (action and reason) receive a worked example before the following fresh fixed-other attempt. That attempt is supported practice, not independent transfer evidence.

## s17 — mood: thinking
- Guide: Keep the ₹2,000 campaign cost. Imagine the other café discounts today and won’t change. I’ll run your café: what do you tell me to do?
- Visual: {"type": "cards", "items": [{"title": "Both keep usual prices", "lines": ["You ₹5,000 · Other ₹5,000"]}, {"title": "Only you discount", "lines": ["You ₹4,000 · Other ₹2,000"]}, {"title": "Only the other discounts", "lines": ["You ₹2,000 · Other ₹4,000"]}, {"title": "Both discount", "lines": ["You ₹1,000 · Other ₹1,000"]}], "caption": "New cost: every discounting café pays ₹2,000 extra. Usual prices pay none. Final daily profit shown."}
- Choice: "Run a discount" → s18 (set {'final': 'discount'})
- Choice: "Keep usual prices" → s18 (set {'final': 'usual'})
- Author note: Fresh fixed-other case after worked other-usual example; no looping retries.

## s18 (end) — mood: speaking
- Guide [final=discount]: You told me to discount. That leaves ₹1,000. Keeping usual prices would leave ₹2,000 against the same discount. The extra cost changed which action helps you.
- Guide [default]: You told me to keep usual prices. That leaves ₹2,000. Discounting would leave ₹1,000 against the same discount. The extra cost changed which action helps you.
- Visual: {"final=discount": {"type": "cards", "items": [{"title": "New-cost result", "lines": ["Your discount: ₹3,000 − ₹2,000 = ₹1,000.", "Switch only you to usual: ₹2,000. The other still discounts."]}, {"title": "Both cafés keeping usual prices", "lines": ["₹5,000 each. Each also prefers usual prices alone, whether the other discounts or not."]}, {"title": "Take it with you", "lines": ["Before “everyone should stop,” ask: what happens to someone who stops alone—and what makes continuing attractive?"]}]}, "default": {"type": "cards", "items": [{"title": "New-cost result", "lines": ["Your usual prices: ₹2,000. Other café discounts: ₹4,000.", "Your alternative discount: ₹1,000."]}, {"title": "Both cafés keeping usual prices", "lines": ["₹5,000 each. Each also prefers usual prices alone, whether the other discounts or not."]}, {"title": "Take it with you", "lines": ["Before “everyone should stop,” ask: what happens to someone who stops alone—and what makes continuing attractive?"]}]}}
- Author note: Clear stop. Next proposed learning activity: delayed check in a new situation. No retention, independent transfer, enjoyment or real-world welfare claim.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
