# TekExpress build spec (internal — verbatim corpus data for screens being built)

Shared model (from corpus, used across screens):
- Device/Suite/Version context header: `TX-Device : Group1 : TEFW 4.0`
- Title bar (legacy): `TekExpress AppEmulator — (9346)*`; redesign topnav filename label: `DDR Tx — (Untitled)*`
- Selected test set (Test Selection tree):
  - Algorithm Library Measurements › "Algorithm Library Measurement"
  - SCOPE Measurements › "Period using SCOPE (Acquire-Analyze Combined)"
  - DPOJET Measurements › "Period using DPOJET (Acquire-Analyze Combined)"
  - Autoset › "Autoset Tester"
- Run controls: Start (green per corpus→blue per Bryan), Pause; during run Start→Stop, Pause enabled, form read-only, status "Running...".

## Setup › Test Selection (wizard step 2)
- Context header `TX-Device : Group1 : TEFW 4.0`. Bulk buttons: `Deselect All` · `Select Required` · `Select All`.
- Checkbox tree (4 parents/expandable, leaves):
  - Algorithm Library Measurements → Algorithm Library Measurement
  - SCOPE Measurements → Period using SCOPE (Acquire-Analyze Combined)  [checked; focused row]
  - DPOJET Measurements → Period using DPOJET (Acquire-Analyze Combined)
  - Autoset → Autoset Tester
- Test Description (read-only): "This is SCOPE based period measurement test. Refer Section-B of TekExpress SampleApp Development Guide for more details."
- Right buttons: `Show MOI` · `Schematic` · `Configure` (→ Configure dialog)
- Focus ≠ check (orange highlight = focused row driving description).

## Setup › Test Selection — Configure dialog (= Configuration wizard step source)
- Top radios: `Compliance Mode` · `User Defined Mode` (User Defined active→editable). Jump buttons: `Test Selection` · `Limits Editor`.
- Tabs: `Global Settings` · `Measurements`(active). Mini test-tree mirror. Sub-tabs: `Acquire`(active) · `Analyze`.
- Acquire form: Horizontal Scale (us/div) · Record Length · Vertical Scale (200 mV/Div) · Vertical Position (0Div) · Vertical Offset (0 mV) · Edge Trigger Slope [Positive/Negative, Positive active] · Edge Trigger Level (60mV).
- Analyze form: RISE [High 50, Mid 20, Low 10] · FALL [High 50, Mid 20, Low 10] · Hysteresis (3). (mV)

## Setup › Test Selection — Limits Editor (sub-dialog)
- Help: "View or Edit the values used for High Limit and Low Limit for each measurement. A blank cell means no limit value is applied"
- Table cols: Test Name · Details · Compare String · Low Limit · Compare String · High Limit
- Rows (3, identical): {ALM, SCOPE, DPOJET} · `Period (ps)` · `>= Greater Than Or Equal To` · `50` · `<= Less Than Or Equal To` · `2000`
- `OK` button.

## Setup › Acquisitions (wizard step 3)
- Context header same. Buttons: `Refresh Sources` · `View Probes`(→Probe Config).
- Table cols: Test Name · Acquisition · Waveform File Name (file-picker icon per row).
- Rows (4): 
  - "Algorithm Library Measure Short Record-length for Pr..."
  - "Algorithm Library Measure Acquisition for Algorithm T..."
  - "Period using SCOPE (Acq Short Record-length for SC..."
  - "Period using DPOJET (Ac-Short Record-length for DP..."
- Bottom-right checkbox: `Show Acquire Parameters`.

## Setup › Acquisitions — Probe Configuration (dialog)
- Cols: Source · Probe Type · Probe Model · Probe Method
- Rows: CH1 / TCA SMA / TCA292D / Single Ended · CH2 / Not Used / N.A / N.A · CH3 / TCA SMA / TCA292D / Single Ended · CH4 (empty)
- Buttons: `Refresh` · `Close`.

## Setup › Preferences (wizard step 4) — 3 group boxes
- Execution Options: 
  - ☑ "Highlight yellow warning if measured value is within [100] % margin of limit"
  - ☑ "Acquire/Analyze each test [1] times"
  - ☐(disabled) "Show alert when new deskew values are configured on TekScope"
  - ☐ "Enable Logging"
- Actions on Test Measurement Failure:
  - ☑ "On Test Failure, rerun that test [1] times"
  - ☐ "On Test Failure, pause the test and let me investigate"
  - ☐ "On Test Failure, stop and notify me of the failure"
  - `Email Settings` button (→ dialog)
- Popup Settings:
  - ☑ "Auto close Warnings and Informations during Sequencing  Auto close after [10] seconds"
  - ☑ "Auto close Error Messages during Sequencing  Auto close after [10] seconds"
  - ☐ "Show messages with a beep sound"

## Setup › Preferences — Email Settings (dialog) — 4 groups
- Top: "Recipient e-mail Address(es)" (hint: "Note: Separate Email addresses with a comma") · "Sender's Address"
- Email Attachments: ☐ Reports · Status Log: ( ) Last 20 Lines [active] / ( ) Full Log
- Server Configuration: SMTP Server · SMTP Port · Login · Password · ☐ Enable SSL
- Email Configuration: Max Email Size (MB) [0] · Number of Attempts to Send [0] · Timeout (Sec) [0]
- Bottom: ☐ "Email Test Results When complete or on error" · `Test Email` · `Apply` · `Close`

