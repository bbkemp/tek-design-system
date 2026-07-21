---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: source-readback
screen_title: Source Readback picker
screen_type: dialog
image: source-readback.jpg
source_photo: uploads/photos/photo-643_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, Source Readback]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-off
    label: "Off"
    type: button
    state: enabled
    action: Source readback off — displays/records the programmed source value (label uncertain — see Confidence notes).
  - id: opt-on
    label: "On"
    type: button
    state: active
    action: Source readback on — measures and displays/records the actual source value. Shown with a white outline — the current selection (uncertain — see Confidence notes).
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the setting (label uncertain — see Confidence notes).
---

# Source Readback picker

## Purpose

Modal picker for the source-readback setting — whether the instrument reports the programmed source value or measures the value actually being sourced. It is the dialog behind the **Source Readback** row of [Source Settings](source-settings.md) (`row-source-readback`) — an Off/On choice. ⚠ The only photo of this dialog is blurry; transcription below is conservative and flagged.

## Controls inventory

Small centered dialog titled `Source Readback` over the dimmed Source Settings grid — the shared picker anatomy (cf. [high-capacitance](high-capacitance.md), [interlock](interlock.md)). Two option buttons stacked vertically — `opt-off` (`Off`) above `opt-on` (`On`, white-outlined as the current selection) — with `btn-cancel` (`Cancel`) at the bottom. Undimmed value buttons from the Source Settings right column remain faintly visible beside the dialog. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; the photographed state reads as `On` selected — consistent with the parent screen's `On` value button for this row in photo-620/623, which is the main corroboration given the blur.

## Visible text (verbatim)

Dialog: `Source Readback` · `Off` · `On` · `Cancel` (all — especially the option labels — transcribed at reduced confidence; see below).

Background (Source Settings, dimmed): `SOURCE SETTINGS` · `Function: SVMI` · `Range` · `Output Off` · `Overvoltage Protection Limit` · `Interlock` (fragments; heavily blurred).

## Confidence notes

- ⚠ **Single blurry source photo.** photo-643 is the only capture of this dialog and is the blurriest in the batch — the whole LCD is soft and the option-button text is smeared.
- **Dialog title** — read as `Source Readback` at moderate confidence; corroborated by the parent screen's row label.
- **`Off` (top button)** — barely resolvable; read primarily from position and length. Uncertain.
- **`On` (middle, outlined)** — the white selection outline is clearly visible; the label itself is inferred from its short length and from the parent screen showing `On` for this row. Uncertain as a direct reading.
- **`Cancel` (bottom)** — read from position and the shared picker pattern more than from legible glyphs. Uncertain.
- The functional description (programmed vs. measured source value) comes from the paired quickstart chunk, not the photo.
- Tap-to-apply vs. ENTER-to-confirm not observable; inferred from the shared picker pattern.
- A sharper re-shoot of this dialog is second only to `ovp-limit`'s on this batch's wish list; re-running the skill after dropping one in will regenerate this file.

## Manual references

- **`Touchscreen display overview`** ([`docs/quickstart/touchscreen-and-home-screen.md`](../docs/quickstart/touchscreen-and-home-screen.md), `quickstart` pp. 15 to 17) — the SOURCE swipe screen "displays either the programmed source value or the actual source, depending on the setting of source readback" — the setting this dialog controls.

## Source photo

Selected from `uploads/photos/`: **photo-643_singular_display_fullPicture.jpeg** — the only shot of this dialog, kept despite heavy blur because no better capture exists. Framing is wider than the rest of the batch (more bezel visible); the dialog is unobstructed.
