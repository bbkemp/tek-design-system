---
class: deck-section
deck_id: designcon-2023-voc-summary
deck_title: Designcon 2023 VOC Summary
deck_author: Subhasis Bera
deck_date: 2023-02-08
section_id: empathy-map-ampere
section_title: Empathy Map — Ampere
slide_range: "4"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Empathy Map — Ampere

## Summary

Customer immersion notes for an **Ampere Computing** engineer (described as **"Ex Intel Expert on PCIe characterization"**) who leads PCIe IP validation at Ampere. JTBD spans PHY post-silicon validation on Arm server CPU, PCIe Compliance spec validation, PHY tuning, characterization, and debugging on TSMC silicon. Pain point: currently using **Bitifeye HSS compliance solutions** for PCIe characterization with issues. Available for VOC feedback on **TekFlow** as an industry user of T&M HSIO solutions.

## Slide content (verbatim)

### Slide 4 — Empathy Map - Ampere

> Empathy Map - Ampere
>
> **Demographics · Customer Immersion Notes**
>
> Key details from immersion activities
>
> **Jobs To Be Done — What is your persona trying to accomplish? "Help me to ___"?**
>
> Ex Intel Expert on PCIe characterization
>
> Leads PCIe IP validation at Ampere
>
> PHY post-silicon validation on Arm server CPU, PCIe Compliance spec validation.
>
> PHY tuning, characterization, and debugging on TSMC
>
> Silicon/System bring-up, validation, and debug experience, including in customer systems.
>
> PCIe- electrical compliance testing, Tx/Rx characterization. Creating test plans, system bring-up, debug automation to execute deliverables from Pre-Si to Post-Si phase
>
> **Pain Points and Insights — Frustrations of Persona? Struggling with? What insights do you have in their lives**
>
> Has issues with solutions from Bitifeye HSS compliance solutions for PCIe characterization
>
> **Potential Solutions — future features, services, processes or other solutions come in mind as you identify jobs and pain points**
>
> Available for collaboration on sharing value for Customer Intelligence
>
> Available to provide feedback on TekFlow as an Industry user of T&M HSIO solutions.
>
> 4

## Speaker notes

No speaker notes captured.

## Cross-references

- **"Has issues with solutions from Bitifeye"** — Bitifeye is a competitor offering PCIe HSS compliance solutions. This is a competitive-displacement opportunity at a strategic Arm-server-CPU account. The competitive audit at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) covers a different competitor (Keysight) — Bitifeye is a separate gap.
- **"Available to provide feedback on TekFlow"** — declared TekFlow VOC availability. The 2026-06-23 AU VoC walkthrough ([`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../walkthroughs/customer-market-and-platform-context.md)) names Ampere as a strategic continuing account 3 years later. Same customer relationship, sustained.
- **PHY tuning + characterization + debugging on TSMC silicon** is exactly the JTBD landscape stage **Guru Gus** dominates in Subhasis's persona model ([`tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md)). This 2023 Ampere customer is a canonical Guru Gus persona.
- **"PCIe Gen6 – Rx · Ex intel - Extensive M8040 User"** appears on the [customer-connects-summary](./customer-connects-summary.md) slide for the Ampere connect. Same Ampere customer; the summary slide adds the M8040 (Keysight BERT) detail and confirms the Rx-side interest.

## Confidence notes

- **"Bitifeye"** is preserved with the Designcon deck's verbatim spelling. Both "Bitifeye" and "Bitifye" appear in the source — XML extraction yielded "Bitifye" once and "Bitifeye" once; the company is **Bitifeye Digital Test Solutions**. Preserved verbatim with one normalization note.
- **"Ex Intel"** is the slide's customer-identifier prefix — denotes the engineer's previous employer (Intel) before joining Ampere. Not a different company. Preserved verbatim.
- **"S: / E: / F:"** prefixes are absent on this slide but present on later empathy maps — they are the deck's convention for **Social / Emotional / Functional** JTBD ([Christensen JTBD framework](https://hbr.org/2016/09/know-your-customers-jobs-to-be-done)). The Ampere slide's JTBD is written in narrative form without the prefixes.