## Setup › DUT — Run/Config Sessions (dialog, from DUT edit/session)
- Title `Run/Config Sessions`, close X.
- Table cols: Session · DUTID · Comment. Row: `Run1` / `20260513_020304` / `KARTHIKS...` / `General Comment - App...` (+ leading radio)
- Save row: `Session Name` input + `(Max:40)` hint + `Save`.
- Actions: `Close` · `Default` · `Load` · `Delete` · `Run Sessions`.

## Status › Test Status (nav tab) — sub-tabs: Test Status | Log View
- Table cols: Test Name · Acquisition · Acquire Status · Analysis Status
- Rows (4):
  - Algorithm Library Measurement / Short Record-length for Period / — / To be started
  - Algorithm Library Measurement / Acquisition for Algorithm Test / — / To be started
  - Period using SCOPE (Acquire-Analyze Combined) / Short Record-length for SCOPE Period / — / To be started
  - Period using DPOJET (Acquire-Analyze Combined) / Short Record-length for DPOJET Period / — / To be started
- Running: rows → "In progress - Iter..." → "Completed - Itera..."; in-progress row highlighted.

## Status › Log View — Message History + bottom: Auto Scroll [✓] · Clear Log · Save…
- Running log lines (verbatim, dated 05/25/2026):
  - "Initializing run time environment. This might take some time."
  - "04:35:05 : Initializing C# App Sequencer..."
  - "04:35:05 : Setting AutoProgressUpdate = False"
  - "04:36:05 : Initializing scope handle"
  - "04:36:05 : Reading probe details"
  - "04:36:05 : Acquiring waveforms"
  - "04:36:05 : Iteration 1"
  - "04:36:23 : Acquire Type Short RecordLength for SCOPE Period"
  - "04:36:23 : Performing Reset and Autoset"
  - "04:36:25 : Performing single"
  - "04:36:25 : Saving the waveform"
  - "04:36:29 : Saving scope image snapshot"
  - "04:36:29 : Waiting for the save to be completed..."
  - "04:36:51 : Applying Settings"
  - "04:36:51 : Acquire Type Short RecordLength for DPOJET Period"

## Running Test — Minimised Window (compact overlay during run)
- Title `TekExpress AppEmulator — (Untitled)*`, mail + restore icons. Body = compact log pane. Right: Stop (red square) + Pause + 3 small state squares. Status `Running...`.
- Log snapshot (05/26/2026 04:34:43): Setting AutoProgressUpdate = False / Initializing scope handle / Reading probe details / Acquiring waveforms / Iteration 1 / Acquire Type Short Record-length for SCOPE Period / Performing Reset and Autoset.

## Results › Overall Test Result (nav tab)
- Header: `Overall Test Result` + outlined pills `Debug` · `Preferences ▼` (the ONLY outlined non-teal buttons).
- Table cols: Test Name · Pass/Fail · Iteration · Details · Value · Margin · Units
- Rows (mid-run, verbatim):
  - "Period using SCOPE (A..." · Pass · 1 · Period (ps) · 1551.1563 · L:1501.1563 H:448.8437 · ps
  - "Period using SCOPE (A..." · Pass · (empty) · Period (ns) · 1551.1563 · L:1501.1563 H:448.8437 · ns
- Right-rail Clear (× icon) — ONLY on Results.

## Plots (removed from top-nav — folded under Results as a sub-view per IA decision; OUT OF SCOPE chart → tek-empty-state placeholder)
- Select Test dropdown: "Period using DPOJET (Acquire-Analyze Combi...)". Title `Period(DPOJET)`. Axes: Amplitude (V) / Time (sec). Cursor readout x1/x2/ΔX/y1/y2/ΔY. Charts are OUT OF SCOPE per brief → styled empty rectangle + note.

## Reports (nav tab) — sub-tabs: Configuration | View Settings
### Configuration
- Report Update Mode: (•) Generate new report / ( ) Append with previous run session [☐ Include header in appended reports, disabled] / ( ) Replace current test results [( ) in previous run, current session / ( ) in any run, any session — disabled sub-radios]
- Report Creation Settings: Report name `K:\AppEmulator\Reports\DUT001.mht` + `Browse` · Save as type `Web Archive (*.mht;*.mhtml)` · ☑ Auto increment report name if duplicate · ☑ Create report automatically at the end of the run · ☑ View report after generating
- Action row: `View` · `Generate` · `Save As`. (View before run → blocking modal "Report file not generated or does not exist")
### View Settings
- Contents To Save (9 checks, 1 disabled): ☑ Include pass/fail info in details table · ☑ Include detailed results · ☑ Include plot images · ☑ Include setup configuration · ☐ Include complete application configuration · ☐ Margin value in percentage · ☑ Include user comments (+pencil) · ☐ Include worst case screenshot · ☐(disabled) Include Statistics Table
- User logo: ☐ Include user logo · hint `(Size 200*45px)` · preview/picker rect
- Group Report By: ( ) Test Name / (•) Test Result
- Action row: `View` · `Generate` · `Save As`.

## Options menu (already built, 14 items): Default/Open/Save/Save As Test Setup, Open Recent▶, Continuous Run Setup, Instrument Control Settings, Keep On Top(toggle), Email Settings, Deskew▶, Suite▶, Message Font Size▶, Help, About TekExpress.
