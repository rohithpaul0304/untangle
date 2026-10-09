# Designer note — A

Status: Draft

**Lens:** Predict and compare. **Reference beat:** Evolution of Trust tutorial’s commit → predict → see → compare rhythm. The reference informs interaction order only: Ravi never responds to a learner move, and there are no repeated encounters, retaliation, or memory.

The player first commits to a statement against a disclosed fixed action, predicts a solo switch, then chooses whose statements change. The contrast is their own move versus both moves. Café controls repeat that distinction before a disclosed campaign cost changes the individually preferable action.

**Pacing:** 18 screens per path; 17 taps to the ending; first consequence at tap 2 on every branch; 8 multi-option decisions, of which one is an explicitly unscored prediction and one is a reason check. The authored graph has no cycles. Voluntary restart is the unchanged template control. Expected 3–5-minute duration is untested.

**Concrete boredom risk:** full rule availability and required symmetric comparisons make several screens dense. The fixed-case comparison could feel like reading numbers instead of uncovering pressure. Browser review should check phone overflow and whether the solo-versus-both control earns its place.

**Feedback:** every action branch acknowledges the selection and shows its specified consequence. Wrong changed-cost action and wrong cost reason both receive worked feedback before the alternate fixed-case attempt. This hinted attempt is not independent evidence of learning. No comprehension, retention, transfer, or enjoyment claim is earned.

**Copy revision:** Opening uses a fictional-game label and direct police deal. Methodology caveats moved to author notes. Scene graph, payoff numbers and variable assignments unchanged; original artifacts preserved in `first-pass/`.

**Limits:** checker validates structure, not browser rendering. Counters show labelled before/after outcomes; this deck does not animate statement slips or a full causal scene. Root performs browser review. No human tests.

## Structural checker

```
deck: /Users/rohithpaull/build-sprint-app/content-team/prisoners-dilemma-2026-10-08/candidates/a/deck.html
title: One statement. Two rooms. | status: Draft | candidate: A | lens: Predict and compare
scenes: 18 | reachable: 18 | decisions (2+ choices): 8 | endings: 1
first consequence (structural taps): earliest=2 | latest=2
longest declared route (structural taps): 17
Bounds include all declared condition branches, one tap per choice/input transition; they do not prove runtime state or elapsed time. Restart/back/author controls are excluded.

```

---

## Exact exported script

# One statement. Two rooms.

Status: Draft

## s01 (start) — mood: speaking
- Guide: You and Ravi robbed a jewellery store. Now you’re caught, in separate rooms. Get the fewest prison years for yourself. You can change your statement—but you cannot talk to Ravi.
- Visual: {"type": "cards", "items": [{"title": "A fictional game", "lines": ["The police offer you both the same deal. Neither sees the other’s final statement."]}]}
- Choice: "Hear the deal" → s02
- Author note: Opening choice and solo-switch prediction are unscored. The assigned goal is fewest own years, not a moral judgment. No communication or enforceable agreement. All replays are comparisons of one decision, not later encounters. Viewing or changing Ravi’s room is a teaching control only.

## s02 — mood: thinking
- Guide: The police say: “Confess and name Ravi, or stay silent.” Imagine Ravi stays silent. Which statement do you give?
- Visual: {"type": "cards", "items": [{"title": "Ravi stays silent", "lines": ["You stay silent → you 1 year; Ravi 1 year.", "You confess → you 0 years; Ravi 5 years."]}, {"title": "Ravi confesses", "lines": ["You stay silent → you 5 years; Ravi 0 years.", "You confess → you 3 years; Ravi 3 years."]}], "caption": "Confess: accept the deal and name Ravi. Stay silent: refuse the deal. Zero means no prison years."}
- Choice: "Stay silent" → s03 (set {'first': 'silent'})
- Choice: "Confess" → s03 (set {'first': 'confess'})

