---
provenance: observed
class: screen
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-dut-session-browser
screen_title: Setup › DUT — Run/Config Sessions
screen_type: dialog
image: setup-dut-session-browser.jpg
source_photo: uploads/photos/3. Setup-DUT_Run_Config Session.png
navigation_path: [Setup, DUT, Run/Config Sessions]
parent_screens: [setup-dut]
child_screens: []
applies_to: [tek-express]
related_screens: [setup-dut, setup-dut-comments]
related_hardware: []
related_modules: []
controls:
  - id: dialog-title
    label: Run/Config Sessions
    type: indicator
    state: active
    action: Dialog title bar. Floating dialog over the Setup › DUT screen.
  - id: dialog-close
    label: ""
    type: button
    state: enabled
    action: Standard close (X) in dialog title bar. Cancels and dismisses the dialog.
  - id: sessions-table
    label: ""
    type: readout
    state: active
    action: Read-only table of saved sessions. Columns Session, DUTID, Comment. One row visible "Run1 / 20260513_020304 / KARTHIKS... / General Comment - App...".
  - id: session-row-radio
    label: ""
    type: radio
    state: active
    action: Per-row radio indicator selecting which session the action buttons apply to. The visible row is the active selection (orange).
  - id: session-name-input
    label: Session Name
    type: input
    state: enabled
    action: Text input for naming a new session before Save. 40-character limit per the hint.
  - id: session-name-hint
    label: "(Max:40)"
    type: indicator
    state: active
    action: Character-limit hint adjacent to the Session Name input.
  - id: btn-save
    label: Save
    type: button
    state: enabled
    action: Saves the current configuration as a new named session using the Session Name value.
  - id: btn-close
    label: Close
    type: button
    state: enabled
    action: Closes the dialog without further action.
  - id: btn-default
    label: Default
    type: button
    state: enabled
    action: Loads the default session (factory-default configuration).
  - id: btn-load
    label: Load
    type: button
    state: enabled
    action: Loads the selected session into the active configuration.
  - id: btn-delete
    label: Delete
    type: button
    state: enabled
    action: Deletes the selected session.
  - id: btn-run-sessions
    label: Run Sessions
    type: button
    state: active
    action: Runs the selected session(s). Highlighted (orange) in this screenshot — likely the affordance that just activated this dialog or the default action of the dialog.
---

# Setup › DUT — Run/Config Sessions

## Purpose

Floating dialog over the Setup › DUT screen for managing named test sessions. The dialog lists saved sessions in a table, lets the user save the current configuration as a new named session, load a saved session, delete one, restore defaults, or run a session. Launched from the `session-select` ellipsis (`…`) browser button on the Setup › DUT screen (per the audit PDF: "Inline with 'Session : Default'" — the same affordance).

A session bundles every parameter set across the four Setup-wizard steps (DUT identity, Test Selection, Acquisitions config, Preferences) into a single named configuration that can be replayed.

## Controls inventory

The dialog opens with `dialog-title` ("Run/Config Sessions") and `dialog-close` (X) in its title bar. The main body has two regions stacked vertically:

The **sessions table** (`sessions-table`) lists saved sessions with columns Session / DUTID / Comment, plus a leading per-row radio indicator (`session-row-radio`). The visible row shows `Run1 / 20260513_020304 / KARTHIKS... / General Comment - App...` — a session named "Run1" recorded with a timestamp, the truncated DUTID "KARTHIKS..." (matches the "KARTHIKSAMPLE" value seen on the Setup › DUT screen), and a truncated comment "General Comment - App..." (matches the value entered via the `setup-dut-comments` dialog).

The **save row** below the table has `session-name-input` (Session Name) with `session-name-hint` ("(Max:40)") and the inline `btn-save`.

The **action row** at the bottom holds five buttons: `btn-close`, `btn-default`, `btn-load`, `btn-delete`, `btn-run-sessions`. The Run Sessions button is highlighted in this screenshot.

## State variations

Visible in this photo: one saved session ("Run1"), Run Sessions button highlighted.

Other states:

- **Empty sessions table** — fresh install before any sessions have been saved; Load / Delete / Run Sessions become non-actionable until a row exists and is selected.
- **Multiple sessions** — table scrolls vertically when entries exceed visible rows.
- **Save with invalid Session Name** — likely produces an inline validation error (untested in this screenshot).

## Visible text (verbatim)

Dialog: `Run/Config Sessions` · table columns `Session` · `DUTID` · `Comment` · row `Run1` · `20260513_020304` · `KARTHIKS...` · `General Comment - App...`.

Save row: `Session Name` · `(Max:40)` · `Save`.

Action buttons: `Close` · `Default` · `Load` · `Delete` · `Run Sessions`.

Background (chrome partial): `TekExpress AppEmulator — (9346)*` · `Use pre-recorded waveform files` · `Session : 9346` · `Vertical Offset` · `250V` · `Signal Validation Threshold` · `300mV` · `Show Model Information In Popup` · `Start` · `Pause` · `Not Intended For Public Release` · `Ready.`

## Confidence notes

- The exact column ordering and the per-row radio behaviour (single-select vs. multi-select for Run Sessions) is inferred from the single-row screenshot. Multi-select Run Sessions would imply batch execution; verify against the live build.
- The dialog appears to be modal but no dimmed background overlay is visible.
- The "Run1 / 20260513_020304" naming convention (run number + timestamp) suggests Save auto-appends a timestamp to the user-provided Session Name; the visible Session Name input is empty in this screenshot, so this is inferred.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — state of Setup › DUT.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — sessions table.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — Session Name text input.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Save / Close / Default / Load / Delete / Run Sessions buttons.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/3. Setup-DUT_Run_Config Session.png`. Captured with one saved session visible in the table.
