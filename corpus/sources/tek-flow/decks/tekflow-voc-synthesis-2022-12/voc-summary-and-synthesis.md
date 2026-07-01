---
provenance: observed
class: deck-section
deck_id: tekflow-voc-synthesis-2022-12
deck_title: TekFlow VOC Synthesis
deck_author: Subhasis Bera
deck_date: 2022-12-02
section_id: voc-summary-and-synthesis
section_title: VOC Summary and Synthesis
slide_range: "4-5"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# VOC Summary and Synthesis

## Summary

Two-slide closing section quantifying the VOC effort (21 customers + 27+ Tektronix VOS employees across 5 regions) and surfacing **the highest-input synthesis themes**: Tests (8.75/10), Configure (9/10), Debug (8.9/10), Results (9/10) score highest. Customer-input volume per theme: Customize / Messy Current State (21), Connections / Requirements / Quick select (12), Filter / Quick analysis / WFM Thumbnail (12), Online/Offline / 3rd Party / Ease of SCPI to Rest API Transition (10), Result integration / Cause of Failure (8), Checklist / Status of HW Cloud (5), View of Setup (1).

## Slide content (verbatim)

### Slide 4 — Business Update – UX VOC Summary

> Business Update – UX VOC Summary
>
> TEKTRONIX CONFIDENTIAL · 4 · 21 Wow · 8.25 / 10
>
> Total people (Customers) – 21
> (Tektronix VOS Employee) – 27+
>
> Fit · 8.25 / 10
>
> 10 Total Customers · 10 Regions – TWN, IND, EMEA, JAP, CHN
>
> Completed · In Plan
>
> Overall Scores
>
> +  /  −
>
> Debug · Dashboard is Messy · No Surprises · Font + Configurability
>
> Customer wants to automate Jitter only · Early SI – we don't use Compliance · TAIWAN DP PLUG FEST (2nd WEEK Dec)
>
> New Discoveries · Top outcomes · Total Interactions

### Slide 5 — UX VOC Synthesis

> UX VOC Synthesis
>
> TEKTRONIX CONFIDENTIAL · 5
>
> **Top needs:** Dashboard 7.8 · Tests 8.75 · Configure 9 · Manage 8 · Debug 8.9 · Results 9 · API 8 · Reports 8.8
>
> **Total inputs for synthesis as per Customer JTBD:** 92
>
> **Theme: Customize · Messy Current State** — 21 Inputs
>
> **Theme: Connections · Requirements · Quick select** — 12 Inputs
>
> **Theme: Checklist · Status of HW Cloud** — 8 Inputs
>
> **Theme: View of Setup** — 1 Input
>
> **Theme: Result integration · Cause of Failure** — 5 Inputs (Note: slide reads "5" but context suggests this is "Results" theme)
>
> **Theme: Filter · Quick analysis · WFM Thumbnail** — 12 Inputs
>
> **Theme: Online/Offline · 3rd Party · Ease of SCPI to Rest API Transition** — 8 Inputs
>
> **Theme: Size <20Mb · Filter · Font Formats** — 10 Inputs
>
> **Theme: Plot Gating · Config UI (Font) · Linux Network Efficiency** — (no input count shown in the extraction; refer to source slide)

## Speaker notes

No speaker notes captured.

## Cross-references

- **The 21 customers / 5 regions (TWN, IND, EMEA, JAP, CHN)** scope of this 2022 VOC overlaps the 2026-06-23 AU VoC scope ([`tek-express/walkthroughs/customer-market-and-platform-context.md`](../../../tek-express/walkthroughs/customer-market-and-platform-context.md)). The same customer base / methodology informs both decks.
- **"Customer wants to automate Jitter only · Early SI – we don't use Compliance"** is a customer-segment finding: early signal-integrity users want jitter automation without full compliance. This is workflow-relevant for the TekExpress redesign brief.
- **"Dashboard is Messy"** as a — sign (negative outcome) connects directly to the redesign baseline audit's identification of `tek-data-table` and `tek-status-bar` as P1 new primitives ([`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../../../../audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md)). The 2022 VOC was already calling out the dashboard friction that's still open in 2026.
- **"Debug" scored 8.9/10 as a top need** + appears as a +/− mixed outcome on slide 4. The Debug workflow surface is one of the high-leverage cross-product gaps surfaced again in the 2026-06-23 transcript.
- **"Customize · Messy Current State" with 21 customer inputs** is the highest-input theme — twice the input count of any other theme. The redesign signal: configurability + ordering of the existing customer-facing UI is the dominant pain point.

## Confidence notes

- **The "+ / −" header on slide 4** divides "good" outcomes from "bad" outcomes. The slide layout pairs items left/right of this divider; the XML text stream loses that spatial grouping. The "+ side" items (No Surprises, Font + Configurability) and "− side" items (Debug, Dashboard is Messy) are inferred from positional context — the inference is noted explicitly here for traceability.
- **Score values (8.25 / 8.25, 7.8, 8.75, etc.)** are out of 10; this is the team's internal "Wow / Fit" rating scale, not a customer-direct rating.
- **"92 Total inputs for synthesis as per Customer JTBD"** is the sum of all theme-input counts. The sum from the listed themes (21+12+8+1+5+12+8+10) = 77, leaving ~15 inputs unaccounted for in the visible breakdown — likely from the "Plot Gating · Config UI (Font) · Linux Network Efficiency" theme whose count isn't extractable from the XML.
- **"TAIWAN DP PLUG FEST (2nd WEEK Dec)"** is a customer event reference — likely a DisplayPort interoperability event in Taiwan during the 2nd week of December 2022. Preserved verbatim.
- **"21 Wow" / "21 Customers"** — the slide is somewhat ambiguous about whether "21" refers to the Wow score recipients, the customer count, or both. Both interpretations are preserved in the verbatim section.
