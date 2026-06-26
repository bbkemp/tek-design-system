# garuda — subject index

**Garuda** — Tek receiver-test (Rx) platform / project. Confirmed via the JIRA export `UI-UX filtered trial.csv` (JIRA project key `GAR`, project name "Garuda", product type "software") and tickets explicitly referencing `Client-App-DDR5Rx`, customer references to Intel Folsom + Micron, and labels like `UX-Feedback`.

This subject was scaffolded **2026-06-25** as part of the 2026-06-25 batch 2 intake.

## Status

`uploads/artifacts/` holds the source material:

- **UI-UX filtered trial.csv** — JIRA export of Garuda project tickets filtered to UI/UX feedback. 1230 issues across 8 statuses (Closed 578, Resolved 273, Open 230, Submitted 101, Verified 32, In Progress 9, Resubmitted 6, Reopened 1). Customer context: DDR5Rx test bench at Intel Folsom + Micron. **Processed 2026-06-26 via `/document-spreadsheet` → see [`data/garuda-ui-ux-jira-export/`](./data/garuda-ui-ux-jira-export/_index.md).**
- **Garuda_VOS Synthesis.xlsx** — Voice-of-Stakeholder synthesis spreadsheet for the Garuda project. **Pending `/document-spreadsheet` processing.**

## Documented data exports

| Export | Source | Chunks |
|---|---|---|
| [garuda-ui-ux-jira-export](./data/garuda-ui-ux-jira-export/_index.md) | UI-UX filtered trial.csv | `_index.md` + 1 cluster chunk (`blocker-and-critical.md`, 265 issues = 70 Blocker + 195 Critical) so far. Remaining 965 lower-priority issues await per-cluster runs. |

## Open questions (for the team)

- What's Garuda's product relationship to TekExpress and TekFlow? All three are compliance / receiver-test workflows; Garuda is explicitly DDR5Rx-focused.
- Is the JIRA CSV the canonical research input, or just a snapshot? The corpus convention is to capture as-is; if JIRA is the live system, the CSV is a snapshot (date in filename would help; "trial" suggests exploratory export).
- Does Garuda have UI photos, manuals, walkthroughs? If yes, route those into the right `uploads/<class>/` next time.

## Cross-subject relationships

- **tek-express** — TekExpress is Tek's existing Tx compliance platform; Garuda is the Rx counterpart. Chunks generated may declare `applies_to: [garuda, tek-express]` where workflows align (test bench setup, instrument inventory, automation hooks).
- **tek-flow** — adjacent Tx/Rx compliance subject scaffolded in the same batch.
