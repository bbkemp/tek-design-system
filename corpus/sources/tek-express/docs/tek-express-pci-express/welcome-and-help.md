---
class: doc-section
doc_id: tek-express-pci-express
doc_title: "TekExpress PCI Express Transmitter Compliance and Validation Software Application Help"
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: welcome-and-help
section_title: Welcome, Key features, and Getting help
parent_section: null
page_range: "7 to 11"
related_screens: []
related_hardware: []
---

# Welcome, Key features, and Getting help

## Summary

Product positioning and feature surface for the TekExpress PCI Express Automated Test Solution Software application (referred to as TekExpress PCIe or PCIe in the rest of the document). It provides an automated, simple, and efficient way to test PCI Express interfaces and devices consistent with the requirements of the PCI Express specifications. Covers the full per-suite feature lists (CEM, Base, U.2 (SFF-8639), M.2, CXL, Ref Clock — Gen1 through Gen6), the analysis-tool integration matrix (Intel Sigtest v3.2.0.3 / v4.0.42 / v4.0.52 / v6.1.15, Tektronix PAMJet for Gen6, DPOJET, Intel CJT v6.0.4, Skyworks Clock Jitter Tool v7.1), reporting features, MOI run-time guidance, ATI 200 GS/s channel support, RF Switch integration for x12 and x16 lane testing, automated DUT toggle (AWG/AFG/NI USB 6501), how to get help on the product (PDF + CHM Help, F1 hotkey, tek.com/downloads), the typographic and icon conventions used in the help, and the information Tek's tech-support team needs when contacted.

## Content

### Welcome

The Tektronix TekExpress® PCI Express Automated Test Solution Software application (referred to as TekExpress PCIe or PCIe in the rest of the document) provides an automated, simple, and efficient way to test PCI Express interfaces and devices consistent to the requirements of the PCI Express specifications.

*Figure 1: TekExpress PCI Express application start screen (with ATI Mode)* — Setup wizard with side-nav (Setup, Status, Results, Reports), wizard step indicator (1 DUT highlighted, 2 Test Selection, 3 Acquisitions, 4 Configuration, 5 Preferences). DUT panel shows DUT ID `DUT001`, Slot Number `01`, Acquire-live / Use pre-recorded radios, Test Mode dropdown (`Compliance`), Session selector (`Default`), Specification dropdown (`CEM`), Device Type dropdown (`Add-In-Card`), Version dropdown (`Gen6 - 6.0`), Device Profile group with Data Rates checklist (`64 Gb/s`), Presets / SSC / Swings and Crosstalks Setup buttons, Lanes button (`Selected Lanes L0`), Filters / Signal Validation / Deskew/Attenuation buttons, Automated DUT Control checkbox and Setup button, Use Switch Matrix checkbox and Setup button. Right rail: Start (green) and Pause (grey) buttons. Status bar: "Ready."

### TekExpress PCIe key features and benefits

- **PCIe CEM Tx testing**
  - Supports Add-In-Card and System Board device types
  - Supports Gen6 testing using Tektronix PAMJet and Intel Sigtest analysis tool
  - Supports Gen1, Gen2, Gen3, Gen4 and Gen5 testing using Intel Sigtest
  - Supports Signal Quality test for all generations
  - Supports Preset test for Gen3, Gen4, Gen5 and Gen6 generations
  - Supports Pulse Width Jitter test for Gen4, Gen5 and Gen6 Add-In-Card device type
- **PCIe Base Tx testing**
  - Supports PCIe Gen5 Base Tx Common Clock and SRIS architecture
  - Supports Gen6 testing using Tektronix PAMJet and Intel Sigtest analysis tool
  - Supports Gen3, Gen4 and Gen5 testing using Intel Sigtest
  - Supports Jitter and Voltage Signal Quality test and Preset test for all generations
- **U.2 (SFF-8639) Tx testing**
  - Supports Gen3 Host and Module device types
- **M.2 Tx testing**
  - Supports Gen3 M.2 Add-In-Card and Host device types
- **PCIe CXL testing**
  - Supports Gen3, Gen4, and Gen5 versions of CXL Base, CEM Card and CEM Host type device testing
- **PCIe Ref Clock Tx testing**
  - Supports Gen1 to Gen6 Ref Clock Jitter and Signal Integrity measurements
