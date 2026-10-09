# Flow v2 independent logic review

Status: No blocking arithmetic or replay defects found. This is an informed implementation check, not a blind play review or evidence of human learning. Rendered browser checking remains with the coordinator.

Sources: revised flow-v2.md, project-root REJECTED.md, learning-studio/references/roles/rules-checker.md, engine.js and deck.html in /tmp/untangle-pd-20261008/flow-v2.

## Executed checks

- Independently encoded the four payoff cells and enumerated all 1,024 ten-day paths. Checked all 10,240 intermediate totals and counterpart actions, not only final totals. No discrepancies.
- Meera starts usual and thereafter copies the previous learner action. Current action never influences her current action.
- Unique learner maximum is ₹51,000: nine usual days then discount. Meera earns ₹47,000. All-usual ₹50,000 each; all-discount ₹33,000 / ₹29,000; first-day-only discount ₹48,000 each; discount-first alternating ₹40,000 each.
- All 1,024 final-day outcome lines avoid a tomorrow prompt.
- All 10,240 intermediate run states survived serialization and restoration unchanged.
- Executed the actual deck event handlers in an isolated simulated document: opening, silent prison branch, all-discount run, replay, all-usual second run and summary. Replay starts empty with zero totals; first run retains ₹33,000 / ₹29,000; second run reaches ₹50,000 each; comparison markup contains both runs; resulting save restores correctly.
- Code inspection confirms Ravi always names the learner; silent produces 5/0, naming produces 3/3. No score or moral classification is attached.
- Expressions do not feed the pricing rule. Recaps describe actual first discount and first recovery events. Invalid JSON, malformed actions, wrong totals and wrong counterpart histories are rejected by restoration logic.

## Minor discrepancies / limits

1. Expression timing differs slightly from authored copy: engine.expression marks Meera hurt on the settled day the learner discounts against usual, whereas flow-v2 says hurt the following morning. The same screen combines settled outcome and next morning's choice, so this does not alter mechanics, but the visual timing should be an intentional author decision.
2. Save validation verifies run mathematics and essential scene bounds, but does not reject every unreachable combination (for example, a completed first replay run can coexist with scene 1 if the current run is empty). This does not arise through normal controls and does not crash the inspected rendering. Optional hardening; no blocking normal-use defect observed.
3. This check does not establish image quality, usability, fun or human learning. The document simulation checks event logic and markup only, not actual browser rendering.
