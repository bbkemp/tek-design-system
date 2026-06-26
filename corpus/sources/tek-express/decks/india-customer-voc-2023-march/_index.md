# mAR 2023 ind Customer VOC — index

**Source:** `corpus/sources/tek-express/uploads/artifacts/mAR 2023 ind Customer VOC.pptx` (gitignored) · **Slides:** 5 · **Sections:** 4 · **Author:** Subhasis Bera (with Mehmet · Rovin · Puneet attending) · **Region:** India (IND) · **Date on cover slide:** March 2023

India regional Customer VOC deck for **March 2023**, capturing on-site customer immersion notes for **three Bangalore-based engineering teams — AMD, NVIDIA, Infineon (post-Cypress-merger ATV group)** — plus a workflow diagram for the Infineon customer's IP validation pipeline. Same empathy-map template as the [`designcon-2023-voc-summary`](../designcon-2023-voc-summary/_index.md) deck (Subhasis Bera authored both, one month apart).

This is the third Subhasis-authored VOC artifact in the corpus, following:
1. [`tek-flow/decks/tekflow-voc-synthesis-2022-12/`](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/_index.md) (December 2022) — TWN, IND, EMEA, JAP, CHN aggregate
2. [`tek-express/decks/designcon-2023-voc-summary/`](../designcon-2023-voc-summary/_index.md) (January-February 2023) — US (DesignCon Santa Clara) + Lisbon
3. **This deck** (March 2023) — India (Bangalore)

## Sections

| Section | Slides | Chunk |
|---|---|---|
| Empathy Map — AMD (Bangalore Embedded / Data Center / Client) | 2 | [empathy-map-amd](./empathy-map-amd.md) |
| Empathy Map — NVIDIA (Bangalore IP Validation) | 3 | [empathy-map-nvidia](./empathy-map-nvidia.md) |
| Empathy Map — Infineon (Bangalore ATV / post-Cypress) | 4 | [empathy-map-infineon](./empathy-map-infineon.md) |
| Customer Workflow — Infineon IP-to-Application Validation | 5 | [customer-workflow-infineon](./customer-workflow-infineon.md) |

## Provenance

Slide 1 (cover) is not chunked. The cover names attendees **Mehmet · Rovin · Puneet · Subhasis** and titles the deck "VOC -IND March - 2023". Slides 2-4 use the empathy-map template (PowerPoint table GUID `{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}` — identical to the Designcon deck and the TekFlow 2022-12 deck). Slide 5 deviates from the template — it's a free-form workflow diagram for the Infineon IP validation pipeline.

Per-chunk frontmatter carries `deck_id: india-customer-voc-2023-march`, `deck_author: Subhasis Bera`, `deck_date: 2023-03-01` (the deck's "March 2023" cover date, normalized to month-start for sortability), and `applies_to:` is set per-slide.

## Cross-subject links

- **Bangalore concentration:** All three customer empathy maps are explicitly **Bangalore-located**. The three customers (AMD, NVIDIA, Infineon-ATV) together cover the Indian HSS validation customer base in March 2023. This is the IND regional bucket in the [TekFlow 2022-12 VOC Summary](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md) (5 regions: TWN, IND, EMEA, JAP, CHN).
- **AU VoC walkthrough reference:** In the 2026-06-23 AU VoC Sync up walkthrough ([`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md)), Subhasis names India as a "growth region" — this 2023 deck is the supporting evidence for that framing.
- **Customer continuity:** NVIDIA appears in this deck (March 2023) and is referenced in the 2026-06-23 AU VoC walkthrough as part of the AI-server customer pool. 3-year strategic-account continuity, same as Intel + Ampere in the [Designcon deck](../designcon-2023-voc-summary/_index.md).

## Confidence notes

- **"mAR"** in the source filename is shorthand for **March**. Preserved in the artifact filename; normalized to `march` in the `deck_id` (`india-customer-voc-2023-march`).
- **Cover slide attendees ("Mehmet/Rovin/Puneet/Subhasis")** are the Tek-internal attendees; the customers themselves are named per-empathy-map slide.
- **The same "Rajani Rao (Manager)" + "Mohit Kumar (Lead) – post-Si validation" name block appears on BOTH the AMD (slide 2) AND NVIDIA (slide 3) empathy maps.** This is a deck-authoring error — likely a copy-paste from one template slide to another. The names are preserved as-extracted on each slide with a confidence flag. The actual attendee mapping is not recoverable from the XML alone.
- **"BBU"** on the Infineon workflow slide = Baseband Unit, used here in the automotive context for the Body Building Unit (Infineon ATV automotive context). Preserved verbatim.
- **GUID `{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}`** matches the Designcon and TekFlow 2022-12 decks. Confirms the shared empathy-map PowerPoint table template.
