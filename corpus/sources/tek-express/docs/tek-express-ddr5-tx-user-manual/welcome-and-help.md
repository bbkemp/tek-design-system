---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: welcome-and-help
section_title: Welcome, Key features, and Getting help
parent_section: null
page_range: "5 to 9"
related_screens: []
related_hardware: []
---

# Welcome, Key features, and Getting help

## Summary

Product positioning and feature surface for the Tektronix TekExpress DDR Tx application — an automated compliance and debug test app for DDR5 and LPDDR5-5X transmitters per the latest JEDEC specification. Covers what the application validates (clock, write/read burst, address-command, chip-select measurements), the device-specific feature lists (319 LPDDR5-5X measurements, 86 DDR5 measurements, mask/margin analysis, DFE, noise compensation), the features common to both devices (de-embedding, UDA, multi-run, burst-detection methods, framework v5.12.0, custom data rates), how to get help on the product (PDF + CHM Help, F1 hotkey, tek.com/downloads), the typographic and icon conventions used in the help, and the information Tek's tech-support team needs when contacted.

## Content

### Welcome

The Tektronix TekExpress DDR Tx is an automated test application that supports DDR5 and LPDDR5-5X to validate and debug design of the respective DUT as per the latest JEDEC specification. The solution enables you to achieve new levels of productivity, efficiency, and measurement reliability.

*Figure 1: DDR5* — DUT panel screenshot in DDR5 mode: Setup wizard with side-nav (Setup, Status, Results, Reports), wizard step indicator (1 DUT highlighted, 2 Test Selection, 3 Acquisitions, 4 Configuration, 5 Preferences), Acquire-live-vs-pre-recorded radios, DUT ID (`DUT001`), Device dropdown (`DDR5`), Device Profile group with Data Rate (`3200 MT/s`), Burst Detection Method dropdown (`Read Write Bursts`) with Setup button, Signal Probe Type group (Clock = Differential, DQS = Differential), Voltage Settings Setup button, TriMode Probe Setup Setup button, Filter Files Path dropdown (`Disable`) with Setup. Right rail: Start (green) and Pause (grey) buttons. Status bar: "Ready."

*Figure 2: LPDDR5-5X* — Same panel in LPDDR5-5X mode: Device dropdown set to `LPDDR5-5X`, Device Profile now has Data Rate (`3200 MT/s`) and WCK:CK (`4:1`), WCK Frequency (`1600 MHz`) and Clock Frequency (`400 MHz`) read-only fields, Signal Probe Type group now has Clock = Differential and WCK/RDQS = Differential, and a disabled "Single-ended mode (Applicable for Data Rate <= 1600MT/s)" checkbox.

DDR (Dual Data Rate) is a dominant and fast-growing memory technology. It offers high data transfer rates required for virtually all computing applications, from consumer products to the most powerful servers. The high speed of these signals require high performance measurement tools.

### Key features for LPDDR5-5X

- Supports 319 measurements of LPDDR5-5X System Transmitter Tests as per LPDDR5 JEDEC specification:
  - 15 Clock Differential measurements
  - 30 Clock Single Ended measurements
  - 15 Clock Single Ended Positive Leg measurements
  - 18 Write Clock Differential measurements
  - 33 Write Clock Single Ended measurements
  - 18 Write Clock Single Ended Positive Leg measurements
  - 18 Write Clock Single Ended Negative Leg measurements
  - 27 Write Burst Differential measurements
  - 19 Write Burst Single Ended measurements
  - 23 Write Burst Single Ended Positive Leg measurements
  - 23 Write Burst Single Ended Negative Leg measurements
  - 11 Read Burst Differential measurements
  - 12 Read Burst Single Ended measurements
  - 15 Read Burst Single Ended Positive Leg measurements
  - 15 Read Burst Single Ended Negative Leg measurements
  - 15 CA Rx Specification measurements
  - 12 CS Rx Specification measurements
- Number of UIs support for Clock, Write Clock, Write Data and Read Data measurements.
- Hexagonal shape mask and margin analysis.
- Single Ended mode support.

### Key features for DDR5

- Single Acquire Type for CLOCK, DATA [Write], DATA [READ], CA measurements; group wise and Analyze.
- Automatic calculation of amplitude for Read Write Burst detection.
- Supports 86 measurements of DDR5 System Transmitter Tests as per DDR5 JEDEC Specification:
  - 26 Clock Differential measurements
  - 21 Clock Single Ended measurements
  - 13 Write Burst Differential measurements
  - 1 Write Burst Single Ended measurements
  - 17 Read Burst Differential measurements
  - 8 Address Command measurements
