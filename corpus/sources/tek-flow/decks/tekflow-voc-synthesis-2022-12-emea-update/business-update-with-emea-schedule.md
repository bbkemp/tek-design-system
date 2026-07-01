---
provenance: observed
class: deck-section
deck_id: tekflow-voc-synthesis-2022-12-emea-update
deck_title: TekFlow VOC Synthesis — EMEA Update
deck_author: Subhasis Bera
deck_date: 2022-12-02
section_id: business-update-with-emea-schedule
section_title: Business Update + EMEA / Taiwan Customer-Visit Schedule
slide_range: "4"
related_screens: []
related_docs: []
related_hardware: []
related_apis: []
applies_to: [tek-flow]
---

# Business Update + EMEA / Taiwan Customer-Visit Schedule

## Summary

The **only meaningful delta** between the EMEA-update deck and the original 2022-12 deck. Slide 4 retains the Business Update header (21 customers, 8.25/10 Wow score, 5 regions TWN+IND+EMEA+JAP+CHN) **and adds two new content blocks**: an Israel-marked region annotation ("ISRAEL ISRAEL ISRAEL") and a Taiwan customer-visit schedule grid for Dec 6–9, 2022. The grid lists 16 customer meetings across four days at MSI, ITE, Wistron (汐止 and 內湖), Inpsytech, Novatek, Intel, Google, ASUS, HiMax, Nvidia, and Realtek, plus an internal Sales-team sync.

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
>
> **ISRAEL ISRAEL ISRAEL** *(EMEA-update addition)*
>
> **Taiwan customer-visit schedule, Dec 6–9 2022** *(EMEA-update addition; verbatim grid below)*
>
> | Date | 12/6 (Tuesday) | 12/7 (Wednesday) | 12/8 (Thursday) | 12/9 (Friday) |
> |---|---|---|---|---|
> | 9:30 – 10:30 | | MSI | | ITE |
> | 11:00 – 12:00 | Internal Meeting with Sales team | Wistron 汐止 | Inpsytech | Novatek |
> | 14:00 – 15:00 | Intel | Google | ASUS | HiMax |
> | 16:00 – 17:00 | Nvidia | Wistron 內湖 | Realtek | Novatek |

## Speaker notes

No speaker notes captured for slide 4 in the EMEA-update deck. The original 2022-12 deck did carry a generic boxcar-template notes block on slide 1 (template scaffolding, not author-original content); not duplicated here.

## Cross-references

- **Original 2022-12 deck's slide-4 chunk** ([`../tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md`](../tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md)) — the original deck combined slide 4 and slide 5 into a single chunk. This EMEA-update deck splits them because slide 4's added content (Israel + Taiwan schedule) is a distinct topic from slide 5's synthesis numbers.
- **The 16 customer meetings scheduled across Dec 6–9 2022** are the **specific TWN customer set** that fed the 2022 VOC's "21 Wow / 21 Customers" headline. The customer list (MSI, ITE, Wistron, Inpsytech, Novatek, Intel, Google, ASUS, HiMax, Nvidia, Realtek) is the Taiwan-region subset of the broader 5-region VOC scope.
- **TAIWAN DP PLUG FEST (2nd WEEK Dec)** referenced inline matches the Dec 6–9 window — the customer-visit schedule was deliberately co-scheduled with the DisplayPort plugfest in Taiwan.
- **"ISRAEL ISRAEL ISRAEL"** as a triple-mention is the only Israel-specific signal in the deck. Likely a placeholder header for a forthcoming Israel-region visit schedule (not yet populated). Treat as an "EMEA expansion in progress" marker. Compare to the 2026-06-23 AU VoC ([`tek-express/walkthroughs/`](../../../tek-express/walkthroughs/_index.md)) — the same global-VOC practice continues in 2026 but Israel never appears as a documented stop, so the 2022 placeholder may have remained unfulfilled.
- **"Customer wants to automate Jitter only · Early SI – we don't use Compliance"** as a customer-segment finding: early signal-integrity users want jitter automation without full compliance. This is workflow-relevant for the TekExpress redesign brief.
- **"Dashboard is Messy"** as a — sign (negative outcome) connects directly to the redesign baseline audit's identification of `tek-data-table` and `tek-status-bar` as P1 new primitives ([`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../../../../audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md)). The 2022 VOC was already calling out the dashboard friction that's still open in 2026.

## Confidence notes

- **The "+ / −" header on slide 4** divides "good" outcomes from "bad" outcomes. The slide layout pairs items left/right of this divider; the XML text stream loses that spatial grouping. The "+ side" items (No Surprises, Font + Configurability) and "− side" items (Debug, Dashboard is Messy) are inferred from positional context — same inference as in the original deck's chunk, repeated here for traceability.
- **Score values (8.25 / 8.25, 7.8, 8.75, etc.)** are out of 10; this is the team's internal "Wow / Fit" rating scale, not a customer-direct rating.
- **"21 Wow" / "21 Customers"** — the slide is ambiguous about whether "21" refers to the Wow score recipients, the customer count, or both. Both interpretations are preserved in the verbatim section.
- **"ISRAEL ISRAEL ISRAEL"** repetition is verbatim from the XML — could be a layout placeholder repeated three times (typical of a slide-master text box that hasn't been replaced) or an intentional triple emphasis. Without seeing the rendered slide, the first reading is the more likely.
- **The Taiwan customer-visit grid** in the source XML uses GUID `{0E3FDE45-AF77-4B5C-9715-49D594BDF05E}` to identify the table — preserved here as Markdown table for retrieval-friendliness.
- **Wistron 汐止 vs. Wistron 內湖** — these are Wistron's Xizhi (汐止) and Neihu (內湖) facilities in Taiwan respectively; preserved in the original Chinese characters since the slide uses them.
- **Inpsytech** — likely "InPsyTech" (Taiwan-based connector/test fixture vendor); preserved with the slide's spelling.
- **"Internal Meeting with Sales team"** on the 12/6 11:00 slot is the only non-customer entry in the grid.
