---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: welcome-and-help
section_title: Welcome, Key features, and Getting help
parent_section: null
page_range: "7 to 15"
related_screens: [setup-dut]
related_hardware: []
---

# Welcome, Key features, and Getting help

## Summary

Product front matter for the TekExpress AppEmulator — Tektronix's reference framework application used to demonstrate the TekExpress shell, panels (Setup, Status, Results, Plots, Reports), Options menu, and SCPI command surface. Covers the Welcome cover-screen tour of the DUT panel (DUT ID, Acquire live waveforms vs. Use pre-recorded waveform files, View dropdown, Session, Device dropdown, Suite, Version, Probing Type, Vertical Offset, SSC, Signal Validation Threshold, Analyze on Golden Waveforms, Show Model Information In Popup), the "Key Features" stub, where to find product help (CHM + PDF, F1 hotkey, `tek.com/downloads`), the manual's typographic and icon conventions, and the information Tektronix Technical Support asks for when contacted.

## Content

### Welcome

*Figure 1: Welcome — TekExpress AppEmulator DUT panel.* — Window title `TekExpress AppEmulator - (Untitled)`. Side nav: Setup (active/orange), Status, Results, Plots, Reports. Setup wizard step indicator: 1 DUT (highlighted), 2 Test Selection, 3 Acquisitions, 4 Preferences. DUT panel controls visible: `DUT ID DUT001` with comments icon, Acquire-live-waveforms (selected) vs Use-pre-recorded-waveform-files radios, View dropdown set to `Compliance`, Session label `Default`, Device dropdown `TX-Device`, Suite `Group1`, Version `Spec 1.0`. Device Profile group: Probing Type `Single-Ended`, Vertical Offset `200V`. Device Characteristics: SSC `Off`, Signal Validation Threshold `200mV`. Execution Settings: Analyze on Golden Waveforms `On`, Show Model Information In Popup `Off`. Right rail: Start (green) and Pause (grey) buttons. Status bar: `Ready.`

### Key Features

*(The "Key Features" heading appears on page 8 of the PDF but is followed only by blank pages — no bullet list of features is provided in this CHM export.)*

### Getting help and support

This section lists three sub-topics:

- **Product documents**
- **Conventions**
- **Technical support**

#### Product documents

Use the product documents for more information on the application functions, understand the theory of operation, how to remotely program or operate the application, and do other tasks.

**Table 1. TekExpress Application documents**

| To learn about | Use this document |
|---|---|
| How to use the application · How to remotely control the instrument | AppEmulator Help PDF version of this document can be downloaded from `http://www.tek.com/downloads`. Compiled HTML (CHM) version is integrated with the application. Press **F1** key from the keyboard to launch the help. Tektronix Part Number: `077-xxxx-xx` |

#### Conventions

This application help uses the following conventions:

- The term "Application," and "Software" refers to the AppEmulator application.
- The term "DUT" is an abbreviation for Device Under Test.
- The term "select" is a generic term that applies to the two methods of choosing a screen item (button control, list item): using a mouse or using the touch screen.
- A **Note** identifies important information.

**Table 2. Icons used in the help**

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
- If possible, save the TekExpress setup files, `log.xml`, `*.TekX` (session files and folders), and status messages text file

### Contacting Tektronix

Tektronix, Inc.
14150 SW Karl Braun Drive P.O. Box 500
Beaverton, OR 97077
USA

For product information, sales, service, and technical support:

- In North America, call 1-800-833-9200.
- Worldwide, visit `www.tek.com` find contacts in your area.

## Cross-references

- [`screens/setup-dut.md`](../../screens/setup-dut.md) — the live AppEmulator Setup > DUT screen in the corpus matches Figure 1 in this chunk.
- `getting-started` — install and license activation that follow the Welcome topic.
- `setup-dut-panel` — full documentation of the DUT panel previewed in Figure 1.
- `starting-application` — Options menu including About TekExpress and Email Settings.

## Confidence notes

- The "Tektronix Part Number" cell in the Product documents table is printed literally as `077-xxxx-xx`. This is the placeholder, not a redacted real number — AppEmulator is an internal reference framework SDK, not a customer-published manual.
- The Welcome cover screen labels (`TX-Device`, `Group1`, `Spec 1.0`, `Compliance`, `200V` Vertical Offset, `200mV` Signal Validation Threshold) are emulator placeholder values, not real-world configuration defaults for any specific Tektronix compliance application.
- "Key Features" heading exists on page 8 but the following pages contain no bullet list. This appears to be a CHM-export artifact — the original CHM topic page may have content not extracted into the PDF.
- Figure caption "DDR5" / "LPDDR5-5X" style is not used here; Figure 1 caption is "Welcome" only and described from the rendered screenshot.
