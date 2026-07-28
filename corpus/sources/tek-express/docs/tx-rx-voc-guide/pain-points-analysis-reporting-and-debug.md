---
provenance: observed
class: doc-section
doc_id: tx-rx-voc-guide
doc_title: "TekExpress VoC Guide (Draft V0.8 25th May)"
doc_number: null
doc_date: 2026-05
applies_to: [tek-express, tek-rx]
section_id: pain-points-analysis-reporting-and-debug
section_title: 3. Pain Points (continued) — 3.3 Analysis, 3.4 Reporting & Traceability, 3.5 Debug on Failure & Lifecycle Journey
parent_section: null
page_range: "5 to 6"
related_screens: []
related_hardware: []
---

# 3. Pain Points (continued) — 3.3 Analysis, 3.4 Reporting & Traceability, 3.5 Debug on Failure & Lifecycle Journey

## Summary

Second half of the core pain-points section. 3.3 probes result interpretation (results clarity, drill-down debug from results, out-of-box measurement trust vs. references like SigTest, measurement context/data handling). 3.4 probes report quality, custom reporting needs, traceability/audit records, and external sharing. 3.5 (marked "new section") probes debug-on-failure behavior and lifecycle-phase differences; its internal annotation states the platform stakes — whether to include built-in debug tools to expedite failure analysis and how to support smooth transitions across lifecycle stages so users don't reconstruct setups or switch tools moving from validation to production testing.

## Content

### 3.3 Analysis & Measurement Interpretation

- **Results Clarity:** After TekExpress (OR CURRENT TOOL) completes a run, are the measurement results easy to interpret? Have you seen any confusing outcomes (like ambiguous pass/fail criteria or needing to cross-verify with another tool)?
- **Debug from Results:** When you see a borderline or failing measurement, how easy is it to delve deeper within TekExpress (OR CURRENT TOOL) (e.g., reviewing waveforms, jitter details)? Do you need to export data to another tool to perform deeper analysis?
- **Confidence in Accuracy:** Do you trust TekExpress's (OR CURRENT TOOL) measurements out-of-the-box? Have you found discrepancies between TekExpress and other references (like *SigTest for PCIe/USB or competitor tools)? Any patterns in where that trust breaks (like certain test types)?
- **Data Handling:** Is TekExpress (OR CURRENT TOOL) providing enough context with each measurement (units, references to spec limits, which channel was tested, etc.) to analyze results thoroughly? If not, what's missing?

### 3.4 Reporting & Traceability

- **Report Quality:** How satisfied are you with TekExpress's (OR CURRENT TOOL) **outputs**? Do reports include all the info you need (test conditions, instrument settings, results vs. limits, margin, etc.)? Share any frustrations (like missing units, inconsistent formatting, or difficulty extracting data).
- **Custom Reporting:** Have you needed to modify or filter TekExpress (OR CURRENT TOOL) report data for internal use? If so, what changes do you typically make (collating multiple runs, adding custom annotations, etc.)?
- **Traceability / Audit:** How important is it for you to have a traceable record (for example, storing results in a database or linking results to a specific DUT)? Does TekExpress provide enough traceability, or do you manually track additional info outside the tool (like DUT serial numbers, test version, etc.)?
- **Sharing Results:** Do TekExpress (OR CURRENT TOOL) reports meet the needs for external sharing (certification bodies or colleagues)? If not, what would improve that (maybe different formats, more concise summary, etc.)?

### 3.5 Debug on Failure & Lifecycle Journey *(new section)*

*INTERNAL TO TEKTRONIX ONLY:*

> **Internal annotation (red text in source):** How this informs upcoming Platform decisions: This section helps determine whether we should include **built-in debug tools** to expedite failure analysis, and how to ensure the platform supports **smooth transitions across lifecycle stages** (so users don't need to reconstruct setups or switch tools when moving from validation to production testing).

- **Debug Approach:** When a compliance test **fails or shows marginal results**, what steps do you take to **identify the root cause**? (e.g., re-run tests with adjustments, inspect waveforms, use separate instruments for manual measurements, consult spec guidelines, etc.) What **tools or workflows** do you rely on for debug, and where do you encounter friction or delays?
- **Tool Support for Debug:** How well does your current **compliance software support debugging**? Would you prefer it if it provided **integrated debug features** (like built-in waveform viewers for failed tests, one-click re-run with different parameters, suggestions on likely problem causes), or do you find it more effective to **use separate tools** for deep debugging? *Explain why.*
- **Lifecycle Phase Differences:** How do **compliance testing needs change across product phases**? For instance, during **initial bring-up**, do you run any compliance checks or only after basic functionality is stable? At **PVT or manufacturing**, are you more focused on quick pass/fail checks rather than detailed analysis? At which stage do you spend the **most time debugging compliance issues**, and what unique constraints exist at that stage (time pressure, limited instrumentation, etc.)?
- **Cross-Phase Continuity:** Do you need to **transfer compliance test setups or data** between phases or teams (e.g., from design validation to production QA)? If yes, how seamless is that today? Describe any **gaps** – for example, re-entering test configs for production or difficulty comparing PVT results with earlier validation runs. What improvements in a new tool could help maintain **continuity and traceability** from bring-up through sustain (e.g., unified data storage, easy reuse of test plans, etc.)?

## Cross-references

- `pain-points-setup-and-execution` — first half of Section 3, carrying the section-level goal and workflow-model annotation.
- [`docs/tek-express-ddr5-tx-user-manual/results-panel.md`](../tek-express-ddr5-tx-user-manual/results-panel.md) and [`reports-panel.md`](../tek-express-ddr5-tx-user-manual/reports-panel.md) — the current results/reports surface that 3.3 and 3.4 interrogate.
- [`docs/tek-express-ddr5-tx-user-manual/saving-recalling-test-setup.md`](../tek-express-ddr5-tx-user-manual/saving-recalling-test-setup.md) — the current setup save/recall capability that 3.5's cross-phase continuity questions extend.
- [`walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md`](../../walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md) and [`walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md`](../../walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md) — AE evidence on reports and debug-from-results pain.

## Confidence notes

- "*SigTest" is printed with a leading asterisk in the source (likely a stray footnote marker); preserved. SigTest is the Intel/PCI-SIG reference signal-quality tool, but the document does not expand it.
- The "(new section)" marker on 3.5 is the author's own draft annotation indicating this section was added in a later draft revision; preserved as printed.
