---
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-dut-comments
screen_title: Setup › DUT — Comments popup
screen_type: dialog
image: setup-dut-comments.jpg
source_photo: uploads/photos/2. Setup-DUT_Comments popup.png
navigation_path: [Setup, DUT, Comments]
parent_screens: [setup-dut]
child_screens: []
applies_to: [tek-express]
related_screens: [setup-dut, setup-dut-session-browser]
related_hardware: []
related_modules: []
controls:
  - id: dialog-title
    label: Comments
    type: indicator
    state: active
    action: Dialog title bar. Floating dialog over the Setup › DUT screen.
  - id: dialog-close
    label: ""
    type: button
    state: enabled
    action: Standard close (X) in dialog title bar. Cancels and dismisses the dialog.
  - id: comments-textarea
    label: ""
    type: input
    state: enabled
    action: Multi-line text area for free-form comment about the current DUT / session. Current value "General Comment - AppEmulator".
  - id: btn-clear
    label: Clear
    type: button
    state: enabled
    action: Clears the comments text area.
  - id: btn-copy
    label: Copy
    type: button
    state: enabled
    action: Copies the comments text to the clipboard.
  - id: btn-paste
    label: Paste
    type: button
    state: enabled
    action: Pastes clipboard contents into the comments text area.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Discards changes and closes the dialog.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Saves the comments to the current session and closes the dialog.
---

# Setup › DUT — Comments popup

## Purpose

Floating dialog over the Setup › DUT screen for attaching a free-form text comment to the current DUT / session. Triggered from an affordance adjacent to the DUT ID field (likely the `dut-id-edit` pencil icon documented in [setup-dut.md](./setup-dut.md), though the audit PDF describes this dialog without explicitly stating the launch path). The comment is persisted with the session and surfaces in the Run/Config Sessions browser ([setup-dut-session-browser.md](./setup-dut-session-browser.md)) under the "Comment" column.

## Controls inventory

The dialog is a small floating window with `dialog-title` ("Comments") and `dialog-close` (X) in its title bar. The main body is `comments-textarea` — a multi-line text area showing "General Comment - AppEmulator" in this screenshot. Five buttons line the bottom: `btn-clear`, `btn-copy`, `btn-paste`, `btn-cancel`, `btn-ok`. The Clear/Copy/Paste trio operates on the textarea contents; Cancel and OK control dialog dismissal vs. commit. The host application's persistent chrome (title bar, side-nav, right-rail, status bar) remains visible behind the dialog but is not interactive while the dialog is open.

## State variations

Visible in this photo: comment text is the default placeholder-style "General Comment - AppEmulator." Other states:

- **Empty textarea** — fresh-open state before the user types anything.
- **Long comment** — wraps within the fixed-width textarea; vertical scroll engages.
- **Background interaction blocked** — when the dialog is open, the underlying Setup › DUT form is non-interactive (modal-style behaviour, even though no dimmed overlay is visible).

## Visible text (verbatim)

Dialog: `Comments` · `General Comment - AppEmulator`.

Buttons (left-to-right): `Clear` · `Copy` · `Paste` · `Cancel` · `OK`.

Background (chrome, partial): `TekExpress AppEmulator — (9346)*` · `Setup` · `Status` · `Results` · `Plots` · `Reports` · `Use pre-recorded waveform files` · `Session : 9346` · `Vertical Offset` · `250V` · `Signal Validation Threshold` · `300mV` · `Execution Settings` · `Analyze on Golden Waveforms` · `On` · `Show Model Information In Popup` · `On` · `Start` · `Pause` · `Not Intended For Public Release` · `Ready.`

## Confidence notes

- Launch path for this dialog is not directly observable in the screenshot — the `dut-id-edit` pencil icon on the Setup › DUT screen is the most likely trigger, but other affordances (a right-click context menu, or a button hidden by the dialog itself) could also drive it. Verify against the live build.
- Whether the dialog is modal (blocks all other interaction) or modeless (lets the user interact with the host while open) is not clearly indicated. The audit PDF doesn't enumerate this dialog as a separate screen; it is inferred from the screenshot.

## Manual references

> Pending. The audit PDF processed via `document-pdf` may reference this popup under the Setup › DUT screen entry; back-link will land in PR C.

## Source photo

`uploads/photos/2. Setup-DUT_Comments popup.png`. Companion to the Setup › DUT format-lock screenshot — same window, with the Comments dialog visible.
