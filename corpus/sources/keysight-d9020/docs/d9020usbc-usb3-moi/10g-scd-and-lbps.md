---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 10g-scd-and-lbps
section_title: 10G SCD and LBPS Tests
parent_section: null
page_range: "61 to 68"
related_screens: []
related_hardware: []
---

# 10G SCD and LBPS Tests

## Summary

Two related 10G test families: **LBPS** (Low Burst Periodic Signaling) — tPWM, tLFPS_0, tLFPS_1 (USB 3.2 Spec Table 6-33); and **SCD** (SuperSpeedPlus Capability Declaration) — SCD1, SCD2, Rise Time, Fall Time, Duty Cycle, Period, tRepeat, tBurst, Differential Voltage, Common Mode Voltage. The two share a procedure pattern: stimulus on the Set Up tab, fixture disconnected from DUT, HSETT tool closed, scope Function 1 = subtraction of Ch1/Ch3 and Function 4 = common mode of Ch1/Ch3, Pattern-mode trigger Low logic in 2-5 µs range, Real Time acquisition at 1 GSa/s (LBPS) or 40 GSa/s @ 12 GHz (SCD). SCD test decodes a binary pattern from the LFPS burst train — SCD1 = '0010', SCD2 = '1101' per the spec — using the Polling.LFPS binary mapping where tRepeat 6-9 µs = '0' and 11-14 µs = '1' (Table 6-32).

## Content

The 10G LBPS Tests include:

- 10G LBPS tPWM
- 10G LBPS tLFPS_0
- 10G LBPS tLFPS_1

The 10G SCD Tests include:

- 10G SuperSpeedPlus Capability Declaration (SCD1)
- 10G SuperSpeedPlus Capability Declaration (SCD2)
- 10G SCD Rise Time
- 10G SCD Fall Time
- 10G SCD Duty Cycle
- 10G SCD Period
- 10G SCD tRepeat
- 10G SCD tBurst
- 10G SCD Differential Voltage
- 10G SCD Common Mode Voltage

This section provides the Methods of Implementation (MOIs) for 10G LBPS and 10G SCD tests using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

### 10G LBPS Tests

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-33 of the USB 3.2 Specification, revision 1.0.

#### Table 6-33. LBPS Transmit and Receive Specification (reproduced as Figure 37)

| | Unit | Transmit Min | Transmit TYP | Transmit Max | Receive Min | Receive TYP | Receive Max |
|---|---|---|---|---|---|---|---|
| tPWM | µs | 2 | 2.2 | 2.4 | | | |
| tLFPS-0 | µs | 0.5 | | 0.80 | 0.45 | | 0.85 |
| tLFPS-1 | µs | 1.33 | | 1.80 | 1.28 | | 1.85 |

*Figure 38: Figure 6-34 of USB 3.2 Specification Version 1.0 — Logic Representation of LBPS* — schematic with a `Logic '0'` region (`tLFPS-0`) followed by a `Logic '1'` region (`tLFPS-1`), the two spanning the full `tPWM` window.

**Test Overview:** The purpose of this test is to evaluate the LBPS signal to ensure that the timing variables comply with the specification.

**Test Procedure:**

1. Set up the stimulus connection on the **Set Up** tab.
2. Disconnect the USB 3.0 test fixture from the DUT.
3. Close the HSETT tool.
4. Setup horizontal scaling with Reference to Right, Scale of 30us, position at 200us.
5. Setup Function 1 as subtraction of Channel 1 and Channel 3.
6. Setup Function 4 as common mode of Channel 1 and Channel 3.
7. Setup the trigger:
   - a. Trigger level to 200mV
   - b. Hold off to 500us
   - c. Trigger mode as Pattern mode
   - d. Set trigger Logic as Low on trigger channel
   - e. Setup trigger condition to range between 2us to 5 us
8. Setup the trigger to "Single"
9. Setup the Acquisition
   - a. Select Real Time mode
   - b. Set interpolation to OFF
   - c. Acquire points to AUTO
   - d. Sample rate to 1GSa/s
10. Set stimulus to ON.
11. Verify that the correct waveform has been acquired. The highlighted area in *Figure 39* is the LBPS signal.

*Figure 39: LBPS signal on the acquired waveform in 10G LBPS tests* — Infiniium screen showing a sparse leading region with three narrow bursts, then a dense LBPS region (highlighted with a red box of duration 98.970 µs) of densely packed pulses across the 20-170 µs window, ±800 mV vertical.

12. Set up the parameter measurement:
    - a. Get all locations for the Start Burst and the Stop Burst of the LBPS waveform.
    - b. Burst Width Measurement is the Start edge - Stop edge of the selected Burst.
    - c. Burst Interval is the Start edge of the next burst - Start edge of current Burst.
    - d. Measure the parameter below on the LBPS signal. Refer to *Universal Serial Bus 3.2 Specification, Revision 1.0* for examples pertaining to tPWM, tLFPS_0 and tLFPS_1.
