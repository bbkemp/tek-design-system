---
class: doc-section
doc_id: tek-express-ddr5-tx-user-manual
doc_title: "TekExpress DDR Tx Compliance and Debug Automation Software Application Help"
doc_number: 077-1648-04
doc_date: 2025-08
applies_to: [tek-express]
section_id: scpi-commands
section_title: SCPI Commands — remote control reference
parent_section: null
page_range: "56 to 166"
related_screens: []
related_hardware: []
---

# SCPI Commands — remote control reference

## Summary

The remote-control surface of the application. Every TekExpress DDR Tx workflow visible in the GUI — selecting tests, setting general parameters, running, pausing, reading results, generating reports, saving setups — has a matching SCPI command on the `TEKEXP:` namespace, callable over TCP socket 5000 via TekVISA. This chunk covers the prerequisite Windows Firewall + TekVISA OpenChoice configuration to enable the socket, the command grammar (`TEKEXP:SELECT`, `TEKEXP:VALUE`, `TEKEXP:STATE`, `TEKEXP:SETUP`, `TEKEXP:REPORT`, `TEKEXP:RESULT?`, `TEKEXP:POPUP`, etc.), the structure of `TEKEXP:VALUE GENERAL,"<ParameterName>","<Value>"` (the primary set-or-query verb that maps to almost every Setup-tab control), the four lifecycle commands (`STATE RUN`, `STATE STOP`, `STATE PAUSE`, `STATE RESUME`), the Continuous Run extensions, popup automation (`POPUP "Yes" / "No"`), and the full per-parameter set/query examples for DDR5 and LPDDR5-5X (Burst Detection, Phase Alignment for Read and Write Burst's strobe/data High/Mid/Low, Filter Files, Signal-to-Channel mapping, Probe Mode A/B/Differential, Voltage Settings, Sample Rate, Record Length, Bandwidth, Number of Runs, Custom DataRate). The full per-test-name list of selectable measurements (Tables 20 and 21) is enumerated as command argument values rather than verbatim transcribed in this chunk — the test-name catalog matches what the Test Selection tab presents.

## Content

### About SCPI command

You can use the Standard Commands for Programmable Instruments (SCPI) to communicate remotely with the TekExpress application. Complete the TCPIP socket configuration and the TekVISA configuration in the oscilloscope or in the device where you are executing the script.

> ⚠ **Note:** If you are using an external PC to execute the remote interface commands, then install TekVISA in the PC to make the configurations.

### Socket configuration for SCPI commands

This section describes the steps to configure the TCPIP socket configuration in your script execution device and the steps to configure the TekVISA configuration in the oscilloscope to execute the SCPI commands.

#### TCPIP socket configuration

1. Click **Start > Control Panel > System and Security > Windows Firewall > Advanced settings**.
2. In Windows Firewall with Advanced Security menu, select **Windows Firewall with Advanced Security on Local Computer > Inbound Rules** and click **New Rule…**
3. In **New Inbound Rule Wizard** menu:
   a. Select **Port** and click **Next**.
   b. Select **TCP** as rule apply, enter `5000` for **Specific local ports** and click **Next**.
   c. Select **Allow the connection** and click **Next**.
   d. Select **Domain, Private, Public** checkbox and click **Next**.
   e. Enter **Name**, Description (optional), and click **Finish**.
4. Check whether the Rule name is displayed in **Windows Firewall with Advanced Security menu > Inbound Rules**.

#### TekVISA configuration

1. Click **Start > All Programs > TekVISA > OpenChoice Instrument Manager**.
2. Click **Search Criteria**. In **Search Criteria** menu, click **LAN** to Turn-on. Select **Socket** from the drop-down list, enter the IP address of the TekExpress device in **Hostname** and type **Port** as `5000`. Click ▼ to configure the IP address with Port. Enter the Hostname as `127.0.0.1` if the TekVISA and TekExpress application are in the same system, else enter the IP address of the oscilloscope where the TekExpress application is running.
3. Click **Search** to setup the TCPIP connection with the host. Check whether the TCPIP host name is displayed in **OpenChoice Instrument Manager > Instruments**.
4. Double-click **OpenChoice Talker Listener** and enter the Command `*IDN?` in command entry field and click **Query**. Check that the Operation is successful and Talker Listener Readout displays the Command / Data.

### Command grammar

Commands target the `TEKEXP:` namespace. The verbs used in the application:

| Verb | Purpose |
|---|---|
| `TEKEXP:SELECT DEVICE,"<DeviceName>"` / `TEKEXP:SELECT? DEVICE` | Set or query the device name of the application (e.g. `DUT001`). |
| `TEKEXP:SELECT TEST,"<TestName>",<Value>` · `TEKEXP:SELECT TEST,"<ALL>"` · `TEKEXP:SELECT? TEST` | Select / deselect / select-all a test by name. Value `True` / `1` selects, `False` / `0` deselects. |
| `TEKEXP:VALUE GENERAL,"<ParameterName>","<Value>"` / `TEKEXP:VALUE? GENERAL,"<ParameterName>"` | Set or query a general parameter (DataRate, Custom DataRate, Burst Detection Method, Bandwidth, Sample Rate, Record Length, Vdd, Vcent_DQ, Clock Probe Mode, all Filter-file paths, Signal-to-Channel mappings, Phase Alignment fields, Number of Runs, Retain Vertical Scale, Enable Logging — see "Per-parameter examples" below). |
| `TEKEXP:VALUE ANALYZE,"<TestName>","<ParameterName>",<ParameterValue>` / `TEKEXP:VALUE? ANALYZE,"<TestName>","<ParameterName>"` | Set or query an analyze-side parameter for one specific test (e.g. N value Start, N value Stop for jitter). |
| `TEKEXP:VALUE WFMFILE,<TestName>,<AquireType>,<WaveformFileName>` / `TEKEXP:VALUE? WFMFILE,<TestName>,<AquireType>` | Set or query the waveform file recalled for a test in pre-recorded mode. |
| `TEKEXP:VALUE? GENERAL,"Enable Continuous Run"` · `TEKEXP:VALUE ContinuousRun_Duration,"<Value>"` · `TEKEXP:VALUE ContinuousRun_RunSessionOptions,"<Value>"` · `TEKEXP:VALUE GENERAL,"View Report After Generating",<value>` | Continuous-Run controls. `<Value>` for Duration is `Infinite` or `hh:mm` (min `00:30`); for RunSessionOptions is `NewSession` or `SameSession_ClearResults`. |
| `TEKEXP:LIST? DEVICE` · `TEKEXP:LIST? INSTRUMENT,"<InstrumentType>"` · `TEKEXP:INSTRUMENT "<InstrumentType>","<value>"` / `TEKEXP:INSTRUMENT? "<InstrumentType>"` | Query available devices, query the IP/GPIB address of a specific instrument type, set or query the selected instrument value. |
| `TEKEXP:INFO? REPORT` · `TEKEXP:INFO? WFM` · `TEKEXP:INFO? IMAGE` | Query report / waveform / image file information. Returns `"<size>,<FileName>"` repeated comma-separated. |
| `TEKEXP:*IDN?` · `TEKEXP:*OPC?` · `TEKEXP:LASTERROR?` | Identify the active TekExpress application, query last command completion status, and read the last error. |
| `TEKEXP:ACQUIRE_MODE LIVE` / `TEKEXP:ACQUIRE_MODE PRE-RECORDED` · `TEKEXP:ACQUIRE_MODE?` | Set / query the acquire mode. |
| `TEKEXP:MODE?` / `TEKEXP:MODE COMPLIANCE` | Set / query the execution mode. |
| `TEKEXP:REPORT GENERATE` · `TEKEXP:REPORT? "<Device Field>"` · `TEKEXP:EXPORT REPORT` | Generate the report for the current session, query a specified report header field, or export the report bytes for downstream analysis. |
| `TEKEXP:RESULT? "<TestName>"` · `TEKEXP:RESULT? "<TestName>","<ColumnName>"` · `TEKEXP:RESULT? "<TestName>","<ColumnName>",<RowNumber>` | Query the pass/fail status, a whole column for the test (comma-separated), or one specific row's value. |
| `TEKEXP:SETUP Default` · `TEKEXP:SETUP Save` · `TEKEXP:SETUP Save,"<SessionName>"` · `TEKEXP:SETUP Open,"<SessionName>"` · `TEKEXP:SETUP? CURRENT` | Restore default, save the current setup (with or without a session name), open a saved session, or query the current setup file name. |
| `TEKEXP:STATE RUN` / `TEKEXP:STATE STOP` / `TEKEXP:STATE PAUSE` / `TEKEXP:STATE RESUME` · `TEKEXP:STATE?` · `TEKEXP:STATE? SETUP` | Run / stop / pause / resume the selected measurements. Query returns `RUNNING`, `PAUSED`, `WAIT`, `ERROR`, or `READY`. `STATE? SETUP` returns `Saved` or `Not-Saved`. |
| `TEKEXP:POPUP "<PopupResponse>"` / `TEKEXP:POPUP?` | Programmatically respond to popups (`Yes` / `No`) or query the active popup as `"<Title>","<message>","<response1>,<response2>"`. |
| `TEKEXP:USER_DEF_ACQ TRUE` / `TEKEXP:USER_DEF_ACQ?` | Enable / query the User Defined Acquisition mode. |

### Test name catalog (command argument values)

The `TEKEXP:SELECT TEST,"<TestName>",<Value>` command accepts any of the application's measurement names. The catalog is per-device:

**DDR5 (Table 20):**

- Clock Differential measurements: `tCK`, `tCK_Duty_UI_Error`, `tCK_1UI_RJ_NoBUJ`, `tCK_1UI_DJ_NoBUJ`, `tCK_1UI_TJ_NoBUJ`, `tCK_2UI_RJ_NoBUJ`, `tCK_2UI_DJ_NoBUJ`, `tCK_2UI_TJ_NoBUJ`, `tCK_3UI_RJ_NoBUJ`, `tCK_3UI_DJ_NoBUJ`, `tCK_3UI_TJ_NoBUJ`, `tCK_4UI_RJ_NoBUJ`, `tCK_4UI_DJ_NoBUJ`, `tCK_4UI_TJ_NoBUJ`, `tCK_5UI_RJ_NoBUJ`, `tCK_5UI_DJ_NoBUJ`, `tCK_5UI_TJ_NoBUJ`, `tCK_NUI_RJ_NoBUJ`, `tCK_NUI_DJ_NoBUJ`, `tCK_NUI_TJ_NoBUJ`, `VIHdiff.CK(AC)`, `VIHdiff.CK(DC)`, `VILdiff.CK(AC)`, `VILdiff.CK(DC)`, `SRIdiff-Rise`, `SRIdiff-Fall`.
- Clock Single Ended measurements: `tCK`, `tCK_Duty_UI_Error`, the same NUI RJ/DJ/TJ family (`tCK_1UI_RJ_NoBUJ` through `tCK_NUI_TJ_NoBUJ`), `VIX_CK_RATIO`.
- Write Burst Differential measurements: `RxMask`, `Eye-Height_Write`, `Eye-Width_Write`, `Eye-Jitter_Write`, `VcentDq`, `tWPRE`, `tWPST`, `tDQS2DQ`, `tDQSS`, `tDSS`, `tDSH`, `InputSlew-Diff-Rise(DQS)`, `InputSlew-Diff-Fall(DQS)`.
- Write Burst Single Ended measurements: `VIX_DQS_Ratio`.
- Read Burst measurements: `Eye-Height_Read`, `Eye-Width_Read`, `Eye-Jitter_Read`, `tRPRE`, `tRPST`, `tDQSCK`, `tDQSQ`, `VOHdiffAC`, `VOLdiffAC`, `VOH(AC)`, `VOH(DC)`, `VOL(AC)`, `VOL(DC)`, `SRQdiff-Rise(DQS)`, `SRQdiff-Fall(DQS)`, `SRQse-Rise(DQ)`, `SRQse-Fall(DQ)`.
- CA measurements: `RxMask_CA`, `VciVW`, `TciVW`, `VcentCa`, `VIHL_AC`, `TcIPW`, `SRIN_clVW_Rise`, `SRIN_clVW_Fall`.

Value: `{True | False}` or `{1 | 0}`; `True` / `1` = selected, `False` / `0` = unselected.

**LPDDR5-5X (Table 21):**

- Clock Differential measurements: `tCH(abs)`, `tCH(avg)`, `tCK(abs)`, `tCK(avg)`, `tCL(abs)`, `tCL(avg)`, `tJIT(cc)`, `tJIT(per)`, `VIHdiff_CK`, `VILdiff_CK`, `Vindiff_CK`, `Vindiff_High_CK`, `Vindiff_Low_CK`, `SRIdiff_Rise_CK`, `SRIdiff_Fall_CK` — and the parallel Clock Single Ended / Clock Single Ended Positive Leg / Write Clock Differential / Write Clock Single Ended / Write Burst Differential / Read Burst Differential / Address Command / Chip Select families that mirror the GUI Test Selection tree.

### Continuous Run controls

- `TEKEXP:VALUE? GENERAL,"Enable Continuous Run"` — returns `{True | False}` or `{1 | 0}`.
- `TEKEXP:VALUE? ContinuousRun_Duration` · `TEKEXP:VALUE ContinuousRun_Duration,"<Value>"` — `<Value>` is `Infinite` or `hh:mm` (min `00:30`).
- `TEKEXP:VALUE? ContinuousRun_RunSessionOptions` · `TEKEXP:VALUE ContinuousRun_RunSessionOptions,"Value"` — `NewSession` creates a new session each run; `SameSession_ClearResults` clears the prior run's results and starts in the same session.

### Per-parameter examples (excerpt)

A representative cross-section of the `TEKEXP:VALUE GENERAL,"<ParameterName>"` set/query catalog — exhaustively tabulated in source Tables 30 (DDR5) and 31 (LPDDR5-5X). The same parameter names map 1:1 to GUI labels documented elsewhere in this manual:

| Parameter | Example set | Example query |
|---|---|---|
| DataRate | `TEKEXP:VALUE GENERAL,"DataRate","3200"` | `TEKEXP:VALUE? GENERAL,"DataRate"` |
| Custom DataRate | `TEKEXP:VALUE GENERAL,"Custom DataRate","1600"` | `TEKEXP:VALUE? GENERAL,"Custom DataRate"` |
| Burst Detection Method | `TEKEXP:VALUE GENERAL,"Burst Detection Method","Read Only Bursts"` | `TEKEXP:VALUE? GENERAL,"Burst Detection Method"` |
| Clock Signal Probe Type | `TEKEXP:VALUE GENERAL,"Clock Signal Probe Type","Differential"` | `TEKEXP:VALUE? GENERAL,"Clock Signal Probe Type"` |
| DQS Signal Probe Type | `TEKEXP:VALUE GENERAL,"DQS Signal Probe Type","Differential"` | `TEKEXP:VALUE? GENERAL,"DQS Signal Probe Type"` |
| WCK:CK Ratio (LPDDR5-5X) | `TEKEXP:VALUE GENERAL,"WCK:CK Ratio","4:1"` | `TEKEXP:VALUE? GENERAL,"WCK:CK Ratio"` |
| Vdd | `TEKEXP:VALUE GENERAL,"Vdd","Manual"` | `TEKEXP:VALUE? GENERAL,"Vdd"` |
| Vcent_DQ | `TEKEXP:VALUE GENERAL,"Vcent_DQ","Auto_Vcent"` | `TEKEXP:VALUE? GENERAL,"Vcent_DQ"` |
| Vcent_CA | `TEKEXP:VALUE GENERAL,"Vcent_CA","Auto_Vcent_CA"` | `TEKEXP:VALUE? GENERAL,"Vcent_CA"` |
| DQS Probe Mode | `TEKEXP:VALUE GENERAL,"DQS Probe Mode","A"` | `TEKEXP:VALUE? GENERAL,"DQS Probe Mode"` |
| Clock Probe Mode | `TEKEXP:VALUE GENERAL,"Clock Probe Mode","A"` | `TEKEXP:VALUE? GENERAL,"Clock Probe Mode"` |
| DeEmbed Filter Files | `TEKEXP:VALUE GENERAL,"DeEmbed Filter Files","Enable"` | `TEKEXP:VALUE? GENERAL,"DeEmbed Filter Files"` |
| DQS_Read Connected to Filter File | `TEKEXP:VALUE GENERAL,"DQS_Read Connected to Filter File","C:\Program Files\Tektronix\TekExpress DDR Tx"` | `TEKEXP:VALUE? GENERAL,"DQS_Read Connected to Filter File"` |
| Clock Connected to | `TEKEXP:VALUE GENERAL,"Clock Connected to","CH1"` | `TEKEXP:VALUE? GENERAL,"Clock Connected to"` |
| Clock Connected to : Signal Selected | `TEKEXP:VALUE GENERAL,"Clock Connected to : Signal Selected","True"` | `TEKEXP:VALUE? GENERAL,"Clock Connected to : Signal Selected"` |
| Sample Rate (GS/s) | (read-only) | `TEKEXP:VALUE? GENERAL,"Sample Rate (GS/s)"` |
| Record Length (mpts) | `TEKEXP:VALUE GENERAL,"Record Length (mpts)","0.001"` | `TEKEXP:VALUE? GENERAL,"Record Length (mpts)"` |
| Bandwidth | `TEKEXP:VALUE GENERAL,"Bandwidth","20"` | `TEKEXP:VALUE? GENERAL,"Bandwidth"` |
| Run Test More than Once | `TEKEXP:VALUE GENERAL,"Run Test More than Once","True"` | `TEKEXP:VALUE? GENERAL,"Run Test More than Once"` |
| Number of Runs | `TEKEXP:VALUE GENERAL,"Number of Runs","3"` | `TEKEXP:VALUE? GENERAL,"Number of Runs"` |
| Retain Vertical Scale | `TEKEXP:VALUE GENERAL,"Retain Vertical Scale","True"` | `TEKEXP:VALUE? GENERAL,"Retain Vertical Scale"` |
| Enable Logging | `TEKEXP:VALUE GENERAL,"Enable Logging","True"` | `TEKEXP:VALUE? GENERAL,"Enable Logging"` |
| Visual Search Burst Detection Area | `TEKEXP:VALUE GENERAL,"Visual Search Burst Detection Area","Define visual trigger area on the screen"` | `TEKEXP:VALUE? GENERAL,"Visual Search Burst Detection Area"` |
| VT Setup File | `TEKEXP:VALUE GENERAL,"VT Setup File","C:\Program Files\Tektronix\TekExpress DDR Tx"` | `TEKEXP:VALUE? GENERAL,"VT Setup File"` |
| RB:DQ/DQS Phase Alignment:Burst Detection Level Type | `TEKEXP:VALUE GENERAL,"RB:DQ/DQS Phase Alignment:Burst Detection Level Type","Manual"` | (matching query) |
| RB:DQ/DQS Phase Alignment:Pre-amble Length (tCK) / Post-amble Length / Burst Length / Burst (pk-pk) / Margin(%) / BurstDetectionMode / IsReadWriteGreater / Strobe High / Strobe Mid / Strobe Low / Data High / Data Mid / Data Low / Hysteresis / Margin | (same `TEKEXP:VALUE GENERAL,"RB:...","<value>"` pattern) | (same `TEKEXP:VALUE? GENERAL,"RB:..."`) |
| WB:DQ/DQS Phase Alignment:tDQS2DQ Type / Value(ps) / Burst Detection Level Type / Pre-amble Length / Post-amble Length / Burst Length / Burst(pk-pk) / Margin(%) / BurstDetectionMode / IsReadWriteGreater / Strobe High/Mid/Low / Data High/Mid/Low / Hysteresis / Margin | (same Write-Burst patterns) | (same query patterns) |
| Read Burst : Burst Detection Level Type / Pre-amble Length (tCK) / Post-amble Length (tCK) / Burst Length / Strobe High/Mid/Low / Data High/Mid/Low / Hysteresis / Margin | (same patterns) | (same query patterns) |
| Write Burst : Burst Detection Level Type / Pre-amble Length / Post-amble Length / Burst Length / tDQS2DQ Type / tDQS2DQ Value (ps) / Strobe High/Mid/Low / Data High/Mid/Low / Hysteresis / Margin | (same patterns) | (same query patterns) |

For LPDDR5-5X, the analogous catalog uses `RB:DQ/DQS Phase Alignment:tDQSQ`, `tDQSQ Value`, `Pre-amble Static (tWCK)`, `PreAmble Static Value`, `Pre-amble Toggle (tWCK)` (read-only), `Postamble Mode`, plus the Read Burst Strobe/Data High/Mid/Low/Hysteresis/Margin variants and the Write Burst `tWCK2DQI Type / Value (ps)` / `Pre-amble Static (tCK)` / `Pre-amble Toggle (tCK)` / `Post-amble Length (tCK)` / `Burst Length` / Strobe/Data High/Mid/Low/Hysteresis/Margin / `Dont Care Length (tWCK)` parameters. Each parameter follows the `TEKEXP:VALUE GENERAL,"WB:DQ/DQS Phase Alignment:<param>","<value>"` /  `TEKEXP:VALUE? GENERAL,"WB:DQ/DQS Phase Alignment:<param>"` syntax.

### General example list (Table 29)

| Example | Description |
|---|---|
| `TEKEXP:*IDN?\n` | Returns the active TekExpress application name running on the scope. |
| `TEKEXP:*OPC?\n` | Returns the last command execution status. |
| `TEKEXP:ACQUIRE_MODE PRE-RECORDED\n` | Sets the acquire mode as pre-recorded. |
| `TEKEXP:ACQUIRE_MODE?\n` | Returns LIVE when acquire mode is set to live. |
| `TEKEXP:EXPORT REPORT\n` | Returns the report file in bytes. This can be written into another file for further analysis. |
| `TEKEXP:INFO? REPORT\n` | Returns `"100,ReportFileName.mht""` — 100 is the file size in bytes for filename ReportFileName. |
| `TEKEXP:INFO? WFM\n` | Returns `"100,WfmFileName1.wfm";"200,WfmFileName2.wfm"`. |
| `TEKEXP:VALUE GENERAL,"Bandwidth", 20` | Sets the bandwidth to 20 GHz. |
| `TEKEXP:VALUE? GENERAL,"Bandwidth"` | Queries the Bandwidth set and returns the value in GHz. |
| `TEKEXP:INSTRUMENT "Real Time Scope",DPO714AX (GPIB8::1::INSTR)\n` | Sets the instrument value as DPO714AX ( GPIB8::1::INSTR ) for the selected instrument type Real Time Scope. |
| `TEKEXP:INSTRUMENT? "Real Time Scope"\n` | Returns "DPO714AX ( GPIB8::1::INSTR )". |
| `TEKEXP:LASTERROR?\n` | Returns ERROR: INSTRUMENT_NOT_FOUND, when no instrument is found. |
| `TEKEXP:LIST? DEVICE\n` | Returns "TX-Device,RX-Device" when TX-Device, RX-Device are the available device. |
| `TEKEXP:LIST? INSTRUMENT,"Real Time Scope"\n` | Returns the list of available instruments. |
| `TEKEXP:MODE?\n` | Returns COMPLIANCE when the execution mode is compliance. |
| `TEKEXP:POPUP "OK"\n` | Sets OK as the response to active popup in the application. |
| `TEKEXP:POPUP?\n` | Returns "OK", when OK is the active popup information shown in the application. |
| `TEKEXP:REPORT GENERATE\n` | Generates report for the current session. |
| `TEKEXP:REPORT? "Scope Model"\n` | Returns "DPO714AX" when DPO714AX is the scope model. |
| `TEKEXP:REPORT? "DUT ID"\n` | Returns "DUT001" when DNI_DUT001 is the DUT ID. |
| `TEKEXP:SELECT DEVICE, TX_Device, TRUE\n` | Selects TX_Device. |
| `TEKEXP:SELECT? DEVICE\n` | Returns "TX-Device". |
| `TEKEXP:SETUP DEFAULT\n` | Restores the application to default setup. |
| `TEKEXP:STATE STOP\n` | Stops the test execution. |
| `TEKEXP:STATE?\n` | Returns READY when the application is ready to run next measurement. |
| `TEKEXP:STATE? SETUP\n` | Returns NOT_SAVED when the current setup is not saved. |
| `TEKEXP:VALUE GENERAL,"DataRate", 3600` | Sets the data rate to 3600. |
| `TEKEXP:VALUE? GENERAL, "Clock Signal Probe Type"` | Returns the clock signal probe type as Differential or Single Ended. |
| `TEKEXP:SELECT TEST ,"tck",True` | Selects the measurement "tCK". |
| `TEKEXP:VALUE GENERAL "Record Length (mpts)",0.5` | Sets the global configuration parameter value of Record Length to 0.5mpts. |
| `TEKEXP:VALUE? ANALYZE, "tCK_NUI_RJ_NoBUJ", "N value Start"` | Returns the value of the analyze parameter Start N Value for the specified measurement. |
| `TEKEXP:VALUE ANALYZE, "tCK_NUI_RJ_NoBUJ", "N value Start", 4` | Sets the Analyze parameter's low range for N value to 4 for the specified measurement. |
| `TEKEXP:VALUE GENERAL "DQ_Write Connected to Filter File","C:\Users\Public\Automation\FilterFiles\Clock_50GSs.flt"` | Sets the filter file for DQ Write signal. |
| `TEKEXP:USER_DEF_ACQ?` | Queries the User Defined Acquisition status. |
| `TEKEXP:USER_DEF_ACQ TRUE` | Enables User Defined Acquisition. |
| `TEKEXP:VALUE GENERAL,"Run Test More than Once","True"` | Enables the multi-run option. |
| `TEKEXP:VALUE GENERAL,"Number of Runs",5` | Sets the number of iterations that the measurement has to run. |
| `TEKEXP:VALUE GENERAL,"Sample Rate (GS/s)",50` | Set the Sample Rate to 50 GS/s. |

## Cross-references

- `starting-application` — the Options > Instrument Control Settings dialog is the GUI equivalent of `TEKEXP:INSTRUMENT` / `TEKEXP:LIST? INSTRUMENT` discovery commands.
- `setup-dut-panel` — every parameter on the DUT tab (DUT ID, Device, Data Rate, WCK:CK, Burst Detection Method, Signal Probe Type, Filter Files, TriMode Probe, Voltage Settings) is set via `TEKEXP:VALUE GENERAL,"<ParameterName>","<Value>"`.
- `setup-test-selection-and-acquisitions` — Test Selection toggles map to `TEKEXP:SELECT TEST,"<TestName>",<True|False>`. Signal-to-Source / "Connected to" mappings map to `TEKEXP:VALUE GENERAL,"<Signal> Connected to","<CHn>"`.
- `setup-configuration` — Bandwidth / Record Length / Sample Rate / Retain Vertical Scale / Ref Levels / Burst Detection thresholds are all `TEKEXP:VALUE GENERAL,...` or `TEKEXP:VALUE ANALYZE,...` calls.
- `setup-preferences-panel` — `Run Test More than Once`, `Number of Runs`, `Enable Logging` map to GUI Preferences-tab fields.
- `results-panel` — `TEKEXP:RESULT?` queries the same per-test Pass/Fail / column data the Results panel renders.
- `reports-panel` — `TEKEXP:REPORT GENERATE` / `TEKEXP:REPORT? "<field>"` / `TEKEXP:EXPORT REPORT` are the programmatic equivalents of the Reports panel.
- `saving-recalling-test-setup` — `TEKEXP:SETUP Default / Save / Save,"<SessionName>" / Open,"<SessionName>"` / `TEKEXP:SETUP? CURRENT` covers what the Options menu does manually.

## Confidence notes

- The full DDR5 test-name catalog (source pages 63-66) and the full LPDDR5-5X test-name catalog (source pages 66-119) are summarized to representative entries rather than verbatim-listed. The complete enumeration runs hundreds of test names; they exactly match what the Test Selection tab exposes for the corresponding Device.
- The full per-parameter set/query tables (source Tables 30 and 31, pages 150-166) are sampled, not exhaustively transcribed — the pattern (`TEKEXP:VALUE GENERAL,"<ParameterName>","<Value>"`) is grammatically consistent and the parameter names correspond 1:1 to GUI labels documented in the Setup chunks.
- Several syntactic typos exist in the source (e.g. `TEKEXP:VALUE? GENERAL "Record Length (mpts)"` missing the comma before `"Record Length"` in Table 29; `TEKEXP:VALUE? GENERAL, "Clock Signal Probe Type"` with the space variation). Preserved as printed.
- The TekVISA Search Criteria figure on page 61 shows a port of `4000` while the Inbound Rule procedure says port `5000`. The procedural authoritative value is `5000`. Figure shows port 4000 as an example only.
