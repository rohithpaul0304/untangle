# Cold play review of flow-v2 (deck.html, café version 4)

Status: AI-checked · cold play in the founder's Chrome on 8 October 2026, scripts read only afterwards. Not a human test. Prison scenes 1–6 are Founder-approved and Locked; findings there are observations, not change requests.

## Route played

Prison: Run → Caught → door opens → four offer screens → choice at tap 7 (stayed silent) → "Ravi talked", 5/0 at tap 8 → his chair (3 beats) → your chair → name at tap 13. Café: nine intro beats (taps 14–22) → day 1 (confirm ₹90; three result screens) → day 2 (₹80; result + two-day totals) → day 3 (₹100 against her ₹80: ₹0 for you, ₹6,000 for her). Remaining days, summary, replay and takeaway read from `deck.html` and `engine.js`. One run is about 49 taps; with the replay about 70. Decisions: 1 in the rooms, 10 days.

## What works

The café is a real toy now: six prices, a disclosed customer rule, a visible cost, SALE signs, Meera's expression tied to the outcome, running totals, a replay that compares two actual runs, and an ending that ties day ten back to the rooms ("the last day has no next move"). Undercutting bleeds (90 → 80 → 70 … → ₹50 keeps nothing) and climbing back costs lean days, which is the behaviour change the founder asked to see. Engine tested across all 36 price pairs and 1,024 ten-day paths. Expressions on Ravi and Meera change with events.

## Defects, with owners

1. **Nine Continue screens before day one** (Scenario Writer, Playtest Lead). The café rules are delivered one per screen, the pattern `REJECTED.md` names twice. Collapse to two screens: the time jump with the shops, then one board (price ladder; cups and money for "same price" and "₹10 cheaper") with the day-one control on the same screen. The customer rule is learned by watching day one, not by reading it.
2. **Two to four taps per day; history hidden** (Prototype Engineer, Game Director). "Open day N" is navigation; day one has three result screens, day two adds a totals screen. Make each day one tap: the closing receipt and the next morning's control on one screen, totals always visible, and the ten-day strip visible above the action instead of inside "Review prices so far".
3. **The fox goes silent where it should speak** (Scenario Writer, Character Lead). Every day's line is "Today you keep ₹X; Meera keeps ₹Y." The ₹0 day gets the same flat sentence. Add outcome lines by event (undercut, copied, climbing back, both at ₹100), one for the ₹0 day ("A ₹20 gap empties your café. Climb back ₹10 at a time."), and the day-ten line when the learner drops price after a run of ₹100 days ("Last day. No tomorrow. You grabbed the exit, same as the rooms.").
4. **Action below the fold** (Art Director, Prototype Engineer). Heading, art card, two bubbles, receipts and totals push the primary button past 800px on the concept screen and from day three on. The action must sit in thumb reach without scrolling at 375 × 812.
5. **Palette** (Art Director, founder). Cream canvas and sage buttons are the treatment `VOICE.md` records as rejected in favour of a white canvas and bright accents. The founder approved the prison scenes in this palette; either the preference changed and `VOICE.md` should say so, or the café should return to white.
6. **Small copy** (Scenario Writer). "Open day two." / "Open day three." / "Open day 4."; "Add our two days."; "Money you keep · today only".

## Fun-gate answers (AI cold play)

Role and goal by the first screen: yes. A choice I was not sure about: yes, in the rooms (tap 7) and on day three. Fair surprise: yes, the ₹0 day. Wanted to see what happens next: from day one on, yes; not during the nine intro beats. Could say what I'd do differently: yes. Second move made me use the idea: yes, the loop does. Worksheet or unclear control: the intro beats, and "Open day N" taps. Not a pass yet; the closest so far, and the first candidate whose second half is better than its first.

Observations on the locked prison act, for whenever it is reopened: the deal is four screens where one inspector message and the visible offer card would do; "If you named him …" is the mirrored hypothetical the founder's direction discourages, though it is Ravi's reasoning rather than a rewind.
