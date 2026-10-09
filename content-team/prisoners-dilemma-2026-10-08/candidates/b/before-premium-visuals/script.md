# Candidate B — One switch. Two rooms.

Status: Draft

Lens: Toy. Reference beat: PhET / Parable of the Polygons — one changed control, one visible effect. The learner changes only their own statement, compares individual and joint changes, then applies the idea to cafés and an added cost.

Founder revision: all dialogue, disclosed rules, definition and causal explanation are spoken by the fox in sequence. No prose cards, concept cards, tables or captions appear above the fox. Only numerical result counters remain. The explicit founder instruction supersedes VOICE’s preference for putting longer explanations in concept cards.

The four prison outcomes are spoken individually before the first statement choice. The café rules and all changed-cost outcomes are likewise disclosed before their choices. Comparison resets are explained in the fox’s own words, with no misleading counter animation.

Tradeoff: this is longer than the earlier 18-beat candidate because the founder requested rules one at a time before play. All dialogue stays short, but pacing and memory load need human review. The full deal is disclosed sequentially rather than kept in a persistent card, as requested.

First statement choice and bounded expectation remain unscored. Optional free text is saved without interpretation. The changed-cost action drives the worked feedback; no understanding is inferred from the reflection. No cycles or retry evidence.

Evidence: structural checker and numerical/state review only; root handles browser review. No human-test, fun, retention or transfer claim. Sources: common designer packet; current project AGENTS.md and VOICE.md. No other candidates inspected. The deck runtime, root’s Review notes control and embedded fox remain unchanged. Previous version: before-fox-only-repair/.

Accountability: earlier deck authored by Designer B; coordinator delivery review missed fox-led context. User corrections now recorded.

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
- Guide: Step into a fictional story with me. You’ll make a choice, then we’ll see what it changes.
- Choice: "Let’s begin" → caught
- Author note: Earlier deck authored by Designer B; coordinator delivery review missed fox-led context. User corrections now recorded. No attribution about other reviewers.

## caught — mood: speaking
- Guide: You and your accomplice Ravi robbed a jewellery store. You’re both caught. Now you’re in separate rooms.
- Choice: "Continue" → goal

## goal — mood: speaking
- Guide: Your goal is the fewest prison years for yourself. Ravi wants the fewest for himself.
- Choice: "Continue" → actions

## actions — mood: speaking
- Guide: You choose your statement: confess and name Ravi, or stay silent and refuse the deal.
- Choice: "Continue" → separate

## separate — mood: speaking
- Guide: You cannot talk to Ravi or make an agreement. Neither of you sees the other’s statement before choosing. Here’s the whole deal.
- Choice: "Continue" → rule_ss

## rule_ss — mood: speaking
- Guide: If you both stay silent, you each get one year.
- Choice: "Continue" → rule_cs

## rule_cs — mood: speaking
- Guide: If you confess and Ravi stays silent, you get zero years. Ravi gets five. Zero means no prison years.
- Choice: "Continue" → rule_sc

## rule_sc — mood: speaking
- Guide: If you stay silent and Ravi confesses, you get five years. Ravi gets zero.
- Choice: "Continue" → rule_cc

## rule_cc — mood: speaking
- Guide: If you both confess, you each get three years. Let’s see what your statement changes.
- Choice: "Continue" → deal

## deal — mood: waiting
- Guide: Imagine Ravi stays silent. Your silence gives you one year; confessing gives you zero. What do you say?
- Choice: "Stay silent" → silent (set {'first': 'Stay silent'})
- Choice: "Confess" → confess (set {'first': 'Confess'})
- Author note: First choice unscored. Complete deal disclosed in four prior fox beats. Later scenes are explicitly imagined comparisons of this same fictional decision.

## confess (consequence) — mood: thinking
- Guide: You confessed while Ravi stayed silent. You get zero years; he gets five. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}]}
- Choice: "Change mine to silence" → flip_silent

## silent (consequence) — mood: thinking
- Guide: You stayed silent. Ravi stayed silent too: one year each. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}]}
- Choice: "Change mine to confess" → flip_confess

## flip_confess (consequence) — mood: thinking
- Guide: Only you changed: 1 → 0 years. Confessing saves you a year when Ravi stays silent.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}]}
- Choice: "Compare both confessing" → both

## flip_silent (consequence) — mood: thinking
- Guide: Only you changed: 0 → 1 year. With Ravi silent, refusing the deal costs you a year.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}]}
- Choice: "Compare both confessing" → both

## both — mood: thinking
- Guide: Now imagine you both confess: three years each. Ravi keeps confessing. If only you become silent, do your years fall, stay, or rise?
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 3}, {"label": "Ravi’s years", "value": 3}]}
- Choice: "Fall" → solo (set {'expectation': 'Fall'})
- Choice: "Stay" → solo (set {'expectation': 'Stay'})
- Choice: "Rise" → solo (set {'expectation': 'Rise'})
- Author note: Bounded expectation recorded before the solo-switch consequence. All three receive the same disclosed fixed result; no score.

