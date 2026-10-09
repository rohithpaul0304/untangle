# Candidate B — One switch. Two rooms.

Status: Draft

Lens: Toy. Reference beat: PhET / Parable of the Polygons — change one control, observe one visible effect. The main action is changing statements while the other is fixed, then changing both from the same baseline. Prison-year counters keep their labels and visibly change. All what-if controls disclose whose statement changes. The learner chooses solo-Ravi or joint first; both comparisons are seen in a bounded sequence. Café counters reuse the manipulation with a new goal, then the campaign cost reverses the best action.

Feeling sought: “My half of a better shared result can make my result worse.” This is an intention, not evidence of enjoyment or learning.

Risk: full-deal captions can feel dense; the template only supports button-driven model changes, not a persistent switchboard. Baseline café comparisons are guided more tightly than prison comparisons. No invented customer motion; only specified profits and years change.

Evidence limits: structural checker only; browser review assigned to root; no human testing, timing, retention, or transfer evidence. Two initial actions, an unscored expectation, a comparison-order choice, a café action, changed-cost action, and one reason check. No retries or cycles. The changed-cost unsuccessful path receives a worked example and a stopping point.

Source: common designer packet dated 8 October 2026. No outside content or other candidates read. Runtime and embedded fox preserved byte-for-byte outside deck JSON.

Revision: learner wording uses story language; assessment status and model caveats live in author notes. First version retained in first-pass/. Rules, numbers, branches, and runtime are unchanged.

## Exact deck export

deck: /Users/rohithpaull/build-sprint-app/content-team/prisoners-dilemma-2026-10-08/candidates/b/deck.html
title: One switch. Two rooms. | status: Draft | candidate: B | lens: Toy · one control, one visible effect
scenes: 26 | reachable: 26 | decisions (2+ choices): 6 | endings: 2
first consequence (structural taps): earliest=2 | latest=2
longest declared route (structural taps): 17
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

---

# One switch. Two rooms.

Status: Draft

## caught (start) — mood: speaking
- Guide: You and Ravi robbed a jewellery store. Now you’re caught, in separate rooms. You want the fewest prison years. You choose only your statement.
- Visual: {"type": "cards", "items": [{"title": "Fictional game", "lines": ["You cannot talk to Ravi or make a deal with him.", "Neither of you can see the other’s statement before choosing.", "Ravi wants the fewest years for himself, too."]}]}
- Choice: "See the deal" → deal
- Author note: One fictional simultaneous decision. No communication or enforceable agreement; later changes are teaching hypotheticals, not repeated encounters. Fewest own years is an assigned objective, not a moral judgment.

## deal — mood: waiting
- Guide: Confess and name Ravi, or stay silent and refuse the deal. Imagine Ravi stays silent. What do you say?
- Visual: {"type": "cards", "items": [{"title": "Your years / Ravi’s years", "lines": ["Both silent → 1 / 1", "You confess, Ravi silent → 0 / 5", "You silent, Ravi confesses → 5 / 0", "Both confess → 3 / 3", "0 means no prison years."]}]}
- Choice: "Stay silent" → silent (set {'first': 'Stay silent'})
- Choice: "Confess" → confess (set {'first': 'Confess'})
- Author note: First action is an explicitly fixed-Ravi what-if. Both actions are unscored. Full deal remains in prison captions.

## confess (consequence) — mood: thinking
- Guide: You confessed. Ravi stayed silent: you get zero years; he gets five. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}], "caption": "IMAGINE · You confess; Ravi stays silent. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Change mine to silence" → flip_silent

## silent (consequence) — mood: thinking
- Guide: You stayed silent. With Ravi silent too, the deal gives each of you one year. Now change only your statement.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}], "caption": "IMAGINE · You silent; Ravi stays silent. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Change mine to confess" → flip_confess

## flip_confess (consequence) — mood: thinking
- Guide: Only you changed: 1 → 0 years. Confessing saves you a year when Ravi stays silent.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}], "caption": "BEFORE 1/1 → NOW 0/5 · You confess; Ravi stays silent. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Compare both confessing" → both

## flip_silent (consequence) — mood: thinking
- Guide: Only you changed: 0 → 1 year. With Ravi silent, refusing the deal costs you a year.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}], "caption": "BEFORE 0/5 → NOW 1/1 · You silent; Ravi stays silent. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Compare both confessing" → both

## both — mood: thinking
- Guide: Imagine you both confess: three years each. If only you become silent, do your years fall, stay, or rise?
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 3}, {"label": "Ravi’s years", "value": 3}], "caption": "IMAGINE · Both confess. Ravi keeps confessing. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Fall" → solo (set {'expectation': 'Fall'})
- Choice: "Stay" → solo (set {'expectation': 'Stay'})
- Choice: "Rise" → solo (set {'expectation': 'Rise'})
- Author note: Bounded expectation recorded before the solo-switch consequence. All three receive the same disclosed fixed result; no score.

