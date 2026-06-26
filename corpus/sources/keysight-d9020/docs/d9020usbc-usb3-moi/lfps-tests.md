---
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: lfps-tests
section_title: Transmitter Low Frequency Periodic Signaling (LFPS) Tests
parent_section: null
page_range: "23 to 30"
related_screens: []
related_hardware: []
---

# Transmitter Low Frequency Periodic Signaling (LFPS) Tests

## Summary

Chapter 3 of the MOI — the LFPS test family. Covers eight transmitter tests (LFPS Peak-Peak Differential Output Voltage, Period tPeriod, Burst Width tBurst, Repeat Time Interval tRepeat, Rise Time, Fall Time, Duty Cycle, AC Common Mode Voltage), with normative spec references (USB 3.2 Spec Tables 6-29 and 6-30) and two test conditions (Gen 1 with LFPS Test Mode False, and Gen 1 with LFPS Test Mode True — which uses the SigTest tool for measurement). Procedural steps cover scope default, Function 1 (subtraction of Channels 1 and 3), Function 4 (common mode of Channels 1 and 3), trigger setup (Pattern mode, High logic, 3-15 µs range), Real Time acquisition at 40 GSa/s and 12 GHz bandwidth, and Burst Width / Burst Interval measurements.

## Content

The Transmitter Low Frequency Periodic Signaling Tests include:

- LFPS Peak-Peak Differential Output Voltage Test
- LFPS Period (tPeriod) Test
- LFPS Burst Width (tBurst) Test
- LFPS Repeat Time Interval (tRepeat) Test
- LFPS Rise Time Test
- LFPS Fall Time Test
- LFPS Duty Cycle Test
- LFPS AC Common Mode Voltage

This section provides the Methods of Implementation (MOIs) for 5G Low Frequency Periodic Signaling (LFPS) tests using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-29 and Table 6-30 of the USB 3.2 Specification, Revision 1.0.

### Table 6-29. Normative LFPS Electrical Specification (reproduced as Figure 9)

| Symbol | Minimum | Typical | Maximum | Units | Comments |
|---|---|---|---|---|---|
| tPeriod | 20 | | 100 | ns | |
| tPeriod for SuperSpeedPlus | 20 | | 80 | ns | |
| V`CM-AC-LFPS` | | | V`TX-CM-AC-PP-ACTIVE` | mV | See Table 6-19 |
| V`CM-LFPS-Active` | | | 10 | mV | |
| V`TX-DIFF-PP-LFPS` | 800 | | 1200 | mV | Peak-peak differential amplitude |
| V`TX-DIFF-PP-LFPS-LP` | 400 | | 600 | mV | Low power peak-peak differential amplitude |
| tRiseFall2080 | | | 4 | ns | Measured at TP2, as shown in Figure 6-20. |
| Duty cycle | 40 | | 60 | % | Measured at compliance TP2, as shown in Figure 6-20. |

### Table 6-30. LFPS Transmitter Timing for SuperSpeed Designs (reproduced as Figure 10)

| Signal | tBurst Min | tBurst Typ | tBurst Max | Min Number of LFPS Cycles | tRepeat Min | tRepeat Typ | tRepeat Max |
|---|---|---|---|---|---|---|---|
| Polling.LFPS | 0.6 µs | 1.0 µs | 1.4 µs | | 6 µs | 10 µs | 14 µs |
| Ping.LFPS | 40 ns | | 200 ns | 2 | 160 ms | 200 ms | 240 ms |
| Ping.LFPS for SuperSpeedPlus | 40 ns | | 160 ns | 2 | 160 ms | 200 ms | 240 ms |
| tReset | 80 ms | 100 ms | 120 ms | | | | |
| U1 Exit | 900 ns | | 2 ms | | | | |
| U2 / Loopback Exit | 80 µs | | 2 ms | | | | |
| U3 Wakeup | 80 µs | | 10 ms | | | | |

Notes (paraphrased from the source table):

