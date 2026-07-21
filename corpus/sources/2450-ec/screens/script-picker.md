---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: script-picker
screen_title: Script picker
screen_type: dialog
image: script-picker.jpg
source_photo: uploads/photos/photo-660_singular_display_fullPicture.jpeg
function_state: MEASURE CURRENT 2-WIRE
navigation_path: [Home, Script picker]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: opt-abhay
    label: abhay
    type: button
    state: enabled
    action: Loads/runs the internal TSP script named `abhay`. User-created script name observed on this specific instrument — not factory content.
  - id: opt-jjj
    label: jjj
    type: button
    state: enabled
    action: Loads/runs the internal TSP script named `jjj`. User-created script name — not factory content.
  - id: opt-led-sweep
    label: led_sweep
    type: button
    state: enabled
    action: Loads/runs the internal TSP script named `led_sweep`. User-created script name — not factory content.
---

# Script picker

## Purpose

Dropdown picker listing the instrument's internal TSP scripts, opened from the script pill in the Home status bar ([home](home.md), `status-script` — `No Script`). It is how a user activates a stored script from the Home screen without going through Menu > Scripts. The three entries photographed are user-created scripts present on this particular unit; the list contents are instrument state, not UI constants.

## Controls inventory

The picker is a dropdown panel anchored below the `No Script` status-bar pill, occupying the right-center of the screen while the primary readout (`-00.000`, truncated) and `Range 10µA` pill remain visible to its left. Three stacked rows, top to bottom: `opt-abhay` (`abhay`), `opt-jjj` (`jjj`), `opt-led-sweep` (`led_sweep`), with empty panel space below for further scripts. No title bar and no Cancel button are visible.

Bezel operation (knob to move selection, `ENTER` to confirm, `EXIT` to cancel) applies as on every dialog; the bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- List contents track the instrument's internal script store — a freshly reset unit or one loaded with the EC test applications would show different entries (cf. the Manage Scripts figure in [`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), whose Internal Scripts list is entirely different).
- With a script active, the status pill presumably shows its name instead of `No Script`; not photographed.

## Visible text (verbatim)

Dropdown: `abhay` · `jjj` · `led_sweep`.

Background (Home screen): `Local` · `defbuffer1` · `No Script` · `WAIT ▼` · `MEASURE CURRENT 2-WIRE` · `-00.000` *(truncated)* · `Range` · `10µA` · `-00.000… V` *(partially covered)* · `20V` · `+00.0000V` · `10.5000µA`.

## Confidence notes

- **The three script names are user data observed on this specific instrument** (`abhay`, `jjj`, `led_sweep`) — treat them as evidence of the list's anatomy, not as reproducible factory content.
- Whether tapping an entry runs the script immediately or only loads it into the script slot is not observable from a still; the pill semantics on [home](home.md) suggest load-into-slot. Requires manual confirmation.
- Whether a `Create New` / `None` style row exists below the visible entries is not resolvable — the panel's lower region is empty in this shot.
- Background source-row values (`20V`, `+00.0000V`, `10.5000µA`) are dim; moderate confidence.

## Manual references

- **`Getting started`** ([`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), `user-manual` pp. 1-2 to 1-6) — documents the instrument's internal script store this list reads from, including the Menu > Scripts > Manage flow and the Manage Scripts screen with its Internal Scripts list.

Pending: manual sections covering running scripts from the front panel (2450 Reference Manual; Menu > Scripts > Run) — not yet processed into the corpus.

## Source photo

Selected from `uploads/photos/`: **photo-660_singular_display_fullPicture.jpeg** — the only shot of this picker. All three script names are crisply legible; no hand over the LCD.
