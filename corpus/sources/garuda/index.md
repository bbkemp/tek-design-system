# garuda — subject index

**Garuda** — Tek receiver-test (Rx) platform / project. Confirmed via the JIRA export `UI-UX filtered trial.csv` (JIRA project key `GAR`, project name "Garuda", product type "software") and tickets explicitly referencing `Client-App-DDR5Rx`, customer references to Intel Folsom + Micron, and labels like `UX-Feedback`.

This subject was scaffolded **2026-06-25** as part of the 2026-06-25 batch 2 intake.

## Status

**Newly scaffolded. No chunks processed yet.** `uploads/artifacts/` holds:

- **UI-UX filtered trial.csv** — JIRA export of Garuda project tickets filtered to UI/UX feedback. Includes Requirements + Stories (e.g. *"Technology applications need a list of supported instruments within the GUI"*, *"Test creation screen modifications"*). Customer context: DDR5Rx test bench at Intel Folsom + Micron.
- **Garuda_VOS Synthesis.xlsx** — Voice-of-Stakeholder synthesis spreadsheet for the Garuda project.

When a `/document-csv` or `/document-xlsx` skill exists (neither shipped today; CSV-from-JIRA is a candidate for one), this index will enumerate the resulting chunks.

## Open questions (for the team)

- What's Garuda's product relationship to TekExpress and TekFlow? All three are compliance / receiver-test workflows; Garuda is explicitly DDR5Rx-focused.
- Is the JIRA CSV the canonical research input, or just a snapshot? The corpus convention is to capture as-is; if JIRA is the live system, the CSV is a snapshot (date in filename would help; "trial" suggests exploratory export).
- Does Garuda have UI photos, manuals, walkthroughs? If yes, route those into the right `uploads/<class>/` next time.

## Cross-subject relationships

- **tek-express** — TekExpress is Tek's existing Tx compliance platform; Garuda is the Rx counterpart. Chunks generated may declare `applies_to: [garuda, tek-express]` where workflows align (test bench setup, instrument inventory, automation hooks).
- **tek-flow** — adjacent Tx/Rx compliance subject scaffolded in the same batch.
