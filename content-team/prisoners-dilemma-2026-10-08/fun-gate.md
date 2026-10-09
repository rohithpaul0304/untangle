# Fun gate — first-pass drafts

**AI-only recommendation: none.** B is the strongest basis for revision, not a passed candidate. Founder preference is pending. No human enjoyment or mastery was measured. This review does not certify factual correctness or accessibility. Reviewed original loaded Draft A “One statement. Two rooms.”, Draft B “One switch. Two rooms.”, and Draft c “Teach the fox a fix” on 2026-10-08. Later repairs are excluded until explicitly rechecked.

Reviewer: fresh AI Playtest Lead. Before play, read only the role and fun-gate instructions. Cold observations were saved in `cold-first-pass.md` before seeking voice/rejection references. Used rendered browser UI, actual button clicks and visible outcomes; no source, author packet or scripts. Parent messages about version coordination did not disclose findings. Visible ending logs provided scene IDs.

## Coverage and first consequence

| Draft | Opening route | First consequence | Complete runs | Coverage limit |
|---|---|---:|---:|---|
| A | See the deal → Stay silent; See the deal → Confess | 2 taps each: 1 navigation + 1 decision | 2 × 17 taps, 8 decisions | All encountered local answer options; extra partial run for Still 3 and We both stay silent. Not all path combinations. |
| B | See the deal → Stay silent; See the deal → Confess | 2 taps each: 1 navigation + 1 decision | 2 × 17 taps, 6 decisions | Complementary orders visited Ravi-only and both-first branches; extra partial run for Rise. All encountered local choices, not exhaustive combinations. |
| C | Read the deal → Stay silent; Read the deal → Confess | 2 taps each: 1 navigation + 1 decision | 2 × 17 taps, 8 decisions | First result is conditional on Ravi, not realized. Extra partial run covers rise and both-statements feedback. All encountered local choices, not exhaustive combinations. |

A/C complete paths displayed 18/18 scenes. B paths displayed 18/26; complementary runs visited divergent outcome scenes. A scene-count display is not evidence of all conditional routes. All tested openings meet the 12-tap limit; no full route certification or full fun-gate pass is claimed. Detailed choice sequences are in cold-first-pass.md.

## A — seven questions

1. **Role and goal: yes.** First screen says accomplice Ravi, separate rooms, “fewest prison years for you” and “You control only your statement.”
2. **Agency with uncertainty: no convincing design evidence.** s02 fixes Ravi silent while showing silence = 1 and confession = 0; minimizing years is direct lookup, not a plausible uncertain choice.
3. **Fair discovery: partial.** The rule is visible and prediction unscored; s05 shows solo silence takes 3 → 5, but the complete table already states the answer and A s15 contradicts its own table.
4. **Pull: weak hypothesis.** “Add one new cost” is the clearest invitation to inspect a changed situation; earlier “Compare another fixed case” is instructional progression rather than unresolved story tension.
5. **Usable idea: yes.** “My move ≠ both moves” supports holding the other action fixed before suggesting a shared fix.
6. **Second move: partial.** The campaign cost genuinely reverses the preferred action; the reason choice merely echoes the preceding cost language, and the displayed table does most reasoning for the learner.
7. **Stop signs: present.** s15 says “the other café earns ₹1,000 after its cost” despite usual/discount ₹2,000/₹4,000. “The campaign cost changed” versus “The other price changed” reads as recognition work.

## B — seven questions

1. **Role and goal: yes.** First screen establishes robbery, Ravi, separate rooms, fewer prison years and own statement control.
2. **Agency with uncertainty: no convincing design evidence.** The initial fixed-silent choice supplies its complete payoffs; “Change mine to silence/confess” later gives only one available action.
3. **Fair discovery: partial.** “BEFORE 0/5 → NOW 1/1” makes a single change legible and rules are visible; hypothetical outcome surprise remains unmeasured and mostly anticipated by the table.
4. **Pull: plausible but unverified.** “So why not one year each?” names a useful unresolved tension; no human continuation preference was collected.
5. **Usable idea: yes.** “Choosing your half of silence doesn’t choose Ravi’s half” connects the two-room comparison to café unilateral action.
6. **Second move: partial.** New cost makes habitual discounting lose ₹1,000; the subsequent “The discount’s extra cost” choice is cued explicitly by the screen and prior feedback.
7. **Stop signs: present.** cafe says “Change only your action” but Run a discount preserves an already-discounting action. reason uses “NEW COST” and “Each discount pays an additional ₹2,000” immediately before its correct answer.

## C — seven questions

