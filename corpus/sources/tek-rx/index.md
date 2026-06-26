# tek-rx — subject index

**TekRx** — Tek's receiver-test (Rx) compliance product, the Rx counterpart to TekExpress (Tx). Demoed by Pranavi Chanda alongside TekExpress in the [2026-04-23 DS follow-up meeting](../tek-express/walkthroughs/_index.md) — *"receiver test wizard"* with save/resume calibration and a wizard-driven flow that's distinct from TekExpress's panel-based UI.

This subject was scaffolded **2026-06-26** in anticipation of TekRx material being intaked in future batches. It has **no chunks yet** — the scaffold is provisional and reflects only what's known from cross-subject references in the TekExpress corpus.

## Status

**Empty.** `uploads/` is scaffolded with the full class skeleton (`pdfs`, `transcripts`, `photos`, `artifacts`, `api-specs`). When TekRx material arrives via `/corpus-intake` (transcripts, screen photos, manuals, deck content), it lands here.

## What we know about TekRx from cross-subject references

Pieced together from the [`tek-express/walkthroughs/tek-products-walkthrough.md`](../tek-express/walkthroughs/tek-products-walkthrough.md) (Pranavi's 2026-04-23 demo) and Subhasis Bera's 2026-06-23 AU VoC context:

- **Wizard-driven flow** — TekRx is more linear / step-by-step than TekExpress's panel-based UI
- **Save/resume calibration** — the calibration loop is the dominant time investment for Rx test
- **External BERT (Bit Error Rate Tester) dependency** — TekRx orchestrates a BERT instrument in addition to the scope; the BERT is not part of TekExpress workflows
- **TekFlow + TekExpress + TekRx form a related product family** — explicit in the 2023 Q3 RP1 release plan ([`tek-flow/decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md`](../tek-flow/decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md)) which bundles **DDR5 DRAM Rx (TekFlow) + LPDDR 5X (TekExpress)** under one Ux track. TekRx's exact place in this lineage is unclear; the 2026-06-23 walkthrough suggests TekRx is a separate product, but the receiver-test workflows likely overlap with TekFlow's Rx focus
- **Cross-vendor reach** — the AU VoC context mentions Rx solutions span **QualiPHY2, AGGC, CLARIUS, XR8 Tx** as adjacent platforms ([`tek-express/walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md`](../tek-express/walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md))

## Open questions for the team

1. **Is TekRx a separate product from TekFlow's Rx side?** TekFlow material (DPHY 2.5, DDR5 DRAM Rx) suggests TekFlow handles Rx workflows. Is TekRx a distinct product, a TekFlow successor, or a TekExpress-companion app?
2. **How does TekRx relate to Garuda?** Garuda is documented as a DDR5Rx test bench. TekRx and Garuda may be the same thing under different names, may be related platforms, or may be independent.
3. **Does TekRx have its own screen corpus?** The 2026-04-23 walkthrough mentions Pranavi demoing screens. If photos exist, they should land in `uploads/photos/` and be processed via `/document-screens`.
4. **Does TekRx share TekExpress's persona model?** The 3-persona Guru Gus / Push-Button Pete / Midway Max framework was articulated for TekExpress. Whether Rx test workflows fit the same model is unclear.

## Cross-subject relationships (provisional)

- **tek-express** — sibling product (Tx side of compliance); cross-references when content explicitly mentions both. Use `applies_to: [tek-rx, tek-express]` per chunk
- **tek-flow** — possibly overlapping in Rx workflows. Triangulation needed when material lands
- **garuda** — possibly the same product. Subject relationship pending team confirmation

This subject will fill in as content arrives.
