---
class: deck-section
deck_id: tekflow-voc-synthesis-2022-12
deck_title: TekFlow VOC Synthesis
deck_author: Subhasis Bera
deck_date: 2022-12-02
section_id: ui-ux-roadmap
section_title: UI/UX Roadmap (Q1 2022 — Q4 2023)
slide_range: "3"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow, tek-express]
---

# UI/UX Roadmap (Q1 2022 — Q4 2023)

## Summary

Companion slide to the Platform Roadmap, focused on the UX workstream specifically. Maps the IP UX planning → Vendor evaluation → Design discussions → Wireframes → UI Development → Beta workflow across calendar 2022 and 2023. Names the IP releases the new UX will ride on, including cross-product lanes (**LPDDR 5X on TekExpress, DP 1.4 on TekFlow, LPDDR4 on TekFlow, USB4V2 supported on Pamjet**).

## Slide content (verbatim)

### Slide 3 — UI/UX Roadmap

> UI/UX Roadmap
>
> Q1 2022 · Q2 2022 · Q3 2022 · Sep 2022 · Oct 2022 · Nov 2022 · Dec 2022
>
> IP Ux Planning · Vendor Evaluation · Design discussions · PO Work initiation · Wireframes · UI mockup · Workflow VOS · VOC Workshops · UI Development · Screen Finalization · UI Screen customer review · Ux new screens · VoS UI Screen customer review · Starting Implementation of new Flow in Platform · VoC to be continued · OOB experience · Deployment Documentation support · Floating License · VoC to be continued · Improvements and feedback incorporation · Beta with New screens-sections (LPDDR4 Tx): Test Execution · Result · Debug · Reports · Manage
>
> Tektronix Confidential
>
> Jan 2023 · Feb 2023 · Mar 2023 · Q2 CAA · Q3-RP1 · Q4
>
> New UI/Ux implementation and deployment to solutions teams.
>
> Rx Beta / Prototype with New Ux – DDR5 DRAM Rx (TekFlow)
>
> Solution Releases with New Ux (RP1):
> - LPDDR 5X (TekExpress)
> - DP 1.4 (TekFlow)
> - LPDDR4 (TekFlow)
> - USB4V2 (Support – Pamjet)
>
> On-Scope prototype*
>
> Smart Anomaly Preview · OTA updates – tekcloud.com · STM CPHY · TBD · IP Release commit + ETH · Narachi Pivot · Memory Rx Pivot · TMR Pivot · Ux changes Phase2 Planning, Workshop, Rx Tx Screens delivered to FW team
>
> Updated 11/7/22 · Phase1 REQs delivered by YUJ · Customer VoC discussions
>
> Currently Engaged · In progress · To be Planned
>
> 12/1/2022 · 3

## Speaker notes

No speaker notes captured.

## Cross-references

- **The beta target was LPDDR4 Tx** with new screens spanning Test Execution → Result → Debug → Reports → Manage. This pre-dates the 5-pillar Setup → Status → Results → Plots → Reports IA that's now in TekExpress today (per the [`tek-express/index.md`](../../../tek-express/index.md)) — useful evidence that the IA stabilized between 2022 and the current state.
- **"VoS UI Screen customer review"** (Oct/Nov 2022) implies a stakeholder-review loop separate from VOC. The **`Garuda_VOS Synthesis.xlsx`** sitting in `corpus/sources/garuda/uploads/artifacts/` may be the equivalent practice for Garuda — pending `/document-spreadsheet` processing to confirm.
- **"Solution Releases with New Ux (RP1): LPDDR 5X (TekExpress) · DP 1.4 (TekFlow) · LPDDR4 (TekFlow) · USB4V2 (Support – Pamjet)"** — this is the most concrete evidence in this batch that **TekFlow and TekExpress share a UX implementation track**. The Q3 2023 "RP1" milestone targets both subjects with one Ux rollout.
- **"Customer VoC discussions"** (Q4 2023) — Subhasis's 2026-06-23 AU VoC meeting ([`tek-express/walkthroughs/`](../../../tek-express/walkthroughs/_index.md)) is a continuation of this Q4 2023 VoC practice into 2026.
- **"On-Scope prototype*"** — the asterisk indicates a deferred or footnoted item; the footnote text is not extractable from the XML.

## Confidence notes

- **"RP1"** is the apparent release identifier for Q3 2023; "CAA" is a Q2 2023 milestone (acronym not expanded on the slide).
- **"YUJ"** is the team / role responsible for "Phase1 REQs" — likely an internal team initialism preserved verbatim. **Not** to be interpreted as an individual's name without verification.
- **"Narachi Pivot," "Memory Rx Pivot," "TMR Pivot"** are listed as "To be Planned" items in 2023 — internal project codenames; preserve as-is.
- **"Pamjet"** is named as the support owner for USB4V2 — likely an internal team or product family. Preserve verbatim; do not gloss.
