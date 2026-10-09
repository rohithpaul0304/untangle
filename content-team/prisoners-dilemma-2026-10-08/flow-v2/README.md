# Adaptive café continuation

Status: Draft. Logic checks passed; browser and independent review remain separate.

The staged deck preserves prison scenes and uses the existing art and fox. Café prices now range from ₹50 to ₹100 in ₹10 steps. Minus/plus adjust a saved selection without committing a day; Confirm commits once. Controls disable at their bounds and retain focus and scroll position when adjusted.

This is an authored simulation: 200 customers buy one cup each. Equal prices split 100/100. Each ₹10 gap shifts 50 toward the cheaper café, capped at 200/0. A cup costs ₹50; the displayed “money you keep” is cups × (price − 50). Meera starts at ₹100, then copies the previous learner price. These rules are disclosed before play.

Day one separately shows cups, money kept per cup and daily money. Day two introduces yesterday + today totals. Later days use compact receipts and separate next mornings. Replay compares two actual runs. Recaps use actual numeric prices, and no optimal strategy claim appears.

State version4 migrates version2/3 prison scenes in place. Older café runs restart the revised intro with a clear notice. Selection, result subbeat and replay persist. Runtime script carries coffee=4 to avoid the earlier engine being cached.

`node test-engine.js` passed: all36price pairs, bounds, zero kept at₹50,1024sampled ten-day paths (not exhaustive), copyrule, totals, duplicate-day prevention, replay, selection saves and migration. JavaScript syntax passes. No public deployment or new service.

## Visual daily flow — 8 October 2026

From the day3 result, today’s prices, customers and money stay above tomorrow’s counter. Each illustrated group represents50 customers. Four groups move once on confirmed results; adjustments and refreshes keep the settled view. Day10 removes tomorrow controls. Café buildings now differ in shape and architecture, with permanent ownership labels on the daily visual. Nine intro beats and days1/2 teaching preserved. See visual-daily-flow-review.md for browser checks.
