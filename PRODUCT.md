# Untangle

## Current content authority — consolidated draft 2

`chapters/CHAPTER-1-SCRIPT.md` now consolidates six core stories, their branches and transitions, twelve closing MCQs and twelve separate practice questions. It supersedes older anthology routes and assessment coverage for current content work. `chapters/chapter-1-editorial-plan.md` records which other examples remain optional. The previous master script is archived; the prototype is unchanged and does not implement this draft. Continue text review before implementation.

## Current chapter order — 5 October 2026

Chapter 1 is now the introduction to game theory: [You’re not choosing alone](chapters/chapter-1-introduction.md). Chapter 2 holds the previously drafted prisoner’s dilemma and cigarette advertising story: [Can We Trust Each Other?](chapters/chapter-2-prisoners-dilemma.md). These are text-level working drafts; the new introductory scenario has not been approved or prototyped. This order supersedes older Chapter 1 assignments and the earlier six-chapter numbering below. The later roadmap needs a separate revision; do not infer renumbering or new releases. Keep Chapter 1 as the complete website introduction and continue Chapter 2 onward in the app under the existing completion/access rule.


Untangle is a chapter-based learning app that makes studying feel like a game. Learners can complete the first game-theory chapter on the website, then install the iPhone app to continue. AI helps select practice for concepts they are struggling with.

Updated: 4 October 2026. The website offers the complete first chapter; later chapters are available in the app and unlock in order as learners complete the preceding chapter. [game-theory.md](game-theory.md) owns the curriculum, exercises, solutions, and authored scenario rules. This file owns the product experience and delivery plan.

Status: product specification, not an implemented or validated product. No native app, adaptive practice, or AI integration has been verified. Real-user test results remain open. Implementation choices below are proposed defaults; additional paid services and the AI provider need a separate decision before integration.

## 1. The job

### Founder clarification — 5 October 2026

Our alternative is Instagram scrolling, not another course. Every encounter must earn attention through a question worth resolving, an action that changes the scene, and a useful discovery. Short copy, coins and character motion cannot compensate for a predictable or shallow lesson. Preserve the reasoning in the professor’s and book’s material while making each step understandable.

Review each encounter for: curiosity before explanation; visible consequences of the learner’s move; a surprising but justified insight; a fresh everyday application; and a satisfying stopping point with saved progress. Test whether learners voluntarily continue and can explain the idea afterward. Neither our own enthusiasm nor a passed browser check proves that the experience competes with scrolling.

Current focused revision: “The missing points,” a basketball encounter about how attention from defenders can create opportunities for teammates. This is one local prototype revision, not approval of the other Chapter 1 encounters.


Help a curious learner replace some habitual scrolling with short, satisfying learning sessions that build understanding over time.

Starting audience: young Indians interested in game theory who find long courses hard to finish. Initial evidence comes from one person who enrolled in a Coursera game theory course and dropped it because the lectures were too long. This supports the problem, not proof of demand for this solution.

The learner should feel that an idea clicked through making a choice and seeing its consequences. Lessons should be short enough to fit into a break. Three to five minutes per lesson is an initial design target to test, not a measured result. A chapter contains multiple lessons; a whole chapter is not promised in five minutes.

## 2. Product direction and layers

- Platforms: a website with the complete first chapter, plus an installed iPhone app distributed through Apple's App Store for the continuing course. Android can follow; it is not required for the first release.
- Interface: readable, touch-friendly screens, visual consequences, short questions, and one clear next action. Use custom React Native components with shared colours, spacing, and typography.
- Frontend: React Native with Expo and TypeScript for iPhone, and React with TypeScript for the chapter-one website. Reuse reviewed content, answer rules, and shared types; adapt interactions to touch, keyboard, and screen readers. Expo Router handles app navigation. These are recommended implementation choices, not existing frontend code.
- Database and backend: Convex stores learning content, attempts, progress, and practice recommendations and runs the app's server-side logic.
- Accounts: Convex Auth. Start chapter one as a guest, without requiring signup. Afterward offer an account to keep progress across devices, or a short-lived, single-use transfer code to carry guest progress from the browser into the app. Verify both paths before promising continuity. Convex Auth is currently labelled beta.
- AI: called only by server-side Convex functions. Provider credentials stay off the phone. Provider, model, budget, and data-sharing terms remain open; do not add another service without agreement.
- Source code: GitHub. Codex is the development tool.
- Distribution: the mobile app requires an Apple build, signing, testing, and review workflow. Convex hosts the backend. A Convex website deployment does not publish an App Store app. The chapter-one website uses the project's Convex static-hosting workflow. Check the installed hosting skill before implementation; the existing package currently has no deploy script.

