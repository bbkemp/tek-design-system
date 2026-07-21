---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: limit-edit
screen_title: Current Limit Value
screen_type: dialog
image: limit-edit.jpg
source_photo: uploads/photos/photo-617_singular_display_fullPicture.jpeg
function_state: SOURCE VOLTAGE / LIMIT CURRENT (inferred from dialog title)
navigation_path: [Home, Current Limit Value]
parent_screens:
  - home
child_screens: []
controls:
  - id: dialog-title
    label: Current Limit Value
    type: indicator
    state: active
    action: Names the parameter being edited. Same shared keypad dialog as source-edit, retitled for the source compliance limit.
  - id: value-field
    label: "10.5000 µA"
    type: input
    state: active
    action: The limit value being edited, shown with digits and unit suffix inside a highlighted entry box; an underline cursor sits beneath the first digit. Updated by the keypad keys below.
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
    action: Second key of the bottom row, beside 0. Label blurred in this shot (and in photo-614); by SMU keypad convention likely +/- (sign toggle). Unverified.
  - id: key-decimal
    label: "."
    type: button
    state: enabled
    action: Decimal point entry.
  - id: key-engr
    label: Engr
    type: button
    state: enabled
    action: Engineering-notation / exponent entry (behavior inferred from label; requires manual confirmation).
  - id: key-back
    label: Back
    type: button
    state: enabled
    action: Backspace — deletes the last entered character (inferred from label and ← glyph).
  - id: key-clear
    label: Clear
    type: button
    state: enabled
    action: Clears the value field (inferred from label).
  - id: key-div10
    label: "/10"
    type: button
    state: enabled
    action: Divides the current value by ten (inferred from label).
  - id: key-mul10
    label: x10
    type: button
    state: enabled
    action: Multiplies the current value by ten (inferred from label).
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
    action: Applies the edited value and closes the dialog.
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
    action: Output-state LED. Green lit in this shot; color/state interpretation unverified.
---

# Current Limit Value — numeric keypad editor

## Purpose

The Current Limit Value dialog is the numeric editor for the source compliance / output limit. It opens over the Home screen when the user taps the limit tile (`source-limit` in `home.md`) and captures a new value via the 2450-EC's shared calculator-style keypad. The keypad anatomy — digit grid, sign/decimal keys, Engr/Back/Clear//10/x10 utilities, m/µ/n unit-prefix keys, Max/Min shortcuts, Cancel/OK commit — is identical to [source-edit](source-edit.md), the canonical corpus chunk for the shared keypad-editor pattern; this chunk documents the limit-editing instance and this photo's populated-value state.

## Controls inventory

The dialog occupies most of the LCD, floating over a dimmed, partially visible Home screen. Across the top, `dialog-title` (`Current Limit Value`) names the parameter. Directly below it, `value-field` (`10.5000 µA`) is a wide highlighted entry box showing the limit under edit; an underline cursor is visible beneath the first digit.

Below the entry box sits the keypad grid — see [source-edit](source-edit.md) for the canonical anatomy walkthrough. The central block is `keypad-digits` in four calculator rows: `7 8 9` / `4 5 6` / `1 2 3` / `0`, with `key-plus-minus` (label blurred in this shot) and `key-decimal` (`.`) completing the bottom row. The column right of the digits carries `key-engr` (`Engr`) on the top row and the unit-prefix keys `unit-milli` (`m`), `unit-micro` (`µ`), `unit-nano` (`n`) below it. The rightmost column holds `key-back` (`Back` ←), `key-clear` (`Clear`), `key-div10` (`/10`), and `key-mul10` (`x10`).

Flanking the keypad on the left are `btn-max` (`Max`) above `btn-min` (`Min`). The commit row sits at the bottom corners: `btn-cancel` (`Cancel`) at bottom-left, `btn-ok` (`OK`) at bottom-right.

The hardware bezel is identical to the Home screen. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob` at top, then `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the four-terminal banana jacks (`terminals`), and the green `output-led`.

## State variations

Visible in this photo: parameter = current limit, value = `10.5000 µA` with the entry cursor under the first digit — a populated mid-edit state (contrast with the zero-value rest state of the same keypad in photo-614 / [source-edit](source-edit.md)).

