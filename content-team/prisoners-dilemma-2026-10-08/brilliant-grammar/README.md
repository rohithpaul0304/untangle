# Untangle web lesson · chapters 1 to 3 (reference build)

Status: Draft · Founder to play. This is the reference build for the screen grammar in
`content-team/reference/brilliant-screen-grammar-2026-10-08.md`. Copy it; do not reinterpret it.

Open `index.html` on a phone (or serve the folder and open it on 127.0.0.1). `?fresh` wipes the saved position.

## What is in it (12 screens, ~100 seconds)

| 0 | intro | Five beats: shop robbed; inspector, two suspects, no proof; his offer (talk about the other and walk free tonight); separate rooms; title card "You are Ravi. Stay silent, or talk about Meera. Get out with as few years as you can." | One picture + one line per beat, one tap each, under 20 s. |

| # | Type | Prompt | The learner |
|---|---|---|---|
| 1 | play (pre-filled) | Watch what happens when both stay silent. | Taps Run. Cursor walks two lines, faces change, years appear. |
| 2 | play (1 slot) | Get Ravi out with zero years. | Taps a chip into the slot, Run. Wrong → world shows 1/1, "Start over". Right → 0/5, Meera hurt, Continue. |
| 3 | concept | Talking gets Ravi out tonight… | Reads one sentence beside a replay of what they built. |
| 4 | play (3 slots) | Three nights. Meera copies your last move. Get Ravi under 3 years. | Builds three nights, Run; Meera's copies reveal as the cursor reaches them; totals accumulate. Only silent · silent · talk passes. |
| 5 | tomorrow | Your move tonight becomes her move tomorrow. | Visual only: "Talk first" (6 years, red) beside "Talk last" (2 years, green), copying drawn as arrows. |
| 6 | trap | Four slides over one table. | Slide 1 the table; 2 Meera-silent column lit, talk marked better; 3 Meera-talks column, better again; 4 both-talk cell red "both end here", 1/1 green "both could have", stamp PRISONER’S DILEMMA. No taps; Continue between slides. |
| 7 | splash | Skill check | - |
| 8–10 | quiz ×3 | Meera talks / Meera stays silent / Two nights, she copies you | Chip into slot, Check. Wrong → the chosen cell lights up in the matrix, then reset. Right → green "Correct! +15 XP" toast. |
| 11 | news | Real case · India, 2016 to 2017 | Two newspaper clippings (Jio goes live, 5 Sept 2016; Vodafone and Idea to merge, March 2017). Headlines are written for the lesson and say so. Reading screen, no play. |
| 12 | applied | Real case · How the dilemma applied | Mapping table (Ravi → Airtel, Meera → Vodafone Idea, the offer → Jio's free plan, silent → hold, talk → cut, years → revenue) plus the hold/cut matrix and one closing paragraph. |
| 13 | end | You can see the game now. | Chapter list: 1 done with XP, 2 The café, 3 The ad ban, 4 The tournament locked to the app. "Continue in the app" (store links are a placeholder sheet). |

## Chapters 2 and 3 (added 2026-10-09)

Chapter 2, The café: two story beats (cafés on the same street; coffee costs ₹50, customers walk to the cheaper one), title card, then the prison screen with a price stepper in Ravi’s row (minus and plus, ₹50 to ₹100 in ₹10 steps, starts at Meera’s price; today’s money and cups preview beside it; the fox comments as the price moves). No palette. Day 1: beat Meera today (cut wins). Five days, one screen repeated: Meera copies yesterday’s price; running ₹ total under each face; goal ₹24,000, which only holding (plus the last-day cut) reaches. Founder picked this over a price ladder and a counter-only screen (cafe-variations.png). The chapter closes with three slides: cut = talk, hold = silent; Meera’s strategy named (tit for tat, hold first then copy yesterday); and the app hook: other opponents (the grudge, the coin, the shark) and the tournament need different answers and live in the app.

Chapter 3, The ad ban: two beats on TV sets, title card, then the same binary engine with a new world (two brands, TV screens that light up with AD, profit in crore; payoffs 4/4, 5/1, 1/5, 3/3). Year 1: rival advertises, you must match (3 each). Year 2: the 1971 ban, a predict screen (profit up or down), both forced to save, 4 each. Then two clippings (the 1970 Act; a year without TV ads) and a closing card: the way out of the bottom-right cell is a rule for everyone.

Jio case (chapter 1) rebuilt with the founder-supplied logos (Jio, Airtel, Vi, Reliance Communications): a street screen (Welcome Offer notification, the queue, three rivals asking hold or cut), a fates screen (Airtel CUT, Vodafone Idea MERGED, Reliance Communications CLOSED 2017, Jio No. 1) with an animated 1 GB price chart (TRAI: ₹269 in 2014, ₹12 in 2018; 2016 bar approximate), then "How the dilemma applied" as three slides: faces with logo badges, chips mapped to price tags, and the same table with logos in the headers and an INDIA, 2017 stamp. Visual only, no taps (founder rule: core explanation screens follow the beat pattern or are not interactive).

Chapter screens sit between chapters with the chapter list; chapters 4 (the tournament) and 5 (chicken) are locked to the app. `?ch=2` or `?ch=3` jumps to a chapter. Save key is `untangle-brill-v2`.

## Engine shape (what the team's deck tool should become)

Every teaching screen is one object: `prompt`, `tag`, `nights` (slots; `her` is a locked chip or `'copy'`), `goal(result)`. The renderer draws stage → program rows → palette → one button, and `runPlay` walks the rows with a cursor. There is no guide text on task screens. Concept screens carry `text` and `replay: <play id>`. Quiz screens carry `her`, `want`.

Design tokens are the `:root` block at the top of the file. Characters are the existing Ravi/Meera WebP faces; the fox is the mascot bottom-left and changes pose on success/failure.

## v2 additions (from the desktop recording)

- Intro card: illustration + title + one-line promise + Continue.
- Fox nudges: one short line beside the fox on every task screen (`nudge`), a different one after success (`doneNudge`) and after a miss (`missNudge`). Quiz misses nudge too.
- Why?: ghost button beside Continue after a correct run; opens a bottom sheet with a 2–3 sentence explanation (`why`), pulled by the learner, never pushed.
- Success state: green "Night over…" strip replaces the stage header, stage gets a green border, whole screen gets a green glow, Continue turns green.
- XP counter top-right (✦): +10 per play, +15/+25 per skill check; shown on the end screen.

## Copy pass v6 (cold-read rewrite, 2026-10-09)

Every learner-facing line was rewritten from a stranger's point of view: the inspector's offer is now stated before play, Meera's choice is named in the prompt whenever it is fixed, "Run" became "Play the night", no internal words (chip, slot, run) in fox lines, each fox line says what just happened in the world and what to do next, and the name "prisoner's dilemma" lands on the matrix card and the end screen. Copy lives only in the STEPS array; edit there.

## Facts behind the Jio case (verify before launch)

Jio commercial launch 5 Sept 2016; Welcome Offer free to 31 Dec 2016, extended as Happy New Year Offer to 31 Mar 2017. Incumbent tariff cuts through 2016 to 17. Industry revenue decline reported by early 2017. Vodafone and Idea merger announced March 2017, completed 2018. On-screen copy is qualitative; customer dots and revenue bars are illustrative. No brand logos are drawn; networks are named in text only.

## Known gaps

- No skill checks yet in chapters 2 and 3.
- Store links on the end screen are a placeholder sheet.
- No drag-to-reorder; chips fill the first empty slot on tap, tap a placed chip to remove it.
- No sound, no XP persistence beyond the session.

## Hard rules

- No em-dashes anywhere learners can read (copy, nudges, Why? text, end screen). Use a full stop or a comma. Founder rule, 2026-10-09.

## Polish pass v17 (product-UI parts of the taste skill only)

Applied: tactile press on every button and stepper, visible focus rings for keyboard, prefers-reduced-motion collapses all animation, tabular numerals on every counter, tinted shadows, screen-enter fade on every screen, one documented radius system (cards 12px, chips 6 to 8px, buttons pill), copy audit of all 77 learner strings (no dashes, no filler verbs). Not applied, on purpose: asymmetric layouts, display serifs, scroll choreography, dark mode. The look is locked to the Brilliant-style product grammar; those would break it.

## Character bubble, grading sheet, pressable controls (v18 to v19)

Borrowed the patterns, not the styling: fox bubble is a soft blue-tinted speech bubble with a tail (no border); controls have a subtle 2 to 3px inset bottom edge and press 1px; success and failure arrive as a white bottom sheet carrying a tinted card (our green-bg or a pale red), the fox, a title in our ink colour, one line, Why? as an underlined link and the action button; quiz success says "Correct." Nothing in the layout grammar changed.

## Style pass v20: Brainy Pop language (founder reference, Behance moodboard "tesr")

Taken from the case study: Bricolage Grotesque (founder-supplied files, subset to woff2 and embedded in index.html as data URIs, weights 400 to 800, ~126 KB; `fonts.css` holds them, template.html has a `__FONTS__` slot), warm paper background #FFFBF8, near-black #1F1F1F, lime #D9F26B as the single accent (progress bar, success strip, feedback sheet, status dot, Continue label on dark), supporting pastels (periwinkle #8E9AFE, orange #E9653B for failure, sand #EBE4DD, olive #6D8D5D), faint grid paper inside the stage world, pill chips and black pill buttons, 16 to 20px card radius, 1.5px warm borders. The layout grammar and all copy are unchanged. Build with `template.html` + `fonts.css` + assets.

## Taste review v21 (success screen and stage background)

Findings: lime was doing four jobs; success was stated three times; emoji checks and the bolt were off-system; the small grid behind the faces plus three nested surfaces read as noise; full-strength lime panel read as a poster. Fixes: grid moved to the page at 44px, stage world is plain white; success is a 2px ink outline on the card plus the sheet, no strip, no repeated title; sheet is paper with a 4px lime (or orange) top rule; custom ink-circle tick replaces the emoji; bolt removed; lime now only on progress, the status dot, the top rule and the Continue label.

## Accessibility pass v22 (axe-core 4.10, WCAG 2.1 AA + best practice, 11 screens: 0 violations)

Found: contrast under 4.5:1 on small grey text (#999 labels, chart source line, dimmed matrix cells, the orange button), no landmark or h1, chips and the back control were spans, stepper buttons unnamed, live values (years, money, price, fox line) not announced, feedback and Why sheets not dialogs and not focused, state shown by colour alone on the tomorrow and trap screens, emoji in content.
Fixed: `<main>`, every screen's prompt or lead line is the h1 and receives focus on screen change; progress bar has role and value; back is a button; all chips are buttons with names ("Remove stay silent"); stepper buttons named; price, years and fox bubble are polite live regions; sheets are dialogs that take focus, Escape closes Why; character portraits carry alt text with the expression; tomorrow columns say "worse" and "better" in text, trap cells carry aria-labels and a dashed outline plus underline in addition to colour, dimmed quiz cells announce "(not tonight)"; greys raised to #6E6A66, orange button to #C94B22; emoji icons hidden from screen readers. Page grid removed (founder: felt off); stage world stays plain white.
