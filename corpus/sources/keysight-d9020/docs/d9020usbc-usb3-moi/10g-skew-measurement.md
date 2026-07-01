---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: 10g-skew-measurement
section_title: 10G Skew Measurement for Retimer Test
parent_section: null
page_range: "57 to 60"
related_screens: []
related_hardware: []
---

# 10G Skew Measurement for Retimer Test

## Summary

10G lane-to-lane skew measurement, classified as **Information Only** (no spec pass/fail). Wires Tx1+/Tx1- of the test fixture to scope Channels 1 and 3, Tx2+/Tx2- to scope Channels 2 and 4, and Rx+ of the fixture to the Aux Out of DSO 90000 (or Cal Out of DSOX 90000). The test is run from the test app's Select Tests tree under `10G Test > Skew measurement for retimer test > Skew Measurement`. Result is the lane-to-lane skew value.

## Content

The 10G Skew Measurement Retimer Test includes:

- Skew Measurement Test (Information Only)

This section provides the Methods of Implementation (MOIs) for Skew Measurement for Retimer Test using a Keysight Infiniium oscilloscope, USB 3.0 test fixture, and USB3.2 Compliance Test Application.

**Connection Diagram** — See Appendix 6, "Test Connection".

**Test Reference from the Specification** — Not applicable (information only test).

### Test Procedure

**Test Overview:** The purpose of this test is to measure lane to lane skew.

1. Set Scope to Default.
2. Connect your Device Under Test to the test fixture. Apply VBUS to the test fixture by connecting to the USB port on the front panel of the scope.
3. Connect Tx1+ and Tx1- of the test fixture to Oscilloscope Channel 1 and Channel 3 using SMA cables. Connect Tx2+ and Tx2- of the test fixture to Oscilloscope Channel 2 and Channel 4 using SMA cables.
4. Connect Rx+ of the test fixture to the Aux Out of DSO 90000 scopes or Cal Out from DSOX 90000 Scopes.
5. Run Skew Measurement test from the test application

*Figure (Select Tests screen)* — `USB3.2 Test Application -- USB3.2 Device 1`. Eight-tab workflow row with **Select Tests** active. Body shows the test selection tree:

- `LFPS Duty cycle`
- `LFPS AC Common Mode Voltage`
- `5G Test`
  - `5G Transmitter SSC Tests`
  - `5G Transmitter Eye Short Channel Tests (USB-IF SigTest)(Short Channel CTLE On)`
  - `5G Transmitter Eye Far End (TP1) Tests (USB-IF SigTest)(CTLE On)`
- **`10G Test`**
  - **`Skew measurement for retimer test`** (checked)
    - **`Skew Measurement`** (highlighted, selected)
  - `10G deemphasis and preshoot test`
- Detail panel: `Test: Skew Measurement`, `Pass Limits: Information Only`, `Limit Set: USB 3.2 Specification version 1.0`, `Description: The purpose of this test is to measure Lane to Lane skew`, `--- Margin Formula: --- None (Margin is not calculated for Information-Only tests)`.
- Messages panel rows: `2020-02-14 03:09:31:881 PM Ready`, `2020-02-14 03:38:30:699 PM Save Changes?`. Details column: `This configuration require to setup M8020A, please setup the connection with M8020A in "Inst Setup" within Setup page`.
- Status bar: `Unsaved Changes · 1 Test`.

*Figure (Connect tab screenshot)* — `SSP Near End Transmitter Eye` header. Body shows the **Connection Diagram** image of an Infiniium oscilloscope on the left and a wired fixture on the right with red, green, and yellow labelled traces marking `Tx1+ / Tx 2+ / Tx1- / Tx 2- / Rx + / Rx -` to the scope channels, and an `N7018A` test box wired with `Connect to Power Supply` and `Connect to Scope using USB Cable`. The DUT block on the lower left is wired to the fixture's `Tx + / Tx -` and `Rx- / Rx+` lines. A note reads: `The yellow connection means end user can connect Rx+/Rx- on N7018A or external instrument to N7015A.`

6. After running the test, lane to lane skew measurement value should be available.

**Expected / Observable Results:** The result of the test includes skew measurement value from lane to lane.

## Cross-references

- `preparing-to-take-measurements` — fixture wiring and test app launch.
- `appendix-test-connection` — generic compliance-test wiring.
- `10g-tp4-far-end-tests`, `10g-tp2-short-channel-tests` — subsequent 10G eye tests use the same wiring with M8020A integration.

## Confidence notes

- The Select Tests tree in the figure shows the test labelled `Skew measurement for retimer test` while the chapter heading says `10G Skew Measurement for Retimer Test` — minor case variance, preserved.
- Step 3 in the source has an embedded "2b." sub-numbering artifact ("…Channel 3 using SMA cables2b. Connect Tx2+ and Tx2- …"). Cleaned to a single numbered step here per format convention (split into clauses) and flagged as a source typo.
- The Connect-tab figure label calls the connection `SSP Near End Transmitter Eye` despite the test running for skew measurement; the same Connect-tab page is reused for multiple 10G tests.
