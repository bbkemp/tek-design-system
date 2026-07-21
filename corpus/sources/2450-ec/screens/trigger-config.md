---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: trigger-config
screen_title: Trigger mode picker
screen_type: dialog
image: trigger-config.jpg
source_photo: uploads/photos/photo-657_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, Trigger mode picker]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-continuous
    label: Continuous Measurement
    type: button
    state: enabled
    action: Puts the trigger model into continuous measurement — readings stream to the active buffer whenever the output is on.
  - id: opt-manual
    label: Manual Trigger Mode
    type: button
    state: enabled
    action: Switches to manual triggering — readings are taken on TRIGGER hardkey presses.
  - id: opt-trigger-model
    label: Abort Trigger Model
    type: button
    state: active
    action: Starts or stops the configured trigger model. Label toggles with trigger-model state — `Initiate Trigger Model` when idle (photo-650), `Abort Trigger Model` while the model is running/waiting (this shot). White-outlined in this shot.
---

# Trigger mode picker (CONT pill)

## Purpose

Dropdown picker for the instrument's trigger mode, opened from the trigger-state pill at the right end of the Home status bar ([home](home.md), `status-trigger` — labeled `CONT` or `WAIT` with a chevron). It selects between continuous measurement, manual triggering, and running the configured trigger model. Selecting an option applies it and closes the list.

## Controls inventory

The picker is a dropdown list anchored below the trigger pill, occupying the right side of the measure region while the primary readout (`-00.0001`) stays visible to its left. Three stacked option buttons, top to bottom: `opt-continuous` (`Continuous Measurement`), `opt-manual` (`Manual Trigger Mode`), and `opt-trigger-model` — labeled `Abort Trigger Model` in the canonical shot, white-outlined. There is no title bar and no Cancel button visible; dismissal is presumably by tapping outside the list or pressing `EXIT`.

Bezel operation (knob to move selection, `ENTER` to confirm, `EXIT` to cancel) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- **Initiate ↔ Abort label** — the third option's label tracks trigger-model state. In `uploads/photos/photo-650_singular_display_fullPicture.jpeg` the status pill reads `CONT` and the option reads `Initiate Trigger Model` (with `Continuous Measurement` white-outlined as the active mode); in the canonical shot (photo-657) the pill reads `WAIT ▼` and the option reads `Abort Trigger Model` (outlined). Same dialog identity in both.
- **Status pill** — the anchoring pill itself cycles (`CONT`, `WAIT`, and per [graph](graph.md) other trigger states), independent of the list contents.
- In photo-650 a small warning triangle sits at the far right of the status bar; in photo-657 it is replaced by the round info icon. Toast/annunciator state of the underlying Home screen, not part of this picker.

## Visible text (verbatim)

Dropdown: `Continuous Measurement` · `Manual Trigger Mode` · `Abort Trigger Model` *(photo-650: `Initiate Trigger Model`)*.

Background (Home screen): `Local` · `defbuffer1` · `No Script` · `WAIT ▼` *(photo-650: `CONT`)* · `MEASURE CURRENT 2-WIRE` · `-00.0001` · `Range` · `10µA` · `-00.0003 V` · `20V` · `+00.0000 V` · `10.5000µA`.

## Confidence notes

- The meaning of the white outline differs between the two shots: in photo-650 it sits on `Continuous Measurement` (consistent with "outline = current mode", pill `CONT`), while in photo-657 it sits on `Abort Trigger Model` while the pill reads `WAIT`. The outline may indicate knob focus rather than current selection; not resolvable from stills.
- Background source-row values (`20V`, `+00.0000 V`, `10.5000µA`) are dim and read at moderate confidence; the `10µA` range pill likewise.
- Dismissal behavior (tap-outside vs. EXIT) is inferred from the dropdown anatomy, not observed.
- `opt-continuous` / `opt-manual` action descriptions are the standard 2450 trigger-mode semantics; the labels are observed but the behaviors require manual confirmation.

## Manual references

- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — documents the status bar `CONT` pill (with chevron) that anchors this picker. The picker itself is not described in the currently processed chunks.

Pending: manual sections covering the trigger model and trigger modes (2450 Reference Manual; Menu > Trigger > Templates / Configure) — not yet processed into the corpus.

## Source photo

Selected from `uploads/photos/`: **photo-657_singular_display_fullPicture.jpeg** — sharper of the two shots of this picker and the only one showing the `Abort Trigger Model` label; a blurred hand is below the bezel, not over the LCD. Other candidate:

- `photo-650` — same picker with `Initiate Trigger Model` and the `CONT` pill; angled with mild glare. Contributes the Initiate↔Abort state variation above.