Current folder inspection found Convex installed, but no mobile frontend or deployment script in package.json. Setup and release work remain to be done.

## 3. Chapters, learning loop, and website-to-app journey

The course follows the six-topic structure detailed in [game-theory.md](game-theory.md): strategic choices; sequential decisions; hidden information; uncertainty; mixed strategies; timing with uncertainty. The supplied Bonanno textbook is a subject and teaching-structure reference. Exercises are authored for this product; this is not a digitisation of the book.

1. Open the website and begin chapter one without an account or installation request.
2. Begin each concept with a small exercise set. After the attempts and consequences, ask “What did you learn so far?”, then show the concept name prominently with a plain-language explanation tied to those exercises.
3. Complete the remaining exercises: guided application, independent application in a fresh situation, and a final “What you learned” recap.
4. Get targeted practice within chapter one when an objective needs more work.
5. Complete chapter one's lessons and exit checks. Keep the complete chapter and its review available on the website.
6. Show “Chapter 1 complete. Continue with Chapter 2 in the app.” On a phone, link to the App Store; on desktop, also offer a QR code to the same listing.
7. Carry progress into the app through the same account or a one-time guest transfer code. Do not claim an App Store link alone preserves browser progress.
8. Continue with chapter two. Complete each chapter to unlock the next published chapter. Previously completed chapters remain available for review.

Before finishing chapter one, the app may be installed at any time, but installation alone does not skip chapter-one completion. Chapter one is also available inside the app for people who start there or prefer to restart without linking browser progress.

Chapter completion means completing core lessons and independently passing checks for their learning objectives, with focused practice and new checks for missed objectives. The proposed detailed policy is in game-theory.md. Completion is a progression milestone, not a promise of permanent mastery. No points threshold, payment, or daily streak is required to unlock chapters.

Show chapter titles and short descriptions on the website, but later lesson content is part of the app experience. Never recommend locked content through AI. Unpublished chapters must say “Coming soon”; only advertise a playable chapter two when it is ready. Until an App Store listing exists, show an honest availability message rather than a broken install button.

Nash equilibrium receives an expanded discovery-and-practice lesson, with explicit comparisons of one-player changes and examples with one, multiple, or no pure-strategy equilibria. Its name must be visible on the teaching card and remain available during practice. The bill split and concert sit in chapter one; phone sale moves to chapter two. Their full authored rules now live in game-theory.md. Characters are scripted simulations, not real opponents or AI-generated players.

## 4. Interface and game elements

Wording decision from prototype review: retain the lunch-stall lesson, but use “Keep your price” and “Lower your price”. Clearly distinguish daily earnings from lunch prices. Explain whose choice changes before asking about equilibrium. The curriculum records this correction; original mathematical labels are not approved screen copy.


Proposed first-version screens:

- Learn: a chapter path, completion status, and one recommended next lesson or review activity.
- Play: the scenario, choices, and visual consequences.
- Practice: questions targeting a concept that needs more work.
- Progress: concepts explored, evidence of understanding, and areas to revisit.

Start the first website visit or fresh app launch inside the chapter-one bill-split hook; introduce the chapter path afterward. Returning learners resume their last valid step. The website has a chapter-one completion screen with the app continuation action.

Use a Duolingo-inspired sense of short rounds, warmth, and visible progress with an original Untangle identity. The initial design now includes illustrated everyday scenes, large answer buttons, a round-progress trail, brief celebrations, collectible concept cards, and 10 XP (experience points) for each newly completed lesson. The approved app-wide character is the orange fox with raspberry ear interiors and tail tip, shown in assets/avatars/fox-emotions-concept-v1.png. It replaces the earlier thread-character concept. Its name is not yet chosen. CHARACTER.md defines its identity, emotions, and role throughout the app. The detailed interactions and Lunch Rush sample lesson live in game-theory.md.

Award lesson XP once, after required activities and the recap. Hints and corrected mistakes do not reduce it; replays, duplicate taps, and progress transfers do not award it again. XP does not unlock chapters or measure understanding. Concept cards show Introduced or Practised, with review suggestions based on evidence. Chapter unlocks still depend on the existing independent completion checks.

