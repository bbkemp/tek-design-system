---
class: doc-section
doc_id: tek-express-pci-express
doc_title: "TekExpress PCI Express Transmitter Compliance and Validation Software Application Help"
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: getting-started
section_title: Getting started — Hardware and software requirements
parent_section: null
page_range: "12 to 17"
related_screens: []
related_hardware: []
---

# Getting started — Hardware and software requirements

## Summary

Host-instrument compatibility matrix for the TekExpress PCI Express application: minimum system requirements (Windows 10 64-bit, secondary monitor on sampling scopes); the full oscilloscope/probe/RF-switch/AFG/AWG matrix mapped to PCIe generations the model supports (Gen1 only on MSO70604; Gen2/3/4 on increasingly capable real-time models; SX-series and DPO714AX up through Gen4/Gen5); the differential probe and TCA selection guide cross-referencing oscilloscope bandwidth to PCIe data rate; the software dependencies (DPOJET, PAMJet, three different MCR versions, .NET 4.7.2, four Intel Sigtest versions, Intel CJT, Skyworks Clock Jitter Tool); install path (`C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express`) and how to view installed version (Options > About TekExpress).

## Content

### Hardware requirements

#### Minimum system requirements

The following table shows the minimum system requirements needed for an oscilloscope to run TekExpress PCI Express.

**System requirements**

| Component | Requirement |
|---|---|
| Oscilloscope | See *Instruments and accessories required* (on page 13) |
| Processor | Same as the oscilloscope |
| Operating system | Microsoft Windows 10 (64-bit only) *Required Windows 10 user account settings* (on page 18) |
| Memory | Same as the oscilloscope |
| Hard disk | Same as the oscilloscope |
| Display | Same as the oscilloscope. > **NOTE:** If TekExpress is running on an instrument having a video resolution lower than 800x600 (for example, a sampling oscilloscope), it is recommended that you connect a secondary monitor, which must be enabled before starting the application. |
| Firmware | Tekscope for MSO/DSA/DPO70000C, D, DX, SX and DPO714AX. > **NOTE:** For software version, refer to Readme TekExpress PCI Express.txt file at `C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express` |
| Software | - DPOJET, Jitter and Eye Diagram Analysis Tool (refer to Readme TekExpress PCI Express.txt for version; supported only for MSO/DPO70000 models). - PAMJet Analysis Tool (refer to Readme; supported only for MSO/DPO70000 models; the TekExpress PCIe Installer does not install PAMJet — user needs to install the right PAMJet software and ensure the option key is enabled). - Matlab Compiler Runtime (MCR): MCR v8.0 required for all PCIe generation testing using DPOJET (installed automatically by DPOJET on MSO/DPO70000 models, requires manual installation on DPO 7 Series); MCR v9.10 required for Gen5 CEM and Base testing using Sigtest Phoenix and refclock testing using Intel CJT (manual install); MCR v9.11 required for Gen6 CEM and Base testing using PAMJet (manual install). - Microsoft .NET 4.7.2 Framework. - Intel Sigtest: v6.1.15 (PCIe Gen6 CEM and Base Spec), v4.0.52 (PCIe Gen4 CEM Spec, Gen4 and Gen5 Base Spec), v4.0.42 (PCIe Gen3 Base spec), v3.2.0.3 (PCIe Gen3 CEM Spec). - Intel CJT, v6.0.4 for Ref-Clock Testing. - Skyworks Clock Jitter Tool, v7.1 for Ref-Clock Testing. |

#### Instruments and accessories required

The following table lists the instruments and accessories required for TekExpress PCI Express application.

**Instruments and accessories required for PCI Express application**

