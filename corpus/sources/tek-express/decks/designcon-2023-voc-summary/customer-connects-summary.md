---
provenance: observed
class: deck-section
deck_id: designcon-2023-voc-summary
deck_title: Designcon 2023 VOC Summary
deck_author: Subhasis Bera
deck_date: 2023-02-08
section_id: customer-connects-summary
section_title: Customer Connects + 30-day follow-up plan
slide_range: "8"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-express, tek-flow]
---

# Customer Connects + 30-day follow-up plan

## Summary

Closing summary table for the Designcon 2023 trip. Five customer connects logged — **Intel · Ampere · Google · Synopsys (Portugal) · TI** — plus a "Designcon – misc" row for papers + panels + tutorials. Each row has three columns: **Event / Customer Connects · Top Gemba Evidence · Plan for next 30 days**. This is the most action-oriented chunk in the deck; it captures both the customer interest signal *and* the post-event commitment.

## Slide content (verbatim)

### Slide 8 — Customer Connect 2/8/2023

> Customer Connect · 2/8/2023
>
> **Event · Customer Connects · Top Gemba Evidence · Plan for next 30 days**
>
> **Designcon - Intel** — Kamal · David · A holland · Siddharth S · Raajit & others · Intel Folsom, Hillsboro & Hudson — PCIe Gen 6 and needs of Gen7 TekFlow for characterization · Interested in getting both UPI & DDR5 on TekFlow — Setup some lab time with Marianne to testout our scope/DSP · Develop a BKM document for PCIe 6.0 Base Rx Calibration.
>
> **Designcon – Ampere** — Parag Desai · Subhasis — PCIe Gen6 – Rx · Ex intel - Extensive M8040 User — VOC call on feedback on TekFlow for Tx and Rx
>
> **Desigcon - Google** — David · Joe S · Raajit & others — Memory + PCIe + USB + TekFlow high level — Synopsys Gen6 Demo Follow up
>
> **Designcon – Synopsys Portugal** — Subhasis · Narciso Neves — HSS characterization lab manager looking for optimization — Follow-up for VOC.
>
> **Designcon – TI** — Ryan Bruno · Subhasis — MIPI - CPHY-DPHY – ASA - APHY — Follow Up offline along with regional AM.
>
> **Designcon – misc** — — Papers & Panels presentation: "Tutorial on Ethernet power testing with Molex / Picotest / Tektronix", panel "Closing Eye" on T&M and HSSD, paper "Oscilloscope bandwidth towards 112 GBd" – great attendence — Follow-up with customers, cooperate with the authors (mainly Marian Nourzad) for DCon 2024 or similar event.

## Speaker notes

No speaker notes captured.

## Cross-references

- **Intel: "Interested in getting both UPI & DDR5 on TekFlow"** is concrete TekFlow product-development demand from Intel. UPI = Ultra Path Interconnect (Intel CPU interconnect) — not currently in the TekExpress / TekFlow compliance suite list. DDR5 is in scope — see [`tek-express/docs/tek-express-ddr5-tx-user-manual/`](../../docs/tek-express-ddr5-tx-user-manual/_index.md).
- **Intel: "BKM document for PCIe 6.0 Base Rx Calibration"** — BKM = Best Known Method. This is a written-deliverable commitment from Tek to Intel; it's an internal procedure document, not a product feature. Pending.
- **Ampere: "PCIe Gen6 – Rx · Ex intel - Extensive M8040 User"** — confirms that the Ampere customer ([empathy-map-ampere](./empathy-map-ampere.md)) is currently using the **Keysight M8040** BERT for receiver testing, same as Intel's strategic ask ([empathy-map-intel](./empathy-map-intel.md)). Two customers, same instrument, both wanting Tek to interoperate.
- **Google: "Memory + PCIe + USB + TekFlow high level"** — Google is a multi-technology TekFlow conversation. Memory + PCIe + USB is the breadth of HSS testing.
- **Synopsys Gen6 Demo Follow up** in the Google row — the **Synopsys Gen6 Demo** is referenced as a follow-up shared between Google and Synopsys. Cross-customer demo referenced.
- **TI: "MIPI - CPHY-DPHY – ASA - APHY"** — TI's interest spans the full MIPI alphabet. APHY (Automotive PHY) connects to the **Vinod ATV VnV manager / Cypress-Infineon** customer in the [`india-customer-voc-2023-march/empathy-map-infineon.md`](../../india-customer-voc-2023-march/empathy-map-infineon.md) (March 2023). APHY ask, two customers, one month apart.
- **Papers + Panels: "Tutorial on Ethernet power testing with Molex / Picotest / Tektronix" + "Closing Eye" panel + "Oscilloscope bandwidth towards 112 GBd"** — the third paper anticipates the **112 GBd bandwidth** ceiling that the [TekFlow 2022-12 Platform Roadmap](../../../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md) implicitly addresses through "Performance improvements". 112 Gbaud = the next-generation scope bandwidth class.
- **Persona alignment**: Intel + Ampere are characterization lab customers (Guru Gus territory). Google + Synopsys are also characterization-heavy. ElectroRent (slide 7) is the only non-end-user persona. No Push-Button Pete (manufacturing-adjacent) customers appear in this DesignCon connect set — consistent with the show's R&D-engineer audience.

## Confidence notes

- **"A holland"** — preserved verbatim; the deck's source shows this as written. Likely "A. Holland" (a person's name with abbreviated first initial).
- **"Desigcon - Google"** has a spelling drift in the source ("Desigcon" vs. "Designcon" elsewhere on the same slide). Preserved verbatim.
- **"Marianne"** — first name only; Tek-internal contact who would host lab time for Intel. No last name on slide.
- **"BKM"** = Best Known Method (Intel-internal jargon for codified best-practice documents). Preserved verbatim.
- **"AM"** in "Follow Up offline along with regional AM" = Account Manager. Preserved verbatim.
- **"HSSD"** in "panel 'Closing Eye' on T&M and HSSD" = High-Speed Serial Data. Preserved verbatim.
- **"Marian Nourzad"** is identified as the author Tek should cooperate with for DCon 2024. Preserved verbatim; spelling may need verification before any outreach.
- **The five Customer Connects row labels** ("Designcon - Intel", "Designcon – Ampere", "Desigcon - Google", "Designcon – Synopsys Portugal", "Designcon – TI") use mixed dash styles (hyphen, en-dash). Preserved as-is.
- **"great attendence"** in the misc row preserves the source's typo.
