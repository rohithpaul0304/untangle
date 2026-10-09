# Candidate B — illustrated fox-led revision

Status: Draft

Dialogue refined by continuing Designer B. Generated artwork and deterministic charts integrated by Art & Motion worker. Static characters; outcome numbers and bars animate after statement labels. Founder rejected the initial flat illustrations; those are superseded. Browser evidence and remaining quality limits are recorded in visual-refinement-review.md.

## Exact deck export

deck: /tmp/untangle-pd-20261008/candidates/b/deck.html
title: One switch. Two rooms. | status: Draft | candidate: B | lens: Toy · fox-led rules, one choice and its visible effect
scenes: 53 | reachable: 53 | decisions (2+ choices): 5 | endings: 1
first consequence (structural taps): earliest=10 | latest=10
longest declared route (structural taps): 45
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# One switch. Two rooms.

Status: Draft

## welcome (start) — mood: speaking
- Guide: Come try a fictional story with me. You make the choices; we’ll see what happens.
- Choice: "Let’s begin" → caught
- Author note: Earlier deck authored by Designer B; coordinator delivery review missed fox-led context. User corrections now recorded. No attribution about other reviewers.

## caught — mood: speaking
- Guide: You and your accomplice Ravi robbed a jewellery store. You’ve been caught—and put in separate rooms.
- Choice: "Continue" → goal

## goal — mood: speaking
- Guide: You want the fewest prison years for yourself. Ravi wants the fewest for himself.
- Choice: "Continue" → actions

## actions — mood: speaking
- Guide: Accept the deal: confess and name Ravi. Or refuse it: stay silent. You control only your statement.
- Choice: "Continue" → separate

## separate — mood: speaking
- Guide: No talking or agreements with Ravi. You each choose without seeing the other’s statement. Here’s the deal.
- Choice: "Continue" → rule_ss

## rule_ss — mood: speaking
- Guide: If you both stay silent, you each get one year.
- Choice: "Continue" → rule_cs

## rule_cs — mood: speaking
- Guide: You confess; Ravi stays silent. You get zero prison years—none. Ravi gets five.
- Choice: "Continue" → rule_sc

## rule_sc — mood: speaking
- Guide: You stay silent; Ravi confesses. You get five years. Ravi gets zero.
- Choice: "Continue" → rule_cc

## rule_cc — mood: speaking
- Guide: If you both confess, you each get three years. Ready to try it?
- Choice: "Continue" → deal

## deal — mood: waiting
- Guide: Imagine Ravi stays silent. Silence gets you one year; confession gets you zero. What do you say?
- Choice: "Stay silent" → silent (set {'first': 'Stay silent'})
- Choice: "Confess" → confess (set {'first': 'Confess'})
- Author note: First choice unscored. Complete deal disclosed in four prior fox beats. Later scenes are explicitly imagined comparisons of this same fictional decision.

## confess (consequence) — mood: thinking
- Guide: You confessed; Ravi stayed silent. Zero years for you, five for him. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}]}
- Choice: "Change my statement to silence" → flip_silent

## silent (consequence) — mood: thinking
- Guide: You stayed silent. So did Ravi: one year each. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}]}
- Choice: "Change my statement to confess" → flip_confess

## flip_confess (consequence) — mood: thinking
- Guide: Ravi stayed silent. Your confession cut your prison time from one year to zero.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}]}
- Choice: "Imagine both confessing" → both

## flip_silent (consequence) — mood: thinking
- Guide: Ravi stayed silent. Your silence raised your prison time from zero years to one.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}]}
- Choice: "Imagine both confessing" → both

## both — mood: thinking
- Guide: Imagine both confessing: three years each. Ravi keeps confessing. If only you stay silent, what happens to your years?
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 3}, {"label": "Ravi’s years", "value": 3}]}
- Choice: "Fall" → solo (set {'expectation': 'Fall'})
- Choice: "Stay" → solo (set {'expectation': 'Stay'})
- Choice: "Rise" → solo (set {'expectation': 'Rise'})
- Author note: Bounded expectation recorded before the solo-switch consequence. All three receive the same disclosed fixed result; no score.

## solo (consequence) — mood: thinking
- Guide [expectation=Rise]: You expected a rise. Your silence takes you from three years to five. Ravi keeps confessing: zero for him.
- Guide [default]: You expected “{{expectation}}”. Your silence takes you from three years to five. Ravi keeps confessing: zero for him.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 5}, {"label": "Ravi’s years", "value": 0}]}
- Choice: "Imagine only Ravi stays silent" → ravi_only (set {'order': 'ravi'})
- Choice: "Imagine both stay silent" → joint (set {'order': 'joint'})
- Author note: Buttons are explicitly teaching controls from the same 3/3 baseline, not added power inside the fictional decision. The expectation is unscored; that authoring fact is not spoken to the learner.

