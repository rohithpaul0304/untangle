# Premium illustration and motion pass

Status: Draft

File: `/tmp/fox-premium-deck.html`. Uses `assets/jewellery.png`, `assets/rooms.png`, and `assets/cafes.png`; parent supplies these generated assets. Store, room and café artwork inspected before implementation. Replaced flat SVG illustrations completely. Code-native bars remain for numbers. Single complete scene illustration sits above two compact outcome columns.

Outcome motion: explicit before values are painted immediately, statement badge settles over 220ms, then numbers and bars interpolate together over 680ms after a 230ms lead. The labelled before state remains visible. Only the three cost-introduction outcome rules animate the cost deduction; later decisions retain final after-cost values without replaying that deduction. Extra-cost rules show each original profit minus its own ₹2,000 cost, then settle to the resulting profit. No unlabelled interpolation from previous scene state. Reset scenes explicitly label reset/before. Navigation cancels the animation frame and invalidates callbacks; restart also goes through this cancellation. Controls are never delayed or blocked. Reduced motion shows final values immediately. Comparison bars are static.

Checks completed: JavaScript syntax passed; deck and character data match the current merged source exactly; no flat room/store/café SVG helpers remain. Parent performs browser, phone-size, asset-loading, animation timing, navigation cancellation and reduced-motion checks. This worker has not yet run those browser checks.