## s03 (consequence) — mood: thinking
- Guide [first=silent]: You stayed silent. With Ravi still silent, you each get 1 year. Changing only your statement to confess would give you 0 and Ravi 5.
- Guide [default]: You confessed. With Ravi still silent, you get 0 years and Ravi gets 5. Staying silent instead would give you each 1.
- Visual: {"first=silent": {"type": "counters", "items": [{"label": "You · years", "value": 1}, {"label": "Ravi · years", "value": 1}], "caption": "Selected: both silent. Alternative: only you confess → 0/5. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}, "default": {"type": "counters", "items": [{"label": "You · years", "value": 0}, {"label": "Ravi · years", "value": 5}], "caption": "Selected: you confess; Ravi silent. Alternative: both silent → 1/1. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}}
- Choice: "Imagine Ravi confesses" → s04

## s04 — mood: thinking
- Guide: Imagine you both confess: 3 years each. Ravi keeps his statement. If only you switch to silence, what happens to your years?
- Visual: {"type": "counters", "items": [{"label": "You · years", "value": 3}, {"label": "Ravi · years", "value": 3}], "caption": "Before: both confess. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}
- Choice: "Fewer than 3" → s05 (set {'prediction': 'fewer than 3'})
- Choice: "Still 3" → s05 (set {'prediction': 'still 3'})
- Choice: "More than 3" → s05 (set {'prediction': 'more than 3'})

## s05 (consequence) — mood: surprised
- Guide: You predicted {{prediction}}. Only your statement changed to silent: your 3 years became 5. Ravi’s became 0. Your silence cannot produce joint silence while Ravi still confesses.
- Visual: {"type": "counters", "items": [{"label": "You · years", "value": 5, "from": 3}, {"label": "Ravi · years", "value": 0, "from": 3}], "caption": "Before 3/3 → only you become silent → after 5/0. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}
- Choice: "Change the statements" → s06

## s06 — mood: thinking
- Guide: Back to both confessing: 3 years each. Let’s compare changing your statement, Ravi’s, or both. Whose statement changes?
- Visual: {"type": "counters", "items": [{"label": "You · years", "value": 3, "from": 3}, {"label": "Ravi · years", "value": 3, "from": 3}], "caption": "Starting point: both confess. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}
- Choice: "Only I stay silent" → s07 (set {'switch': 'you'})
- Choice: "Only Ravi stays silent" → s07 (set {'switch': 'ravi'})
- Choice: "We both stay silent" → s07 (set {'switch': 'both'})

## s07 (consequence) — mood: thinking
- Guide [switch=you]: You changed only your statement. Your years rise to 5; Ravi’s fall to 0. Both changing would give 1 each—but your one move cannot change his statement.
- Guide [switch=ravi]: You changed only Ravi’s statement in the comparison. His years rise to 5; yours fall to 0. Both changing would give 1 each.
- Guide [default]: You changed both statements in the comparison. You each fall from 3 years to 1. Changing only one statement would leave the silent person with 5.
- Visual: {"switch=you": {"type": "counters", "items": [{"label": "You · years", "value": 5, "from": 3}, {"label": "Ravi · years", "value": 0, "from": 3}], "caption": "3/3 → only you silent → 5/0. Other changes: only Ravi silent → 0/5; both silent → 1/1. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}, "switch=ravi": {"type": "counters", "items": [{"label": "You · years", "value": 0, "from": 3}, {"label": "Ravi · years", "value": 5, "from": 3}], "caption": "3/3 → only Ravi silent → 0/5. Other changes: only you silent → 5/0; both silent → 1/1. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}, "default": {"type": "counters", "items": [{"label": "You · years", "value": 1, "from": 3}, {"label": "Ravi · years", "value": 1, "from": 3}], "caption": "3/3 → both silent → 1/1. Other changes: only you silent → 5/0; only Ravi silent → 0/5. Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3."}}
- Choice: "Look from Ravi’s room" → s08

## s08 — mood: thinking
- Guide: Ravi has the same reason to confess. If you’re silent, he gets zero. If you confess, confessing costs him fewer years. Look at both rooms.
- Visual: {"type": "cards", "items": [{"title": "Your incentive · fewer years", "lines": ["Ravi silent: confess 0 vs silent 1.", "Ravi confesses: confess 3 vs silent 5."]}, {"title": "Ravi’s incentive · fewer years", "lines": ["You silent: he confesses 0 vs silent 1.", "You confess: he confesses 3 vs silent 5."]}]}
- Choice: "Name what happened" → s09

## s09 — mood: speaking
- Guide: Both silence beats both confession for each of you. But each can get fewer years by confessing while the other stays fixed. That’s the conflict.
- Visual: {"type": "concept", "name": "Prisoner’s dilemma", "definition": "Each person has an action that improves their own result whichever fixed action the other takes. Yet both taking it leaves each worse off than the other shared outcome. Here: 3 years each instead of 1.", "caption": "One year each beats three each. But either of you could get zero if the other stays silent."}
- Choice: "Try it in a café" → s10
- Author note: The model does not predict inevitable human behaviour; loyalty and fairness are not wrong values.

## s10 — mood: thinking
- Guide: Now you run a café near another owner’s café. Earn the most profit today—money left after costs. The other café runs a discount. What will yours do?
- Visual: {"type": "cards", "items": [{"title": "Other keeps usual prices", "lines": ["You usual → ₹5,000; other ₹5,000.", "You discount → ₹6,000; other ₹2,000."]}, {"title": "Other runs a discount", "lines": ["You usual → ₹2,000; other ₹6,000.", "You discount → ₹3,000; other ₹3,000."]}], "caption": "A fictional one-day café game. Each owner chooses without seeing the other’s final choice. No future effects or extra costs."}
- Choice: "Run a discount" → s11 (set {'cafe': 'discount'})
- Choice: "Keep usual prices" → s11 (set {'cafe': 'usual'})
- Author note: Fictional café model; not real business evidence or a recommendation to coordinate prices. Shared profits do not establish customer or societal welfare.

## s11 (consequence) — mood: thinking
- Guide [cafe=discount]: You ran a discount. With the other café still discounting, you each earn ₹3,000. Keeping your usual prices alone would give you ₹2,000.
- Guide [default]: You kept usual prices. With the other café still discounting, you earn ₹2,000; it earns ₹6,000. Your discount would raise your profit to ₹3,000.
- Visual: {"cafe=discount": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 3000}, {"label": "Other café · ₹ profit", "value": 3000}], "caption": "Baseline. Baseline · profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}, "default": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 2000}, {"label": "Other café · ₹ profit", "value": 6000}], "caption": "Baseline. Baseline · profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}}
- Choice: "Compare a shared change" → s12

