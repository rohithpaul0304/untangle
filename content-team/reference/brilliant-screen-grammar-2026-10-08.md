# Reference: the Brilliant "Taking the First Steps" lesson (recording, 2026-10-08)

Status: Founder-approved target. "This is really good. We have to achieve this. Stick to the same look and feel."

Source: 137s screen recording of brilliant.org, Programming → Level 1 "Taking the First Steps" (Sequencing Commands), then the skill check, then streak/league/paywall screens (ignore those; they are the business layer, not the lesson).

## What the recording actually shows (timeline)

| t | Screen | What the learner does |
|---|---|---|
| 0:00 | "Drive forward and deliver the package." Map (Solitary St), program already filled: 1 drive forward, 2 deliver package. Run plays; a ▶ cursor walks the lines; checkmarks appear. | Watches a 2-line program run. First consequence at tap 1. |
| 0:04 | "Complete the delivery." Map (Botanical District, a square block). 3 dashed empty slots. Four chips below: drive forward · deliver package · turn right · turn left. Check is disabled. | Taps chips; they fly into slots. Taps Run. ▶ walks the lines; truck moves; green checks per line. |
| 0:28 | Concept card (ONLY now): "Programs are precise instructions that describe how to complete a task." plus the program and the map replaying, with a Restart button. Continue. | Reads one sentence. Can replay. |
| 0:36 | "Complete the deliveries." Bigger map (Financial District, 3×3 grid, 2 packages). 5 slots. Same four chips. | Builds a 5-line program; drag to reorder; Run; Stop appears while running. |
| 1:02 | Concept card 2: "When designing a program, writing precise pseudocode is a great first step. Then you can translate the steps into a programming language like Python." Pseudocode column next to a dark Python column, line for line. | Reads. Continue. |
| 1:10 | "Skill check" splash (mascot + purple check). | none |
| 1:12 | "Reorder the program commands. Make the robot collect the gem." Dark grid, 2×2 room, 4 lines already present but in the wrong order. Three dots of progress. | Drags lines into order. Check turns dark when the order is complete. |
| 1:30 | Problem 2 of 3 (3 lines). Problem 3 (5 lines, 2 gems). | Same. |
| 1:50 | "Correct! +15 XP" green toast; the stage fades; Continue. | none |
| 1:55 | Streak charge, Leagues, paywall. | Business layer. Not our concern now. |

Total teaching time: about 100 seconds. Words shown to the learner before their first action: 7. Words of explanation in the whole lesson: two sentences, both shown after the learner has already done the thing.

## The screen grammar (every teaching screen is the same shape)

```
[progress bar ──────  ⚡]
Prompt. One imperative sentence. ("Complete the delivery.")

┌ stage card ────────────────────────────┐
│ ● 1 left                 [District tag]│
│   (the world: map/room, the actor,     │
│    the goal; it animates on Run)       │
│ 1 [ chip      ]                        │
│ 2 [ ........  ]   ← dashed empty slots │
│ 3 [ ........  ]                        │
└────────────────────────────────────────┘
      [chip] [chip]        ← the palette, tappable
         [chip] [chip]

[ mascot ]  [        Check / Run         ]  ← disabled until valid
```

Rules the grammar enforces:
1. Prompt, stage, controls, one button. Nothing else on the screen.
2. The learner's first action is at tap 1 of the screen. No guide text to tap through.
3. Construct → Run → watch. The learner builds a thing (a program, a price plan, a move), then watches the world execute it line by line with a cursor. The consequence is enacted, never announced.
4. Wrong answers are shown by the world (the truck misses the house), not by a sentence.
5. Concept sentence appears once, after at least two completed plays, on its own card, with the thing the learner just built replaying beside it.
6. Difficulty ramp is "same mechanic, bigger world": 2 lines pre-filled → 3 slots → 5 slots and two goals → reorder what is given.
7. The skill check is 3 problems of the same mechanic with progress dots, no new teaching, then one toast ("Correct! +15 XP") and Continue.
8. Characters live inside the stage card and react there (truck turns, checkmark pops). They do not speak in body text.

## Look and feel (lift this exactly)

- Canvas: pure white. Body text #1b1b1b, 15–16px, regular weight, one short paragraph max. Font: a clean grotesque (Inter / system-ui).
- Progress bar: thin, rounded, green #2fbf4f fill on #e6e6e6, three small dots for the remaining steps, ⚡ at the right.
- Stage card: white, 1px #e3e3e3 border, 12px radius, header row with a status dot + "1 left" on the left and a tag ("Botanical DISTRICT") on the right in a bordered pill. The world is a flat illustration (soft green parks, pale grey blocks, blue-grey roads) or a dark navy grid (#101633 with #2a3470 grid lines) for the abstract version.
- Command chips: white fill, 1px #c9d4f5 border, 6px radius, text in blue #2d5bd7, verb bold ("drive") + object regular ("forward"). Empty slots: dashed #cfd6e8 border, same size. Line numbers in grey #7a7a7a to the left.
- Run state: the current line gets a ▶ and a light grey row highlight; completed lines get a green ✅ in place of the number. A "Stop" pill appears while running. After run: "Start over" with ↺.
- Buttons: full-width pill. Disabled: #efefef fill, #b5b5b5 text. Active: #2b2b2b fill, white text. Success toast: #d9f5df background, "🎉 Correct!  +15 XP", Continue pill in #2fbf4f.
- Mascot: a small green diamond/gem creature bottom-left that changes shape on success. For us: the fox, same spot, same size, same job.
- Motion: chips fly into slots (150ms), the actor moves one cell per line (~400ms per line), checkmarks pop. No page transitions longer than 200ms.

## What this means for the prisoner's dilemma lesson (map it 1:1)

- Screen 1 (pre-filled, watch it run): prompt "Watch what happens when both stay silent." Stage: two rooms, Ravi and Dev as faces. Program: 1 Ravi: stay silent · 2 Dev: stay silent. Run → the years counter fills 1 / 1 and both faces relax.
- Screen 2 (3 slots): "Get Ravi out with zero years." Chips: stay silent · talk. The learner places Ravi's move; Dev's move is shown as a locked line. Run → 0 / 5, Dev's face drops. Consequence enacted.
- Screen 3 (bigger world): "Play ten days." The café. Slots are the ten days; the chip is a price. Live preview of customers in the stage, as today. Meera's line copies yesterday.
- Concept card after screen 3: one sentence. "When the other person can answer tomorrow, the move that wins today loses the week." Replay beside it.
- Skill check: 3 reorder/choose problems on payoff grids, dots, toast, Continue.

## What to rework in our approach

1. Deck schema. Today a scene is `line + choices`. Replace the teaching-screen type with `prompt + stage + slots + palette + run`. Keep `line + choices` only for the concept card and the takeaway. The engine must animate a run (cursor walks the lines, world updates per line).
2. Text budget, enforced by check-deck.py: prompt ≤ 60 characters; no guide text on a task screen; concept card ≤ 2 sentences; concept card may not precede two completed plays.
3. Tap budget: the learner's first action on every task screen is tap 1. Taps to first consequence ≤ 3 for the whole lesson. The checker already measures this; make the limit 3, not 12.
4. Characters react in the stage, never in body copy. Delete every "Ravi says…" line; replace with a face state change or a counter.
5. One lesson = one mechanic, three worlds, three skill-check problems. The team stops writing new story beats and starts writing bigger worlds for the same mechanic.
6. Game Director plays the build on a phone before anyone writes a review. Hand-held, thumb only, 100 seconds.
7. Design tokens above go into deck-template.html as CSS variables once; nobody restyles per deck.
