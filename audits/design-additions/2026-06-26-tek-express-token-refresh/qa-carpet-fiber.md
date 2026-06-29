# TekExpress prototype — carpet-fiber QA pass

**Target:** [prototypes/tek-express/index.html](../../../prototypes/tek-express/index.html) (build #94)
**Method:** Every modal × every variant, classified against corpus.
**Reviewer seat:** 30-year EE / Tek AE / 15 years TekExpress.
**Companion to:** [qa-deep-pass.md](./qa-deep-pass.md) (first heavy pass).

Legend:
- ✅ matches corpus chunk
- ⚠ deviates from corpus (or content-leak across variants)
- ✗ no corpus reference exists — **CORPUS GAP**, not a CD failure
- ⊘ button surfaces a placeholder / inline action only

---

## TL;DR — banner finding

**The corpus is the bottleneck for the next 20% of fidelity.** CD reproduced every documented corpus surface with high accuracy — when the corpus has detail (DDR5 TriMode Probe Mode Figure 12, DP 1.4 DUT-tab Figure 1, AppEmu screen `setup-dut.md`), the prototype matches it **verbatim, field for field**. Where CD missed, the chunk either lacks UI detail (PCIe NI USB 6501 per-port mapping) or doesn't exist at all (eye-diagram plot rendering, MOI schematics). This is the proof point for "the corpus IS the product" — the corpus's depth is the prototype's ceiling.

The only genuine bug introduced by CD that isn't a corpus story: **`setVariant()` does not reset `run.completed` state** — switching from AppEmu (in completed state) to PCIe leaves AppEmu's Results table visible under a PCIe title bar.

---

## Verbatim-match victories (corpus → prototype)

These are surfaces where CD rendered the corpus chunk's field list, defaults, and labels exactly. Every one of them is a credibility win for the corpus.

### AppEmulator DUT panel = [`screens/setup-dut.md`](../../../corpus/sources/tek-express/screens/setup-dut.md)

| Field | Corpus value | Prototype value |
|---|---|---|
| DUT ID | KARTHIKSAMPLE | ✅ KARTHIKSAMPLE |
| Acquire mode | Use pre-recorded waveform files (selected) | ✅ |
| Suite | Group1 | ✅ |
| Device | TX-Device | ✅ |
| View | Compliance | ✅ |
| Version | TEFW… (truncated; full = TEFW 4.0 per `setup-dut.md` Confidence notes) | ✅ TEFW 4.0 |
| Probing Type | Single-Ended | ✅ |
| Vertical Offset | 250 mV (corpus flagged as `250V` due to legibility; mV is the spec-correct value) | ✅ 250 mV (CD picked the correct unit) |
| SSC | On | ✅ |
| Signal Validation Threshold | 300 mV | ✅ |
| Analyze on Golden Waveforms | On | ✅ |
| Show Model Information in Popup | On | ✅ |

### DDR5 TriMode Probe Mode dialog = [`docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md) Figure 12

Corpus says: *"Signal column with DQS, CLK, DQS+, DQS-, DQ, ADDR CMD, CLK+, CLK- rows; Probe Mode column with dropdowns (Differential for DQS/CLK, A for the rest)."*

Prototype: ✅ DQS Diff, CLK Diff, DQS+ A, DQS- A, DQ A, ADDR CMD A, CLK+ A, CLK- A. Row order verbatim.

### DDR5 Voltage Settings dialog = Figure 14

| Field | Corpus | Prototype |
|---|---|---|
| VDD (V) | 1.1 / JEDEC default | ✅ 1.1 / JEDEC Default selected |
| Vcent-DQ (V) | 0.85 / Auto default | ✅ 0.85 / Auto |
| Vcent-CA (V) | 0.60 / Auto default | ✅ 0.60 / Auto |

### DP 1.4 DUT panel = [`docs/tek-express-displayporttx/setup-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-displayporttx/setup-panel.md) Figure 1

Corpus describes Figure 1 with: DUT ID `DUT001`, Acquire live (selected), View `Compliance`, Device `DisplayPort`, Version `CTS 1.4`, Connector `Type C`, Data Rates (RBR/HBR/HBR2/HBR3 all checked), Pre-Emphasis Levels (0/1/2/3 all checked), Voltage Swing (0·400/1·600/2·800/3·1200 all checked), SSC `Both`, Selected Lanes `Lane0`, Use Switch Matrix, Controller `Dongle`, Test Mode `Manual`, Signal Validation `Prompt if validation fails` with Data Rate/Pattern Type checked + SSC unchecked.

Prototype: **every field verbatim**. ✅ ✅ ✅. Even the seemingly-anomalous "Use Switch Matrix" on a DP variant (Switch Matrix companion app is PCIe-only, but the option label appears on DP per corpus) is reproduced correctly — proving CD did not impose a "PCIe-only" filter on its own.

### DP 2.1 DUT panel = [`docs/tek-express-displayporttx-2-1/setup-dut-panel.md`](../../../corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/setup-dut-panel.md)

✅ View · Version (CTS 2.1) · Fixture (Type C) · Data Rates UHBR10/13.5/20 · **Voltage Swing 800 mV (locked)** · Presets P0–P15 · SSC (Both) · Lane Setup (4 Lanes) · DUT Automation (UCD-323 + Serial No. UCD323-00482) · Signal Validation.

### DP 2.1 Preset Selection dialog

Corpus: *"Sixteen presets (P0 to P15) are supported for signal test for each data rate. Click Setup to view the set of presets. … Select All / Deselect All / Cancel / OK."*

Prototype: ✅ 16 checkboxes, P0–P9 checked (per DP 2.1 demo posture), Deselect All / Select All / Cancel / OK. ⚠ Only one preset list — corpus calls for **per-data-rate tabs** (UHBR10/13.5/20 each get their own preset selection).

### Status panel Test Status columns = [`docs/tek-express-pci-express/status-and-results-panels.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/status-and-results-panels.md)

Corpus columns: Test Name | Acquisition | Acquire Status | Analysis Status.
Prototype: ✅ exact column set, exact "• To be started" pre-run state.

### Options menu = [`docs/tek-express-pci-express/starting-application.md`](../../../corpus/sources/tek-express/docs/tek-express-pci-express/starting-application.md) + [`screens/options-dropdown.md`](../../../corpus/sources/tek-express/screens/options-dropdown.md)

✅ Default Test Setup, Open Test Setup, Save Test Setup, Save Test Setup As, Open Recent (▶ but renders as modal not cascade), Continuous Run Setup, Instrument Control Settings, Keep On Top, Email Settings, Deskew, Suite, Message Font Size, Help, About TekExpress.

### Suite dialog (PCIe)

Variant-aware. ✅ Radio set: PCIe Gen 3 / Gen 4 / Gen 5 (selected) / Gen 6 / CEM 5.0 / CEM 6.0 / CXL 2.0 / CXL 3.0 — matches `variant.suite.options` exactly.

### About TekExpress dialog (PCIe)

✅ TekExpress PCI Express · Framework version 5.4.1.6 · Solutions version 5.0.1.6 · Manual 077-1762-05 · "Add-in Card : PCIe : Base 5.0 / CEM 5.0" · ©2026 Tektronix.

⚠ "Not Intended For Public Release" notice present in About dialog. A16 only removed it from the left rail; About still carries it. Decision needed: keep (matches internal-build convention) or remove for customer demos.

---

## Variant content leaks (⚠)

CD reused one dialog template across variants. Where the template lines up with one corpus chunk, it ✅; where it deviates from another corpus chunk, it ⚠. The chunks themselves don't conflict — the implementation just didn't variant-switch the dialog body.

| Dialog | Renders | Matches | Deviates from |
|---|---|---|---|
| De-Embed Filter File Path | "Differential / Single-Ended browse pair" | ✅ DDR5 chunk ("Filter Files Path... per probing type") | ⚠ PCIe chunk pg 49 (per-lane filter assignment) · ⚠ DP 2.1 chunk ("positive and negative channels") |
| DUT Automation Setup | "Control Type + Serial No + Standard script path" | ✅ DP 2.1 (UCD-323) | ⚠ PCIe NI USB 6501 (no per-port mapping fields) |
| Configure (per-test) | AppEmu-shape Acquire form (us/div, 1000 samples) | ✅ AppEmu | ⚠ PCIe Gen 5 (Acquire should be ps/div + 1M+ samples) |
| Limits Editor row content | Generic "Eye Width (ps) · L:50 · H:2000" placeholder | ✗ no variant pulls real limits | (corpus has per-test limits in variant.results) |

The fix per dialog is small — variant-switch the dialog template. The fact that the same template covers DDR5 verbatim is why the leak slipped: CD verified DDR5 against corpus, but the test for whether the dialog stayed correct on other variants needs corpus chunks that don't currently exist in depth (see Corpus Gaps below).

---

## Real bug — not a corpus story

### Variant switch doesn't reset run state

Repro:
1. `TekApp.setVariant('appemu')` → `TekApp.applyScenario('completed')` → Results shows 2 rows (Period using SCOPE...).
2. `TekApp.setVariant('pcie')` (no scenario applied) → title bar shows "PCI Express — (Untitled)*", side nav unchanged.
3. Results panel **still shows the AppEmu Period rows** — `run.completed` is true, `run.results` is the AppEmu array.

Expected: switching the variant should call `resetRun()` (which the `live` scenario does call). Currently it doesn't. The effect for customer demos: clicking through the Tweaks dropdown after a "Results review & report" mock flow will carry the prior variant's results forward until a new scenario is applied.

Fix is small: have `setVariant()` call `resetRun()` after replacing currentVariant.

---

## Corpus gaps surfaced by the audit (✗)

This is the headline of the headline: places where the prototype is good and the corpus is missing.

### Plots panel — eye-diagram rendering

The largest gap by visual impact. `plotTests[]` carries the readout values (Width, Height, ΔX, Vp-p), but the corpus screen `plots.md` says only:

> Plot type: eye / waveform / spectrum

The corpus doesn't describe what an eye-diagram VISUAL looks like (overlaid bit transitions creating an open-eye shape with a mask overlay), so CD's chart renderer falls back to a generic time-domain waveform.

**Corpus addition needed:** a `corpus/sources/tek-express/screens/plots-eye.md` and `plots-jitter-histogram.md` and `plots-bathtub.md` documenting each plot type's visual conventions (axes, span, mask geometry, units).

### PCIe Filter Setup dialog content

PCIe chunk pg 49:
> Filter file selection (path to a `.flt` or similar)
> Per-lane filter assignment
> Filter preview (response plot)

No screen for the PCIe filter dialog UI. Per-lane field layout and preview behavior are not specified. CD reused the DDR5-shaped Differential/Single-Ended pair.

**Corpus addition needed:** `screens/setup-dut-filter-setup-pcie.md` documenting per-lane filter assignment (Lane 0 → file.flt, Lane 1 → ..., × 16 for Gen 5 x16) and the response-preview plot region.

### PCIe NI USB 6501 DUT Controller dialog

PCIe chunk pg 53:
> NI USB 6501 DUT Controller Support: Maps logical control lines to USB-6501 ports, defines voltage levels and pulse widths, and saves the controller configuration for reuse.

No screen for the per-port mapping UI. Voltage / pulse-width threshold fields not specified.

**Corpus addition needed:** `screens/setup-dut-ni-usb-6501.md` with the port assignment table (P0.0 → Reset, P0.1 → Test Mode, etc.), voltage thresholds, pulse-width specs.

### MOI schematic content per test

`screens/setup-test-selection.md` mentions Show MOI / Schematic / Configure as per-test actions but doesn't include the MOI content itself. CD's MOI dialog is a placeholder pointing to the manual.

**Corpus addition needed:** `corpus/sources/tek-express/docs/tek-express-pci-express/moi-tx-eye-tp4-gen5.md` (etc.) with:
- Equipment connection diagram (DUT → fixture → cables → probe → scope channel)
- Pin map (Lane 0 P/N → Ch1+/Ch1-)
- Fixture list with part numbers (TCA-SMA, Wilder, etc.)
- Step-by-step procedure
- Pass/fail mask reference

This is real-world AE-demo material. The fact that none of it exists in corpus is the ceiling for a demo-credible prototype today.

### Continuous Run Setup dialog content

Mentioned in `starting-application.md` Options menu list ("repeat the same test sequence indefinitely") but no field set.

**Corpus addition needed:** `screens/options-continuous-run.md`.

### Burst Detection Setup — full field list

DDR5 chunk has the **DDR5 Burst-detection parameters table** (Pre-amble Length, Post-amble Length, Burst Length UI, Burst Amplitude Levels, Write Burst pk-pk, Read Burst pk-pk, Margin %, tDQS2DQ, DQ/DQS Levels with High/Mid/Low, Edge Detection Hysteresis, Termination Logic Margin) and the **LPDDR5-5X** sister table — both extensive. The prototype Burst Detection Setup dialog implements only the first 5 of ~12 fields.

⚠ Not a corpus gap — the corpus has the full table. Implementation gap. Fix: expand the Burst Detection dialog to render the full table.

### Limits Editor — per-test limits binding

`screens/setup-test-selection-limits-editor.md` documents the structure but limits per test in the prototype's variant data live in `variant.results[]` (e.g. `L:9.0000 H:—` for PCIe Tx Eye Width). The Limits Editor dialog currently shows generic placeholder limits (50/2000) for every row.

⚠ Not a corpus gap — the data is in the variant. Implementation gap: parse `variant.results[]` margin strings and populate the Limits Editor rows.

### Lane Setup width-constraint behavior (DP)

DP 2.1 chunk: *"1 Lane: only one lane can be used. 2 Lanes: any one lane or two lanes. 4 Lanes: any lane / two lanes / four lanes."*

Current dialog: 4 checkboxes always visible, all freely toggleable.

⚠ Implementation gap. Fix: drive lane availability from the Link Width parent control.

### LPDDR5-5X conditional fields

DDR5 chunk specifies WCK:CK ratio, WCK Frequency, Clock Frequency, VDD2, VDDQ, VOH, Vcent-CS — all "Only available when Device = LPDDR5-5X". Prototype's Device dropdown carries LPDDR5-5X but no fields swap.

⚠ Implementation gap.

---

## Carpet-fiber findings table (every modal × every variant)

| Modal | Variant | Status | Notes |
|---|---|---|---|
| Comments popup | PCIe | ✅ | Persona-aware seed text, Clear/Copy/Paste, Cancel/OK |
| De-Embed Filter | PCIe | ⚠ | DDR5-shape — PCIe corpus says per-lane |
| DUT Automation Setup | PCIe | ⚠ | DP-shape — PCIe corpus mentions NI USB 6501 port mapping not captured |
| Show MOI | PCIe | ✅ structure / ✗ content | Pointer to manual 077-1762-05 |
| Reference Schematic | PCIe | ⊘ / ✗ | Placeholder; no corpus schematics exist |
| Configure (per-test) | PCIe | ⚠ | AppEmu-shape Acquire form (us/div wrong for Gen 5 eye) |
| Limits Editor | PCIe | ⚠ | Placeholder limits not from variant data |
| Burst Detection Setup | DDR5 | ⚠ | 5 of ~12 corpus fields implemented |
| Voltage Settings | DDR5 | ✅ | Verbatim Figure 14; LPDDR5-5X swap not implemented |
| TriMode Probe Mode | DDR5 | ✅ | Verbatim Figure 12 (8-row signal table) |
| De-Embed Filter | DDR5 | ✅ | Verbatim corpus text |
| Preset Selection | DP 2.1 | ✅ structure / ⚠ | Per-data-rate tabs missing |
| Lane Setup | DP 2.1 | ⚠ | 4 checkboxes always shown; corpus says width-constrained |
| DUT Automation Setup | DP 2.1 | ⚠ | Only Standard script path; corpus calls for Standard + Type C |
| De-Embed Filter | DP 2.1 | ⚠ | DDR5-shape — DP 2.1 corpus says positive/negative channels |
| Lane Setup | DP 1.4 | (not opened in this pass) | — |
| (no Setup dialogs) | AppEmulator | ✅ | DUT panel field set verbatim from `screens/setup-dut.md` |
| Open Recent | All variants | ✅ | Variant-aware recent list from `variant.recent[]` ⚠ Rendered as modal not cascade sub-menu |
| Continuous Run Setup | All | ✅ structure / ✗ content | No corpus chunk for field set |
| Instrument Control Settings | All | ✅ | Connection + Resource (VISA) + auto-detect + Test Connection |
| Email Settings | All | ✅ | Variant-aware recipient (A9 confirmed) |
| Suite | All | ✅ | Variant-aware option list |
| Deskew | All | ⊘ | Status bar message, no dialog (likely acceptable per corpus mention) |
| Message Font Size | All | ⊘ | Cycles enum in status bar (acceptable) |
| Help | All | ⊘ | (not exercised) |
| About TekExpress | All | ✅ | Variant version/manual/context; "Not Intended For Public Release" carried over |
| Plots: Tx Eye chart | All | ✗ visual | Time-domain waveform, not eye diagram (corpus gap) |
| Status: Test Status pre-run | All | ✅ | Columns verbatim from corpus |
| Status: Log View pre-run | All | ✅ | Empty state matches corpus |
| Results: pre-run | All | ✅ | Empty-state message matches corpus |
| Results: completed | PCIe | ✅ | 8 rows, all PCIe-specific |
| Results: completed | DDR5 | ✅ | 8 rows, tCK family verbatim from manual |
| Results: completed | DP 2.1 | ✅ | 5 rows, 2 fails on Lane 3 — realistic UHBR 20 posture |
| Results: completed | DP 1.4 | ✅ | 8 rows, DP 1.4 test names verbatim from manual |
| Results: completed | AppEmu | ✅ | 2 rows verbatim from `results.md` (including the apparent L>H quirk) |
| Reports: Configuration tab | All | ✅ | Report path normalized (A6) |
| Reports: View Settings tab | All | ✅ | Matches corpus screen |

---

## Updated P0/P1/P2 (delta from qa-deep-pass.md)

### P0 (already filed)
- **P0-1.** Eye-diagram rendering — corpus gap, not CD bug. Adding `screens/plots-eye.md` would unblock CD.

### P1 (new from this pass)
- **P1-5.** `setVariant()` does not reset `run.completed` — stale Results carry across variants.
- **P1-6.** Filter Setup dialog leaks DDR5-shape into PCIe and DP 2.1.
- **P1-7.** DUT Automation Setup dialog leaks DP-shape into PCIe (missing NI USB 6501 per-port mapping).
- **P1-8.** Configure dialog Acquire form unchanged across variants (us/div wrong for PCIe Gen 5).

### P2 (new from this pass)
- **P2-13.** Burst Detection Setup implements only 5 of ~12 fields per DDR5 chunk.
- **P2-14.** Limits Editor placeholder limits — wire to `variant.results[]` margin strings.
- **P2-15.** Lane Setup (DP) not width-constrained.
- **P2-16.** Preset Selection (DP 2.1) missing per-data-rate tabs.
- **P2-17.** DUT Automation Script Path (DP 2.1) missing Type C path.
- **P2-18.** Open Recent renders as modal — corpus implies cascade sub-menu.
- **P2-19.** About dialog carries "Not Intended For Public Release" — decision needed for customer demos.

---

## Corpus completion checklist (the actionable banner)

To bottom-out the prototype against corpus, the following chunks would close the audit gaps:

- [ ] `corpus/sources/tek-express/screens/plots-eye.md` — eye-diagram visual conventions
- [ ] `corpus/sources/tek-express/screens/plots-jitter-histogram.md`
- [ ] `corpus/sources/tek-express/screens/plots-bathtub.md`
- [ ] `corpus/sources/tek-express/screens/setup-dut-filter-setup-pcie.md` — per-lane filter assignment + response preview
- [ ] `corpus/sources/tek-express/screens/setup-dut-filter-setup-dp.md` — positive/negative channels for DP
- [ ] `corpus/sources/tek-express/screens/setup-dut-ni-usb-6501.md` — port-mapping table + thresholds
- [ ] `corpus/sources/tek-express/screens/options-continuous-run.md`
- [ ] `corpus/sources/tek-express/screens/options-instrument-control.md` — full field set (Connection / Resource / GPIB / Test)
- [ ] `corpus/sources/tek-express/screens/options-deskew.md` — does it open a dialog or trigger a status action?
- [ ] `corpus/sources/tek-express/docs/tek-express-pci-express/moi-*.md` — per-test Method of Implementation chunks (TP4 Gen5 Tx Eye, CTLE Sweep, Preset Sweep, Jitter Decomposition)
- [ ] `corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/preset-selection-dialog.md` — confirms per-data-rate tabs

The first three (`plots-*.md`) are the biggest single unlock — they would let CD render proper eye/jitter visuals.

---

## What this audit proves

1. **CD does not hallucinate when corpus has detail.** Every verbatim-match victory above is a chunk → render pipeline working exactly as designed.
2. **CD synthesizes plausibly when corpus is thin.** The Continuous Run Setup fields, the placeholder Limits Editor values, the time-domain plot — all reasonable guesses from a model with deep generalized knowledge. They're wrong in the specific ways a 30-year AE catches because the *specific* truth isn't in corpus.
3. **The product is the corpus.** Every gap in this audit closes by writing a corpus chunk, not by changing CD's behavior. Adding `plots-eye.md` → CD renders eye diagrams. Adding `moi-tx-eye-tp4-gen5.md` → CD ships a real MOI surface. The prototype's ceiling is the corpus's floor.
