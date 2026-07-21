---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: calculation-settings
screen_title: Calculation Settings
screen_type: config
image: calculation-settings.jpg
source_photo: uploads/photos/photo-709_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Calculation Settings]
parent_screens:
  - menu
child_screens:
  - math-settings
  - filter-picker
related_hardware:
  - front-panel
controls:
  - id: header-title
    label: CALCULATION SETTINGS
    type: indicator
    state: active
    action: Screen title, fixed in the header bar.
  - id: header-function
    label: "Function: SVMI"
    type: indicator
    state: active
    action: Shows which function the calculation settings on this screen apply to. SVMI reads as an EC-application function code (plausibly source-voltage / measure-current); interpretation unverified.
  - id: rel-state
    label: "On"
    type: button
    state: active
    action: Rel (relative offset) state selector. Row subtitle reads "Off, On, or Acquire", implying a three-option picker opens on tap — analogous to filter-picker, but the Rel picker itself is unphotographed.
  - id: rel-value
    label: 7.9485pA
    type: input
    state: enabled
    action: Rel offset value applied to measurements. Presumably opens a numeric editor on tap (same keypad anatomy as nplcs-edit / source-edit); unphotographed.
  - id: filter-state
    label: "On"
    type: button
    state: active
    action: Filter on/off selector. Tapping opens the Off / On / Cancel picker documented as filter-picker (photo-713).
  - id: filter-config
    label: ""
    type: button
    state: enabled
    action: Gear icon beside the Filter state button. Presumably opens filter configuration (type, count); target dialog unphotographed.
  - id: math-state
    label: "On"
    type: button
    state: active
    action: Math on/off selector. Presumably opens an Off / On picker analogous to filter-picker; unphotographed.
  - id: math-config
    label: ""
    type: button
    state: enabled
    action: Gear icon beside the Math state button. Presumed launcher of the Math Settings dialog (math-settings, photo-715) — whether the gear or the state button opens it is not derivable from these stills.
  - id: limit1-state
    label: "Off"
    type: button
    state: enabled
    action: Limit 1 test on/off selector. Presumably opens an Off / On picker; unphotographed.
  - id: limit1-config
    label: ""
    type: button
    state: enabled
    action: Gear icon beside the Limit 1 state button. Presumably opens Limit 1 configuration; unphotographed.
  - id: limit2-row
    label: Limit 2
    type: button
    state: enabled
    action: Limit 2 row — clipped by the frame bottom in this photo. Row label legible; its state value and gear icon are cut off and unverified.
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home readout screen.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Opens the main settings tree (this screen's parent menu).
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
    action: Cancel or back — returns toward the parent menu.
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
    action: Output-state LED. A green LED is visible at the right bezel edge; exact convention unverified.
---

# Calculation Settings

## Purpose

The Calculation Settings screen is the configuration hub for post-measurement processing on the 2450-EC: relative offset (Rel), averaging filter, math transforms, and the two limit tests. Each row pairs a named setting with its current state and, where deeper configuration exists, a gear icon that opens a sub-dialog. The header pins the screen to the active function (`Function: SVMI`), meaning the settings shown are scoped per-function. It is reached from the main MENU (the manual's Menu grid lists **Calculations** under the **Measure** column); the MENU screen itself is not yet photographed and is pending in this corpus.

## Controls inventory

The **header bar** spans the top of the LCD: `header-title` (`CALCULATION SETTINGS`) on the left, `header-function` (`Function: SVMI`) on the right.

The body is a **stacked settings list**, one row per calculation feature, each with a small explanatory subtitle under its name. Top row: `rel-state` (`Rel`, subtitle "Off, On, or Acquire", currently `On`) sits left of `rel-value` (`Rel Value`, subtitle indicating the offset is applied to measurements, currently `7.9485pA`) — the only row with two value controls side by side. Below it, three structurally identical rows: `filter-state` (`Filter`, `On`) with `filter-config` gear, `math-state` (`Math`, `On`) with `math-config` gear, and `limit1-state` (`Limit 1`, `Off`) with `limit1-config` gear. A fifth row, `limit2-row` (`Limit 2`), is clipped by the bottom of the frame; its state and gear are not readable in this photo.

The **hardware bezel** is the standard 2450-EC front panel. Left side, top-to-bottom: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, then `usb-port` and `btn-power`. Right side: `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger`, the banana jacks (`terminals`, out of frame here), and `output-led`.

## State variations

Visible in this photo: Rel = On with a 7.9485 pA offset, Filter = On, Math = On, Limit 1 = Off, Limit 2 = unreadable, function = SVMI.

Other states this screen exhibits across the photo set and by construction:

- **Filter picker overlay** — tapping `filter-state` opens the Off / On / Cancel modal documented as `filter-picker` (`uploads/photos/photo-713_…jpeg`).
- **Math Settings overlay** — the Math row's configuration dialog (Math Format / Zero Reference) is documented as `math-settings` (`uploads/photos/photo-715_…jpeg`).
- **Rel / Limit pickers and editors** — the Rel, Limit 1, and Limit 2 rows presumably open analogous pickers, numeric editors, and config dialogs; none are photographed and no screen_ids are assigned yet.
- **Function scoping** — with a different active function in the header, each row's state and values would reflect that function's own calculation settings.

## Visible text (verbatim)

Header: `CALCULATION SETTINGS` · `Function: SVMI`.

Rel row: `Rel` · `Off, On, or Acquire` · `On` · `Rel Value` · `7.9485pA`.

Filter row: `Filter` · `Off or On` · `On`.

Math row: `Math` · `Off or On` · `On`.

Limit rows: `Limit 1` · `Off or On` · `Off` · `Limit 2`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`.

Bezel labels (right): `EXIT` · `FUNCTION` · `TRIGGER` (ENTER partially cropped).

## Confidence notes

Transcriptions verified against the 1600 px downscale (`calculation-settings.jpg`) and a full-resolution crop of the LCD. This photo is low-light and slightly soft; items below are uncertain:

- `rel-value` — read as `7.9485pA`; the middle digits are at the limit of legibility and could plausibly differ (e.g. `7.9465pA`). Verify against a sharper capture.
- Row subtitles — `Off, On, or Acquire` (Rel) and `Off or On` (Filter / Math / Limit 1) are read from small, soft text; the Rel Value subtitle is legible only as an "offset applied to measurements" phrase and is not transcribed verbatim.
- `limit2-row` — the row is clipped at the frame bottom; its current state (On/Off) and gear icon are unverified.
- Which control opens `math-settings` — the gear icon is the presumed launcher (state buttons appear to open Off/On pickers, per photo-713), but the actual tap target is not derivable from stills.
- `header-function` `SVMI` semantics — read verbatim; the source-voltage/measure-current interpretation is inference, unconfirmed against the manual.
- `parent_screens: [menu]` — the main MENU screen is unphotographed and pending in this corpus; the parent link is based on the manual's Menu grid (Measure > Calculations), not on a photographed navigation sequence.
- Hardware bezel — right-side terminals and part of the knob/ENTER key are out of frame; bezel entries are carried from the standard front panel (`hardware/front-panel.md`).

## Manual references

- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the Menu screen grid lists **Calculations** under the **Measure** column; that launcher is the presumed navigation path into this screen. The manual chunk does not describe the Calculation Settings screen contents themselves.

Otherwise: manual pairing pending (2450-EC User's Manual sections covering Rel, filter, math, and limit-test configuration are not yet processed into the corpus).

## Source photo

Selected from `uploads/photos/`: **photo-709_singular_display_fullPicture.jpeg** — the only shot of the Calculation Settings screen without a modal overlay; LCD readable despite low ambient light and the bottom row being clipped by the frame. Related candidates: `photo-713` (Filter picker overlaid on this screen — canonical for `filter-picker`), `photo-715` (Math Settings dialog overlaid — canonical for `math-settings`).
