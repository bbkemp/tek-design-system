# TekExpress prototype — heavy QA pass against corpus

**Target:** [prototypes/tek-express/index.html](../../../prototypes/tek-express/index.html) (build #94, dropped 2026-06-26)
**Reviewer seat:** 30-year EE / Tek AE / 15 years managing TekExpress installations
**Inputs:** Corpus screen `.md` files in `corpus/sources/tek-express/screens/`, manual chunks in `corpus/sources/tek-express/docs/<variant>/`, walkthroughs in `corpus/sources/tek-express/walkthroughs/`
**Method:** Local preview at port 3000, navigate every panel × every variant via `TekApp.setVariant()` + `applyScenario()`, diff each visible surface against its corpus source-of-truth.

---

## TL;DR

**The build is a major step forward.** CD picked up every A-item from the prior critical-AE round and quietly delivered ~50% of the B-list functional gaps that were supposed to defer to a future round. Variant-awareness is now genuine — title bar, wordmark, status bar, DUT panel structure, test tree, results, log, recent sessions, and email recipient all swap per variant from a single source-of-truth (`window.TEK_VARIANTS`).

**One P0** to fix (plot rendering misrepresents eye-diagram tests as time-domain waveforms). **Four P1** (wizard step jumpability, dropdown→title binding, paint-not-compose regression count went up, Tweaks dropdown shows variant ID instead of display name). The rest is polish.

---

## What's strong — keep this

### Variant-aware rendering across the app

| Variant | Title bar | Wordmark | Suite | Status bar | DUT structure |
|---|---|---|---|---|---|
| PCI Express | `PCI Express — (Untitled)*` | TekExpress · PCI Express | PCIe Gen 5 | `Ready · 0 of 10 tests · PCIe Gen 5 · Scope: DPO77002SX · DUT ctrl: NI USB 6501` | DUT-ID + Suite + Device + View (Compliance) + Device Profile (Data Rate / Lane Selection / SSC / Reference Clock) + Automated DUT Control (NI USB 6501 + De-Embed Filter + Switch Matrix indicator) |
| DDR5 Tx | `DDR5 Tx — (Untitled)*` | TekExpress | JESD79-5C (DDR5) | `Ready · 0 of 8 tests · DDR5 6400 MT/s · Scope: DPO77002SX · Probe: P7720 TriMode` | DUT-ID + Suite + Device + Device Profile (Data Rate MT/s + Burst Detection Method) + Signal Probe Type (Clock/DQS Differential) + Probe & Filter Setup (Voltage Settings + TriMode Probe Setup) |
| DisplayPort Tx 2.1 | `DisplayPort Tx 2.1 — (Untitled)*` | TekExpress | CTS 2.1 | `Ready · 0 of 5 tests · DisplayPort CTS 2.1 · UCD-323 DUT ctrl detected` | DUT-ID + Suite + Device + View + Version (CTS 2.1) + Fixture (Type C) + Device Profile (Data Rates UHBR10/13.5/20 + Voltage Swing 800 mV locked + Presets P0–P15 + SSC) + Lane Setup (4 Lanes) + DUT Automation (UCD-323 + Serial No.) + Signal Validation & Filter |
| DisplayPort Tx | (verified via JS) | TekExpress | CTS 1.4 | (variant-specific) | Per `tek-express-displayporttx/setup-panel.md` |
| AppEmulator | (verified via JS) | TekExpress | Group1 | (variant-specific) | DUT-ID = `KARTHIKSAMPLE` (verbatim from `screens/setup-dut.md`) |

Every PCIe / DDR5 / DP 2.1 field on screen traces to a manual chunk by URL.

### Prior-round A-list verification (17 items)

| # | A-item | Status | Evidence |
|---|---|---|---|
| A1 | PCIe Vp-p 1300 mV not 800 mV | ✅ | Plot readout: `Vp-p (full-swing): 1300 mV`; Results row `Vp-p full-swing (mV) 1284 · L:800.0 H:1300.0` |
| A2 | DDR5 tCK Avg correct era | ✅ | `tCK Avg (ps) 312.50` for DDR5-6400 (= 1/3200 MHz). Note: my A2 prior advice was actually wrong — 156.25 ps is UI not tCK; CD picked the correct value. |
| A3 | PCIe Suite + CEM 5.0/6.0 | ✅ | `suiteOpts: [Gen 3, Gen 4, Gen 5, Gen 6, CEM 5.0, CEM 6.0, CXL 2.0, CXL 3.0]` |
| A4 | PCIe Device split Root Complex / Switch | ✅ | `deviceOpts: [Add-in Card, Root Complex, Switch, CEM Slot, Endpoint, Riser Card, Retimer]` |
| A5 | VISA resource string in scope log | ✅ | `Discovering scope at TCPIP0::192.168.1.42::inst0::INSTR...` |
| A6 | Report paths normalized | ✅ | All variants now `C:\Users\Public\Tektronix\<App>\Reports\` |
| A7 | AppEmu log dates today | ✅ | Log entries `06/26/2026 04:35:05 ...` |
| A8 | Live waveform default | ✅ | DUT panel radio shows Acquire Live Waveforms selected on PCIe/DDR5/DP 2.1 |
| A9 | Per-variant email | ✅ | PCIe `midway-max-tw@nvidia...`, DDR5 `midway-max-bg@micron...`, DP 1.4 `midway-max-sg@source-validation...`, DP 2.1 `midway-max-tw@amd-rdna...`, AppEmu `pete.midway-max@tek-validation...` |
| A10 | Status bar contextual | ✅ | See per-variant status bar table above |
| A11 | De-Embed Filter label | ✅ | Renamed and surfaced as `De-Embed Filter` with `Enable` + `Setup` button — better than my suggested fix |
| A12 | 70% checked tests | ✅ | PCIe 7/10, DDR5 6/8, DP 2.1 ~5/5 visible |
| A13 | PCIe Gen 4 / Gen 6 test groups | ✅ | Test Selection shows Algorithm Library + Gen 4 — Transmitter (TP4) + Gen 5 + Gen 6 + Reference Equalization + SRIS |
| A14 | DP 2.1 second FAIL | ✅ | Two fails: `Eye Height Lane 3 (mV) 18.7 — Fail` and `TJ Lane 3 (UI) 0.281 — Fail` |
| A15 | PCIe comment refinement | ✅ | `Gen 5 x16 — CTLE sweep ran overnight in TWN (Midway Max). Re-run requested by Guru Gus (Beaverton); save before next preset sweep.` |
| A16 | Not-for-release notice removed | ✅ | HTML grep confirms absent |
| A17 | Bare button fix | ⚠ | Count went UP (34 vs prior 19) — see P1-4 |

### Prior-round B-list — half quietly shipped

| # | B-item | Status |
|---|---|---|
| B1 | PCIe SSC + Lane Selection + Reference Clock | ✅ Shipped |
| B2 | DDR5 WCK:CK ratio (LPDDR5-5X only) | ❌ Device dropdown switches DDR5/LPDDR5-5X but WCK:CK doesn't appear conditionally |
| B3 | DP 2.1 Voltage Swing locked + SSC + Lane Setup + Signal Validation | ✅ Shipped |
| B4 | Comments dialog + Session browser | ⚠ Pencil icon present; dialog content not surfaced in this pass |
| B5 | View dropdown (Compliance/Advanced) | ✅ Shipped (wizard step count switches per variant) |
| B6 | Filter Setup dialog content | ⚠ Setup button present; dialog content not yet wired |
| B7 | Tx Preset sweep dialog | ⚠ Setup button present; dialog content not yet wired |
| B8 | Show MOI / View Probes per test | ✅ Shipped on Test Selection (Show MOI / Schematic / Configure) and Acquisitions (Refresh Sources / View Probes) |
| B9 | Limits Editor button | ✅ Shipped on Configuration step |
| B10 | Options menu inventory | ✅ Shipped — Default/Open/Save/Save As/Open Recent + Continuous Run + Instrument Control + Keep On Top + Email + Deskew + Suite + Message Font + Help + About |
| B11 | **Save Test Setup** (the dollar workflow) | ✅ Shipped — Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent |
| B12 | Multi-session run mode | ❌ Not surfaced |
| B13 | Status panel Test Status columns | ✅ Shipped — `Test Name` / `Acquisition` / `Acquire Status` / `Analysis Status` per corpus |
| B14 | Plots multiple side-by-side | ❌ Still single plot per variant |
| B15 | Probe config dialog | ⚠ View Probes link present; dialog content not yet wired |

---

## Per-screen accuracy audit (corpus-grounded)

### Setup → DUT panel

**Variant-specific layout** is the headline win. Three different DUT panels rendered from `window.TEK_DUT_PANELS` instead of one DDR5-shaped form across all variants.

| Variant | Corpus chunk | What's accurate | What's still off |
|---|---|---|---|
| PCI Express | [`docs/tek-express-pci-express/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/setup-dut-panel.md) | DUT ID + Suite (PCIe gen incl CEM/CXL) + Device + View + Data Rate (32.0 GT/s pre-populated) + Lane Selection + SSC + Reference Clock + NI USB 6501 controller + De-Embed Filter Setup + Switch Matrix indicator | **PCIe Generation field** per pg 43 of manual is technically a separate field from Suite — current build merges them. Minor — Suite covers it semantically. Multi-session run mode (pg 54) still absent. |
| DDR5 Tx | [`docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md) | DUT-ID + Suite (JESD79-5C / JESD209-5C) + Device (DDR5/LPDDR5-5X) + Data Rate (MT/s) + Burst Detection Method (with Setup) + Signal Probe Type (Clock/DQS Differential) + Voltage Settings + TriMode Probe Setup | When Device=LPDDR5-5X, manual specifies WCK:CK ratio + derived WCK Frequency + Clock Frequency should appear conditionally — not implemented. |
| DisplayPort Tx 2.1 | [`docs/tek-express-displayporttx-2-1/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/setup-dut-panel.md) | View + Version + Fixture + Data Rates UHBR10/13.5/20 (checkbox-multi) + Voltage Swing 800 mV (locked) + Presets P0–P15 + SSC (Both) + Lane Setup 4 Lanes + DUT Automation UCD-323 + Serial No. | Signal Validation enum (Prompt if validation fails / Skip test / Skip validation / Validate but use as is) header visible but options not verified in this pass. |
| AppEmulator | [`screens/setup-dut.md`](../../../corpus/sources/tek-express/screens/setup-dut.md) | DUT-ID `KARTHIKSAMPLE` verbatim, Probe Single-Ended, Group1 suite | (not deep-walked this pass) |

