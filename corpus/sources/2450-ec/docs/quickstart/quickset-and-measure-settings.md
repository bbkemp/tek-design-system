---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: quickset-and-measure-settings
section_title: Quick Setup options
parent_section: connect-the-instrument
page_range: "19 to 20"
related_screens: []
related_hardware: []
---

# Quick Setup options

## Summary

The MEASURE SETTINGS screen reached via Menu > Measure > Settings (range, sense, display digits, NPLC, auto zero, count, offset compensation), and the QUICKSET key's BASIC SOURCE/MEASURE SETTINGS screen: choosing source/measure functions, the Performance slider trading resolution against speed, and the four Quick Setups (Voltmeter, Ammeter, Ohmmeter, Power Supply). Includes the CAUTION that selecting a Quick Setup turns the output on.

## Content

An example of the options that are available when you select the **Settings** option under Measure is shown below.

*Figure: `MEASURE SETTINGS` screen, `Function: SVMI(Ω)` — options shown: `Range` (Auto or 10 nA…1 A) `10 mA` · `Sense` (2-Wire or 4-Wire) `2-Wire` · `Display Digits` (3.5…6.5) `5.5 Digits` · `Auto Range Low Limit` (10 nA…100 mA) `10 nA` · `NPLC` (0.01 to 10) `1` · `Auto Zero` (Off or On) `On` · `Count` (Number of readings) `1` · `Offset Compensation` (Off or On) `Off` · `Auto Range` (partially cut off in figure).*

### Quick Setup options

When you press **QUICKSET**, the BASIC SOURCE/MEASURE SETTINGS screen is displayed. From this menu, you can:

- Choose the source and measure functions.
- Use the Performance slider to select the best balance between measurement resolution and measurement speed.
- Choose from a selection of Quick Setups that automatically make the settings required for that setup, turn the output on, and begin making measurements.

*Figure: `BASIC SOURCE/MEASURE SETTINGS` screen — `Function` `SrcV MeasI(Ω)` (SIMV, SIMR, SVMI, SVMR…); `Performance` slider from `Resolution ~4.5 digits` to `Speed ~500 rdgs/s`; `Quick Setups`: `Voltmeter` · `Ammeter` · `Ohmmeter` · `Power Supply`.*

> ⚠ **CAUTION:** When you select a Quick Setup, the instrument turns the output on. Carefully consider and configure the appropriate output-off state, source, and limits before connecting the 2450 to a device that can deliver energy, such as other voltage sources, batteries, capacitors, or solar cells. Configure the settings that are recommended for the instrument before making connections to the device. Failure to consider the output-off state, source, and limits may result in damage to the instrument or to the device under test (DUT).

## Cross-references

- `navigation-keys-and-menu` — the Menu screen path (Measure > Settings) to the MEASURE SETTINGS screen.
- `help-and-function` — the FUNCTION key offers the same source/measure function selection as the QUICKSET Function control.
- `power-and-environmental-specs` — carries the guide's parallel CAUTION on output-off state and limits.
- The QUICKSET hardkey appears in the corpus Home screen bezel inventory (`btn-quickset` in `screens/home.md`, via `touchscreen-and-home-screen`). Neither the MEASURE SETTINGS nor BASIC SOURCE/MEASURE SETTINGS screens exist in the corpus yet (`quickset` is listed as a pending child screen of `home`).

## Confidence notes

- The MEASURE SETTINGS figure is cropped at the bottom in the source PDF; the final visible row (`Auto Range …`) is cut off mid-label. Options below the crop are not transcribed.
