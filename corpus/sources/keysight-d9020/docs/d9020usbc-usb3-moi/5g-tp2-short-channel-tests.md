---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 5g-tp2-short-channel-tests
section_title: 5G Transmitter Eye Short Channel (TP2) Tests
parent_section: null
page_range: "45 to 52"
related_screens: []
related_hardware: []
---

# 5G Transmitter Eye Short Channel (TP2) Tests

## Summary

5G Eye-at-TP2 (Short Channel) test family. Five sub-tests: Short Channel Random Jitter, Maximum Deterministic Jitter, Total Jitter at BER-12, Template Test, and Differential Output Voltage. Mirrors the TP4 Far End procedure but uses Short Channel SigTest templates (`USB_3_5Gb_CP1_SHORT` for RJ, `USB_3_5Gb_CP0_RjIN_SHORT` for DJ/TJ/Eye Height). Acquisition setup is identical to the TP4 chunk (40 GSa/s, 8M points, 12 GHz bandwidth, Real Time). Includes the Tetherd-channel exclusion note: TP2 tests are not available when 5G Transfer Function > Channel Settings 5G is set to Tethered (path: `Set Up tab > Transfer Function Setup button > Configure Transfer Function dialog box > 5G Transfer Function tab > Channel Settings 5G`).

## Content

The 5G Transmitter Eye Short Channel (TP2) Tests include:

- 5G Short Channel Random Jitter
- 5G Short Channel Maximum Deterministic Jitter Test
- 5G Short Channel Total Jitter at BER-12 Test
- 5G Short Channel Template Test
- 5G Short Channel Differential Output Voltage

This section provides the Methods of Implementation (MOIs) for 5G Transmitter Eye Short Channel tests using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

> **NOTE:** 5G Transmitter Eye Short Channel (TP2) Tests will not be available if **5G Transfer Function > Channel Settings 5G** is selected as **Tethered**.
>
> Set Up tab > Transfer Function Setup button > Configure Transfer Function dialog box > 5G Transfer Function tab > Channel Settings 5G

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Table 6-16 and Table 6-20 (ECN for SSP System Jitter Budget) of the USB 3.2 Specification, revision 1.0. (Same tables as the TP4 chunk; see `5g-tp4-far-end-tests` for the verbatim reproductions.)

*Figure 29: Gen 1 Eye Mask for 5G Transmitter Short Channel tests* — eye diagram with minimum eye width and minimum eye height markers; ±300 mV differential voltage on Y, 0-200 ps on X.

### 5G Short Channel Random Jitter Test

**Test Condition** — Test Method: USB-IF SigTest.

**Test Overview:** The purpose of this test is to verify that the Short Channel Random Jitter of the transmitter complies with the specification.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Ping the DUT until CP1 is attained.
6. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40GSa/s
   - d. 8M points
   - e. Bandwidth to 12GHz
7. Set Sweep as AUTO.
8. Setup horizontal scale to 20us, position at 0.
9. Stop the acquisition and save the waveform in binary format.
10. Launch SigTest tool.
11. Load the waveform file. Select the options for Technology and Template File as shown in *Figure 30*.
    - a. Test Mode set to 'CEM'
    - b. Technology set to 'USB_3_5gb'
    - c. Template File set to 'USB_3_5Gb_CP1_SHORT'

*Figure 30: SigTest tool settings for measuring Short Channel RJ* — `Signal Test 3.2.11` with `Data File ...IMON_APPDATA\Project\NoInfiniiSimFUNC1CP1.bin`, Technology `usb_3_5gb`, Template File `USB_3_5Gb_CP1_SHORT`.

12. Record the measurement result for Short Channel RJ.

