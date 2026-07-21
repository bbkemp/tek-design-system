---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: source-edit
screen_title: Voltage Source Value
screen_type: dialog
image: source-edit.jpg
source_photo: uploads/photos/photo-614_singular_display_fullPicture.jpeg
function_state: SOURCE VOLTAGE (inferred from dialog title)
navigation_path: [Home, Voltage Source Value]
parent_screens:
  - home
child_screens: []
controls:
  - id: dialog-title
    label: Voltage Source Value
    type: indicator
    state: active
    action: Names the parameter being edited. The same keypad dialog appears with other titles for other numeric parameters (see State variations).
  - id: value-field
    label: "+00.0000 mV"
    type: input
    state: active
    action: The value being edited, shown with sign, digits, and unit suffix inside a highlighted entry box. Updated by the keypad keys below.
  - id: btn-max
    label: Max
    type: button
    state: enabled
    action: Sets the value field to the maximum allowed for this parameter (behavior inferred from label; requires manual confirmation).
  - id: btn-min
    label: Min
    type: button
    state: enabled
    action: Sets the value field to the minimum allowed for this parameter (behavior inferred from label; requires manual confirmation).
  - id: keypad-digits
    label: "0 1 2 3 4 5 6 7 8 9"
    type: button
    state: enabled
    action: Ten individual digit keys arranged in a four-row grid (7-8-9 / 4-5-6 / 1-2-3 / 0). Tapping appends the digit to the value field.
  - id: key-plus-minus
    label: "(unverified)"
    type: button
    state: enabled
    action: Second key of the bottom row, beside 0. Label not legible in this shot or in photo-617; by SMU keypad convention likely +/- (sign toggle). Unverified.
  - id: key-decimal
    label: "."
    type: button
    state: enabled
    action: Decimal point entry. Label read from photo-617 (limit-edit); not independently legible in this shot.
  - id: key-engr
    label: Engr
    type: button
    state: enabled
    action: Engineering-notation / exponent entry (behavior inferred from label; requires manual confirmation). Label read from photo-617; not independently legible in this shot.
  - id: key-back
    label: Back
    type: button
    state: enabled
    action: Backspace — deletes the last entered character (inferred from label and ← glyph). Label read from photo-617; not independently legible in this shot.
  - id: key-clear
    label: Clear
    type: button
    state: enabled
    action: Clears the value field (inferred from label). Label read from photo-617; not independently legible in this shot.
  - id: key-div10
    label: "/10"
    type: button
    state: enabled
    action: Divides the current value by ten (inferred from label). Label read from photo-617; not independently legible in this shot.
  - id: key-mul10
    label: x10
    type: button
    state: enabled
    action: Multiplies the current value by ten (inferred from label). Label read from photo-617; not independently legible in this shot.
  - id: unit-milli
    label: m
    type: button
    state: enabled
    action: Applies the milli (m) unit prefix to the entered value.
  - id: unit-micro
    label: "µ"
    type: button
    state: enabled
    action: Applies the micro (µ) unit prefix to the entered value.
  - id: unit-nano
    label: n
    type: button
    state: enabled
    action: Applies the nano (n) unit prefix to the entered value.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without applying the edited value.
  - id: btn-ok
    label: OK
    type: button
    state: enabled
    action: Applies the edited value and closes the dialog. Position (bottom-right) read from photo-617; not independently legible in this shot.
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
    action: Cancel or back.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle measure / source function (V / I / R / P).
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger or start the configured trigger model.
  - id: terminals
    label: ""
    type: terminal
    state: enabled
    action: Front-panel banana jacks — FORCE HI/LO, SENSE HI/LO.
  - id: output-led
    label: ""
    type: indicator
    state: active
    action: Output-state LED. Color/state interpretation unverified in this shot.
---

# Voltage Source Value — numeric keypad editor

## Purpose

The Voltage Source Value dialog is the numeric editor for the programmed source level. It opens over the Home screen when the user taps the source-level tile (`source-level` in `home.md`) and captures a new value via an on-screen calculator-style keypad: digit keys, sign/decimal entry, engineering-notation and scale keys, unit-prefix keys, Min/Max shortcuts, and Cancel/OK commit buttons. This is the **canonical corpus chunk for the 2450-EC's shared numeric keypad editor** — the identical keypad component reappears under other titles for other numeric parameters ([limit-edit](limit-edit.md), delay-edit, position-edit, nplcs-edit); those chunks document their own value/context and reference this one for the shared anatomy.

## Controls inventory

The dialog occupies most of the LCD, floating over a dimmed, partially visible Home screen. Across the top, `dialog-title` (`Voltage Source Value`) names the parameter. Directly below it, `value-field` (`+00.0000 mV`) is a wide highlighted entry box showing the value under edit with its sign and unit suffix.

Below the entry box sits the keypad grid. The central block is `keypad-digits` — four rows of digit keys laid out calculator-style: `7 8 9` / `4 5 6` / `1 2 3` / `0` — with `key-plus-minus` (label unverified, likely sign toggle) and `key-decimal` (`.`) completing the bottom row. The column immediately right of the digits carries the unit-prefix keys, top to bottom: (top row shares with) `key-engr` (`Engr`), then `unit-milli` (`m`), `unit-micro` (`µ`), and `unit-nano` (`n`). The rightmost column holds the editing utilities: `key-back` (`Back` ←), `key-clear` (`Clear`), `key-div10` (`/10`), and `key-mul10` (`x10`).