## joint (consequence) — mood: thinking
- Guide: Imagine three years each again. Now both go silent: one year each. That took both statements changing.
- Choice: "Imagine only Ravi stays silent" → ravi_second
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## ravi_only (consequence) — mood: thinking
- Guide: Imagine three years each again. Only Ravi goes silent: five years for him, zero for you.
- Choice: "Imagine both stay silent" → joint_second
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## joint_second (consequence) — mood: thinking
- Guide: Imagine three years each again. Now both go silent: one year each. That took both statements changing.
- Choice: "Look from Ravi’s side" → mirror
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## ravi_second (consequence) — mood: thinking
- Guide: Imagine three years each again. Only Ravi goes silent: five years for him, zero for you.
- Choice: "Look from Ravi’s side" → mirror
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## mirror — mood: speaking
- Guide: Look from Ravi’s side. You stay silent: his confession gets zero years; his silence gets one.
- Choice: "Continue" → mirror_confess

## mirror_confess — mood: speaking
- Guide: You confess: Ravi gets three years by confessing, five by staying silent. Confession cuts his time either way.
- Choice: "Continue" → your_pressure

## your_pressure — mood: speaking
- Guide: Same for you: confessing gives zero instead of one when Ravi’s silent; three instead of five when he confesses.
- Choice: "Continue" → name

## name — mood: speaking
- Guide: That’s the prisoner’s dilemma: confessing cuts your years, whichever statement Ravi makes. He faces the same pressure.
- Choice: "Continue" → name_shared

## name_shared — mood: speaking
- Guide: Yet both confessing means three years each; both staying silent means one. Individually better choices can leave both worse off.
- Choice: "Continue" → name_best

## name_best — mood: speaking
- Guide: One each beats three each—but zero beats one. And choosing your silence doesn’t choose Ravi’s.
- Choice: "Try the café version" → cafe_intro

## cafe_intro — mood: speaking
- Guide: Now imagine running a café beside another owner’s. Your goal: the most profit today—money left after costs.
- Choice: "Continue" → cafe_rules

## cafe_rules — mood: speaking
- Guide: Choose discounts or usual prices without seeing the other’s choice. Only today counts; all costs are included.
- Choice: "Continue" → cafe_uu

## cafe_uu — mood: speaking
- Guide: When both cafés keep usual prices, you each make ₹5,000.
- Choice: "Continue" → cafe_du

## cafe_du — mood: speaking
- Guide: You discount; they keep usual prices. You make ₹6,000. They make ₹2,000.
- Choice: "Continue" → cafe_ud

## cafe_ud — mood: speaking
- Guide: You keep usual prices; they discount. You make ₹2,000. They make ₹6,000.
- Choice: "Continue" → cafe_dd

## cafe_dd — mood: speaking
- Guide: When both cafés discount, you each make ₹3,000.
- Choice: "Continue" → cafe

## cafe — mood: thinking
- Guide: Imagine both discounting: ₹3,000 each. They keep discounting. What will your café do?
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}]}
- Choice: "Keep usual prices" → c_usual (set {'c_action': 'usual'})
- Choice: "Run a discount" → c_discount (set {'c_action': 'discount'})
- Author note: Goal explicitly changes from fewer years to greater profit. Teaching controls examine one day, not coordination advice.

## c_discount (consequence) — mood: thinking
- Guide: You discounted. They still discount. You each make ₹3,000; usual prices alone would leave you ₹2,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}]}
- Choice: "Imagine their café at usual prices" → other_discount

## c_usual (consequence) — mood: thinking
- Guide: You kept usual prices. They still discount. Your ₹3,000 drops to ₹2,000—only your café changed.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 2000}, {"label": "Other café profit (₹)", "value": 6000}]}
- Choice: "Imagine their café at usual prices" → other_usual

## other_discount (consequence) — mood: thinking
- Guide: Imagine only their café switching to usual prices. Yours keeps discounting: your ₹3,000 becomes ₹6,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 6000}, {"label": "Other café profit (₹)", "value": 2000}]}
- Choice: "Compare the two choices" → c_shared

## other_usual (consequence) — mood: thinking
- Guide: Imagine only their café switching to usual prices. Yours stays usual: your ₹2,000 becomes ₹5,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 5000}, {"label": "Other café profit (₹)", "value": 5000}]}
- Choice: "Compare the two choices" → c_shared