## s12 — mood: thinking
- Guide: Imagine both cafés discount: ₹3,000 each. You want the ₹5,000 each from usual prices. Change yours alone—or both?
- Visual: {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 3000, "from": 3000}, {"label": "Other café · ₹ profit", "value": 3000, "from": 3000}], "caption": "Baseline: both discount. Baseline · profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000."}
- Choice: "Only I keep usual prices" → s13 (set {'priceSwitch': 'solo'})
- Choice: "We both keep usual prices" → s13 (set {'priceSwitch': 'both'})

## s13 (consequence) — mood: thinking
- Guide [priceSwitch=solo]: Only your price changed. Your profit fell from ₹3,000 to ₹2,000; the other café reached ₹6,000. Reaching ₹5,000 each needs both prices to change.
- Guide [default]: Both prices changed. Both profits rose from ₹3,000 to ₹5,000. If only yours changed, you would earn ₹2,000 while the other earned ₹6,000.
- Visual: {"priceSwitch=solo": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 2000, "from": 3000}, {"label": "Other café · ₹ profit", "value": 6000, "from": 3000}], "caption": "Before ₹3,000/₹3,000 → only your usual prices → ₹2,000/₹6,000. Baseline · Either owner: if other usual, own discount ₹6,000 vs usual ₹5,000. If other discounts, own discount ₹3,000 vs usual ₹2,000. Both usual: ₹5,000 each; both discount: ₹3,000 each."}, "default": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 5000, "from": 3000}, {"label": "Other café · ₹ profit", "value": 5000, "from": 3000}], "caption": "Before ₹3,000/₹3,000 → both usual prices → ₹5,000/₹5,000. Baseline · Either owner: if other usual, own discount ₹6,000 vs usual ₹5,000. If other discounts, own discount ₹3,000 vs usual ₹2,000. Both usual: ₹5,000 each; both discount: ₹3,000 each."}}
- Choice: "Add one new cost" → s14

