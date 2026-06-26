---
class: doc-section
doc_id: tek-express-pci-express
doc_title: "TekExpress PCI Express Transmitter Compliance and Validation Software Application Help"
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: setting-up-test-environment
section_title: Setting up the test environment — install, equipment connection, deskew, prerun checklist
parent_section: null
page_range: "18 to 32"
related_screens: []
related_hardware: []
---

# Setting up the test environment — install, equipment connection, deskew, prerun checklist

## Summary

Pre-flight that turns a freshly installed PCIe application into a runnable rig. Covers the Windows 10 User Account Control setting (must be **Never Notify** — printed in the source as set to **Always notify**, see Confidence notes), the InstallShield install procedure that updates the TekScope Analyze menu, the application's file-permission requirements (mapped `X:` drive on `My TekExpress`, no Encrypt attribute, no Untitled Session deletion), the equipment-connection setup including Add-In-card / System-board normal / System-board cascade switch-system diagrams with explicit TX LANE ↔ Signal mappings for x8 and x16 lanes, the deskew-and-attenuation setup (Use Automated Deskew / Use Manual Deskew, Use 6 dB Attenuation / Use Custom Attenuation), how the application keeps focus during a run (Alt+Tab fallback, Keep On Top), the prerun checklist (20-minute warmup, SPC, instrument discovery), and the Instrument Control Settings dialog that searches LAN/GPIB/USB/etc. for connected instruments.

## Content

### Windows 10 user account settings

Windows 10 instruments need to have the User Account Control Settings set to **Never Notify**. To set User Account Control Settings:

1. Go to **Control Panel > User Accounts > Change User Account Control settings**.
2. Set the sliding control to **Always notify** as shown in the image, and click **OK**.

> **NOTE:** The narrative says "set to **Never Notify**" but step 2 instructs "Set the sliding control to **Always notify**." Preserved as printed.

#### See also

*Instruments and accessories required* (on page 13)

### Install the software

Use the following steps to install PCI Express software on any compatible instrument running Microsoft Windows 10 (64-bit). See *Minimum System Requirements* (on page 12) for details.

1. Close all applications (including the TekScope application).
2. Go to the `www.tek.com` Web site and search for TekExpress PCI Express to locate the installation file. Download the file **TekExpress_PCIe_Deployment_Package.exe**.
3. Copy or download the PCIe installer file to the oscilloscope.
4. Double-click the installer .exe file to extract the installation files and start the InstallShield Wizard. Follow the on-screen instructions. The software installs in the following location: `C:\Program Files\Tektronix\TekExpress\TekExpress PCI Express`
5. The installer updates the TekScope Analyze menu to include the installed options.

*Figure: TekScope Analyze menu after install* — Restore Application; Search; Mark; Jitter and Eye Analysis (DPOJET); Results Table; Serial Error Detector; USB2.0 Test Package; Serial Data Link Analysis; **TekExpress PCI Express** (newly inserted).

### Set application file permissions

Before you run tests for the first time, do the following:

1. Understand where your test files are stored on the instrument. After you install and start TekExpress PCIe, it creates the following folders on the oscilloscope:
   - `\My Documents\My TekExpress\PCI Express`
   - `\My Documents\My TekExpress\PCI Express\Untitled Session`
   
   Every time you start TekExpress PCIe, an **Untitled Session** folder is created in the **PCIe** folder. The **Untitled Session** folder is automatically deleted when you exit the **PCIe** application. To preserve your test session files, save the test setup before exiting the TekExpress application.
   
   > **CAUTION:** Do not modify any of the session files or folders because this may result in loss of data or corrupted session files. Each session has multiple files associated with it. When you save a session, a `.TekX` file, and a folder named for the session that contains associated files, is created on the oscilloscope X: drive.

2. Map the shared My TekExpress folder as **X:** (X drive) on the instruments used in test setups running Microsoft Windows Operating System. The My TekExpress folder has the share name format `<domain><user ID>My TekExpress`. Or, if the instrument is not connected to a domain, the share name format is `<instrument name><user ID>My TekExpress`. This shared folder is used to save the waveform files and is used during other file transfer operations.

   > **NOTE:** If the X: drive is mapped to any other shared folder, the application will display a warning message asking you to disconnect the X: drive manually.

