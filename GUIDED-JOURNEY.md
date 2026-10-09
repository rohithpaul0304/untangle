# Untangle: guided journey direction

Reference: user-supplied 67-second Duolingo recording, ScreenRecording_10-04-2026 19-14-44_1.MP4. Reviewed sampled visual frames throughout, with two-second samples covering the lesson interactions from 20–66 seconds. Audio was not evaluated.

## Current product decision

Chapter 1 now introduces game theory through the text-level draft in chapters/chapter-1-introduction.md. Chapter 2 contains the prisoner’s dilemma and cited cigarette advertising story in chapters/chapter-2-prisoners-dilemma.md. The founder approved relocating that material, not a new prototype. Review the introductory festival scenario and Chapter 2 chest logic before implementation. The second real-world application remains pending. Older coin, ice-cream and lunch-price prototypes are historical experiments, not the agreed opening lesson.

## Observations from the recording

- The lesson keeps progress at the top and the main action at the bottom. The learner does not search for the next control.
- Short instructions identify a single immediate task. The central space is used for the character and interaction, with generous empty space.
- Around 20–24 seconds, selecting words changes the answer area and enables the action. A feedback panel replaces the action area after submission.
- Around 28–36 seconds, a large bear, speech bubble, listening indicator and celebratory pose make the speaking task feel like an exchange with a character.
- Around 38–54 seconds, different characters appear with distinct silhouettes and poses, while the underlying screen structure stays familiar.
- Results arrive at the place where the learner just acted. Feedback is brief and gives a clear way forward.
- The recording includes loading screens, an energy explanation, and a microphone permission prompt. These are not necessary features for our prototype.

## Translate into Untangle

Use a stable mobile stage: small progress indicator; short character prompt; large interactive scene; a fixed action area within easy thumb reach. Keep the current action visible without scrolling on a typical phone, while still allowing scrolling for larger accessibility text. One teaching beat per screen. Avoid a title, caption, instruction and dialogue all repeating the same idea.

The fox remains the guide. Scenario characters have their own goals and react to the player's move. Build intentional states: arrival, speaking, waiting for a choice, watching the outcome, surprise, concern, encouragement and celebration. Change eyes, mouth, ears, hands and posture; bobbing a static figure does not satisfy this requirement. Keep reduced-motion alternatives and do not use motion as the only carrier of meaning.

Buttons describe the action they trigger. A choice changes the scene; a results button advances the story. Do not label navigation as a decision or ask a question followed by an unrelated button. Disable a commit action only when a selection is genuinely required; show the selected action visibly. Use one tap to act when no separate confirmation is needed.

Adopt the recording's rhythm, not its quiz structure: character introduces a situation → learner makes one concrete move → characters and world react → fox gives one short explanation → next situation. Teach the pattern through outcomes, then reveal the concept name. Discovery decisions are not right/wrong answers, and a self-interested game choice is not a moral failure.

## Visual bar

Polished character silhouettes and consistent illustration style matter more than extra scenery. Use purposeful expressions and action-linked animation, readable speech bubbles, clear touch targets, consistent spacing and a restrained palette. Avoid emoji standing in for finished artwork, tiny decorative mascots, dense case-study cards, or numerical machinery that must be explained before the scenario makes sense. Do not copy Duolingo's characters, art or identity.

## Next reviewable deliverable

Create a short storyboard of the guided journey before rebuilding the lesson. Resolve character presence, prompt length, meaningful actions and transitions first. Do not implement another candidate scenario until it is selected. Test the resulting prototype from start to finish on a phone-size viewport, including alternate actions, feedback, restart and reduced motion; distinguish this self-review from testing with a new human learner.


## Chapter 1 source correction — 5 October 2026

The festival/wristband opening is retired after founder feedback. The revised text draft maps every supplied source, proposes a simple goalkeeper interaction for review, includes the professor’s green-eyed puzzle as a later guided one-person/two-person explanation, retains the taxi case and adaptive closing checks, and reserves a required McKinsey business section pending article text. The larger prisoner puzzle is optional. Do not treat the opening candidate as approved or claim the missing McKinsey case is complete. No prototype changes.


## McKinsey section ready for text review

The article text is now supplied and its railway case included in Chapter 1. Earlier notes requesting the missing text are superseded. Sports, mystery, teamwork and rail/business are candidate interest routes. Keep green-eyed reasoning later and guided; no large-group puzzle prerequisite. No new game prototype is approved by this source integration.


## Expanded Chapter 1 — 5 October 2026

Founder direction: a long chapter with multiple book-based games, concept explanations after play, McKinsey at the end of teaching, then a closing MCQ check and a separate practice quiz. Current plan: chapters/chapter-1-introduction.md; ten book-inspired game storyboards plus railway capstone: chapters/chapter-1-games.md; twelve closing MCQs and twenty-four fresh practice alternatives: chapters/chapter-1-practice-bank.md. This supersedes the smaller seven-question plan and generic route proposals. Exact qualitative game branches still need implementation review; live games, Convex scoring and AI routing are not built. Chapter 2 retains prisoner’s dilemma and the cigarette example.


## Staged Chapter 1 map — 5 October 2026

Founder wants an original roadmap inspired by the idea of the supplied Duolingo path, with different styling and freely resumable stages. chapters/chapter-1-roadmap.md specifies four regions, fourteen stages, honest availability states and exact progress restoration. Continue returns to the saved scene rather than restarting or rerolling the game. It distinguishes completion from mastery and preserves quiz/feedback exposure and earned rewards. Text only; Convex sync, roadmap visuals and resume behaviour still need implementation and testing after content review.