13. Report the measurement values.

**Expected / Observable Results:** The measurement results for tPWM, tLFPS_0 and tLFPS_1 must be within the conformance limit as specified in the USB 3.2 specification.

### 10G SuperSpeedPlus Capability Declaration (SCD) Tests

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-29, Table 6-30, and Table 6-32 of the USB 3.2 Specification, revision 1.0.

Tables 6-29 (Normative LFPS Electrical Specification) and 6-30 (LFPS Transmitter Timing for SuperSpeed Designs) are reproduced verbatim in `lfps-tests`.

#### Table 6-32. Binary Representation of Polling.LFPS (reproduced as Figure 42)

| tRepeat (µs) | Logic value |
|---|---|
| 6~9 | '0' |
| 11~14 | '1' |
| 9~11 | illegal |

*Figure 42 (continued): Figure 6-35 of USB 3.2 Specification Version 1.0 — Example of Binary Representation based on Polling.LFPS* — two consecutive LFPS bursts with `tRepeat = 6µs~9µs` mapping to `Logic '0'` and `tRepeat = 11µs~14µs` mapping to `Logic '1'`, separated by Electrical Idle.

**Test Overview:** The purpose of this test is to evaluate the SCD signal to ensure that the timing variables comply with the specification.

**Test Procedure:**

1. Set up the stimulus connection on the **Set Up** tab.
2. Disconnect the USB 3.0 test fixture from the DUT.
3. Close the HSETT tool.
4. Setup horizontal scaling with Reference to Right, Scale of 150us, position at -5us.
5. Setup Function 1 as subtraction of Channel 1 and Channel 3.
6. Setup Function 4 as common mode of Channel 1 and Channel 3.
7. Setup the trigger:
   - a. Trigger level to 200mV
   - b. Hold off to 500us
   - c. Trigger mode as Pattern mode
   - d. Set trigger Logic as Low on trigger channel
   - e. Setup trigger condition to range between 2us to 5 us
8. Setup the trigger to "Single"
9. Setup the Acquisition
   - a. Select Real Time mode
   - b. Set interpolation to OFF
   - c. Acquire points to AUTO
   - d. Sample rate to 40GSa/s
   - e. Bandwidth: 12GHz
10. Set stimulus to ON.
11. Verify that the correct waveform has been acquired. The highlighted area in *Figure 43* is the SCD signal.

*Figure 43: SCD signal on the acquired waveform in 10G SCD tests* — Infiniium screen with a long electrical-idle baseline followed by a dense burst train starting around 0 µs.

12. Set up the parameter measurement:
    - a. Get all locations for the Start Burst and the Stop Burst of the SCD waveform.
    - b. Burst Width Measurement is the Start edge - Stop edge of the selected Burst.
    - c. Measure tRepeat, where tRepeat is the Burst Interval (Start edge of the next burst - Start edge of current burst) measurement.
13. Decode SCD1 from the waveform.

*Figure 44: Decoding SCD1* — five consecutive narrow bursts spread across roughly 436 µs to 395 µs of horizontal scale, ±800 mV vertical, cursor selection at -413 µs / 4.57 µs.

14. Decode SCD2 from the waveform.

*Figure 45: Decoding SCD2* — five bursts across roughly 224 µs to 165 µs span, similar appearance to Figure 44 but at a different time window.

15. Measure the parameters listed below on each Burst. The measurement window on each Burst must be set to 100ns after the Burst start and 100ns before the Burst end. This is done to comply with the CTS requirements.
    - a. Differential Voltage
    - b. Period
    - c. Duty Cycle
    - d. Rise Time
    - e. Fall Time
    - f. Common Mode Voltage
16. Report the measurement values.

**Expected / Observable Results:**

- SCD pattern must be correct. SCD1 pattern is '0010' and SCD2 pattern is '1101'.
- The timing measurement results must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `lfps-tests` — Tables 6-29 and 6-30 (LFPS Electrical Spec and Timing) are reproduced verbatim there.
- `appendix-test-connection` — wiring.
- `appendix-compliance-patterns` — the "SCD and LBPM Pattern" reference image.
- `10g-deemphasis-and-preshoot` — next 10G test family.

## Confidence notes

- Source text mixes "LBPS" (the spec term) and "LBPM" (which appears in the Appendix reference image caption "SCD and LBPM Pattern" on page 102). Treated as synonyms; preserved as printed in each instance.
- Table 6-33 is rendered with empty Receive cells for the tPWM row; preserved as printed.