### Setup → Test Selection

**Strong.** Hierarchical checkbox tree, parent-child expansion, `Deselect All | Select Required | Select All` toolbar, right-side **Test Description** panel showing the spec-grounded test write-up, bottom-of-tree `Show MOI | Schematic | Configure` per-test affordances. Matches [`screens/setup-test-selection.md`](../../../corpus/sources/tek-express/screens/setup-test-selection.md) closely.

**PCIe-specific finding:** Algorithm Library group has only 1 test (Jitter Decomposition). Per the AppEmulator manual chunk and PCIe `setup-test-selection-and-acquisitions.md`, Algorithm Library is the cross-generation utility set with multiple measurements — eye height/width, jitter decomposition, SCOPE-based measurements. Worth expanding for AE demo posture (the row stands out as thin compared to Gen 5 group with 3 tests).

**Missing:** DPOJET test group. Per [`docs/tek-express-pci-express/setup-test-selection-and-acquisitions.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/setup-test-selection-and-acquisitions.md), DPOJET integration surfaces as a test group when the scope's DPOJET application is licensed. This is the daily tool of every PCIe Tx AE. Showing it would be table-stakes credibility.

### Setup → Acquisitions

**Strong.** Per-test acquisition mapping table with columns Test Name | Acquisition | Waveform File Name. Toolbar `Refresh Sources | View Probes`. `Show Acquire Parameters` toggle below. Matches [`screens/setup-acquisitions.md`](../../../corpus/sources/tek-express/screens/setup-acquisitions.md).

**Gap:** `Acquisition` column shows `—` for all rows. Per manual chunk, the field should show the bound acquisition signal source — e.g. `Live · Ch1+/Ch2- Lane 0` or `Prerecorded · folder/Gen5_TP4_L0.wfm`. Empty makes the column read like placeholder content.

### Setup → Configuration

**Strong functionally** — implements the per-test parameter dialog described in [`screens/setup-test-selection-config.md`](../../../corpus/sources/tek-express/screens/setup-test-selection-config.md) as a dedicated wizard step.

**Layout:**
- Mode toggle: Compliance Mode / User Defined Mode
- Tabs (top-right): Global Settings / Measurements
- Left rail: MEASUREMENT list (by group, expandable)
- Bottom of left rail: `Limits Editor` + `Test Selection` buttons
- Right rail: Acquire / Analyze tabs

**Issues:**
- **Acquire form values are unrealistic for PCIe Gen 5 eye/jitter tests:**
  - `Horizontal Scale: us/div` — microseconds per division. PCIe Gen 5 UI = 31.25 ps. An eye measurement at us/div catches ~32,000 UI per division — useless for eye/jitter work. Should be `200 ps/div` or `50 ps/div`.
  - `Record Length: 1000` — too short. Compliance Tx runs use 100K–10M points for jitter decomposition. 1000 is fine for trigger detection only.
  - `Vertical Scale: 200 mV/Div` — reasonable for PCIe full-swing.
  - `Edge Trigger Level: 60mV` — plausible differential.
- **Analyze tab RISE/FALL reference levels (50/20/10% Hi/Mid/Low + Hysteresis 3)** look like AppEmulator-era defaults. PCIe Tx eye measurements typically use 80/50/20% per Base Spec — but the test types vary, so this is a soft P2.
- **Global Settings tab vs Measurements tab shows same content.** Status bar hint changes (`Global Settings — applies across all tests in scope.`) but the form below it doesn't differ. Either Global Settings should show a reduced set of fields applied across all tests, or the tab should hide measurement-specific controls.

### Setup → Preferences

**Excellent** — matches [`screens/setup-preferences.md`](../../../corpus/sources/tek-express/screens/setup-preferences.md) closely:
- Execution Options (yellow-warning margin %, Acquire/Analyze N times, deskew alert, Enable Logging)
- Actions on Test Measurement Failure (rerun N times, pause, stop+notify, Email Settings button)
- Popup Settings (auto-close Warnings + Errors after N seconds, beep)

Email Settings dialog launches and matches [`screens/setup-preferences-email-settings.md`](../../../corpus/sources/tek-express/screens/setup-preferences-email-settings.md): Recipient + Sender + Email Attachments (Reports + Status Log: Last 20 / Full Log) + Server Configuration (SMTP server/port/login/password) + Test Email / Apply / Close.

### Status panel (Test Status + Log View)

**Excellent.** [`screens/status-test-status.md`](../../../corpus/sources/tek-express/screens/status-test-status.md) calls for columns Test Name | Acquisition | Acquire Status | Analysis Status — all present, pre-run state shows `—` for Acquire Status and `• To be started` for Analysis Status. Tab pair Test Status / Log View matches.

Log View pre-run state: empty Message History + Auto Scroll checkbox + Clear Log + Save... — matches [`screens/status-log-view.md`](../../../corpus/sources/tek-express/screens/status-log-view.md).

### Results panel

**Pre-run state** matches [`screens/results.md`](../../../corpus/sources/tek-express/screens/results.md): empty-state message `No results yet — run a test to populate.`, Clear button, Debug / Preferences shortcuts.

**Completed-state** (via `applyScenario('completed')`) populates a real PCIe Gen 5 Results table. All test rows are variant-specific (no AppEmulator residue). One Pass example: `Tx Voltage Swing (G...) Pass · Vp-p full-swing (mV) 1284 · L:800.0 H:1300.0 mV` — correctly using A1's 1300 mV PCIe constant.

### Plots panel

⚠ **P0 — see findings.** Pre-run empty state is clean. Populated state renders a chart but the visual is a **time-domain PRBS waveform** (square-wave bit pattern over ~40 ns horizontal), not the **eye diagram** the title and readouts claim. For tests labeled "Tx Eye Width at TP4 (Gen 5, 32 GT/s)", the chart should be an eye diagram (overlaid bit transitions creating an open eye shape with mask overlay), spanning 1–2 UI (≈30–60 ps at Gen 5), not raw waveform at 10 ns/div. Readout values are correct (`Width 9.41 ps, Height 48.7 mV, Vp-p (full-swing) 1300 mV`) but the visual will get questioned by any RF AE in the first 10 seconds of a demo.

Also: single plot per variant. Per corpus, a real Plots panel shows multiple plots side-by-side (eye + jitter histogram + bathtub curve). Carry-over from B14.

### Reports panel

**Excellent** — both tabs (`Configuration` + `View Settings`) match corpus.

**Configuration tab:**
- Report Update Mode group (Generate new / Append + include header / Replace + previous-run-current-session or any-run)
- Report Creation Settings group (Report name with `C:\Users\Public\Tektronix\PCIExpress\Reports\NVIDIA-GEN5-X16-A1.mht` ✓ A6, Save as type, Auto increment, Create automatically, View after generating)
- View / Generate / Save As bottom

Matches [`screens/reports-configuration.md`](../../../corpus/sources/tek-express/screens/reports-configuration.md).

**View Settings tab:**
- Contents To Save group (pass/fail info, detailed results, plot images, setup config, complete app config, margin %, user comments + pencil, worst-case screenshot, Statistics Table)
- User logo group
- Group Report By (Test Name / Test Result)

Matches [`screens/reports-view-settings.md`](../../../corpus/sources/tek-express/screens/reports-view-settings.md).

### Options dropdown menu

**Comprehensive.** Matches [`screens/options-dropdown.md`](../../../corpus/sources/tek-express/screens/options-dropdown.md):
1. Default Test Setup / Open Test Setup / Save Test Setup / Save Test Setup As / **Open Recent ▶** — the dollar workflow
2. Continuous Run Setup / Instrument Control Settings / Keep On Top
3. Email Settings / Deskew ▶ / Suite ▶ / Message Font Size ▶
4. Help / About TekExpress

Per [`walkthroughs/personas-and-jobs-to-be-done.md`](../../../corpus/sources/tek-express/walkthroughs/personas-and-jobs-to-be-done.md) Subhasis quote: *"customer pays 30 to $50,000 to ensure that their half $1,000,000 setup is correctly configured through the wizard and they save the wizard and keep running the test every time they want."* — the Save / Open / Open Recent surface is now visible on the title bar. Big.

### Mock-data user flows (Tweaks panel scenarios)

| Scenario | Function | Lands on | Notes |
|---|---|---|---|
| Live compliance run | Sets Acquire Live, clears toggle, default tests, status `Ready·...` | Setup → DUT | OK |
| Pre-recorded analysis | Sets Pre-recorded, enables UDA, attach-files prompt | Setup → Acquisitions | OK |
| Saved session re-run | Loads `Run1` session, lands on Status pre-run | Status | OK — but no log entries pre-populated; could call `LOG_LINES` to seed the message history for a more realistic re-run posture |
| Results review & report | Pre-populates `RESULT_ROWS` + `LOG_LINES`, sets run.completed | Results | OK — Results / Plots / Log are all populated. Reports is the natural next click. |

**Hard bug to flag**: scenario hand-offs in the `SCENARIOS` table reference test IDs `["scope-c", "dpojet-c"]` (AppEmulator-specific). When applied to PCIe / DDR5 / DP variants, those IDs don't exist in the variant's `tests[]` array — `setTests()` silently no-ops on the check state. Effect on screen is minimal (the variant's default checked state stays) but the code path is wrong. Suggest mapping scenario test IDs by variant or filtering to "first 2 checked tests per variant".

---

## Findings — priority-ranked

### P0 — fix before next customer demo

**P0-1. Plots panel doesn't render an eye diagram for eye/jitter tests.**
- **What I see:** Time-domain PRBS waveform at -10 ns to +30 ns horizontal span; ~5 bit transitions visible. Title says `Tx Eye — TP4 (Gen 5)`, readout claims `Width: 9.41 ps`, but the chart is a single sweep at 10 ns/div, not an overlaid eye pattern.
- **What corpus expects:** Eye diagram (overlaid bit transitions producing the characteristic open-eye shape with mask overlay). PCIe Gen 5 UI = 31.25 ps, so an eye view spans ~2 UI ≈ 60 ps horizontal. Per `screens/plots.md`, "Plot type: eye / waveform / spectrum" — the type should switch per test.
- **Why it matters:** A 30-year AE will identify the mismatch in 10 seconds. This is the single most visually-recognizable PCIe Tx artifact in the industry.
- **Fix scope:** Add an `eyeplot` render function that synthesizes the overlaid-trace look. Drive from `plotTests[].type` (e.g. `type: 'eye'` vs `type: 'waveform'`). Or use a static SVG/PNG eye image keyed by test name. The chart is currently a `tek-line-chart`-style component — eye rendering needs distinct geometry.

### P1 — bugs / regressions worth addressing this round

**P1-1. Wizard steps 2–5 are `aria-disabled` and not tap-to-jump.**
- Per [`screens/setup-dut.md`](../../../corpus/sources/tek-express/screens/setup-dut.md) controls inventory: completed wizard steps show green checkmarks and are tap-to-jump enabled. Current build only enables step 1 until Next is clicked.
- The wizard works (Next + Back navigate), but the AE habit of clicking around freely between wizard steps is blocked.
- Fix: When variant state has visited a step, set `tabindex=0` and remove `aria-disabled`. The current code already has a `jumpable` class on step 1 — extend to visited steps.

**P1-2. Tweaks dropdown `change` event doesn't trigger `TekApp.setVariant()`.**
- Changing the dropdown via `el.value = 'ddr5'; el.dispatchEvent(new Event('change'))` updates the dropdown's displayed text but does NOT update the title bar, status bar, DUT panel contents, or run-state. Calling `window.TekApp.setVariant('ddr5')` directly works correctly.
- The tek-dropdown's change-handler binding to TekApp.setVariant is incomplete. Likely a missing `addEventListener('change', e => setVariant(e.target.value))` on `#tkx-version`.
- **Verify** by opening the Tweaks panel and changing the dropdown manually — does the rest of the app update? If not, P1.

**P1-3. Tweaks dropdown shows variant ID (`ddr5`) instead of display name (`DDR5 Tx`).**
- Cosmetic but jarring — every other surface uses the display name.
- Fix: drop down's option text should be `variant.name`, value should be `variant.id`.

**P1-4. Paint-not-compose regression count went UP — 34 bare `<button>` (vs 19 in v3, per original cd-prompt).**
- The original brief flagged 19 instances. Current build has 34 (excluding window controls, role=tab, and subtab classes).
- Likely culprits: the many `Setup` buttons inside DUT panel groups (Voltage Settings Setup, TriMode Probe Setup Setup, Filter Setup, Burst Detection Setup, Lanes Setup, DUT Automation Setup, Presets Setup, etc.), the per-test `Configure / Show MOI / Schematic` row, the Acquisitions toolbar (`Refresh Sources / View Probes`), browse buttons, dialog Close `X` buttons, and the Tweaks user-flow buttons.
- Fix: walk every `<button>` not nested inside `<tek-button>` or `<tek-tab>` and migrate. Document any that genuinely cannot use tek-button (window chrome and shadow-DOM menu items are the only legitimate exceptions).

### P2 — polish / corpus-fidelity nits

| ID | Where | Issue | Fix |
|---|---|---|---|
| P2-1 | Acquisitions panel | `Acquisition` column shows `—` for every row | Populate from variant's `statusRows[].acq` (e.g. `Live · Ch1+/Ch2- Lane 0`) |
| P2-2 | Configuration → Acquire | `Horizontal Scale: us/div`, `Record Length: 1000` — wrong scale for PCIe Gen 5 eye | Switch to `200 ps/div`, `Record Length: 1000000` for PCIe variant; keep us/div + 1000 only on AppEmulator |
| P2-3 | Configuration → Global Settings vs Measurements | Both tabs show the same form | Either differentiate (Global Settings: cross-test fields like reference levels; Measurements: per-test) or make Global Settings a single-form panel without the left-rail measurement list |
| P2-4 | Test Selection — PCIe | Algorithm Library group has only 1 test (Jitter Decomposition) | Add 2-3 cross-generation Algorithm Library entries per AppEmulator manual + PCIe `setup-test-selection-and-acquisitions.md` (eye height/width, SCOPE-based) |
| P2-5 | Test Selection — PCIe | DPOJET test group missing | Add `grp("dpojet", "DPOJET", [t("dpojet-tj", "Tj Decomposition", true), t("dpojet-rj", "Rj rms", false), t("dpojet-bathtub", "BER Bathtub", false)])` — DPOJET is the daily PCIe Tx AE tool |
| P2-6 | DDR5 variant — Device Profile | When Device=LPDDR5-5X is selected, manual specifies WCK:CK ratio + derived WCK Frequency + Clock Frequency should appear conditionally | Wire the Device dropdown to swap the Device Profile fields per device |
| P2-7 | Plots panel | Single plot per variant | Per [`screens/plots.md`](../../../corpus/sources/tek-express/screens/plots.md), Plots is multi-plot — show eye + jitter histogram + bathtub side-by-side, or at least the "switcher" affordances at the top-right of the plot frame should change the plot |
| P2-8 | `SCENARIOS` table | Hard-coded test IDs `["scope-c","dpojet-c"]` (AppEmulator) used across all variants | Map scenario test IDs by variant or filter to first N checked tests |
| P2-9 | Tweaks "Saved session re-run" | Lands on Status pre-run with no log entries | Seed Log View with first 4-5 lines from variant's `log[]` to make the re-run posture feel like a loaded session, not a fresh app |
| P2-10 | Saved-session re-run description | Reads `Load the saved 'Run1' session (KARTHIKSAMPLE)` regardless of variant | Switch DUT-ID placeholder to `currentVariant.dutid` |
| P2-11 | Options menu — Suite ▶ | Sub-menu exists per indicator but content not verified | Confirm Suite ▶ surfaces the variant's `suite.options[]` |
| P2-12 | DUT panel — User Defined Acquisition toggle | Visible on PCIe / DDR5 / DP 2.1 but no state binding | Wire to `currentVariant.uda` or remove the affordance from variants where it doesn't apply |

---

## Out of scope for token-refresh round (carry to next round)

These remain genuine functional gaps from the AE seat. Document and defer:

- **B2** — DDR5 LPDDR5-5X conditional fields (WCK:CK ratio + derived frequencies)
- **B4** — Comments dialog popup + Session browser dialog content
- **B6** — Filter Setup dialog content (PCIe per-lane CTLE/AFE/DFE; DP 2.1 positive/negative channel filters)
- **B7** — Tx Preset Sweep dialog (PCIe P0–P10; DP 2.1 P0–P15)
- **B12** — Multi-session run mode (PCIe lane sweeps)
- **B14** — Multi-plot Plots panel
- **B15** — Probe configuration dialog content
- DPOJET integration surface
- Real eye-diagram plot rendering (escalated to P0)
- Variant-aware UDA toggle binding
- Wizard tap-to-jump (P1-1 could be folded here if scope expands)

---

## Open decisions

1. **Eye-diagram rendering** — generate synthetic eye programmatically, or ship static SVG/PNG per variant? Programmatic is more flexible but more code; static is simpler but locks the look.
2. **Wizard step jumpability** — flip to tap-to-jump-once-visited (P1-1), or wait for a fuller UX design pass? AE expectation is the former; UX cohesion may want a hold.
3. **DPOJET surfacing** — add to Test Selection as its own group, or as a per-test affordance only (DPOJET-checkbox on each Gen-N test)? Both are real in TekExpress.
4. **Configuration tab "Global Settings" semantics** — does it apply to all tests, or only the ones selected in a Global section? Corpus chunks suggest the former; verify with PM.
5. **Tweaks "Saved session re-run" log seeding** — fully populate with all log lines (realistic), or first 4-5 (preview posture)? Tradeoff between realism and visual clutter.

---

## Corpus citations used

- [`screens/setup-dut.md`](../../../corpus/sources/tek-express/screens/setup-dut.md)
- [`screens/setup-test-selection.md`](../../../corpus/sources/tek-express/screens/setup-test-selection.md)
- [`screens/setup-test-selection-config.md`](../../../corpus/sources/tek-express/screens/setup-test-selection-config.md)
- [`screens/setup-test-selection-limits-editor.md`](../../../corpus/sources/tek-express/screens/setup-test-selection-limits-editor.md)
- [`screens/setup-acquisitions.md`](../../../corpus/sources/tek-express/screens/setup-acquisitions.md)
- [`screens/setup-acquisitions-probe-config.md`](../../../corpus/sources/tek-express/screens/setup-acquisitions-probe-config.md)
- [`screens/setup-preferences.md`](../../../corpus/sources/tek-express/screens/setup-preferences.md)
- [`screens/setup-preferences-email-settings.md`](../../../corpus/sources/tek-express/screens/setup-preferences-email-settings.md)
- [`screens/options-dropdown.md`](../../../corpus/sources/tek-express/screens/options-dropdown.md)
- [`screens/status-test-status.md`](../../../corpus/sources/tek-express/screens/status-test-status.md)
- [`screens/status-log-view.md`](../../../corpus/sources/tek-express/screens/status-log-view.md)
- [`screens/running-test.md`](../../../corpus/sources/tek-express/screens/running-test.md)
- [`screens/results.md`](../../../corpus/sources/tek-express/screens/results.md)
- [`screens/plots.md`](../../../corpus/sources/tek-express/screens/plots.md)
- [`screens/reports-configuration.md`](../../../corpus/sources/tek-express/screens/reports-configuration.md)
- [`screens/reports-view-settings.md`](../../../corpus/sources/tek-express/screens/reports-view-settings.md)
- [`docs/tek-express-pci-express/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/setup-dut-panel.md)
- [`docs/tek-express-pci-express/setup-test-selection-and-acquisitions.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/setup-test-selection-and-acquisitions.md)
- [`docs/tek-express-pci-express/setup-configuration-and-preferences.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/setup-configuration-and-preferences.md)
- [`docs/tek-express-pci-express/status-and-results-panels.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/status-and-results-panels.md)
- [`docs/tek-express-pci-express/switch-matrix-application.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/switch-matrix-application.md)
- [`docs/tek-express-pci-express/starting-application.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/starting-application.md)
- [`docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md)
- [`docs/tek-express-displayporttx-2-1/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/setup-dut-panel.md)
- [`walkthroughs/personas-and-jobs-to-be-done.md`](../../../corpus/sources/tek-express/walkthroughs/personas-and-jobs-to-be-done.md)
- [`walkthroughs/ui-redesign-mantras-and-transition-strategy.md`](../../../corpus/sources/tek-express/walkthroughs/ui-redesign-mantras-and-transition-strategy.md)
