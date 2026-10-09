# Opening A — The extra pair of hands

## Show first

[Orange fox above six order tickets and a route: Take orders → Cook → Deliver → Doors. One helper stands beside it.]

**Fox:** “You run this lunch-delivery service. Six people want lunch. You have one extra helper. Put them where they’ll get the most lunches to people’s doors.”

**Visible game rules:**
- This is a small delivery game. Every ticket needs all three stations, in order.
- Each run: take orders, then cook accepted orders, then deliver cooked lunches.
- Numbers show each station’s limit per run. Each handles as many tickets as possible; unfinished tickets stay stuck.
- Your helper adds **2** to one station’s limit. Move the helper before running; you cannot move them during a run.
- Count lunches at doors, not orders taken or lunches cooked. There is no countdown.

**Station labels:** Take orders: **4** · Cook: **2** · Deliver: **3**.

**Controls:** Drag the helper to a station, or tap helper then station. See its new limit: **Take orders / Cook / Deliver**. Button: **Run lunch**.

## Show only after the first commitment

[Show each processing step. Tickets stop at queues; delivered lunches reach doors. Keep final counts visible.]

**If Take orders:** Six tickets enter, two become lunches, two reach doors. Four uncooked orders remain at Cook.

**Fox:** “You took all six orders. Two reached a door. Four are waiting for the kitchen.”

**If Cook:** Four tickets enter, four become lunches, three reach doors. Two tickets remain before Take orders; one cooked lunch remains before Deliver.

**Fox:** “You cooked all four accepted orders. Three reached a door. One lunch is waiting for delivery.”

**If Deliver:** Four tickets enter, two become lunches, two reach doors. Two tickets remain before Take orders; two uncooked orders remain before Cook.

**Fox:** “Delivery can now carry five lunches. But the kitchen made two, so only two reached a door.”

[Keep selected result and limits visible; mark the helper’s +2 separately.]

**Fox:** “What held the lunches back?”

[Optional unscored response. Button: **See why**.]

**Fox:** “Without the helper, the kitchen can make only two. Helping it gets three lunches delivered. Then delivery becomes the limit.”

**Visible concept:** **Bottleneck — the step that limits how much gets all the way through.**

**Fox:** “Speeding up another step can grow a queue without helping one more customer.”

Button: **Next lunch rush**.

## Show second move

[Same service. Fresh six tickets, empty queues, new oven, helper unassigned. Keep concept visible.]

**Fox:** “A second oven has arrived. The kitchen can now make four lunches without your helper. It’s a fresh lunch rush: six new orders, same rules. Place your helper to get the most lunches to doors.”

**Station labels:** Take orders: **4** · Cook: **4** · Deliver: **3**.

**Controls:** **Take orders / Cook / Deliver**. Button: **Run lunch**.

## Show only after the second commitment

**If Take orders:** Six accepted; four cooked; three delivered. Two uncooked orders wait at Cook; one cooked lunch waits at Deliver.

**Fox:** “Three delivered. You added more orders, but delivery still stops at three. The helper can get four delivered elsewhere.”

**If Cook:** Four accepted; four cooked; three delivered. Two tickets wait before Take orders; one cooked lunch waits at Deliver.

**Fox:** “Three delivered. The kitchen has room for six, but only four orders enter—and delivery stops at three. The helper can get four delivered elsewhere.”

**If Deliver:** Four accepted; four cooked; four delivered. Two tickets wait before Take orders.

**Fox:** “Four delivered—the most possible here. The kitchen improved, so delivery became the place where your helper could help another customer.”

[After three deliveries: **Move the helper** resets stage two with fresh tickets; same outcomes. Or **Finish**. No penalty.]

## Stopping point

**Fox:** “Before improving a product step, follow one customer all the way through. Which step is stopping them from getting what they came for?”

**Fox:** “Next time: can you shorten the queue without adding anyone?”

Button: **Stop here**.

## Author notes

Objective: distinguish local speed from completed customer outcomes; relocate the bottleneck after a capacity change. Fictional game, not a delivery forecast. Mechanic: place a helper and watch queues. Target one minute, untested.

Checked rule: accepted=min(6,order limit); cooked=min(accepted,kitchen limit); delivered=min(cooked,delivery limit). Outputs for order/cook/deliver placement: round one 2/3/2; round two 3/3/4. All nine combinations covered by the explicit new-batch reset. Queues reconcile to six tickets.

Corrections applied: clear role, visible rules, branch acknowledgment, causal movement, concept after play, no report editing or rewards. Approved opening untouched. Reduced motion: labelled still states. Risk: finding the smallest capacity may feel like arithmetic homework; placement alone does not prove enjoyment. Next-puzzle curiosity: change the process without adding people. Script checked; no build, independent review or human test.
