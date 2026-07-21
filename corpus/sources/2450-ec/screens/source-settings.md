---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: source-settings
screen_title: Source Settings
screen_type: config
image: source-settings.jpg
source_photo: uploads/photos/photo-620_singular_display_fullPicture.jpeg
function_state: "Function: SVMI"
navigation_path: [Menu, Source Settings]
parent_screens: [menu]
child_screens:
  - source-range
  - output-off-mode
  - ovp-limit
  - interlock
  - high-capacitance
  - source-readback
  - source-delay
related_hardware:
  - front-panel
controls:
  - id: title-bar
    label: SOURCE SETTINGS
    type: indicator
    state: active
    action: Screen title in the blue header band. Static.
  - id: function-indicator
    label: "Function: SVMI"
    type: indicator
    state: active
    action: Shows the active source/measure function these settings apply to (here SVMI — source voltage, measure current). Changes with the FUNCTION hardkey / function selection; not tappable from this screen (unconfirmed).
  - id: row-range
    label: Range
    type: dropdown
    state: enabled
    action: Source range. Value button (here `Auto`) opens the Source Range picker (source-range). Grey caption under the label lists the choices ("Auto or 20mV ... 200V").
  - id: row-output-off
    label: Output Off
    type: dropdown
    state: enabled
    action: Output-off state. Value button (here `Normal`) opens the Output Off picker (output-off-mode). Caption lists "High Z, Normal, Zero, or Guard".
  - id: row-ovp-limit
    label: Overvoltage Protection Limit
    type: dropdown
    state: enabled
    action: Overvoltage protection clamp. Value button (here `None`) opens the Overvoltage Protection Limit picker (ovp-limit). Caption lists "2V ... 180V, or None".
  - id: row-interlock
    label: Interlock
    type: dropdown
    state: enabled
    action: Safety-interlock enforcement. Value button (here `Off`) opens the Interlock picker (interlock). Caption lists "Off or On".
  - id: row-high-capacitance
    label: High Capacitance
    type: dropdown
    state: enabled
    action: High-capacitance source mode. Value button (here `Off`) opens the High Capacitance picker (high-capacitance). Caption lists "Off or On".
  - id: row-source-readback
    label: Source Readback
    type: dropdown
    state: enabled
    action: Whether the instrument measures and displays the actual source value instead of the programmed one. Value button (here `On`) opens the Source Readback picker (source-readback). Caption lists "Off or On".
  - id: row-source-delay
    label: Source Delay
    type: dropdown
    state: enabled
    action: Delay between source setup and measurement. Value button (here `Auto`) opens the Source Delay picker (source-delay). Caption partially legible ("Auto or 0s ... 10ks" — see Confidence notes).
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home screen.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Returns to the main Menu screen (this screen's parent).
  - id: btn-quickset
    label: QUICKSET
    type: hardkey
    state: enabled
    action: Opens the quick-preset / function picker.
  - id: btn-help
    label: HELP
    type: hardkey
    state: enabled
    action: Context help for the active screen.
  - id: control-knob
    label: ""
    type: knob
    state: enabled
    action: Rotary navigation between rows; push-to-select.
  - id: btn-enter
    label: ENTER
    type: hardkey
    state: enabled
    action: Confirm the focused control (opens its picker).
  - id: btn-exit
    label: EXIT
    type: hardkey
    state: enabled
    action: Back out to the Menu screen.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle source/measure function; changes the `Function:` header context.
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger / trigger model start.
---

# Source Settings — Function: SVMI

## Purpose

The Source Settings screen is the configuration hub for the source side of the SMU. It is reached from the main Menu screen (MENU hardkey → Source group → Settings; the Menu screen itself is not yet documented in the corpus — see Confidence notes). It presents seven settings rows, each showing the setting's name, a small grey caption listing the legal choices, and a value button showing the current selection. Tapping any value button opens a modal picker dialog for that setting; each picker is documented as its own child screen. The `Function: SVMI` indicator at top right scopes every row to the active source/measure function (source voltage, measure current).

## Controls inventory

The blue **header band** holds `title-bar` (`SOURCE SETTINGS`) on the left and `function-indicator` (`Function: SVMI`) on the right.

The body is a **two-column grid of settings rows**. Left column, top-to-bottom: `row-range` (`Range` → `Auto`), `row-output-off` (`Output Off` → `Normal`), `row-ovp-limit` (`Overvoltage Protection Limit` → `None`), `row-interlock` (`Interlock` → `Off`). Right column, top-to-bottom: `row-high-capacitance` (`High Capacitance` → `Off`), `row-source-readback` (`Source Readback` → `On`), `row-source-delay` (`Source Delay` → `Auto`). Each row is a bold label, a small grey caption enumerating the allowed values, and a rounded value button showing the current selection; tapping the button opens the corresponding picker dialog ([source-range](source-range.md), [output-off-mode](output-off-mode.md), [ovp-limit](ovp-limit.md), [interlock](interlock.md), [high-capacitance](high-capacitance.md), [source-readback](source-readback.md), [source-delay](source-delay.md)).

The hardware bezel frames the screen as on every 2450-EC view: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help` down the left, with the USB-A port and power button below them; `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger` and the terminals down the right. The full bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

- **Range = 20V** — `uploads/photos/photo-623_singular_display_fullPicture.jpeg` shows this same screen with the Range value button reading `20V` and outlined with a white focus ring (row focused for knob/touch selection); all other rows unchanged (`Normal`, `None`, `Off`, `Off`, `On`, `Auto`). This is a state variation of this screen, not a separate screen.
- Every value button's text tracks whatever was last chosen in its picker; the combinations seen in this cluster are `Auto`/`20V` for Range with the remaining rows constant.
- The `Function:` header changes with the active function (only `SVMI` observed in this cluster); the rows' captions (e.g. Range's voltage list) are expected to re-scope to the function, per the picker contents observed.

## Visible text (verbatim)

Header: `SOURCE SETTINGS` · `Function: SVMI`.

Left column: `Range` · `Auto or 20mV ... 200V` · `Auto` — `Output Off` · `High Z, Normal, Zero, or Guard` · `Normal` — `Overvoltage Protection Limit` · `2V ... 180V, or None` · `None` — `Interlock` · `Off or On` · `Off`.

Right column: `High Capacitance` · `Off or On` · `Off` — `Source Readback` · `Off or On` · `On` — `Source Delay` · `Auto or 0s ... 10ks` · `Auto`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`. Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

- **Parent screen `menu` is not yet documented.** The Menu screen this settings page is launched from was not photographed in this cluster; `parent_screens: [menu]` anticipates it. The manual (Getting started, § high-impedance output-off procedure) confirms the path: MENU key → under **Source**, select **Settings**.
- The grey caption text under each row label is at the limit of legibility in both photos. `Auto or 20mV ... 200V`, `High Z, Normal, Zero, or Guard`, `2V ... 180V, or None`, and the three `Off or On` captions are corroborated by the option sets visible in the child pickers; treat exact punctuation/ellipsis as approximate.
- The **Source Delay caption** is the least legible — read as `Auto or 0s ... 10ks`; the upper bound (`10ks`) is uncertain and not corroborated by the Source Delay picker (which shows only `Specify Delay` / `Auto Delay`). Verify against the reference manual.
- `function-indicator` tap behavior (whether it is tappable at all) is not observable from stills.
- Whether the `Auto` in photo-620's Range button carries a focus ring (as `20V` does in photo-623) is hard to tell at this exposure; the ring in photo-623 is interpreted as focus/selection highlight, not a different control type.

## Manual references

- **`Getting started`** ([`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), `user-manual` pp. 1-2 to 1-6) — the "Select the high-impedance, output-off state" procedure navigates exactly through this screen: MENU key → under **Source**, select **Settings** → select **Output Off** → choose **High Z**.
- **`Wiring the interlock`** ([`docs/quickstart/wiring-the-interlock.md`](../docs/quickstart/wiring-the-interlock.md), `quickstart` pp. 10 to 12) — "To change the Interlock setting: from the front panel, select MENU → Source Settings → set Interlock to ON or OFF" — this screen's `row-interlock`.
- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the Menu screen grid whose Source group's **Settings** launcher opens this screen.

## Source photo

Selected from `uploads/photos/`: **photo-620_singular_display_fullPicture.jpeg** — the sharper of the two shots of this screen, all seven rows and both header labels legible, no finger over the LCD (hand is below the bezel). Other candidate: `photo-623` — same screen with Range = `20V`; slightly softer focus and used instead as the documented state variation.
