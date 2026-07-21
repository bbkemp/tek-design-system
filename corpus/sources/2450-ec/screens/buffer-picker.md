---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: buffer-picker
screen_title: Buffer picker
screen_type: dialog
image: buffer-picker.jpg
source_photo: uploads/photos/photo-663_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, Buffer picker]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-defbuffer1
    label: defbuffer1
    type: button
    state: active
    action: Selects the default reading buffer defbuffer1 (the active buffer in this shot — listed first, matching the status-bar pill).
  - id: opt-defbuffer2
    label: defbuffer2
    type: button
    state: enabled
    action: Selects the second default reading buffer defbuffer2.
  - id: opt-create-new
    label: Create New
    type: button
    state: enabled
    action: Starts creation of a new user-named reading buffer. Follow-on flow (name entry / size) not photographed.
---

# Buffer picker

## Purpose

Dropdown picker for the active reading buffer, opened from the buffer pill in the Home status bar ([home](home.md), `status-buffer` — `defbuffer1`). Every measurement lands in the active buffer, so this list is how a user switches capture targets or starts a new buffer. The same pill-and-picker affordance appears on the Graph screen's buffer row ([graph](graph.md), `buffer-name`).

## Controls inventory

The picker is a dropdown panel anchored below the `defbuffer1` status-bar pill, overlaying the center of the screen while the truncated primary readout (`-00.`) remains visible to its left and the `AZERO` annunciator to its right. Three stacked rows, top to bottom: `opt-defbuffer1` (`defbuffer1`), `opt-defbuffer2` (`defbuffer2`), and `opt-create-new` (`Create New`). The panel extends below the last row with empty space for additional user-created buffers. No title bar and no Cancel button are visible.

Bezel operation (knob to move selection, `ENTER` to confirm, `EXIT` to cancel) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- Only the factory state (two default buffers) was photographed. User-created buffers would appear as additional rows above `Create New`.
- The active buffer is `defbuffer1` in this shot (status pill). With `defbuffer2` active, the pill and presumably the list's selection indication would track it.

## Visible text (verbatim)

Dropdown: `defbuffer1` · `defbuffer2` · `Create New`.

Background (Home screen): `Local` · `defbuffer1` · `No Script` · `WAIT ▼` · `MEASURE CUR…` *(truncated by the panel)* · `-00.` *(truncated)* · `Range` · `10…` *(truncated)* · `AZERO` · `-00.0003 V` *(partially covered)* · `20V` · `+00.0000V` · `10.5000µA`.

## Confidence notes

- How the current selection is indicated inside the list is not resolvable — no checkmark or outline is legible on the `defbuffer1` row in this shot; the active buffer is known from the status pill, not from the list styling.
- The `Create New` follow-on flow (naming keypad, buffer-size prompt) is not photographed; the row's action description stops at what is observable.
- Background source-row values (`20V`, `+00.0000V`, `10.5000µA`) and the `Range 10µA` pill are dim/partially covered; moderate confidence.
- Dismissal behavior (tap-outside vs. EXIT) is inferred from the dropdown anatomy, not observed.

## Manual references

- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — documents the status bar `defbuffer1` pill that anchors this picker, and the Menu's Measure > Reading Buffers entry. The picker itself is not described in the currently processed chunks.

Pending: manual sections covering reading buffers (2450 Reference Manual) — not yet processed into the corpus.

## Source photo

Selected from `uploads/photos/`: **photo-663_singular_display_fullPicture.jpeg** — the only shot of this picker. All three row labels are crisply legible; no hand over the LCD (a hand rests on the chair arm below the frame).