## solo (consequence) — mood: thinking
- Guide [expectation=Rise]: You expected a rise. Only you became silent: your three years become five. Ravi still confesses, so he gets zero.
- Guide [default]: You expected “{{expectation}}”. Only you became silent: your three years become five. Ravi still confesses, so he gets zero.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 5}, {"label": "Ravi’s years", "value": 0}]}
- Choice: "Imagine only Ravi stays silent" → ravi_only (set {'order': 'ravi'})
- Choice: "Imagine both stay silent" → joint (set {'order': 'joint'})
- Author note: Buttons are explicitly teaching controls from the same 3/3 baseline, not added power inside the fictional decision. The expectation is unscored; that authoring fact is not spoken to the learner.

## joint (consequence) — mood: thinking
- Guide: Imagine starting at three years each again. Both stay silent: now it’s one year each. That better result took two changes.
- Choice: "Imagine only Ravi stays silent" → ravi_second
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## ravi_only (consequence) — mood: thinking
- Guide: Imagine starting at three years each again. Only Ravi stays silent: his years rise to five; yours fall to zero.
- Choice: "Imagine both stay silent" → joint_second
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## joint_second (consequence) — mood: thinking
- Guide: Imagine starting at three years each again. Both stay silent: now it’s one year each. That better result took two changes.
- Choice: "Look inside Ravi’s choice" → mirror
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## ravi_second (consequence) — mood: thinking
- Guide: Imagine starting at three years each again. Only Ravi stays silent: his years rise to five; yours fall to zero.
- Choice: "Look inside Ravi’s choice" → mirror
- Author note: Reset comparison spoken explicitly from 3/3. No counter visual, hence no misleading animation from prior scenario.

## mirror — mood: speaking
- Guide: Look at Ravi’s choice. If you stay silent, he gets zero by confessing, or one by staying silent. Confessing saves him a year.
- Choice: "Continue" → mirror_confess

## mirror_confess — mood: speaking
- Guide: If you confess, Ravi gets three by confessing, or five by staying silent. Confessing saves him two years. He faces the same pressure.
- Choice: "Continue" → your_pressure

## your_pressure — mood: speaking
- Guide: You do too. If Ravi stays silent, confessing gives you zero instead of one. If he confesses, it gives you three instead of five.
- Choice: "Continue" → name

## name — mood: speaking
- Guide: That’s the prisoner’s dilemma: confessing improves each person’s own result, whichever statement the other makes.
- Choice: "Continue" → name_shared

## name_shared — mood: speaking
- Guide: Yet both confessing gives you three years each. Both staying silent gives you one each. Your better individual choices can leave both of you worse off.
- Choice: "Continue" → name_best

## name_best — mood: speaking
- Guide: One year each is better for both than three each. But one isn’t your best possible result—zero is. Choosing your half doesn’t choose Ravi’s.
- Choice: "Try the café version" → cafe_intro

## cafe_intro — mood: speaking
- Guide: Now you run a café near another owner’s café. In this made-up example, you want the most profit today—money left after costs.
- Choice: "Continue" → cafe_rules

## cafe_rules — mood: speaking
- Guide: You each choose a discount or usual prices, without seeing the other’s choice. Only today counts. All costs are included. Here are the four results.
- Choice: "Continue" → cafe_uu

## cafe_uu — mood: speaking
- Guide: If both cafés keep usual prices, you each make ₹5,000.
- Choice: "Continue" → cafe_du

## cafe_du — mood: speaking
- Guide: If you discount and the other café keeps usual prices, you make ₹6,000. They make ₹2,000.
- Choice: "Continue" → cafe_ud

## cafe_ud — mood: speaking
- Guide: If you keep usual prices and the other café discounts, you make ₹2,000. They make ₹6,000.
- Choice: "Continue" → cafe_dd

## cafe_dd — mood: speaking
- Guide: If both cafés discount, you each make ₹3,000.
- Choice: "Continue" → cafe

## cafe — mood: thinking
- Guide: Imagine you both discount: ₹3,000 each. The other café keeps discounting. Change only your action: usual prices or a discount?
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}]}
- Choice: "Keep usual prices" → c_usual (set {'c_action': 'usual'})
- Choice: "Run a discount" → c_discount (set {'c_action': 'discount'})
- Author note: Goal explicitly changes from fewer years to greater profit. Teaching controls examine one day, not coordination advice.

## c_discount (consequence) — mood: thinking
- Guide: You ran a discount; the other café still discounts. Profit stays ₹3,000 each. Usual prices alone would leave you ₹2,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}]}
- Choice: "Hold the other at usual prices" → other_discount

## c_usual (consequence) — mood: thinking
- Guide: You kept usual prices; the other café still discounts. Your profit falls ₹3,000 → ₹2,000. Only one café changed.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 2000}, {"label": "Other café profit (₹)", "value": 6000}]}
- Choice: "Hold the other at usual prices" → other_usual

## other_discount (consequence) — mood: thinking
- Guide: Hold your discount; change only the other café to usual. Your ₹3,000 becomes ₹6,000. Your discount gains from their usual prices.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 6000}, {"label": "Other café profit (₹)", "value": 2000}]}
- Choice: "Compare the pressure" → c_shared

