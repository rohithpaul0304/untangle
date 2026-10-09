# Untangle PM pilot: verified evidence

Verified 7 October 2026 through gstack /browse. Both source pages returned HTTP 200 and their text was read. Definitions are paraphrased below; no verbatim source passages.

## Primary sources

1. Amplitude, *How the Retention Analysis chart calculates retention*:
https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation

- A cohort is a group entering the analysis through the defined start event on a given date.
- Exact-day (Return On) retention: distinct people who perform the defined return event on day X, divided by the original cohort's distinct people. One person may qualify on multiple days; exact-day retention need not decrease every day.
- Return On or After: distinct people who perform the return event on day X or any later observed day, divided by the original cohort. For a fully observed fixed cohort, these percentages cannot increase as X increases.
- Aggregated retention must exclude people/cohorts whose observation period has not yet reached the measured interval. Recent users do not yet have a complete opportunity to qualify.
- Incomplete observation can change the denominator and create misleading apparent trends. Compare completed intervals and state the observation end date.
- Page has an apparent inconsistent arithmetic example in its Return On section (48,219/125,665 is not 72%). Do not copy that example. Use our independently checked toy arithmetic instead.

2. Australian Bureau of Statistics, *Correlation and causation* (released 2 February 2023):
https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/correlation-and-causation

- A measured association does not establish that one behavior causes another.
- A third factor may affect both observed behaviors.
- Controlled studies help establish causality; observational patterns are a basis for further investigation, not proof of a cause.
- For this pilot: users who finish setup may return more often because they were already more motivated. Do not claim that setup completion caused retention without suitable causal evidence.

## Safe treatment of the hook

“1,000 signups. Only 80 came back.” is an intentionally incomplete question, not a complete retention metric. Follow immediately with: “Came back to do what, and when?”

Do not infer: the product failed, onboarding is broken, 920 users churned forever, acquisition quality is poor, or a particular feature would fix it.

Safe explicit metric: “Of 1,000 people who signed up in this cohort, 80 completed the core action during their day-7 window: 8% exact-day retention.” State that all 1,000 had a complete day-7 window and data capture was working. Core action is a placeholder until the hypothetical product is specified (e.g., create/save a note), not an assertion about Untangle.

## Recommended toy dataset (clearly marked fictional)

Use one signup cohort of 1,000 distinct people. All users have full observation through day 14. Define day 0 as the first 24 hours after signup, so day 7 means hours 168 up to but excluding 192 after signup. Count each person once per interval. This elapsed-time convention is the pilot's explicit choice; do not imply every analytics product uses it by default.

- 80 distinct people complete the core action in day 7: 80/1,000 = 8%.
- An additional 40 distinct people (not among those 80) complete it during days 8–14.
- Therefore 120 distinct people complete it in days 7–14: 120/1,000 = 12%.
- Label this second figure “day 7 or later, observed through day 14,” never an unbounded lifetime return rate.
- People who return on day 9 but not day 7 count in 12%, not 8%.
- Do not add daily unique counts to obtain a multi-day unique total; the same person can return on several days.

Optional simple behavior split, if needed for the pilot's next lesson:
- 200 completed setup in their first 24 hours; 40 completed the core action on day 7: 20%.
- 800 did not complete setup in their first 24 hours; 40 completed the core action on day 7: 5%.
- Totals reconcile to 1,000 signups and 80 day-7 returners.
- Say “In this fictional cohort, setup completion is associated with higher day-7 return.” This is a clue to investigate, not evidence that forcing setup will improve retention.
- Never label these as a benchmark, experiment result, statistically established effect, or real Untangle data.

## Best next step in the story

Define the return behavior and observation window, check tracking and cohort eligibility, then compare relevant groups to form a hypothesis. A later experiment can test a specific change. Interviews may explain experiences but alone do not prove the retention cause.

## Adopted pilot conventions

The planner selected a different, smaller scope than the researcher's optional dataset: compare 1,000/80 with 200/40, then observation eligibility, then causal inference. Day seven means the calendar date seven days after signup, in one consistent reporting timezone. Count a person once if they complete a task on that date. Both launch groups have finished that entire day. The optional 14-day and setup-completion datasets above are research suggestions, not learner-script facts. The script must not mix elapsed-hour and calendar-day windows.