Flanking the keypad on the left are the two range shortcuts, `btn-max` (`Max`) above `btn-min` (`Min`). The commit row sits at the bottom corners: `btn-cancel` (`Cancel`) at bottom-left, `btn-ok` (`OK`) at bottom-right.

The hardware bezel is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo: parameter = voltage source level, value = `+00.0000 mV` (matching the `source-level` tile on the Home screen it was opened from), no digits yet entered.

Other states this same dialog layout will exhibit:

- **Different parameter, same keypad** — the identical keypad component appears titled `Current Limit Value` ([limit-edit](limit-edit.md), photo-617), and — per other flows in `uploads/photos/` — as delay-edit, position-edit, and nplcs-edit (documented separately by parallel passes; referenced by screen_id). Title, value units, and available unit-prefix keys track the parameter being edited.
- **Mid-entry** — as digits are typed, the value field updates; photo-617 shows an underline cursor beneath the first digit of a populated value.
- **Function change upstream** — when the instrument is configured to source current instead of voltage, the same tile-tap opens this dialog titled `Current Source Value` (per the quickstart's verify-measurement procedure), with A-family units.
- **Min/Max snap** — tapping `btn-max` or `btn-min` should replace the value with the parameter's bound (inferred, unverified).

## Visible text (verbatim)

Dialog title: `Voltage Source Value`.

Entry field: `+00.0000 mV`.

Keypad digits: `7` `8` `9` · `4` `5` `6` · `1` `2` `3` · `0`.

Unit / utility keys legible in this shot: `m` · `µ` · `n`. (Right-column utility keys `Engr` · `Back` · `Clear` · `/10` · `x10` and the `.` key are transcribed from photo-617 of the same keypad component — not independently legible here; see Confidence notes.)

Left shortcuts: `Max` · `Min`.

Commit: `Cancel`. (`OK` position confirmed from photo-617; not independently legible here.)

Background (partially visible Home screen fragments behind the dialog): status-bar and measure-region fragments, occluded — not fully transcribable.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right, soft in this shot): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

The source photo is motion-blurred; the title, entry value, digit keys, unit-prefix keys, and Max/Min/Cancel are legible, but several keys sit below the legibility limit and are confirmed only by cross-reference to photo-617 (the same keypad component as `limit-edit`). Items to check against a higher-resolution capture or the manual:

- Right-column utility keys (`Engr`, `Back`, `Clear`, `/10`, `x10`), the `.` key, and `OK` — not independently legible in photo-614; labels and positions taken from photo-617, which shows the identical keypad layout sharply.
- `key-plus-minus` label — not legible in **either** photo (blurred in both shots); "sign toggle" is SMU-keypad convention, not observation.
- `btn-max` / `btn-min` behavior — inferred from labels (snap to parameter bounds); unconfirmed.
- `key-engr`, `key-div10`, `key-mul10` behavior — inferred from labels; unconfirmed.
- Entry path — reached by tapping the `source-level` tile on Home (per `home.md`'s control action and the quickstart's "Select Source… dialog box is displayed" procedure); the tap itself is not captured in a photo sequence.
- Whether `btn-exit` (hardkey) or a tap outside the dialog also dismisses it — not derivable from this shot.
- **Shared keypad pattern** — this same keypad editor appears as limit-edit ([limit-edit](limit-edit.md), this pass) and as delay-edit, position-edit, and nplcs-edit (documented separately by parallel passes — referenced by plain screen_id; links may not exist yet at time of writing). This chunk is the canonical anatomy reference for the pattern.
- Background Home-screen fragments are too occluded/blurred to transcribe; not attempted.
- `software_version` — not visible from this screen.

## Manual references

- **`Connections for testing`** ([`docs/quickstart/connections-for-testing.md`](../docs/quickstart/connections-for-testing.md), `quickstart` pp. 22 to 23) — step 5 of the verify-measurement procedure: "Select **Source** (at the bottom of the home screen). The Current Source Value dialog box is displayed. Enter **10 mA**." That is this same numeric-editor dialog in its current-source variant — confirms the tile-tap entry path from Home and the enter-value workflow.
- **`Touchscreen display overview`** ([`docs/quickstart/touchscreen-and-home-screen.md`](../docs/quickstart/touchscreen-and-home-screen.md), `quickstart` pp. 15 to 17) — the SOURCE swipe screen "you can set the source range, source value, and source limit" — the on-screen controls whose tap opens this editor.
- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the Home source row (`Source +000.000 mV` · `Limit 1.06000 mA`) whose Source tile launches this dialog.

Pending: no processed manual section documents the keypad dialog itself (key-by-key reference, Engr//10/x10 semantics). Manual pairing for the keypad anatomy remains pending until the relevant reference-manual section is processed.

## Source photo

Selected from `uploads/photos/`: **photo-614_singular_display_fullPicture.jpeg** — the only candidate in `uploads/photos/` showing the Voltage Source Value dialog. A hand is in frame below the bezel but does not obstruct the LCD; the shot carries motion blur, which limits legibility of the right-hand keypad columns (mitigated by cross-reference to photo-617, the sharp shot of the identical keypad as `limit-edit`).

- `photo-617` — same keypad component but titled Current Limit Value; used as the canonical photo for [limit-edit](limit-edit.md) and as the legibility cross-reference for this chunk's soft keys.
