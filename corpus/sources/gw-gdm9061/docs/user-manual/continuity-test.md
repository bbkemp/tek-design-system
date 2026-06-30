---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: continuity-test
section_title: Continuity Test
parent_section: basic-measurement-overview
page_range: "46-48"
related_screens: [measurement]
related_hardware: []
---

# Continuity Test

## Summary

Describes the continuity test on the GDM-9060/9061: how to activate it, the `OPEN` display when no continuous path is found, and the fixed 1kΩ range. Covers the settings available in continuity mode — Speed (refresh rate), Auto Zero, BeepVol (beep volume), and the continuity Threshold — including the procedure to set the threshold level.

## Content

**Background**

The continuity test checks that the resistance in the DUT is low enough to be considered continuous (of a conductive nature).

**Activate continuity test**

Press the continuity key (`•))` ) to activate continuity testing.

**Continuity mode display appears**

The mode will switch to continuity testing immediately. Press the continuity key on the front panel as figure shown below.

*Figure: Continuity display showing `OPEN`, with `Continuity`, `Trig:Auto`, `60/s`, `M Range: 1kΩ` indicators and `Ω●` unit.*

| | |
|---|---|
| Continuity | Indicates Continuity measurement |
| `60/s` | Indicates the active refresh rate |
| `M` | Indicates Manual range selection |
| 1kΩ | Indicates the available range of Continuity<br>⚠ Note: the range selection is fixed in 1kΩ |
| `OPEN` Ω | Indicates the currently measured result |

**Connect the test lead and measure**

Connect the test lead between the Input HI terminal and the LO terminal. The display updates the reading.

*Figure: Terminal connection diagram. SENSE Ω 4W and INPUT VΩ terminals (1000V⎓ / 750V~, 2Vpk, 500Vpk), showing the test lead between Input HI and LO.*

**F2 (Speed) key to select the rate.**

Press the F1 ~ F3 key to select the desired rate

*Figure: Speed softkey menu — `60/s`, `100/s`, `400/s`, with `ESC : Return`.*

**F3 (Auto Zero) key to enable Auto Zero**

Background — Autozero provides the most accurate measurements, but requires additional time to perform the zero measurement. With autozero enabled (On), the GDM-9060/9061 internally measures the offset following each measurement. It then subtracts that measurement from the preceding reading. This prevents offset voltages present on the GDM-9060/9061's input circuitry from affecting measurement accuracy. With autozero disabled (Off), the GDM-9060/9061 measures the offset once and subtracts the offset from all subsequent measurements.

Display — When turning On the Auto Zero, the display shows an icon `A-Zero` indicating the Auto Zero mode is currently being activated.

**F4 (BeepVol) key to select the Vol**

Press the F2 ~ F4 key to select the volume level or press the F1 key to set Beep volume off

*Figure: Beep Volume softkey menu — `Off`, `Small`, `Medium`, `Large`, with `ESC : Return`.*

### Set Continuity Threshold

**Background**

The continuity threshold defines the maximum resistance allowed in the DUT when testing the continuity.

**Threshold Range**

| | |
|---|---|
| Threshold | 1 to 1000Ω (Default Threshold:10Ω) |
| Resolution | 1Ω |

**Procedure**

Press the F5 key to enter the Threshold of Continuity menu as the figure below shown.

*Figure: Continuity menu softkeys — `Range Fix 1kΩ`, `Speed 60/s`, `Auto Zero On / Off`, `BeepVol Small`, `Threshold 10Ω`.*

Set the continuity threshold level.

1. Use the Left/Right arrow keys to move cursor and scroll the Knob key or press Number keys to enter the desired value.
2. Press the F6 (Enter) key or the Knob key until click to confirm the threshold settings.

Display —

*Figure: `CONT Threshold` entry display showing `0100`, `2|4`, with `ESC : Return` / `Enter`.*

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the continuity `OPEN` reading display documented here.

## Confidence notes

- The continuity activate key is shown only as a front-panel icon graphic (the `•))` continuity symbol) in the source, not as a text label; transcribed by its visible glyph.
- In the threshold-entry figure, the value field reads `0100` and a `2|4` indicator appears; reproduced verbatim as printed even though it does not match the 10Ω default mentioned in the body text (the figure shows a user-entered example value).
