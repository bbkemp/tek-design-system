---
provenance: observed
class: deck-section
deck_id: india-customer-voc-2023-march
deck_title: mAR 2023 ind Customer VOC
deck_author: Subhasis Bera
deck_date: 2023-03-01
section_id: empathy-map-infineon
section_title: Empathy Map — Infineon (Bangalore, post-Cypress ATV)
slide_range: "4"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — Infineon (Bangalore, post-Cypress ATV)

## Summary

Customer immersion notes for the **Infineon Automotive (ATV) team in Bangalore** — the **former Cypress team merged with Infineon** (Infineon acquired Cypress in 2020). Subgroups: Electrical | Protocol | Corner Silicon. Technology scope: **LPDDRX | PCIe | USB32 | I2C | MII | MIPI | Analog blocks**. **Aspiration:** write a **white paper on TekFlow** (Subhasis + Vinod). **Strategic context:** uses **Keysight MXR 13G** for BBU testing; tests **30 samples in parallel**. **Concrete asks:** A-PHY overview / engagement, Ethernet portfolio, MII technologies, **de-embed filter files** for the **CYTECH RF switch**, **LPDDR5X / LPDDR5**.

## Slide content (verbatim)

### Slide 4 — INFINEON

> INFINEON
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> ATV - Automotive Group
>
> Cypress team merger with Infineon
>
> Subgroups
>
> Electrical | Protocol | Corner Silicon
>
> LPDDRX | PCIe | USB32 | I2C | MII | mipi | Analog blocks
>
> Roadmap in 2-year cycles
>
> Great Tek TEAM
>
> Better SW support from Tek
>
> Solves Multiple DQ
>
> Capability is the key along with performance along with convenience
>
> Test only one interface at a time
>
> **S:** Proud of being ATV Si val group · Want to write a White paper on TekFlow – Subhasis + Vinod
>
> **E:** Want to test all the interfaces with faster time to insight.
>
> **F:** IP + si validation + Characterization · Py Wrapper into LabVIEW System platform · Use KS MXR 13G for BBU · Test 30 Samples in parallel
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Location: Bangalore
>
> Installer LA was very helpful
>
> Instrument – need to check multiple lanes together
>
> 40ps resolution for timing
>
> AFG failure
>
> Margin Tester Demo for PCI
>
> A-PHY Overview to Vinod (Engagement)
>
> Ethernet Portfolio
>
> NDA + Connect with Trebuchet team
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> USB UFS ETH – TBD
>
> MII technologies
>
> Need De-embed filter files for CYTECH RF switch
>
> LPDDR5X – LPDDR5
>
> 4 · Vinod ATV VnV manager · Ramesh Babu Lab Manager & Team member · Vasavi ATV VnV Lead

## Speaker notes

No speaker notes captured.

## Cross-references

- **"Test only one interface at a time" + "Instrument – need to check multiple lanes together"** is the deck's most actionable UX gap. Today, Infineon's workflow forces them to test interfaces serially. The **multi-lane execution** ask is exactly what the [TekFlow 2022-12 UI/UX Roadmap](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md) names as *"Multi-lane UX Implementation"* (Jan-Mar 2023). This 2023-03 Infineon ask validates that roadmap workstream.
- **"Solves Multiple DQ"** — DQ = Data Query (memory bus signal). Suggests a memory-validation theme. Pairs with the **LPDDR5X – LPDDR5** ask. LPDDR5X is in the current [TekExpress DDR5 Tx user manual](../../docs/tek-express-ddr5-tx-user-manual/_index.md).
- **"Want to write a White paper on TekFlow – Subhasis + Vinod"** is a **partnership commitment** — joint Tek + Infineon publication. Customer-as-advocate signal at the strongest level: customer is willing to put their name on a Tek thought-leadership piece.
- **"Better SW support from Tek"** — software support gap. Generic; needs follow-up to specify whether the gap is application software (TekFlow / TekExpress), instrument firmware, or SDK / API.
- **"AFG failure"** — instrument-reliability complaint about a Tek Arbitrary Function Generator. Pairs with NVIDIA's [empathy-map-nvidia](./empathy-map-nvidia.md) "61 AFGs" install-base call-out — both India customers have significant AFG use, both have AFG-related pain.
- **"Margin Tester Demo for PCI"** — concrete next-step deliverable. Margin testing is the receiver-side compliance technique for PCIe.
- **"A-PHY Overview to Vinod (Engagement)"** — A-PHY is the automotive PHY standard (MIPI A-PHY for in-vehicle camera / display). Same A-PHY ask as the [Designcon TI customer connect](../designcon-2023-voc-summary/customer-connects-summary.md) (*"MIPI - CPHY-DPHY – ASA - APHY"*). Two customers, two months apart, both want A-PHY engagement.
- **"NDA + Connect with Trebuchet team"** — Trebuchet is the Tek-internal codename for an unreleased / pre-NDA project that Infineon is being introduced to. Preserved verbatim; codename not extractable to a published product.
- **"De-embed filter files for CYTECH RF switch"** — concrete technical deliverable: signal-integrity de-embedding filter files for a third-party RF switch. CYTECH appears to be the RF switch vendor.
- **The Infineon workflow** is detailed on the next slide ([customer-workflow-infineon](./customer-workflow-infineon.md)) — the only deck slide that diverges from the empathy-map template into a free-form diagram.
- **Persona alignment:** ATV / Si val group + IP+si validation + Characterization places this customer at the **system-validate** + **reliability** JTBD stages — **Midway Max** + **Push-Button Pete** territory per the [persona model](../../walkthroughs/personas-and-jobs-to-be-done.md). The "Test 30 Samples in parallel" detail is a Push-Button Pete signal (batch-replay over many samples).

## Confidence notes

- **"Cypress team merger with Infineon"** — Infineon's acquisition of Cypress Semiconductor closed in April 2020. By March 2023 (this slide), the merger is ~3 years complete. The team is still describing itself by its pre-merger identity ("Cypress team"), suggesting persistent group identity.
- **"Vinod ATV VnV manager · Ramesh Babu Lab Manager & Team member · Vasavi ATV VnV Lead"** — three named attendees. **First names** for Vinod and Vasavi (no last names on slide). Ramesh Babu has both names.
- **"USB32"** = USB 3.2. Preserved verbatim.
- **"MII"** = Media Independent Interface (Ethernet MAC-to-PHY interface). Preserved verbatim.
- **"BBU"** = Body Building Unit (automotive ECU). Pairs with the customer-workflow slide where BBU is the test subject. The [Designcon connects](../designcon-2023-voc-summary/customer-connects-summary.md) does not use "BBU"; the term is Infineon-specific automotive usage here.
- **"KS MXR 13G"** = Keysight Infiniium MXR-Series mixed-signal oscilloscope, 13 GHz bandwidth model. Used by Infineon for BBU testing.
- **"40ps resolution for timing"** is a customer-specified instrument capability requirement. 40 picoseconds = 1/25 GHz. Implies a 25-GHz+ effective sampling-clock requirement.
- **"Trebuchet"** is preserved verbatim; not associated with any published Tek product. Likely internal codename, possibly for a margin-tester or BERT product the team is preparing for NDA disclosure to Infineon.
- **"CYTECH"** is preserved verbatim; not expanded on slide. Likely the RF switch vendor.
- **"DQ"** in "Solves Multiple DQ" — DQ is the data-query signal on a DDR memory bus. Standard memory-validation jargon.
