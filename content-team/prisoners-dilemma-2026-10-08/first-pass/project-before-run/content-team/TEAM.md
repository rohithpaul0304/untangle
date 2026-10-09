# Untangle content team (v2)

Status: Draft. The founder chose the rebuild's scope (in place, linked to the Learning Studio, deck tool, no trial run) and asked for the Game Development & Delight team on 7 October 2026; the structure itself awaits the founder's read. Content creation is on hold until the founder says to proceed; the first job is the `decision` scene after the locked `baseline`.

## How it works

The Learning Studio runs eleven teams in waves; the coordinator launches at most three workers at a time and workers do not spawn sub-teams. Teams collaborate through artifacts with shared IDs, not chat. Candidate play is judged before exhaustive answer checks; premise verification comes first.

```mermaid
flowchart TD
  F[Founder: topic or scene] --> O[Operations: route, assign three lenses]
  O --> I[Intake: source map]
  I --> T[Teaching: one-concept brief]
  T --> A[Play Designer A · lens 1]
  T --> B[Play Designer B · lens 2]
  T --> C[Play Designer C · lens 3]
  A --> G{Fun gate on decks<br/>Playtest Lead + Founder}
  B --> G
  C --> G
  G -->|none pass| T
  G -->|winner| Q1[Quality: blind solve + rules trace]
  Q1 --> S[Story & Voice: full scene with the fox]
  S --> QS[Quality: recheck full scene]
  QS --> P[Practice: checks, transfer, routes]
  P --> Q2[Quality: blind solve of practice]
  Q2 --> BQ{Build explicitly requested?}
  BQ -->|yes| D[Game Dev & Delight: build + delight pass]
  BQ -->|no: deck only| U
  D --> U[Audience: variants, languages, accessibility]
  U --> QV[Quality: recheck changed variants]
  QV --> H[Playtest: human test on deck or build]
  H -->|breakdown| R[Coordinator routes defect to its owner]
  R -->|premise| T
  R -->|play| A
  R -->|wording| S
  R -->|feel in authorized build| D
  H --> E[Evidence rung recorded]
```

## Who does what

| Seat | Studio team | Untangle notes |
|---|---|---|
| Coordinator | Operations | Pause rules, founder corrections into REJECTED and CHANGELOG, locked opening |
| Teacher + Learning Scientist | Teaching | `untangle-teacher`; subject notes for game theory and PM |
| Researcher | Intake | Source boundaries; no citations in learner copy |
| Play Designer A/B/C | Play | `untangle-play-designer`; fox deck template; different lens each |
| Playtest Lead, Test Facilitator, Measurement Analyst | Playtest & Measurement | Founder plays every gate; protocols in pm-pilot and play-openings |
| Scenario Writer, Character Lead | Story & Voice | `VOICE.md`, `CHARACTER.md` |
| Practice Designer | Practice | `untangle-practice-designer` |
| Answer, Rules, Continuity Checkers | Quality | Locked nodes byte-identical; REJECTED rows cited |
| Game Director, Delight Designer, Prototype Engineer | Game Development & Delight | `PRODUCT.md`, `GUIDED-JOURNEY.md`; prototypes only on instruction |
| Audience Profiler, Localizer, Accessibility Lead | Audience | Kannada, Tamil and other Indian-language drafts may use the Sarvam tools locally; native review required |
| Art Director, Motion Designer | Art & Motion | Fox-first hierarchy; motion that explains; review on builds |

Full contracts: `/Users/rohithpaull/.codex/skills/learning-studio/references/roles/`. Team charters: `/Users/rohithpaull/.codex/skills/learning-studio/references/teams/`.

## Ready means

Role contracts, handoffs, lens assignment, the fun gate, the deck tooling and the status words are in place and verified (links resolve, decks render and pass the checker). It does not mean a lesson has been produced by this team, that the pipeline has passed an end-to-end trial, or that any person has found the result fun. Zero human tests so far.
