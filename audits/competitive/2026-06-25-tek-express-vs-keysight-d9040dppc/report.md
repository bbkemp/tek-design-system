---
class: competitive-audit
provenance: authored-analysis
authored_by: [Bryan Kemp, Claude]
authored_date: 2026-06-30
subjects_compared: [tek-express, keysight-d9040]
source_corpus:
  - corpus/sources/tek-express/
  - corpus/sources/keysight-d9040/
prior_material: audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/assets/CompetitiveAnalysis.pdf (Tek-authored, Farsana N A, 2026-06-23 — local-only, gitignored)
status: disposable snapshot
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp + Claude on 2026-06-30.** It is opinion and synthesis, not observed fact. It may contain inference, ranking judgments, and error. The **system of record** is the cited corpus entries under `corpus/sources/tek-express/` and `corpus/sources/keysight-d9040/`, which are `provenance: observed` and verifiable against their source artifacts. When this analysis and a corpus entry disagree, **the corpus wins** — and this file should be corrected. Triage accordingly: trust the cited observations; treat the conclusions here as a starting position to challenge.

# Competitive analysis: Tek Express vs. Keysight D9040

**Authored:** 2026-06-30 · **Authors:** Bryan Kemp + Claude · **Type:** competitive audit (disposable snapshot)
**Compared:** TekExpress AppEmulator (`corpus/sources/tek-express/`) vs. Keysight D9040USBC USB4 Test Application 1.30.0.0 (`corpus/sources/keysight-d9040/`)
**Canonical worked example** for the competitive-audit template — new audits start from [`../TEMPLATE.md`](../TEMPLATE.md), not by copying this file.

## How to read this file

This is a head-to-head UX/feature comparison built from each product's `provenance: observed` corpus entries. Every factual claim about a product should be traceable to a cited corpus screen; the **rankings, verdicts, and "who wins" calls are authored judgment** and are the part to argue with.