Use a playable scene with one clear action at a time: change a price sign, place an order, choose a seat, or make an offer. Run the simulated consequences in the scene. Questions support reflection and understanding checks; a sequence of answer buttons is not the main game experience. Give feedback that explains the result, with optional sound and haptics and support for reduced motion. In simultaneous games, animations must not imply that a character saw a hidden choice before deciding. Maintain clear labels and tap alternatives to dragging.

No countdowns, limited lives, penalties for errors, or paid retries in the learning loop. Streaks and leaderboards remain later options. The website chapter finishes with a genuine recap and completion reward before offering the app continuation. These are design requirements, not implemented features.

Reveal consequences rather than treating every strategic choice as an incorrect answer. An explicit understanding question can have a correct answer, with an explanation and another chance. Show the exact concept name after the first exercise set, not after the whole chapter. Keep it visible on the teaching card, available during practice, and present in the final recap. Concept names may also appear on the chapter path; definitions and detailed explanations follow the first attempts. Ask “What did you learn so far?” before the concept explanation, then “What you learned” after the remaining exercises. Keep each screen readable, provide optional expanded reasoning, support larger text and screen readers, and do not rely on colour alone.

Every concept uses the sequence defined in game-theory.md: discovery set → reflection → named concept explanation → guided practice → independent practice → recap. Wrong opening answers do not block or postpone teaching. Correct opening answers do not skip the concept explanation. Each exercise needs a clear role in that sequence; a flat list of questions is not the intended interface.

## Simulation-first experience

Approved direction: the learner plays through situations, not a quiz dressed up with a mascot. The same fox is the learner's companion across the website, installed app, chapters, practice, and progress screens. Preserve its identity rather than generating a different mascot for each lesson.

Core loop: enter a scene → take an action in the scene → run the simulation → watch consequences → replay one changed decision → reflect → reveal the named concept → play a new variation. Keep the concept name visible after its introduction. Explicit understanding checks still matter, but should be brief and secondary to playing.

First target: Lunch Rush. The learner changes their stall's price sign between ₹20 and ₹15, then taps “Open the stall”. The simulation shows the selected prices and separately reveals each stall's daily earnings, using the existing verified payoff table. The fox reacts, points to the relevant change, and helps the learner compare a replay. The other stall's choice is fixed or committed under visible rules before the learner's reveal; it does not secretly react to a hidden choice.

Show “Try the other price” after a run, keeping the other stall's choice unchanged so the learner can see the causal difference. Preserve both outcomes for comparison. Do not give a right/wrong verdict for simply running a strategy. After checking each player's alternative, reveal Nash equilibrium and offer a fresh simulation to test the idea.

If customer movement is animated, it is illustrative unless exact customer counts, costs, and revenue calculations have been authored and checked. Do not invent customer counts to explain the fixed earnings or show quantities that contradict them. Simulations use authored rules; AI can explain or recommend the next reviewed variation, not silently change game mechanics.

Current status: the local Lunch Rush prototype now uses in-scene price controls, an Open for lunch action, animated customers, the approved fox companion, receipts, and replay comparisons. It is a browser prototype, not the native release; Convex and live AI are not connected.

## 5. Adaptive practice and AI

The first release includes targeted practice. Start with a small, reviewed question bank linked to individual concepts. Concept tags, prerequisites, lesson objectives, and chapter-specific checks are defined in game-theory.md. Initial concepts include preferences, table reading, best response, dominance, individual-versus-group outcomes, Nash equilibrium, and backward induction.

Each question records its target concept, prerequisites, rules version, correct answer or scoring rubric, difficulty, and reviewed explanation. Add several distinct questions per concept before claiming useful adaptive coverage. The three scenarios alone are not enough. Every core objective needs guided practice and distinct assessment alternatives before its chapter can be published.

Use this initial selection policy:

1. Treat untested concepts as unknown. Separate pre-explanation discovery attempts from post-explanation checks; a mistake before teaching is not evidence that teaching failed.
2. Gather evidence through explicit understanding questions, including a fresh application rather than only repeated wording.
3. After a post-explanation error, show focused feedback, then give another reviewed question on that concept or its prerequisite. Never trap the learner in opening exercises without revealing and explaining the concept.
4. After success across distinct questions, move on and schedule a later review. Use the proposed chapter completion policy in game-theory.md for progression. Validate that policy and set review intervals before release; keep completion separate from long-term mastery.
5. Keep earlier concepts in occasional review, so the learner is not trapped in one weak area.

