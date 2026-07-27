# TekExpress VoC Guide (Draft V0.8) — Tx-Rx Solutions Platform VOC guide

**Doc ID:** `tx-rx-voc-guide` · **Doc number:** none (internal draft, no part number) · **Published:** 2026-05 (inferred — see Confidence) · **Applies to:** `tek-express`, `tek-rx` · **Classification:** TEK-CONFIDENTIAL (internal draft)

Generated **2026-07-21** by the `document-pdf` skill from `uploads/artifacts/Tx-Rx Solutions Platform VOC guide Draft _08_TEK-CONFIDENTIAL.pdf` (9 pages, A4, exported from Microsoft Word).

**What this is:** Subhasis Bera's (Principal Product Manager, Solutions Platform and Decoders) VoC interview guide for the next-generation High-speed Tx/Rx Compliance and Conformation Platform — a **methodology document** (interview-conduct instrument), not VOC findings. It is the Tek-specific specialization of the Fortive Growth Accelerator empathy-interview methodology ([`walkthroughs/empathy-discussion-guide-question-bank.md`](../../walkthroughs/empathy-discussion-guide-question-bank.md)), aimed at Sales-Leader-mediated customer interviews (~60 min) covering workflow/JTBD, pain points, UI/UX model preference (wizard vs. free-flow vs. hybrid), and a nine-item forced ranking of candidate future features. Internal-only annotations (red text / highlights in the source) state, per section, how answers inform upcoming Platform decisions — including the "Express++" hybrid-UX hypothesis.

## Sections

| Section | PDF pages | Chunk |
|---|---|---|
| Background + Guidelines (INTERNAL TO TEKTRONIX) | 1 | [background-and-guidelines](./background-and-guidelines.md) |
| Introduction script (TALK ONLY), Expected outcomes, Target personas | 2 | [introduction-outcomes-and-personas](./introduction-outcomes-and-personas.md) |
| 1. Customer Context & Buying Influence | 2–3 | [customer-context-and-buying-influence](./customer-context-and-buying-influence.md) |
| 2. Current Workflow & Job-to-be-Done (JTBD) | 3 | [current-workflow-and-jtbd](./current-workflow-and-jtbd.md) |
| 3. Pain Points (Core Section) — 3.1 Setup & Bring-up, 3.2 Test Execution & Scalability | 4–5 | [pain-points-setup-and-execution](./pain-points-setup-and-execution.md) |
| 3. Pain Points (cont.) — 3.3 Analysis, 3.4 Reporting & Traceability, 3.5 Debug on Failure & Lifecycle Journey | 5–6 | [pain-points-analysis-reporting-and-debug](./pain-points-analysis-reporting-and-debug.md) |
| 4. UI/UX Deep Dive — 4.1 Wizard vs. Free-Flow, 4.2 Specific UI Elements | 6–8 | [ui-ux-deep-dive](./ui-ux-deep-dive.md) |
| 5. Future Needs & Ideal Solution + Wrap-Up | 8–9 | [future-needs-and-wrap-up](./future-needs-and-wrap-up.md) |

## Processed in this pass

**Whole document.** All five numbered question blocks plus the internal front matter and wrap-up are chunked (8 chunks). Section 3 is split at the 3.2/3.3 boundary for retrieval granularity; no content is omitted.

## Cross-references in the corpus

- **Upstream methodology:** [`walkthroughs/empathy-discussion-guide-question-bank.md`](../../walkthroughs/empathy-discussion-guide-question-bank.md) — the Fortive GA discussion guide this document specializes. That file's "Pending references" note ("pending `/document-pdf` processing" for this PDF) is now satisfied by this folder; the walkthrough file itself was deliberately not edited in this pass (see Pending back-links below).
- **Prior VOC rounds this guide de-biases against:** [`decks/designcon-2023-voc-summary/`](../../decks/designcon-2023-voc-summary/_index.md), [`decks/india-customer-voc-2023-march/`](../../decks/india-customer-voc-2023-march/_index.md), and [`tek-flow/decks/tekflow-voc-synthesis-2022-12/`](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/_index.md) ("previous VOC done around 2020").
- **Persona/strategy context:** [`walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md), [`walkthroughs/ui-redesign-mantras-and-transition-strategy.md`](../../walkthroughs/ui-redesign-mantras-and-transition-strategy.md), [`walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md`](../../walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md).
- **Current-product surface the questions probe:** [`docs/tek-express-ddr5-tx-user-manual/`](../tek-express-ddr5-tx-user-manual/_index.md) (setup, results, reports, SCPI, save/recall chunks).
- **Internal AE answers to the same question space:** the July 2026 `walkthroughs/ae-*` chunks.
- `related_screens` is empty on every chunk — the guide references the TekExpress UI only generically (e.g., "test selection lists, progress bars, log windows"), never a specific screen; no screen `Manual references` back-updates were made.

## Cross-product applicability

`applies_to: [tek-express, tek-rx]` for every chunk. The guide is TekExpress-centric but explicitly scopes the VOC to "customers who use Tx and Rx (ANY TOOL)" and to the combined Tx/Rx solutions platform, so the Rx side (`tek-rx`) is included. **TekFlow is never named in the document**, so `tek-flow` is deliberately not tagged despite the shared platform/UX track — cross-subject joins can still reach TekFlow via the deck cross-references above.

## Sensitive-content notes

- The source is marked **TEK-CONFIDENTIAL**; sections are explicitly labeled INTERNAL TO TEKTRONIX, and the customer-facing introduction script is marked **"(TALK ONLY) — NOT TO BE SHARED OVER EMAIL OR OTHER DIGITAL SOURCES"** (transcribed with the marker preserved so consumers honor it in customer engagements).
- **No named customer contacts, customer companies, or credentials appear anywhere in the document** — the only person named is the Tek author, Subhasis Bera. Nothing required redaction.

## Pending back-links (deferred, not performed in this pass)

- [`walkthroughs/empathy-discussion-guide-question-bank.md`](../../walkthroughs/empathy-discussion-guide-question-bank.md) links to this document at its old `uploads/artifacts/` PDF path and flags it "pending /document-pdf processing" in three places (Friction notes, Cross-references, Pending references). Those references should be repointed to this folder in a follow-up edit; skipped here to avoid touching `walkthroughs/` files concurrently edited by other passes.
- `corpus/sources/tek-express/index.md` — regenerated separately via `/refresh-index`; not edited in this pass.

## Confidence

- **Date inference:** the cover says only "Draft V0.8 25th May" with no year. The PDF was exported from Word on 2026-06-25, and the letter references "our previous VOC done around 2020" — `doc_date: 2026-05` is the best inference; revise if source .docx metadata surfaces.
- The draft contains numerous verbatim typos ("UNDERSTADING", "COMPLINACE", "ACQUISTION", "1being", unbalanced parentheses); all preserved as printed per the verbatim rule, each flagged in the owning chunk's Confidence notes.
- Whether QualiPHY2, AGGC, CLARIUS, XR8 Tx, and Infiniview are competitor or partner offerings is not stated; preserved without interpretation. "Express++" (UI/UX section) is the document's only mention of an upcoming-platform name.
