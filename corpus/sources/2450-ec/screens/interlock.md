---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: interlock
screen_title: Interlock picker
screen_type: dialog
image: interlock.jpg
source_photo: uploads/photos/photo-632_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, Interlock]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-off
    label: "Off"
    type: button
    state: active
    action: Interlock enforcement off — output not gated by the rear-panel interlock signal; nominal output limited to ±42 V when the interlock is not asserted. Shown with a white outline — the current selection.
  - id: opt-on
    label: "On"
    type: button
    state: enabled
    action: Interlock enforcement on — output state tied to the rear-panel interlock signal.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the setting.
---

# Interlock picker

## Purpose

Modal picker for the safety-interlock setting. It is the dialog behind the **Interlock** row of [Source Settings](source-settings.md) (`row-interlock`). The quick-start guide documents this exact path (MENU → Source Settings → set Interlock to ON or OFF); note the EC user manual explicitly warns **not** to activate the interlock when using the electrochemistry kit.

## Controls inventory

Small centered dialog titled `Interlock` over the dimmed Source Settings grid — the shared picker anatomy (cf. [output-off-mode](output-off-mode.md), [high-capacitance](high-capacitance.md)). Two option buttons stacked vertically: `opt-off` (`Off`, white-outlined as the current selection) and `opt-on` (`On`), with `btn-cancel` (`Cancel`) at the bottom. Undimmed value buttons from the Source Settings right column (`Off`, `On`, `Auto`) remain visible beside the dialog. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; only `Off` selected was photographed — consistent with the EC-kit guidance to leave the interlock off, and with the parent screen's `Off` value button.

## Visible text (verbatim)

Dialog: `Interlock` · `Off` · `On` · `Cancel`.

Background (Source Settings, dimmed): `SOURCE SETTINGS` · `Function: SVMI` · `Range` · `Output Off` · `Overvoltage Protection Limit` · `Interlock` · `Off` · `High` · `Off` · `On` · `Auto` · `Off or On`.

## Confidence notes

- All three dialog labels are legible at good confidence; this is one of the cleaner captures in the batch.
- The behavioral descriptions in `controls[]` (±42 V limiting, output gating) come from the paired quickstart chunk, not the photo — the photo shows labels only.
- Tap-to-apply vs. ENTER-to-confirm not observable; inferred from the shared picker pattern.

## Manual references

- **`Wiring the interlock`** ([`docs/quickstart/wiring-the-interlock.md`](../docs/quickstart/wiring-the-interlock.md), `quickstart` pp. 10 to 12) — the full behavior matrix for Interlock Off vs. On (output limiting to ±42 V, INTERLOCK indicator, output turn-off on state change) and the change procedure that opens this dialog: MENU → **Source Settings** → set Interlock to **ON** or **OFF**.
- **`Introduction`** ([`docs/user-manual/introduction.md`](../docs/user-manual/introduction.md), `user-manual` Section 1) — ⚠ EC-kit warning: "This kit is not intended to be used with a SMU interlock enabled… do not activate the Keithley Instruments 2450, 2460, or 2461 interlock." Governs EC use of this setting.

## Source photo

Selected from `uploads/photos/`: **photo-632_singular_display_fullPicture.jpeg** — the only shot of this dialog. Sharp, all labels legible, hand below the bezel.