## solo (consequence) — mood: thinking
- Guide [expectation=Rise]: You expected a rise. Only you became silent: 3 → 5. Ravi still confesses, so silence adds two years.
- Guide [default]: You expected “{{expectation}}”. Only you became silent: 3 → 5. Ravi still confesses, so silence adds two years.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 5}, {"label": "Ravi’s years", "value": 0}], "caption": "BEFORE both confess 3/3 → only you silent 5/0. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "From 3/3: silence only Ravi" → ravi_only (set {'order': 'ravi'})
- Choice: "From 3/3: silence both" → joint (set {'order': 'joint'})
- Author note: Buttons are explicitly teaching controls from the same 3/3 baseline, not added power inside the fictional decision. The expectation is unscored; that authoring fact is not spoken to the learner.

## joint (consequence) — mood: thinking
- Guide: Both statements change to silence: three years each becomes one each. This took two changes.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}], "caption": "IMAGINE · BEFORE both confess 3/3 → both silent 1/1. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "From 3/3: silence only Ravi" → ravi_second

## ravi_only (consequence) — mood: thinking
- Guide: Only Ravi changes from confession to silence. His three years become five. Your three become zero.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}], "caption": "IMAGINE · BEFORE both confess 3/3 → only Ravi silent 0/5. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "From 3/3: silence both" → joint_second

## joint_second (consequence) — mood: thinking
- Guide: Both statements change to silence: three years each becomes one each. This took two changes.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 1}, {"label": "Ravi’s years", "value": 1}], "caption": "IMAGINE · BEFORE both confess 3/3 → both silent 1/1. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Look inside Ravi’s choice" → mirror

## ravi_second (consequence) — mood: thinking
- Guide: Only Ravi changes from confession to silence. His three years become five. Your three become zero.
- Visual: {"type": "counters", "items": [{"label": "Your years", "value": 0}, {"label": "Ravi’s years", "value": 5}], "caption": "IMAGINE · BEFORE both confess 3/3 → only Ravi silent 0/5. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "Look inside Ravi’s choice" → mirror

## mirror — mood: thinking
- Guide: Ravi faces the same pressure. Confess saves him a year if you’re silent, and two if you confess.
- Visual: {"type": "cards", "items": [{"title": "Hold YOUR statement fixed", "lines": ["You silent: Ravi confess 0 vs silent 1 year.", "You confess: Ravi confess 3 vs silent 5 years."]}, {"title": "Hold RAVI’S statement fixed", "lines": ["Ravi silent: you confess 0 vs silent 1 year.", "Ravi confess: you confess 3 vs silent 5 years."]}], "caption": "Imagine Ravi choosing. Deal · Your years / Ravi’s years: silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3 years."}
- Choice: "So why not one year each?" → name

## name — mood: thinking
- Guide: One year each beats three each. But choosing your half of silence doesn’t choose Ravi’s half.
- Visual: {"type": "concept", "name": "Prisoner’s dilemma", "definition": "Each person can improve their own result by confessing, holding the other’s choice fixed. Yet both confessing leaves both worse off than both staying silent. One year each is better for both than three, but zero is still each person’s best individual result."}
- Choice: "Try the café version" → cafe
- Author note: The outcome is pressure under the assigned goals and rules, not inevitable human behaviour. No second framework.

## cafe — mood: thinking
- Guide: You run a café near another owner’s café. You want the most profit today. Imagine you both discount. Change only your action.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}], "caption": "TODAY · Profit is money left after costs. You choose separately, without seeing the other’s choice. Only today counts; all costs are included. Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Keep usual prices" → c_usual (set {'c_action': 'usual'})
- Choice: "Run a discount" → c_discount (set {'c_action': 'discount'})
- Author note: Goal explicitly changes from fewer years to greater profit. Teaching controls examine one day, not coordination advice.

## c_discount (consequence) — mood: thinking
- Guide: You ran a discount; the other café still discounts. Profit stays ₹3,000 each. Usual prices alone would leave you ₹2,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 3000}, {"label": "Other café profit (₹)", "value": 3000}], "caption": "BASELINE · You discount; other keeps discounting. Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Hold the other at usual prices" → other_discount

## c_usual (consequence) — mood: thinking
- Guide: You kept usual prices; the other café still discounts. Your profit falls ₹3,000 → ₹2,000. Only one café changed.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 2000}, {"label": "Other café profit (₹)", "value": 6000}], "caption": "BASELINE · You usual; other keeps discounting. Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Hold the other at usual prices" → other_usual

## other_discount (consequence) — mood: thinking
- Guide: Hold your discount; change only the other café to usual. Your ₹3,000 becomes ₹6,000. Your discount gains from their usual prices.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 6000}, {"label": "Other café profit (₹)", "value": 2000}], "caption": "BASELINE IMAGINE · BEFORE discount/discount ₹3,000/₹3,000 → discount/usual ₹6,000/₹2,000. Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Compare the pressure" → c_shared