1. If the transmission of an LFPS signal does not meet the specification, the receiver behavior is undefined.
2. Only Ping.LFPS has a requirement for minimum number of LFPS cycles.
3. The declaration of the Ping.LFPS depends only on the Ping.LFPS burst.
4. Warm Reset, U1/U2/Loopback Exit, and U3 Wakeup are all single burst LFPS signals. tRepeat is not applicable.
5. The minimum duration of an LFPS burst shall be transmitted as specified. The LFPS handshake process and timing are defined in Section 6.9.2.
6. A Port in U2 or U3 is not required to keep its transmitter DC common mode voltage but must not exceed the V`TX-CM-IDLE-DELTA` spec at TP1.
7. A port is still required to detect U1 LFPS exit signal at a minimum of 300ns. The extra 300ns is provided as the guard band for successful U1 LFPS exit handshake.
8. This requirement applies to Gen 1x1 only designs.
9. This requirement applies to Gen 1x2, Gen 2x1 and Gen 2x2 designs.

### Test Conditions #1 (Gen 1, LFPS Test Mode False)

| Type of DUT | LFPS Test Mode |
|---|---|
| Gen 1 | False |

**Test Overview:** The purpose of this test is to evaluate the LFPS signal to ensure that the timing variables comply with the specification.

**Test Procedure:**

1. Disconnect the USB 3.0 test fixture from the DUT.
2. Setup horizontal scaling with Reference to Center, Scale of 10us, position at 32us.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Setup Function 4 as common mode of Channel 1 and Channel 3.
5. Setup the trigger:
   - a. Trigger level to 200mV
   - b. Trigger mode as Pattern mode
   - c. Set trigger Logic as High on trigger channel
   - d. Setup trigger condition to range between 3us to 15 us
6. Setup the trigger to "Single"
7. Setup the Acquisition
   - a. Select Real Time mode
   - b. Set interpolation to OFF
   - c. Acquire points to AUTO
   - d. Sample rate to 40GSa/s
   - e. Bandwidth to 12GHz
8. Verify that the correct waveform has been acquired

*Figure 11: Acquiring the correct waveform* — Infiniium scope screen showing roughly ten LFPS bursts across an 18 µs to 82 µs time window, vertical scale ±800 mV with the body of each burst reaching about ±500 mV.

9. Set up the parameter measurement:
   - a. Get all locations for the Start Burst and the Stop Burst of the LFPS.
   - b. Burst Width Measurement is the Start edge - Stop edge of the selected Burst.

*Figure 12: Burst Width Measurement* — zoomed view of a single LFPS burst with cursors X1, X2 measuring `998.80 ns` width; the Results pane reads `Burst intrvl(f1) Edge?` with `X1(f1) -10.999703 µs · X2(f1) -10.000909 µs · ΔX 998.796425 ns · 1/ΔX 1.0012050 MHz · Y1(f1) -100.000 mV · Y2(f1) 100.000 mV · ΔY 200.000 mV · ΔY/ΔX 200.241 V/ms`.

   - c. Burst Interval is the Start edge of the next burst — Start edge of current Burst.

*Figure 13: Burst Interval* — wider view showing three bursts with X1/X2 cursors on consecutive Burst starts, measuring `9.9995 µs` between them; Results pane reads `Burst intrvl(f1) 9.0006750 µs · 9.0006250 µs · 9.0006250 µs … X1(f1) -10.999703 µs · X2(f1) -1.00023167 µs · ΔX 9.9994742 µs · 1/ΔX 100.00528 kHz · Y1(f1) -100.000 mV · Y2(f1) 100.000 mV · ΔY 200.000 mV · ΔY/ΔX 20.0011 V/ms`.

   - d. Measure the parameter below on each Burst. The measurement window on each Burst must be set to 100ns after the Burst start and 100ns before the Burst end. This is done to comply with CTS requirements.
     - i. Differential Voltage
     - ii. Period
     - iii. Duty Cycle
     - iv. Rise Time
     - v. Fall Time
     - vi. Common Mode Voltage
10. Report the measurement values

**Expected / Observable Results:** The timing measurement results must be within the conformance limit as specified in the USB 3.2 specification.

### Test Conditions #2 (Gen 1, LFPS Test Mode True)

