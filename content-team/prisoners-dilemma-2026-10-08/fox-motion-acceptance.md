# Fox preview — motion acceptance

Status: Draft. Directed review checklist; the premium deck has not been inspected or tested by this reviewer.

Existing Motion Designer owns causal movement and final states; Delight Designer owns response, emphasis and settling; Prototype Engineer owns state changes and cancellation. No new hire is needed.

| Check | Pass condition | Owner |
|---|---|---|
| Before → change → after | Show the current statement and values, visibly change only the intended items, then leave a readable final state. Keep the important action ahead of decorative motion. | Motion Designer |
| Correct numeric state | Each screen starts from its own authored values. Forward, back, replay and restart produce the same intended numbers; no stale value, double increment or carry-over from another scene. Changing the sentence must not momentarily show the previous sentence's result as its own. | Prototype Engineer |
| Navigation cancels old motion | Navigate away mid-transition, including several quick next/back taps. Old timers and callbacks cannot change the new screen or resume hidden motion. Returning starts from a defined state and reaches the same result as a normal visit. | Prototype Engineer |
| Reduced motion | With reduced motion enabled, remove travel, zoom, bounce and decorative loops. Show the complete correct consequence as a clear still state; preserve labels, numbers and cause. Navigation and replay still work. | Motion Designer + Prototype Engineer |
| Consistent visual style | All three supplied images retain the same fox identity, palette, materials, lighting and framing. No stretched art, distracting crop, abrupt scale jump or return to the rejected flat-vector appearance. Text and controls remain readable against the art. | Delight Designer |
| Immediate response and calm finish | A click receives an immediate visible acknowledgment; the meaningful transition follows and settles. No repeated celebration for navigation, no competing movement during an explanation, and no blank pause mistaken for a broken control. | Delight Designer |

Verify each row on the rendered deck, recording the screen or route, observed result and defect owner. Include one normal forward pass, back/replay, rapid navigation during transitions, restart, and a reduced-motion pass. A static screenshot can check appearance but cannot establish timing or cancellation.

The three generated images are still artwork. Moving, fading or scaling them is presentation motion, not articulated character animation. Blinking, expression changes and coordinated body movement require distinct animation work and review. Do not call this “perfect animation”; report exactly what was inspected and what works.

Next: inspect the integrated premium deck when available and record pass/fail evidence against these checks.
