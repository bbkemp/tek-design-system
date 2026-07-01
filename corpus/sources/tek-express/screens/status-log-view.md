---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: status-log-view
screen_title: Status › Log View
screen_type: status
image: status-log-view.jpg
source_photo: uploads/photos/13. Status-Log View.png
navigation_path: [Status, Log View]
parent_screens: []
child_screens: []
applies_to: [tek-express]
related_screens: [status-test-status, running-test]
related_hardware: []
related_modules: []
controls:
  - id: nav-status
    label: Status
    type: tab
    state: active
    action: Side-nav, on Status panel.
  - id: subtab-test-status
    label: Test Status
    type: tab
    state: enabled
    action: Sister sub-tab. See status-test-status.md.
  - id: subtab-log-view
    label: Log View
    type: tab
    state: active
    action: Sub-tab pill, currently active (orange).
  - id: message-history-label
    label: Message History
    type: indicator
    state: active
    action: Region label above the log scroll area.
  - id: message-history
    label: ""
    type: readout
    state: active
    action: Full-height scrollable read-only text area. Populates with timestamped event lines during a run. Empty in this screenshot (idle).
  - id: chk-auto-scroll
    label: Auto Scroll
    type: checkbox
    state: active
    action: Checked in this screenshot. When on, the view auto-scrolls to the latest line as entries arrive.
  - id: btn-clear-log
    label: Clear Log
    type: button
    state: enabled
    action: Empties the Message History area.
  - id: btn-save
    label: Save…
    type: button
    state: enabled
    action: Saves the Message History to a file via an OS file dialog. Ellipsis indicates further interaction required.
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

# Status › Log View

## Purpose

Free-form event log for the active run. Each event line is timestamped (date + time) and describes a runtime step (initialising scope, acquiring waveforms, applying settings, etc.). Sister to [status-test-status.md](./status-test-status.md): Test Status is the structured per-test progress grid; Log View is the unstructured chronological event stream. Useful for debugging and for understanding fine-grained sequencing.

In **idle**, the Message History is empty. During a **run**, lines accumulate and (if `chk-auto-scroll` is on) the view auto-scrolls.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-status` active.

**Sub-tabs**: `subtab-test-status` and `subtab-log-view` (active). The Log View sub-tab swaps the panel body for the Message History region.

**Region label** `message-history-label` ("Message History") sits at the top. Below: `message-history`, the scrollable read-only text area.

**Bottom strip** — `chk-auto-scroll` on the left (checked); `btn-clear-log` and `btn-save` on the right.

## State variations

- **Idle** (this screenshot) — Message History empty.
- **Running** (`uploads/photos/16. Running Test_Log View.png`) — Message History populated with timestamped event lines like:
  - `Initializing run time environment. This might take some time.`
  - `05/25/2026 04:35:05 : Initializing C# App Sequencer...`
  - `05/25/2026 04:35:05 : Setting AutoProgressUpdate = False`
  - `05/25/2026 04:36:05 : Initializing scope handle`
  - `05/25/2026 04:36:05 : Reading probe details`
  - `05/25/2026 04:36:05 : Acquiring waveforms`
  - `05/25/2026 04:36:05 : Iteration 1`
  - `05/25/2026 04:36:23 : Acquire Type Short RecordLength for SCOPE Period`
  - `05/25/2026 04:36:23 : Performing Reset and Autoset`
  - `05/26/2026 04:36:25 : Performing single`
  - `05/25/2026 04:36:25 : Saving the waveform`
  - `05/25/2026 04:36:29 : Saving scope image snapshot`
  - `05/25/2026 04:36:29 : Waiting for the save to be completed...`
  - `05/25/2026 04:36:51 : Applying Settings`
  - `05/25/2026 04:36:51 : Acquire Type Short RecordLength for DPOJET Period`
  - (continuing for the duration of the run)
- **Saved log** — after Save… is invoked, an OS file dialog completes; the in-app view is unchanged.
- **Cleared** — Clear Log empties the area.
- **Auto Scroll off** — log fills bottom-up but the visible scroll position does not auto-advance.

## Visible text (verbatim)

Sub-tabs: `Test Status` · `Log View`. Region label: `Message History`.

Bottom strip: `Auto Scroll` · `Clear Log` · `Save…`.

Running-state log content (from photo 16) — see the State variations section above for the full transcribed list.

Chrome / state: `TekExpress AppEmulator — (9346)*` · `Setup` · `Status` · `Results` · `Plots` · `Reports` · `Start` · `Pause` · `Not Intended For Public Release` · `Ready.`

## Confidence notes

- One log line in the running-state photo (`05/26/2026 04:36:25 : Performing single`) has a date offset by 1 day from the surrounding lines — likely an OCR error in my transcription rather than a real bug in the app. Verify against a fresh screenshot.
- The "C#" in `Initializing C# App Sequencer...` is legible in photo 16 and confirms the application is implemented in C# (.NET).
- Whether `btn-save` allows save-while-running (capturing the live log mid-stream) or only after a run completes is not visible. Most well-behaved apps allow it; verify on the live build.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Status › Log View (Tab 2).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, tab bar.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — Message History scrollable text area.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — Auto Scroll checkbox.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Clear Log / Save… buttons.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/13. Status-Log View.png` (idle, canonical). The running-state variation is captured in `uploads/photos/16. Running Test_Log View.png`.
