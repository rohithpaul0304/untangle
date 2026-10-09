# JTBD opening browser checks

Status: Draft — mechanical checks only.

Checked 7 October 2026 by coordinator in Chromium through the Browse tool. All three decks played by clicking rendered controls at 390 × 844. No embedded answer data was used by the route walker.

| Candidate | Complete routes | Every route reaches an ending | Layout/control findings |
|---|---:|---|---|
| A | 16 | Yes | No horizontal overflow, missing action, undefined/NaN content, or main choice below 44 px found by this check |
| B | 24 | Yes | No horizontal overflow, missing action, undefined/NaN content, or main choice below 44 px found by this check |
| C | 12 | Yes | No horizontal overflow, missing action, undefined/NaN content, or main choice below 44 px found by this check |

The route walker treats candidate-specific replay buttons as ending controls. Its initial B/C loop warnings were caused by replay buttons being mistaken for new lesson choices; the walker was corrected and those runs were repeated. The final evidence files contain successful runs only.

Structure checker passes on all three decks. Raw browser records: `checks/a-ui.json`, `checks/b-ui.json`, `checks/c-ui.json`; these contain rendered text, chosen buttons and route endings.

These checks establish that the controls and paths work. They do not establish teaching accuracy, clarity, enjoyment, retention, or human understanding. Read the separate cold review for design findings. Human tests: 0.

Founder rejected the premise and all three openings before broader spot checks. Keyboard and reduced-motion behaviour were not tested. The preserved original deck hashes are recorded in the manifest; current decks differ only in rejection metadata.

Later [partial cold review](fun-gate.md) identified a semantic control defect in B: “Replay the repaired session” does not show that replay. The mechanical route walker cannot detect this mismatch. All candidates are rejected; no overall usability pass is claimed.