3. Make sure that the My TekExpress folder (Drive X:) has read and write access:
   1. Right-click the folder and select **Properties**.
   2. Select the **General** tab and then click **Advanced**.
   3. In the Advanced Attributes dialog box, make sure that the option **Encrypt contents to secure data** is NOT selected (not checked).
4. See the *prerun checklist* (on page 30) before you run a test.

### About setting up tests

Set up tests using the tabs in the *Setup panel* (on page 43). Settings in the DUT tab use a top-down, left-to-right logic flow, so that any parameter that affects or acts as a filter for other parameters appears either to the top of or to the left of the affected parameters.

Tests are saved when you save a test setup. To avoid overwriting test results, remember to assign a unique name to the test either before running it or immediately after.

### Equipment connection setup

Click the **Setup > Test Selection > Schematic** button to open a PDF file that shows the compliance test setup diagrams (instrument, DUT, and cabling) for supported testing configurations.

#### Equipment connection setup through switch system

*Figure: Add-In card connection setup through switch system* — Oscilloscope CH1–CH4 wired through a Switch (S1–S6) to a CBB3 (Riser) and a CBB3 (Main) holding the DUT ADD-IN Card; ATX Power Supply connected via Power connector and Power switch; CMTS Pulse button; TX LANE 0 P/N to oscilloscope via SMP-to-SMA 1-Meter cables; RX LANE 0 P/N from AFG/AWG CH1/CH2 via BNC-to-SMA Adapters; BRD REFCLK or External REFCLK Switch and Power Reset on the Main board. Oscilloscope ↔ AFG/AWG over GPIB.

**Switch: DUT Lane to Signal connection mapping** (Add-In card)

| TX LANE | Positive routing | TX LANE | Negative routing |
|---|---|---|---|
| TX LANE 0 P | S1 (relay) > Signal 1 | TX LANE 0 N | S3 > Signal 1 |
| TX LANE 1 P | S1 > Signal 2 | TX LANE 1 N | S3 > Signal 2 |
| TX LANE 2 P | S1 > Signal 3 | TX LANE 2 N | S3 > Signal 3 |
| TX LANE 3 P | S1 > Signal 4 | TX LANE 3 N | S3 > Signal 4 |
| TX LANE 4 P | S1 > Signal 5 | TX LANE 4 N | S3 > Signal 5 |
| TX LANE 5 P | S1 > Signal 6 | TX LANE 5 N | S3 > Signal 6 |
| TX LANE 6 P | S1 > Signal 7 | TX LANE 6 N | S3 > Signal 7 |
| TX LANE 7 P | S1 > Signal 8 | TX LANE 7 N | S3 > Signal 8 |
| TX LANE 8 P | S4 > Signal 1 | TX LANE 8 N | S6 > Signal 1 |
| TX LANE 9 P | S4 > Signal 2 | TX LANE 9 N | S6 > Signal 2 |
| TX LANE 10 P | S4 > Signal 3 | TX LANE 10 N | S6 > Signal 3 |
| TX LANE 11 P | S4 > Signal 4 | TX LANE 11 N | S6 > Signal 4 |
| TX LANE 12 P | S4 > Signal 5 | TX LANE 12 N | S6 > Signal 5 |
| TX LANE 13 P | S4 > Signal 6 | TX LANE 13 N | S6 > Signal 6 |
| TX LANE 14 P | S4 > Signal 7 | TX LANE 14 N | S6 > Signal 7 |
| TX LANE 15 P | S4 > Signal 8 | TX LANE 15 N | S6 > Signal 8 |

*Figures: System board (normal) and System board (cascade) connection setup through switch system* — Similar to Add-In card setup; the DUT card is a CLB3 with RefClk out and a x16 Card Edge; the System-board cascade variant routes Lane 0 through Relay A/B as the positive/negative signal inputs cascaded through additional relays (Relay 4 / 5). The Switch Lane-to-Signal mapping table is identical to the Add-In-card mapping above for both normal and cascade.

> **NOTE:** GPIB is the recommended interface to execute the switch matrix commands.

### Test setup overview

Test setup includes acquisition and configuration parameters. You can also select report options when setting up tests. Use the options in the *Setup panel* (on page 43) and *Reports panel* (on page 76) to select and configure tests.