| Instrument/Accessory | Model number |
|---|---|
| Oscilloscope | MSO/DPO 70804DX (Up to PCIe Gen2); MSO/DPO 71254DX (Up to PCIe Gen3); DPO 71304SX (Up to PCIe Gen3); MSO/DPO 71604DX, MSO/DPO 72004DX, MSO/DPO 72304DX (Up to PCIe Gen3); MSO/DPO 72504DX (Up to PCIe Gen4); MSO/DPO 73304DX (Up to PCIe Gen5, except Base Gen5); DPO75002SX / DPO75902SX / DPO77002SX [Standalone or 2 Stack] All Generation Testing; MSO70604 / MSO70604C (Only PCIe Gen1); MSO70804 / MSO70804C (Up to PCIe Gen2); MSO71254 / MSO71254C (Up to PCIe Gen3); MSO71604 / MSO71604C (Up to PCIe Gen3); MSO72004 / MSO72004C (Up to PCIe Gen3); DPO70604C (Only PCIe Gen1); DPO70804C (Up to PCIe Gen2); DPO71254C (Up to PCIe Gen3); DPO71604C (Up to PCIe Gen3); DPO72004C (Up to PCIe Gen3); DPO72504D (Up to PCIe Gen4); DPO73304D (Up to PCIe Gen5, except Base Gen5); DSA72504D (Up to PCIe Gen4); DSA73304D (Up to PCIe Gen5, except Base Gen5); DPO714AX (Up to PCIe Gen4). |
| Arbitrary Function Generator (AFG) (for automatic test pattern toggling) > **NOTE:** The listed AFG/AWG instruments support both differential inputs (requires 2 channels) and 100 MHz burst mode | Tektronix AFG3252, AFG3252C, AFG31252 |
| Arbitrary Waveform Generator (AWG) (for automatic test pattern toggling) | Tektronix AWG5002B/C, AWG5012B/C, AWG5014B/C; Tektronix AWG7082B/C, AWG7122B/C; Tektronix AWG70001A, AWG70002A, AWG70002B/1B |
| RF Switch — Use GPIB cable or USB-to-GPIB or USB cable to connect the oscilloscope to switch. The GPIB address of the RF Switch and toggle instrument (AWG/AFG) must be different. Mini circuit 50 GHz RF switch is not integrated to GEN6 | Keithley System S46T RF Microwave Switch Systems for x12 PCIe; Gigatronics RF Switch 26GHz (8902-L-48TS26) for x16 PCIe; MiniCircuit ZTM6SP4T40 for x12 PCIe; MiniCircuit ZTM28SP6T40 for x16 PCIe |
| NIUSB-6501 for automatic toggling of Gen4 DUTs | Part Number: 779205-01. Discuss product recommendations, quote products, and place an order. Contact : + 91 80-4119 0000. Visit: `https://www.ni.com/en-in/support/model.usb-6501.html` |
| Other devices | SMP-SMA cables; TCA-SMA connectors; Matched pair cables |

### Differential probes

P7513, P7513A, P7516, P7520A, P7625, P7630, P7633, P7713, P7716, P7720 with respective tips

**PCI Express probe / oscilloscope-bandwidth selection matrix:**

| Speed | Minimum oscilloscope bandwidth | TCA-SMA (Max 18 GHz) | TCA-292D (Max 33 GHz) | P7500 (Max 20 GHz) | P7700 (Max 20 GHz) | P7600 (Max 33 GHz) |
|---|---|---|---|---|---|---|
| 2.5 GT/s | 6 GHz | ✓ | ✓ | ✓ | ✓ | ✓ |
| 5.0 GT/s | 12.5 GHz | ✓ | ✓ | ✓ | ✓ | ✓ |
| 8.0 GT/s | 13 GHz | ✓ | ✓ | ✓ | ✓ | ✓ |
| 16.0 GT/s | 25 GHz | | ✓ | | | ✓ |
| 32.0 GT/s | 50 GHz | | ✓ | | | |
| 100 MHz RefClk | 5 GHz | ✓ | ✓ | ✓ | ✓ | ✓ |

### Software requirements

This section briefly describes the system requirements needed to install the application.

#### Downloading and installing the software

Complete the following steps to download and install the latest TekExpress PCI Express application.

1. Go to `www.tek.com`.
2. Click **Downloads**. In the Downloads menu, select DOWNLOAD TYPE as Software and enter the application name in the MODEL OR KEYWORD field and click **SEARCH**.
3. Select the latest version of software and follow the instructions to download the software. Copy the executable file into the oscilloscope.
4. Double-click the executable and follow the on-screen instructions. The software is installed at `C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express`.
5. Select from the Oscilloscope menu, to open the application.

#### Activate the license

To activate the license, access the oscilloscope's help documentation, navigate to the **License Activation** section, and follow the on-screen instructions using the oscilloscope interface.

#### View software version and license key details

To view version information of the application, click **Options > About TekExpress**.

*Figure: About Tektronix TekExpress PCI Express dialog* — Displays "Tektronix TekExpress PCI Express Solutions Version 20.0.1.113" and "TekExpress Framework Version 5.12.0.22", plus copyright text, "View Tektronix End-User License Agreement" hyperlink, "third-party licenses" link, "www.tek.com" link, and OK button.

## Cross-references

- `welcome-and-help` — the per-suite feature lists tied to specific Sigtest / PAMJet / DPOJET / Intel CJT / Skyworks licenses live there.
- `setting-up-test-environment` — Windows 10 user-account settings, the install procedure expanded with InstallShield Wizard detail, and the file-permission setup that must follow installation.
- `starting-application` — Options menu > About TekExpress and Options > Instrument Control Settings.
- `references-and-appendices` — the `C:\Program Files\Tektronix\PCI Express` install root reappears in the Application directories table (note the path differs from the `TekExpress\TekExpress PCI Express` form given here).

## Confidence notes

- The Oscilloscope row of the "Instruments and accessories required" table is a long flat list in the source; reformatted here as a single semicolon-separated cell to preserve table structure.
- The probe/bandwidth matrix uses ✓ for the printed checkmark glyph in the source (which appears as a √-like character).
- The Skyworks Clock Jitter Tool v7.1 is listed only as "for Ref-Clock Testing"; preserved.
- The Software row of the System requirements table is unusually deep; rendered here as a single description cell with sub-bullets to keep the verbatim content intact without exploding the table structure.
