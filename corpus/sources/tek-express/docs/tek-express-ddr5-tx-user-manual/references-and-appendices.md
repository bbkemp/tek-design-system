---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: references-and-appendices
section_title: References — directories, file formats, DDR DFE, SDLA, pre-recorded waveforms
parent_section: null
page_range: "167 to 174"
related_screens: []
related_hardware: []
---

# References — directories, file formats, DDR DFE, SDLA, pre-recorded waveforms

## Summary

The reference appendices. Application install layout under `C:\Program Files\Tektronix\DDR Transmitter` (Bin, Compliance Suites, Examples, ICP, Images, Lib, Report Generator, Tools); file-name extensions used by the application (`*.TekX` sessions, `*.py`, `*.xml` encrypted configs + logs, `*.csv` / `*.mht` / `*.pdf` for reports, `*.xslt` style sheets, `*.png` captures); the test-related files layout (`My Documents\DDR Transmitter\Untitled Session\<DUT ID>\<date>_<time>` folders); the DDR DFE standalone application (a 4-tap DFE that lives in TekScope > Analyze > DDR DFE, with Burst Detection Settings tab — DFE Output Math channel, Strobe DQS, Data DQ, Data Rate, Ref Levels (Auto/Custom), Clock Delay; DFE Settings tab — Gain, Tap1–4, Threshold Mode Auto/Custom, Threshold; Gain range -6 to 6 dB, Tap1 -200 to 50 mV, Tap2 -75 to 76 mV, Tap3 -60 to 60 mV, Tap4 -45 to 45 mV); the SDLA DDR5 Tutorial overview (S-parameter modeling of probe + interposer + memory subsystem; launched via TekScope > Analyze > Serial Data Link Analysis; Rx Configuration with User CTLE Type = DDR5, FFE/DFE Equalizer toggles); and the pre-recorded waveform file-name conventions per Acquire Type for DDR5 (Clock, WR_Data, WR_SingleEnded, RD_Data, Address_Command) and LPDDR5-5X (Clock, Write_Clock, WR_Data, WR_SingleEnded, WR_Data_tDQ2DQ, RD_Data, RD_SingleEnded, CA, CA_tCA2CA, CS).

## Content

### Application directories

You can find the application files at `C:\Program Files\Tektronix\DDR Transmitter`. The application directory and associated files are organized as follows:

| Directory names | Usage |
|---|---|
| Bin | Contains application libraries |
| Compliance Suites | Contains test suite specific files |
| Examples | Contains various support files |
| ICP | Contains instrument and application specific interface libraries |
| Images | Contains images of the application |
| Lib | Contains utility files specific to the application |
| Report Generator | Contains style sheets for report generation |
| Tools | Contains instrument and application specific files |

### File name extensions

The TekExpress DDR Transmitter software uses the following file name extensions:

| File name extension | Description |
|---|---|
| `*.TekX` | Application session files (the extensions may not be displayed) |
| `*.py` | Python sequence file. |
| `*.xml` | Test-specific configuration information (encrypted) files. Application log files |
| `*.csv` | Test result reports. Plot data |
| `*.mht` | Test result reports (default). Test reports can also be saved in HTML format |
| `*.pdf` | Test result reports. Application help document |
| `*.xslt` | Style sheet used to generate reports |
| `*.png` | Captured images |

### View test-related files

Files related to tests are stored in My Documents\DDR Transmitter\Untitled session folder. Each test setup in this folder has both a test setup file and a test setup folder, both with the test setup name. The test setup file is preceded by the TekExpress icon.

Inside the test setup folder is another folder named for the DUT ID used in the test sessions. The default is DUT001.

Inside the DUT001 folder are the session folders and files. Each session also has a folder and file pair, both named for the test session using the naming convention `(date)_(time)`. Each session file is stored outside its matching session folder:

```
20110520_154553/    20110520_154553.tex
20110520_154713/    20110520_154713.tex
20110520_155111/    20110520_155111.tex
20110520_155920/    20110520_155920.tex
20110520_160103/    20110520_160103.tex
```

Each session folder contains image files of any plots generated from running the test session. If you selected to save all waveforms or ran tests using prerecorded waveform files, these are included here.

The first time you run a new, unsaved session, the session files are stored in the Untitled Session folder located at `X: \DDR Transmitter`. When you name and save the session, the files are placed in a folder with the name that you specify. A copy of the test files stay in the Untitled Session folder until you run a new test or until you close the application.

### DDR DFE standalone application

*(Footnote 1: This feature is supported only for MSO/DPO70000 models.)*

#### DDR5 DFE Overview

DDR5 supports data rates from 3200 MT/s to 6400 MT/s. This increase in the data rate is realized without the need for differential signaling at the DQ pins i.e. the DQ bus is single-ended – same as DDR3/4.

