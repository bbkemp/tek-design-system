---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: preparing-to-take-measurements
section_title: Preparing to Take Measurements
parent_section: null
page_range: "15 to 22"
related_screens: []
related_hardware: []
---

# Preparing to Take Measurements

## Summary

Chapter 2 — bench preparation before any test runs. Calibration prerequisites for the Infiniium oscilloscope, U7242A USB 3.0 test fixture connection diagram with per-DUT-class wiring (Device, Host, Hub-Upstream, Hub-Downstream), how to launch the USB3.2 Compliance Test Application from the Infiniium menu (Analyze > Automated Test Apps > D9020USBC/D9320USBC USB3 Test App), the eight workflow tabs (Set Up, Select Tests, Configure, Connect, Run, Automate, Results, HTML Report) and what each does, and how to enable the Type-C Controller for testing USB3.2 devices with the Type-C connector.

## Content

Before running the automated tests, you need to acquire the required equipment and software, and you should calibrate the oscilloscope. After the oscilloscope has been calibrated, you are ready to start the USB3.2 Compliance Test Application and perform measurements.

### Calibrating the Oscilloscope

If you have not already calibrated the oscilloscope, refer to the documentation related to Keysight Infiniium Oscilloscopes and its compatible probes to know about the calibration procedures.

> **NOTE:** If the ambient temperature changes more than 5 degrees Celsius from the calibration temperature, internal calibration should be performed again. The delta between the calibration temperature and the present operating temperature is shown in the **Utilities > Calibration** menu.

> **NOTE:** If you switch cables between channels or other oscilloscopes, it is necessary to perform cable and probe calibration again. Keysight recommends that, once calibration is performed, you label the cables with the channel for which they were calibrated.

### Connecting the USB 3.2 Test Fixture

*Figure 5: Block Diagram of U7242A USB 3.0 Test Fixture* — shows the U7242-65501 USB 3.0 Test Fixture board. Top half is the **Device Test** region with SMA pairs labeled by J-numbers and a USB Type-A receptacle; bottom half is the **Host Test** region with another set of SMA pairs and another USB Type-A receptacle. VBUS and GND banana jacks at the bottom (labeled "Current Measurement") and a third USB receptacle to the bottom-left.

The U7242A USB 3.0 test fixture is required to perform the USB3.2 electrical compliance test measurements. The fixture helps you to easily access the USB 3.0 test signals.

The connection to this test fixture depends on the type of device under test (DUT):

**For Device test:**

1. Connect DUT to J1 by using 4 inches USB 3.0 Standard-A to Standard-B cable.
2. Connect J6 and J7 to the oscilloscope to measure USB 2.0 signal.
3. Connect J2 and J3 to the oscilloscope to measure the SuperSpeed (USB 3.0) Transmitter signal.
4. Connect J4 and J5 to the oscilloscope to measure the SuperSpeed (USB 3.0) Receiver signal.

**For Host test:**

1. Connect DUT to J8 by using 4 inches USB 3.0 Standard-A to Standard-B cable.
2. Connect J13 and J14 to the oscilloscope to measure USB 2.0 signal.
3. Connect J11 and J12 to the oscilloscope to measure the SuperSpeed (USB 3.0) Transmitter signal.
4. Connect J9 and J10 to the oscilloscope to measure the SuperSpeed (USB 3.0) Receiver signal.

**For Hub Upstream test:**

1. Follow the connection as per the Device test.

**For Hub Downstream test:**

1. Follow the connection as per the Host test.

### Starting the USB3.2 Compliance Test Application

Ensure that the USB3.2 Device Under Test (DUT) is operating and set to desired test modes.

To start the USB3.2 Compliance Test Application, from the Infiniium Oscilloscope's main menu, select **Analyze > Automated Test Apps > D9020USBC/D9320USBC USB3 Test App**.

*Figure 6: Starting the D9020USBC/D9320USBC USB3 Test App* — shows the Infiniium `Analyze` menu open with items `Gallery…`, `Analysis Diagram…`, `CrossTalk…`, `Equalization…`, `Histogram…`, `Jitter/Noise…`, `Limit Test & Search…`, `Mask Test…`, `Measurement Analysis…`, `Phase Noise…`, `Protocol Decode…`, `Protocol Search…` (disabled), `Real-Time Eye…`, and a submenu **Automated Test Apps** listing `D9010EBSC IEEE 802.3 bs/cd Test App`, `D9010CAUIC CAUI-4 Test App`, `D9042DPPC DisplayPort UHBR Test App`, `D9040EDPV eDP Test App`, `D9050PCIC PCIExpress Gen5 Test App`, `D9040PCIC PCI Express Test App`, `D9040SASC SAS-4 Test App`, **`D9020USBC USB3.2 Test App`** (highlighted), `D9040USBC USB4 Test App`, `D9010USBC USB Test App`.

The USB3.2 Compliance Test Application launches with the **Set Up** tab as default.

*Figure 7: Default window of the USB3.2 test app* — captures the application chrome at first launch:

