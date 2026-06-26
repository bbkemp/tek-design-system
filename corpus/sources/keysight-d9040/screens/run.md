---
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: run
screen_title: Run
screen_type: status
image: run.jpg
source_photo: uploads/photos/IMG_7025.jpg
function_state: Overall Run Status = PASS; 0 pending acquisitions; Manager (Acquire,Report); Outbound Task Queue 0
navigation_path: [USB4 Test Application, Run]
parent_screens:
  - configure
child_screens:
  - results
related_hardware: []
controls:
  - id: tab-run
    label: Run
    type: tab
    state: active
    action: Currently active workflow tab.
  - id: overall-status-readout
    label: "Overall Run Status: PASS"
    type: readout
    state: active
    action: Top-of-pane status readout. Green `PASS` badge mirrors the bottom status-bar pass indicator and is the canonical pass/fail for the last completed run.
  - id: btn-run
    label: Run
    type: button
    state: enabled
    action: Starts the test run with the currently selected tests and configured variables. Visible state is green-tinted, suggesting available-and-primary.
  - id: btn-pause
    label: Pause
    type: button
    state: enabled
    action: Pauses an in-flight run.
  - id: run-tests-mode
    label: "Run tests Once"
    type: dropdown
    state: enabled
    action: Selects how many times to repeat the test set — visible value `Once`. The chevron indicates additional options (e.g. continuous, fixed count).
  - id: panel-permutations
    label: Permutations
    type: indicator
    state: active
    action: Group surfacing trial / permutation controls for the next run.
  - id: skip-completed
    label: Skip completed
    type: toggle
    state: enabled
    action: Checkbox — skip tests that have already completed in the current project session.
  - id: show-status
    label: Show Status
    type: button
    state: enabled
    action: Reveals per-permutation status detail.
  - id: panel-test-execution
    label: Test Execution Phases (Next Run)
    type: indicator
    state: active
    action: Group surfacing the phase counters for the next run.
  - id: phase-pending-acquisitions
    label: "Pending Acquisitions: 0"
    type: readout
    state: active
    action: Counter — Acquisitions queued.
  - id: phase-pending-measurements
    label: "Pending Measurements: 0"
    type: readout
    state: active
    action: Counter — Measurements queued.
  - id: phase-completed
    label: "Completed: 0"
    type: readout
    state: active
    action: Counter — Completed tests in the next run.
  - id: panel-measurement-server
    label: Measurement Server
    type: indicator
    state: active
    action: Group surfacing the live measurement-server state.
  - id: ms-manager
    label: "Manager (Acquire,Report)"
    type: readout
    state: active
    action: Mode of the Manager process — currently in Acquire and Report.
  - id: ms-outbound-queue
    label: "Outbound Task Queue: 0"
    type: readout
    state: active
    action: Pending outbound-task count.
  - id: ms-task-grid
    label: "Active Run ID | Progress | TestID | (Machine) | Aborted"
    type: indicator
    state: active
    action: Task grid columns. No rows visible in this photo (the run has completed and the grid is empty).
  - id: panel-result-tags
    label: Result Tags
    type: indicator
    state: active
    action: Group for arbitrary key-value tags stamped into the report.
  - id: btn-configure-tags
    label: Configure (Result Tags)
    type: button
    state: enabled
    action: Opens a tag-configuration sub-dialog. Two-row Name/Value editor visible below.
  - id: tag-name
    label: Name (Result Tag)
    type: input
    state: enabled
    action: Editable tag key.
  - id: tag-value
    label: Value (Result Tag)
    type: input
    state: enabled
    action: Editable tag value.
  - id: panel-event
    label: Event
    type: indicator
    state: active
    action: Group for event-based triggers (e.g. detect events during run).
  - id: detect-events
    label: Detect events
    type: toggle
    state: enabled
    action: Checkbox — enable event detection during a run.
  - id: panel-store-mode
    label: Store Mode
    type: indicator
    state: active
    action: Group for run-results store policy.
  - id: store-mode-worst-n
    label: "During run, store details for Worst trials (up to 25)"
    type: dropdown
    state: enabled
    action: Inline dropdown — `Worst` visible value; chevron indicates other modes.
  - id: panel-email
    label: Email
    type: indicator
    state: active
    action: Group for end-of-run email notification.
  - id: email-send-on-pause-stop
    label: Send email when run is paused or stopped
    type: toggle
    state: enabled
    action: Checkbox — gates an email notification.
  - id: summary-block
    label: "Summary: Run tests once; Store details for up to 25 worst trials (margin)"
    type: readout
    state: active
    action: Plain-English summary of the configured run, restating the dropdown values verbatim.
  - id: side-marker-run
    label: RUN
    type: indicator
    state: active
    action: Vertical text in the left margin spelling `RUN`.
---

# Run — Overall Run Status: PASS

## Purpose

Run is the fifth workflow tab. It is the operator's "go" surface for executing the configured test set, with a top-of-pane **Overall Run Status** badge that summarizes the result of the last completed run (here, green `PASS`). The page is structured as a vertical sequence of groups: the green/grey Run / Pause action pair, a `Run tests Once` repetition selector, permutation controls, live counters for the next run's phases, the Measurement Server's task grid, result-tag editing, event-detection, store-mode (worst-N), and email notification. A plain-English `Summary` at the bottom restates the operator's selections in English so they can re-confirm before pressing Run.

