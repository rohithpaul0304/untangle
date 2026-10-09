# Prisoner’s dilemma — sources and premise review

Status: AI-checked for the stated fictional rules, 8 October 2026. Human tests: 0.

## Verdict

The approved prison and café tables both have the prisoner's-dilemma structure. Proceed with the fictional story, the explicit own-outcome goal, and comparisons that hold the other person's choice fixed. Never turn the mathematical incentive into a guaranteed human response, moral judgment, legal assertion, or real café forecast.

## Inspected source

**S1. Ben Polak, Yale University, ECON 159, Lecture 1, “Introduction: Five First Lessons.”** [Official lecture and transcript](https://oyc.yale.edu/economics/econ-159/lecture-1), inspected 8 October 2026. Primary teaching source, not a behavioural study. Chapter 4 (09:40; transcript lines 109–114) separates outcomes from what players care about. Chapter 5 (21:38; lines 122–130) defines strict dominance through comparisons at every fixed opponent choice. Chapters 6–7 (29:33 and 33:35; lines 133–145) explain why a jointly preferable outcome need not follow from individual choices and identify the prisoner's dilemma. Yale's illustrative mutual-confession sentence is two years; this lesson authors three years and independently checks its mathematics below. The source supports the concept, not these exact invented numbers or real legal procedures.

Access note: the installed `/browse` binary was tried first, but returned “Timed out waiting for another instance to start the server.” The official page was then inspected with the web-reader fallback. No browser-based check was completed.

## Claims

| ID | Status | Evidence and limits | Safe lesson wording |
|---|---|---|---|
| C1 | Verified, conditional | S1 establishes the conceptual comparison. The manifest supplies the numbers; direct arithmetic below verifies this particular game. | “In this game, confessing cuts your own sentence whichever choice Ravi makes. Yet both staying silent gives each of you fewer years than both confessing.” |
| C2 | Fictional assumption | The manifest sets each player's goal to minimize their own years. It does not establish what real prisoners value. | “For this round, your goal is the fewest years for yourself.” |
| C3 | Verified distinction | S1 distinguishes players' objectives from outcome labels. A table of years alone does not settle a person's values. | “You may care about Ravi too. Here we are examining the stated goal of reducing your own sentence.” |
| C4 | Verified, conditional | Own-choice comparisons below hold Ravi fixed. A change by both is a different comparison. | “If only you switch to silence, Ravi still confesses. You get five years. If both switch, you each get one.” |
| C5 | Fictional assumption | Arrest outside, separation, a lesser offence, and the complete sentence deal are authored story rules. No legal or evidentiary claim was checked or is needed. | “A fictional case with fixed sentence rules.” If needed: “In this story, without a confession, the case only supports the lesser offence.” |
| C6 | Unresolved as a human prediction; valid as conditional reasoning | No behavioural data collected. The arithmetic says which action serves the assigned goal; it cannot determine Ravi's actual move or the learner's values. | “If each chooses the action that reduces their own years in either case, both confess.” Never “Ravi must confess” or “everyone will confess.” |
| C7 | Fictional assumption; arithmetic verified | Café profits come only from the manifest. No observations or market model establish them. | “A simplified café game with fixed daily profits.” Label figures as profit, not sales, prices or revenue. |
| C8 | Verified scope limit | This café table reproduces the same incentive structure. By itself it does not demonstrate transfer when a relevant condition changes (REJECTED.md: “Same example with new nouns called transfer”). | Call this “practice spotting the same pattern,” not evidence of learning or transfer. |

## Independent checks of authored numbers

Prison years are ordered **you / Ravi**; fewer is better for the assigned goal.

| Your choice | Ravi silent | Ravi confesses |
|---|---:|---:|
| Silence | 1 / 1 | 5 / 0 |
| Confess | 0 / 5 | 3 / 3 |

- Ravi silent: your confession gives 0 rather than 1 year.
- Ravi confesses: your confession gives 3 rather than 5 years.
- Ravi has the same comparisons with seats reversed.
- From 3 / 3, only you switching gives 5 / 0; only Ravi switching gives 0 / 5. Both switching gives 1 / 1.
- Combined years: 2 for both silent, 5 for either mismatch, 6 for both confessing. Minimizing combined years is a different goal from minimizing only your own. Mutual silence is better for each than mutual confession, but it is not each person's individually best possible outcome: zero is better than one.
- Under the own-years goal, both confessing is the only outcome where neither benefits from changing alone. This checks the mathematics; it need not add a separate Nash-equilibrium teaching objective.

Café profits are ordered **you / rival**; more is better for the assigned goal.

| Your choice | Rival does not discount | Rival discounts |
|---|---:|---:|
| No discount | 5,000 / 5,000 | 2,000 / 6,000 |
| Discount | 6,000 / 2,000 | 3,000 / 3,000 |

- Fixed rival without discount: 6,000 > 5,000. Fixed rival with discount: 3,000 > 2,000. The rival has the same comparisons.
- From both discounting, switching alone lowers the switcher's profit from 3,000 to 2,000. Both changing to no discount raises each to 5,000.
- Joint totals are 10,000, 8,000, 8,000 and 6,000. “Better for both cafés” does not mean better for customers or society; neither is measured here.

Checks executed successfully for both players' strict comparisons and the joint totals. No empirical café claim, legal realism claim, enjoyment claim, or retention claim is supported.

## Authoring guardrails

Disclose all four sentence outcomes before the choice they govern. Keep the first choice unscored and acknowledge it. Introduce Ravi as the accomplice. Show every specified Ravi choice before its comparison; use explicit “suppose” or “rewind” language for new cases. Never invent his response after the learner chooses. Present confess/confess as a worked branch. Trust alone does not reverse any comparison in these fixed rules: certainty that Ravi stays silent still leaves 0 versus 1 for your own years. Promises, repeated encounters or changed goals require a changed model, not a hidden correction to this one.

Reviewed local references: manifest.md; Learning Studio handbook and Fact Researcher role; project PILLARS.md and REJECTED.md; game-theory.md sections on goals, best responses, dominance, fixed rival scenarios, the simplified prisoner's-dilemma analogy, and the current guided flow. The new manifest supplies this run's scope and numbers; older scenario numbers do not replace them.
