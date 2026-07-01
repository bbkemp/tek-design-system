---
provenance: observed
class: deck-section
deck_id: india-customer-voc-2023-march
deck_title: mAR 2023 ind Customer VOC
deck_author: Subhasis Bera
deck_date: 2023-03-01
section_id: customer-workflow-infineon
section_title: Customer Workflow — Infineon IP-to-Application Validation
slide_range: "5"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Customer Workflow — Infineon IP-to-Application Validation

## Summary

Free-form workflow diagram showing the **Infineon ATV team's** end-to-end IP-to-Application validation pipeline. Three stages: **IP Test** (BBU IP validation using the MXR-13G for jitter / measurement) → **IP-Application** (porting IP into an application, with chipsets and 20 total TekFlow tests) → **Application Validation** (VnV characterization PVT tests, with manual measurement only). The XML extraction loses the diagram's spatial layout; the verbatim text below is preserved with inferred ordering noted in Confidence.

## Slide content (verbatim)

### Slide 5 — Customer Workflow – Infineon

> Customer Workflow – Infineon
>
> 5
>
> BBU IP validation
>
> MXR-13G
>
> Jitter & Meas
>
> Porting IP into an application
>
> Chipsets
>
> Manual meas only
>
> VnV Characterization
>
> PVT tests
>
> Total 20 TekFlow
>
> IP Test
>
> IP-Application
>
> Application Validation

## Speaker notes

No speaker notes captured.

## Cross-references

- **"Total 20 TekFlow"** is the most concrete TekFlow install / usage data point in the entire deck — Infineon ATV has **20 TekFlow** instances deployed in the IP-Application stage. Strong installed-base signal.
- **"Manual meas only" at the Application Validation stage** is the **single highest-actionable UX gap** in this chunk. Infineon's downstream validation stage relies on manual measurement — meaning automation **stops at the IP boundary** and humans take over. This is a textbook **Push-Button Pete** workflow gap ([persona model](../../walkthroughs/personas-and-jobs-to-be-done.md)): the persona who "just keeps pushing the button and validates the results" has no automation for the application-validation stage.
- **"PVT tests" at Application Validation** maps to the **reliability** JTBD stage in Subhasis's [four-stage landscape](../../walkthroughs/personas-and-jobs-to-be-done.md) — and the [Designcon Intel empathy map](../../designcon-2023-voc-summary/empathy-map-intel.md) also names PVT testing. Same testing class, same persona, two customers.
- **MXR-13G** is Keysight (per the [empathy-map-infineon](./empathy-map-infineon.md)) — Infineon's IP-Test stage uses a Keysight scope, the IP-Application stage uses 20 TekFlow instances. A **mixed-vendor pipeline** where Keysight occupies the upstream stage and Tek occupies the midstream. Strategic implication: if Tek can extend TekFlow upstream into IP-Test (jitter + measurement) and downstream into Application Validation (PVT automation), the customer can consolidate. Cross-vendor parity is therefore not just defense — it's a consolidation opportunity.
- **"Chipsets"** as a noted item in the IP-Application stage echoes the [AMD empathy map](./empathy-map-amd.md) language ("X86 includes some parts of Xilinx") — both Bangalore customers are chipset-vendor focused.

## Confidence notes

- **The diagram's spatial layout is lost in XML extraction.** The verbatim text above lists the items in order of appearance in the XML stream. The semantic ordering is reconstructed in the Summary as:
  1. **IP Test stage:** BBU IP validation · MXR-13G · Jitter & Meas
  2. **IP-Application stage:** Porting IP into an application · Chipsets · Total 20 TekFlow
  3. **Application Validation stage:** VnV Characterization · PVT tests · Manual meas only
  This reconstruction is **inferred from the three stage labels at the bottom of the verbatim block** ("IP Test", "IP-Application", "Application Validation") which are the diagram's three columns / phases.
- **"BBU"** = Body Building Unit (automotive ECU context). Same as the [empathy-map-infineon](./empathy-map-infineon.md) usage.
- **"Jitter & Meas"** is the test class — jitter analysis and general measurement.
- **"20 TekFlow"** is preserved verbatim; could mean 20 instances of TekFlow software deployed, 20 test cases in TekFlow, or 20 TekFlow workflows — the slide is ambiguous. The most likely interpretation given the workflow context is **20 TekFlow-driven test runs** in the IP-Application stage.