## other_usual (consequence) — mood: thinking
- Guide: Hold your usual prices; change only the other café to usual. Your ₹2,000 becomes ₹5,000. Two usual prices need two choices.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 5000}, {"label": "Other café profit (₹)", "value": 5000}]}
- Choice: "Compare the pressure" → c_shared

## c_shared — mood: thinking
- Guide: When the other café discounts, you earn ₹3,000 by discounting or ₹2,000 at usual prices. Discounting pays you more.
- Choice: "Continue" → c_compare_usual

## c_compare_usual — mood: speaking
- Guide: When the other keeps usual prices, you earn ₹6,000 by discounting or ₹5,000 at usual prices. Discounting still pays you more.
- Choice: "Continue" → c_compare_both

## c_compare_both — mood: speaking
- Guide: The other owner faces the same choices. Yet both discounting earns ₹3,000 each, while both keeping usual prices earns ₹5,000 each.
- Choice: "Imagine one new cost" → cost_intro

## cost_intro — mood: speaking
- Guide: Now imagine each discount costs an extra ₹2,000 today. Usual prices cost nothing extra. Everything else stays the same.
- Choice: "Continue" → cost_uu

## cost_uu — mood: speaking
- Guide: With the new cost, both keeping usual prices still earns ₹5,000 each.
- Choice: "Continue" → cost_du

## cost_du — mood: speaking
- Guide: If you discount and they keep usual prices, your ₹6,000 minus the ₹2,000 cost leaves ₹4,000. They still make ₹2,000.
- Choice: "Continue" → cost_ud

## cost_ud — mood: speaking
- Guide: If you keep usual prices and they discount, you still make ₹2,000. They make ₹4,000 after the cost.
- Choice: "Continue" → cost_dd

## cost_dd — mood: speaking
- Guide: If both discount, each makes ₹3,000 minus ₹2,000: ₹1,000 each. Those are all the new profits.
- Choice: "Continue" → cost

## cost — mood: thinking
- Guide: Imagine you both discount: ₹1,000 each after the new cost. The other café keeps discounting. What do you choose?
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 1000}, {"label": "Other café profit after cost (₹)", "value": 1000}]}
- Choice: "Keep usual prices" → new_usual (set {'new_action': 'usual'})
- Choice: "Run a discount" → new_discount (set {'new_action': 'discount'})
- Author note: New cost and all resulting profits visible before choosing. This changes best action, not just numbers. A separate authored hypothetical, not a surprise deduction or real business claim. New-cost counters use distinct labels so the engine starts at the disclosed ₹1,000/₹1,000 baseline, not the prior baseline café result.

## new_discount (consequence) — mood: thinking
- Guide: You ran a discount. Profit stays ₹1,000 each. Discounting now earns you ₹1,000 less than usual prices.
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 1000}, {"label": "Other café profit after cost (₹)", "value": 1000}]}
- Choice: "Explain what changed" → reason

## new_usual (consequence) — mood: thinking
- Guide: You kept usual prices. Your ₹1,000 becomes ₹2,000; the other café still discounts. You avoid the campaign cost.
- Visual: {"type": "counters", "items": [{"label": "Your profit after cost (₹)", "value": 2000}, {"label": "Other café profit after cost (₹)", "value": 4000}]}
- Choice: "Explain what changed" → reason

## reason — mood: thinking
- Guide: What shaped your choice this time? You can leave a note or skip it. I won’t judge what you write.
- Input: Write a thought, or leave blank. → finish
- Author note: Optional ungraded reflection. Blank input is accepted. No automated interpretation, correctness judgment, independent learning evidence or claim of understanding.

## finish — mood: thinking
- Guide [new_action=usual]: You kept usual prices: ₹2,000. With the other still discounting, a discount earns you ₹1,000. Avoiding that cost pays you ₹1,000 more.
- Guide [default]: You ran a discount: ₹1,000. With the other still discounting, usual prices earn ₹2,000. The added cost makes discounting earn you ₹1,000 less.
- Choice: "Continue" → finish_usual
- Author note: Worked causal comparison uses saved new_action, not the reflection text. The conflict is gone under changed incentives. No comprehension or transfer inference from free text. Founder selection pending; no human testing.

## finish_usual — mood: speaking
- Guide: Even if the other keeps usual prices, yours now earns ₹5,000 versus ₹4,000 with a discount. The added cost reverses which action pays you more.
- Choice: "Continue" → finish_both

## finish_both — mood: speaking
- Guide: The other owner faces the same choice. Usual prices now pay each of you more, whichever action the other takes. Both usual earns ₹5,000 each.
- Choice: "Continue" → takeaway

## takeaway (end) — mood: speaking
- Guide: The conflict is gone. Before saying “everyone should stop,” check what one person gets for stopping alone—and what makes continuing attractive.
- Author note: Founder-requested fox-led version. No fun-gate, enjoyment, comprehension, retention or transfer claim. No real-world café forecast or coordination advice.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
