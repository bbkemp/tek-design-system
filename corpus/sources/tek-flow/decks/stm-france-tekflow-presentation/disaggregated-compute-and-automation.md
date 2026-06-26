---
class: deck-section
deck_id: stm-france-tekflow-presentation
deck_title: STM France TekFlow Customer Presentation
deck_author: unknown
deck_date: 2021-05-18
section_id: disaggregated-compute-and-automation
section_title: Disaggregated Parallel Compute + Easy Automation & Integration
slide_range: "5-6"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# Disaggregated Parallel Compute + Easy Automation & Integration

## Summary

Two value-prop slides anchoring the deck's central architectural claim: TekFlow decouples compliance software from the oscilloscope's compute, enabling parallel processing on external PCs/servers (slide 5) and language-agnostic integration via REST API + Python SDK (slide 6). The slide-6 hero claim: a key customer integrated PCIe1 → PCIe4 in **2 weeks with one engineer**, against an SCPI-baseline of 2–3 months — a **50–80% system-integration time saving**.

## Slide content (verbatim)

### Slide 5 — TekFlow – Disaggregated & Parallel Compute

> TekFlow – Disaggregated & Parallel Compute
>
> TEKTRONIX CONFIDENTIAL · 5
>
> **Problems**
> - HW upgrades are restricted – RAM/Cores
> - IT policies are barriers for upgrades and additions
> - Scopes allow only minimal improvement speeds
> - Longer Test times
>
> **Advantages**
> - SW is independent of HW resources like processor/RAM of Oscilloscope
> - HW upgrade flexibility for performance enhancements
> - Works on PC/Server & On-Prem Cloud
> - Parallelize the analysis
> - Maximizes the compute utilization

### Slide 6 — TekFlow – Easy Automation & Integration

> TekFlow – Easy Automation & Integration
>
> Seamless and language agnostic integration
>
> Provision to integrate with third party equipment.
>
> Python SDK / Rest API – Consolidated call of API for tests
>
> Improvement in integration time: Verification, validation and system integration from **12 weeks to 2~3 weeks** — A key Customer has integrated PCIE1 to PCIE4 in **2 weeks, with one Engineer**
>
> TEKTRONIX CONFIDENTIAL · 6
>
> **SAVE 50%-80% TIME IN SYSTEM INTEGRATION**
>
> - Traditional SCPI commands take 2-3 months for system integration
> - Extensive code management
> - Multiple Layers of automation for PVT tests
> - Rest API (Industry Standard)
> - Easy workflow
> - Compatibility (Py, .NET, LabVIEW)
> - Quick Start Guides & Examples
> - Fast Development Time

## Speaker notes

No speaker notes captured for slides 5 or 6.

## Cross-references

- **"SW is independent of HW resources"** + **"Works on PC/Server & On-Prem Cloud"** is the architectural anchor that the 2022-12 platform roadmap continues to build on (Q1 2022 Solution Suite, REST-API and Platform Deployment items in [tekflow-voc-synthesis-2022-12 platform-roadmap](../tekflow-voc-synthesis-2022-12/platform-roadmap.md)).
- **"Rest API (Industry Standard) … Compatibility (Py, .NET, LabVIEW)"** is the foundation for the migration concern raised in the customer-feedback walkthrough ([`../../walkthroughs/customer-feedback-thread.md`](../../walkthroughs/customer-feedback-thread.md)) about TekExpress → TekFlow PI-command continuity. Subhasis's response *"RestAPI is built on the underlying PI"* in that thread depends on this 2021 architectural commitment holding.
- **The "2 weeks, one engineer" PCIe1→PCIe4 integration anecdote** is the most concrete customer-validated speed claim in the deck. The customer is unnamed on this slide (likely Qualcomm or an early-adopter Tier-1 — Qualcomm is named in the customer-feedback walkthrough as a DPHY/CPHY/DP/PCIe-on-TekFlow account).
- **"50–80% time in system integration"** range — STM as the customer audience for this pitch would have been evaluating against this savings claim. The slide-9 STM feedback chunk captures STM's questions back; they did not contest this claim directly.

## Confidence notes

- **"PVT"** in slide 5 ("Multiple Layers of automation for PVT tests") is process / voltage / temperature — the reliability-stage test workload that maps to Push-Button Pete in the persona model documented in [`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md).
- **"a style.visibility"** suffix at the end of slide 5's raw XML extraction is CSS-fragment noise from an animation property (likely "style.visibility" attribute on a placeholder) and is not user-visible slide content. Stripped from the verbatim above.
- **The 12-week vs. 2-3-week comparison** is presented as a customer-side metric; the speaker notes do not capture the methodology or sample size, so the "improvement in integration time" claim should be read as a marketing data point, not a study result.
