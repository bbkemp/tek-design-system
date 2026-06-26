# STM France TekFlow Customer Presentation (May 2021) — index

**Source:** `corpus/sources/tek-flow/uploads/artifacts/STM_France_Tekflow customer presentation and Feedback plus notes.pptx` (gitignored) · **Slides:** 16 · **Sections:** 6 · **Author / cover speaker:** internal Tek team (not attributed on cover; speaker notes reference "FALCON SW BMV") · **Date on slides:** 18-MAY-2021 · **Classification on slides:** TEKTRONIX CONFIDENTIAL

This deck is the **customer-facing presentation** Tek delivered to STM (STMicroelectronics) France on 18 May 2021, followed by an internal "STM Meeting Feedback" capture on slide 9 documenting STM's questions back to Tek. The deck doubles as both an outbound pitch artifact and an inbound VOC artifact — the customer feedback on slide 9 is the highest-signal section for redesign purposes.

The deck is the earliest TekFlow customer-engagement artifact in this corpus (May 2021), pre-dating the December 2022 VOC synthesis decks by ~18 months.

## Sections

| Section | Slides | Chunk |
|---|---|---|
| TekFlow solution overview (Top Features · Landscape · System View) | 2-4 | [tekflow-solution-overview](./tekflow-solution-overview.md) |
| Disaggregated parallel compute + easy automation value props | 5-6 | [disaggregated-compute-and-automation](./disaggregated-compute-and-automation.md) |
| Test performance and DPHY 2.1 benchmarking results | 7-8 | [test-performance-and-dphy-benchmarks](./test-performance-and-dphy-benchmarks.md) |
| **STM customer meeting feedback (high-signal VOC)** | 9 | [stm-customer-feedback](./stm-customer-feedback.md) |
| Demo, DPHY roadmap, and backup | 10-15 | [demo-and-dphy-roadmap](./demo-and-dphy-roadmap.md) |
| Software product offering and licensing | 16 | [software-product-offering-and-licensing](./software-product-offering-and-licensing.md) |

## Provenance

Slide 1 is a one-line cover ("TekFlow DPHY Software"). Slide 15 is a one-line section divider ("BACK UP & History") and is folded into the demo-and-dphy-roadmap chunk as part of its slide range.

Speaker notes are present on slides 1, 2, 3, and 16 — captured verbatim in the relevant chunks. Notes on slides 2 and 3 are particularly substantive (the "FALCON SW BMV" framing, Wow/Fit score of 8.5, Tek 79/85 acquisition platform, DOPJET/SDLA prerequisites) and serve as the deck-author's intended narration for those slides.

## Cross-subject links

This deck applies primarily to `tek-flow`. The STM customer feedback on slide 9 has cross-cutting relevance:

- The **STM CPHY roadmap commitment** in the 2022-12 deck's UI/UX Roadmap chunk (Q3 2023) traces forward from this 2021 STM engagement — a sustained ~2-year customer relationship.
- The **DOPJET / SDLA prerequisite note** in the slide 16 speaker notes ties to the Brian Bowman concern in the customer-feedback walkthrough ([`../../walkthroughs/customer-feedback-thread.md`](../../walkthroughs/customer-feedback-thread.md)) about TekExpress → TekFlow migration continuity for SDLA/DPOJET measurement capability.

Where chunks make these cross-product comparisons explicit, frontmatter declares `applies_to: [tek-flow, tek-express]`.
