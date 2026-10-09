# Opening A — The photo she meant to keep

## First screen

[Compact fox above a photo app. Two photos: birthday cake; the same cake with a handwritten private note. Both appear as thumbnails. A Delete button sits below. A short replay shows Maya select the wrong thumbnail, tap Delete, then point at the empty space.]

**Maya:** “Wait. I wanted to keep that one.”

**Fox:** “You design this photo app. Repair Delete so Maya keeps her photo. Deleting an already-selected photo should take one tap.”

**Visible rules — this fictional tester:**
- In this replay, Maya always selects the wrong photo, then taps Delete.
- On a review screen, she looks at the full photo and cancels a mistaken action.
- Without a review screen, she notices the mistake immediately after the action. She uses Undo if available.
- Delete currently erases the photo permanently. An Undo bar changes it to temporary removal: the original is kept until she leaves this screen.
- Review adds one confirmation tap to ordinary deletions. Undo adds none.

[An editable phone appears. Drag either component into the empty strip beneath Delete, or tap a component then the strip. Only one fits. Its placement and appearance preview appears immediately; Maya’s response and final outcome are shown only after Replay. You can swap before committing.]

**Components:**
- **Review sheet:** full selected photo, **Keep photo / Delete photo**. Opens before deletion.
- **Undo bar:** “Photo removed. **Undo**.” Appears after deletion; preserves the original.

Button: **Replay Maya’s tap**.

## Only after first commitment

**Review chosen:** Wrong thumbnail selected → review opens with full photo → Maya taps Keep photo → photo remains.

**Maya:** “That’s the one I want to keep.”

**Fox:** “The photo is safe. Ordinary deletions now take two taps, so your one-tap goal isn’t met. The Undo bar can keep them at one.”

**Undo chosen:** Wrong thumbnail selected → photo disappears → Undo appears → Maya taps Undo → same photo returns to its original position.

**Maya:** “There it is.”

**Fox:** “The photo came back. Ordinary deletions still take one tap. Both goals are met.”

[After either result, preserve the exact phone state.]

**Fox:** “How did your change protect the photo?”

[A reflection prompt only; no text field or grading. **See why**.]

**Fox:** “Review stopped deletion before it happened. Undo worked because the app still held the original.”

**Visible concept:** **Reversibility — whether an action can really be undone.**

**Fox:** “A useful Undo needs more than a button. It needs a way back.”

Button: **Now repair Share**.

## Second move

[Same app, same photos. Phone opens Share with the private-note photo selected. A second phone represents the recipient. Editable strip now sits beneath Send.]

**Fox:** “Now Maya’s wrong tap would send the private photo. Repair Share so the recipient never receives it. Extra taps are allowed.”

**Visible rules:**
- Maya makes the same selection mistake and follows the same review-and-Undo behavior.
- Send immediately copies the photo onto the recipient’s phone.
- Undo can remove Maya’s sent copy. It cannot remove the recipient’s copy.

**Components:**
- **Review sheet:** full selected photo, **Go back / Send photo**. Opens before sending.
- **Undo bar:** “Photo sent. **Undo**.” Appears after sending.

[Place one component beneath Send, using the same controls. Preview only the component’s placement and appearance before committing; do not reveal Maya’s response or final outcome.]

Button: **Replay Maya’s tap**.

## Only after second commitment

**Review chosen:** Full photo appears → Maya taps Go back → recipient’s phone stays empty.

**Maya:** “That note isn’t for them.”

**Fox:** “The recipient never got the photo. Here, stopping the action beforehand protects something Undo cannot recover.”

**Undo chosen:** Photo travels to both sent history and recipient’s phone → Maya taps Undo → sent history clears; recipient’s photo remains.

**Maya:** “It’s gone here. They still have it?”

**Fox:** “Yes. Your Undo removed only your copy. The privacy goal wasn’t met.”

[**Change Share** resets the fictional replay, including the recipient’s phone; both outcomes remain as written. **Finish** after an unsuccessful move shows a labelled “Another replay: review before sending”: the full photo appears, Maya taps Go back, and the recipient receives nothing. Fox: “Review catches it before a copy leaves the app.” This is a worked example, not credit for the player’s earlier move. No penalty.]

## Stopping point

**Fox:** “When designing a risky action, ask what can still be recovered afterward. That decides whether recovery is enough—or whether you must check first.”

**Fox:** “Next puzzle: a confirmation people stop reading.”

Button: **Stop here**.

## Author notes

Coordinator-controlled diversity revision after independent first drafts converged; original preserved separately. Objective: choose recovery or prevention from the action’s actual reversibility. This is declared toy behavior, not observed usability evidence or a claim about every user.

All four route combinations covered; second stage starts a separate replay. First-stage results: Review protects photo but costs two ordinary taps; Undo protects it with one. Second: only Review meets zero-recipient-copy goal. Corrections: inspect concrete behavior, edit interface, show actual causal state, stable role, disclosed constraints, acknowledge every branch, no report or allocation puzzle.

Risk: two components may still feel like a dressed-up choice question; user testing must judge this. One-minute target, untimed. No build or human test. Reduced motion: labelled before/after phones.
