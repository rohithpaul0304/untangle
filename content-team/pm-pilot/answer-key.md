# PM pilot answer key — internal, keep separate from first-pass checker

Scope: fictional teaching data. Follow the storyboard's calendar-day convention. Day 0 is signup date. Day 7 is the whole reporting-zone calendar date seven dates later. Return = one or more specified actions that date, counting distinct people once. Complete tracking is a stated assumption, not independently observed real data.

## Main story

S01 is unscored. Signup counts alone cannot identify a retention rate; either expectation is followed by the same evidence, and uncertainty is allowed.

S02: Previous = 80/1,000 = 0.08 = 8%; Current = 40/200 = 0.20 = 20%. Current has half as many returners (40 versus 80), but 2.5 times the rate (20% versus 8%). The script does not need to teach that multiplier. Correct denominator pairing preserves membership; swapping denominators gives 40% and 4% from mixed groups and is invalid. An equal-width 100-unit bar represents a proportion, not a sample or literal removal of users.

Both first groups fully matured by report cutoff 4 October: 7 September + seven dates = 14 September; 21 September + seven dates = 28 September. Do not infer that those who missed day seven never used the app again.

S04: 1 October + seven dates = 8 October. On 4 October, this cohort is at calendar day three. No final day-seven rate exists. A reported 0% would incorrectly turn an unobserved future outcome into measured non-return. Wait until 8 October ends and relevant data is complete. The dataset's 100 newest signups do not enter the earlier groups' denominators.

S06: C is the defensible wording. A claims a causal effect of setup without isolating other factors; B makes the same error for invitations. The draft can report association and the observed rate difference. An experiment or another suitable causal design would be further work, not something this before/after comparison already accomplished. No forecast or profit claim is warranted.

Discovery activities are teaching evidence, never scored mastery checks.

## Original assessments

| ID | Answer | Worked reasoning | Alternatives and targeted interpretation | Follow-up |
|---|---|---|---|---|
| C1 | B | Earlier 90/600 = 15%; Later 50/200 = 25%. | A chooses higher headcount despite lower proportion; tag `count-vs-rate`. C overlooks unequal ratios; tag `ratio-comparison`. These are option error types, not assertions of motive. | R-C1 |
| C2 | C | At end day three, day seven has not happened. | A treats missing future observation as zero: `unobserved-as-zero`. B substitutes an earlier window: `mismatched-window`. | R-C2 |
| C3 | B | Observed retention increased; email and signup source changed together. | A attributes cause to email: `causal-overclaim`. C attributes cause to referrals: same tag, different claimed cause. | R-C3 |
| P1 | A | 60 distinct returning people / 400 original people = 15%. | B = 150 sessions/400 people = 37.5%, `events-vs-people`. C = 60 people/150 sessions = 40%, `wrong-denominator`. | R-P1 |
| P2 | C | Noon on the qualifying calendar date is only a partial window. Its 12% is provisional, not a complete comparison. | A treats started as completed: `partial-window`. B fabricates zero despite 12 observed returners: `unobserved-as-zero`. | R-P2 |
| P3 | B | Groups formed by their own behavior may differ in motivation or other factors. Observed association doesn't identify the effect of profile completion. | A takes association as causality: `causal-overclaim`. C asserts an absence of effect without evidence: `absence-of-proof-vs-no-effect`. | R-P3 |

C1–C3 are closing checks. P1–P3 are separate transfer practice: P1 introduces repeated actions per person, P2 a partly complete qualifying day, P3 self-selection within one signup group rather than simultaneous launch changes. All rules needed to answer are in the prompts or taught on the main route.

## Fresh correction items

| ID | Correct | Reason and wrong alternative |
|---|---|---|
| R-C1 | B | 60/300 = 20%, 30/100 = 30%. A chooses raw returner count over rate. |
| R-C2 | B | Day five precedes day seven. A changes a not-yet-observed value to zero. |
| R-C3 | B | Message and audience change together. A ignores a competing explanation. |
| R-P1 | A | 30 distinct people / 200 = 15%. B uses 90 passages / 200 = 45%, counting events as people. |
| R-P2 | B | 9 a.m. does not observe the rest of 15 November. A truncates the interval. |
| R-P3 | A | Prior enthusiasm could influence both choices. B incorrectly rules out an unmeasured alternative. The scenario establishes possibility, not proof that enthusiasm explains this observed association. |

Each original has a distinct follow-up, so a learner who previously missed C1 still receives fresh R-P1 if they later miss P1. A repeat of the original after explanation is explicitly supported practice, not fresh independent evidence.

## Route truth table

1. Original correct → feedback → next original.
2. Original incorrect → option-specific feedback → its unique R.
3. R correct → R feedback → original with answer cleared, marked supported retry.
4. R incorrect → authored worked answer → retry original or pause with exact response saved.
5. Supported retry correct → its feedback → next original, marked corrected with support.
6. Supported retry incorrect → its explanation → continue or pause, marked review suggested; never rerun the correction loop automatically.
7. Any pause returns to its saved response and routes, not the start of the chapter.

No penalty, no endless retry, and no claim that one correct click demonstrates mastery. Correct answers after help must not be used to claim independent completion of a production unlock requirement. This standalone pilot does not change those requirements.

## Evidence limits

Concepts are supported by the researcher's inspected primary sources, recorded in `sources.md`: Amplitude's retention calculation documentation for cohorts, distinct-user ratios and incomplete windows; Australian Bureau of Statistics correlation/causation guidance for causal limits. The story's invented counts, dates, product and invitation changes are not source facts. Researcher's optional elapsed-time dataset was not adopted; the canonical brief specifies calendar dates and the 1,000/80 versus 200/40 comparison.

This author key is not independent checking or human validation. It is provided separately so a checker can first solve the learner script without reading it.
