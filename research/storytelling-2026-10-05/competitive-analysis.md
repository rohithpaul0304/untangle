# Untangle: storytelling and scenario-learning competitive review

Research date: 5 October 2026. Scope: the opening experience, choices, feedback, visual explanation, and transitions. No prototype changes made during this review.

## Conclusion

Untangle has been borrowing the appearance of a learning game without consistently giving the player a learnable game. Its cigarette scenario asks for a prediction, then introduces the customer-loss rule through the answer. The player cannot determine that saving 40 in ad costs will lose 60 in sales from the information available. The resulting 40 is an authored assumption, not a discovery the player could have reasoned toward.

This is the central repair. Better prose and animation can clarify a fair interaction; they cannot make an under-specified question fair.

The strongest reference combination is Duolingo for attention and feedback placement, The Evolution of Trust for rules and strategic discovery, and SPENT for a stable role and concrete stakes. Parable of the Polygons supplies a useful model for explaining cause visually. Brilliant supplies a direction for adaptive tutoring, with weaker evidence in this review because its lessons were not played.

## Evidence and limits

| Reference | What was inspected | Confidence and limits |
|---|---|---|
| Duolingo | Previously supplied 67-second recording; official Adventures article | Recording supports observations about exercise hierarchy and response screens. Article describes scenario mechanics. Adventures itself was not played. Recording is not evidence that Duolingo's approach teaches game theory. |
| The Evolution of Trust | Live opening; two tutorial choices and their feedback; transition to repeated play | Direct observation of the opening interaction. Did not complete the five-opponent game or later tournament. |
| SPENT | Live introduction; job selection; warehouse-job result | Direct observation of role, stakes, options, and choice-specific consequence. Did not complete the month. |
| Parable of the Polygons | Full public explanatory page, rules, and progression; attempted standalone simulation | Strong evidence for authored instructional sequence. Standalone simulation did not render its board in this inspection, so this review does not claim successful hands-on simulation testing. |
| Brilliant | Current official homepage describing Koji, its shared canvas, hints, and mastery practice | Product claims only. No authenticated lesson, no measured adaptive response, no efficacy verification. |

These are qualitative design observations, not proof of retention, learning gains, or success against Instagram. Product marketing claims are not treated as independent results. No learner study was conducted. Google search hit a CAPTCHA; direct primary product pages remained accessible.

## 1. Duolingo: the response belongs to the interaction

In the supplied recording, the task has a clear visual hierarchy: character and prompt, response area, then feedback. An answer receives a visible response before the exercise is replaced. The learner is not asked to read an expanding stack of explanations.

The Adventures article describes a closer fit to our ambitions than ordinary translation exercises. The player takes a character's role and completes an everyday task, such as finding a lost textbook or shopping. Characters redirect mistaken communication within the scene, instead of acting solely as graders.

**Borrow:** the fox should respond to the learner's actual action or expectation. The scene should acknowledge that action before adding a new event. A short response can be enough when the visual supplies the evidence.

**Do not copy blindly:** a green footer and cheerful movement do not establish a causal explanation. Translation checks and strategic decisions have different information requirements. Neither the recording nor the article implies that every screen must contain a choice.

**For Untangle:** if the learner expects savings, acknowledge the valid part: the ad bill disappeared. Then visibly show the competing effect: customer spending changed. Only afterward ask the learner to compare those effects.

## 2. The Evolution of Trust: teach a small machine, then change one condition

The opening presents a puzzle about trust, then introduces a concrete coin machine. Putting in one coin gives the other player three. The first decision fixes the other player's behavior: they do not contribute. The learner chooses between contributing and withholding.

I chose to cooperate. Feedback explained the resulting loss of one coin and the other player's gain of three, then compared that with the alternative. The next decision changed the other player's behavior while retaining the same machine. After another choice, the game introduced repeated interaction with multiple opponents.

This is a coherent bridge: same rules, new condition, new strategic question. The complexity grows from something the learner already understands.