## c_shared — mood: thinking
- Guide: They discount: you earn ₹3,000 by discounting, ₹2,000 at usual prices. Discounting pays you more.
- Choice: "Continue" → c_compare_usual

## c_compare_usual — mood: speaking
- Guide: They keep usual prices: you earn ₹6,000 by discounting, ₹5,000 at usual prices. Discounting still pays more.
- Choice: "Continue" → c_compare_both

## c_compare_both — mood: speaking
- Guide: They face the same choice. Yet both discounting earns ₹3,000 each; both keeping usual prices earns ₹5,000 each.
- Choice: "Imagine one new cost" → cost_intro

## cost_intro — mood: speaking
- Guide: One change: every discount now costs an extra ₹2,000. Usual prices cost nothing extra. Everything else stays unchanged.
- Choice: "Continue" → cost_uu

## cost_uu — mood: speaking
- Guide: Both keeping usual prices means nothing extra to pay. You still make ₹5,000 each.
- Choice: "Continue" → cost_du

## cost_du — mood: speaking
- Guide: You discount; they keep usual prices. Your ₹6,000 minus ₹2,000 leaves ₹4,000. They still earn ₹2,000.
- Choice: "Continue" → cost_ud

## cost_ud — mood: speaking
- Guide: You keep usual prices; they discount. You earn ₹2,000. After the extra cost, they earn ₹4,000.
- Choice: "Continue" → cost_dd

## cost_dd — mood: speaking
- Guide: Both discounting means ₹3,000 minus ₹2,000: ₹1,000 each. That’s after the extra cost.
- Choice: "Continue" → cost

## cost — mood: thinking
- Guide: Imagine both discounting: ₹1,000 each after the extra cost. They keep discounting. What will you do?
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 1000}, {"label": "Other café profit after cost (₹)", "value": 1000}]}
- Choice: "Keep usual prices" → new_usual (set {'new_action': 'usual'})
- Choice: "Run a discount" → new_discount (set {'new_action': 'discount'})
- Author note: New cost and all resulting profits visible before choosing. This changes best action, not just numbers. A separate authored hypothetical, not a surprise deduction or real business claim. New-cost counters use distinct labels so the engine starts at the disclosed ₹1,000/₹1,000 baseline, not the prior baseline café result.

## new_discount (consequence) — mood: thinking
- Guide: You discounted: ₹1,000 each. Usual prices would earn you ₹1,000 more, with the other café still discounting.
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 1000}, {"label": "Other café profit after cost (₹)", "value": 1000}]}
- Choice: "Pause for a thought" → reason

## new_usual (consequence) — mood: thinking
- Guide: You kept usual prices, avoiding the extra cost. They still discount. Your ₹1,000 becomes ₹2,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 2000}, {"label": "Other café profit after cost (₹)", "value": 4000}]}
- Choice: "Pause for a thought" → reason

## reason — mood: thinking
- Guide: What shaped your choice this time? Leave a note or skip it. It won’t be graded.
- Input: Write a thought, or leave blank. → finish
- Author note: Optional ungraded reflection. Blank input is accepted. No automated interpretation, correctness judgment, independent learning evidence or claim of understanding.

## finish — mood: thinking
- Guide [new_action=usual]: You kept usual prices: ₹2,000. They still discount. Discounting earns you ₹1,000; avoiding its extra cost pays more.
- Guide [default]: You discounted: ₹1,000. They still discount. Usual prices earn you ₹2,000; the extra cost now makes discounting pay less.
- Choice: "Continue" → finish_usual
- Author note: Worked causal comparison uses saved new_action, not the reflection text. The conflict is gone under changed incentives. No comprehension or transfer inference from free text. Founder selection pending; no human testing.

## finish_usual — mood: speaking
- Guide: With their usual prices, your usual prices earn ₹5,000; discounting earns ₹4,000. The extra cost changes which action pays you more.
- Choice: "Continue" → finish_both

## finish_both — mood: speaking
- Guide: Same for the other owner. Usual prices now pay more, whatever the other does. Both usual earns ₹5,000 each.
- Choice: "Continue" → takeaway

## takeaway (end) — mood: speaking
- Guide: The conflict is gone. Before “everyone should stop,” check what stopping alone changes—and what makes continuing attractive.
- Author note: Founder-requested fox-led version. No fun-gate, enjoyment, comprehension, retention or transfer claim. No real-world café forecast or coordination advice.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