AI can interpret a learner's short explanation against an authored rubric, propose a hint, and recommend from the eligible reviewed questions. Convex enforces published question IDs, chapter prerequisites, and game rules. Website recommendations are limited to chapter one; app recommendations are limited to unlocked chapters and earlier review. Use deterministic checks for multiple-choice scoring and payoff calculations. Treat uncertain AI assessments as uncertain and ask a clearer follow-up question; do not silently turn them into a mastery claim.

Do not infer understanding from a strategic choice, completion, response speed, or a streak. A payoff-maximising action may be a guess; a different action does not establish a misconception.

If AI fails or takes too long, use the reviewed explanation and a rule-based next question so learning can continue. Set request limits, response-size limits, timeouts, and a per-session cost budget once the provider is selected. Record which model and rubric produced an assessment.

Generating new questions live is outside the first release. New scenarios, payoffs, and answer keys require review before learners see them.

## 6. Convex data and saving progress

Proposed data groups:

| Data | Purpose |
| --- | --- |
| Learners | Account or guest identity and optional display name |
| Chapters and lessons | Ordered curriculum, published versions, availability, and required objectives |
| Concepts | Skills, prerequisites, and curriculum order |
| Activities and questions | Versioned rules, choices, answers, explanations, and concept tags |
| Sessions and attempts | Committed answers, outcomes, hints used, current step, teaching stage, and whether the concept or answer had already been revealed |
| Concept progress | Evidence from checks, uncertainty, and review timing |
| Chapter progress | Versioned completion evidence, exit checks, and unlock state |
| Learning rewards | One XP award per completed lesson and reward version; concept-card introduction and practice status |
| Progress transfers | Hashed one-time codes, expiry, claim status, and source progress |
| Practice recommendations | Selected question and reason for selection |
| AI assessments | Validated result, rubric/model version, status, and usage |

Keep identities separate from analytics payloads. Enforce ownership on the server: a learner can only access their own private progress. Public learning content must not expose other learners' records or unrevealed answer keys unnecessarily.

Use client-held guest credentials with appropriate secure storage on the phone and protected browser sessions; names are never identity or lookup keys. Verify guest-to-account linking and browser-to-app transfer preserve attempts exactly once. Signed-in learners can resume through the same account. Unlinked guest progress otherwise depends on the original browser/device credentials. Transfer codes must be random, short-lived, stored as hashes, single-use, and rate-limited. Reject expired or reused codes without deleting source progress. Do not put permanent recovery credentials into an App Store link.

Compute chapter completion and unlocks on the server from validated evidence; reject direct requests to locked or unpublished lessons. A client-supplied “chapter complete” flag is not evidence. Separate public chapter-one content from later app lesson access. The app-only rule is a distribution choice, not a claim that a client platform label proves installation or makes content impossible to copy. Define the server access boundary during implementation.

Transfer completion status and underlying attempts using an atomic, repeat-safe claim. If the app already contains guest work, merge attempts by their IDs without overwriting newer progress. Keep completed content versions attached to records. Curriculum updates must define migration before changing access and must not silently erase completed chapters.

Keep a local pending copy until Convex confirms each answer. Use unique action IDs to prevent duplicates on retries. Preserve the visible activity on save failure and show a small retry notice. Restore the choice and consequence together. Replays create new attempts without erasing earlier evidence.

Full offline learning is not a first-release promise. Preserve in-progress answers during a connection loss and explain when a connection is needed to continue.

## 7. First-release scope

Must work:

- Complete chapter one on the website, including reviewed lessons, practice, and an exit check.
- Installable iPhone app with chapter one and at least a complete, playable chapter two before advertising the continuation path.
- Six-chapter curriculum plan; chapters three through six can publish in stages and remain clearly marked until available.
- An exercise-first teaching sequence with a visible concept name, reflection, worked explanation, and further practice for every taught concept.
- Explicit understanding checks and a reviewed practice bank covering the starting concepts.
- AI-assisted feedback and targeted practice with a reliable non-AI fallback.
- Playful round progress, brief celebrations, named concept cards, and repeat-safe lesson XP awards.
- Guest first experience, optional Convex Auth account, and verified browser-to-app progress transfer.
- Sequential chapter unlocks enforced from saved completion evidence.
- Convex-backed saving, safe retries, and reliable resume.
- A readable view of which concepts need practice, without overstating certainty.