Other states this same dialog layout will exhibit:

- **Different parameter, same keypad** — the identical keypad component appears titled `Voltage Source Value` ([source-edit](source-edit.md), photo-614) and — per other flows in `uploads/photos/` — as delay-edit, position-edit, and nplcs-edit (documented separately by parallel passes; referenced by screen_id). Title, value units, and unit-prefix keys track the parameter.
- **Function change upstream** — when the instrument sources current instead of voltage, the compliance limit becomes a voltage limit and this dialog's title and units change accordingly (inferred from SMU convention; unverified).
- **Min/Max snap** — tapping `btn-max` or `btn-min` should replace the value with the parameter's bound (inferred, unverified).

## Visible text (verbatim)

Dialog title: `Current Limit Value`.

Entry field: `10.5000 µA`.

Keypad digits: `7` `8` `9` · `4` `5` `6` · `1` `2` `3` · `0`.

Utility / unit keys: `Engr` · `Back` · `m` · `Clear` · `µ` · `/10` · `n` · `x10` · `.`.

Left shortcuts: `Max` · `Min`.

Commit: `Cancel` · `OK`.

Background (partially visible Home screen fragments behind the dialog): `Lo…` (Local, status bar) · `ME…` (measure header) · `…ERO` (AZERO indicator) — occluded, not fully transcribable.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

This is the sharpest capture of the shared keypad component in `uploads/photos/`; all keypad labels except one are legible in the 1600 px downscale. Items to check against a higher-resolution capture or the manual:

- `key-plus-minus` label — the second key of the bottom row is blurred in this shot (and in photo-614); "sign toggle +/-" is SMU-keypad convention, not observation.
- `btn-max` / `btn-min`, `key-engr`, `key-div10`, `key-mul10` behavior — inferred from labels; unconfirmed.
- Entry path — reached by tapping the `source-limit` tile on Home (per `home.md`'s control action); the tap itself is not captured in a photo sequence.
- Value relationship to Home — `home.md` shows the limit tile as `105.000 µA` (itself flagged ambiguous there); this dialog shows `10.5000 µA`. Different session state or mid-edit value — the discrepancy is state, not a transcription conflict, but worth noting for anyone reconciling the two chunks.
- Whether `btn-exit` (hardkey) or a tap outside the dialog also dismisses it — not derivable from this shot.
- **Shared keypad pattern** — the identical keypad editor is documented canonically at [source-edit](source-edit.md) (this pass) and also appears as delay-edit, position-edit, and nplcs-edit (documented separately by parallel passes — referenced by plain screen_id; links may not exist yet at time of writing).
- Background Home-screen fragments are heavily occluded; only the three fragments listed under Visible text are attempted.
- `software_version` — not visible from this screen.

## Manual references

- **`Touchscreen display overview`** ([`docs/quickstart/touchscreen-and-home-screen.md`](../docs/quickstart/touchscreen-and-home-screen.md), `quickstart` pp. 15 to 17) — the SOURCE swipe screen "you can set the source range, source value, and source limit" — the source-limit control whose tap opens this editor.
- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the Home source row (`Source +000.000 mV` · `Limit 1.06000 mA`) whose Limit tile launches this dialog.
- **`Connections for testing`** ([`docs/quickstart/connections-for-testing.md`](../docs/quickstart/connections-for-testing.md), `quickstart` pp. 22 to 23) — documents the sibling Source Value instance of this same numeric-editor dialog family (step 5, "The Current Source Value dialog box is displayed"), confirming the tile-tap-to-dialog pattern.

Pending: no processed manual section documents the keypad dialog itself (key-by-key reference, Engr//10/x10 semantics, limit-range bounds). Manual pairing for the keypad anatomy remains pending until the relevant reference-manual section is processed.

## Source photo

Selected from `uploads/photos/`: **photo-617_singular_display_fullPicture.jpeg** — sharp focus on the LCD, every keypad label legible except the blurred +/- key, full bezel visible including the right-side hardkey labels. A hand is in frame below the bezel but does not obstruct the LCD.

- `photo-614` — same keypad component titled Voltage Source Value; motion-blurred, used as the canonical photo for [source-edit](source-edit.md). This photo (617) serves as the legibility cross-reference for that chunk's soft keys.
