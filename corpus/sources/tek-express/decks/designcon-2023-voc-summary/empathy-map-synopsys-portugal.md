---
class: deck-section
deck_id: designcon-2023-voc-summary
deck_title: Designcon 2023 VOC Summary
deck_author: Subhasis Bera
deck_date: 2023-02-08
section_id: empathy-map-synopsys-portugal
section_title: Empathy Map — Synopsys (Lisbon, Portugal)
slide_range: "5"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — Synopsys (Lisbon, Portugal)

## Summary

Customer immersion notes for the **leader of the Characterization lab in Lisbon, Synopsys** (Portugal). Works on HSIO technologies — Super Speed Phys (**USB3.0, PCIe, SATA, OIF, XAUI**) — and is responsible for ATE test plans plus chip characterization and debug. JTBD focus: **test optimization, easy integration of ATEs, test performance**. Direct request: **HSS compliance solutions for PCIe characterization on Python**. Available for follow-up VOC.

## Slide content (verbatim)

### Slide 5 — Empathy Map - Synopsys

> Empathy Map - Synopsys
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> Leader of the Characterization lab in Lisbon
>
> Works on HSIO technologies
>
> Responsible for test and characterization of Super Speed Phys (USB3.0, PCIe, SATA, OIF and XAUI)
>
> Responsible for developing ATE test plans and involvement in chip characterization and debug activities
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Test optimization
>
> Easy integration of ATEs
>
> Test performance
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> HSS compliance solutions for PCIe characterization on Python.
>
> Available for VOC and discussions on Pain points
>
> 5

## Speaker notes

No speaker notes captured.

## Cross-references

- **"HSS compliance solutions for PCIe characterization on Python"** is the headline ask. This is a **scripting-API / programmability** requirement, not a UI requirement — directly aligns with the TekExpress redesign brief's *"PC-native Execution"* and the **REST-API / SCPI** workstream in the [`tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md`](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md) (Q4 2022).
- **"Test optimization · Easy integration of ATEs · Test performance"** — three-word pain summary. ATE (Automated Test Equipment) integration appears as a recurring theme; the [`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md) discusses similar multi-instrument coordination at the AMD AI-server customer.
- **Synopsys Lisbon Customer Connect summary** on slide 8 names this customer as **"Narciso Neves"** with a "Follow-up for VOC" plan — see [customer-connects-summary](./customer-connects-summary.md).
- **HSIO Phys list (USB3.0, PCIe, SATA, OIF, XAUI)** is a broader HSS scope than TekExpress today supports (TekExpress AppEmulator currently has DisplayPort, PCIe, DDR5/LPDDR5X, USB3 manuals on disk — see [`tek-express/index.md`](../../index.md)). SATA, OIF, XAUI are not yet documented compliance suites in this corpus.

## Confidence notes

- **"Narciso Neves"** is named on the Customer Connects summary slide (slide 8) as the Synopsys Portugal connect contact — preserved with the deck's verbatim spelling. Slide 5 itself does not name the engineer.
- **"OIF" and "XAUI"** are HSS standards (Optical Internetworking Forum / 10 Gigabit Attachment Unit Interface). Preserved verbatim from the slide.
- **"ATE"** = Automated Test Equipment; not expanded on the slide.
