# Visual daily flow

Status: Draft. Engine checks and JavaScript syntax passed. Parent browser verification pending.

Day-three onward results now keep today’s prices, customer distribution, earnings and totals above tomorrow’s saved price counter. Confirm directly resolves the next day; day ten has no tomorrow. The original introduction and day-one/day-two teaching remain in place. Existing version-four result saves enter the combined view without resetting progress.

Four image groups represent fifty customers each. The finite price → groups → money sequence runs only after committing a price, never when adjusting the counter or refreshing. Final price labels and numeric customer counts remain visible, including zero. Reduced motion renders the final state immediately. Removing a view cancels its CSS motion; existing total-frame cancellation remains.

The new scene uses assets/customer-group.png and assets/cafes-distinct.png supplied by the parent. Distinct café art falls back to the existing café scene if unavailable. Permanent “Your café” and “Meera’s café” price labels identify each side. Existing prison art and content remain untouched.

No engine economics changed. All pair, sampled-run, saved-state, replay and migration tests pass.

Parent browser verification: full original prison and café intro route, days1/2 preserved, day3 combined result and tomorrow choice visible at375×812, changing tomorrow price leaves today signs/counts fixed, direct confirms advance one day, day10 has no tomorrow, summary reachable, no console errors. Fox restored to17px. New generated transparent customer group and architecturally distinct cafés installed. Fixed malformed quoted image fallback caught in browser; runtime syntax now passes. Logic tests pass. Reduced-motion CSS provides immediate final state; OS reduced-motion preference not separately browser-tested.