Later: more subjects, Android release, multiplayer, AI opponents, leaderboards, social sharing, live-generated lessons, and a large course catalogue.

The app-install gate is not a paywall. No monetisation, push notifications, or additional paid service is assumed. These need product decisions before adding them.

## 8. Evidence and success

Measure learning and engagement separately:

- Learning: can a learner explain individual-versus-group outcomes, apply the idea to a fresh situation, and retain understanding at a later check?
- Adaptation: does targeted practice improve performance on fresh questions, rather than only on repeated ones? Compare with a fixed practice order when there are enough learners to do so meaningfully.
- Engagement: first reveal reached, lesson finished, chapter one completed, install-link clicked, app first opened, progress transferred, chapter two started, and later return. Report counts and denominators. An App Store click is not a confirmed installation; attribution is limited to observed events and linked sessions.
- Reliability: progress restored, failed saves recovered, duplicate attempts prevented, and AI fallbacks completed.

Record question and rules versions, concept tags, attempts, assessment results, recommendation reasons, and relevant timestamps. Distinguish time away from active use. Keep an assessment's evidence available for review rather than only storing a mastery score.

Use UNTANGLE-TEST.md as an existing scenario-understanding test, not as the complete native-app or adaptive-learning test plan. Test content with the friend who quit Coursera, then with new learners. Record exact responses and assistance before coaching.

What happened in the real-user test: [OPEN — no observed findings supplied.]

What changed because of that test: [OPEN — do not invent findings.]

## 9. Build and validation order

1. Review game-theory.md and complete the chapter-one and chapter-two question banks, rubrics, and alternate exit checks.
2. Test the bill-split explanation and fresh transfer questions with learners; record findings without coaching first.
3. Build chapter one on the website with Convex saving; verify its full content can be completed without signup or installing anything.
4. Build the app's first two chapters; test on an iPhone simulator and a physical device.
5. Test chapter gates: installation without completion does not unlock chapter two; valid chapter-one completion does; later chapters require their predecessor; unpublished content remains unavailable.
6. Verify same-account resume and guest transfer, including expired/reused codes, retries, existing app progress, and rejection of access to another learner's records.
7. Check every authored game branch, the teaching sequence for correct and incorrect first attempts, visible concept names, failed saves, close/reopen at every teaching stage, new assessment attempts, and replay. Verify XP awards happen once, transfers preserve rewards, hints do not subtract points, and replay does not change chapter access. Confirm no duplicate records or loss of earned completion.
8. Add rule-based practice, then select the AI provider and budget and integrate constrained hints and rubric-based assessments. Test fallbacks and blocked recommendations for locked chapters.
9. Run a TestFlight trial, Apple's pre-release app testing process. Check accessibility, deletion flows, privacy disclosures, and App Store requirements against the implemented app.
10. Publish and verify the website using the project's Convex hosting workflow, and activate the install link only against a working App Store listing. Measure website-to-app continuation without treating clicks as installs.

No application code was built or deployed as part of this document update.

## 10. Brilliant reference review

Reviewed Brilliant's public homepage on 4 October 2026: https://brilliant.org/

Its current public positioning describes Koji, an interactive AI tutor, guiding questions and visual help, practice based on gaps, mastery assessments, and progress reporting. These are Brilliant's claims; this review did not include signed-in lessons, independent learning-effectiveness testing, or inspection of its backend.

Useful patterns for Untangle:

- Let the learner do something before reading a long explanation.
- Give a hint that helps them reason rather than immediately handing over an answer.
- Use explicit assessments to decide what needs more practice.
- Make the next useful activity easy to find.

Proposed distinction: focus on everyday strategic decisions and Indian contexts, starting with game theory. This is our intended positioning, not a claim that Brilliant lacks game theory or similar lessons. Do not copy its branding, lesson text, or artwork.

Duolingo remains inspiration for short, game-like sessions. Its current product was not reviewed here.

## 11. Open decisions and references

Open decisions: AI provider and per-session budget, account sign-in method, production animation assets for the approved fox, pricing if introduced later, and release timing for chapters three through six. The reviewed practice bank must meet the per-objective minimum in game-theory.md. These do not block content work or a first-screen prototype, but the relevant decisions must be resolved before their dependent integrations.