**Borrow:** known rule → action → consequence → comparison → one new condition. Keep the playing field recognizable as the lesson advances.

**Do not copy blindly:** the opening contains more text than our desired mobile experience, and the advertised full experience is around 30 minutes. Its cooperate/cheat labels can also imply moral judgment. We should make goals explicit rather than present a payoff-maximizing move as universally correct behavior.

**For Untangle:** reveal the customer-response rule before expecting a reasoned monetary prediction. If a prediction intentionally precedes instruction, frame it as an intuition and explain the missing information afterward; do not score it as knowledge.

## 3. SPENT: the player knows what they are trying to protect

The opening gives the player a concrete predicament: limited money and a month to get through. Finding a job is an action inside that predicament, not a request to choose a lesson or test an experiment.

The job screen keeps balance and day visible. Job cards expose pay and work conditions. Selecting the warehouse job produced a relevant consequence screen about physical demands and take-home pay. The world did not change roles between selection and feedback.

**Borrow:** a stable role, a concrete objective, and a small persistent state. Make buttons describe actions that belong to that role.

**Do not copy blindly:** SPENT's heavy emotional context and some text density are not our target tone. Its historical statistics should not be reused as current facts. A serious simulation is a design reference, not automatically an attention competitor with the same audience.

**For Untangle:** decide whether the player is investigating a historical puzzle or running a business. The opening cannot casually switch between both. Investigator choices should concern evidence and predictions. Executive choices should concern decisions the executive controls.

## 4. Parable of the Polygons: the visual carries the explanation

The public page first establishes a local rule for when a shape wants to move. It introduces small neighborhoods, then a larger society, then automatic movement and a graph. Later sections change bias thresholds and starting conditions. The idea of collective consequences is tied to the same shapes and rule throughout.

Its written progression includes a particularly useful transition: reducing bias does not automatically undo an already segregated starting state. That is a new question about an existing model, not an unrelated twist.

**Borrow:** introduce the smallest visible rule before showing its large consequence. Change one setting at a time. Offer replay or reset so comparisons remain inspectable.

**Do not copy blindly:** it is a scrolling playable essay, not the screen-by-screen mobile format requested for Untangle. Its social model is explicitly simplified; visual clarity does not make a model a complete account of reality. Hands-on behavior was not fully verified in this review.

**For Untangle:** customer movement should be the event being understood. A ledger should summarize that event afterward. Changing several totals simultaneously asks the learner to reconstruct the explanation.

## 5. Brilliant: adapt to the gap, not merely the answer label

Brilliant's current homepage describes Koji working with learners on a shared visual canvas, offering guiding questions and hints, tracking gaps, and creating targeted practice. This is a materially different current positioning from relying only on older descriptions of Brilliant as a library of interactive puzzles.

**Borrow as a hypothesis:** a learner who confuses sales with money left needs a different explanation from one who understands subtraction but ignores the competitor. The fox should identify the reasoning gap.

**Do not claim yet:** this review did not test Koji, verify adaptation quality, or establish that its approach increases retention. Untangle's current authored branches are not equivalent to an adaptive AI tutor.

**For Untangle:** begin with a few tested response paths. For example, distinguish ad-cost savings, customer loss, and the rival's unchanged behavior. AI can later choose among reliable teaching moves; it should not invent payoff rules or explanations on the fly.

## Diagnosis of our current cigarette screen

1. **The key rule arrives too late.** Knowing that ads cost 40 does not tell a learner how many customers leave when ads stop. More or less money is uncertain without that assumption.
2. **The visual is a result sheet.** It displays sales, cost, and money left for two firms. It does not by itself explain why those figures changed.
3. **The initial role is weak.** Company A and B are labels, not a reason to care. The player is watching bookkeeping before owning a clear question.
4. **The fox announces the answer.** “A keeps less: 40” does not first resolve why the learner's savings intuition was incomplete.
5. **The transition leaves unfinished reasoning.** “Then the ban arrives” introduces a new event before checking whether the previous event made sense.
6. **The numerical model and history risk blending.** Invented payoffs can illustrate a mechanism, but do not establish the historical effects of the cigarette ban. We need a clean boundary in the teaching design, without cluttering every screen with disclaimers.
7. **Repeated predictions are not enough variety.** More money/less money questions can become quizzes even when followed by animation.

