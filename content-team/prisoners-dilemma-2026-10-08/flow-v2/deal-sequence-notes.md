# Deal sequence amendment

Status: Draft. Latest founder direction supersedes the single-screen S03 offer.

S01, S02 and S04 onward retain their existing content and rules. S03 now has six saved subbeats: inspector arrival and an invitation to listen; both silent; only you name Ravi; only Ravi names you; both name each other; same-offer context and the original two decisions. Every conditional payoff is disclosed before the choice. No payoff is presented as an event that has already occurred. The final choice has an optional plain-English offer review.

The independent dealBeat field persists each beat on refresh, has bounds 0–5 and does not reuse the takeaway beat. Legacy saves on S03 begin at context; legacy later saves preserve their progress. Test coverage includes every deal beat, legacy migration, invalid bounds and both prison branches. Browser verification remains with the parent.

Coordinator browser check: inspected lead-in at375px; all six beats traversed, decision buttons absent until all four rules were shown, refresh restored final choice. Engine tests pass including every saved subbeat and legacy migration. No horizontal overflow.