1. *Set up equipment* (on page 21).
2. *Do the prerun checklist* (on page 30).
3. *Set DUT parameters* (on page 43).
4. *Select one or more tests* (on page 55).
5. *Select acquisitions* (on page 57).
6. *Configuration test parameters* (on page 63).
7. *Set test measurement notification options* (on page 68).
8. *Select report options* (on page 76).

### Prerequisite

#### Compensate the signal path

Use the following procedure to compensate the internal signal acquisition path. Perform this procedure if the ambient temperature has changed more than 5 °C (9 °F) since you performed the last signal path compensation. Perform the signal path compensation once a week. Failure to do so may result in the instrument not meeting warranted performance levels.

1. Power on and wait for the instrument to complete its warm up period before continuing with this procedure.
2. Disconnect any probes you have connected to the input channels.
3. Set the instrument to Menu mode.
4. Select Instrument Calibration from the Utilities menu.
5. Note any instructions that appear in the resulting control window.
6. Click Run SPC to begin the procedure. The procedure may take several minutes to complete.
7. Verify that the Status changes to Compensated after the procedure is complete. If the Calibration Status field indicates anything other than Compensated, see Signal Path Compensation Status for information on the readout and recommended action.

> **NOTE:** When making measurements at vertical scale settings less than or equal to 5 mV, you should perform the signal path compensation at least once a week. Failure to do so may result in the instrument not meeting warranted performance levels at those volts/div settings.

#### Deskew and Attenuation

By clicking on the button opens up the Deskew and Attenuation Setup window which has the following options.

> **NOTE:** Applicable for ATI mode testing in DPO7000SX series TekScopes

*Figure: Deskew and Attenuation Setup window* — Deskew radio group with Use Automated Deskew (selected by default) and Use Manual Deskew; Attenuation radio group with Use 6 dB Attenuation (selected by default) and Use Custom Attenuation; Cancel and OK buttons.

**Deskew:**

1. **Use Automated Deskew** (Which is selected by default) automated deskew works in the following way:
   - By selecting the automated deskew, the application runs the deskew operation before acquiring the DUT signal.
   - Deskew will be performed to remove the skew of the setup which is primarily the cable set and oscilloscope channel. Deskew requires a low-frequency signal with a small rise/fall time. Both these requirements are fulfilled by the fast edge on the oscilloscope.
   - During deskew the other end of the cable connected to the fixture/ISI board is connected to the fast edge. Fast edge has a skew of less than 1 ps. If the +ve and -ve channels of fast edge are phase-matched, the user can ensure that the setup (cable+oscilloscope channel) has a skew of less than 1 ps.

   *Figure: Deskew popup window* — A "Perform Deskew Automatically" graphic shows a Master and Extension oscilloscope deskew rig with 2.92 mm cables, 6 dB Attenuators, 1.85 mm to 2.92 mm Adaptors, 1.85 mm thread saver, and a DIFFERENTIAL FAST EDGE source at 0 V / -0.9 V into 50 Ω; legend reads "Indicates direct connection to the instrument or device" and "Indicates cable connection to the instrument or device. DC Block is optional if the DUT has DC block." OK and Cancel buttons.

2. **Use Manual Deskew Manual** — Instructions block reads: "Manually enter deskew values on TekScope: Step 1: Go to 'Vertical' tab on TekScope. Step 2: Select 'Deskew'. Step 3: Select the channel. Step 4: Input value for Deskew Time".

**Attenuation:**

1. **Use 6 dB Attenuation** (Which is selected by default).
2. **Use Custom Attenuation.** — Instructions block reads: "Manually enter attenuation values on TekScope: Step 1: Go to 'Vertical' tab on TekScope. Step 2: Select 'Deskew'. Step 3: Select the channel. Step 4: Input value for External Atten(dB)".

### Running tests

After selecting and configuring tests, review the *Prerun checklist* (on page 30) and then click **Start** to run the tests. While tests are running, you cannot access the Setup or Reports panels. To monitor the test progress, switch back and forth between the Status panel and the Results panel.