The product goal is worthwhile learning that earns attention otherwise spent scrolling. That requires understandable agency and useful discovery, not only surprise, points, or a mascot.

## Proposed interaction rules

These are design recommendations inferred from the comparison, not proven universal rules.

- Before asking for a decision, make role, goal, available action, and relevant rule understandable.
- Keep one immediate question in focus. Avoid simultaneous arithmetic, new characters, and a historical transition.
- Make a response change something visible in the world.
- Show the causal event before summarizing its number.
- Acknowledge the chosen response before advancing.
- Keep the setting and objects recognizable across transitions; introduce one new condition at a time.
- Use a new screen for a new task, while preserving enough visual continuity to understand what changed.
- Let players replay a consequence. A missed animation must not mean missed learning.
- Name the concept after the player has encountered the relationship. Then test it in a different situation.
- Use emotion for a reason: surprise at a reversal, concern about a loss, satisfaction after understanding. Continuous mascot motion competes with the lesson.

## What to do with the cigarette hook

Keep it as the opening mystery if desired, but do not require historical accounting before the learner understands the mechanism. The promise can be that a restriction may help the firms it restricts. The explanation must earn that surprise.

Recommended sequence for a paper storyboard:

1. **Mystery:** the ad ban creates an unexpected question. Let the learner make an unscored initial prediction.
2. **Small model:** show a clear rule for what customers do in this simplified market. No hidden customer migration rate.
3. **One action:** stop one firm's advertising while the rival continues. Follow the customer movement first.
4. **Two effects:** show the saved ad payment and lost customer spending separately. Compare the effects only after each is visible.
5. **Changed condition:** the rival's ads stop too. Keep the same world and ask what changed about the competitive advantage.
6. **Discovery:** the outcome depends on what the other firm does. Name strategic interdependence.
7. **Historical return:** connect the mechanism to the opening mystery while distinguishing the teaching model from evidence about the real ban.
8. **Transfer:** a fresh everyday or workplace decision checks understanding without reusing the same numbers.

This sequence is not approval to build eight more screens. Several beats may occur in one continuous visual scene. First test the causal story with static frames. If the customer rule takes too long to explain, use a simpler teaching mechanism and return to the cigarette case later. Preserve the hook without forcing it to carry every concept.

## Review gate before more implementation

Use three to five people who have not seen this conversation. This is a proposed small usability check, not statistically conclusive research.

Ask them, without coaching:
- What are you trying to do?
- What can you change?
- What happened after your choice, and why?
- What changed in the next situation?
- Where could this idea matter outside the game?

Record hesitation, rereading, mistaken explanations, abandonment, and voluntary continuation. Do not treat completing a screen or selecting the expected option as proof of understanding. A practical release gate is that every tester can explain the central cause without being supplied the wording; revise the failing beat before adding more lessons. Also check a still-frame version: animation should aid clarity rather than hide necessary information in a fleeting moment.

Next deliverable: one short, evidence-led storyboard for this opening, with exact visual changes, player actions, and choice-specific responses. No expansion to the other five stories until this loop makes sense.

## Primary references

These links document the research; they are not proposed citations inside learner-facing screens.

- Duolingo Adventures, official article, published 24 September 2024: https://blog.duolingo.com/adventures/
- The Evolution of Trust, live public experience: https://ncase.me/trust/
- SPENT, live public experience: https://playspent.org/html/
- Parable of the Polygons, public playable essay: https://ncase.me/polygons/
- Brilliant, current official product description: https://brilliant.org/
- User-provided Duolingo recording: /Users/rohithpaull/Downloads/ScreenRecording_10-04-2026 19-14-44_1.MP4

Local evidence screenshots: trust-rules.png, spent-jobs.png, spent-result.png. These document inspected screens, not complete product audits.