A prior Tek-authored competitive deck exists — `CompetitiveAnalysis.pdf` (Farsana N A, 2026-06-23) — but it is gitignored/local-only and not in this clone. Its conclusions survive only as a one-paragraph summary in [`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../prototype/2026-06-25-tek-express-ds-v2-baseline/report.md), reproduced under [§ Prior finding](#prior-finding-committed) below. This report is the first written, committed narrative comparison.

## What both products are

Both are **scope-driven compliance test-automation applications** for high-speed serial standards. Same job-to-be-done: configure a DUT → select compliance tests → run → read pass/fail + margin → generate a submittable report.

| | TekExpress | Keysight D9040 |
|---|---|---|
| Vendor | Tektronix | Keysight |
| Host instrument | Tektronix scopes | Keysight Infiniium (e.g. UXR0254A) |
| Standards (observed) | DDR5, DisplayPort, PCIe, app-emulator framework | USB4 (D9040USBC), DisplayPort (D9040DPPC) |
| Compliance authority (observed) | Per-standard | USB4 Specification Ver 2.00 (official) |
| Corpus basis | 17 screens + 10 UI-audit chunks + walkthroughs | 11 screens + 3 hardware views |

> *Source: [`corpus/sources/tek-express/index.md`](../../../corpus/sources/tek-express/index.md), [`corpus/sources/keysight-d9040/index.md`](../../../corpus/sources/keysight-d9040/index.md), [`keysight-d9040/screens/html-report.md`](../../../corpus/sources/keysight-d9040/screens/html-report.md).*

**Why they look alike.** They converged on purpose. Per the AU VoC sync ([`tek-express/walkthroughs/ui-redesign-mantras-and-transition-strategy.md`](../../../corpus/sources/tek-express/walkthroughs/ui-redesign-mantras-and-transition-strategy.md)), Subhasis Bera notes Tektronix shipped the first test-automation software and *"Keysight immediately followed… the user experience still remains more or less the same."* This is a parity contest, not a paradigm clash. *(Authored framing; the quote is observed.)*

## The core structural difference

| Dimension | TekExpress | Keysight D9040 |
|---|---|---|
| **Navigation spine** | 5 freely-switchable **panels** (Setup · Status · Results · Plots · Reports), left vertical pill nav | 8 ordered **workflow tabs** (Set Up → Select Tests → Configure → Connect → Run → Automate → Results → HTML Report) |
| **Mental model** | Panel switcher — jump anywhere | Guided pipeline — walk the steps |
| **Setup** | 4-step wizard *inside* the Setup panel | Spread across the first 3–4 tabs |
| **Multi-instrument** | Not surfaced in corpus | **Resource Arbiter** — separate service + console + browser dashboard |
| **Automation** | Not a first-class panel | Dedicated **Automate** tab + command generator |
| **Theme** | Light; orange/teal accents; WinForms density | Dark "Midnight" default; Win32 classic |

> *Source: [`tek-express/docs/ui-audit/navigation-components.md`](../../../corpus/sources/tek-express/docs/ui-audit/navigation-components.md); [`keysight-d9040/index.md`](../../../corpus/sources/keysight-d9040/index.md) screen graph; [`keysight-d9040/screens/set-up.md`](../../../corpus/sources/keysight-d9040/screens/set-up.md).*

**The biggest divergence (authored read):** TekExpress folds the guided flow into one panel and lets you roam; Keysight makes the *entire app* the guided flow. TekExpress is friendlier for an expert who bounces between Results and Setup; Keysight is more foolproof for a first-timer who shouldn't skip a prerequisite.

## Where Keysight is ahead

1. **Multi-instrument coordination (Resource Arbiter).** No TekExpress equivalent in the corpus. A separate service registers named capability locks (`D9040USBC_Acquire`, `_Measure`, `D9040DPPC_Acquire`, `_Measure`) so two test apps can share one scope without colliding, with live lock-counts and utilization %. This is the committed matrix's *"distributed measurement"* edge. *Source: [`keysight-d9040/screens/resource-arbiter.md`](../../../corpus/sources/keysight-d9040/screens/resource-arbiter.md), [`resource-arbiter-console.md`](../../../corpus/sources/keysight-d9040/screens/resource-arbiter-console.md).*
2. **First-class automation.** Dedicated Automate tab with a script editor, plus a **Create Automation Commands** helper that generates command strings and can fold in `#` comments — self-documenting scripts. *Source: [`keysight-d9040/screens/automate.md`](../../../corpus/sources/keysight-d9040/screens/automate.md), [`create-automation-commands.md`](../../../corpus/sources/keysight-d9040/screens/create-automation-commands.md).*
3. **Integrated results richness.** Results embeds **heat-map eye diagrams with mask overlays** beside the per-test margin table. TekExpress splits tabular Results from waveform Plots, and the corpus flags that native chart re-rendering *loses richness* (Rick Kuhlman: *"we go and remake them all… we lose all the richness"*). *Source: [`keysight-d9040/screens/results.md`](../../../corpus/sources/keysight-d9040/screens/results.md); [`tek-express/walkthroughs/ux-feedback-and-open-questions.md`](../../../corpus/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md).*
4. **Guided rigidity = fewer foot-guns.** Linear tab order makes it hard to run with an unmet prerequisite; Set Up surfaces explicit "Test Setup Completed / Calibration Passed" gates. *Source: [`keysight-d9040/screens/set-up.md`](../../../corpus/sources/keysight-d9040/screens/set-up.md).*

## Where TekExpress is ahead

1. **Lower navigational friction for experts.** Free panel-switching beats walking Run → Automate → Results to re-check a report. *Source: [`tek-express/docs/ui-audit/navigation-components.md`](../../../corpus/sources/tek-express/docs/ui-audit/navigation-components.md).*
2. **Cleaner run control.** Persistent right-rail Start/Pause/Stop/Clear is always one click away; Keysight buries run control inside the Run tab among ~8 stacked sub-sections. *Source: [`tek-express/docs/ui-audit/right-rail-toolbar.md`](../../../corpus/sources/tek-express/docs/ui-audit/right-rail-toolbar.md); [`keysight-d9040/screens/run.md`](../../../corpus/sources/keysight-d9040/screens/run.md).*
3. **Report-format breadth + notifications.** The committed matrix credits Tek here. **Caveat (authored):** the Keysight Run tab *does* have an email-notification checkbox in the corpus, so the email edge is narrower than the matrix implies — report-format breadth is the more defensible Tek lead. *Source: [`keysight-d9040/screens/run.md`](../../../corpus/sources/keysight-d9040/screens/run.md); prior finding below.*
4. **No fragile separate console.** Keysight's arbiter runs in a Windows console with **no GUI exit (Ctrl+C only)** that must be launched before the app and stays open all session — close it by accident and the app loses all instruments. TekExpress has nothing this brittle. *Source: [`keysight-d9040/screens/resource-arbiter-console.md`](../../../corpus/sources/keysight-d9040/screens/resource-arbiter-console.md).*

## Where they're a wash

- **Test selection:** both use a hierarchical checkbox tree. *Source: [`tek-express/screens/setup-test-selection.md`](../../../corpus/sources/tek-express/screens/setup-test-selection.md); [`keysight-d9040/screens/select-tests.md`](../../../corpus/sources/keysight-d9040/screens/select-tests.md).*
- **Per-test configuration:** both have deep variable editors (Keysight adds an explicit Compliance-vs-Debug mode). *Source: [`keysight-d9040/screens/configure.md`](../../../corpus/sources/keysight-d9040/screens/configure.md).*
- **Final report:** both produce a branded HTML pass/fail report with a config table. *Source: [`tek-express/screens/reports-configuration.md`](../../../corpus/sources/tek-express/screens/reports-configuration.md); [`keysight-d9040/screens/html-report.md`](../../../corpus/sources/keysight-d9040/screens/html-report.md).*
- **Density problems:** both are dense legacy UIs — TekExpress flagged for cramped small-screen layouts; Keysight for unit-less scientific notation and unexplained "(8/62 unavailable)" tags.

## Scorecard (authored judgment)

| Dimension | Winner |
|---|---|
| Multi-instrument / shared-hardware scaling | **Keysight** (Resource Arbiter — no Tek equivalent) |
| Automation as a first-class surface | **Keysight** |
| Integrated results + eye-diagram richness | **Keysight** |
| Error-proof guided flow | **Keysight** |
| Expert navigation speed | **TekExpress** |
| Run-control ergonomics | **TekExpress** |
| Report-format breadth / notifications | **TekExpress** |
| Deployment / no fragile console | **TekExpress** |

**Net (authored).** Keysight wins on *capability and scale* — the arbiter, the automation surface, and integrated result artifacts are things TekExpress lacks today, and they map almost exactly onto the DS-v2 redesign backlog (`tek-data-table`, `tek-plot`, a real automation story — see the [DS-v2 baseline audit](../../prototype/2026-06-25-tek-express-ds-v2-baseline/report.md)). TekExpress wins on *immediacy* — lighter to navigate, no separate console to babysit. The redesign's job is not to out-feature Keysight panel-for-panel; it's to close the data-table/plot/automation gaps while keeping TekExpress's lower-friction navigation — and, per Bera's mantra, **not make the transition harder for existing users**.

## Prior finding (committed) {#prior-finding-committed}

The only previously committed comparison statement, from the DS-v2 baseline audit (paraphrasing the local-only `CompetitiveAnalysis.pdf`):

> Keysight leads on **offline mode, distributed measurement, license-error visibility, project state model, window/layout customization**. TekExpress leads on **email notifications + report-format breadth**.

This report is consistent with that finding and adds the navigation-model and console-fragility dimensions, plus the email caveat above.

## Provenance & disposability

`provenance: authored-analysis` — see the banner at the top. This is a dated, disposable snapshot per [`audits/README.md`](../../README.md). Regenerate when: new corpus screens land for either product, the DS-v2 redesign closes one of the gaps above, or the original `CompetitiveAnalysis.pdf` is recovered and can be cited directly rather than via the baseline-audit paraphrase.
