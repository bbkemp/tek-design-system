---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: status-test-status
screen_title: Status › Test Status
screen_type: status
image: status-test-status.jpg
source_photo: uploads/photos/12. Status-Test Status.png
navigation_path: [Status, Test Status]
parent_screens: []
child_screens: []
applies_to: [tek-express]
related_screens: [status-log-view, running-test, setup-test-selection, setup-acquisitions]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (9346)*"
    type: indicator
    state: active
    action: Window chrome — see setup-dut.md.
  - id: nav-status
    label: Status
    type: tab
    state: active
    action: Side-nav, on Status panel.
  - id: subtab-test-status
    label: Test Status
    type: tab
    state: active
    action: Sub-tab pill at the top of the panel. Active (orange).
  - id: subtab-log-view
    label: Log View
    type: tab
    state: enabled
    action: Sister sub-tab — see status-log-view.md.
  - id: status-table
    label: ""
    type: readout
    state: active
    action: Table of every selected test with its acquisition mapping and live status. Four columns Test Name, Acquisition, Acquire Status, Analysis Status. Rows are populated from the Test Selection + Acquisitions configuration.
  - id: status-row-alm-short
    label: "Algorithm Library Measurement / Short Record-length for Period"
    type: readout
    state: active
    action: Row 1 — Algorithm Library short-record test. Acquire/Analysis Status "To be started".
  - id: status-row-alm-acq
    label: "Algorithm Library Measurement / Acquisition for Algorithm Test"
    type: readout
    state: active
    action: Row 2 — Algorithm Library acquisition. "To be started".
  - id: status-row-scope
    label: "Period using SCOPE (Acquire-Analyze Combined) / Short Record-length for SCOPE Period"
    type: readout
    state: active
    action: Row 3 — SCOPE-based period. "To be started".
  - id: status-row-dpojet
    label: "Period using DPOJET (Acquire-Analyze Combined) / Short Record-length for DPOJET Period"
    type: readout
    state: active
    action: Row 4 — DPOJET-based period. "To be started".
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail Start.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause, idle.
  - id: status-bar
    label: "Ready."
    type: indicator
    state: active
    action: Idle status bar.
---

# Status › Test Status

## Purpose

Active-run dashboard. Lists every test that was selected on Setup › Test Selection plus its acquisition mapping from Setup › Acquisitions, with per-test Acquire Status and Analysis Status columns that update live during a run. In the **idle** state (this screenshot) every row reads "To be started"; during a run, rows transition through "In progress" → "Completed" — see [running-test.md](./running-test.md) and the running-state variation below.

This is the user's primary "is the run done?" view. The sister Log View tab ([status-log-view.md](./status-log-view.md)) shows the textual event log; this tab is the row-by-row progress grid.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-status` is the active side-nav pill.

**Sub-tabs** at the top of the panel: `subtab-test-status` (active, orange) and `subtab-log-view` (sister).

**Status table** (`status-table`) — four columns (Test Name / Acquisition / Acquire Status / Analysis Status). Four rows visible — one per selected test:

- `status-row-alm-short`, `status-row-alm-acq` — the two Algorithm Library entries.
- `status-row-scope` — Period using SCOPE.
- `status-row-dpojet` — Period using DPOJET.

All four rows show empty Acquire Status / "To be started" Analysis Status — the idle state.

**Right-rail toolbar** holds the Start / Pause pair. In idle, Start is enabled; in run state, they swap for Stop / Pause (see [running-test.md](./running-test.md)).

## State variations

- **Idle** (this screenshot) — every row "To be started"; Status bar "Ready."; right-rail shows Start / Pause.
- **Running** (`uploads/photos/15. Running Test_Maximised.png`) — table rows show live progress: e.g. "Completed - Itera..." or "In progress - Iter..." in the Acquire Status column; the in-progress row is highlighted (orange); right-rail swaps Start for Stop; status bar reads "Running..." with progress. Title bar may show "(Untitled)" instead of "(9346)" because the runtime detaches from the saved session ID during a run.
- **Run paused** — likely shows partial completion with Pause toggled active.
- **Run completed** — every row "Completed"; right-rail returns to Start / Pause.
- **No tests selected** — table empty; the user must return to Setup › Test Selection.

## Visible text (verbatim)

Sub-tabs: `Test Status` · `Log View`.

Table columns: `Test Name` · `Acquisition` · (`Acquire Status` per the audit PDF — partially visible) · `Analysis Status`.

Rows: `Algorithm Library Measurement` · `Short Record-length for Period` · `To be started` · `Algorithm Library Measurement` · `Acquisition for Algorithm Test` · `To be started` · `Period using SCOPE (Acquire-Analyze Combined)` · `Short Record-length for SCOPE Period` · `To be started` · `Period using DPOJET (Acquire-Analyze Combined)` · `Short Record-length for DPOJET Period` · `To be started`.

Chrome / state: `TekExpress AppEmulator — (9346)*` · `Setup` · `Status` · `Results` · `Plots` · `Reports` · `Start` · `Pause` · `Not Intended For Public Release` · `Ready.`

## Confidence notes

- The audit PDF describes this screen with only 2 visible rows in its captured state ("Period using SCOPE and Period using DPOJET — both To be started"). This screenshot shows 4 rows because the live test selection includes more tests. Both states are valid; the row count reflects the active Test Selection.
- The third column header is at the legibility edge — almost certainly "Acquire Status" per the audit PDF. Verify on the live build.
- During-run state details (exact "In progress - Iter..." truncation, the highlighted-row affordance, the timing of transitions) are from `running-test_Maximised.png` (photo 15) — see the running-test chunk for that frame's full detail.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Status › Test Status (Tab 1).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, tab bar.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — test-status table.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/12. Status-Test Status.png` (idle, canonical). The running-state variation is captured in `uploads/photos/15. Running Test_Maximised.png` and detailed under [running-test.md](./running-test.md).
