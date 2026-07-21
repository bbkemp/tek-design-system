---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: output-off-mode
screen_title: Output Off picker
screen_type: dialog
image: output-off-mode.jpg
source_photo: uploads/photos/photo-629_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, Output Off]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-high-impedance
    label: High Impedance
    type: button
    state: enabled
    action: Output-off state that opens the output relay, disconnecting the instrument from the load.
  - id: opt-normal
    label: Normal
    type: button
    state: active
    action: Default output-off state. Shown with a white outline — the current selection.
  - id: opt-zero
    label: Zero
    type: button
    state: enabled
    action: Zero output-off state.
  - id: opt-guard
    label: Guard
    type: button
    state: enabled
    action: Guard output-off state.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the output-off state.
---

# Output Off picker

## Purpose

Modal picker for the instrument's output-off state — what the output terminals do when the output is turned off. It is the dialog behind the **Output Off** row of [Source Settings](source-settings.md) (`row-output-off`). The EC user manual's setup procedure directs users through this exact dialog to select High Z before connecting a test cell.

## Controls inventory

Centered dialog titled `Output Off` over the dimmed Source Settings grid, using the shared picker anatomy (cf. [source-range](source-range.md), [interlock](interlock.md)). Four option buttons are stacked vertically: `opt-high-impedance` (`High Impedance`), `opt-normal` (`Normal`, white-outlined as the current selection), `opt-zero` (`Zero`), `opt-guard` (`Guard`), with `btn-cancel` (`Cancel`) at the bottom. Undimmed value buttons from the Source Settings right column (`Off`, `On`, `Auto`) remain visible beside the dialog. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; only `Normal` selected was photographed. The parent screen's caption for this row ("High Z, Normal, Zero, or Guard") abbreviates `High Impedance` as `High Z` — the manual uses both forms.

## Visible text (verbatim)

Dialog: `Output Off` · `High Impedance` · `Normal` · `Zero` · `Guard` · `Cancel`.

Background (Source Settings, dimmed): `SOURCE SETTINGS` · `Function: SVMI` · `Range` · `Output Off` · `Overvoltage Protection Limit` · `Interlock` · `Off` · `On` · `Auto`.

## Confidence notes

- All four option labels are legible in the downscale; `Zero` and `Guard` are dimmer (unselected, lower row) but read at good confidence.
- Behavioral descriptions of `Zero` and `Guard` states are not derivable from the photo and are deliberately left minimal; the High Impedance description comes from the paired manual chunk, not the screen.
- Tap-to-apply vs. ENTER-to-confirm not observable from a still; inferred from the shared picker pattern.

## Manual references

- **`Getting started`** ([`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), `user-manual` pp. 1-2 to 1-6) — "Select the high-impedance, output-off state": MENU → Source **Settings** → **Output Off** → choose **High Z**; explains that High Z opens the output relay and disconnects the instrument from the load, and notes the possible measurement-with-output-off notification dialog.

## Source photo

Selected from `uploads/photos/`: **photo-629_singular_display_fullPicture.jpeg** — the only shot of this dialog. All options legible; hand below the bezel, not over the LCD.
