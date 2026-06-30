---
class: doc-section
doc_id: user-manual
doc_title: "Dual Measurement Multimeter GDM-9060/9061 User Manual"
doc_number: null
doc_date: 2024-03
applies_to: [gw-gdm9061, gw-gdm9060]
section_id: frequency-period-measurement
section_title: Frequency/Period Measurement
parent_section: basic-measurement-overview
page_range: "50-54"
related_screens: [measurement]
related_hardware: []
---

# Frequency/Period Measurement

## Summary

Covers frequency and period measurement on the GDM-9060/9061: the measurable ranges, how to activate Frequency mode and Period mode (each displaying the complementary value in a sub-section), the display indicators, and the terminal connections for voltage- and current-based inputs. Documents the in-depth settings — Auto range, GateTime, InJack (voltage / 3A / 10A), TimeOut, and AC Range (with range options that vary by InJack selection).

## Content

**Description**

The GDM-9060/9061 can be used to measure the frequency or period of an input signal.

**Range**

| | |
|---|---|
| Frequency | 3Hz ~1MHz |
| Period | 1.0μs ~333ms |

**Activate frequency or period test**

- To measure Frequency, press the FREQ key followed by clicking the F3 (Measure) key to enter the Measure menu. Click the F1 (Frequency) key and the measured frequency will be displayed on the primary screen with the period value displayed on the sub section beneath.

- To measure Period, press the FREQ key followed by clicking the F3 (Measure) key to enter the Measure menu. Click the F2 (Period) key and the measured period will be displayed on the primary screen with the frequency value displayed on the sub section beneath.

**Display**

**Frequency Mode**

*Figure: Frequency Mode display. Indicator `Frequency` (Frequency Mode), reading `131.5153` (Frequency Value) in `kHz`, `Period: 7.603673us` shown as Period Value in Sub Section. Indicators: `Trig:Auto`, `Filter`, `100ms`, `Range: 100mV`. Softkeys: `AC Range Auto`, `GateTime 100ms`, `Measure Frequency`, `InJack Voltage`, `TimeOut Off`, `2ND Off`.*

**Period Mode**

*Figure: Period Mode display. Indicator `Period` (Period Mode), reading `7.473084` (Period Value) in `us`, `FREQ: 133.8136kHz` shown as Frequency Value in Sub Section. Indicators: `Trig:Auto`, `Filter`, `100ms`, `Range: 100mV`. Softkeys: `AC Range Auto`, `GateTime 100ms`, `Measure Period`, `InJack Voltage`, `TimeOut 1s`, `2ND Off`.*

**Frequency mode display appears**

The mode will switch to the Frequency or Period mode immediately. Press FREQ on the front panel followed by clicking F3 key to choose Frequency as shown below.

*Figure: Frequency display showing `59.96609`, with `Frequency`, `Trig:Auto`, `Filter`, `100ms`, `M Range: 100mV` indicators, `Period: 16.67609ms` in sub section, and `Hz` unit.*

| | |
|---|---|
| Frequency | Indicates Frequency measurement |
| `100ms` | Indicates the active refresh rate |
| `M` | Indicates Manual range selection |
| 100 mV | Indicates the available range of Voltage |
| 59.96609 Hz | Indicates the exactly measured Frequency value |
| 16.67609ms | Indicates the exactly measured Period value |

**Connection**

Depending on different inputs, connect test lead to varied terminals. In terms of voltage, connect test leads between the Input HI terminal and the LO terminal. The display updates the reading.

*Figure: Terminal connection diagram for voltage — INPUT VΩ terminals HI / LO (1000V⎓ / 750V~, 2Vpk, 500Vpk).*

In terms of current, connect test leads between the 3A terminal and the LO terminal or DC/AC 10A terminal (GDM-9061 only) and the LO terminal. The display updates the reading.

*Figure: Terminal connection diagram for current — `MAX 3A` (3A terminal) and `MAX 10A` (10A terminal) connections to LO. Annotations: `500Vpk`, `2Vpk`, `CAT II 300V`.*

### Frequency/Period In-Depth Setting

**Background**

The input voltage/current range for frequency/period measurements can be set to Auto range or to manual. By default, the voltage/current range is set to Auto for both the period and frequency.

**Auto range**

Press the Auto/Enter key. Auto `A` will be displayed on the upper right corner.

**F2 (Gate Time) key to select gate time**

Background — It is the threshold to recalculate frequency/period. Slower the gate time, e.g., 1s, more accurate the reading value.

Press the F2 key to enter gate time menu. Click the F1 – F3 key for the desired gate time. See the figure below with available options.

*Figure: GateTime softkey menu — `1s`, `100ms`, `10ms`, with `ESC : Return`.*

**F4 (InJack) key to select voltage or current**

Background — In accordance with the target inputs, choose the corresponding selection per condition. E.g., select "3A" when the input current is below 3A amplitude.

Press the F4 (InJack) key to determine whether the voltage or current 3A or current 10A (GDM-9061 only) to be measured. Press the F1 – F3 key to select desired option. See the figure shown below with options available.

*Figure: InputJack softkey menu — `Voltage`, `3A`, `10A`, with `ESC : Return`.*

**F5 (Time Out) key to select timeout**

Background — It defines the exact value for timeout, which means measurement will be suspended after reaching the set timeout value when none of input is detected.

Press the F5 key to enter timeout menu. Click the F1 – F2 key for the desired timeout setting. See the figure below with available options.

*Figure: TimeOut softkey menu — `1s`, `Auto`, with `ESC : Return`.*

> **NOTE:** When selecting "Auto", the timeout setting will fully sync with the gate time value.

**F1 (AC Range) key to manually select range setting**

Press the "+" or the "-" key to promptly select the range. The Auto indicator `A` turns to `M` indicating Manual range selection. If the appropriate range is unknown, select the highest range.

You can also press the F1 (AC Range) key to select a range for the measurement. Depending on the InJack setting, the available options vary. See examples below.

**When InJack is Voltage:**

Press the F1 ~ F6 key to select a desired range for the measurement.

*Figure: AC Range softkey menu — `Auto`, `100mV`, `1V`, `10V`, `100V`, `750V`, with `ESC : Return`.*

**When InJack is 3A:**

Press the F1 ~ F5 key to select a desired range for the measurement.

*Figure: AC Range softkey menu — `Auto`, `100uA`, `1mA`, `10mA`, `100mA`, `More 1/2`, with `ESC : Return`.*

Press the F6 (More 1/2) key for next page with more options as figure shown below.

*Figure: AC Range softkey menu page 2 — `1A`, `3A`, `Page Up`, with `ESC : Return`.*

**When InJack is 10A (GDM-9061 only):**

Press the F1 ~ F2 key to select a desired parameter for the measurement.

*Figure: AC Range softkey menu — `Auto`, `10A`, with `ESC : Return`.*

## Cross-references

- [`screens/measurement.md`](../../screens/measurement.md) — the frequency/period reading display (primary value plus sub-section) documented here.

## Confidence notes

- Diode Measurement (page 49) and the F3 Auto Zero block at the top of page 50 belong to the preceding Diode section and were intentionally excluded from this chunk.
- The 10A InJack option and DC/AC 10A terminal are noted in the source as "GDM-9061 only"; reproduced verbatim.
- Display indicator icons (`A`, `M`) are small inline graphics in the source; transcribed by their visible labels.
