---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: basic-measurement-overview
section_title: Basic Measurement Overview
parent_section: null
page_range: "28-30"
related_screens: [measurement, range-select]
---

# Basic Measurement Overview

## Summary

Introduces the GDM-9060/9061 basic measurement model: eight measurement types (ACV, DCV, ACI, DCI, 2W/4W resistance, continuity/diode, frequency/capacitance, temperature) mapped to the upper two rows of front-panel keys, with advanced measurements building on basic results. Covers the refresh rate concept — the speed/accuracy tradeoff, the rates available per measurement type, how to select a rate via arrow keys or the `Speed` (F2) softkey, and where the active rate and the flashing reading indicator appear on the single-readout display. Also documents triggering: automatic (internal) triggering by refresh rate versus single triggering via the `TRIG` key, and how to switch between the two modes.

## Content

### Basic Measurement Overview

**Background:** Basic measurement refers to the several types of measurements assigned to the upper 2 row keys on the front panel.

*Figure: Upper-row front-panel keys labeled `ACV`, `DCV`, `Ω2W`, continuity/diode, `FREQ`, `TEMP`, with shifted functions ACI, DCI, Ω4W, etc.*

**Measurement type:**

| Type | Measurement |
|---|---|
| ACV | AC Voltage |
| DCV | DC Voltage |
| ACI | AC Current |
| DCI | DC Current |
| Ω 2W / Ω 4W | 2-wire and 4-wire Resistance |
| (continuity / diode icons) | Continuity/Diode |
| FREQ (capacitance icon) | Frequency/Capacitance |
| TEMP | Temperature |

**Advanced measurement:** Advanced measurement (page 77) mainly refers to the operation using the result obtained from one or more of the basic measurements.

### Refresh Rate

**Background:** Refresh rate defines how frequently the GDM-9060/9061 captures and updates measurement data. A faster refresh rate yields a lower accuracy and resolution. A slower refresh rate yields a higher accuracy and resolution. Consider these tradeoffs when selecting the refresh rate.

| Measurement Type | Refresh Rate Available |
|---|---|
| DCV/DCI/ 2W/4W | 5/s 20/s 60/s 100/s 400/s 1k/s*¹ 1.2k/s*² 2.4k/s*² 4.8k/s*² 7.2k/s*² 10k/s*² |
| ACV/ACI | 1/s 5/s 20/s |
| Continuity / Diode | 60/s 100/s 400/s |
| Frequency & Period | 1s 100ms 10ms |
| Capacitance | 2/s |
| Temperature | 5/s 20/s 60/s |

> **NOTE:** *¹ is applicable to GDM-9060, whilst *² is specifically for GDM-9061.

**Selection Procedure:** Press the left or right arrow keys to change the refresh rate.

You can also press the F2 (`Speed`) key to select a desired rate for measurement. Press corresponding function key in accord with the desired option on screen display. Also, the F6 (`More ½`) key shows when available options are more than single page.

*Figure: `Speed` softkey menu row — `5/s` `20/s` `60/s` `100/s` `400/s` `More 1/2`, with `[ESC]:Return`.*

The refresh rate will be shown at the upper right corner of the display. See the example below.

*Figure: Single-readout DC Voltage screen with the Active Refresh Rate (`5/s`) called out at the upper-right, reading `-0000.0 VDC`.*

> **NOTE:** The refresh rate cannot be set for capacitance measurement.

**Reading indicator:** The reading indicator (●), which is located in the lower-right corner of display, flashes according to the defined refresh rate setting.

*Figure: Single-readout DC Voltage screen with the Reading Indicator called out at the lower-right next to `VDC`.*

### Automatic (Internal)/Single Triggering

**Overview:** By default, the GDM-9060/9061 automatically triggers according to the refresh rate. See the previous page for refresh rate setting details. The TRIG key, on the other hand, is used to manually trigger once per click.

**Single Trigger:** Simply press the `TRIG` key to Single trigger measurement. Pressing once stands for trigger for single time. See the figure below for example.

*Figure: Indicator Single Trigger Mode — status line shows `Trig:SIN`; screen reads `-0000.000 VDC`.*

**Automatic (Internal) Trigger:** Press and hold the `TRIG` key for 2 seconds to return to the Automatic (Internal) Trigger.

*Figure: Indicator Auto (Internal) Trigger Mode — status line shows `Trig:Auto`; screen reads `-0000.001 VDC`. (Press & hold `TRIG` for 2 seconds.)*

> **NOTE:** Single triggering is not supported for capacitance measurements.

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the single-readout measurement screen whose anatomy (function header, primary readout, active refresh rate, reading indicator, trigger-mode indicator) this section describes.
- [`screens/range-select.md`](../../screens/range-select.md) — range-selection screen reached from the measurement display.

## Confidence notes

- The "Measurement type" table includes pictographic key glyphs for continuity/diode and capacitance that have no text label; descriptions are transcribed verbatim and the glyphs noted parenthetically.
- The superscript markers `*¹` (GDM-9060) and `*²` (GDM-9061) in the Refresh Rate Available table are rendered inline next to each applicable rate, matching the source's footnote convention.
- This chunk spans three printed top-level headings (Basic Measurement Overview, Refresh Rate, Automatic (Internal)/Single Triggering) within the assigned page range 28–30; all are transcribed under the single assigned `section_id`.
