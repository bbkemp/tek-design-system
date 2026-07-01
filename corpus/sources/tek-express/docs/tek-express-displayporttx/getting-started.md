---
provenance: observed
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: getting-started
section_title: Getting started — Installing the software and Introduction to the application
parent_section: null
page_range: "34 to 67"
related_screens: []
related_hardware: []
---

# Getting started — Installing the software and Introduction to the application

## Summary

The host-instrument compatibility list (DPO/DSA/MSO 71254C/71604C/72004C, DSA 72504D/73304D, DPO/MSO 72304DX/72504DX/73304DX, and the DPO/DPS 7xxxxSX SX-series), the minimum system requirements (oscilloscope bandwidth scaling — 8 GHz for RBR/HBR Compliance Mode, 12.5 GHz for HBR2, 16 GHz for HBR3 — Windows 10 64-bit, DPOJET v10.3.0 or later, SDLA for CTLE filters), the recommended probe list (TCA-SMA, P7313SMA, P7520A, P7516, P7513A, P7625, P7633, P7720, P7720-SMA, P7716, P7713, P7713-SMA, P6245/46/47/48/50/51, TCP202), Wilder/Vprime/Type-C test fixtures, the install procedure (download web installer from `http://www.tek.com`, install to `C:\Program Files\Tektronix\TekExpress\TekExpress DisplayPortTx`, Alpine Ridge DUTs run the same executable on the DUT), license activation via `Utilities > Option Installation`, viewing version info via `Options > About TekExpress`, and the application overview (TekExpress Test Automation Framework, CTS 1.2 / CTS 1.4 support, Dual Mode DP++ and AUX channel tests, TenLira automation for Alpine Ridge DUTs, integrated DPOJET / SDLA / DisplayPort essential, Pass/Fail summary + Compliance report). Also covers the application directory layout (Bin, Compliance Suites, Examples, ICP, Images, Lib, Plugins, Report Generator, Setup, Tools) and the file-name extensions the application emits (`.TekX`, `.xml`, `.wfm`, `.mht`, `.pdf`, `.csv`).

## Content

### Installing the software

#### Compatibility

The TekExpress DisplayPort Tx application runs on the following Tektronix oscilloscopes:

- DPO/DSA/MSO71254C, DPO/DSA/MSO71604C and DPO/DSA/MSO72004C Series Digital Oscilloscopes
- DPO/DSA72504D and DPO/DSA73304D Series Digital Oscilloscopes
- DPO/MSO72304DX/72504DX/73304DX Series Digital Oscilloscopes
- DPO71304SX, DPO71604SX, DPO72304SX, DPO73304SX, DPO75002SX, DPS75004SX, DPO75902SX, DPS75904SX, DPO77002SX, and DPS77004SX.

#### Minimum system requirements

| Component | Requirement |
|---|---|
| Oscilloscope | MSO70000C/DX, DPO70000C/D/DX/SX, and DSA70000C/D series oscilloscopes with at least 8 GHz for Compliance Mode for RBR and HBR, 12.5 GHz for Compliance Mode for HBR2 and 16 GHz for Compliance Mode for HBR3. For list of compatible oscilloscopes, see *Compatibility*. |
| Processor | Same as the oscilloscope |
| Operating System | Same as the oscilloscope (Windows 10 64-bit) |
| Memory | Same as the oscilloscope |
| Hard Disk | Same as the oscilloscope |
| Display | Same as the oscilloscope |
| Software | DPOJET, Jitter and Eye Diagram Analysis Tool, v10.3.0. or later; Microsoft Internet Explorer 6.0 SP1 or later; Microsoft Photo Editor 3.0 or equivalent software for viewing image files; Adobe Reader 7.0 or equivalent software for viewing portable document format (PDF) files; SDLA software for creating CTLE filters |
| Probes | TCA-SMA single-ended, P7313SMA, P7520A, P7516, P7513A, P7625 (Probe Tips: P76CA292, P76CA292C, P76CASMP, and P76TA), P7633 (Probe Tips: P76CA292, P76CA292C, P76CASMP, and P76TA), P7720, P7720-SMA, P7716, P7713, P7713-SMA, P6245, P6246, P6247, P6248, P6250, P6251, and TCP202. |
| Test fixtures | Wilder DisplayPort fixtures (DP-TPA-P, DP-TPA-R, DP-TPA-C, DPI-TPA-PA, DPI-TPA-PRRCA, MDPI-TPA-PA, and MDPI-TPA-PRRCA); Vprime DisplayPort Inrush current test fixture; DisplayPort Interposer Standard Plug to Standard Receptacle. |
| Type-C | DPC-TPA-R, DPC-TPA-C, DPC-TPA-CB, DPC-TPA-PCB, DPC-TPA-RR, DPC-TPA-PR, DPC-TPA-RRCB, DPC-TPA-PRCB, and DPC-TPA-PRRCB |
| Other Devices | Microsoft compatible mouse or compatible pointing device; Four USB ports (two USB ports minimum); Unigraf DPR-100 or Tektronix DP-AUX; GRL Alt Mode controller (GRL-USB-PD-C1) — Optional device; Wilder DPC fixture; Type-C to Standard DP Dongle |

