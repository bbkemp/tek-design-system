---
provenance: observed
class: deck-section
deck_id: india-customer-voc-2023-march
deck_title: mAR 2023 ind Customer VOC
deck_author: Subhasis Bera
deck_date: 2023-03-01
section_id: empathy-map-nvidia
section_title: Empathy Map — NVIDIA (Bangalore)
slide_range: "3"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — NVIDIA (Bangalore)

## Summary

Customer immersion notes for **NVIDIA Bangalore IP Validation engineering** — a **15-year-old function** with subgroups Electrical | Functional | System | PVT. The **Electrical SerDes subgroup** covers all NVIDIA chips spanning PCIe, USB, UFS, and Ethernet (10G/25G/250G/400G KR). Massive Tek install base named: **78 scopes (MSO/DPO) + 61 AFGs**. **Strategic admission:** *"Gen4 was late by Tek, we moved to KS"* — they moved to **Keysight** for PCIe Gen 5. **Direct ask:** PCIe Tx and Rx, USB, UFS, Ethernet 10G/25G/250G/400G KR — wants **long-term sustainable solutions from brands like Tek**.

## Slide content (verbatim)

### Slide 3 — NVIDIA

> NVIDIA
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> IP Validation engineering 15yrs with NVIDIA
>
> Subgroups
>
> Electrical | Functional | System | PVT
>
> Electrical subgroup
>
> SerDes for all NVIDIA chips
>
> PCIe USB UFS ETH – 10G/25G/250G/400G KR
>
> 78 Scopes from Tek (MSO/DPO)
>
> 61 AFGs
>
> **S:** Ownership of all PHY validation of IP
>
> **E:** Wants to ensure success as a team and leader in the validation space.
>
> **F:** Functional + Protocol + System Design validation
>
> PCIe Gen 1-6 Tx and Rx
>
> Currently using KS for Gen 5
>
> Use Thin layer Py
>
> Names: Rajani Rao (Manager) · Mohit Kumar (Lead) – post-Si validation
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Location: Bangalore
>
> Gen4 was late by Tek, we moved to KS
>
> Anritsu was also late and had only GRL
>
> Automotive ETH
>
> Want a solution that is long-term sustainable from brands like Tek.
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> PCIe Tx and Rx
>
> USB UFS ETH – 10G/25G/250G/400G KR
>
> 3 · NVIDIA

## Speaker notes

No speaker notes captured.

## Cross-references

- **"Gen4 was late by Tek, we moved to KS · Anritsu was also late and had only GRL"** is the deck's **single highest-stakes finding**. NVIDIA — owning 78 Tek scopes and 61 AFGs — explicitly attributes their move to Keysight (KS) for PCIe Gen 5 to Tek's PCIe Gen 4 delay. Anritsu was also a candidate but only had GRL (Granite River Labs) integration, which wasn't sufficient. **Time-to-market on compliance is a competitive existential factor.** This corroborates the [Designcon Intel empathy map](../../designcon-2023-voc-summary/empathy-map-intel.md)'s "want to break the monopolistic barrier of single-vendor solutions" — Intel and NVIDIA are both actively diversifying.
- **"Want a solution that is long-term sustainable from brands like Tek"** is conditioned forgiveness: NVIDIA *wants* to stay on Tek but needs Tek to ship Gen6 on time. The **PCIe Gen 1-6 Tx and Rx** ask plus current PCIe Gen6 work in TekFlow ([`designcon-2023-voc-summary/customer-connects-summary.md`](../../designcon-2023-voc-summary/customer-connects-summary.md): Intel "PCIe Gen 6 and needs of Gen7 TekFlow for characterization") is the response window.
- **"Currently using KS for Gen 5 · Use Thin layer Py"** — NVIDIA built a **thin Python wrapper** on top of Keysight for Gen 5 compliance. This is the kind of customer-built tooling that the [TekFlow 2022-12 Platform Roadmap](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md)'s Python SDK + REST-API workstreams are designed to displace.
- **"Automotive ETH"** as an explicit need pairs with the same ask on the [AMD empathy map](./empathy-map-amd.md) (Automotive SFP+ / 10GKR) and the [Infineon empathy map](./empathy-map-infineon.md) (Automotive ETH ask). **Three of three India customers want Automotive Ethernet.** Strong regional signal.
- **"PCIe USB UFS ETH"** is the technology surface. UFS (Universal Flash Storage) is a mobile-storage interface; doesn't appear in the current TekExpress compliance suite list ([`tek-express/index.md`](../../index.md)).
- **78 Scopes + 61 AFGs** is the largest Tek install-base call-out in the deck. AFG = Arbitrary Function Generator (Tek AFG3000/AFG31000-class instruments). **High-value account.**
- **NVIDIA in the 2026 AI-server context:** The 2026-06-23 AU VoC walkthrough ([`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md)) discusses AI-server customers; NVIDIA is the dominant AI-server chip vendor. The 2023 NVIDIA empathy map (focused on PCIe Gen 5/6, SerDes, Ethernet KR) is the underlying interface stack the 2026 AI-server context builds on.

## Confidence notes

- **"Rajani Rao (Manager) · Mohit Kumar (Lead) – post-Si validation"** — same names as on the [AMD slide 2 empathy map](./empathy-map-amd.md). The names are a copy-paste artifact from the AMD slide and almost certainly belong to **AMD**, not NVIDIA. See [`_index.md` Confidence notes](./_index.md) for the same observation. Preserved as-extracted here with this flag.
- **"KS"** = Keysight. The deck uses this short form throughout.
- **"GRL"** = Granite River Labs, a third-party compliance test house. Anritsu's PCIe coverage relied on GRL collaboration.
- **"Thin layer Py"** = thin Python wrapper / shim over the instrument vendor's native API. Preserved verbatim.
- **"15yrs with NVIDIA"** describes the function's age (the IP Validation team has existed at NVIDIA for 15 years), not an individual's tenure. Inferred from the surrounding "IP Validation engineering 15yrs" context.
- **The Ethernet rate list "10G/25G/250G/400G KR"** has a likely typo — "250G" is not a standard Ethernet rate (50G, 100G, 200G, 400G, 800G are the standard rates). Likely a slide typo for "50G" or "100G". Preserved verbatim.