## other_usual (consequence) — mood: thinking
- Guide: Hold your usual prices; change only the other café to usual. Your ₹2,000 becomes ₹5,000. Two usual prices need two choices.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 5000}, {"label": "Other café profit (₹)", "value": 5000}], "caption": "BASELINE IMAGINE · BEFORE usual/discount ₹2,000/₹6,000 → usual/usual ₹5,000/₹5,000. Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Compare the pressure" → c_shared

## c_shared — mood: thinking
- Guide: Discount wins for either owner when the other is fixed. Yet both discounting earns less than both keeping usual prices.
- Visual: {"type": "cards", "items": [{"title": "Either owner: own profit", "lines": ["Other usual: discount ₹6,000 > usual ₹5,000.", "Other discount: discount ₹3,000 > usual ₹2,000."]}, {"title": "Both owners together", "lines": ["Both discount → ₹3,000 each.", "Both usual → ₹5,000 each.", "Only you switch from both discounting → ₹2,000 for you."]}], "caption": "BASELINE · Baseline · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Add one campaign cost" → cost

## cost — mood: thinking
- Guide: Imagine every discount costs an extra ₹2,000 today. Usual prices cost nothing extra. The other café keeps discounting. What do you do?
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 1000}, {"label": "Other café profit (₹)", "value": 1000}], "caption": "NEW COST · Both discount: ₹3,000 − ₹2,000 = ₹1,000 each. Everything else unchanged. Final profit after the extra cost: New cost · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}
- Choice: "Keep usual prices" → new_usual (set {'new_action': 'usual'})
- Choice: "Run a discount" → new_discount (set {'new_action': 'discount'})
- Author note: New cost and all resulting profits visible before choosing. This changes best action, not just numbers. A separate authored hypothetical, not a surprise deduction or real business claim.

## new_discount (consequence) — mood: thinking
- Guide: You ran a discount. Profit stays ₹1,000 each. Keeping usual prices alone would earn you ₹2,000: repeating the old action costs you ₹1,000.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 1000}, {"label": "Other café profit (₹)", "value": 1000}], "caption": "NEW COST · You discount; other keeps discounting. New cost · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}
- Choice: "Explain what changed" → reason

## new_usual (consequence) — mood: thinking
- Guide: You kept usual prices. Your ₹1,000 becomes ₹2,000; the other café still discounts. You avoid the campaign cost.
- Visual: {"type": "counters", "items": [{"label": "Your profit (₹)", "value": 2000}, {"label": "Other café profit (₹)", "value": 4000}], "caption": "NEW COST · BEFORE both discount ₹1,000/₹1,000 → you usual/other discount ₹2,000/₹4,000. New cost · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}
- Choice: "Explain what changed" → reason

## reason — mood: thinking
- Guide: Usual prices now beat a discount. Which change explains that reversal?
- Visual: {"type": "cards", "items": [{"title": "Hold the other café fixed", "lines": ["Other usual: your usual ₹5,000; discount ₹4,000.", "Other discount: your usual ₹2,000; discount ₹1,000."]}, {"title": "Hold your café fixed", "lines": ["The other owner faces the same comparisons."]}], "caption": "NEW COST · Each discount pays an additional ₹2,000. New cost · You/other: usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}
- Choice: "The discount’s extra cost" → finish_cost (set {'reason': 'cost'})
- Choice: "Both owners changed prices" → finish_both (set {'reason': 'both'})
- Author note: Reason is checked once, then worked feedback. No hinted retry is counted as independent evidence.

## finish_both (end) — mood: thinking
- Guide: Check just your café: the other still discounts. Usual earns ₹2,000; discount earns ₹1,000. The extra cost—not both moving—reversed your better action.
- Visual: {"type": "concept", "name": "Check the solo move", "definition": "With the other at usual prices too, yours earns ₹5,000 versus ₹4,000 from discounting. The other owner faces the same choice. Both usual gives ₹5,000 each; the conflict is gone. Before proposing “everyone should stop,” check stopping alone and what rewards continuing."}
- Author note: Worked correction, not mastery evidence. Draft; zero human tests. Next human-test prompt: ask for a fresh everyday example without labels.

## finish_cost (end) — mood: thinking
- Guide: Yes—the extra cost. Discount used to win; usual prices now win with the other fixed either way. Both choosing usual also earns ₹5,000 each.
- Visual: {"type": "concept", "name": "Check the solo move", "definition": "The conflict is gone in this new-cost model: each owner’s better action also reaches the better shared result. Before proposing “everyone should stop,” ask what someone gets for stopping alone—and what makes continuing attractive."}
- Author note: Next human-test prompt: ask for a fresh everyday example without these labels. Draft; zero human tests. Customer or societal benefit is not established.


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
