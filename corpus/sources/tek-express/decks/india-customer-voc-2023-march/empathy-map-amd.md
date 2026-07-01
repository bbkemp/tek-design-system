---
provenance: observed
class: deck-section
deck_id: india-customer-voc-2023-march
deck_title: mAR 2023 ind Customer VOC
deck_author: Subhasis Bera
deck_date: 2023-03-01
section_id: empathy-map-amd
section_title: Empathy Map — AMD (Bangalore)
slide_range: "2"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — AMD (Bangalore)

## Summary

Customer immersion notes for **AMD Bangalore** — a **15-engineer team** spanning Functional, System, and IP electrical compliance. Divided into Embedded (incl. parts of Xilinx) | Data Center | Client groups; **Embedded (X86)** is the key group. Industry verticals: Automotive, Network, Storage. Work spans characterization, VnV (Validation and Verification), and HSIO. **Aspiration:** complete automation in 12-24 months. **Current state:** uses LabVIEW. **Direct ask:** **TekFlow Platform** + **TekFlow PCIe**.

## Slide content (verbatim)

### Slide 2 — AMD

> AMD
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> 15 Engineers team in Bangalore
>
> Functional | System | IP electrical compliance
>
> Divisions
>
> Embedded | Data Center | Client
>
> Embedded is the key group (X86) includes some parts of Xilinx
>
> Automotive
>
> Network
>
> Storage
>
> Work on characterization | VnV | HSIO
>
> **S:** Build characterization tests across a multitude of Embedded Technologies
>
> **E:** Want to move to complete automation in 12-24 months
>
> **F:** Integrate Compliance and Automation for PVT using LabVIEW
>
> Names: Rajani Rao (Manager) · Mohit Kumar (Lead) – post-Si validation
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Location: Bangalore
>
> May be LabVIEW
>
> Need technologies for Backplane and Automotive SFP+ 5G 10GKR
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> TekFlow Platform
>
> TekFlow PCIe and others (To be confirmed by Puneet)
>
> Customer ½ day at Tek Office in MARCH.
>
> 2 · AMD

## Speaker notes

No speaker notes captured.

## Cross-references

- **"E: Want to move to complete automation in 12-24 months"** is a clear **automation aspiration** — this maps directly to the TekExpress redesign brief's wizard-save-replay workflow value ([`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md): *"the main prime reason for the money on the table"*). AMD is asking for what TekExpress already sells.
- **"F: Integrate Compliance and Automation for PVT using LabVIEW"** — LabVIEW is **National Instruments'** automation environment. AMD has a LabVIEW investment they want to integrate Tek compliance into. This is a **LabVIEW interop** ask that doesn't currently appear in the [TekFlow 2022-12 Platform Roadmap](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md) — only Python SDK and REST-API are roadmapped. Gap.
- **"May be LabVIEW"** under Pain Points reads as Subhasis's annotation that LabVIEW is itself the pain point — i.e., AMD is questioning whether to stay on LabVIEW. Reinforces that the Python SDK / REST-API workstream is the right direction for this segment.
- **"Need technologies for Backplane and Automotive SFP+ 5G 10GKR"** — three new technology asks: **Backplane** (HSS over backplane), **Automotive SFP+** (small form-factor pluggable for automotive), **10GKR** (10 Gbit Ethernet KR backplane). None currently in the TekExpress compliance suite list ([`tek-express/index.md`](../../index.md) covers DisplayPort, PCIe, DDR5/LPDDR5X, USB3). Three gaps.
- **"Customer ½ day at Tek Office in MARCH"** — concrete follow-up commitment. The customer is willing to spend a half-day at Tek's Bangalore office in March 2023.
- **Embedded (X86) + Xilinx** — AMD acquired Xilinx in Feb 2022; this slide (March 2023) shows the Xilinx integration is one year along and the Embedded group now includes "parts of Xilinx." Useful context for the AMD AI-server example in the [`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md) where Subhasis describes ~600 interfaces per AMD AI-server board.

## Confidence notes

- **"Rajani Rao (Manager) · Mohit Kumar (Lead) – post-Si validation"** appears on BOTH this AMD slide AND the NVIDIA slide. This is a deck-authoring error (likely a copy-paste from the AMD template to the NVIDIA slide). The names are preserved as-extracted with this flag; the correct customer attribution for these two engineers is **AMD** (per the structural location on slide 2 / AMD's customer-specific demographics). Cross-checked against the slide 3 / NVIDIA demographics block which references **NVIDIA** chip-IP work — the names are clearly an erroneous repeat.
- **"VnV"** = Validation and Verification. Standard semi-industry abbreviation.
- **"PVT"** = Process / Voltage / Temperature testing. Same usage as the [Designcon Intel empathy map](../../designcon-2023-voc-summary/empathy-map-intel.md).
- **"10GKR"** = 10 Gigabit Ethernet over KR backplane (IEEE 802.3ap). Preserved verbatim.
- **"Puneet"** is the Tek-internal contact responsible for confirming the TekFlow PCIe scope — references the cover-slide attendee list.