The application displays a report when the tests are complete. While the tests are running, other applications may display windows in the background. The TekScope application takes precedence over other applications, but you can switch to other applications by using the **Alt + Tab** key combination. To keep the TekExpress PCIe application on top, select **Keep On Top** from the TekExpress Options menu.

### Prerun checklist

Do the following before you click Start to run a test. If this is the first time you are running a test on a setup, refer to the information in *Before you click start* (on page 19).

1. Make sure that all the required instruments are properly warmed up (approximately 20 minutes).
2. Perform Signal Path Compensation (SPC):
   1. On the oscilloscope main menu, select the **Utilities** menu.
   2. Select **Instrument Calibration**.
3. Verify that the application is able to find the DUT. If it cannot, perform a search for connected instruments:
   1. In PCIe, select the **Setup** panel and then click the **Test Selection** tab.
   2. Select any test and then click **Configure**.
   3. In the Configuration section, click **Global Settings**.
   4. In the **Instruments Detected** section, click the drop-down arrow to the right of **Real Time Scope** and make sure that the oscilloscope with the (GPIB8::1::INSTR) designation is in the list.

### Search instruments connected to the application

Use the TekExpress Instrument Control Settings dialog box to search the instruments (resources) connected to the application. The application uses TekVISA to discover the connected instruments.

> **NOTE:** The instruments required for the test setup must be connected and detected by the application, before running the test.

To refresh the list of connected instruments:

1. Select **Options > Instrument Control Settings**.
2. In the **Search Criteria** section of the **Instrument Control Settings** dialog box, select the connection types of the instruments to search. Instrument search is based on the VISA layer, but different connections determine the resource type, such as LAN, GPIB, and USB. For example, if you choose LAN, the search will include all the instruments supported by the TekExpress that are communicating over the LAN.
3. Click **Refresh**. The TekExpress application searches for the connected instruments.

*Figure: Search status of the instruments connected to LAN* — Progress graphic with "Searching on LAN 40 % Complete".

4. When the search is complete, a dialog box lists the instrument-related details based on the search criteria. For example, for the Search Criteria as LAN and GPIB, the application displays all the LAN and GPIB instruments connected to the application.

*Figure: TekExpress Instrument Control Settings dialog* — Search Criteria checkboxes (LAN, GPIB checked; Serial, Non-VISA Resources, TekLink, USB, VXI), Refresh button, TekVISA Timeout `300` s, Retrieved Instruments (1) table with columns Connection / Resource / Serial No / Options / Resource Addr…; Row reads VISA-GPIB / MSO72004C / C250006 / 20XL,MTH,Reserv… / GPIB8::1::INSTR; Last Updated `September 20, 2021 00:59:21`; Close button.

The details of the instruments are displayed in the Retrieved Instruments table. The time and date of instrument refresh is displayed in the Last Updated field.

## Cross-references

- `getting-started` — install path, software dependencies, and the differential-probe selection table that this chunk depends on.
- `starting-application` — Options > Instrument Control Settings (same dialog under the Options menu), Keep On Top, About TekExpress.
- `setup-dut-panel` — Filters, Signal Validation, Deskew/Attenuation buttons live on the DUT tab; switch-matrix configuration and Automated DUT Control build on the cabling shown here.
- `references-and-appendices` — Application directories, file name extensions, RF Switch configuration files (PCE_Keithley_*, PCE_Giga_*) that match the switch wiring tables above.
- `switch-matrix-application` — the Switch Matrix configuration UI corresponds to the cabling diagrams in this chunk.

## Confidence notes

- The Windows 10 UAC instructions in the source contradict themselves — the narrative line says "set to **Never Notify**" while the numbered step says "Set the sliding control to **Always notify**." Both are preserved verbatim with a note flagging the contradiction.
- The switch lane-to-signal mapping tables are repeated in the source across three figures (Add-In card, System board normal, System board cascade) with the same mappings. Only one consolidated x16 table is included here; the other figures' duplicates are noted in the figure captions but not re-tabulated.
- The Deskew popup figure ("0 V / -0.9 V into 50 Ω") preserves the OCR rendering; the source uses subscripts and arrows that may have been imperfectly captured.
- The prerun checklist step 3.4 references `GPIB8::1::INSTR` as the canonical Real Time Scope address — confirmed against the same address used in the Instrument Control Settings figure.
