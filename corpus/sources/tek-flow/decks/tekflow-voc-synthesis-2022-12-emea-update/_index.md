# TekFlow VOC Synthesis (December 2022) — EMEA Update — index

**Source:** `corpus/sources/tek-flow/uploads/artifacts/TekFlow VOC Synthesis_update with EMEA.pptx` (gitignored) · **Slides:** 6 · **Sections:** 4 · **Author:** Subhasis Bera · **Date on cover:** 2022-12-02 · **Classification on slides:** TEKTRONIX CONFIDENTIAL

This is an **update** of the [tekflow-voc-synthesis-2022-12](../tekflow-voc-synthesis-2022-12/_index.md) deck with EMEA region coverage added. Cover slide and date are unchanged — both decks share `12/2/2022` as the cover date, suggesting this update was redistributed under the same authorship/date stamp after the EMEA / Taiwan customer-visit schedule was finalized.

Slides 1, 2, 3, and 5 are byte-for-byte identical to the original 2022-12 deck (Platform Roadmap, UI/UX Roadmap, UX VOC Synthesis). Slide 4 is the **only meaningful delta** — it adds an Israel visit schedule and a Taiwan customer-visit schedule grid alongside the original Business Update content.

## Sections

| Section | Slides | Chunk |
|---|---|---|
| Platform Roadmap (2022 Q1 — 2023 Q4) — unchanged from original | 2 | [platform-roadmap](./platform-roadmap.md) |
| UI/UX Roadmap (2022 Q1 — 2023 Q4) — unchanged from original | 3 | [ui-ux-roadmap](./ui-ux-roadmap.md) |
| Business Update + EMEA / Taiwan customer-visit schedule (NEW) | 4 | [business-update-with-emea-schedule](./business-update-with-emea-schedule.md) |
| UX VOC Synthesis — unchanged from original | 5 | [voc-summary-and-synthesis](./voc-summary-and-synthesis.md) |

## Provenance

Slide 1 (cover) and slide 6 (empty) are not chunked. Slide 1's "Subhasis Bera 12/2/2022" attribution is preserved in this index and in each chunk's `deck_author` / `deck_date` frontmatter.

The "EMEA update" framing comes from the source filename — the deck contents themselves do not flag the update; the only material change is slide 4's addition of the customer-visit schedule.

## Cross-subject links

Same as the original 2022-12 deck: applies primarily to `tek-flow` but contains content that explicitly bridges into `tek-express` (LPDDR 5X mentioned as a TekExpress lane in the UI/UX Roadmap). Chunks declare `applies_to: [tek-flow, tek-express]` where slide content references both.

## Relationship to the original 2022-12 deck

The platform-roadmap, ui-ux-roadmap, and voc-summary-and-synthesis chunks here **mirror** the original deck's chunks verbatim. They are duplicated here (rather than only cross-referenced) so the EMEA-update deck stands as a complete corpus artifact on its own — an RAG consumer querying the EMEA update gets the full picture without having to chase a separate index.

The unique signal in this deck is in [business-update-with-emea-schedule](./business-update-with-emea-schedule.md): the Israel + Taiwan customer-visit calendar that did not appear on slide 4 of the original.
