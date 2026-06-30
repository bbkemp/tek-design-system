---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: current-measurement
section_title: AC/DC Current Measurement
parent_section: basic-measurement-overview
page_range: "38-41"
related_screens: [measurement]
related_hardware: []
---

# AC/DC Current Measurement

## Summary

Covers measuring AC and DC current on the GDM-9060/9061, noting the model difference: the GDM-9061 has both 3A and 10A input terminals (front/rear), while the GDM-9060 offers only a 3A terminal. ACI/DCI mode is reached via Shift → ACV / Shift → DCV; the section reads the on-screen indicators, wires the test leads to the 3A or 10A terminal by input level, and lists the selectable current ranges (100µA through 10A) with resolution, full scale, and required input jack. Closes with the general current settings: Speed (F2) refresh rate and Auto Zero (F3, DCI only).

## Content

**Background**

The GDM-9061, with front/rear input terminals, has two input terminals for current measurement: the 3A terminal for current less than 3A and a 10A terminal for measurements up to 10A, which can measure between 3 ~ 10A for both AC and DC current. On the other hand, for the GDM-9060, which has no rear input terminals, nor 10A terminal, it offers merely a 3A terminal for current measurement less than 3A.

**Current type**

| Model | Current type |
|---|---|
| GDM-9060 | AC/DC 3A |
| GDM-9061 | AC/DC 3A/10A |

**Activate ACI/DCI Measure**

Press the Shift → `ACV` or Shift → `DCV` key to measure AC or DC current, respectively. (`Shift` shows `f(x) Local`; `8 ACI` is the shift function above `ACV`, `7 DCI` above `DCV`.)

**ACI/DCI mode display appears**

The measurement will switch to ACI, DCI mode immediately. See the figure below for example.

*Figure: ACI mode display showing `000.03 mAAC`, with `AC Current` · `Trig: Auto` · `Filter` · `5/s` · `A Range: 100mA` in the status bar.*

| Indicator | Meaning |
|---|---|
| AC or DC Current | Indicates DC or AC Current mode |
| 5/s | Indicates the active refresh rate |
| `A` | Indicates Automatic range selection |
| Range: 100mA | Indicates the available range of Current |
| 000.03 mAAC | Indicates the exact measured value |

**Connect the test lead and measure**

Connect the test lead between the 3A terminal and the Input LO terminal or DC/AC 10A terminal and the Input LO terminal, depending on the input current.

The display updates the reading. For current ≤ 3A use the 3.15A terminal.

For current up to 12A use the 10A terminal.

*Figure: Front-panel terminal wiring — `MAX 3A` path into the 3A terminal and `MAX 10A` path into the 10A terminal.*

### Select Current Range

**Auto range**

To turn the automatic range selection On/Off, press the `AUTO` key. The most appropriate range for the currently used input jack will be automatically selected. The GDM-9060/9061 is able to do this by remembering the last manually selected range and using that information to determine the smallest current range that the auto-range function will switch to. When the current input is switched to another terminal, the range must be manually set.

> ⚠ **CAUTION:** Auto Range not allowed on 10A

**Manual range**

Press the "+" or the "-" key to select the range. The AUTO indicator `A` turns to `M` indicating Manual range selection.

If the appropriate range is unknown, select the highest range.

You can also press F1 (`Range`) key to select a range for the measurement.

Press the F1 ~ F5 key to select a desired range for the measurement.

*Figure: Range softkey bar — `Auto` · `100µA` · `1mA` · `10mA` · `100mA` · `More 1/2`.*

Press the F6 (`More 1/2`) key for next page with more options as the figure shown below.

*Figure: Range softkey bar (page 2) — `1A` · `3A` · `10A`, with `ESC: Return` / `Page Up`.*

**Selectable Current Ranges**

| Range | Resolution | Full scale | INJACK |
|---|---|---|---|
| 100µA | 0.1nA | 119.9999 µA | 3A |
| 1mA | 1nA | 1.199999 mA | 3A |
| 10mA | 10nA | 11.99999 mA | 3A |
| 100mA | 100nA | 119.9999mA | 3A |
| 1A | 1µA | 1.199999 A | 3A |
| 3A | 1µA | 3.150000 A | 3A |
| 10A | 10µA | 10.50000 A | 10A |

> **NOTE:** For further details, see the specifications on page 359.

### General Current Setting

**F2 (`Speed`) key to select the rate**

`DCI:`

Press the F1 ~ F5 key to select the desired rate

*Figure: Speed softkey bar — `5/s` · `20/s` · `60/s` · `100/s` · `400/s` · `More 1/2`.*

Press the F6 (`More 1/2`) key for next page with more options as the figure shown below.

*Figure: Speed softkey bar (page 2) — `1.2k/s` · `2.4k/s` · `4.8k/s` · `7.2k/s` · `10k/s` · `Page Up`.*

`ACI:`

Press the F1 ~ F3 key to select the desired rate

*Figure: Speed softkey bar — `1/s>3Hz` · `5/s>20Hz` · `20/s>200Hz`, with `ESC: Return`.*

**F3 (`Auto Zero`) key to enable Auto Zero (DCI mode only)**

*Background:* Autozero provides the most accurate measurements, but requires additional time to perform the zero measurement. With autozero enabled (On), the GDM-9060/9061 internally measures the offset following each measurement. It then subtracts that measurement from the preceding reading. This prevents offset voltages present on the GDM-9060/9061's input circuitry from affecting measurement accuracy. With autozero disabled (Off), the GDM-9060/9061 measures the offset once and subtracts the offset from all subsequent measurements.

*Display:* When turning On the Auto Zero, the display shows an icon `A-Zero` indicating the Auto Zero mode is currently being activated.

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the ACI/DCI giant-reading measurement screen described in the "ACI/DCI mode display appears" figure (same measurement-screen layout as ACV/DCV).

## Confidence notes

- Verbatim text preserves an apparent inconsistency in the source: the procedure text states "For current up to 12A use the 10A terminal" (page 39) while the Background and range table cap the 10A jack at 3 ~ 10A / 10.50000 A full scale — reproduced as printed, not reconciled.
- The "Connect the test lead and measure" terminal-wiring figure is a front-panel photo with `MAX 3A` and `MAX 10A` callout arrows; partial terminal labels (200Vpk, 2Vpk, 500Vpk, 10A, 3A, CAT II 300V) are legible at scan resolution.
- The "Auto Range not allowed on 10A" line on page 40 carries a warning/caution triangle glyph in the source; transcribed as a `⚠ CAUTION` blockquote.
- ACI display value `000.03 mAAC` and Range `100mA` read from the small screenshot on page 38.