However, due to the many impedance mismatched points that exist along the memory subsystem, ISI due to reflections are expected to increase. At data rates >= 4800MT/s, the data eye at the DRAM ball is expected to be closed. A 4-tap DFE is implemented in the DDR5 DRAM Rx to help equalize the DQ signals and open the data eyes after the data is latched by the receiver.

#### DDR DFE Introduction

The DDR DFE is a standalone software application in Tektronix's performance scopes. It is used to perform 4 tap DFE operation on the DDR5 write burst signals coming from the DDR5 DUTs.

#### How to launch

Install TekExpress DDR Tx on the oscilloscope. Click **TekScope > Analyze Menu > DDR DFE**.

#### DDR DFE Application

**Burst Detection Settings**

Once the "DDR DFE" is launched, in the 'Burst Detection Settings' tab, user must select 'Strobe DQS' and 'Data DQ' signals coming from the DUT connected to the oscilloscope channels. The user must configure the 'DFE Output' to the required Math channel. The user must set the 'Data Rate' of the DDR5 of the DUT. The waveform edges are selected based on 'Ref Levels' [High, Mid, and Low]. The application will calculate the reference level automatically when ref levels are set to "Auto". The application will calculate separate High, Mid, Low values for 'Data DQ' and 'Strobe DQS'.

When the 'Ref Levels' are modified from Auto to Custom, they can be modified as per user choice. The application will use the reference level set by the user when input levels are set to "Custom". Similarly, 'Clock Delay' can be modified as per user choice. The clock delay is timing delay between DQS to DQ, the delay is used in clock recovery.

**DFE Settings tab**

The DFE Setting tab will allow the user to define the Gain and Tap values for Tap1, Tap2, Tap3, and Tap4. The gain control of the front end is used to ensure that the cursor or the current bit is in a congruent relationship with the ISI correction required for the channel. The taps T1, T2, T3, T4 coefficients provide the corrections needed to the current bit by adding or subtracting the effects of ISI of the previous bits.

The Gain is applied to the waveform along the 4 tap DFE tap values. The limits of the Gain and tap values are shown below. Note: Initial Gain and DFE taps are each individually limited to the below range. Exact values (TBD) as will be determined upon release of JEDEC specification.

Threshold is the middle voltage level of the signal, which may be the transition between logic levels. For biased signals, enter the mid-level value.

| Description | Min | Max | Unit |
|---|---|---|---|
| DFE Gain | -6 | 6 | dB |
| DFE Tap 1 | -200 | 50 | mV |
| DFE Tap 2 | -75 | 76 | mV |
| DFE Tap 3 | -60 | 60 | mV |
| DFE Tap 4 | -45 | 45 | mV |

| Description | Typical | Unit |
|---|---|---|
| DFE Gain Avg Step Size | 2 | dB |
| DFE Tap Avg Step Size | 5 | mV |

**Apply the DFE Settings to Math**

Click **Apply** to configure the Gain and Tap values configured in the Burst Detections Settings tab to the DFE Output. You can find the Math output generating the DFE applied DQ waveform, which you can use with Strobe DQS for any of the measurements of your choice.

> ⚠ **Note:** Do not use DDR DFE while executing the Write Eye measurements in the TekExpress DDR Tx application.

### SDLA DDR5 Tutorial

This tutorial provides details on how to setup SDLA to model a DDR5 memory system test configuration. The DQS and DQ signals are acquired through the oscilloscope probes that are soldered onto an interposer that fits between the memory chip and the circuit board. The user can then setup S-parameter models for the probe, and interposer, and the memory system loading and transmission lines. The goal is to create filters, that when applied to the acquired waveforms, de-embeds the effects of interposer and probe. Thus, accounting for impedance mis-match and reflections.

**SDLA overview**

The overall purpose of SDLA is to allow the user to setup S-parameter models for the measurement system used to acquire signals on an oscilloscope and for the simulation system. It will compute filters to apply to the input waveforms of the oscilloscope and provide waveforms that would be represented by the various test points in the SDLA system model. SDLA also provides an Rx block model that allows for simulation of CTLE, clock recovery, and FFE and DFE equalization filters.

**Steps to install and launch SDLA application:**

1. Install the latest SDLA version on the oscilloscope.
2. To launch the application, select **TekScope > Analyze > Serial Data Link Analysis**.

Follow the steps to launch the SDLA DDR5 Modeling Tutorial document.

1. To launch the application, select **TekScope > Analyze > Serial Data Link Analysis**.
2. Click **Rx** in the SDLA menu.

*Figure 34: SDLA Visualizer* — Visualizer header with Measurement Circuit (TX, Tx1, Tx2, De-embed Tx, NA, Tx10) → Rx, Simulation Circuit (NA, Tx10, Embed) and Apply/Config/Analyze/Save/Reset/Default buttons.

3. In the SDLA Visualizer - Rx Configuration, select **User** and click the **Config** tab.

