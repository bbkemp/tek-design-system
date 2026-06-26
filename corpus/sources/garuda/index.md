# garuda — subject index

**Garuda** — Tek receiver-test (Rx) platform / project. Confirmed via the JIRA export `UI-UX filtered trial.csv` (JIRA project key `GAR`, project name "Garuda", product type "software") and tickets explicitly referencing `Client-App-DDR5Rx`, customer references to Intel Folsom + Micron, and labels like `UX-Feedback`.

This subject was scaffolded **2026-06-25** as part of the 2026-06-25 batch 2 intake.

## Status

`uploads/artifacts/` holds the source material:

- **UI-UX filtered trial.csv** — JIRA export of Garuda project tickets filtered to UI/UX feedback. 1230 issues across 8 statuses (Closed 578, Resolved 273, Open 230, Submitted 101, Verified 32, In Progress 9, Resubmitted 6, Reopened 1). Customer context: DDR5Rx test bench at Intel Folsom + Micron. **Processed 2026-06-26 via `/document-spreadsheet` → see [`data/garuda-ui-ux-jira-export/`](./data/garuda-ui-ux-jira-export/_index.md).**
- **Garuda_VOS Synthesis.xlsx** — Voice-of-Stakeholder synthesis workbook (Excel). 4 sheets: Instructions (template), JTBD_Feedback_UX (166 functional Jobs-to-be-Done from internal Tektronix SMEs across India/US/Japan/China/France/Korea), Key Insights (3 customer observations — Cadence + Intel HSIO VnV), Pain Points (template only, unpopulated). **Processed 2026-06-26 via `/document-spreadsheet` → see [`data/garuda-vos-synthesis/`](./data/garuda-vos-synthesis/_index.md).**

## Documented data exports

| Export | Source | Chunks |
|---|---|---|
| [garuda-ui-ux-jira-export](./data/garuda-ui-ux-jira-export/_index.md) | UI-UX filtered trial.csv | `_index.md` + 5 cluster chunks covering all 1230 issues: `blocker-and-critical.md` (265 issues, 70 Blocker + 195 Critical), `major-priority.md` (537), `minor-and-trivial-priority.md` (428), `by-status-open.md` (230), `by-status-closed.md` (578). Priority + status clusters intentionally overlap so retrieval can hit either lens. |
| [garuda-vos-synthesis](./data/garuda-vos-synthesis/_index.md) | Garuda_VOS Synthesis.xlsx | `_index.md` (workbook structure + Instructions sheet verbatim + Pain Points stub) + 2 data chunks: `jtbd-feedback-ux.md` (166 functional JTBDs grouped by UX section — Tests 84, Others 22, Dashboard 15, Debug 13, Manage 12, Report 10, Results 8, API 2) and `key-insights.md` (3 external customer observations from Cadence + Intel). PII redacted at chunk boundary (First/Last names stripped; Company/Country/Title preserved). |

## Open questions (for the team)

- What's Garuda's product relationship to TekExpress and TekFlow? All three are compliance / receiver-test workflows; Garuda is explicitly DDR5Rx-focused.
- Is the JIRA CSV the canonical research input, or just a snapshot? The corpus convention is to capture as-is; if JIRA is the live system, the CSV is a snapshot (date in filename would help; "trial" suggests exploratory export).
- Does Garuda have UI photos, manuals, walkthroughs? If yes, route those into the right `uploads/<class>/` next time.

## Cross-subject relationships

- **tek-express** — TekExpress is Tek's existing Tx compliance platform; Garuda is the Rx counterpart. Chunks generated may declare `applies_to: [garuda, tek-express]` where workflows align (test bench setup, instrument inventory, automation hooks).
- **tek-flow** — adjacent Tx/Rx compliance subject scaffolded in the same batch.