Technical references checked earlier in this conversation:

- Convex React Native quickstart: https://docs.convex.dev/quickstart/react-native
- Convex Auth, including mobile support and beta status: https://labs.convex.dev/auth

Distribution testing can begin with the original friend and a small group of new testers. Keep family navigation feedback separate from evidence of demand or learning. A small successful trial informs the next revision; it does not establish product-market fit.


Prototype price clarification: lunch prices are ₹20 (keep the usual price) and ₹15 (lower it). Each stall sign shows the price per lunch; a separate receipt shows daily earnings after costs. Selecting an answer previews both stalls before submission. These concrete prices label the existing actions; the authored daily-earnings table remains unchanged. The amounts are fictional game rules, not a real business forecast.


## Reference: scenario-based decisions

Reviewed [Making game theory work for managers](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/making-game-theory-work-for-managers), McKinsey, 1 December 2009, on 4 October 2026. Its useful design implication is to compare strategic options under explicit, changing assumptions rather than present one precise answer as universally correct. Our simulation applies that principle at a beginner level; it does not reproduce or validate McKinsey's proprietary model.

The first playable scene therefore has two visibly separate customer models. Learners control price, run the scene, and compare one changed decision. A second setting changes customer loyalty. The named Nash equilibrium explanation appears after all four price pairs in a setting have been explored. This is exploration progress, not evidence of understanding. No answer-selection quiz is part of the simulation loop.


### Real-world stories after practice
After a concept has been taught and practiced, offer a short optional real-world story with named authors and a source citation. Connect it explicitly to the player’s experience, distinguish the published findings from our teaching analogy, and avoid a follow-up quiz. Chapter 1 begins with the Mitchell–Mulherin cigarette advertising case detailed in `game-theory.md`. The current prototype unlocks it after all four price-sensitive outcomes and places it after the concept explanation.


### Current first-flow decision: guided Coin Camp
The first prototype now teaches only prisoner’s dilemma through the guided Coin Camp story in `game-theory.md`. The fox asks a concrete question; share/keep buttons describe the action. Four outcomes are led step by step with nighttime transitions and accumulating coins. Follow with the concept explanation and the cited cigarette example in short scenes. Hold the second example for the user. This supersedes free exploration, pricing controls, and Nash equilibrium as the opening flow.


## End-of-chapter checks — 5 October 2026

The founder requests short multiple-choice checks after chapter teaching. This is an explicit exception to the earlier avoidance of quiz-format learning: the main journey stays playable, and the closing check measures specific concepts. Chapter 1’s baseline questions and response-dependent follow-ups are specified in chapters/chapter-1-introduction.md. AI adapts feedback and chooses eligible reviewed follow-ups; published answer keys determine correctness. Keep recall, application, hinted retries and independent transfer evidence distinct. An uncertain response interpretation must lead to a clarifying item, not an asserted diagnosis. The current draft is content design only; live Convex and AI assessment routing are not implemented.


## Chapter length preference — 5 October 2026

The founder accepts a long introductory chapter. Prioritise conceptual depth and useful adaptive practice over a short total duration. Keep individual screens concise and sections resumable. Do not impose the earlier proposed three-follow-up cap; change the teaching approach when repeated attempts stop providing useful evidence. Preserve existing completion and access rules, and avoid padding or scope expansion solely to increase length.


## Chapter 1 source correction — 5 October 2026

The festival/wristband opening is retired after founder feedback. The revised text draft maps every supplied source, proposes a simple goalkeeper interaction for review, includes the professor’s green-eyed puzzle as a later guided one-person/two-person explanation, retains the taxi case and adaptive closing checks, and reserves a required McKinsey business section pending article text. The larger prisoner puzzle is optional. Do not treat the opening candidate as approved or claim the missing McKinsey case is complete. No prototype changes.


## Interest-led game routes — 5 October 2026

The founder wants multiple games that engage different learner interests. Chapter 1’s text draft proposes sports, mystery and teamwork entry routes, with common learning goals and a contrasting second game. AI may adapt both reviewed setting and learning need; learner interest must not be confused with concept understanding. Learners can change routes. Candidates need review before implementation, and the source-based taxi/McKinsey sections and adaptive closing check remain part of the chapter.


## McKinsey source integrated — 5 October 2026