1. **Role and goal: yes.** First screen clearly identifies both actors, own statement control and fewer years.
2. **Agency with uncertainty: partial.** The opening retains uncertainty about Ravi and gives both conditional outcomes, yet “Which statement change gets BOTH ...” heavily cues “Change both statements.”
3. **Fair discovery: partial.** The full deal makes outcomes fair. However, the prediction is not resolved before a new choice, and delayed feedback can refer to a different change than the most recent action.
4. **Pull: plausible but unverified.** “I’ll run exactly your change” offers a testable claim and responsive guide; it becomes less persuasive when the correct instruction is cued by wording.
5. **Usable idea: yes.** Results distinguish only-you 5/0, only-Ravi 0/5 and both 1/1; closing asks what happens to somebody who stops alone.
6. **Second move: no at the final test.** s17 asks to keep usual prices under the same new cost already explained in s15-s16; it repeats the answer rather than requiring a fresh inference.
7. **Stop signs: present.** s04 prediction moves straight to s05 “Teach me your fix” without feedback. s07 then says “With Ravi still confessing, your solo silence raises them” even after a just-played only-Ravi or both change. s05 and s12 both→both matching feels like a worksheet.

## Blocking clarity findings

| Draft / scene | Exact wording and observed issue | Responsible role | Required action |
|---|---|---|---|
| A s15, new-cost usual branch | “the other café earns ₹1,000 after its cost” contradicts ₹4,000 table | Teaching + Play Designer | Repair consequence and recheck branch at runtime. |
| A s15–s16; B reason | Correct answer repeats “campaign cost” / “extra cost” directly named in prompt and visual | Teaching + Practice Designer | Require inference from a decisive fact between plausible alternatives; keep necessary evidence. |
| B cafe | “Change only your action” includes unchanged Run a discount | Play Designer | Describe choosing or keeping an action accurately. |
| C s04 → s05 → s07 | Prediction receives no consequence before another decision; later feedback resumes earlier counterfactual without reset | Teaching + Play Designer | Resolve prediction before new situation, or clearly separate and restore its state. |
| C s05 and s12 | “gets BOTH” → “Change both statements”; “gets both to ₹5,000” → “Change both cafés’ prices” | Teaching + Practice Designer | Replace lexical matching with an inference task, not a sentence polish. |
| C s17 | “Keep the ₹2,000 campaign cost ... other café ... discount” repeats previously explained case | Practice Designer | Introduce a meaningful changed fact or request a novel inference. |

The brief animated counter values were not treated as persistent wrong numbers: A’s settled screenshot correctly showed 3/3. Animation clarity and broader screen/accessibility verification belong to the separate mechanical review.

## Recommendation and borrowing

Choose **none** for the current gate. If revising B, borrow A’s explicit distinction between teaching controls and character control and C’s “I’ll run your instruction” promise, but make the instruction genuinely diagnostic. Preserve B’s clean one-person before/after comparisons and short consequences. Route agency/recognition weaknesses to Teaching/Play Design rather than cosmetic rewriting. Obtain founder preference after blockers and fresh testable decisions are reviewable.

## Revision boundary

A/B/C repairs were announced while this reviewer retained already-loaded first-pass pages. No refreshed file inherits these results. Any informed recheck must name its revised artifact and date, repeat affected branches, and keep human preference separate.

## Later clarity references — read only after cold notes saved

Read `/Users/rohithpaull/build-sprint-app/VOICE.md` and `/Users/rohithpaull/build-sprint-app/REJECTED.md` after first-pass notes were saved. Both guides are Draft consolidations; these citations support the observed findings, not claims of founder approval of this review.

- **C s04→s05→s07:** VOICE “One beat per screen”: “A committed answer replaces the current view with its consequence; the next beat replaces that.” REJECTED row **A choice with no acknowledgment** requires every branch to acknowledge selection and bridge to the next scene. The delayed prediction acknowledgment violates that sequence.
- **A s15:** REJECTED row **Chronology or arithmetic that contradicts the prose** requires sums checked in every branch. VOICE “The response pattern”: “Every displayed count reconciles.” ₹1,000 versus ₹4,000 cannot both describe the other café on this branch.
- **A/B cause items and C fix items:** REJECTED row **Quiz format replaces play; answers echo the stem** explicitly identifies word matching as insufficient evidence of inference or play. VOICE “Language rules” calls for parallel, concrete choices.
- **C s17 repetition:** REJECTED row **Same example with new nouns called transfer** requires the relevant condition to change. This final item narrows to a case whose correct move was just explained, without a new decisive fact.
- **B forced opening flip and early lookup choices:** REJECTED rows **Forced actions dressed as decisions** and **Payoff explained before the move** support the agency concern. Keeping rules visible is necessary for fair choice; solving the exercise in the prompt is not.
- **All three reporting limits:** REJECTED row **Claiming fun, engagement or retention from an AI review** requires a person before making such claims. This remains an AI design recommendation only.
