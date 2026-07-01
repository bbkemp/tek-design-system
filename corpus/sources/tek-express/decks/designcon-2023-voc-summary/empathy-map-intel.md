---
provenance: observed
class: deck-section
deck_id: designcon-2023-voc-summary
deck_title: Designcon 2023 VOC Summary
deck_author: Subhasis Bera
deck_date: 2023-02-08
section_id: empathy-map-intel
section_title: Empathy Map — Intel (Characterization Lab)
slide_range: "6"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — Intel (Characterization Lab)

## Summary

Customer immersion notes for the **Intel Characterization Lab manager**, responsible for HSS characterization across PCIe and other technologies. The lab ensures system availability + performance + PVT (Process / Voltage / Temperature) tests across upcoming technologies. **Active engagement:** starting PCIe Gen6 CEM Rx system integration for characterization. **Strategic pain:** *"Want to break the monopolistic barrier of single-vendor solutions."* **Direct ask:** instrument-agnostic platform that controls **Keysight M8040 for Rx** alongside **Tek Sx Scope**.

## Slide content (verbatim)

### Slide 6 — Empathy Map - Intel

> Empathy Map - Intel · Intel
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> Characterization Lab Intel
>
> Manages the Lab for HSS characterization for PCIe and other technologies
>
> Ensure availability of Systems that perform at the best and optimized speeds for characterization including PVT tests across technologies and DUTs for upcoming technologies. The latest work is going to start working on PCIe Gen6 CEM Rx system integration for characterization tests
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Want to break the monopolistic barrier of single-vendor solutions
>
> Wants to utilize a platform for Instrument agnostic setup for ease of operations.
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> Looking for Easy to integrate, high throughput Tx and Rx for PCIe
>
> Should be able to control M8040 for Rx along with Tek Sx Scope.
>
> 6

## Speaker notes

No speaker notes captured.

## Cross-references

- **"Want to break the monopolistic barrier of single-vendor solutions"** is the highest-signal strategic finding in the entire deck. Intel — Tek's largest historical customer — is **actively** looking for cross-vendor instrument control. This validates Subhasis's "cross-vendor parity" framing in [`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md) where he frames T&M vendor parity as a customer expectation rather than a differentiation lever.
- **"Should be able to control M8040 for Rx along with Tek Sx Scope"** — the **Keysight M8040** is a BERT (Bit Error Rate Tester) used for receiver compliance. Intel is asking Tek to build cross-vendor instrument-control affordances. The [TekFlow 2022-12 Platform Roadmap](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md) lists *"3rd Party Inst/SW integration"* (Q3 2022) and *"3rd Party – Keysight Wfm integration"* (Q1 2023) — directly responsive to this Intel ask, dated within the same 2-month window.
- **"PCIe Gen6 CEM Rx system integration"** is corroborated on the [customer-connects-summary](./customer-connects-summary.md) slide: *"PCIe Gen 6 and needs of Gen7 TekFlow for characterization"*. Same Intel customer, same Gen6 Rx focus.
- **"PVT tests"** (Process / Voltage / Temperature) is the system-validate / reliability JTBD stage where **Midway Max + Push-Button Pete** dominate ([`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md)). Reliability stage (3) in Subhasis's four-stage landscape.
- **Intel Folsom / Hillsboro / Hudson** are named on the connects summary slide as the Intel sites engaged — see [customer-connects-summary](./customer-connects-summary.md).

## Confidence notes

- **"M8040"** is the Keysight M8040A High-Performance BERT (256 Gb/s sampler), used for PCIe Gen6 receiver test. Preserved verbatim without expansion in body — the slide does not name the vendor.
- **"Tek Sx Scope"** refers to Tektronix sampling scopes (the Sx-series). Generic family reference; specific model not on slide.
- **"CEM"** = Card Electromechanical (the PCIe CEM specification covers connector / slot mechanical + electrical compliance). Preserved verbatim.
- **The empathy map's title bar duplicates "Intel · Intel"** in the XML extraction — likely a slide-design artifact (the heading and a label both say "Intel"). Preserved as extracted.
