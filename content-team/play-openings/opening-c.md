# C — The queue that won’t move

Candidate only. Target: about one minute, unverified. Fictional product model, not a real performance claim. Objective: improve completed user outcomes by finding the bottleneck; recognize that tied bottlenecks can require coordinated improvements. Original scenario; no historical/source attribution. No changes to approved game-theory material.

## Screen 1 — Fix the photo booth

Fox: “You run a festival photo app. Six friends want their photos. You have two upgrades. Get as many photos to their phones as you can.”

Scene: six distinct photo tiles wait beside three connected machines: **Receive → Clean up → Send**. Their capacity signs read **4 / 2 / 4 photos per run**. Two movable upgrade pegs sit below.

Visible rules: “One run goes left to right, once. Each machine handles up to its limit; leftovers stay beside that machine. One upgrade adds 1 to a machine’s limit. You can put both upgrades together.”

Control: move each peg onto a machine, or tap a peg then a machine. Both must be placed; placements can be changed before **Run the booth**. Goal remains **Photos delivered: 0 of 6**. No countdown.

## Screen 2 — Your run

Run Receive, then Clean up, then Send. Tiles physically move; leftovers remain where blocked. Delivered tiles appear on friends’ phones. All counts stay visible after movement; still states work without animation.

All legal allocations, written Receive/Clean up/Send:

| Upgrades | Limits | Waiting before Receive / Clean up / Send | Delivered | Fox |
|---|---|---|---:|---|
| 2/0/0 | 6/2/4 | 0/4/0 | 2 | “You received all six. Four are still waiting for cleanup.” |
| 0/2/0 | 4/4/4 | 2/0/0 | 4 | “Four reached their phones. Now all three machines have the same limit.” |
| 0/0/2 | 4/2/6 | 2/2/0 | 2 | “Sending got faster. But only two photos reached it.” |
| 1/1/0 | 5/3/4 | 1/2/0 | 3 | “Three arrived. Two are stuck at cleanup; one hasn’t entered.” |
| 1/0/1 | 5/2/5 | 1/3/0 | 2 | “Both ends got faster. Three photos still wait in the middle.” |
| 0/1/1 | 4/3/5 | 2/1/0 | 3 | “Three arrived. The extra sending space stayed empty.” |

Same replacement screen, after that response:

**Bottleneck**
“Your slowest step limits what reaches the customer. Faster work elsewhere can just make a bigger queue.”

Fox: “At work, check what actually stops people finishing—not just which step you can speed up.”

One action: **Try group photos**.

## Screen 3 — Two queues, same budget

Fox: “Now six group photos arrive. Group-photo mode has different limits. Your two upgrades are free again. Can you deliver four?”

Visible rules remain. New empty machines have limits **4 / 3 / 3**. Exactly six new tiles; previous run cleared and labelled “Previous run finished.” Two unplaced upgrade pegs. Same placement and Run controls. **Bottleneck** remains a small visible label.

## Screen 4 — Result and stop

Every legal allocation:

| Upgrades | Limits | Waiting before Receive / Clean up / Send | Delivered | Fox |
|---|---|---|---:|---|
| 2/0/0 | 6/3/3 | 0/3/0 | 3 | “Receiving all six didn’t clear the cleanup queue.” |
| 0/2/0 | 4/5/3 | 2/0/1 | 3 | “Cleanup is faster. One photo now waits at Send.” |
| 0/0/2 | 4/3/5 | 2/1/0 | 3 | “Send has room. Cleanup can only pass it three.” |
| 1/1/0 | 5/4/3 | 1/1/1 | 3 | “Send still stops the fourth photo.” |
| 1/0/1 | 5/3/4 | 1/2/0 | 3 | “Cleanup still stops the fourth photo.” |
| 0/1/1 | 4/4/4 | 2/0/0 | 4 | “Four delivered. You raised both tied limits together.” |

For any three-photo result: **Move upgrades** restores this same six-photo starting state; **Finish** instead shows the two pegs moving to Clean up and Send, then the four-photo consequence. Successful run offers **Finish**.

Final fox: “Sometimes fixing one bottleneck only reveals another. Follow the whole journey.”

**Opening complete.** Optional next hook: “Next: remove a step instead of speeding it up?” No promised saved progress.

Author check: all twelve branches conserve six photos. Intended feeling: unblock a visible jam. Risk: explicit capacities may feel like a small arithmetic puzzle; enjoyment is untested. Two decisions; four peg placements, two runs, one transition, one finish; retries optional. No prototype or human test.
