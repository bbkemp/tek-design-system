---
class: doc-section
doc_id: tek-express-displayporttx-2-1
doc_title: "TekExpress DisplayPort 2.1 Application Help"
doc_number: 077-xxxx-xx
doc_date: unknown
applies_to: [tek-express]
section_id: getting-started
section_title: Getting started — Hardware and software requirements
parent_section: null
page_range: "26 to 55"
related_screens: []
related_hardware: []
---

# Getting started — Hardware and software requirements

## Summary

The host instrument compatibility matrix for the TekExpress DisplayPort 2.1 application: supported oscilloscopes (DPO/MSO 70000 DX series at ≥ 21 GHz for UHBR compliance, plus SX/DPS series), minimum system requirements (Win 10, DPOJET v10.4.0+, SDLA v3.0.13.62+ for CTLE equalization, Adobe Reader 7.0+, IE 11.0 SP1+), recommended probes (P7625 / P7633 differential probes, or TCA-SMA single-ended inputs with P76CA-292 / P76CA-292C / P76CA-SMP / P76TA tips, plus PMCABLE1M phase-matched cables and Fairview Microwave SM8852 SMA-to-SMP adapters), the install path (`C:\Program Files\Tektronix\TekExpress\TekExpress <Application Name>`), how to download and install, how to activate the license via Utilities > Option Installation, and how to view the installed software version (Options > About TekExpress).

## Content

### Hardware requirements

#### Compatibility

The TekExpress DisplayPort 2.1 application runs on the following Tektronix oscilloscopes:

- DPO/MSO72304DX/72504DX/73304DX Series Digital Oscilloscopes
- DPO72304SX, DPO72504SX, DPO73304SX, DPO75002SX, DPO75902SX, DPO77002SX, DPS75004SX, DPS75904SX, and DPS77004SX

#### Minimum system requirements

The following table describes the minimum system requirements for the TekExpress DisplayPort 2.1 application.

| Resources | Supported models |
|---|---|
| Oscilloscope | DPO70000DX/SX series oscilloscopes with bandwidth ≥ 21 GHz for UHBR data rates in compliance mode. Refer Compatibility for list of compatible oscilloscopes. |
| Processor | Same as the oscilloscope |
| Operating System | Same as the oscilloscope (Win 10) |
| Memory | Same as the oscilloscope |
| Hard Disk | Same as the oscilloscope |
| Display | Same as the oscilloscope |
| Software | DPOJET, Jitter and Eye Diagram Analysis Tool, v10.4.0 or later; Microsoft Internet Explorer 11.0 SP1 or later; Microsoft Photo Editor 3.0 or equivalent software for viewing image files; Adobe Reader 7.0 or equivalent software for viewing portable document format (PDF) files; SDLA software v3.0.13.62 or later for performing equalization of CTLE indices. |
| Probes | TCA-SMA single-ended OR P76xx Tri-Mode probe with Probe tip: P76CA-292, P76CA-292C, P76CA-SMP, and P76TA |
| Other Devices | Microsoft compatible mouse or compatible pointing device; Four USB ports (two USB ports minimum) |
| Accessories | Min 1x PMCABLE1M Phase matched cable pair, if you are using TCA-SMA probes. Min 2x SM8852 (Fairview Microwave) SMA to SMP adapter, if you are using TCA-SMA Probes. |

#### Supported probes

The table provides the list of probes recommended for the DisplayPort 2.1 application.

| Recommended Probe model |
|---|
| 7625,7633 differential probe based input, which offers the most efficient test configuration, by offering inputs for all 4 differential DisplayPort signals concurrently. This configuration precludes the testing of common mode and skew measurements.. |
| TCA-based single-ended input (direct Tektronix oscilloscope inputs) supports both differential and single-ended tests. |

### Software requirements

#### Downloading and installing the software

Complete the following steps to download and install the latest TekExpress \<Application Name\> application.

1. Go to `www.tek.com`.
2. Click **Downloads**. In the Downloads menu, select DOWNLOAD TYPE as Software and enter the application name in the MODEL OR KEYWORD field and click **SEARCH**.
3. Select the latest version of software and follow the instructions to download the software. Copy the executable file into the oscilloscope.
4. Double-click the executable and follow the on-screen instructions.
   The software is installed at `C:\Program Files\Tektronix\TekExpress\TekExpress <Application Name>`.
5. Select Application > TekExpress \<Application Name\> from the Oscilloscope menu, to open the application.

#### Activate the license

Activate the license using the Option Installation wizard in the TekScope application:

1. In the TekScope application menu bar, click Utilities > Option Installation. The TekScope Option Installation wizard opens.
2. Push the **F1** key on the oscilloscope keyboard to open the Option Installation help topic.
3. Follow the directions in the help topic to activate the license.

#### View software version and license key details

To view version information of the application, click Options > About TekExpress.

## Cross-references

- `welcome-and-help` — feature list referencing UHBR data rates and CTS 2.1 that the licenses enable.
- `setting-up-test-environment` — what to do after the application is installed and the license is activated (Setup panel views, equipment connection, pre-run checklist, pre-recorded mode).
- `starting-application` — Options menu > About TekExpress and Options > Instrument Control Settings.
- `references-and-appendices` — the `C:\Program Files\Tektronix\<Application Name>` install root reappears in the Application directories table.
- See also (base manual): `tek-express-displayporttx/getting-started` — the base DisplayPort 2.0 manual gives the earlier oscilloscope / probe / fixture matrix for DP 2.0; the 2.1 matrix above narrows the supported scope list to ≥ 21 GHz models and explicitly calls out P7625/P7633.

## Confidence notes

- "Compiled HTML (CHM) version" and the Product Documents reference appear in the Welcome chunk; here in Getting Started the install path uses the placeholder `<Application Name>` literally (the source CHM is parameterized that way). Preserved as printed.
- The probes table prints "7625,7633" without the leading "P" — preserved verbatim, but elsewhere in the manual these probes are written `P7625` and `P7633`.
- The minimum system requirements table prints "Mide level" and other small typographic oddities elsewhere in the manual; the version mentioned in the help text ("TekExpress Displayport 2.1 application") is preserved.
