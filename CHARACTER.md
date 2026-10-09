# Untangle's fox companion

Status: character concept approved by the founder on 4 October 2026. Working description: the fox. No final name chosen. This is the app-wide companion, replacing the earlier Loop thread concept.

## Visual source of truth

Approved reference: [Fox emotion concept](assets/avatars/fox-emotions-concept-v1.png).

Preserve orange fur, raspberry inner ears and tail tip, cream muzzle and belly, dark nose and paws, large expressive ears, a head tuft, and a fluffy curled tail. Keep proportions and markings consistent across poses. New assets should be made using this reference, not independently invented per screen.

The approved sheet is concept artwork with four poses. A transparent standing guide asset now exists at assets/avatars/fox-guide-v1.png and appears in the playable Lunch Rush preview. It is not a full expression sprite set or skeletal animation. Production assets still need consistent dimensions, transparent backgrounds, small-size readability checks, and animation-ready poses. The earlier Loop image stays as exploration history and is not the approved companion.

## Personality

A curious, cheeky friend who experiments alongside the learner. It can be puzzled, surprised, briefly frustrated with the situation, and delighted by discovery. It never mocks the learner, looks disappointed in them for an error, or pretends to know what they understand without evidence.

Voice: “Let's try it.” “What changed?” “Wait—only your price moved.” “Now that makes sense.” Short reactions support the action; lengthy explanations belong in the concept card.

## Emotions tied to events

| Situation | Reaction | Purpose |
| --- | --- | --- |
| Enter a new scene | Curious eyes, one ear tilted | Invite exploration |
| Waiting for a choice | Calm attentive pose | Stay unobtrusive; no pressure |
| Comparing two results | Thinking pose, paw at chin | Point attention to what changed |
| An unexpected result | Ears lift, surprised face | Acknowledge the situation without marking it wrong |
| A tricky puzzle | Brief puzzled/frustrated pose, then encouragement | Normalise difficulty; never blame the learner |
| Concept reveal | Perked ears and delighted expression | Mark a discovery |
| Completed practice | Warm proud smile or small celebration | Recognise the completed effort |

## Presence across the app

- Website first chapter: welcomes the learner and participates in simulation feedback.
- App chapter path: recurring companion beside the next useful activity.
- Simulation scenes: appears as a helper within or beside the scene, with contextual gestures and props that do not change its core identity.
- Concept reveal: introduces the real concept name and points back to the learner's action.
- Targeted practice: offers calm hints and celebrates a completed retry.
- Progress and chapter completion: reacts to recorded effort without overstating mastery.

Keep the fox's role consistent: the learner controls the relevant decisions; the fox accompanies them. Other game characters have distinct identities. Do not make the fox secretly control an opponent while presenting it as the learner's helper.

## Animation and accessibility

Prefer short reactions to learner actions over constant bouncing. Idle motion should be subtle. Respect reduced motion, and make sound optional. Provide equivalent explanatory text for any learning information conveyed through movement. Nothing important should depend on noticing a facial expression alone.

## Next production step

Create a consistent transparent base pose and a small set of reusable expressions from the approved reference, then integrate them into the first playable Lunch Rush simulation. Do not claim the character is integrated until it has been seen working in the app.

## Approved soft B direction and expression preview

The user selected soft B for the flat interface and approved the local blink/head-tilt preview. Keep the fox compact at the bottom of the phone, roughly 125–150px in this preview. The current expression review is `prototypes/lunch-rush/fox-b.html`, using the original artwork and matching pose frames under `fox-b/`. It includes waiting, speaking, thinking, surprised and celebrating. The older geometric SVG fox is historical and does not represent the approved visual direction. Continue using the softer natural anatomy, compact proportions and rounded legs from the approved stills. No audio or external animation generation is required for this local preview.

## Both-paw expression update

The current B preview uses versioned artwork for all five expressions, with both paws visible in front. Celebration raises both paws and uses two playful alternating hops. Thinking pairs a chin gesture with the second paw across the chest; surprise opens both palms; waiting and speaking use welcoming and explanatory gestures. Keep the compact bottom placement. These remain image-based motion previews, not a joint-rigged character.

## Grounded gestures replace jiggle

The B preview now renders twelve-pose gesture sheets through a fixed canvas. The body is grounded; movement comes from changing connected arm/paw poses, expressions, gaze and mouth shapes. Wave, explain, think, react and celebrate play once and settle rather than looping continuously. The compact bottom placement remains. This is a gesture prototype, with frame consistency and timing still to polish; it is not yet the smooth production animation shown in the Duolingo reference.