*Figure 31: SigTest tool report for Short Channel RJ measurement* — `Full Test Results — NoInfiniiSimFUNC1CP1.bin · Pass!`. Key fields: `Worst Total Eye Violations 0`, `Data Rate (GB/s) 4.98853`, `Mean Unit Interval (ps) 200.4597287`, `Min Eye Width (ps) 166.16822`, `Tj @ E-12 33.83178`, `Dj_dd 6.17430`, **`RJ (RMS) 1.96710 (PASS)`**, `Max Peak to Peak Jitter (ps) 27.38239`, COMPOSIT EYE STATS `Eye Height (mV) 100.00000`, TRANSITION EYE STATS `Min Eye Height (mV) 923.84204`, NON TRANSITION EYE STATS `Min Eye Height (mV) 100.00000`.

**Expected / Observable Results:** The measurement results for Short Channel Random Jitter must be within the conformance limit as specified in the USB 3.2 specification.

### 5G Short Channel Maximum Deterministic Jitter, 5G Short Channel Total Jitter At BER-12, 5G Short Channel Template Test and 5G Short Channel Differential Output Voltage

**Test Conditions** — Test Method: USB-IF SigTest.

**Test Procedure:**

1. Set up the stimulus for 2-cycle LFPS ping.
2. Default the scope.
3. Setup Function 1 as subtraction of Channel 1 and Channel 3.
4. Set horizontal scale to 2ns, position at 0.
5. Ping the DUT until CP0 is attained.
6. Setup the Acquisition
   - a. Select Sampling Mode as "Real Time"
   - b. Set interpolation to OFF
   - c. Sample rate to 40GSa/s
   - d. 8M points
   - e. Bandwidth to 12GHz
7. Set Sweep as AUTO
8. Setup horizontal scale to 20us, position at 0.
9. Stop the acquisition and save the waveform in binary format.
10. Launch SigTest tool.
11. Load the waveform file. Select the options for Technology and Template File as shown in *Figure 32*.
    - a. Test Mode set to 'CEM'
    - b. Technology set to 'USB_3_5gb'
    - c. Template File set to 'USB_3_5Gb_CP0_RjIN_SHORT'
    - d. Set Random Jitter

*Figure 32: SigTest tool settings for measuring DJ, TJ and Eye Height* — `Signal Test 3.2.11` with template `USB_3_5Gb_CP0_RjIN_SHORT` selected; secondary `Rj Select…` dialog at `Set Rj — Rj Value 1.97 ps`.

12. Record the measurement result for DJ, TJ, and Eye Height.

*Figure 33: SigTest tool report for Short Channel DJ, TJ and Eye Height measurement* — `Sigtest Full Test Result Pass!`. Key fields: `Worst Total Eye Violations 0`, `Data Rate (GB/s) 4.98821`, `Mean Unit Interval (ps) 200.4725758`, `Min Time Between Crossovers (ps) 191.49280`, `Min Eye Width (ps) 147.83426`, **`Tj @ E-12 52.16574 (PASS)`**, **`Dj_dd 24.46754 (PASS)`**, `RJ (RMS) 1.97000`, `Max Peak to Peak Jitter (ps) 50.53030`, COMPOSIT EYE STATS **`Eye Height (mV) 544.74237 (PASS)`**, `Location within Eye (UI) 0.50000`, TRANSITION EYE STATS `Min Eye Height (mV) 767.58807`, NON TRANSITION EYE STATS `Min Eye Height (mV) 544.74237`.

**Expected / Observable Results:** The measurement results for Short Channel Deterministic Jitter, Total Jitter and Eye Height must be within the conformance limit as specified in the USB 3.2 specification.

## Cross-references

- `5g-tp4-far-end-tests` — sibling Far End (TP4) family; structurally identical procedure with different SigTest templates.
- `appendix-test-connection`, `appendix-compliance-patterns`, `appendix-infiniisim-setup`.
- `10g-tp2-short-channel-tests` — 10G counterpart.

## Confidence notes

- Figure 32 caption text is reused verbatim from Figure 25 ("SigTest tool settings for measuring DJ, TJ and Eye Height") despite this being the Short Channel variant — the only difference is the template name suffix `_SHORT`.
