---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: math-settings
screen_title: Math Settings
screen_type: dialog
image: math-settings.jpg
source_photo: uploads/photos/photo-715_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Calculation Settings, Math Settings]
parent_screens:
  - calculation-settings
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: dialog-title
    label: Math Settings
    type: indicator
    state: active
    action: Dialog title, centered at the top of the modal.
  - id: math-format
    label: Percent
    type: dropdown
    state: enabled
    action: Math transform applied to readings. Currently Percent; tapping presumably opens a format picker (other formats not derivable from this shot).
  - id: zero-reference
    label: 1.000A
    type: input
    state: enabled
    action: Reference value for the Percent math computation. Presumably opens a numeric editor on tap (same keypad anatomy as nplcs-edit / source-edit); unphotographed.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Commits the math settings and closes the dialog, returning to Calculation Settings.
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home readout screen.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Opens the main settings tree.
  - id: btn-quickset
    label: QUICKSET
    type: hardkey
    state: enabled
    action: Opens the quick-preset / function picker.
  - id: btn-help
    label: HELP
    type: hardkey
    state: enabled
    action: Context help for the active screen or control.
  - id: usb-port
    label: ""
    type: port
    state: enabled
    action: Front USB-A port — firmware updates, file transfer, scripts.
  - id: btn-power
    label: POWER
    type: hardkey
    state: enabled
    action: Instrument power on/off.
  - id: control-knob
    label: ""
    type: knob
    state: enabled
    action: Rotary navigation and value adjust; push-to-select.
  - id: btn-enter
    label: ENTER
    type: hardkey
    state: enabled
    action: Confirm selection.
  - id: btn-exit
    label: EXIT
    type: hardkey
    state: enabled
    action: Cancel or back — presumably dismisses the dialog.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle measure / source function.
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger or start the configured trigger model.
  - id: terminals
    label: ""
    type: terminal
    state: enabled
    action: Front-panel banana jacks — FORCE HI/LO, SENSE HI/LO. Out of frame in this photo; carried from the standard front panel.
  - id: output-led
    label: ""
    type: indicator
    state: active
    action: Output-state LED. Green, lit in this shot; exact convention unverified.
---

# Math Settings

## Purpose

Math Settings is the modal configuration dialog for the Math row of the Calculation Settings screen. It defines *which* math transform is applied to readings (`Math Format`, here Percent) and the reference the transform computes against (`Zero Reference`, here 1.000 A). The parent Calculation Settings screen — its `CALCULATION SETTINGS` / `Function: SVMI` header and dimmed settings rows — remains visible behind the modal. A single OK button commits and returns to the parent.

## Controls inventory

The modal is a bordered panel centered on the LCD, with `dialog-title` (`Math Settings`) across the top. Two labeled rows follow: `math-format` (`Math Format`, current value `Percent`) and `zero-reference` (`Zero Reference`, current value `1.000A`). Each row has a small explanatory subtitle beneath its label, too soft to transcribe in this shot. `btn-ok` sits centered at the bottom of the panel. There is no visible Cancel button — dismissal without saving is presumably via the EXIT hardkey (unverified).

Behind the modal, the dimmed parent screen shows the `CALCULATION SETTINGS` header, `Function: SVMI`, and the truncated left edges of the Filter, Math, and Limit rows.

The **hardware bezel** is the standard 2450-EC front panel. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the banana jacks (`terminals`, out of frame here), and `output-led` (green, lit).

## State variations

Visible in this photo: Math Format = Percent, Zero Reference = 1.000 A, function = SVMI.

Other states this dialog will exhibit (by construction, unphotographed):

- **Math Format alternatives** — tapping `math-format` presumably offers other transforms (on the base 2450, mx+b and reciprocal are typical); the picker and option list are unverified for the EC firmware.
- **Zero Reference units** — the reference tracks the measure function's units; with a different active function the value would carry different units.

## Visible text (verbatim)

Dialog: `Math Settings` · `Math Format` · `Percent` · `Zero Reference` · `1.000A` · `OK`.

Background header (dimmed): `CALCULATION SETTINGS` · `Function: SVMI`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`math-settings.jpg`) and a full-resolution crop of the LCD. Uncertain items:

- `zero-reference` value — read as `1.000A`; the decimal digits are soft and could plausibly be `1.000 A` with more precision hidden by blur.
- Row subtitles under `Math Format` and `Zero Reference` — present but not legible; not transcribed.
- Dismissal without saving — no Cancel button is visible; the EXIT-hardkey assumption is unverified.
- `math-format` picker contents — the alternatives to Percent are inferred from base-2450 behavior, not observed.
- Whether this dialog is opened by the Math row's gear icon or its state button on Calculation Settings is not derivable from stills (flagged on the parent chunk too).
- Hardware bezel — terminals are out of frame; bezel entries carried from the standard front panel (`hardware/front-panel.md`).

## Manual references

> Pending. Manual will be paired in a later pass (2450-EC User's Manual, sections covering math / percent calculations for measurements).

## Source photo

Selected from `uploads/photos/`: **photo-715_singular_display_fullPicture.jpeg** — the only shot of the Math Settings dialog; sharp enough to read both setting values, full modal visible. Disposition note: an earlier provisional pass of `index.md` labeled this photo as the Calculation Settings screen itself; the cluster pass corrected that — photo-715 shows the Math sub-dialog, and the underlying Calculation Settings screen is documented from `photo-709` (`calculation-settings`).
