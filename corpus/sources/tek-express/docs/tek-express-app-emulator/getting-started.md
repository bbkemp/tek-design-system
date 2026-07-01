---
provenance: observed
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: getting-started
section_title: Getting started — Hardware/software requirements, install, license
parent_section: null
page_range: "16 to 38"
related_screens: []
related_hardware: []
---

# Getting started — Hardware/software requirements, install, license

## Summary

The install path for the AppEmulator reference framework: download the software from `www.tek.com/downloads`, the installer drops to `C:\Program Files\Tektronix\TekExpress\AppEmulator`, then launch from the oscilloscope's **Application > AppEmulator** menu. License activation is done through the TekScope `Utilities > Option Installation` wizard, and the installed software version and license key details are visible at `Options > About TekExpress`. The Hardware requirements (Supported oscilloscope models, Recommended probes, Recommended SI Interposer) and Software requirements sub-topics exist as headings in this CHM export but have no content tables — AppEmulator is a reference framework whose required-instrument list is application-defined, not framework-defined.

## Content

### Hardware requirements

This topic contains three sub-topics, each rendered as a heading with a Parent topic backlink to *Hardware requirements* but no content in this CHM export:

- **Supported oscilloscope models** *(no content provided)*
- **Recommended probes** *(no content provided)*
- **Recommended SI Interposer** *(no content provided)*

### Software requirements

*(no content provided in this CHM export — heading only.)*

### Downloading and installing the software

Complete the following steps to download and install the latest AppEmulator application.

1. Go to `www.tek.com`.
2. Click **Downloads**. In the Downloads menu, select DOWNLOAD TYPE as Software and enter the application name in the MODEL OR KEYWORD field and click **SEARCH**.
3. Select the latest version of software and follow the instructions to download the software. Copy the executable file into the oscilloscope.
4. Double-click the executable and follow the on-screen instructions.
   The software is installed at `C:\Program Files\Tektronix\TekExpress\AppEmulator`.
5. Select **Application > AppEmulator** from the Oscilloscope menu, to open the application.

### Activate the license

Activate the license using the **Option Installation** wizard in the TekScope application:

1. In the **TekScope** application menu bar, click **Utilities > Option Installation**. The TekScope Option Installation wizard opens.
2. Push the **F1** key on the oscilloscope keyboard to open the Option Installation help topic.
3. Follow the directions in the help topic to activate the license.

### View software version and license key details

To view version information of the application, click **Options > About TekExpress**.

*Figure 1: About Tektronix TekExpress AppEmulator* — Splash-style dialog with the Tektronix TekExpress logo and text:
- `Tektronix TekExpress AppEmulator Solutions Version 5.0.999.31 (DAILY)`
- `TekExpress Framework Version 5.6.999.31_INTERNAL`
- `Copyright © Tektronix, Inc. All rights reserved. Tektronix and TekExpress are registered trademarks of Tektronix, Inc.`
- Hyperlinks: `View Tektronix End User License Agreement` and `third-party licenses`
- `This product contains the following software under` followed by the third-party licenses link
- `www.tek.com` link
- OK button

## Cross-references

- `welcome-and-help` — Product documents table that points to the same `Options > About TekExpress` for version info.
- `starting-application` — the Options menu surface where `About TekExpress` lives.
- `references-and-appendices` — the `C:\Program Files\Tektronix\AppEmulator` install root reappears in the Application directories table (note the install path discrepancy below).

## Confidence notes

- The Hardware requirements page and Software requirements page have no content in the CHM-export PDF — only headings and parent-topic backlinks. The original TekExpress framework manuals (e.g. DDR5) populate these with full oscilloscope, probe, and license tables; the AppEmulator's empty content here reflects that AppEmulator itself is the reference framework, not a specific compliance product with its own hardware constraints.
- **Install path inconsistency.** Step 4 of `Downloading and installing the software` gives `C:\Program Files\Tektronix\TekExpress\AppEmulator`. The References > Application directories chunk gives `C:\Program Files\Tektronix\AppEmulator` (no `TekExpress\` segment). The two locations are documented exactly as printed; the shorter form (under `Tektronix\AppEmulator`) is in the References section figure tree.
- The About dialog (Figure 1) shows two version strings: `AppEmulator Solutions Version 5.0.999.31 (DAILY)` and `Framework Version 5.6.999.31_INTERNAL`. The `_INTERNAL` suffix and "DAILY" marker confirm this is a development / reference build, not a customer release.