*Figure 35: SDLA Visualizer - Rx Configuration* — Configure CTLE, Clock Recovery, and/or FFE/DFE. Clock Recovery is enabled by FFE/DFE. CTLE row: On / Off, CTLE Type DDR5, Auto-1. FFE/DFE Equalizer: On / Off, FFE/DFE Type, Adapt Type. Clock Input row: CH1, Autocal Clk Delay, Clk Delay 0. RefTap, BitTrkSeq, ErrorLog buttons.

4. Select **DDR5** from the CTLE Type drop-down menu.
5. Click **?** button to open the SDLA help file.

### Pre-recorded waveform file names for test measurements

The following tables specify the waveforms to load for the selected Acquire Type.

#### Table 34: DDR5

| Acquire Type | Waveforms to be loaded |
|---|---|
| Clock | For differential signal probe type: `DDR5-<DataRate>-Clock-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. For Single Ended Probe type: `DDR5-<DataRate>-Clock-Clockc-<RecordLength>-<SourceChannel>-<RunIteration>.wfm` and `DDR5-<DataRate>-Clock-Clockt-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| WR_Data | For differential signal probe type: `DDR5-<DataRate>-Write-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Write-Data-DQS-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Write-Data-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. For DFE enabled: `DDR5-<DataRate>-Write-DFE-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| WR_SingleEnded | `DDR5-<DataRate>-Write-Data-DQSc-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Write-Data-DQSt-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Write-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| RD_Data | `DDR5-<DataRate>-Read-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Read-Data-DQS-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-Read-Data-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| Address_Command | `DDR5-<DataRate>-CA-CA-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `DDR5-<DataRate>-CA-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |

#### Table 35: LPDDR5-5X

| Acquire Type | Waveforms to be loaded |
|---|---|
| Clock | For differential signal probe type: `LPDDR5-5X-<DataRate>-<WCKtoCK>-Clock-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. For single-ended probe type: `LPDDR5-5X-<DataRate>-<WCKtoCK>-Clock-Clockt-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Clock-Clockc-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| Write_Clock | For differential signal probe type: `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Clock-WCK-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Clock-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. For single-ended probe type: `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Clock-WCKt-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Clock-WCKc-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Clock-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| WR_Data | For differential signal probe type: `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-WCK-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| WR_SingleEnded | `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-WCKt-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-WCKc-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| WR_Data_tDQ2DQ | `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-tDQ2DQ-DQy-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-tDQ2DQ-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Write-Data-tDQ2DQ-WCK-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| RD_Data | `LPDDR5-5X-<DataRate>-<WCKtoCK>-Read-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Read-Data-RDQS-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| RD_SingleEnded | `LPDDR5-5X-<DataRate>-<WCKtoCK>-Read-Data-DQ-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Read-Data-RDQSc<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-Read-Data-RDQSt<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| CA | `LPDDR5-5X-<DataRate>-<WCKtoCK>-CA-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-CA-CAa-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| CA_tCA2CA | `LPDDR5-5X-<DataRate>-<WCKtoCK>-CA-tCA2CA-CAa-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-CA-tCA2CA-CAb-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-CA-tCA2CA-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |
| CS | `LPDDR5-5X-<DataRate>-<WCKtoCK>-CS-Clock-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`, `LPDDR5-5X-<DataRate>-<WCKtoCK>-CS-CS-<RecordLength>-<SourceChannel>-<RunIteration>.wfm`. |

## Cross-references

- `setup-test-selection-and-acquisitions` — the pre-recorded mode is set on the DUT tab; this appendix gives the file-name conventions Acquisitions reads.
- `setup-configuration` — DDR DFE 4-tap Gain / Tap1–4 / Threshold parameters duplicate the DDR5 Configuration Measurements tab fields ("Apply DFE / Gain / Threshold / Tap" rows).
- `saving-recalling-test-setup` — the `My Documents\DDR Transmitter\Untitled session` folder layout, `*.TekX` session file extension.
- `getting-started` — Application install path `C:\Program Files\Tektronix\TekExpress\TekExpress DDR Transmitter` (App directories table here uses the truncated form `C:\Program Files\Tektronix\DDR Transmitter`).
- `welcome-and-help` — DDR DFE and SDLA features are gated to MSO/DPO70000 (footnote 1).

## Confidence notes

- Application directories install root reads `C:\Program Files\Tektronix\DDR Transmitter` here vs. `C:\Program Files\Tektronix\TekExpress\TekExpress DDR Transmitter` in the Getting started chunk. The longer path is the actual install location per the install procedure; the shorter is likely an abbreviated reference in this appendix.
- The pre-recorded file-name patterns use placeholder syntax `<DataRate>`, `<RecordLength>`, `<SourceChannel>`, `<RunIteration>`, `<WCKtoCK>`. Preserved as written.
- The session-folder example dates (`20110520_*`) are 2011 placeholders in the source, not run dates.