- **Window title bar:** `USB3.2 Test Application -- NEW PROJECT`.
- **Menu bar:** `File · View · Tools · Help`.
- **Workflow tab bar (eight tabs):** `Set Up` (active, highlighted), `Select Tests`, `Configure`, `Connect`, `Run`, `Automate`, `Results`, `HTML Report`.
- **Set Up tab body — Product Under Test group:** radio group `Device` / `Host` / `Hub-Upstream` / `Hub-Downstream`, checkboxes `10G` and `5G`, `Device ID` text field.
- **Compliance Mode group:** checkbox `Tx Far End (TP4)`, checkbox `Characterization Mode (Informative Only)`.
- **Test Method group:** checkbox `USB-IF SigTest`, checkbox `CTLE On`.
- **Test Information group:** radios `SSC` / `Radio Friendly SSC` / `Clean Clock`, button `Setup Retimer`.
- **Transfer Function group:** button `Transfer Function Setup`; two browse rows — `Load 5G InfiniiSim transfer function:` and `Load 10G InfiniiSim transfer function` — each with a default path `C:\Users\Public\Documents` and a `Browse` button.
- **Input Signal group:** dropdown `Select input signal type:` defaulted to `Live signal`, button `Saved Waveform Setup` (disabled).
- **Connection Type group:** button `Connection Type Setup`.
- **External Instrument Setup group:** button `Inst Setup`, checkbox `Automate Power Supply`.
- **Type-C Environment Setup group:** checkboxes `Enable Type-C Controller` and `Enable PDO DUT Test`.
- **Test Report group:** label `User Comments:` with a blank text area.
- **Messages panel (docked bottom):** column header bar `Summaries (click for details) · Filter… · Clear… · Details`, body row reading `Application initialized and ready for use.`
- **Status bar (bottom-most):** `Unsaved Changes · TCPIP0::localhost::hislip0::INSTR · 0 Tests`.

*Table 1 provides a brief description of the functionality of each tab in the USB 3.2 Test Application:*

*Table 1: Functionality of each tab on the USB 3.2 Test App*

| Tabs on the Test App | Functionality |
|---|---|
| **Set Up** | Lets you identify and set up the test environment, including information about the device under test. The **Device ID** and **Comments** are printed in the final HTML report. |
| **Select Tests** | Lets you select the tests you want to run. The tests are organized hierarchically so you can select all tests in a group. After tests are run, status indicators show which tests have passed, failed, or not been run, and there are indicators for the test groups. |
| **Configure** | Lets you configure test parameters (for example, channels used in test, voltage levels, etc.). |
| **Connect** | Shows you how to connect the oscilloscope to the device under test for the tests that are to be run. |
| **Run** | Lets you start the automated tests. If the connections to the device under test need to be changed while multiple tests are running, the tests pause, this tab shows you how to change the connection, and the Application waits for you to confirm that the connections have been changed before continuing. |
| **Automate** | Lets you construct scripts of commands that drive execution of the Application. |
| **Results** | Contains more detailed information about the tests that have been run. You can change the thresholds at which marginal or critical warnings appear. |
| **HTML Report** | Shows a compliance test report that can be exported or printed. |

#### Type-C Controller

The usability of the current version of the Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application has been extended to test the signals with the Type-C implementation in USB3.2 devices.

To enable this feature, click **Enable Type-C Controller** in the **Type-C Environment Setup** area of the **Set Up** tab.

*Figure 8: Enabling Type-C Environment Setup* — shows the `Type-C Environment Setup` group with `Enable Type-C Controller` checked, a `Setup Type-C Controller` button, a `DUT Orientation:` dropdown defaulted to `Normal` with a `?` help button, and a `Test Ports:` section with checkboxes `Port 1` and `Port 2` plus a `PDO Selection` button.

For more information on the functionality of the various features of the USB3.2 Test Application along with the Type-C setup, refer to the *Keysight D9020USBC/D9320USBC USB 3.2 Compliance Test Application Online Help*.

## Cross-references

- `installing` — earlier step: install the software and license.
- `appendix-test-connection` — the generic compliance-test connection diagram for various tests.
- `lfps-tests`, `5g-ssc-tests`, `5g-tp4-far-end-tests`, `5g-tp2-short-channel-tests`, `5g-blr-clock-switch`, `5g-jitter-transfer-function`, `10g-skew-measurement`, `10g-scd-and-lbps`, `10g-deemphasis-and-preshoot`, `10g-ssc-tests`, `10g-eye-measurement`, `10g-random-jitter`, `10g-tp4-far-end-tests`, `10g-tp2-short-channel-tests` — every test chapter assumes the prep work in this chunk is complete.
- Cross-doc: `d9020usbc-usb3-online-help` — referenced for full feature documentation; the Online Help is the reference, this MOI is the procedure book.

## Confidence notes

- Figure 5 (U7242A block diagram) is a small line drawing; the labels for individual J-numbers on the SMA pairs are not all printed legibly on each test point — the text body lists J1, J2, J3, J4, J5, J6, J7, J8, J9, J10, J11, J12, J13, J14 which are accepted as authoritative.
- Figure 7 is captured in the dark "Midnight" theme of the test app.
- The `Type-C Environment Setup` controls in Figure 8 partially overlap the default-window screenshot in Figure 7 (the default window shows the collapsed state; Figure 8 shows the expanded state after the user enables Type-C).
