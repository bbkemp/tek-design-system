---
class: deck-section
deck_id: stm-france-tekflow-presentation
deck_title: STM France TekFlow Customer Presentation
deck_author: unknown
deck_date: 2021-05-18
section_id: demo-and-dphy-roadmap
section_title: Demo + DPHY Roadmap + Backup
slide_range: "10-15"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# Demo + DPHY Roadmap + Backup

## Summary

Six-slide demo and roadmap block. Slides 10–13 are presentation-flow markers and demo-step labels (Part 1 customer presentation → Part 2 demo → Live Demo with 5 and 40 runs → Running the script on SYS tests). Slide 14 names the DPHY release plan (DPHY 2.1 in Sep-Oct 2022; DPHY 2.5 in Q1 2023) and frames the broader release-cadence ambition. Slide 15 is the "BACK UP & History" divider.

The demo slides are visual / live-demo cues; their corpus value is the **demo flow structure** — Tek's pitch ran customer presentation → live demo with 5 then 40 runs → scripted SYS tests via Python.

## Slide content (verbatim)

### Slide 10 — Part 1 - Customer Presentation

> Part 1 - Customer Presentation
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 10

### Slide 11 — Part-2 Demo

> Part-2 Demo
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 11

### Slide 12 — Live Demo with 5 and 40 runs

> Live Demo with 5 and 40 runs
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 12

### Slide 13 — Running the script on SYS tests

> Running the script on SYS tests
>
> 18-MAY-2021 · TEKTRONIX CONFIDENTIAL · 13
>
> Running it through the Py Script for multiple runs with details on the event window

### Slide 14 — DPHY Plans (Work in Progress)

> DPHY Plans* – Work in progress
>
> Tektronix Confidential · 14
>
> - **DPHY 2.1** September-October 2022
> - **DPHY 2.5** Release – Q1 2023
>
> *We are working on building an Agile release roadmap with regular release cadence. There will be updates to the above timelines.

### Slide 15 — Section divider

> BACK UP & History
>
> 15

## Speaker notes

No speaker notes captured for slides 10–15.

## Cross-references

- **"Live Demo with 5 and 40 runs"** + **"Running the script on SYS tests"** is the demo-flow structure: STM was shown a 5-run baseline, scaled to a 40-run demonstration of the parallel-compute throughput claim from [disaggregated-compute-and-automation](./disaggregated-compute-and-automation.md), then handed off to a Python scripted SYS (system-test) automation. This sequence prefigures the "Tests → Result → Debug → Reports → Manage" beta-screens set named in the [tekflow-voc-synthesis-2022-12 ui-ux-roadmap](../tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md).
- **"Py Script for multiple runs"** with "details on the event window" — references a script-driven multi-run flow with event-window inspection. Likely the seed of the [STM Customer Feedback](./stm-customer-feedback.md) ask **"Can we call multiple measurements together and run them as a flow?"** — STM saw a Python-scripted version and wanted a UI-level equivalent.
- **DPHY 2.1 (Sep-Oct 2022) and DPHY 2.5 (Q1 2023)** roadmap targets — both predate the December 2022 platform roadmap, suggesting these dates were the inputs to the larger roadmap. DPHY 2.1 in particular is the focus of the slide-8 benchmark in [test-performance-and-dphy-benchmarks](./test-performance-and-dphy-benchmarks.md) — the deck is internally consistent: benchmark slide proves the capability, roadmap slide commits the release date.
- **"Agile release roadmap with regular release cadence"** in slide 14 — the cadence ambition was in place by 2021; the 2022-12 platform roadmap shows month-granular bucketing of items, consistent with this stated cadence.

## Confidence notes

- **Slides 10, 11, 12, 13, 15 are presentation-flow markers** with minimal text. Their value is structural (deck-flow trace) rather than substantive (no claims, no data).
- **"SYS tests"** in slide 13 is system tests — the test class above unit/integration in Tek's vocabulary. Not "Sys Admin" tests.
- **The asterisk on "DPHY Plans*"** in slide 14 ties to the slide-foot disclaimer — preserved.
- **Slide 15 ("BACK UP & History")** is the section divider preceding slide 16's licensing slide; slide 16 is documented in its own chunk ([software-product-offering-and-licensing](./software-product-offering-and-licensing.md)) because licensing is a meaningfully distinct topic from the demo flow.
