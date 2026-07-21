---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: ovp-limit
screen_title: Overvoltage Protection Limit picker
screen_type: dialog
image: ovp-limit.jpg
source_photo: uploads/photos/photo-626_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings, Overvoltage Protection Limit]
parent_screens: [source-settings]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-2v
    label: 2V
    type: button
    state: enabled
    action: Sets the overvoltage protection clamp to 2 V.
  - id: opt-5v
    label: 5V
    type: button
    state: enabled
    action: Sets the clamp to 5 V (label uncertain — see Confidence notes).
  - id: opt-10v
    label: 10V
    type: button
    state: enabled
    action: Sets the clamp to 10 V (label uncertain — see Confidence notes).
  - id: opt-20v
    label: 20V
    type: button
    state: enabled
    action: Sets the clamp to 20 V.
  - id: opt-40v
    label: 40V
    type: button
    state: enabled
    action: Sets the clamp to 40 V (label uncertain — see Confidence notes).
  - id: opt-60v
    label: 60V
    type: button
    state: enabled
    action: Sets the clamp to 60 V.
  - id: opt-80v
    label: 80V
    type: button
    state: enabled
    action: Sets the clamp to 80 V (label uncertain — see Confidence notes).
  - id: opt-100v
    label: 100V
    type: button
    state: enabled
    action: Sets the clamp to 100 V (label uncertain — see Confidence notes).
  - id: opt-120v
    label: 120V
    type: button
    state: enabled
    action: Sets the clamp to 120 V (label uncertain — see Confidence notes).
  - id: opt-140v
    label: 140V
    type: button
    state: enabled
    action: Sets the clamp to 140 V.
  - id: opt-160v
    label: 160V
    type: button
    state: enabled
    action: Sets the clamp to 160 V (label uncertain — see Confidence notes).
  - id: opt-180v
    label: 180V
    type: button
    state: enabled
    action: Sets the clamp to 180 V (label uncertain — see Confidence notes).
  - id: opt-none
    label: None
    type: button
    state: active
    action: Disables the overvoltage protection clamp. Shown with a white outline — the current selection.
  - id: btn-cancel
    label: Cancel
    type: button
    state: enabled
    action: Dismisses the dialog without changing the limit.
---

# Overvoltage Protection Limit picker

## Purpose

Modal picker for the overvoltage protection (OVP) clamp on the source output. It is the dialog behind the **Overvoltage Protection Limit** row of [Source Settings](source-settings.md) (`row-ovp-limit`), offering a grid of fixed voltage limits from 2 V up to 180 V plus `None` (protection off). ⚠ The only photo of this dialog is blurry — every label below is transcribed conservatively and the uncertain ones are itemized in Confidence notes.

## Controls inventory

Centered dialog titled `Overvoltage Protection Limit`, wider than the other Source Settings pickers, over the dimmed Source Settings grid — the shared picker anatomy (cf. [source-range](source-range.md)) scaled up to a **three-column grid** of option buttons. Reading down the columns: first column `opt-2v`, `opt-5v`, `opt-10v`, `opt-20v`, `opt-40v`; second column `opt-60v`, `opt-80v`, `opt-100v`, `opt-120v`; third column `opt-140v`, `opt-160v`, `opt-180v`, then `opt-none` (`None`, white-outlined as the current selection) sitting at the position after 180V. `btn-cancel` (`Cancel`) is centered at the bottom. Bezel operation (knob / `ENTER` / `EXIT`) per [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- The outlined option tracks the current setting; only `None` selected was photographed. This matches the parent screen's `None` value button for this row in photo-620/623.

## Visible text (verbatim)

Dialog title: `Overvoltage Protection Limit`.

Grid (column order, uncertain items flagged below): `2V` · `5V` · `10V` · `20V` · `40V` — `60V` · `80V` · `100V` · `120V` — `140V` · `160V` · `180V` · `None`.

Bottom: `Cancel`.

Background (Source Settings, dimmed): `SOU…` (header truncated by the dialog) · `Prot…` (row label fragment at left edge).

## Confidence notes

- ⚠ **Single blurry source photo.** photo-626 is the only capture of this dialog and is motion-blurred; the dialog title, `2V`, `20V`, `60V`, `140V`, `None`, and `Cancel` read at good confidence, everything else below is lower-confidence.
- **Uncertain labels:** `5V`, `10V`, `40V` (first column — digit shapes are smeared; `40V` could plausibly be `4V`), `80V`, `100V`, `120V` (second column), `160V`, `180V` (third column). The overall pattern — an ascending 2/5/10-style ladder ending at 180 V, consistent with the parent screen's caption `2V ... 180V, or None` — supports these readings, but each individual label needs a sharper capture or the reference manual to confirm.
- **Grid completeness:** 13 option buttons + Cancel are countable, but the blur leaves open whether a label was misassigned between adjacent cells; column membership of `120V` (bottom of column two) vs. a possible fourth-row third-column cell is the weakest read.
- The dimmed background fragments (`SOU…`, `Prot…`) confirm the parent is Source Settings but are not fully transcribable.
- Tap-to-apply vs. ENTER-to-confirm not observable; inferred from the shared picker pattern.

## Manual references

> Pending. Manual will be paired in a later pass (2450 Reference Manual, sections covering overvoltage protection; no genuine match in the corpus's currently processed user-manual / quickstart chunks).

## Source photo

Selected from `uploads/photos/`: **photo-626_singular_display_fullPicture.jpeg** — the only shot of this dialog, kept despite motion blur because no better capture exists. A sharper re-shoot of this dialog is the highest-value photo this batch could gain; re-running the skill after dropping one in will regenerate this file.
