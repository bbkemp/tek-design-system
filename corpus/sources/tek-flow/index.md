# tek-flow — subject index

**TekFlow** — Tek product distinct from TekExpress, with overlapping concerns (compliance testing for high-speed Tx/Rx, deskew, debug workflows). Confirmed as its own product via the Feedback DOCX comparing "TekFlow's deskew flow" against "TekExpress's deskew flow" and via shared author (Subhasis Bera, Principal Product Manager) running parallel but distinct VOC efforts for each.

This subject was scaffolded **2026-06-25** as part of the 2026-06-25 batch 2 intake.

## Status

`uploads/artifacts/` holds:

- **Feedback on TekFlow.docx** — customer feedback thread (questions from ELECOM, IEI-CHN, Inspur-CHN customers about TekFlow features: USB waveform parallel analysis, pattern validation for PCIe, debug failure scenarios, deskew flow vs TekExpress's, etc.). **Pending `/document-walkthrough` processing.**
- **STM_France_Tekflow customer presentation and Feedback plus notes.pptx** — STM France customer-facing presentation with feedback annotations. **Pending `/document-deck` processing.**
- **TekFlow VOC Synthesis 1.pptx** (Subhasis Bera, 2022-12-02) — initial VOC synthesis deck. **Processed 2026-06-26 via `/document-deck` → see [`decks/tekflow-voc-synthesis-2022-12/`](./decks/tekflow-voc-synthesis-2022-12/_index.md).** Locks the `/document-deck` format for this subject.
- **TekFlow VOC Synthesis_update with EMEA.pptx** — VOC synthesis EMEA update. **Pending `/document-deck` processing.**

## Documented decks

| Deck | Author / Date | Chunks |
|---|---|---|
| [tekflow-voc-synthesis-2022-12](./decks/tekflow-voc-synthesis-2022-12/_index.md) | Subhasis Bera · 2022-12-02 | 3 (`platform-roadmap`, `ui-ux-roadmap`, `voc-summary-and-synthesis`) — locks the `/document-deck` format for this subject |

**Highest-signal findings from the 2022-12 deck** (woven into the 2026-06-23 redesign context):

- *"Dashboard is Messy"* was a top customer complaint in 2022 — still open in 2026 (see [`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../../audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md) for the unchanged `tek-data-table` + `tek-status-bar` gap).
- *"Customize · Messy Current State"* was the highest-input theme (21 customer inputs, twice any other theme).
- The **2023 Q3 RP1 release plan** explicitly bundles a unified Ux rollout across **LPDDR 5X (TekExpress) + DP 1.4 (TekFlow) + LPDDR4 (TekFlow) + USB4V2 (Pamjet)** — concrete evidence that TekFlow and TekExpress share a UX implementation track.
- *"Anomaly Detection (Artificial Intelligence)"* was already in the platform roadmap for 2023 Q2+ — earlier AI signal than the 2026-06-23 Subhasis framing of "AI-based non-UI surfaces in the future".

## Open questions (for the team)

- Is TekFlow a TekExpress *successor*, a *sibling product*, or a *different product line*? The shared VOC methodology + same product manager suggests close relation, but the distinct customer set and the explicit "deskew flow alignment" question in the feedback suggests they're peers.
- Does TekFlow have its own screen corpus to document? If yes, run `/document-screens` against any photos that land in `uploads/photos/`.
- Is the VOC material in `uploads/artifacts/` raw or synthesized? Raw VOC interviews want `/document-walkthrough`; synthesized decks may want a different skill (no `/document-deck` exists yet).

## Cross-subject relationships

- **tek-express** — frequent comparison target in the Feedback DOCX (deskew flow alignment, debug feature parity). Chunks generated from this subject should consider declaring `applies_to: [tek-flow, tek-express]` when content is genuinely shared.
- **garuda** — adjacent VOC subject (also high-speed Tx/Rx test platform) scaffolded in the same batch. Triangulation across the three may yield cross-platform patterns.
