# DESIGN.md

Read this before building or changing any Untangle screen: the website (`site/site.html`) or the lesson (`lesson.html`). If a choice isn't covered here, ask Rohith instead of guessing.

## 1. The feeling, in labels

- **The interrogation room**: Inspector Sharma's dark room (noir, near-black, a warm bulb) makes the stakes feel real. The player is Ravi, and what happens to Ravi actually happens. Nothing is hypothetical.
- **The fox coach**: the fox sits at the bottom of the screen and says one short line: the rule, the nudge, or why an answer was wrong. It never lectures from the top of the screen.
- **The case card**: two side-by-side cards with a face or an illustration, a move label and the result (years, ₹ a day). Every choice is shown as pictures you can compare, never as a grid of numbers.
- **The board game box**: the website feels like opening a game you want to play (butter lid, navy walls, chapter tokens), not like reading a course catalogue.
- **The Renaissance opening**: Leonardo learned by doing. The site promises the same: your hands on the idea in ten minutes, instead of scrolling.

## 2. References, one per component

**Desktop lesson frame**: Brilliant's desktop lesson view (Rohith's screenshot, 14 Oct 2026)
Take: full-width top bar (close on the left, progress bar centred, XP on the right); one large rounded card under it; a centred content column of about 720px; the main button docked at the bottom of the card; the "Not quite" bar docking inside the card bottom.
Ignore: Brilliant's colours, fonts, the logic-puzzle content and the side chat button.

**Lesson cards, chips and black pill buttons**: the "Brainy Pop" style pass already in the lesson CSS
Take: warm paper background, soft cards with a 1.5px warm border and 16 to 20px radius, black pill buttons, small uppercase chips ("New idea · 1 of 8").
Ignore: anything that adds emoji, extra accent colours or decoration.

**Try again with Why**: Brilliant's wrong-answer pattern
Take: a wrong pick never just turns red. A bar slides up with "Not quite.", a one-line reason, a "Why?" link and "Try again".
Ignore: streak counters, hearts and lives.

**App section**: a physical board game box (the Three.js box on the site)
Take: a butter lid, navy tray, chapter board with tokens, subject cards, and a lid that opens as you scroll.
Ignore: realism for its own sake. It is a toy, not a product render.

**Character art**: the chapter 1 Pixar-style renders (Ravi, Meera, Inspector Sharma, the fox)
Take: role-clear details (uniform, badge, station, props) and readable emotion on every face.
Ignore: plain passport-style headshots with neutral faces. They don't read as a role.

**Design taste overall**: Linear, Teenage Engineering OP-1
Take: restraint. One idea per screen, a few strong colours, nothing decorative that isn't doing a job.

## 3. Type and colour

**Font**: Bricolage Grotesque for everything (Inter, then the system font, as fallback). No second typeface.

**Sizes** (lesson, as drawn for a phone; desktop scales the whole lesson up 1.25x):
- 30 to 34px, weight 800: the new term ("A game", "Dominant strategy") and screen titles.
- 17 to 19px: the definition, the question and dialogue lines.
- 15 to 16px: body text, fox lines and card labels.
- 11 to 13px, uppercase, letter-spaced: chips and kickers ("Check · Dominant strategy", "Case 1 of 2").

**Website sizes**: the hero headline is clamp(38px, 5.4vw, 72px); section headlines are clamp(36px, 5vw, 64px); the lead text is 19 to 20px; body text is 17px.

**Colours**:
- Website: navy ink `#10233F` on paper `#FFFCF2`. The accent is butter `#FFD84D`, used on the hero, the "Play free" button and the free-chapter card. Cobalt `#1F4FFF` is used only for the "Free to play" sticker.
- Lesson: ink `#1F1F1F` on paper `#FFFBF8` (white cards). The main action is a black pill button. The accent is lime `#D9F26B`, used only on progress, "New idea" chips and the action on a correct answer.
- Inspector scenes: text `#F2EDE6` on noir `#121419`. The action button is gold `#F5D76E`.
- Errors: the "Not quite" bar is soft butter `#FBEFC4` with brown text `#5C4300`. Errors are never alarm red.

**Open question**: the lesson (near-black ink, lime) and the site (navy ink, butter) use different palettes. Ask before unifying them.

## 4. Screens