| Type of DUT | LFPS Test Mode |
|---|---|
| Gen 1 | True |

**Test Overview:** The purpose of this test is to evaluate the LFPS signal to ensure that the timing variables comply with the specification.

**Test Procedure:**

1. Disconnect the USB 3.0 test fixture from the DUT.
2. Setup horizontal scaling with Reference to Center, Scale of 10us, position at 32us.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Setup Function 4 as common mode of Channel 1 and Channel 3.
5. Setup the trigger:
   - a. Trigger level to 200mV
   - b. Trigger mode as Pattern mode
   - c. Set trigger Logic as High on trigger channel
   - d. Setup trigger condition to range between 3us to 15 us
6. Setup the trigger to "Single"
7. Setup the Acquisition
   - a. Select Real Time mode
   - b. Set interpolation to OFF
   - c. Acquire points to AUTO
   - d. Sample rate to 40GSa/s
   - e. Bandwidth to 12GHz
8. Verify that the correct waveform has been acquired.
9. Save the waveform in binary format.
10. Launch the SigTest tool
    - a. Ensure that the Test Mode is set to 'CEM'
    - b. Ensure that the Technology is set to 'usb_3_5gb'
    - c. Ensure that the Template File is set to 'USB_3_LFPS'

*Figure 14: SigTest Tool settings for LFPS tests* — `Signal Test 3.2.11` dialog with `Data Type Differential`, `Test Mode CEM`, `Data File [path]\CHAN1_LFPS.bin`, Technology `usb_3_5gb`, Template File `USB_3_LFPS`, Sample Interval `25.000 ps`, Number of Unit Intervals In File `800001`, and action buttons `Load and Verify Data File`, `Preset Test`, `Test`, `Exit` plus the bottom tab strip `Worst Eyes / Worst Transition Eyes / Jitter Histogram / Voltage Data / Results / PDF / QSpace Data / Filter Plot`.

11. Report Measurement using the report generated by SigTest tool.

*Figure 15: SigTest tool report for LFPS tests* — `Low Frequency Results` window titled `Pass!` showing `USB (LFPS) Result`. Three result panels:

- **Voltage Stats:** `Min Amplitude (V) 0.8773 (PASS) · Max Amplitude (V) 0.8900 (PASS) · Min DIFF_DC (V) 0.0000 · Max DIFF_DC (V) 0.0000 · Max CM AC (mV) 61.5188 (PASS)`.
- **Misc Stats:** `# of bursts 5 · 1st burst length (µs) 1.0490 · 2nd 1.0490 · 3rd 1.0490 · 4th 1.0490 · 5th 1.0490 · Ave Period (ns) 31.9997`.
- **Time Stats:** `Min Prepare Time (ns) 0.0000 · Max Prepare Time (ns) 0.0000 · Min Period (ns) 31.9662 (PASS) · Max Period (ns) 32.0310 (PASS) · Min Burst Time (µs) 1.0490 (PASS) · Max Burst Time (µs) 1.0490 (PASS) · Min Repeat Time (µs) 9.9994 (PASS) · Max Repeat Time (µs) 9.9994 (PASS) · Min Duty Cycle 50.2059 · Max Duty Cycle 50.3994 · Rise Time (ps) 271.8 (PASS) · Fall Time (ps) 260.0 (PASS)`.

**Expected / Observable Results:** The timing measurement results must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `appendix-test-connection` — the wiring diagram for all USB 3.2 compliance tests.
- `appendix-compliance-patterns` — the LFPS waveform appears as the "LFPS Pattern in 5G Tests" reference image.
- `preparing-to-take-measurements` — fixture / DUT preparation that precedes any LFPS run.

## Confidence notes

- "Figure 6-34" referenced in Table 6-30's notes is the spec figure (USB 3.2 Spec Figure 6-34), not a figure printed in this MOI.
- The SigTest dialog (Figure 14) is screen-grabbed from SigTest 3.2.11; subsequent test chapters show SigTest 4.0.23 — both versions are normal across the test suite.
- Voltage Stats panel in Figure 15 shows two greyed-out Min/Max DIFF_DC rows; preserved as printed since the test does not exercise them in this run.
