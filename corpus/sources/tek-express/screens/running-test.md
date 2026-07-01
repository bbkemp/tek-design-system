---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: running-test
screen_title: Running Test — Minimised Window
screen_type: status
image: running-test.jpg
source_photo: uploads/photos/14. Running Test_Minimised Window.png
navigation_path: [Running Test]
parent_screens: [status-test-status]
child_screens: []
applies_to: [tek-express]
related_screens: [status-test-status, status-log-view]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (Untitled)*"
    type: indicator
    state: active
    action: Compact-window title bar. "(Untitled)" replaces the session ID during a runtime detach.
  - id: window-mail
    label: ""
    type: button
    state: enabled
    action: Window mail icon (envelope) at top-right.
  - id: window-restore
    label: ""
    type: button
    state: enabled
    action: Window restore icon — clicking restores the full-size window (back to status-test-status.md / status-log-view.md).
  - id: log-pane
    label: ""
    type: readout
    state: active
    action: Compact log pane occupying the full window body. Auto-scrolling timestamped event lines. Read-only.
  - id: log-entries
    label: ""
    type: readout
    state: active
    action: "Visible lines: 05/26/2026 04:34:43 Setting AutoProgressUpdate = False / Initializing scope handle / Reading probe details / Acquiring waveforms / Iteration 1 / Acquire Type Short Record-length for SCOPE Period / Performing Reset and Autoset."
  - id: btn-stop
    label: Stop
    type: button
    state: active
    action: Red square button at top-right of right-rail. Aborts the run.
  - id: btn-pause
    label: Pause
    type: button
    state: enabled
    action: Right-rail Pause, enabled during a run.
  - id: status-indicators
    label: ""
    type: indicator
    state: active
    action: Three small colored squares adjacent to Stop. Likely run-state indicators (green / blue / orange).
  - id: status-bar
    label: "Running..."
    type: indicator
    state: active
    action: Status bar reads "Running..." with a populated progress indicator.
---

# Running Test — Minimised Window

## Purpose

Compact floating window the application collapses to during a test run when the user wants to keep their screen free for other applications (typically: the TekScope or oscilloscope vendor software). The full-size Status panel ([status-test-status.md](./status-test-status.md), [status-log-view.md](./status-log-view.md)) remains the maximised view; this minimised view is the **distinct UI surface** that takes over while the run executes and the user has minimised the host.

In this minimised view, the entire body is the log pane (a condensed Log View). The right-rail still hosts Stop and Pause as their full-size equivalents. The window can be restored to full size at any time via `window-restore`.

## Controls inventory

**Title bar** (`title-bar`) reads `TekExpress AppEmulator — (Untitled)*` — "(Untitled)" replaces the session ID `(9346)` during a runtime detach (the run does not commit a session change yet). Two top-right window controls visible: `window-mail` (envelope) and `window-restore` (restore/maximise icon).

**Body** is the `log-pane` — a single read-only text area filling the window. `log-entries` shows a snapshot of timestamped runtime events:

- `05/26/2026 04:34:43 : Setting AutoProgressUpdate = False`
- `05/26/2026 04:34:43 : Initializing scope handle`
- `05/26/2026 04:34:43 : Reading probe details`
- `05/26/2026 04:34:43 : Acquiring waveforms`
- `05/26/2026 04:34:43 : Iteration 1`
- `05/26/2026 04:34:43 : Acquire Type Short Record-length for SCOPE Period`
- `05/26/2026 04:34:43 : Performing Reset and Autoset`

**Right-rail** has `btn-stop` (large red square — replaces the green Start during a run) and `btn-pause`. Three small colored squares (`status-indicators`) sit adjacent — likely state indicators.

**Status bar** (`status-bar`) at the bottom reads `Running...` with a populated progress fill.

## State variations

- **Maximised window during run** ([status-test-status.md](./status-test-status.md) — running state) — same run, different window state. The user clicks `window-restore` to switch from this compact view to the full Status panel.
- **Paused** — Pause activates; status bar likely changes from "Running..." to "Paused".
- **Stopped** — user hits Stop; the window probably returns to idle or shows a "Stopped" status before reverting to the maximised idle Status view.
- **Run complete** — log shows completion lines; right-rail swaps Stop back to Start.

## Visible text (verbatim)

Title: `TekExpress AppEmulator — (Untitled)*`.

Log lines (chronological, top to bottom, all dated `05/26/2026 04:34:43`):
1. `Setting AutoProgressUpdate = False`
2. `Initializing scope handle`
3. `Reading probe details`
4. `Acquiring waveforms`
5. `Iteration 1`
6. `Acquire Type Short Record-length for SCOPE Period`
7. `Performing Reset and Autoset`

Right-rail labels: `Stop` · `Pause`.

Status bar: `Running...`.

## Confidence notes

- The three small colored squares adjacent to Stop — likely state indicators (green = running normally, blue = paused or info, orange = warning) but specific semantics are not labeled. Verify against the live build.
- Whether the user can interact with the log pane in this compact view (right-click context menu? scroll back?) is not visible. The Maximised view's `chk-auto-scroll` and `btn-clear-log` / `btn-save` actions are not present in this compact view — likely they sit behind the `window-restore` action (restore the full Log View to use those affordances).
- "Untitled" in the title bar during a run is a notable UX behaviour — it implies the session ID is dropped while the run executes. The session ID may return after the run completes; verify whether this is intentional or a runtime quirk.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — not enumerated as a separate screen in the audit; closest match is Status › Test Status during run.
- [`docs/ui-audit/right-rail-toolbar.md`](../docs/ui-audit/right-rail-toolbar.md) — Stop (replacing Start during run), Pause.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — compact log pane, title bar, status bar.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/14. Running Test_Minimised Window.png`. Companion running-state photos `15. Running Test_Maximised.png` and `16. Running Test_Log View.png` are captured under [status-test-status.md](./status-test-status.md) and [status-log-view.md](./status-log-view.md) respectively (as the running-state variation of each).
