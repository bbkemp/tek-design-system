---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: quickset
screen_title: Basic Source/Measure Settings
screen_type: config
image: quickset.jpg
source_photo: uploads/photos/photo-681_singular_display_fullPicture.jpeg
function_state: "Function: SrcV MeasI"
navigation_path: [Quickset]
parent_screens: [home]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: title-bar
    label: BASIC SOURCE/MEASURE SETTINGS
    type: indicator
    state: active
    action: Screen title in the blue header band. Static.
  - id: function-picker
    label: Function
    type: dropdown
    state: enabled
    action: Selects the source/measure function pair. Value button reads `SrcV MeasI` (at the limit of legibility); grey caption to the left of the button lists the alternatives (illegible in this shot — the quick start guide gives them as SIMV, SIMR, SVMI, SVMR).
  - id: performance-slider
    label: Performance
    type: input
    state: enabled
    action: Horizontal slider trading measurement resolution (left end) against measurement speed (right end). The handle is a wide labeled pill sitting left-of-center in this shot; its label text is not legible.
  - id: resolution-label
    label: Resolution
    type: indicator
    state: active
    action: Left anchor of the Performance slider, with a small grey caption beneath (illegible — the quick start guide's figure gives it as a digits-of-resolution figure).
  - id: speed-label
    label: Speed
    type: indicator
    state: active
    action: Right anchor of the Performance slider, with a small grey caption beneath (illegible — the quick start guide's figure gives it as a readings-per-second figure).
  - id: qs-voltmeter
    label: Voltmeter
    type: button
    state: enabled
    action: Quick Setup — configures the instrument as a voltmeter, turns the output on, and begins measuring (behavior per the quick start guide; label blurred in photo).
  - id: qs-ammeter
    label: Ammeter
    type: button
    state: enabled
    action: Quick Setup — configures the instrument as an ammeter, turns the output on, and begins measuring (behavior per the quick start guide; label blurred in photo).
  - id: qs-ohmmeter
    label: Ohmmeter
    type: button
    state: enabled
    action: Quick Setup — configures the instrument as an ohmmeter, turns the output on, and begins measuring (behavior per the quick start guide; label blurred in photo).
  - id: qs-power-supply
    label: Power Supply
    type: button
    state: enabled
    action: Quick Setup — configures the instrument as a power supply, turns the output on, and begins measuring (behavior per the quick start guide; label blurred in photo).
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home screen.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Opens the main Menu screen.
  - id: btn-quickset
    label: QUICKSET
    type: hardkey
    state: enabled
    action: Opens this screen (per the quick start guide; not captured mid-press — see Confidence notes).
  - id: btn-help
    label: HELP
    type: hardkey
    state: enabled
    action: Context help for the active screen.
  - id: control-knob
    label: ""
    type: knob
    state: enabled
    action: Rotary navigation between controls; push-to-select.
  - id: btn-enter
    label: ENTER
    type: hardkey
    state: enabled
    action: Confirm the focused control.
  - id: btn-exit
    label: EXIT
    type: hardkey
    state: enabled
    action: Back out of this screen.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle source/measure function — the same selection this screen's Function control offers.
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger / trigger model start.
---

# Quickset — Basic Source/Measure Settings

## Purpose

The Basic Source/Measure Settings screen is the 2450-EC's quick-configuration view: one screen that picks the source/measure function pair, trades resolution against speed with a single Performance slider, and offers four one-tap Quick Setups (Voltmeter, Ammeter, Ohmmeter, Power Supply) that configure the instrument for a common role. The quick start guide documents it as the screen shown when the QUICKSET front-panel key is pressed, and the Menu screen's Source group also carries a Quickset launcher; the launch itself was not captured in this cluster (see Confidence notes). In this photo the function is `SrcV Meas I` (source voltage, measure current) and the Performance slider handle sits left-of-center, toward the resolution end.

## Controls inventory

The blue **header band** holds `title-bar` (`BASIC SOURCE/MEASURE SETTINGS`).

The body stacks three regions. Top: the **Function row** — `function-picker`, a bold `Function` label centered above a wide value button reading `SrcV MeasI`, with a small grey caption to the button's left listing the alternative function pairs (illegible in this shot). Middle: the **Performance row** — a bold `Performance` caption over `performance-slider`, a full-width horizontal slider whose ends are anchored by `resolution-label` (`Resolution`, small caption beneath) on the left and `speed-label` (`Speed`, small caption beneath) on the right; the handle is a wide labeled pill sitting left-of-center. Bottom: the **Quick Setups group** — a `Quick Setups` caption over four rounded buttons in a two-row grid: `qs-voltmeter`, `qs-ammeter`, `qs-ohmmeter` across the first row and `qs-power-supply` starting the second.

The hardware bezel frames the screen as on every 2450-EC view: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help` down the left, with the USB-A port and power button below them; `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger` and the terminals down the right. The full bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

Only this one shot of the screen exists in the cluster. States the screen will exhibit (knowable from the on-screen controls and the paired manual section, not photographed):

- The `function-picker` value button tracks the selected function pair (`SrcV MeasI` here; the guide lists SIMV, SIMR, SVMI, SVMR as the set).
- The `performance-slider` handle position moves between the Resolution and Speed ends, and the small captions under the two anchors state the resulting digits-of-resolution / readings-per-second trade.
- Selecting a Quick Setup reconfigures the instrument, **turns the output on**, and begins measuring (per the quick start guide's CAUTION) — the on-screen result of that transition was not photographed.

## Visible text (verbatim)

Header: `BASIC SOURCE/MEASURE SETTINGS`.

Function row: `Function` · `SrcV MeasI` *(value at the limit of legibility)*.

Performance row: `Resolution` · `Performance` · `Speed`.

Quick Setups: `Quick Setups` · `Voltmeter` · `Ammeter` · `Ohmmeter` · `Power Supply` *(the four button labels are blurred; readings corroborated by the quick start guide's figure of this screen)*.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`. Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

- **Launch context is not observed.** The corpus screen graph (and `screens/home.md`) expects this screen to be reached via the QUICKSET front-panel hardkey, and the quick start guide states "When you press QUICKSET, the BASIC SOURCE/MEASURE SETTINGS screen is displayed"; the Menu grid also lists a **Quickset** launcher under Source. None of these paths was captured mid-navigation in this cluster — the frontmatter's `parent_screens: [home]` follows the existing graph, not a photographed transition.
- The photo was taken in a dark room with the instrument small in frame; transcription was done from enlarged crops of the original. Items unresolved even enlarged:
  - `function-picker` value — read as `SrcV MeasI`; character-level detail (spacing, any trailing qualifier such as the guide's `(Ω)`) is not resolvable.
  - The grey caption left of the Function button (the alternative function pairs) — illegible; the guide gives `SIMV, SIMR, SVMI, SVMR`.
  - The captions under `Resolution` and `Speed` — illegible; the guide's figure gives resolution-digits and readings-per-second values (`~4.5 digits`, `~500 rdgs/s` in its example), which are function/state-dependent and must not be assumed for this shot.
  - The Performance slider handle carries a text label in this shot — two short words, not legible; not transcribed. The guide's figure of this screen does not resolve it either.
  - The four Quick Setup button labels are individually blurred; the set (Voltmeter, Ammeter, Ohmmeter, Power Supply) matches the guide's figure exactly, so the readings are corroborated rather than directly legible.
- Quick Setup side effects (output turning on) are manual-derived behavior, not observable from this still — see the CAUTION in the paired guide section.
- Whether a fifth element (e.g. a scroll region or further setups) exists below `qs-power-supply` is not determinable; the visible screen bottom shows no additional controls.

## Manual references

- **`Quick Setup options`** ([`docs/quickstart/quickset-and-measure-settings.md`](../docs/quickstart/quickset-and-measure-settings.md), `quickstart` pp. 19 to 20) — documents this exact screen: the QUICKSET key path, the Function control, the Performance slider (resolution ↔ speed), the four Quick Setups, and the CAUTION that selecting a Quick Setup turns the output on.
- **`ENTER and EXIT keys / TRIGGER key / Menu screen overview`** ([`docs/quickstart/navigation-keys-and-menu.md`](../docs/quickstart/navigation-keys-and-menu.md), `quickstart` p. 18) — the Menu screen grid whose **Source** column carries the **Quickset** launcher, the on-screen alternative to the QUICKSET hardkey.
- **`HELP key / FUNCTION key`** ([`docs/quickstart/help-and-function.md`](../docs/quickstart/help-and-function.md)) — the FUNCTION hardkey offers the same source/measure function selection as this screen's `function-picker`.

## Source photo

Selected from `uploads/photos/`: **photo-681_singular_display_fullPicture.jpeg** — the only photo of this screen in the cluster. Header, section captions (`Function`, `Performance`, `Resolution`, `Speed`, `Quick Setups`), and overall layout are legible after enlargement; the value button, slider-handle label, and Quick Setup button labels are blurred and are flagged in Confidence notes. No alternative candidates existed.
