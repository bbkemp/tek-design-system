---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: status-and-results-panels
section_title: Status panel and Results panel
parent_section: ""
page_range: "71-75"
related_screens: [status-test-status, status-log-view, results, running-test]
related_hardware: []
---

# Status panel and Results panel

## Summary

During and after a test run, the **Status panel** (2 tabs — Test Status + Log View) shows per-test execution progress and the running message log. The **Results panel** displays the pass/fail table once the run completes, with filter affordances to drill into specific tests or specific failures.

## Content

### Status panel — View the test execution status (pg 71)

Two tabs:

#### Tab 1: Test Status (pg 71)

Per-test row with columns:
- **Test Name** — verbatim from Test Selection
- **Acquisition** — the acquisition record bound to this test (cross-references the Acquisitions panel mapping)
- **Acquire Status** — pending / acquiring / acquired / failed
- **Analysis Status** — pending / analyzing / pass / fail / skipped

During execution, rows update in real time. The running test highlights with a status indicator (animated). Failed acquisitions or analyses surface a click-through to error context.

#### Tab 2: Log View — View test execution logs (pg 72)

Scrollable, read-only message-history text area with timestamped entries. Includes:
- Acquisition events (channel changes, autoset, valid signal detection)
- Test-execution boundaries (test started, parameters applied, test complete)
- Errors and warnings
- SCPI/remote-command activity when remote control is active

Controls:
- **Auto-scroll** checkbox (follow tail vs free-scroll)
- **Clear** button (does not affect committed session data)
- **Save** button (export the log to a text file)

### Running Test minimised window

When a long-running test is in progress, the application supports collapsing the main window to a compact floating status indicator (documented at `screens/running-test.md`). The minimised window shows the active test name, run-state pill, and quick Stop/Pause access.

### Results panel — View summary of test results (pg 74)

Once the run completes, the Results panel shows the pass/fail table:
- **Test Name**
- **Pass / Fail** — large visual indicator
- **Iteration** — for multi-iteration tests, the iteration count
- **Details** — drilldown into the specific measurement values
- **Measured Value**
- **Margin** — how close to limit
- **Units**

#### Filter the test results (pg 74)

Filter dropdown to show only failures, only passes, only specific test categories, or specific PCIe generations. Useful when a Gen 5 run executes ~50 tests and only 3 fail — the filter focuses the post-test review.

## Cross-references

- **UI documented**: [`../../screens/status-test-status.md`](../../screens/status-test-status.md), [`../../screens/status-log-view.md`](../../screens/status-log-view.md), [`../../screens/results.md`](../../screens/results.md), [`../../screens/running-test.md`](../../screens/running-test.md).
- **Customer feedback signal**: the [TekFlow customer feedback thread](../../../../tek-flow/walkthroughs/customer-feedback-thread.md) Inspur-CHN entry asks for failed-test debug information and waveform thumbnails on Results — directly applicable here.
- **Persona alignment**: per the [persona model](../../walkthroughs/personas-and-jobs-to-be-done.md), Push-Button Pete operates primarily on Results and (via Reports) shares the outcome. The Filter the test results affordance is Pete's most-used post-run control.

## Confidence notes

- Sub-page coverage: Tab 1 Test Status (71), Tab 2 Log View (72), Filter test results (74).
- The minimised-window state is documented as a separate corpus screen ([`screens/running-test.md`](../../screens/running-test.md)) rather than its own help-section page — the manual treats it as a window-state of the running run, not a panel.
- "Iteration" column applies to PCIe tests that run multiple iterations against the same acquisition (e.g. Random Pattern eye-mask tests). Variant-specific tests may add additional columns; verify against source PDF for the canonical column list.