#### Supported probes

The table gives the list of probes recommended for the DisplayPort Tx application.

**Recommended Probe model**

P7313SMA, P7520A, P7516, P7513A, P7720, P7625 (Probe Tips: P76CA292, P76CA292C, P76CASMP, and P76TA), P7633 (Probe Tips: P76CA292, P76CA292C, P76CASMP, and P76TA), P7720-SMA, P7716, P7713, P7713-SMA, and P7720 differential probe based input, which offers the most efficient test configuration, by offering inputs for all 4 differential DisplayPort signals concurrently. This configuration precludes the testing of common mode and skew measurements.

TCA-based single-ended input (direct Tektronix oscilloscope inputs) supports both differential and single-ended tests including intra-pair skew measurements on up to 2 concurrent DisplayPort signals. 4 lane TCA based single-ended input is supported using RF Switch.

For testing Aux measurement are P6245, P6246, P6247, P6248, P6250, and P6251.

#### Install the software

Install the software on a compatible Tektronix Real-Time oscilloscope running Windows 10. For a list of compatible oscilloscopes, see *Compatibility*.

1. Go to the `www.tek.com` Web site and search for DisplayPortTx to locate the installation file. Download the DisplayPort Tx web installer from `http://www.tek.com`.
2. Close all applications, including any TekVISA applications.
3. Double-click the executable file to extract the installation files.

   After extraction, the installer launches and the software automatically installs in the following location:

   Windows 10 location: `C:\Program Files\Tektronix\TekExpress\TekExpress DisplayPortTx`
4. For Alpine Ridge DUTs, they run the same executable file on DUT to install the required software for controlling the DUT and follow the installation instructions.

#### Activate the license

Activate the license using the option installation wizard on the oscilloscope. Follow these steps to activate the TekExpress DisplayPort Tx license:

1. From the oscilloscope menu bar, click **Utilities** > **Option Installation**. The TekScope Option Installation wizard opens.
2. Instructions for using the Options Installation window to activate licenses for installed applications is provided in the oscilloscope online help. Press the **F1** key on the oscilloscope keyboard to open the Option Installation help topic. Follow the directions in the topic to activate the license.

#### View version and license information

Use the following instructions to view application version information and version information for the application modules such as the Programmatic Interface and the Programmatic Interface Client.

To view version information for application, click the **Options** button in TekExpress application and select **About TekExpress**. View **Version Details** in the About Tektronix TekExpress DisplayPort pop-up. *(Example version printed in figure: TekExpress DisplayPortSolution Version 2.00.217, TekExpress Framework Version 4.0.6.290.)*

> **Note:** This example shows a typical Version Details dialog box, and may not reflect the actual values as shown when you open this item in the application.

Click **View End-User License Agreement** link in About Tektronix TekExpress DisplayPort pop-up, to view the end-user license agreement.

### Introduction to the application

#### DisplayPort Tx application overview

TekExpress is the Tektronix Test Automation Framework, developed to support your current and future test automation needs. TekExpress uses a highly modular architecture that lets you deploy automated test solutions for various standards in a relatively short time.

The Tektronix TekExpress DisplayPort software supports CTS 1.2 and CTS 1.4. The software uses Tektronix DisplayPort AUX controller (DP-AUX for standard DP 1.2 DUTs) and Unigraf DPR-100 to automate DisplayPort physical layer source compliance tests for Standard and Type-C connectors. The DP-AUX / DPR-100 puts the DUT in different test modes and eliminates the need for user intervention during testing.

**Key Features**: DisplayPort Tx has the following key features

- Fully-automated compliance testing of DP1.4 source devices (Standard and Type-C connectors).
- Support for Dual Mode (DP++) and AUX channel tests.
- Support for running automated tests through TenLira scripts for Alpine Ridge DUTs.
- Integration with Tektronix DP-AUX (for standard DP 1.2 DUTs) or Unigraf DPR-100.
- Automatic insertion of modelled channel losses, CTLE equalization and DFE as per the CTS.
- User-Defined mode for characterization, margin testing and debugging (in addition to compliance testing).
- Support for P7625 and P7633 TriMode probes.
- DP-AUX or Unigraf DPR-100 provides DUT control for full automation, saving hours of manual DUT settings.
- Greater bandwidth allows for increased resolutions, higher refresh rates, and greater color depth.
- Automated testing:
  - Minimizes user intervention when conducting time-consuming testing.
  - Reduces the time required to conduct testing.
