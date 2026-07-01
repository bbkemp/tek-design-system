---
provenance: observed
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: automate
screen_title: Automate
screen_type: config
image: automate.jpg
source_photo: uploads/photos/IMG_7018.jpg
function_state: Empty script body; Execute commands from Script selected; Command status [Success] UpdateScratchpad
navigation_path: [USB4 Test Application, Automate]
parent_screens:
  - run
child_screens:
  - create-automation-commands
related_hardware: []
controls:
  - id: tab-automate
    label: Automate
    type: tab
    state: active
    action: Currently active workflow tab.
  - id: btn-commands
    label: Commands…
    type: button
    state: enabled
    action: Top-left button. Opens the Create Automation Commands modal (documented as `create-automation-commands`).
  - id: btn-save-as
    label: Save As…
    type: button
    state: enabled
    action: Top-left button. Saves the current script under a chosen filename.
  - id: execute-from-label
    label: "Execute commands from:"
    type: indicator
    state: active
    action: Label for the script-source radio pair.
  - id: source-script
    label: Script
    type: button
    state: active
    action: Radio — execute from the inline script editor below.
  - id: source-files
    label: Files
    type: button
    state: enabled
    action: Radio — execute from external script files.
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Begins script execution.
  - id: btn-pause-automate
    label: Pause
    type: button
    state: enabled
    action: Pauses script execution.
  - id: btn-settings
    label: Settings…
    type: button
    state: enabled
    action: Opens an automation-execution settings sub-dialog.
  - id: script-editor
    label: Script editor
    type: input
    state: enabled
    action: Multi-line script editor with numbered gutter (lines 1-35 visible). Empty in this photo.
  - id: try-a-command
    label: "Try a command:"
    type: input
    state: enabled
    action: Single-line entry below the editor. Used to test individual commands without committing them to the script.
  - id: command-status
    label: "Command status: [Success] UpdateScratchpad"
    type: readout
    state: active
    action: Bottom-pane readout — most recent command's status. Green-tinted `[Success]` plus the command name.
  - id: side-marker-automate
    label: AUTOMATE
    type: indicator
    state: active
    action: Vertical text in the left margin spelling `AUTOMATE`.
---

# Automate

## Purpose

Automate is the sixth workflow tab. It is the script-driven automation surface for the USB4 Test Application — a place to compose a sequence of commands that can drive the same actions the operator would otherwise click their way through (set up DUT fields, select tests, configure variables, run, evaluate). The tab is split into a top action band (script-source radio + Start / Pause / Settings), the line-numbered script editor in the middle, a `Try a command:` one-shot input below, and a `Command status:` readout at the very bottom that surfaces the most recent command's outcome. The `Commands…` button in the top-left opens the **Create Automation Commands** modal documented separately as `create-automation-commands`, which is the helper that lets the operator generate command strings tab-by-tab without memorising the API.

## Controls inventory

Above the body, the workflow tab bar shows `tab-automate` highlighted.

The top action band carries `btn-commands` (`Commands…`) and `btn-save-as` (`Save As…`) on the left, then the script-source row `execute-from-label` followed by `source-script` (radio, active) and `source-files` (radio), then `btn-start` (`Start`), `btn-pause-automate` (`Pause`), `btn-settings` (`Settings…`).

The middle body is the `script-editor` — a multi-line text input with a numbered gutter visible from line 1 through line 35. The script is empty in this photo.

Below the editor, `try-a-command` is a single-line input (`Try a command:` label, empty value).

The bottom pane carries `command-status` (`Command status: [Success] UpdateScratchpad`). The `[Success]` segment is tinted green, indicating the most recent command — `UpdateScratchpad` — succeeded.

The left margin carries `side-marker-automate` (vertical `AUTOMATE` text). The Messages panel and status bar persist from `set-up`.

## State variations

Visible in this photo: empty script; source = Script; last command succeeded (`[Success] UpdateScratchpad`); status-bar `PASS` from the previous run.

Other states this same screen will exhibit:

- Commands populated — the editor's line gutter would carry text on each line; the editor would scroll if past 35 lines.
- Source = Files — the editor would surface a file picker / file path readout instead of the inline editor; the Start button would consume the selected file.
- Command failed — `command-status` would carry a red `[Fail]` indicator with the failing command name. Not visible in this photo set.
- Pause active — `btn-pause-automate` would visually mode-shift.
- Commands… modal open — see `create-automation-commands` for the Create Automation Commands dialog with its six internal tabs.

## Visible text (verbatim)

`Commands…` · `Save As…` · `Execute commands from:` · `Script` · `Files` · `Start` · `Pause` · `Settings…`.

Line gutter: `1` through `35` (and into the partially-visible range).

`Try a command:`.

`Command status: [Success] UpdateScratchpad`.

Status bar: `Unsaved Changes` · `MeasServer(A,R)` · `0 Tests` · `PASS`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`automate.jpg`). Items below are uncertain:

- The `UpdateScratchpad` command name suggests an internal automation API verb that updates a scratchpad / staging area. The mapping from button click to API name is not on-screen.
- Whether `Try a command:` accepts the same syntax as the script editor, or a subset, is not derivable.
- The line gutter shows numbers 1-35; whether the editor wraps to a 36th line or scrolls is not visible.
- `Settings…` is read precisely but its sub-dialog is not captured in this photo set.
- Whether `Start` is disabled when the script is empty is not directly visible — the button looks enabled but the visual treatment is similar across enabled/disabled states for this Win32-style toolkit.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Automate tab, the script editor, the `Create Automation Commands` helper, and the automation command API surface).

## Source photo

Selected from `uploads/photos/`: **IMG_7018.jpg** — chosen for clarity (orthogonal framing, the full script gutter is visible, `Command status: [Success] UpdateScratchpad` is legible, no obstructions across the action band). There are no alternate Automate-tab body photos in this set; the Create Automation Commands modal screens (IMG_7020 – IMG_7024) are documented separately.
