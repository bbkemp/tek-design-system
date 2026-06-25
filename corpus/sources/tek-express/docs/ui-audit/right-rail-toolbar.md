---
class: doc-section
doc_id: ui-audit
doc_title: "TekExpress AppEmulator — UI Component Report"
doc_date: 2026-05
applies_to: [tek-express]
section_id: right-rail-toolbar
section_title: Right-Rail Toolbar Buttons
parent_section: null
page_range: "4"
related_screens: [setup-dut, results, running-test]
related_hardware: []
---

# Right-Rail Toolbar Buttons

## Summary

Three component types, 25 total instances. The right-rail toolbar is the persistent action surface for run-control: Start, Pause, and (on Results only) Clear.

## Content

| Component | Style | Description | Screens | Count |
|---|---|---|---|---|
| Start button | Green circular, arrow-loop | Large green circular button. Initiates full test run. Always present unless run is active. | All 11 screens | 12 |
| Pause button | Grey circular, ‖ icon | Circular grey button below Start. Pauses active run. Greyed when idle. | All 11 screens | 12 |
| Clear button | Dark circular, × icon | Red-tinted button. Clears all rows from Results table. Only on Results screen. | Results | 1 |

## Run-state behaviour

During an active run (`btn-start` invoked → run in progress):

- **Start** is replaced by a **Stop** button (red square) — see [`running-test.md`](../../screens/running-test.md).
- **Pause** transitions from disabled → enabled.
- The status bar swaps from "Ready." → "Running…" with a progress fill.

When the run completes, Start returns and the status bar reads "Completed".

## Cross-references

- Start / Pause documented on every screen as `btn-start` / `btn-pause`. The Run-state Stop variant is documented in [`running-test.md`](../../screens/running-test.md).
- Clear is unique to [`results.md`](../../screens/results.md), documented there as `btn-clear`.

## Confidence notes

- The audit's count of 12 for Start and Pause across "All 11 screens" sums to 12 per button — likely counts the running-test compact window as a 12th instance. The corpus chunk count agrees.
- The Clear button's red-tint styling is the most assertive destructive-action affordance in the application — worth preserving the visual weight in the redesign.
