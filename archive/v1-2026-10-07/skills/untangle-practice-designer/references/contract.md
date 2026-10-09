# Practice handoff contract

Each item needs: stable item ID and version, concept ID, prerequisite/taught evidence, grading type, prompt, visible facts, options, and next-item IDs. Author key separately holds answer, worked reasoning, feedback for each option, misconception hypothesis and correction target.

The route table explicitly covers first success, first error, correction success, correction error, supported retry success/error, pause and resume. Every endpoint is defined. Define skip as unattempted/review-needed, never success. Fresh correction items must not have been shown with solutions earlier in the run.

Progress record proposal (not existing backend): chapter ID/version; scene/item ID/version; selected response; response state; attempt kind (`first`, `fresh-correction`, `supported-retry`); feedback shown; return destination; review-needed concepts. Preserve first responses. Repeated selections do not overwrite evidence. Never silently apply a newer answer key to an old saved attempt.

Checker receives only question files and necessary rules. Editor verifies prompts don't require explanation outside the learner view. Runtime routing tests verify paths; only human testing can examine understanding and motivation.
