---
class: data-export-index
export_id: garuda-vos-synthesis
export_title: Garuda Voice-of-Stakeholder synthesis
export_source: "Garuda_VOS Synthesis.xlsx (XLSX, 246 KB)"
export_date: 2026-06-25
applies_to: [garuda]
---

# Garuda VOS Synthesis — index

**Source:** `corpus/sources/garuda/uploads/artifacts/Garuda_VOS Synthesis.xlsx` (gitignored)
**Format:** Excel workbook, 4 sheets
**Generated:** 2026-06-26 from `/document-spreadsheet` run on the VOS synthesis workbook

> **Type clarification.** This is a tabular data-export chunk family — a Voice-of-Stakeholder (VOS) synthesis workbook structured as a problem-synthesis document. Each sheet is a separate matrix; the bulk of the value is in `JTBD_Feedback_UX` (166 functional JTBDs from internal Tektronix SMEs grouped by UX section). Per-cluster verbatim row chunks land under sibling `.md` files.

## Workbook structure

| Sheet | Purpose | Real rows | Output chunk |
|---|---|---:|---|
| `Instructions` | Document the VOS template — "Use the Synthesis sheet to capture learnings; for each contact capture jobs-to-be-done, pain points, key insights; quantify Intensity/Frequency/Density". | 5 (header text only) | Reproduced inline below — no separate chunk. |
| `JTBD_Feedback_UX` | 166 functional Jobs-to-be-Done captured from internal Tektronix SMEs (Sales + Tech personas across India / Korea / US), tagged by UX section and scored on Ranking / WOW / FIT. | 166 | [`jtbd-feedback-ux.md`](./jtbd-feedback-ux.md) |
| `Key Insights` | Sparse — 3 customer-observation rows (Cadence + Intel HSIO VnV) about DPOJET / PCIe measurement use. | 3 | [`key-insights.md`](./key-insights.md) |
| `Pain Points` | Template only — only the header banner and column headers are populated. No data rows. | 0 (template only) | None — see "Empty sheets" below. |

## Instructions sheet (verbatim)

Reproduced inline because the sheet is meta-instructional rather than data:

> **PROBLEM SYNTHESIS DOCUMENT**
>
> **INSTRUCTIONS**
>
> 1. Use the "Synthesis" sheet to capture learnings
> 2. For each contact, capture their key jobs to be done, pain points and aspirations, key insights
> 3. For each pain point / aspiration, quantify "Intensity, Frequency and Density (unit of one)"

## JTBD_Feedback_UX — at-a-glance

166 entries, all Type of JTBD = `Functional`, all from Company = `Tektronix` (internal SME panel). Persona distribution: Sales 163, Tech 3.

Distribution by Section of Ux:

| Section | Count |
|---|---:|
| Tests | 84 |
| Others | 22 |
| Dashboard | 15 |
| Debug | 13 |
| Manage | 12 |
| Report | 10 |
| Results | 8 |
| API | 2 |
| **Total** | **166** |

Each entry has free-text JTBD content keyed to a `Ux-SME-NNN` SME ID and (where scored) Ranking / WOW / FIT scores. Full verbatim entries live in [`jtbd-feedback-ux.md`](./jtbd-feedback-ux.md).

## Key Insights — at-a-glance

3 rows total: 2 attributed (Cadence HSIO VnV Engineering Manager + Intel HSIO VnV Engineering Manager) and 1 orphan continuation row with insight text but no customer attribution. All three observations concern DPOJET-based PCIe / HSIO measurement workflows. Full verbatim entries live in [`key-insights.md`](./key-insights.md).

## Empty sheets

- **`Pain Points`** — template only (header banner + column headers populated; no data rows). The sheet defines the schema: Date, Industry, Persona, First/Last Name, Company, Title, Application/DUT, Type of Pain Point/Aspiration, Pain Point/Aspiration, Root Cause, Economic Value, Emotional/Social Value, Predictability, Regularity, Unit-of-One Density, Ranking — but no entries were captured. Surfaced here so retrieval can answer "is there a Pain Points sheet?" → yes, but unpopulated.

## PII handling

Per the corpus PII policy at chunk boundary: First Name and Last Name columns from the source workbook are **redacted** in all output chunks. Organizational labels (Company, Country, Industry, Persona, Title, Application/DUT) are **preserved**. SME IDs (`Ux-SME-NNN`) are preserved as the per-row linkage key.

## Cross-references

- Sister export: [`garuda-ui-ux-jira-export`](../garuda-ui-ux-jira-export/_index.md) — the JIRA defect/feature backlog. The `JIRA ID` column on JTBD rows is the bridge — JTBDs scored as priorities should have a matching JIRA issue.
- Subject index: [`../../index.md`](../../index.md)