- Supports automated scope noise characterization and compensation for Gen6 CEM and Base Spec testing
- Support CTLE optimization for Gen6 CEM and Base Spec testing
- Supports channel embed and de-embed filter files
- Supports de-embedding on each ATI channel using separate filter files
- Supports Intel CJT, Skyworks Clock Jitter tool for ref clock analysis
- Supports traditional break-out channel de-embedding and SigTest CTLE (for uncorrelated jitter measurements only)
- Automated De-skew and attenuation for ATI Channels
- Supports signal validation for all generations
- Supports single and multiple acquisition for all suites and generations.
- Trigger type support for Gen3, Gen4, Gen5 (Auto/Width/Edge), Gen6(Edge).
- Automated toggling of the DUT to switch presets for CEM, U.2, and M.2 device types using AWG/AFG/NI USB 6501 DUT Controller
- Simple push button, enabling the users to manually toggle PCIe presets from AWG/AFG
- Support for Gen4, Gen5 and Gen6 data-clock pattern custom toggle index in non standard devices
- RF Switch support to test the x12 and x16 lanes using Mini-Circuit, Keithley and Gigatronics switches respectively.
- For Gen6 multilane testing, Minicircuits Switch with 40GHz BW is supported.
- Fully automated General, Jitter, Composite Eye, Transition Eye, and Non Transition Eye measurements
- Provides individual or group test selection by using a tree-structure menu
- Supports preset test selection for all device types
- Integrated Intel Sigtest for fully automated waveform analysis
  - Supports parallel execution of measurements using multiple instances of SigTest to accelerate the test analysis speed
  - Deploys recommended versions of SigTests for analysis
    - Sigtest v6.1.15 : Gen6 CEM and Base Spec
    - Sigtest v4.0.52: PCIe Gen4 CEM Spec, Gen4 and Gen5 Base Spec
    - Sigtest v4.0.42: PCIe Gen3 Base spec
    - Sigtest v3.2.0.3: PCIe Gen3 CEM Spec
  - Option to browse and select different Sigtest versions and templates for debug
  - Support Sigtest run in silent mode (not applicable for Sigtest v3.2.0.3)
- Built-in reporting features:
  - Provides a pass/fail summary table
  - Provides generation specific pass/fail status summary table
  - Provides margin details on each test
  - Provides a consolidated report for all tests
  - Supports `.pdf`, `.mht` and `.csv` formats
- Provides Tektronix Method of Implementation (MOI) for PCIe testing run-time setup instructions with image pop-ups and reference
- Illustrations for each test execution
- Provides an automation solution (for compliance) and debugging using both PAMJET and DPOJET
- TekExpress setup files in-line with PCI-SIG compliance workshop
- Supports SCPI commands to remotely communicate with the TekExpress application
- Tektronix ATI (200GS/s) channel support for CEM, Base Spec, U.2, M.2 and Ref clock testing for all generations (Not applicable for CEM System Board Gen1-4 and U.2 Host Gen3)
- 33 GHz oscilloscope supports CEM Gen5 TX testing using Tekconnect channels
- Supports Eye Diagram plots for Base Spec through DPOJET

### Getting help and support

#### Product documents

Use the product documents for more information on the application functions, understand the theory of operation, how to remotely program or operate the application, and do other tasks.

**TekExpress Application documents**

| To learn about | Use this document |
|---|---|
| How to use the application · How to remotely control the instrument | TekExpress PCI Express Help. PDF version can be downloaded from `www.tek.com`. Compiled HTML (CHM) version is integrated with the application. Press **F1** key from the keyboard to start the help. Tektronix Part Number: `077-xxxx-xx` |

#### Conventions

This application help uses the following conventions:

- The term "Application," and "Software" refers to the TekExpress PCI Express Application.
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
- If possible, save the TekExpress setup files, log.xml, `*.TekX` (session files and folders), and status messages text file

## Cross-references

- `getting-started` — hardware and software requirements that determine which suites/generations from the feature lists above are available.
- `setup-dut-panel` — the Specification / Device Type / Version selectors that switch the application between CEM / BaseSpec / U.2 / M.2 / CXL / RefClock feature sets.
- `setup-configuration` — CTLE optimization, scope-noise characterization, and analysis-tool (PAMJet / Sigtest / Intel CJT / Skyworks) selection called out as key features.
- `references-and-appendices` — How to run Base SRIS Tx Test Board tests reflects the Gen5 SRIS architecture key feature.

## Confidence notes

- The "Tektronix Part Number" cell in the Product documents table is printed `077-xxxx-xx` (literal placeholder) in the manual. The cover page prints the actual part number `077-1762-05` and the March 2026 publication date — preserved both as printed.
- Figure 1 caption is "TekExpress PCI Express application start screen (with ATI Mode)" only; the descriptive control inventory is reconstructed from the rendered screenshot in the PDF (Gen6 CEM Add-In-Card mode).
- The Sigtest version selection logic (silent mode "not applicable for Sigtest v3.2.0.3") is transcribed verbatim.
