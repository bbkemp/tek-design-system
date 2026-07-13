# tek-express — service index

**TekExpress AppEmulator** — Windows desktop application for Tek scope-compliance test automation. Configures a device under test (DUT), selects compliance test suites, drives waveform acquisition (live or prerecorded), runs analysis, and generates results / reports. The active build is internally tagged **"Not Intended For Public Release"** in the lower-left of every screen.

The application is implemented in C# (.NET) — verified from a runtime log line in the Status › Log View running state (`Initializing C# App Sequencer...`).

This corpus subject was scaffolded **2026-06-01**, format-locked on Setup › DUT **2026-06-01**, and bulk-processed **2026-06-01** ahead of the redesign onto Tek Design System v2.

## Redesign context

Phase 1 of the TekExpress AppEmulator redesign:

- Transition the legacy Windows UI to **DS-v2**.
- Preserve **most user flows** and functionality (the walkthrough transcript in `uploads/transcripts/` is the source of truth for flow preservation).
- Some **UI reorganization** is in scope.

The corpus captures the **as-is**. The redesign deliverable lives under `audits/` or `prds/` once that work begins, not in this folder.

### Recent additions (2026-06-25 batch 2, pending processing)

5 new artifacts in `uploads/artifacts/` directly inform the redesign brief:

- **`TekExpress_Needed_Features 1.md`** — customer-requested TekExpress features summary (Modern UI / Facelift, PC-native Execution, workflow definition, performance, configurability). **Direct redesign input.**
- **`Tx-Rx Solutions Platform VOC guide Draft _08_TEK-CONFIDENTIAL.pdf`** — TekExpress VoC interview guide V0.8 (Subhasis Bera, Principal Product Manager, Solutions Platform and Decoders). Internal methodology document for VOC engagements covering workflow, JTBD, pain points, automation.
- **`Designcon 2023 VOC_SUMMARY.pptx`** — Designcon 2023 conference VOC summary, cross-product event feedback.
- **`mAR 2023 ind Customer VOC.pptx`** — March 2023 India regional customer VOC.
- **`GA VOC for Empathy Disc Guide Question Bank - GM v1.docx`** — empathy interview discussion guide / question bank (methodology, not transcript data).

**Manuals in `uploads/pdfs/`** (after 2026-06-26 retroactive routing fix — see Confidence notes below):
- `TekExpress AppEmulator (1).pdf` (NEW this turn, Tektronix-branded)
- `TekExpress DisplayPortTx 2.1.chm` + `TekExpress DisplayPortTx 2.1 - Unknown.pdf` (PDF converted from .chm via Calibre)
- `TekExpress DisplayPortTx.chm` + `TekExpress DisplayPortTx.pdf` (PDF converted from .chm via Calibre)
- `TekExpress PCI Express Online Help.pdf`
- `TekExpress_DDR5_Tx_UserManual_ENG-US_077-1648-04_077164804.pdf` — **processed 2026-06-26 via `/document-pdf` into [`docs/tek-express-ddr5-tx-user-manual/`](./docs/tek-express-ddr5-tx-user-manual/_index.md), 15 chunks.**
- `UI-app-emulator-audit.pdf` — already processed at [`docs/ui-audit/`](./docs/ui-audit/_index.md).

