---
provenance: observed
class: deck-section
deck_id: stm-france-tekflow-presentation
deck_title: STM France TekFlow Customer Presentation
deck_author: unknown
deck_date: 2021-05-18
section_id: test-performance-and-dphy-benchmarks
section_title: Test Performance Data + DPHY 2.1 Benchmarking
slide_range: "7-8"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# Test Performance Data + DPHY 2.1 Benchmarking

## Summary

Two benchmark slides: slide 7 ("Test Performance Data") names "Pascal" as the platform reference; slide 8 ("DPHY 2.1 Test Benchmarking Results") presents the DPHY 2.1 timing data. Both slides are predominantly visual (chart-only); the verbatim text extracted from XML is sparse (title, date, classification footer) — the underlying benchmark numbers live in chart objects that are not extractable from `tr/sed` text mining.

## Slide content (verbatim)

### Slide 7 — Test Performance Data

> Test Performance Data
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 7
>
> Pascal

### Slide 8 — DPHY 2.1 Test Benchmarking Results

> DPHY 2.1 Test Benchmarking Results
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 8

## Speaker notes

No speaker notes captured for slides 7 or 8.

## Cross-references

- **"Pascal"** on slide 7 — likely an internal Tek codename for a benchmark configuration or a comparator platform (not the Nvidia GPU architecture in this context, given the surrounding test/measurement vocabulary). Preserve verbatim.
- The **DPHY 2.1 benchmark** slot here aligns with the September-October 2022 DPHY 2.1 release named in the [demo-and-dphy-roadmap](./demo-and-dphy-roadmap.md) chunk (slide 14). The 2021 STM pitch was using DPHY 2.1 capability as a forthcoming-feature demo.

## Confidence notes

- **Image-only content flagged**: slides 7 and 8 are presentation-of-data slides where the data itself is rendered as embedded charts/images. The benchmark numbers ("10x faster" referenced elsewhere in the deck likely originate here) are NOT extractable verbatim from the XML text stream. Refer to the source pptx for the actual numerical comparisons.
- **"Pascal"** without further context — preserved verbatim per skill rule (do not gloss when speculative); could refer to a codename, a comparator product, or a chart-legend label.
- These two slides could be omitted from RAG retrieval given their low text content; flagged here for completeness and to mark the corpus position for any future re-processing that captures chart data.