- Number of UIs support for Clock and Read/Write Data measurements.
- Diamond shape mask and margin analysis for Write Data Eye measurement
- DDR DFE: Deploys 'DDR DFE' Standalone application, that can be launched from TekScope > Analyze > DDR DFE. *(Footnote 1: This feature is supported only for MSO/DPO70000 models.)*
- Support DFE for Write Data Eye measurements. *(Footnote 1)*
- DDR DFE: Added Threshold "Auto" option selection. *(Footnote 1)*
- DDR DFE: Increased the record length capability for continuous signal. *(Footnote 1)*
- Noise Compensation support for Clock measurements. *(Footnote 1)*

### Key features applicable for both DDR5 and LPDDR5-5X

- De-embedding support applicable as per respective signal type in both Devices.
- User Defined Acquisition support for all signal types respectively in both Devices.
- Multi-Run feature is applicable for all tests in both Devices.
- All tests are De-selected by default in Test Selection tab.
- All acquisition sources are De-selected by default in Acquisition panel.
- Enabled de-embedding and TriMode probe support in User Defined Acquisition (UDA).
- Acquire parameters like Record Length and Sample Rate are moved to Global Configurations.
- Save worst case waveform in known / TekExpress sessions.
- Retain Vertical Scale settings supported during acquisition.
- Visual trigger setup file support in Visual Search. *(Footnote 1)*
- User friendly measurement configurations.
- Test Report to reflect all the statistics of the measurement.
- User can select the source and channel in acquisition panel.
- Voltage settings moved into common location for easy access.
- Multiple Burst Detection Methods are supported:
  - Read and Write
  - Write Only
  - Read Only
  - Visual Search *(Footnote 1)*
- Custom Data Rate support upto 15000MT/s.
- Integrated with new TekExpress Framework v5.12.0, which adds improved GUI for 'Results Panel - shows statistics in detail', 'Report Panel', 'pre-recorded mode' and 'multiple configurations / sessions' in same Test Setup.
- Limits will be updated per measurements as per Data Rate selected.
- Limits for Custom Data Rate will be updated to closest data rate of the measurements.
- Save-Recall-Limits features added.
- Show only results option added for Test Report.
- Test Report will show the 'Signal' type for the executed measurements on respective 'Source'.
- Test report reflects supported JEDEC specification version.

### Getting help and support

#### Product documents

Use the product documents for more information on the application functions, understand the theory of operation, how to remotely program or operate the application, and do other tasks.

| To learn about | Use this document |
|---|---|
| How to use the application · How to remotely control the instrument | TekExpress Help. PDF version of this document can be downloaded from `www.tek.com/downloads`. Compiled HTML (CHM) version is integrated with the application. Press **F1** key from the keyboard to start the help. Tektronix Part Number: *(not stated)* |

#### Conventions

This application help uses the following conventions:

- The term "Application," and "Software" refers to the TekExpress Application.
- The term "DUT" is an abbreviation for Device Under Test.
- The term "select" is a generic term that applies to the two methods of choosing a screen item (button control, list item): using a mouse or using the touch screen.
- A **Note** identifies important information.

Icons used in the help:

| Icon | Description |
|---|---|
| (notebook) | This icon identifies important information. |
| (warning triangle) | This icon identifies conditions or practices that could result in loss of data. |
| (light bulb) | This icon identifies additional information that will help you use the application more efficiently. |

#### Technical support

Tektronix values your feedback on our products. To help us serve you better, please send us your suggestions, ideas, or comments on your application or oscilloscope. Contact Tektronix through mail, telephone, or the Web site. See *Contacting Tektronix* at the front of this document for contact information.

When you contact Tektronix Technical Support, please include the following information (be as specific as possible):

**General information:**

- All instrument model numbers
- Hardware options, if any
- Modules used
- Your name, company, mailing address, phone number, FAX number
- Please indicate if you would like to be contacted by Tektronix about your suggestion or comments.

**Application specific information:**

- Software version number
- Description of the problem such that technical support can duplicate the problem
- If possible, save the setup files for all the instruments used and the application
- If possible, save the TekExpress setup files, log.xml, *.TekX (session files and folders), and status messages text file

## Cross-references

- `getting-started` — hardware and software requirements that determine which measurements in the feature lists above are available.
- `setup-dut-panel` — the Device dropdown that switches the application between DDR5 and LPDDR5-5X feature sets.
- `setup-configuration` — DFE, noise compensation, and mask/margin settings called out as DDR5 / LPDDR5-5X key features.

## Confidence notes

- The "Tektronix Part Number" cell in the Product documents table is printed empty in the manual; not extracted here either.
- The footnote "1" attached to several DDR5 key features (DDR DFE, DFE for Write Data Eye, Visual Search, Noise Compensation, continuous-signal record length) means "supported only for MSO/DPO70000 models." Preserved inline above.
- Figure 1 / Figure 2 captions are "DDR5" and "LPDDR5-5X" only; the descriptive text is reconstructed from the rendered screenshots in the PDF.
