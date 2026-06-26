---
class: doc-section
doc_id: tek-express-displayporttx-2-1
doc_title: "TekExpress DisplayPort 2.1 Application Help"
doc_number: 077-xxxx-xx
doc_date: unknown
applies_to: [tek-express]
section_id: welcome-and-help
section_title: Welcome, Key features, and Getting help
parent_section: null
page_range: "1 to 35"
related_screens: []
related_hardware: []
---

# Welcome, Key features, and Getting help

## Summary

Product positioning and feature surface for the Tektronix TekExpress DisplayPort 2.1 application — an automated pre-compliance test app for DisplayPort 2.1 Source devices per DisplayPort 2.1 CTS (Compliance Test Specification). Covers what the application validates (UHBR10, UHBR13.5, UHBR20 data rates; P0–P15 presets; TP2 and TP3_EQ test points; normative and informative measurements per DP 2.1 CTS), the underlying toolchain (DPOJET, CIO plug-in, SDLA, DisplayPort Essential), the feature list (preset optimization, TX Preset Equalization Tests, fixture de-embedding via SDLA-generated custom filter files, DUT toggle automation using Unigraf UCD-323, selective/quick/multi-run testing, signal validation, pre-recorded offline mode, .mht / .pdf / .csv reporting), how to get help on the product (PDF + CHM Help, F1 hotkey, tek.com/downloads), the typographic and icon conventions used in the help, and the information Tek's tech-support team needs when contacted.

## Content

### Welcome

The TekExpress DisplayPort 2.1 software supports CTS 2.1 and performs the pre-compliance tests. It uses DPOJET (Jitter and Eye Analysis tool), CIO plug-in, SDLA (Serial Data Link Layer Analysis), and DisplayPort Essential (DisplayPort measurement library) to perform the pre-compliance tests. These tools are offered by Tektronix for characterization/debug tests and compliance tests of the silicon.

*Figure 1: Setup panel with compliance view* and *Figure 2: Setup panel with advanced view* — DisplayPort 2.1 Setup wizard screenshots showing the side-nav (Setup, Status, Results, Reports) and wizard step indicator (DUT, Test Selection, Acquisitions, Configuration appears only in Advanced view, Preferences).

### Key features

- Complete compliance testing of data rates UHBR10, UHBR13.5, and UHBR20 for DP2.1 Source devices (Enhanced DP, Type C and mDP fixtures).
- Supports P0 to P15 presets for signal test.
- Supports preset optimization feature to find out separate optimal presets for TP2 and TP3_EQ test points for individual data rates.
- Supports both TP2 and TP3 EQ test point testing. Use SDLA for TP3 EQ test point analysis.
- Supports TX Preset Equalization Tests for all data rates.
- Supports normative and informative measurements that are mentioned in DisplayPort 2.1 CTS.
- Support P7625 and P7633 differential probes.
- Fixture De-embedding in differential and single-ended mode by creating a custom filter file using SDLA software to leverage the channel modelling and receiver equalization functionality.
- Supports DUT toggle automation using Unigraf UCD-323 device.
- Selective testing:
  - Selection of specific or all data rates.
  - Selection of tests individually or in groups.
  - Selection of specific signal test presets for TP2 and TP3_EQ test points.
  - Selection of SSC On, Off, or Both.
- Quick testing:
  - Support for using saved setup for testing. Avoids overhead of doing the setup for every run.
  - Support multi-lane testing on one go.
  - Analyze multiple data rates and multiple presets on one go.
  - Analyze TP2 and TP3 EQ test points on one go.
  - One-click selection of multiple tests ensures faster testing.
  - One-click report format change.
- Avoids repeated testing through accurate and reliable results from a single run.
- Supports multi-run feature for test repetition with the same setup.
- Supports signal validation option to detect anomalies in the signal before analysis.
- Supports offline analysis of the saved waveforms in Pre-Recorded mode.
- Detailed test reporting:
  - Exports available in .mht, .pdf and .csv formats for advanced data analysis.
  - Provides a Pass/Fail summary table.
  - Provides compliance report.
  - Provides limits and margin details on each test.
  - Provides all results, grouped by features.
  - Provides a consolidated report for all tests.
- DisplayPort 2.0 DPOJET plug-in solution provides the MOI and setup files for debugging and characterization.
- Optimized algorithms to execute tests with improved accuracy.

### Getting help and support

#### Product documents

Use the product documents for more information on the application functions, understand the theory of operation, how to remotely program or operate the application, and do other tasks.

| To learn about | Use this document |
|---|---|
| How to use the application · How to remotely control the instrument | TekExpress \<Application Name\> Help. PDF version of this document can be downloaded from `http://www.tek.com/downloads`. Compiled HTML (CHM) version is integrated with the application. Press **F1** key from the keyboard to start the help. Tektronix Part Number: 077-xxxx-xx |

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

- `getting-started` — hardware and software requirements that determine what UHBR data rates and fixtures are available.
- `setup-dut-panel` — the DUT tab where Fixture (Enhanced DP / Type C / mDP), Data Rates (UHBR10/13.5/20), Presets (P0–P15), SSC, and DUT Automation (Unigraf UCD-323) are selected.
- See also (base manual): `tek-express-displayporttx/welcome-and-help` — the base DisplayPort 2.0 manual covers RBR/HBR/HBR2/HBR3 data rates and earlier CTS versions; this 2.1 manual layers UHBR10/UHBR13.5/UHBR20 plus the CTS 2.1 specifics on top.

## Confidence notes

- The PDF was supplied as "TekExpress DisplayPortTx 2.1 - Unknown.pdf". No doc number or publication date appears in the cover, copyright, or Product Documents table (the table prints "Tektronix Part Number: 077-xxxx-xx" verbatim). Both fields are flagged `unknown` / placeholder in frontmatter and should be filled in if a numbered version of the source is located.
- The Welcome figure references render as `<image>` placeholders in the PDF export (`Figure 1` and `Figure 2`) — descriptions above are reconstructed from the section context and the rendered Setup panel hierarchy elsewhere in the manual.
- Page numbers reflect the 462-page CHM export where roughly half of pages are blank; section spans cited in `page_range` are approximate windows including the blank padding pages.
