---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: getting-started
section_title: Getting started — Hardware and software requirements
parent_section: null
page_range: "10 to 11"
related_screens: []
related_hardware: []
---

# Getting started — Hardware and software requirements

## Summary

The host instrument compatibility matrix for the TekExpress DDR Tx application: supported oscilloscope models, recommended active TriMode probes (P7720 / P7716) and probe tips (TekFlex connector technology for probing motherboards, vias, and Nexus XH Series SI Interposers), recommended SI interposers from Nexus Technology, and the software license matrix (LPDDR5SYS, DDR5SYS, SDLA64, VET, DJA for MSO/DPO70000; CMDDR5SYS, CMLPDDR5SYS, DJA for 7 Series DPO). Also covers the install path (`C:\Program Files\Tektronix\TekExpress\TekExpress DDR Transmitter`), license activation, and how to view the installed software version (Options > About TekExpress).

## Content

### Hardware requirements

#### Supported oscilloscope models

- DPO714AX
- MSO71604DX, MSO72004DX, MSO72304DX, MSO72504DX, and MSO73304DX.
- DPO71604DX, DPO72004DX, DPO72304DX, DPO72504DX, and DPO73304DX.
- DPO71604SX, DPO72004SX, DPO72304SX, DPO72504SX, and DPO73304SX.
- Non-ATI channels of DPO75002SX, DPO75902SX, DPO7702SX, DPS75004SX, DPS75904SX, and DPS77004SX.

#### Recommended probes

**Active probes:**

- **P7720** 20 GHz Trimode Probe with TekFlex connector technology
- **P7716** 16 GHz Trimode Probe with TekFlex connector technology

**Probe tips:**

- **P77STFLXA / P77STCABL**: Active, Solder-in Tip with TekFlex connector technology; probe tips to probe directly on the motherboard or vias.
- **P77STFLXB / P77STCABL / P77STLRCB**: Active, Solder-in Tip with TekFlex connector technology:
  - DDR5: Probe tips to probe CLK, DQS, DQ, and CA on the Nexus XH Series SI Interposer.
  - LPDDR5-5X: Probe tips to probe CLK, WCK, RDQS, DQ, CA, and CS on the Nexus XH Series SI Interposer.
- **P77STFLRA**: Active, long reach solder-in tip with TekFlex connector technology.
- **P77HTFLRA**: Active, long reach high temperature solder-in tip with TekFlex connector technology.
- **P77STFLRB**: Active, long reach 55 Ω Solder-in tip with TekFlex Connector technology for DDR/LPDDR electrical Validation with interposers.
- **P77HTFLRB**: Active, long reach 55 Ω Solder in tip with TekFlex Connector technology for high-temperature DDR/LPDDR electrical Validation with interposers (up to 125 °C).

#### Recommended SI Interposers

Edge Probe, Direct Attach, Socketed interposer available from Nexus. Please order directly from Nexus. Please request the s-par files for all individual signals on the interposer instead of getting a generic nominal s-par model.

Refer the Nexus's page for more information, `www.nexustechnology.com/products/memory-interposers/ddr5-main-memory-interposers/` for DDR5 and `www.nexustechnology.com/products/memory-interposers/lpddr5-mobile-memory-interposers/` for LPDDR5-5X.

### Software license requirements

| MSO/DPO70000 Series | 7 Series DPO |
|---|---|
| **LPDDR5SYS**: LPDDR5 Memory Bus Electrical Validation and Analysis | **CMDDR5SYS**: DDR5 System Transmitter Test (Tx) Automated Compliance Solution using TekExpress Framework |
| **DDR5SYS**: DDR5 Memory Bus Electrical Validation and Analysis | **CMLPDDR5SYS**: LPDDR5 and 5x System Transmitter Test (Tx) Automated Compliance Solution using TekExpress Framework |
| **SDLA64**: Serial Data Link Analysis for Win 64-bit Scopes | **DJA**: Advanced Jitter and Eye Analysis Software |
| **VET**: VET – Visual Trigger | |
| **DJA**: Advanced Jitter and Eye Analysis Software | |

#### Downloading and installing the software

Complete the following steps to download and install the latest TekExpress DDR Transmitter application.

1. Go to `www.tek.com`.
2. Click **Downloads**. In the Downloads menu, select DOWNLOAD TYPE as Software and enter the application name in the MODEL OR KEYWORD field and click **SEARCH**.
3. Select the latest version of software and follow the instructions to download the software. Copy the executable file into the oscilloscope.
4. Double-click the executable and follow the on-screen instructions.
   The software is installed at `C:\Program Files\Tektronix\TekExpress\TekExpress DDR Transmitter`.
5. Select **Application > TekExpress** from the Oscilloscope menu, to open the application.

#### Activate the license

To activate the license, access the oscilloscope's help documentation, navigate to the **License Activation** section, and follow the on-screen instructions using the oscilloscope interface.

#### View software version and license key details

To view version information of the application, click **Options > About TekExpress**.

## Cross-references

- `welcome-and-help` — the per-device feature lists tied to specific licenses (LPDDR5SYS / DDR5SYS / CMDDR5SYS / CMLPDDR5SYS) live there.
- `setting-up-test-environment` — what to do after the application is installed and the license is activated.
- `starting-application` — Options menu > About TekExpress and Options > Instrument Control Settings.
- `references-and-appendices` — the `C:\Program Files\Tektronix\TekExpress\TekExpress DDR Tx` install root reappears in the Application directories table.

## Confidence notes

- The 7 Series DPO column in Table 3 ("Software license requirements") has fewer rows than the MSO/DPO70000 column; both columns are transcribed verbatim with empty cells preserved.
- The DPO75002SX/DPO7702SX list contains a probable typo in the source ("DPO7702SX" vs the more common "DPO77002SX"). Preserved as printed.