The `AU VoC Sync up.docx` was processed via `/document-walkthrough` into 3 chunks (2026-06-23 meeting) — see the [Documented walkthroughs](#documented-walkthroughs) section below. **The batch-2 PPTX/DOCX VOC artifacts have now been processed (2026-06-26):**

- `Designcon 2023 VOC_SUMMARY.pptx` → [`decks/designcon-2023-voc-summary/`](decks/designcon-2023-voc-summary/_index.md), **6 chunks** (event overview + 4 empathy maps + connects summary).
- `mAR 2023 ind Customer VOC.pptx` → [`decks/india-customer-voc-2023-march/`](decks/india-customer-voc-2023-march/_index.md), **4 chunks** (3 empathy maps + Infineon customer-workflow diagram).
- `GA VOC for Empathy Disc Guide Question Bank - GM v1.docx` → [`walkthroughs/empathy-discussion-guide-question-bank.md`](walkthroughs/empathy-discussion-guide-question-bank.md), **1 chunk** (Fortive corporate VOC methodology — parent of all three Subhasis-authored empathy-map decks).

The remaining batch-2 PDF (Subhasis's TekExpress-specific Tx-Rx Solutions Platform VOC guide) still awaits `/document-pdf` processing.

### Confidence notes — retroactive routing fix (2026-06-26)

PR #86's batch-1 intake routed `D9020USBC-USB3-Test-Software-MOI-latest.pdf` + `D9020USBC-USB3-Test-Software-Online-Help-latest.chm` to **this** subject's `uploads/pdfs/` based on filename heuristics ("D9020USBC USB3 Test Software" sounded like a TekExpress USB3 variant). The 2026-06-26 content scan (running the new content-scan behavior from PR #88 against the Calibre-converted PDF) revealed the cover reads "**Keysight** D9020USBC/D9320USBC USB3.2 Compliance Test Application · © Keysight Technologies 2026" — a competitor product. Both files moved to the new `keysight-d9020` subject this turn; they were never processed against tek-express docs, so no chunks needed retraction.

## Application structure

5 top-level panels accessed via the persistent left side-nav, 17 distinct screens (11 base + 5 dialogs + 1 minimised-window state):

```
TekExpress AppEmulator
├── Setup (4-step wizard)
│   ├── Step 1: DUT                    ← screens/setup-dut.md
│   │   ├── Comments popup             ← screens/setup-dut-comments.md
│   │   └── Run/Config Sessions        ← screens/setup-dut-session-browser.md
│   ├── Step 2: Test Selection         ← screens/setup-test-selection.md
│   │   ├── Configure (Acquire/Analyze) ← screens/setup-test-selection-config.md
│   │   └── Limits Editor              ← screens/setup-test-selection-limits-editor.md
│   ├── Step 3: Acquisitions           ← screens/setup-acquisitions.md
│   │   └── Probe Configuration        ← screens/setup-acquisitions-probe-config.md
│   └── Step 4: Preferences            ← screens/setup-preferences.md
│       └── Email Settings             ← screens/setup-preferences-email-settings.md
├── Status (2 tabs)
│   ├── Tab 1: Test Status             ← screens/status-test-status.md
│   └── Tab 2: Log View                ← screens/status-log-view.md
├── Running Test (compact window)      ← screens/running-test.md
├── Results                            ← screens/results.md
├── Plots                              ← screens/plots.md
├── Reports (2 tabs)
│   ├── Tab 1: Configuration           ← screens/reports-configuration.md
│   └── Tab 2: View Settings           ← screens/reports-view-settings.md
└── Options ▼ menu (title-bar overlay) ← screens/options-dropdown.md
```

## Persistent chrome (every screen)

- **Title bar** — `TekExpress AppEmulator — (<session>)*` (asterisk = unsaved; "(Untitled)" during a run); Tektronix logo at left; `Options ▼` pill at right; window controls (mail, minimise, close) far right.
- **Side-nav** (5 vertical pills): Setup · Status · Results · Plots · Reports. Orange-filled = active.
- **Right-rail toolbar** — Start ▶ (green circular) and Pause ‖ (grey circular). On Results, an extra Clear × button below. During a run, Start is replaced by Stop (red square).
- **Status bar** — bottom edge. Text ("Ready.", "Running…", "Completed") + progress fill.
- **"Not Intended For Public Release"** — red notice at lower-left.

## Documented screens (17)

| Panel | screen_id | screen_title | screen_type | Source photo |
|---|---|---|---|---|
| Setup | [setup-dut](screens/setup-dut.md) | Setup › DUT | config | `1. Setup-DUT_Landing screen.png` |
| Setup (dialog) | [setup-dut-comments](screens/setup-dut-comments.md) | Setup › DUT — Comments popup | dialog | `2. Setup-DUT_Comments popup.png` |
| Setup (dialog) | [setup-dut-session-browser](screens/setup-dut-session-browser.md) | Setup › DUT — Run/Config Sessions | dialog | `3. Setup-DUT_Run_Config Session.png` |
| Setup | [setup-test-selection](screens/setup-test-selection.md) | Setup › Test Selection | config | `4. Setup-Test Selection.png` |
| Setup (dialog) | [setup-test-selection-config](screens/setup-test-selection-config.md) | Setup › Test Selection — Configure | dialog | `5./6. Setup-Test Selection_Config_*.png` |
| Setup (dialog) | [setup-test-selection-limits-editor](screens/setup-test-selection-limits-editor.md) | Setup › Test Selection — Limits Editor | dialog | `7. Setup-Test Selection_Config_Limits Editor.png` |
| Setup | [setup-acquisitions](screens/setup-acquisitions.md) | Setup › Acquisitions | config | `8. Setup-Acquisitions.png` |
| Setup (dialog) | [setup-acquisitions-probe-config](screens/setup-acquisitions-probe-config.md) | Setup › Acquisitions — Probe Configuration | dialog | `9. Setup-Acquisitions_Probe Config.png` |
| Setup | [setup-preferences](screens/setup-preferences.md) | Setup › Preferences | config | `10. Setup-Preferences.png` |
| Setup (dialog) | [setup-preferences-email-settings](screens/setup-preferences-email-settings.md) | Setup › Preferences — Email Settings | dialog | `11. Setup-Preferences_Email Settings.png` |
| Status | [status-test-status](screens/status-test-status.md) | Status › Test Status | status | `12. Status-Test Status.png` (+ photo 15 for run state) |
| Status | [status-log-view](screens/status-log-view.md) | Status › Log View | status | `13. Status-Log View.png` (+ photo 16 for run state) |
| Running | [running-test](screens/running-test.md) | Running Test — Minimised Window | status | `14. Running Test_Minimised Window.png` |
| Results | [results](screens/results.md) | Results › Overall Test Result | readout | `17. Results_Overall Test Result.png` |
| Plots | [plots](screens/plots.md) | Plots | graph | `18. Plots.png` |
| Reports | [reports-configuration](screens/reports-configuration.md) | Reports › Configuration | config | `19. Reports-Configuration.png` |
| Reports | [reports-view-settings](screens/reports-view-settings.md) | Reports › View Settings | config | `20. Reports-View Settings.png` |
| Chrome | [options-dropdown](screens/options-dropdown.md) | Options dropdown menu | dialog | `0. Options Dropdown.png` |

## Pending screens (referenced but not yet captured)

- **`reports-configuration-modal`** — blocking dialog "Report file not generated or does not exist" that appears when `btn-view` is clicked before a report exists. Documented in the audit PDF but no source photo yet.
- **Continuous Run Setup**, **Instrument Control Settings**, and the four submenu surfaces (Open Recent, Deskew, Suite, Message Font Size) launched from the Options dropdown. Documented in `options-dropdown.md` as menu items but not as their own screens.

## Documented hardware

Tek Express AppEmulator is PC software — no front-panel hardware to document. If host-machine requirements (minimum OS, expected resolutions, supported scope-instrument family for live acquisition) become important for the redesign, they will land as a `hardware/host-requirements.md` chunk. Currently `hardware/` is empty.

## Documented manual sections

The audit PDF is processed at `docs/ui-audit/` — **10 chunks** covering the screen inventory and component categorization:

| Chunk | Topic |
|---|---|
| [_index](docs/ui-audit/_index.md) | TOC + summary totals (43 distinct component types, ~292 total instances across 7 categories) |
| [screen-inventory](docs/ui-audit/screen-inventory.md) | Per-screen audit entries (11 screens with descriptions + tags) |
| [navigation-components](docs/ui-audit/navigation-components.md) | Side nav, Wizard step indicator, Tab bar, Options ▼ |
| [right-rail-toolbar](docs/ui-audit/right-rail-toolbar.md) | Start, Pause, Clear |
| [inline-teal-pill-buttons](docs/ui-audit/inline-teal-pill-buttons.md) | 16 labels / 22 instances of the dominant inline-action style |
| [outlined-pill-buttons](docs/ui-audit/outlined-pill-buttons.md) | Debug, Preferences ▼ (only two non-teal outlined pills in the app) |
| [icon-buttons](docs/ui-audit/icon-buttons.md) | Edit/pencil, Session ellipsis, Logo picker, window mail/min/close |
| [form-inputs](docs/ui-audit/form-inputs.md) | Checkbox, Radio, Dropdown, Text input, Checkbox tree |
| [data-display](docs/ui-audit/data-display.md) | Data tables, group boxes, text areas, empty state, status bar, title bar |
| [feedback-overlays](docs/ui-audit/feedback-overlays.md) | Modal alert dialog (the single blocking-overlay component) |

### TekExpress DDR Tx Compliance and Debug Automation — DDR5/LPDDR5-5X User Manual

Processed at `docs/tek-express-ddr5-tx-user-manual/` — **13 substantive chunks + `_index.md` + `references-and-appendices`**, covering Welcome → Getting started → Setting up → Starting application → Setup panel (DUT, Test Selection, Acquisitions, Configuration, Preferences) → Status panel → Results panel → Reports panel → Saving/recalling test setups → SCPI Commands (the largest chunk by page count, pp. 56-166).

| Chunk | Topic | Pages |
|---|---|---|
| [_index](docs/tek-express-ddr5-tx-user-manual/_index.md) | Manual TOC + processing metadata | (full doc) |
| [welcome-and-help](docs/tek-express-ddr5-tx-user-manual/welcome-and-help.md) | Welcome, Getting help and support | 5-9 |
| [getting-started](docs/tek-express-ddr5-tx-user-manual/getting-started.md) | Hardware and software requirements | 10-11 |
| [setting-up-test-environment](docs/tek-express-ddr5-tx-user-manual/setting-up-test-environment.md) | Test environment setup | 12-14 |
| [starting-application](docs/tek-express-ddr5-tx-user-manual/starting-application.md) | App controls, Options menu, Email settings | 15-19 |
| [setup-dut-panel](docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md) | DUT tab + burst detection | 20-30 |
| [setup-test-selection-and-acquisitions](docs/tek-express-ddr5-tx-user-manual/setup-test-selection-and-acquisitions.md) | Test Selection + Acquisitions | 31-33 |
| [setup-configuration](docs/tek-express-ddr5-tx-user-manual/setup-configuration.md) | Global Settings, Measurements, Limits Editor | 34-39 |
| [setup-preferences-panel](docs/tek-express-ddr5-tx-user-manual/setup-preferences-panel.md) | Preferences tab | 40-41 |
| [status-panel](docs/tek-express-ddr5-tx-user-manual/status-panel.md) | Test Status, Log View | 42-45 |
| [results-panel](docs/tek-express-ddr5-tx-user-manual/results-panel.md) | Results summary | 46-48 |
| [reports-panel](docs/tek-express-ddr5-tx-user-manual/reports-panel.md) | Report generation + viewing | 49-53 |
| [saving-recalling-test-setup](docs/tek-express-ddr5-tx-user-manual/saving-recalling-test-setup.md) | Save / recall workflow | 54-55 |
| [scpi-commands](docs/tek-express-ddr5-tx-user-manual/scpi-commands.md) | Remote-control SCPI reference | 56-166 |
| [references-and-appendices](docs/tek-express-ddr5-tx-user-manual/references-and-appendices.md) | Manual back-matter | (back) |

This manual is the first product-specific TekExpress user guide in the corpus. The remaining PDFs in `uploads/pdfs/` (DisplayPortTx, DisplayPortTx 2.1, PCI Express Online Help, AppEmulator) await follow-up `/document-pdf` runs.

## Documented decks

Two cross-product VOC decks processed at `decks/`, **11 topic-clustered chunks** (6 + 4 + 1 index for each deck) plus per-deck `_index.md`. Both decks share the **empathy-map template** authored by **Subhasis Bera** and originate from the same Fortive Growth Accelerator methodology (see [walkthroughs/empathy-discussion-guide-question-bank.md](walkthroughs/empathy-discussion-guide-question-bank.md)).

### 2023-02-08 — Designcon 2023 VOC Summary

6 chunks covering Subhasis Bera's DesignCon 2023 trip summary: event overview + 4 customer empathy maps (Ampere, Synopsys Portugal, Intel, ElectroRent) + the customer-connects-summary table with 30-day follow-up plan. **Applies to:** `[tek-express, tek-flow]`.

| Chunk | Topic | Slides |
|---|---|---|
| [_index](decks/designcon-2023-voc-summary/_index.md) | Deck index + cross-deck methodology links | (full deck) |
| [event-overview](decks/designcon-2023-voc-summary/event-overview.md) | "Moments" + "Connects" divider slides — Intel as featured connect | 2-3 |
| [empathy-map-ampere](decks/designcon-2023-voc-summary/empathy-map-ampere.md) | Ampere (Ex-Intel PCIe expert) — competitive displacement of Bitifeye | 4 |
| [empathy-map-synopsys-portugal](decks/designcon-2023-voc-summary/empathy-map-synopsys-portugal.md) | Synopsys Lisbon — Python HSS compliance ask + ATE integration | 5 |
| [empathy-map-intel](decks/designcon-2023-voc-summary/empathy-map-intel.md) | Intel — "break the monopolistic barrier" + control Keysight M8040 alongside Tek scope | 6 |
| [empathy-map-electrorent](decks/designcon-2023-voc-summary/empathy-map-electrorent.md) | ElectroRent — channel-partner persona; wants roadmap visibility | 7 |
| [customer-connects-summary](decks/designcon-2023-voc-summary/customer-connects-summary.md) | All connects + 30-day follow-up plan — Intel/Ampere/Google/Synopsys/TI + papers/panels | 8 |

**Highest-RAG-value findings:**
- **Intel: "Want to break the monopolistic barrier of single-vendor solutions"** — Tek's largest historical customer actively diversifying. Cross-vendor instrument control is a customer expectation.
- **Intel: "Should be able to control M8040 for Rx along with Tek Sx Scope"** — direct ask for Keysight BERT interoperation. Matches the [TekFlow 2022-12 Platform Roadmap](../tek-flow/decks/tekflow-voc-synthesis-2022-12/platform-roadmap.md) "3rd Party – Keysight Wfm integration" workstream.
- **Ampere: "Has issues with solutions from Bitifeye"** — competitive displacement opportunity at an Arm-server-CPU strategic account.
- **TI: "MIPI - CPHY-DPHY – ASA - APHY"** — A-PHY (automotive PHY) interest; repeated by Infineon in India deck one month later.

### 2023-03-01 — mAR 2023 ind Customer VOC

4 chunks + index covering Subhasis Bera's March 2023 Bangalore trip: 3 customer empathy maps (AMD, NVIDIA, Infineon-ATV) + the Infineon customer-workflow diagram. **Applies to:** `[tek-express, tek-flow]`.

| Chunk | Topic | Slides |
|---|---|---|
| [_index](decks/india-customer-voc-2023-march/_index.md) | Deck index + cross-deck methodology links | (full deck) |
| [empathy-map-amd](decks/india-customer-voc-2023-march/empathy-map-amd.md) | AMD Bangalore (15 engineers) — complete-automation aspiration in 12-24 months; LabVIEW interop ask | 2 |
| [empathy-map-nvidia](decks/india-customer-voc-2023-march/empathy-map-nvidia.md) | NVIDIA Bangalore — 78 Tek scopes + 61 AFGs install base; "Gen4 was late by Tek, we moved to KS" | 3 |
| [empathy-map-infineon](decks/india-customer-voc-2023-march/empathy-map-infineon.md) | Infineon ATV (post-Cypress) — multi-lane parallel execution gap; A-PHY engagement ask | 4 |
| [customer-workflow-infineon](decks/india-customer-voc-2023-march/customer-workflow-infineon.md) | Infineon IP→Application validation pipeline — 20 TekFlow at IP-Application stage, manual measurement at Application Validation | 5 |

**Highest-RAG-value findings:**
- **NVIDIA: "Gen4 was late by Tek, we moved to KS"** — single highest-stakes finding in this batch. 78-scope, 61-AFG account explicitly attributes Keysight defection to Tek PCIe Gen 4 delay. **Time-to-market on compliance is competitive existential.**
- **Infineon: "Test only one interface at a time" + "Instrument – need to check multiple lanes together"** — concrete validation of the [TekFlow 2022-12 UI/UX Roadmap](../tek-flow/decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md) Multi-lane UX Implementation workstream.
- **Infineon: "Manual meas only" at the Application Validation stage** — Push-Button Pete persona has no automation; manual-labor workaround = passes the [GA Empathy](walkthroughs/empathy-discussion-guide-question-bank.md) "is this pain worth solving?" threshold.
- **Three of three India customers want Automotive Ethernet** — strong regional signal (AMD: "Automotive SFP+ 5G 10GKR"; NVIDIA: "Automotive ETH"; Infineon: ATV team itself).
- **Infineon: "Want to write a White paper on TekFlow – Subhasis + Vinod"** — customer-as-advocate signal at the strongest level.

### Cross-deck observations (Designcon + India + 2022-12 TekFlow)

- **Three Subhasis-authored VOC decks (Dec 2022 → Feb 2023 → Mar 2023) share the empathy-map template + PowerPoint GUID + the FGA methodology.** The decks form a coherent corpus of customer-segment evidence in the 4-month run-up to the Q3 2023 RP1 release that the [TekFlow 2022-12 UI/UX Roadmap](../tek-flow/decks/tekflow-voc-synthesis-2022-12/ui-ux-roadmap.md) targets (LPDDR 5X TekExpress + DP 1.4 TekFlow + LPDDR4 TekFlow + USB4V2 Pamjet).
- **Cross-vendor instrument control is the dominant repeated ask.** Intel (Designcon), Ampere (Designcon, via M8040 use), NVIDIA (India, moved to KS for Gen 5), and Infineon (India, uses KS MXR-13G for BBU) all surface either explicit cross-vendor needs or actively use Keysight today. The TekFlow 2022-12 Platform Roadmap's "3rd Party Inst/SW integration" workstream is responsive to a documented multi-customer demand pattern.
- **Persona alignment** across the decks: Ampere / Intel / Synopsys / NVIDIA are **Guru Gus + Midway Max** customers (design + system-validate); Infineon's IP→Application workflow spans **Midway Max + Push-Button Pete** (system-validate + reliability with manual measurement). No deck surfaces a **Push-Button Pete-only** customer — consistent with the [persona model](walkthroughs/personas-and-jobs-to-be-done.md)'s framing that Pete works downstream of Gus's wizard handoff.
- **2026 corroboration:** Intel, Ampere, NVIDIA all appear (directly or by category) in the 2026-06-23 AU VoC walkthrough's customer-market context ([customer-market-and-platform-context](walkthroughs/customer-market-and-platform-context.md)). 3-year strategic-account continuity.

## Documented walkthroughs

Three meetings (plus one methodology document) processed at `walkthroughs/`, **10 topic-clustered chunks** plus an [index](walkthroughs/_index.md).

### 2026-04-23 — TekExpress Design System Follow-up Discussion

4 chunks covering the cross-team DS follow-up: Bryan + Bill Israel + Mahesha + Pranavi + Rick + Richard + Hemant + Srevats. Every chunk carries `applies_to: [tek-express, tek-design-system]`.

| Chunk | Topic | Time range |
|---|---|---|
| [ds-architecture-presentation](walkthroughs/ds-architecture-presentation.md) | Bryan's DS overview — tokens, components, Figma → CSS pipeline, motion libraries (planned), release process | 0:18 – 9:00 |
| [desktop-integration-strategy](walkthroughs/desktop-integration-strategy.md) | WPF integration approach; Mahesha's control-library proposal; Bill's incremental-adoption framing | 9:00 – 16:35 |
| [tek-products-walkthrough](walkthroughs/tek-products-walkthrough.md) | Pranavi's combined demo of TekExpress (compliance app) and TekRx (receiver-test wizard) | 16:35 – 46:00 |
| [ux-feedback-and-open-questions](walkthroughs/ux-feedback-and-open-questions.md) | Half-screen mode, container breakpoints, composite controls, chart-library re-implementation pain, mermaid diagrams | 46:00 – 1:04:00 |

### 2026-06-23 — AU VoC Sync up

3 chunks covering Subhasis Bera's product / customer / strategy briefing for the AU UX team. **Directly upstream of the 2026-06-25 batch 2 materials** in `uploads/artifacts/`. `applies_to: [tek-express, tek-flow]` because Subhasis discusses TekFlow in parallel.

| Chunk | Topic | Time range |
|---|---|---|
| [personas-and-jobs-to-be-done](walkthroughs/personas-and-jobs-to-be-done.md) | The 3 personas (Guru Gus, Push-Button Pete, Midway Max) + the 4-stage JTBD landscape + the Clarius cautionary tale | 0:03 – ~12:00 |
| [customer-market-and-platform-context](walkthroughs/customer-market-and-platform-context.md) | Customer landscape (humanoids, AI servers, EVs, Tesla, Meta Lab, JLR), the multi-interface compliance workflow (~600 interfaces per AMD AI server), cross-vendor parity vs. conformance differentiation | ~6:18 – ~30:00 |
| [ui-redesign-mantras-and-transition-strategy](walkthroughs/ui-redesign-mantras-and-transition-strategy.md) | Three redesign mantras (guided customer engagement, Mazda-to-Jaguar / no manual to drive, bandwagon respect); deployment-friction wedge | ~54:53 – 1:00:39 |

Mid-meeting segments (~12:00 – ~54:53) of the AU VoC discussion are **pending follow-up processing**.

### 2026-07 — TekExpress prototype SME review #1 (Tapo)

3 chunks covering the first SME review of the TekExpress prototype (`prototypes/tek-express/`) with Tapo, an application engineer and former TekExpress application developer. `applies_to: [tek-express]` for the workflow-anatomy chunk; `[tek-express, tek-design-system]` for the two feedback chunks. Source transcript is unlabeled and untimestamped auto-transcription (see each chunk's Confidence notes for the ASR glossary).

| Chunk | Topic |
|---|---|
| [compliance-test-workflow-anatomy](walkthroughs/compliance-test-workflow-anatomy.md) | Framework vs. application layer, DUT-panel semantics + "first panel" settings pressure, setup → selection → acquire → analyze → report anatomy, SCPI/SigTest, cross-app consistency, 20 years of drift |
| [prototype-review-logs-results-and-reporting](walkthroughs/prototype-review-logs-results-and-reporting.md) | Keysight split-panel logs benchmark, flat results + download-and-scan workaround, custom limits / rework mode, HTML report preview, MHT/CSV/markdown formats, rerun-and-merge |
| [prototype-review-navigation-help-and-visual-cues](walkthroughs/prototype-review-navigation-help-and-visual-cues.md) | Selection-driven contextual help (Clarius question-mark anti-pattern), checkmark semantics, non-sequential navigation, run-with-defaults, "blue dot" interdependency cue, Debug/Preferences placement, white brightness, icons |

**Highest-RAG-value findings (2026-07 SME review):**

- *"The segregation of settings that we have done here, that kind of goes for a toss."* — the DUT panel is a dumping ground under AE first-panel pressure; Tapo explicitly asks UX to arbitrate settings placement.
- *"They felt that there is a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have."* — field-AE evidence that the Clarius redesign eroded the wizard flow. Direct cautionary precedent for this redesign.
- **Keysight is the benchmark on every post-Start surface**: split-panel summary+detail logs, richer results with plots, in-UI HTML report preview. Current TekExpress logs/results are "pretty flat"; the standard failure-finding workaround is *download the report and scan it*.
- **Two DS-level pattern asks with no existing primitive**: selection-driven contextual help (minimalist — *not* Clarius's 100 question marks) and a cross-panel "blue dot" change indicator for interdependent settings.
- **Run-with-defaults invariant**: *"Ideally, Tek Express… it's just run"* — DUT + test selection filled, everything else defaulted, Start must work. Checkmark-as-visited semantics confused everyone in the room; iteration committed.

**Highest-RAG-value friction notes** from the 2026-04-23 transcript:

- *"We go and sort of remake charts in the native place. And then what happens is we lose all the richness."* — Rick Kuhlman (55:23). The chart-library decision is the most-impactful open question for the redesign.
- *"These need to be designed in such a way to dock half and half."* — Rick Kuhlman (50:05). Window-sizing modes between full and minimised are unvalidated.
- *"We're baking into the design system is container breakpoints. Instead of doing like viewport breakpoints, the responsiveness is on the container level."* — Bryan Kemp (51:56). High-signal architectural decision, already committed.

The corpus exists in part because of this transcript — Bryan explicitly asks (1:02:14) for *"screenshots of Tech Express in the…"* and an audit of the charts and diagrams. The screenshots are in `uploads/photos/`; the audit PDF in `uploads/pdfs/`; this corpus is the loop-closing response.

## API snapshots

*pending* — no OpenAPI spec in `uploads/api-specs/` yet. Whether TekExpress talks to a backend is unknown from these screenshots.

## Code snapshots

*pending* — Tek Express source repo not yet provided. The application is implemented in C# (.NET) per a runtime log line.

## Cross-product applicability

`applies_to: [tek-express]` — the AppEmulator build specifically. The walkthrough transcript references a sibling product **TekRx**; shared screens may carry `applies_to: [tek-express, tek-rx]` once that subject lands.

## Discrepancy flag — audit PDF tab/content mapping

The pre-existing audit PDF (`uploads/pdfs/UI-app-emulator-audit.pdf`) describes Reports › Configuration with "Contents To Save: 9 checkboxes (one disabled). User Logo section..." and Reports › View Settings with "Report Update Mode... Report Creation Settings...". **The live screenshots show the opposite mapping.** I have trusted Bryan's filenames over the audit PDF for the corpus, flagged in Confidence notes on both Reports chunks. Verify on the live build before treating either tab label as authoritative.
