# tek-flow — subject index

**TekFlow** — Tek product distinct from TekExpress, with overlapping concerns (compliance testing for high-speed Tx/Rx, deskew, debug workflows). Confirmed as its own product via the Feedback DOCX comparing "TekFlow's deskew flow" against "TekExpress's deskew flow" and via shared author (Subhasis Bera, Principal Product Manager) running parallel but distinct VOC efforts for each.

This subject was scaffolded **2026-06-25** as part of the 2026-06-25 batch 2 intake; the four upload artifacts were processed **2026-06-26** in a single intake batch.

## Status

`uploads/artifacts/` holds:

- **Feedback on TekFlow.docx** — customer feedback thread (questions from ELECOM, IEI-CHN, Inspur-CHN customers about TekFlow features: USB waveform parallel analysis, pattern validation for PCIe, debug failure scenarios, deskew flow vs TekExpress's, etc.). **Processed 2026-06-26 via `/document-walkthrough` → see [`walkthroughs/customer-feedback-thread.md`](./walkthroughs/customer-feedback-thread.md).**
- **STM_France_Tekflow customer presentation and Feedback plus notes.pptx** — STM France customer-facing presentation (18-MAY-2021) with feedback annotations. **Processed 2026-06-26 via `/document-deck` → see [`decks/stm-france-tekflow-presentation/`](./decks/stm-france-tekflow-presentation/_index.md).**
- **TekFlow VOC Synthesis 1.pptx** (Subhasis Bera, 2022-12-02) — initial VOC synthesis deck. **Processed 2026-06-26 via `/document-deck` → see [`decks/tekflow-voc-synthesis-2022-12/`](./decks/tekflow-voc-synthesis-2022-12/_index.md).** Locks the `/document-deck` format for this subject.
- **TekFlow VOC Synthesis_update with EMEA.pptx** — VOC synthesis EMEA update (slide 4 adds Israel + Taiwan customer-visit schedule). **Processed 2026-06-26 via `/document-deck` → see [`decks/tekflow-voc-synthesis-2022-12-emea-update/`](./decks/tekflow-voc-synthesis-2022-12-emea-update/_index.md).**

## Documented decks

| Deck | Author / Date | Chunks |
|---|---|---|
| [tekflow-voc-synthesis-2022-12](./decks/tekflow-voc-synthesis-2022-12/_index.md) | Subhasis Bera · 2022-12-02 | 3 (`platform-roadmap`, `ui-ux-roadmap`, `voc-summary-and-synthesis`) — locks the `/document-deck` format for this subject |
| [tekflow-voc-synthesis-2022-12-emea-update](./decks/tekflow-voc-synthesis-2022-12-emea-update/_index.md) | Subhasis Bera · 2022-12-02 | 4 (`platform-roadmap`, `ui-ux-roadmap`, `business-update-with-emea-schedule`, `voc-summary-and-synthesis`) — adds Israel + Taiwan customer-visit schedule on slide 4 |
| [stm-france-tekflow-presentation](./decks/stm-france-tekflow-presentation/_index.md) | unknown · 2021-05-18 | 6 (`tekflow-solution-overview`, `disaggregated-compute-and-automation`, `test-performance-and-dphy-benchmarks`, `stm-customer-feedback`, `demo-and-dphy-roadmap`, `software-product-offering-and-licensing`) — earliest customer-engagement artifact; slide 9 captures STM's VOC questions back to Tek |

## Documented walkthroughs

| flow_id | flow_title | duration | screens visited |
|---|---|---|---|
| [customer-feedback-thread](./walkthroughs/customer-feedback-thread.md) | TekFlow customer feedback thread — ELECOM, IEI-CHN, Inspur-CHN + TekExpress-migration concerns | n/a (written thread) | n/a (no screens visited) |

## Highest-signal findings across this subject

Woven into the 2026-06-23 redesign context:

- *"Dashboard is Messy"* was a top customer complaint in the 2022-12 VOC — still open in 2026 (see [`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../../audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md) for the unchanged `tek-data-table` + `tek-status-bar` gap).
- *"Customize · Messy Current State"* was the highest-input theme in the 2022-12 deck (21 customer inputs, twice any other theme). STM raised the **same training-burden / configurability concern** 18 months earlier in their May 2021 feedback ([`decks/stm-france-tekflow-presentation/stm-customer-feedback.md`](./decks/stm-france-tekflow-presentation/stm-customer-feedback.md)) — *"How will I use the SW in User interface mode? It should have minimal training to get used to the New SW platform."* This is a sustained, multi-customer concern.
- The **2023 Q3 RP1 release plan** explicitly bundles a unified Ux rollout across **LPDDR 5X (TekExpress) + DP 1.4 (TekFlow) + LPDDR4 (TekFlow) + USB4V2 (Pamjet)** — concrete evidence that TekFlow and TekExpress share a UX implementation track.
- *"Anomaly Detection (Artificial Intelligence)"* was already in the platform roadmap for 2023 Q2+ — earlier AI signal than the 2026-06-23 Subhasis framing of "AI-based non-UI surfaces in the future".
- **TekFlow → TekExpress alignment is an explicit customer ask.** Inspur-CHN literally asked *"Does it [Deskew flow] align with the latest implementation in TekExpress?"* ([`walkthroughs/customer-feedback-thread.md`](./walkthroughs/customer-feedback-thread.md) step 5). The cross-product UX gap is named by customers, not just internal teams.
- **TekFlow's wizard/session-save value-prop is mirrored across both subjects.** STM in 2021 asked for *"Session or Saving the configurations to customize to test scenarios like My voltage 1, my voltage 2"*; Subhasis in 2026-06-23 names the same capability as *"the main prime reason for the money on the table"* for TekExpress ([`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../tek-express/walkthroughs/personas-and-jobs-to-be-done.md)). Cross-product validation of the save/recall workflow over 5 years.
- **PCIe 6.0 CEM is the migration forcing function.** TekExpress PCIe customers will be forced to migrate to TekFlow at that release. Migration continuity (PI command compatibility, reporting style, SDLA/DPOJET parity) is on the critical path ([`walkthroughs/customer-feedback-thread.md`](./walkthroughs/customer-feedback-thread.md) annotations).
- **The TekFlow UX of mid-2021 was already pitched on disaggregated compute + REST API + Python SDK** ([`decks/stm-france-tekflow-presentation/disaggregated-compute-and-automation.md`](./decks/stm-france-tekflow-presentation/disaggregated-compute-and-automation.md)). The architectural foundation has been stable since the start; the UX layer is what's being redesigned, not the platform.

## Open questions (for the team)

- Is TekFlow a TekExpress *successor*, a *sibling product*, or a *different product line*? Evidence in this corpus says **sibling** — shared VOC methodology, same product manager, distinct customer set, explicit "deskew flow alignment" question from customers comparing the two. PCIe 6.0 CEM forcing TekExpress customers to migrate complicates this; sibling → successor for PCIe specifically.
- Does TekFlow have its own screen corpus to document? If yes, run `/document-screens` against any photos that land in `uploads/photos/`. The customer-feedback walkthrough mentions Figma Debug screens that are not yet in this corpus.
- Are the **APD prioritization framework**, **CAA / AGC / R1 / R2 release milestones** documented anywhere? Subhasis cites them as established names but they are not defined in this corpus.

## Cross-subject relationships

- **tek-express** — frequent comparison target. Chunks here regularly declare `applies_to: [tek-flow, tek-express]` where content is genuinely shared. Specific bridges:
  - Deskew flow alignment (Inspur-CHN explicit ask)
  - PI command continuity (Brian Bowman's migration concern)
  - Save/recall wizard pattern (STM 2021 + Subhasis 2026)
  - "Dashboard is Messy" — same friction surface still unresolved 2022 → 2026
  - LPDDR 5X / DP 1.4 / LPDDR4 / USB4V2 RP1 unified Ux release plan
- **garuda** — adjacent VOC subject (also high-speed Tx/Rx test platform) scaffolded in the same batch. Triangulation across the three may yield cross-platform patterns. The VnV-customer integration concerns raised in this subject may also apply to Garuda; not yet cross-linked.