- Selective testing:
  - Performs fully-automated testing for transmitter measurements.
  - Allows selecting test individually or in groups.
  - Avoids repeated testing through accurate and reliable results from a single run.
- Quick testing:
  - One-button selection of multiple tests ensures faster testing.
  - One-button MHT report format saves time.
- Complete Solution: Complete compliance solution with an elaborate test fixture and support for SMA probing provides a cost-effective way to perform compliance testing.
- Customize the setup:
  - Modify the test setup according to the DUT configuration.
  - Run tests using different record lengths.
  - Run test measurements using more than one signal.
- Detailed test reporting:
  - Provides a Pass/Fail summary table.
  - Provides Compliance report.
  - Provides margin details on each test.
  - Provides all results, grouped by features.
  - Provides a consolidated report for all tests.
  - Provides additional information such as skew, alignment, and signal type selected for each measurement.

#### Application directories and usage

The application directory and associated files are organized as follows: `Bin`, `Compliance Suites`, `Examples`, `ICP`, `Images`, `Lib`, `Plugins`, `Report Generator`, `Setup`, `Tools`.

The following table lists the default directory names and their usage.

| Directory names | Usage |
|---|---|
| `InstallDir\TekExpress\TekExpress DisplayPortTx` | Contains the application and associated files |
| `TekExpress DisplayPortTx\Bin` | Contains the miscellaneous DisplayPort Tx application libraries |
| `TekExpress DisplayPortTx\Compliance Suites` | Contains compliance-specific files |
| `TekExpress DisplayPortTx\Examples` | Contains various support files |
| `TekExpress DisplayPortTx\ICP` | Contains instrument and DisplayPort Tx application-specific interface libraries |
| `TekExpress DisplayPortTx\Images` | Contains Tektronix log images |
| `TekExpress DisplayPortTx\Lib` | Contains utility files specific to the DisplayPort Tx application |
| `TekExpress DisplayPortTx\Plugins` | Contains DUT Automation related plug-ins. |
| `TekExpress DisplayPortTx\Report Generator` | Contains style sheets for report generation |
| `TekExpress DisplayPortTx\Setup` | Contains setup files |
| `TekExpress DisplayPortTx\Tools` | Contains instrument and DisplayPort Tx application-specific files |

#### File name extensions

The TekExpress DisplayPort Tx application uses the following file name extensions:

| File name extension | Description |
|---|---|
| `.TekX` | Session files are saved in this format but the extensions may not be displayed. |
| `.xml` | The encrypted XML file that contains the test-specific configuration information. The log file extension is also `.xml`. |
| `.wfm` | The test waveform file. |
| `.mht` | Test result reports are saved in this format by default. Test reports can also be saved in HTML format. |
| `.pdf` | Test result reports. Application help document. |
| `.csv` | Report is generated in `.csv` format. |

## Cross-references

- `welcome-and-help` — CTS 1.2 / CTS 1.4 positioning and the same Tektronix DP-AUX vs Unigraf DPR-100 split are described in the Welcome.
- `starting-application` — Options > About TekExpress and Options > Instrument Control Settings are the runtime entry points for the version and license info covered here.
- `setup-dut-panel` — the Device / Version / Connector dropdowns the user picks after install live in the DUT tab.
- `references-and-appendices` — Deskew procedure for the channel/probe pairs listed in Supported probes; Appendix-A / Appendix-B compliance parameter tables for CTS 1.2 / CTS 1.4.
- `scpi-commands` and `programmer-interface-commands` — the SCPI / programmer interface entry points become available after this install and license activation completes.

## Confidence notes

- The Minimum system requirements table is split across multiple PDF pages with the "Probes" / "Test fixtures" / "Type-C" / "Other Devices" rows continuing on subsequent pages; reassembled into one table here.
- The Compatibility list includes "DPO75002SX, DPS75004SX, DPO75902SX, DPS75904SX, DPO77002SX, and DPS77004SX" — the SX SKU naming differs from the Welcome's "Non-ATI channels of DPO75002SX..." style in similar Tek manuals; preserved as printed.
- Install path printed in the Install step is `C:\Program Files\Tektronix\TekExpress\TekExpress DisplayPortTx`. Any reference elsewhere in the help to a shorter `C:\Program Files\Tektronix\DisplayPortTx` form is not in scope of this chunk.
- The version captured in the About dialog screenshot — "TekExpress DisplayPortSolution Version 2.00.217" / "TekExpress Framework Version 4.0.6.290" — is preserved as printed; the help explicitly warns it "may not reflect actual values".
