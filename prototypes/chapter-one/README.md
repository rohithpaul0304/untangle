# Chapter 1 prototype

Open `http://127.0.0.1:4187/chapter-one/` while serving the parent `prototypes` directory. The existing approved fox sheets are loaded from `../lunch-rush/fox-b/`.

Run locally:

    python3 -m http.server 4187 --bind 127.0.0.1 --directory prototypes

Fourteen available stages: ten book-related encounters, common knowledge, the McKinsey railway case, an understanding check and fresh practice. All map stops are open for founder testing. This is not a deployed app.

Progress is saved in localStorage under `untangle-chapter-one-v1`. It includes scene position, committed bids, number secrets, choices, feedback and quiz responses. Replays archive earlier runs. Completion rewards are granted once per stage. Practice coins never change learning rewards. No account, Convex sync or live AI has been connected. Practice sequencing prioritises previously missed concept tags through local rules.

Reference: ../../chapters/CHAPTER-1-COMPLETE.md. Some scenes are simplified authored demonstrations: tournament branches, wind outcomes and character preferences are visible assumptions. Railway outcomes remain qualitative. New auction-specific independent assessment items remain pending.

Verified in the browser: all 14 stages can finish; quiz sets contain 12 items each; first completion grants 10 learning coins and repeat completion does not duplicate them; auction outcomes at 1, 60, 61, 75, 100 and skip; invalid bid rejection; a committed 75 bid survives real reload and resolves to 85 remaining; independent practice withholds explanations until submission; completed replay preserves previous attempt records. Inspected map and auction at mobile, tablet and desktop sizes. These checks are not learner-retention evidence.

Taste package installed from Leonxlnx/taste-skill at the user's request. Applied its redesign-existing-projects guidance to the existing app: role/goal introductions, shorter contextual instructions, direct court actions, concrete bidding visuals, clearer numbers and action states. Original scenarios remain. Fox is anchored at the bottom of lesson screens; controls have reserved space above it. Rechecked all fourteen stage completions after rewriting presentation. Gameplay checks do not establish learner comprehension.

Latest interaction pass: result banners replaced by player/fox conversation turns. The fox's emotion and reply follow the selected action. Added actual coin allocations and outside-option state, robot search one guess at a time, an explicit tournament outcome path, and basketball possession followed by a separate shot. A blocked shot cannot complete the court scene. All 14 stage flows and targeted interaction checks pass; conversation and 4/6 coin allocation were verified after reloading. Review record: ../../chapters/chapter-1-interaction-review.md.

Progressive disclosure pass: tournament character introductions and each rule now arrive in separate saved blocks. Changed conditions are introduced separately; decisions are unavailable until setup is complete. Other multi-block teaching screens also reveal setup information incrementally before controls. All 14 flows pass after this change. Reloading a tournament paused after block 3 restores three blocks and keeps decision buttons hidden.
