---
provenance: observed
class: doc-section
doc_id: tx-rx-voc-guide
doc_title: "TekExpress VoC Guide (Draft V0.8 25th May)"
doc_number: null
doc_date: 2026-05
applies_to: [tek-express, tek-rx]
section_id: pain-points-setup-and-execution
section_title: 3. Pain Points (Core Section) — 3.1 Setup & Bring-up, 3.2 Test Execution & Scalability
parent_section: null
page_range: "4 to 5"
related_screens: []
related_hardware: []
---

# 3. Pain Points (Core Section) — 3.1 Setup & Bring-up, 3.2 Test Execution & Scalability

## Summary

First half of the core pain-points section. Goal: identify friction that drives churn or limits adoption. An internal annotation states the strategic stake: this section determines whether Tek should alter the industry-standard "Set up-Acquire-Analyse-Report" workflow and validates industry likes/dislikes of the customer journey line. Sub-section 3.1 probes setup and bring-up friction (initial setup time loss, first-time-use confusion, setup guidance gaps, appetite for automated detection/configuration). Sub-section 3.2 probes execution and scalability (throughput limiters, sequential-vs-parallel execution with quantification, re-runs and batch adjustment, multi-lane/multi-device coordination across scopes).

## Content

**Goal:** *Identify friction that drives churn or limits adoption.*

*INTERNAL TO TEKTRONIX ONLY:*

> **Internal annotation (red text in source):** How this informs upcoming Platform decisions: This section helps determine whether We should alter the current standard workflow of the industry which is "Set up-Acquire-Analyse-Report". This also helps us validate the current INDUSTRY (T&M) likes and dislikes of the overall customer journey line which impacts their jobs to be done efficiency

### 3.1 Setup & Bring-up

- **Initial Setup Frustrations:** Where do you lose time during the initial **setup and bring-up** for compliance testing? Consider instrument setup, connections, and software configuration – what steps are confusing or error-prone?
- **First-Time Use Challenges:** For a new test or new user, what is confusing in TekExpress (OR CURRENT TOOL) initial configuration (e.g., connecting to a scope, selecting test bench parameters, calibrations)? How often do you need expert help to get valid results the first time?
- **Instrument & DUT Setup Clarity:** Does TekExpress (OR CURRENT TOOL) provide enough guidance (like connection diagrams, prompts for necessary equipment) during setup? If not, where do you see gaps?
- **Automation in Setup:** Would you prefer more automated detection/configuration during setup (e.g., TekExpress (OR CURRENT TOOL) auto-detecting connected instruments or default settings), or do you prefer manual control even if it's slower?

### 3.2 Test Execution & Scalability

- **Throughput Limitations:** What limits your **test throughput** today using TekExpress (OR CURRENT TOOL)? (Possible factors: manual steps between tests, long analysis times, inability to run tests in parallel, license constraints, etc.) How significant is this limitation for you (just an annoyance or a critical issue)?
- **Sequential vs. Parallel:** HSIO compliance solutions historically runs tests sequentially – is this a problem? If TekExpress (OR CURRENT TOOL) could run certain tasks in parallel (e.g., analyze one waveform while capturing the next), how much would that help? **Quantify if possible** (like "I could save X% of time if Y could happen in parallel").
- **Re-runs and Batches:** Do you often need to re-run tests or adjust settings mid-campaign? If so, what's the cause (DUT issues vs TekExpress (OR CURRENT TOOL) issues)? How easy or cumbersome is it to re-run or loop tests (e.g., for multiple channels or devices)?
- **Multi-lane/Multi-device:** Are you testing multi-lane interfaces or multiple devices concurrently? If yes, how well does TekExpress (OR CURRENT TOOL) support those scenarios? Where does it fall short (e.g., inability to coordinate across multiple scopes or lanes in one go)?

## Cross-references

- `pain-points-analysis-reporting-and-debug` — continuation of Section 3 (3.3 Analysis, 3.4 Reporting, 3.5 Debug on Failure & Lifecycle Journey).
- [`docs/tek-express-ddr5-tx-user-manual/setting-up-test-environment.md`](../tek-express-ddr5-tx-user-manual/setting-up-test-environment.md) and [`setup-dut-panel.md`](../tek-express-ddr5-tx-user-manual/setup-dut-panel.md) — the current setup surface these bring-up questions interrogate.
- [`walkthroughs/ae-chrisb-reports-and-rerun-workflow.md`](../../walkthroughs/ae-chrisb-reports-and-rerun-workflow.md) — AE evidence on the re-run pain probed in 3.2.
- [`walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md`](../../walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md) — AE evidence on bench setup / instrument connection friction probed in 3.1.
- Multi-lane parallel execution appears as a ranked candidate feature in `future-needs-and-wrap-up` (Multirun, Multilane).

## Confidence notes

- The red-ink internal annotation is transcribed verbatim including its capitalization ("whether We should") and the spelling "Analyse".
- "HSIO compliance solutions historically runs tests sequentially" — subject-verb disagreement preserved as printed.
- Section 3 spans pages 4–6 in the source; it is split into two corpus chunks at the 3.2/3.3 boundary for retrieval granularity. This chunk carries the section-level goal and internal annotation; the continuation chunk carries its own internal annotation for 3.5.