The founder supplied the full text of Hagen Lindstädt and Jürgen Müller’s Making game theory work for managers (1 December 2009). Chapter 1 now includes a guided rail case: newcomer and established-operator choices, demand/cost/network/price-sensitivity assumptions, differing market-growth scenarios, successive responses, robust choices and strategy break points. Added two source-based closing questions. This supersedes earlier pending-source notes. Text only; numerical simulation rules and the alternate assessment bank remain to be reviewed. The pasted exhibit images were absent, and the case represents the article’s model scenarios rather than observed market outcomes. Interest routes now include a business/railway candidate alongside sports, mystery and teamwork.


## Expanded Chapter 1 — 5 October 2026

Founder direction: a long chapter with multiple book-based games, concept explanations after play, McKinsey at the end of teaching, then a closing MCQ check and a separate practice quiz. Current plan: chapters/chapter-1-introduction.md; ten book-inspired game storyboards plus railway capstone: chapters/chapter-1-games.md; twelve closing MCQs and twenty-four fresh practice alternatives: chapters/chapter-1-practice-bank.md. This supersedes the smaller seven-question plan and generic route proposals. Exact qualitative game branches still need implementation review; live games, Convex scoring and AI routing are not built. Chapter 2 retains prisoner’s dilemma and the cigarette example.


## Staged Chapter 1 map — 5 October 2026

Founder wants an original roadmap inspired by the idea of the supplied Duolingo path, with different styling and freely resumable stages. chapters/chapter-1-roadmap.md specifies four regions, fourteen stages, honest availability states and exact progress restoration. Continue returns to the saved scene rather than restarting or rerolling the game. It distinguishes completion from mastery and preserves quiz/feedback exposure and earned rewards. Text only; Convex sync, roadmap visuals and resume behaviour still need implementation and testing after content review.


## Response-screen correction — 5 October 2026

Each committed lesson move opens a replacement response screen with a visible consequence and the fox’s reaction. Continue replaces that screen with the next activity; do not append transcripts or setup blocks down the page. Keep alternate exploration available. Respect reduced motion, preserve the current response across reloads, and keep text readable after animation finishes.

Professor-source fidelity: the supplied foundations transcript challenges misconceptions about rationality, separates individual choice from strategic interaction, and develops common knowledge through layers of mutual awareness. It does not contain a basketball or number-game lecture. The number encounter comes from the book; its revised introduction contrasts a fixed search rule with an opponent using prior information, then teaches players/goals/interdependent outcomes and rationality. Common knowledge remains a later stage and still needs equivalent depth review. A more polished transition does not establish teaching quality.


## Script-first reset and opening hook — 5 October 2026

Founder requests a full course-content rewrite before further prototype work. `chapters/CHAPTER-1-SCRIPT.md` is the current proposed script for review; earlier scripts and the existing prototype are not approved content. No further prototype changes until the story is reviewed.

Latest opening direction: a practical game-theory case with a strong hook, using the cigarette advertising ban or a comparable source-based example. The draft now opens with a comparison of one firm stopping advertising versus both being restricted, explicitly distinguishing invented model numbers from the Mitchell–Mulherin findings. This supersedes keeping every part of the cigarette case in Chapter 2; the full prisoner’s-dilemma treatment stays there. The professor’s transcript guides the question-and-explanation approach but does not contain the cigarette lecture.


## Durable story-writing guidance

Read [STORY-WRITING.md](STORY-WRITING.md) before authoring or revising learning content. It captures founder feedback on hooks, concrete choices, concept explanation, work applications, sources and review. Project AGENTS.md routes future course work to this guide.


## Chapter curation and varied interactions — 5 October 2026

Founder approves editing Chapter 1 to its strongest stories with different central activities rather than continuing to add surprising examples. `chapters/chapter-1-editorial-plan.md` proposes six main encounters, retains other material as optional depth, places reasoning questions within stories and preserves closing MCQs plus separate practice. This supersedes treating every older anthology example as compulsory. Final assessment must be realigned to what the main route actually teaches. This is an editorial revision, not prototype authorization or learner validation.


## Subject roadmap after game theory (founder decision, 9 October 2026)

Game theory is completed first. The next subjects, in order, are behavioural economics, probability and risk, and everyday economics. Each is built with the same method: small playable lessons, mechanism before name, real Indian cases. The website now lists them as "coming" under the chapter cards; no lesson content exists for them yet, and nothing here authorises skipping the remaining game theory chapters.
