# Tek VOC / User Research Library

**Status:** placeholder notes for discussion · **Source:** [`walkthrough.pdf`](./walkthrough.pdf) (Tektronix executive briefing, gitignored) · **Captured:** 2026-06-25 from corpus-intake scan

## What this is

The "Tek VOC / User Research Library" is a Tek-internal research tool/platform. Tagline from the briefing:

> *"One linked surface for customer reality across the portfolio — so every major decision rests on connected evidence."*

It's framed as an **executive briefing on an Atomic User Research v2** approach. Not a customer-facing product — an internal capability that the design system will eventually plug into.

## What the UI looks like (from the briefing screens)

The platform appears to be a structured research-evidence library. Visible surfaces in the walkthrough:

- **Main Screen** — header reads "Tek VOC / User Research Library" with subtitle "TEKTRONIX · ATOMIC USER RESEARCH V2." A **Quick Capture** field at the top ("Type, paste, or tap 🎤 to speak your observation…"). Below it, a grid of "experiment cards" each with status pills (`COMPLETE`, `IN-PROGRESS`) and counts (e.g. *Ease-of-Use Survey 2024–2025, 340 participants*; *MSO Series Usability Feedback, 89 participants*; *Keithley Software & Connectivity, 28 participants*; *Documentation & Onboarding Gaps, 47 participants*).
- **Filter tabs** above the grid: `All 46`, `Experiments 6`, `Facts 31`, `Insights 5`, `Recommendations 4` — a taxonomy of evidence types.
- **Quick Capture detail** — when expanded, asks for `TEK DOMAIN` and `TEK PLATFORM` from dropdowns before the observation lands. Suggests dimensional tagging at intake.
- **Atomic structure** — the `Experiment / Fact / Insight / Recommendation` ladder is the data model. Atomic = facts as the atomic unit; experiments produce facts; insights synthesize facts; recommendations derive from insights.

## Why it matters here

The tool is the operational manifestation of the **UXR & Analytics** system documented in [`docs/tek-system-core.md`](../../docs/tek-system-core.md#uxr--analytics) — *"qualitative and quantitative user signal"*. If it ships:

- Every observation made during a customer call lives in one queryable surface, not in a slide deck on someone's laptop.
- Cross-product synthesis becomes mechanical: filter facts by `TEK PLATFORM = TekExpress` and you have the redesign brief automatically.
- The corpus and UXR can join at retrieval time — *"how aerospace customers use trigger holdoff"* pulls manuals + research + analytics in one query (per the system-core architecture).

## Open questions for discussion

1. **Is this shipped, in pilot, or proposal?** The deck reads "Atomic User Research V2" — suggests V1 exists. Status unclear from the briefing alone.
2. **Who owns it?** UXR ops? Product management? A platform team?
3. **What's the data backend?** The Quick Capture suggests structured intake (DOMAIN + PLATFORM dimensions); the grid of experiment counts suggests aggregation across thousands of records. Is this on Notion / Linear / Airtable / something bespoke?
4. **How does it interop with the corpus?** The corpus currently has nothing about UXR; if the VOC Library is the canonical research store, the corpus's `applies_to: [<subject>]` and the VOC Library's `TEK PLATFORM` field probably want to converge on a single ontology.
5. **What's the scope of `audits/competitive/` vs. the VOC Library's competitor work?** The library tracks Keysight/Keithley/Tek as connected facts; the corpus has `audits/competitive/` for Tek-authored comparisons. These overlap.
6. **Are the AppEmulator and the VOC Library the same UI architecture?** Both have the Tek brand bar + dark theme + cards-with-status-pills. If the VOC Library is built on the design system, it should already be a "subject" in the corpus alongside TekExpress.

## What this folder will NOT do until we discuss

- No `applies_to:` declarations connecting this material to corpus subjects.
- No processing skill runs (`/document-pdf` etc.) — the binary stays in place.
- No cross-references from the corpus or audits to this folder until the scope is agreed.

When ready, the discussion will probably land on: (a) is this another corpus subject, (b) is this a sibling-system with its own conventions, or (c) is this metadata that lives one layer up from both corpus and audits.