## s14 — mood: thinking
- Guide: Now each café running a discount pays an extra ₹2,000 campaign cost. Usual prices pay none. Everything else stays the same. The other café still discounts. What do you do?
- Visual: {"type": "cards", "items": [{"title": "Other keeps usual prices", "lines": ["You usual → ₹5,000; other ₹5,000.", "You discount → ₹4,000; other ₹2,000."]}, {"title": "Other runs a discount", "lines": ["You usual → ₹2,000; other ₹4,000.", "You discount → ₹1,000; other ₹1,000."]}], "caption": "Final profits after the new campaign cost."}
- Choice: "Run a discount" → s15 (set {'newAction': 'discount'})
- Choice: "Keep usual prices" → s15 (set {'newAction': 'usual'})

## s15 (consequence) — mood: thinking
- Guide [newAction=discount]: You discounted again. After the campaign cost, your ₹3,000 becomes ₹1,000. Usual prices would earn ₹2,000. Why did the better choice change?
- Guide [default]: You kept usual prices and earned ₹2,000. A discount would earn you ₹1,000 after its cost. Why did the better choice change?
- Visual: {"newAction=discount": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 1000}, {"label": "Other café · ₹ profit", "value": 1000}], "caption": "With campaign cost. With campaign cost · final profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}, "default": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 2000}, {"label": "Other café · ₹ profit", "value": 1000}], "caption": "With campaign cost. With campaign cost · final profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000."}}
- Choice: "The campaign cost changed" → s16 (set {'reason': 'cost'})
- Choice: "The other price changed" → s16 (set {'reason': 'price'})

## s16 — mood: thinking
- Guide [reason=cost]: You chose the campaign cost. The new ₹2,000 cost outweighed the old ₹1,000 gain. Now imagine the other café keeps usual prices. What do you do?
- Guide [default]: You chose the other price—but it stayed at discount. The new cost made your discount earn ₹1,000 versus ₹2,000 at usual prices. Now imagine the other café keeps usual prices. What do you do?
- Visual: {"type": "cards", "items": [{"title": "With cost · other stays usual", "lines": ["Your discount: ₹6,000 − ₹2,000 = ₹4,000.", "Your usual prices: ₹5,000; no campaign cost."]}]}
- Choice: "Run a discount" → s17 (set {'fresh': 'discount'})
- Choice: "Keep usual prices" → s17 (set {'fresh': 'usual'})
- Author note: Immediate feedback includes a worked comparison before this fresh fixed-other attempt. Hinted retry is not independent learning evidence.

## s17 (consequence) — mood: thinking
- Guide [fresh=discount]: You discounted against usual prices: ₹4,000 for you. Keeping usual prices instead earns ₹5,000. The campaign cost makes repeating the old action cost you ₹1,000 in either fixed case.
- Guide [default]: You kept usual prices against usual prices: ₹5,000 each. Discounting instead earns you ₹4,000. The campaign cost changes the best action from discount to usual prices.
- Visual: {"fresh=discount": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 4000}, {"label": "Other café · ₹ profit", "value": 2000}], "caption": "Selected: you discount; other stays usual. With cost · Either owner: if other usual, own usual ₹5,000 vs discount ₹4,000. If other discounts, own usual ₹2,000 vs discount ₹1,000. Both usual: ₹5,000 each. Individually preferable choices now reach the better shared result; the old conflict is gone."}, "default": {"type": "counters", "items": [{"label": "Your café · ₹ profit", "value": 5000}, {"label": "Other café · ₹ profit", "value": 5000}], "caption": "Selected: you usual; other stays usual. With cost · Either owner: if other usual, own usual ₹5,000 vs discount ₹4,000. If other discounts, own usual ₹2,000 vs discount ₹1,000. Both usual: ₹5,000 each. Individually preferable choices now reach the better shared result; the old conflict is gone."}}
- Choice: "Take this outside the story" → s18

## s18 (end) — mood: speaking
- Guide: Before proposing “everyone should stop,” check who gains by continuing when someone else stops alone. Then check what would change that incentive.
- Visual: {"type": "concept", "name": "My move ≠ both moves", "definition": "Hold the other person’s action fixed. Compare your options. Swap perspectives. Then compare the shared outcomes—and recheck when a cost changes.", "caption": "Next: notice one “everyone should stop” proposal. What happens to the first person who stops?"}


Structure and declared-route pacing OK. This says nothing about fun, clarity or correctness.
