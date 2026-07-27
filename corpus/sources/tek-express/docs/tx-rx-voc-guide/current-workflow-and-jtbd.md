---
provenance: observed
class: doc-section
doc_id: tx-rx-voc-guide
doc_title: "TekExpress VoC Guide (Draft V0.8 25th May)"
doc_number: null
doc_date: 2026-05
applies_to: [tek-express, tek-rx]
section_id: current-workflow-and-jtbd
section_title: 2. Current Workflow & Job-to-be-Done (JTBD)
parent_section: null
page_range: "3 to 3"
related_screens: []
related_hardware: []
---

# 2. Current Workflow & Job-to-be-Done (JTBD)

## Summary

The workflow question block. Goal: map the customer journey and where TekExpress fits into real workflows and tasks — opened as an open-ended walkthrough, later narrowed to focused asks on HSIO compliance validation. Questions cover the end-to-end validation flow from setup to report (naming Infiniview, AGGC, QUALIPHY, TekExpress, Clarius as T&M vendor compliance solutions), the debugging-vs-compliance-automation split, where the current tool limits or slows testing, workplace preference (in-lab vs. remote), desired flexibility, automation/scripting interaction (SCPI, Python), and where the workflow "breaks" into manual intervention.

## Content

**Goal:** *Check on customer Journey and where TekExpress into real workflows and tasks. This should be initiated as OPEN-ENDED Question and later narrow down to focused asks on how they validate HSIO compliance etc etc*

**Questions:**

- **Workflow Walkthrough:** Walk us through a typical end-to-end validation flow **from setup to report** for a compliance test scenario. How do T&M vendors Compliance solutions (Infiniview , AGGC, QUALIPHY, TekExpress, Clarius (or your current tool) support this flow?
- What percentage of your workflow is **debugging vs. compliance automation**? For example, do you spend more time diagnosing issues manually or running automated compliance sequences?
- Where does TekExpress (OR CURRENT TOOL) **limit or slow down** your testing workflows today? (Any specific steps or tasks that feel inefficient or frustrating? Please provide examples.)
- What is your preferred workplace during testing? (In the lab directly at the test setup, or remotely from your desk via remote control/PC?) Does TekExpress (OR CURRENT TOOL) accommodate that preference well or not?
- What capabilities would make TekExpress (OR CURRENT TOOL) more **flexible** in your workflow? (E.g., remote use, better integration with lab tools, custom test flows, etc.)
- **Automation Interaction:** How do you interact with TekExpress (OR CURRENT TOOL) via automation or scripting (if at all)? Do you use SCPI commands, Python scripts, or any integration tools to automate TekExpress (OR CURRENT TOOL) processes? If yes, describe your approach and any challenges.
- **Workflow Breakpoints:** What part of your workflow "breaks" or requires the most manual intervention when using TekExpress (OR CURRENT TOOL)? (For instance: instrument setup, calibration, environment config, result interpretation, etc.)

## Cross-references

- `pain-points-setup-and-execution` — the pain-point deep dive that follows; the internal annotation there names the standard industry workflow this block validates ("Set up-Acquire-Analyse-Report").
- [`docs/tek-express-ddr5-tx-user-manual/scpi-commands.md`](../tek-express-ddr5-tx-user-manual/scpi-commands.md) — the SCPI remote-control surface the Automation Interaction question probes.
- [`walkthroughs/empathy-discussion-guide-question-bank.md`](../../walkthroughs/empathy-discussion-guide-question-bank.md) — the GA "snorkel-to-scuba" pattern: this open-ended walkthrough-first structure is the snorkel phase.
- [`walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md`](../../walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md) and the other July 2026 AE walkthrough chunks — internal AE answers to essentially these workflow questions.

## Confidence notes

- "where TekExpress into real workflows" (missing verb) and "etc etc" preserved as printed in the goal line.
- "Infiniview" is preserved as printed — likely Keysight's "Infiniium" family or an "InfiniiVision"-adjacent name; the guide's spelling is not corrected. Unbalanced parenthesis in the same bullet also preserved.