**Website home**: for a curious visitor deciding whether to play. Top to bottom:
- the Leonardo opening (once per browser; on phones, a "Play chapter one" panel sits above it);
- the hero with the app-home phone;
- the marquee;
- "Why play" (0 ideas from 40 minutes on Instagram, 8 from ten minutes here);
- how it works (play first, names later);
- chapters (chapter 1 featured and free, chapters 2 to 8 in the app);
- next subjects;
- "Price wars, group projects…";
- questions;
- the board game box with the waitlist;
- the footer.

Main action: Play chapter one → `lesson.html?web=1`.
- Empty: not applicable (static content).
- Loading: the opening shows straight away; images fade in.
- Error: no WebGL means still images of the box are shown instead.
- Done: after the opening has been seen, return visits land straight on the page. The footer has "Watch the opening again".

**Waitlist (in the app section)**: for people who want the app. Shows "App coming soon", an email field and "Join the waitlist".
Main action: Join the waitlist → saves the email to Convex `waitlist`.
- Empty: "you@email.com".
- Loading: "Adding you…".
- Error: "That email does not look right. Try again?" or "Could not add you just now. Please try again in a minute."
- Done: "You are on the list. We will email you once, when the app is out."

**Lesson: question card**: for holding the chapter's question in mind. Shows a chip, the question, one line saying who you are, and the fox.
Main action: Start → the story.

**Lesson: story beats**: for the case. Shows the photo or characters, then the speaker's dialogue box (name, avatar, first-person line).
Main action: Continue → next beat.
- Loading: the text types in.

**Lesson: your call**: for one real choice before any definition. Shows Sharma's line and two Ravi cards (stay silent, talk).
Main action: tap a card → the consequence (years) → Continue.

**Lesson: new idea**: for naming what was just played. Shows the "New idea · n of 8" chip, the term, the definition, a three-row parts table and the fox's rule.
Main action: Try one → the check.

**Lesson: check**: for using the idea. Shows the setup, a case picker with illustrated cards (results shown before asking when the question compares numbers), then a question.
Main action: tap the answer → "Right." plus why → Continue.
- Error: the "Not quite." bar with a reason, "Why?" and "Try again". A miss queues one more question on the same idea later in the chapter.

**Lesson: recap**: for what you learned. Shows the chapter question answered and the eight ideas with one line each.
Main action: Continue.
- Done: "You can see the game now." The XP earned and the chapter list follow, with chapter 1 done and the rest "app".

**Desktop lesson (900px wide or more)**: the same screens inside the frame from section 2. The lesson scales to the window height as well as its width, so the dialog and the button always both fit, and photos are never cropped.

## 5. The first screen's words

**Headline**: Learn things you'll actually use. In the time you'd spend scrolling.

**Under it**: Ten-minute games that leave ideas behind. Start with game theory, the rules behind every deal, argument and group chat, and you will start seeing the game everywhere. Chapter one is free. (Phone first screen: "A free game theory chapter you play in your browser. Ten minutes, no sign-up.")

**Button**: Play chapter one, which opens chapter 1 in the browser with no sign-up.

## 6. Principles

- Play first, name later: the learner makes a move and sees the consequence before any term is defined.
- Follow the professor: every chapter teaches the way Prof. Viswanath Pingali's IIMA lectures do (pose the question, name it, define it, go case by case, check). Use his examples, not invented substitutes.
- Consequences are real: no "imagine Ravi…", no rewinds. What you chose happens, and the story keeps moving.
- Show, don't tabulate: never use the 2x2 payoff-matrix box. Explain choices case by case with illustrated cards.
- Every wrong answer gets "Try again" with a "Why?", and a missed idea comes back once more in a new setting (adaptive).
- One idea per screen; explanations sit at the bottom with the fox or the speaker, never as a wall of text at the top.
- Characters speak in the first person and read as their role, with an expression on every face.
- No other players: where a crowd or an opponent is needed, simulate it.
- Plain words: no shorthand like "N1" or "Q1"; write "Night 1". No em-dashes anywhere learner-facing.
- One unit of time: a chapter is ten minutes, everywhere.
- Nothing tappable smaller than 44×44px, and nothing is ever hidden under the main button.
- The web asks for nothing: no sign-up and no phone number. The only thing ever collected is an optional waitlist email.
