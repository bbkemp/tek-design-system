---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: resistance-measurement
section_title: 2W/4W Resistance Measurement
parent_section: basic-measurement-overview
page_range: "42-45"
related_screens: [measurement, range-select]
related_hardware: []
---

# 2W/4W Resistance Measurement

## Summary

Covers 2-wire and 4-wire (Ohm) resistance measurement on the GDM-9060/9061: when to use each measurement type, how to activate 2W or 4W mode, the terminal connections for each, and the resistance display indicators. Documents range selection (Auto and Manual, including the F1 Range softkey menu) with the full selectable-range table, plus the General Resistance settings — Speed (refresh rate) and Auto Zero.

## Content

**Measurement type**

| | |
|---|---|
| **2-wire OHM** | Uses the standard Input HI-LO terminals. Recommended for measuring resistances larger than 1kΩ. |
| **4-wire OHM** | Compensates the test lead effect using the 4W compensation terminals (SENSE HI/LO terminals), in addition to the standard Input HI-LO terminals. Recommended for measuring sensitive resistances smaller than 1kΩ. |

**Activate 2W or 4W Measurement**

Press the `Ω2W` key to activate 2W resistance measurement.

Press the Shift → `Ω2W` key to activate 4W resistance measurement.

**2W/4W resistance mode display appears**

The mode will switch to the selected resistance mode immediately. Press the Shift → `Ω2W` key on the front panel as figure shown below.

*Figure: 4-Wire OHM display showing reading `000.0651`, with `4-Wire OHM`, `Trig:Auto`, `Filter`, `5/s`, `A Range: 100Ω` indicators, `A-Zero` indicator, and `Ω●` unit.*

| | |
|---|---|
| 2 or 4-Wire OHM | Indicates 2W or 4W Resistance mode |
| `5/s` | Indicates the active refresh rate |
| `A` (Auto icon) | Indicates Automatic range selection |
| Range: 100 Ω | Indicates the available range of Resistance |
| 000.0651 Ω | Indicates the exact measured value |

**Connect the test lead and measure**

For 2W measurement, connect the test leads between the Input HI terminal and the LO terminal.

For 4W measurement, connect the test leads between the Input HI terminal and the LO terminal, as the way to 2W measurement. Also, connect another sense leads between the SENSE LO and HI terminals.

*Figure: Terminal connection diagram. SENSE Ω 4W terminals (HI/LO, 200Vpk) and INPUT VΩ terminals (HI/LO, 1000V⎓ / 750V~). Annotations: `4W ONLY` (SENSE HI), `4W & 2W` (INPUT), `4W ONLY` (SENSE LO), `500Vpk`.*

### Select Resistance Range

**Auto range**

To turn the automatic range selection On/Off, press the Auto key.

**Manual range**

Press the "+" or the "-" key to select the range. The Auto indicator `A` turns to `M` indicating Manual range selection. If the appropriate range is unknown, select the highest range.

You can also press the F1 (Range) key to select a range for the measurement.

Press the F1 ~ F5 key to select a desired range for the measurement.

*Figure: Range softkey menu — `Auto`, `100Ω`, `1kΩ`, `10kΩ`, `100kΩ`, `More 1/2`, with `ESC : Return`.*

Press the F6 (More 1/2) key for next page with more options as the figure shown below.

*Figure: Range softkey menu page 2 — `1MΩ`, `10MΩ`, `100MΩ`, `Page Up`, with `ESC : Return`.*

**Selectable Resistance Ranges**

| Range | Resolution | Full scale |
|---|---|---|
| 100Ω | 0.1mΩ | 119.9999Ω |
| 1kΩ | 1mΩ | 1.199999kΩ |
| 10kΩ | 10mΩ | 11.99999kΩ |
| 100kΩ | 100mΩ | 119.9999kΩ |
| 1MΩ | 1Ω | 1.199999MΩ |
| 10MΩ | 10Ω | 11.99999MΩ |
| 100MΩ | 100Ω | 119.9999MΩ |

> **NOTE:** For more details, see the specifications on page 359.

### General Resistance Setting

**F2 (Speed) key to select the rate**

Press the F1 ~ F5 key to select the desired rate

*Figure: Speed softkey menu — `5/s`, `20/s`, `60/s`, `100/s`, `400/s`, `More 1/2`, with `ESC : Return`.*

Press the F6 (More 1/2) key for next page with more options as the figure shown below.

*Figure: Speed softkey menu page 2 — `1.2k/s`, `2.4k/s`, `4.8k/s`, `7.2k/s`, `10k/s`, `Page Up`, with `ESC : Return`.*

**F3 (AutoZero) key to enable Auto Zero**

Background — Autozero provides the most accurate measurements, but requires additional time to perform the zero measurement. With autozero enabled (On), the GDM-9060/9061 internally measures the offset following each measurement. It then subtracts that measurement from the preceding reading. This prevents offset voltages present on the GDM-9060/9061's input circuitry from affecting measurement accuracy. With autozero disabled (Off), the GDM-9060/9061 measures the offset once and subtracts the offset from all subsequent measurements.

Display — When turning On the Auto Zero, the display shows an icon `A-Zero` indicating the Auto Zero mode is currently being activated.

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the resistance reading display documented here.
- [`screens/range-select.md`](../../screens/range-select.md) — the F1 (Range) softkey menu and the selectable resistance ranges.

## Confidence notes

- The over-range / `OverLoad` behavior the task asked me to note is **not described** in the 2W/4W Resistance Measurement section (pages 42–45). No `OverLoad` indication appears in this range of the manual; do not fabricate one. It may be documented elsewhere (e.g. a general display-indicators or specifications section).
- The display indicator icons (`A`, `M`, `A-Zero`) are rendered as small inline graphics in the source; transcribed by their visible labels.
- The "Note: see the specifications on page 359" reference is reproduced verbatim; page 359 is outside this chunk's range.