## Controls inventory

Above the body, the workflow tab bar (documented in `set-up`) shows `tab-run` highlighted. To the right of the tab's name, `overall-status-readout` reads `Overall Run Status: PASS` in green.

The Run/Pause action row holds `btn-run` (green tint) and `btn-pause`. Immediately below, `run-tests-mode` is a dropdown showing `Once`.

The body is a stack of group panels, each labeled by an indicator:

**Permutations** — `panel-permutations` exposes `skip-completed` (checkbox, unchecked) and `show-status` (button).

**Test Execution Phases (Next Run)** — `panel-test-execution` exposes three counters: `phase-pending-acquisitions` (`0`), `phase-pending-measurements` (`0`), `phase-completed` (`0`).

**Measurement Server** — `panel-measurement-server` exposes `ms-manager` (`Manager (Acquire,Report)`) and `ms-outbound-queue` (`Outbound Task Queue: 0`), then a `ms-task-grid` with the columns `Active Run ID | Progress | TestID(Machine) | Aborted`. The grid has no rows in this capture — the most recent run has cleared.

**Result Tags** — `panel-result-tags` exposes `btn-configure-tags` and an inline `tag-name` / `tag-value` row editor.

**Event** — `panel-event` exposes a single `detect-events` checkbox.

**Store Mode** — `panel-store-mode` exposes `store-mode-worst-n`, an inline phrase-dropdown reading `During run, store details for Worst trials (up to 25)`.

**Email** — `panel-email` exposes `email-send-on-pause-stop`.

**Summary** — `summary-block` reads `Summary: - Run tests once - Store details for up to 25 worst trials (margin)` and restates the dropdown values for re-confirmation.

The left margin carries `side-marker-run` (vertical `RUN` text).

The Messages panel and status bar (`PASS` badge) persist from `set-up`. The same `PASS` state in the status-bar bottom is mirrored by the top-of-pane `overall-status-readout`.

## State variations

Visible in this photo: `Overall Run Status: PASS`; all counters 0; Manager in `(Acquire,Report)` mode; empty task grid; default store-mode is `Worst (up to 25)`; no event detection; no email notification configured.

Across IMG_7014 and IMG_7025 the same screen is shown:

- IMG_7014 captures a wider window framing including the full Messages panel; the badge is green `PASS`.
- IMG_7025 is a slightly tighter framing of the upper Run pane and is the chosen canonical because the task-grid columns are more sharply rendered.

Other states this same screen will exhibit:

- During a run — `Run` becomes mid-action (likely greyed or replaced) and `Pause` becomes the primary action; the task grid begins populating; counters increment; status badge becomes `IN PROGRESS` or similar.
- After a fail — `overall-status-readout` switches to a red `FAIL` indicator with the same layout.

## Visible text (verbatim)

`Run` · `Pause` · `Overall Run Status: PASS`.

`Run tests Once`.

`Permutations` · `Skip completed` · `Show Status`.

`Test Execution Phases (Next Run)` · `Pending Acquisitions: 0` · `Pending Measurements: 0` · `Completed: 0`.

`Measurement Server` · `Manager (Acquire,Report)` · `Outbound Task Queue: 0` · `Active Run ID` · `Progress` · `TestID(Machine)` · `Aborted`.

`Result Tags` · `Configure` · `Name` · `Value`.

`Event` · `Detect events`.

`Store Mode` · `During run, store details for Worst trials (up to 25)`.

`Email` · `Send email when run is paused or stopped`.

`Summary:` · `- Run tests once` · `- Store details for up to 25 worst trials (margin)`.

Status bar: `Unsaved Changes` · `MeasServer(A,R)` · `0 Tests` · `PASS`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`run.jpg`) and cross-referenced with IMG_7014. Items below are uncertain:

- The `btn-run` green tint is consistent with "primary action / available". Whether it would also tint green during the run, or shift to a "running" treatment, is not derivable.
- The `ms-task-grid` columns include a parenthesized `(Machine)` segment. The grid is empty so column-vs-row semantics are read from the header text only.
- `Run tests Once` is parsed as `Run tests` (label) + `Once` (dropdown). The full menu of values is not visible.
- `Worst trials (up to 25)` is parsed as `Worst` (dropdown) + `trials (up to 25)` (label). The full menu of values is not visible.
- Whether `Skip completed` operates session-scoped or persists across project loads is unverified.
- The `Show Status` button is dimmer in this photo than `Run` — interpreted as enabled-but-secondary, not as disabled.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Run tab, run-trigger semantics, the Measurement Server task grid, Store Mode policies, and run-end email notifications).

## Source photo

Selected from `uploads/photos/`: **IMG_7025.jpg** — chosen for clarity (most orthogonal monitor framing of the Run tab, both `Run` / `Pause` buttons are crisply legible, the task-grid columns are sharply rendered, and the `Overall Run Status: PASS` badge is unambiguously green). Other candidates and why they were not used for step-0:

- `IMG_7014.jpg` — same screen at wider zoom; useful for confirming the Messages-panel state at the bottom but lower fidelity on the body text.
