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

The remaining batch-2 PDF (Subhasis's TekExpress-specific Tx-Rx Solutions Platform VOC guide) was processed 2026-07-21 into `docs/tx-rx-voc-guide/` (9 chunks); publication is under review because the source carries a "TALK ONLY — not to be shared over digital sources" restriction. `TekExpress_Needed_Features 1.md` was assessed 2026-07-21 as a de-attributed authored synthesis of the AE interviews — not corpus material; it stays local-only in `uploads/artifacts/`.

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

This manual was the first product-specific TekExpress user guide in the corpus. The remaining PDFs (DisplayPortTx, DisplayPortTx 2.1, PCI Express Online Help, AppEmulator) have since been processed — see the generated Docs tables below for the authoritative chunk listing.

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

Four meeting groups processed at `walkthroughs/` — the 2026-04-23 DS follow-up, the 2026-06-23 AU VoC sync (fully chunked), the GA methodology doc, and the July 2026 AE interview round (8 sessions, 21 `ae-*` chunks) — **30 chunks** plus an [index](walkthroughs/_index.md). The sections below describe the first two meetings; the AE round is indexed in `walkthroughs/_index.md` § 4 and synthesized (authored-analysis) at `uxr/tek-express-ae-interviews/synthesis.md`.

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

The AU VoC meeting is now fully chunked — the former mid-meeting gap (~12:00 – ~54:53) was processed 2026-07-21 into four additional chunks (persona-evolution, competitive-deployment-licensing, configuration-user-traps, prototype-feedback-loop); see `walkthroughs/_index.md`.

**Highest-RAG-value friction notes** from the transcript:

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

<!-- /AUTO -->

> Generated by /refresh-index on 2026-07-21. Edits above the `<!-- /AUTO -->` marker are preserved; everything below is regenerated.

## Screens (18)

| screen_id | screen_title | screen_type | function_state | applies_to |
|---|---|---|---|---|
| [options-dropdown](screens/options-dropdown.md) | Options dropdown menu | dialog | — | tek-express |
| [plots](screens/plots.md) | Plots | graph | — | tek-express |
| [reports-configuration](screens/reports-configuration.md) | Reports › Configuration | config | — | tek-express |
| [reports-view-settings](screens/reports-view-settings.md) | Reports › View Settings | config | — | tek-express |
| [results](screens/results.md) | Results › Overall Test Result | readout | — | tek-express |
| [running-test](screens/running-test.md) | Running Test — Minimised Window | status | — | tek-express |
| [setup-acquisitions](screens/setup-acquisitions.md) | Setup › Acquisitions | config | — | tek-express |
| [setup-acquisitions-probe-config](screens/setup-acquisitions-probe-config.md) | Setup › Acquisitions — Probe Configuration | dialog | — | tek-express |
| [setup-dut](screens/setup-dut.md) | Setup › DUT | config | — | tek-express |
| [setup-dut-comments](screens/setup-dut-comments.md) | Setup › DUT — Comments popup | dialog | — | tek-express |
| [setup-dut-session-browser](screens/setup-dut-session-browser.md) | Setup › DUT — Run/Config Sessions | dialog | — | tek-express |
| [setup-preferences](screens/setup-preferences.md) | Setup › Preferences | config | — | tek-express |
| [setup-preferences-email-settings](screens/setup-preferences-email-settings.md) | Setup › Preferences — Email Settings | dialog | — | tek-express |
| [setup-test-selection](screens/setup-test-selection.md) | Setup › Test Selection | config | — | tek-express |
| [setup-test-selection-config](screens/setup-test-selection-config.md) | Setup › Test Selection — Configure (per-test) | dialog | — | tek-express |
| [setup-test-selection-limits-editor](screens/setup-test-selection-limits-editor.md) | Setup › Test Selection — Limits Editor | dialog | — | tek-express |
| [status-log-view](screens/status-log-view.md) | Status › Log View | status | — | tek-express |
| [status-test-status](screens/status-test-status.md) | Status › Test Status | status | — | tek-express |

## Walkthroughs (33)

| flow_id | flow_title | recorded_date | screens_visited |
|---|---|---|---|
| [ae-chrisb-reports-and-rerun-workflow](walkthroughs/ae-chrisb-reports-and-rerun-workflow.md) | AE Interview — Chris B: Reports, Rerun-One-Test Workflow, and Report Output Review | 2026-07-15 | reports-configuration |
| [ae-chrisb-setup-waveforms-and-run-modes](walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md) | AE Interview — Chris B: Pre-Recorded Waveforms, Test Modes, Status/Results, and Run-Mode Asks | 2026-07-15 | setup-acquisitions → status-test-status → status-log-view → results |
| [ae-dallas-jesse-compliance-mode-and-test-selection](walkthroughs/ae-dallas-jesse-compliance-mode-and-test-selection.md) | AE Interview (Dallas & Jesse) — Compliance vs. User-Defined Mode, Acquisition Speed, Presets, and Signal Validation | 2026-07-15 | setup-dut → setup-test-selection → setup-acquisitions → status-test-status |
| [ae-dallas-jesse-instruments-sessions-results-debug](walkthroughs/ae-dallas-jesse-instruments-sessions-results-debug.md) | AE Interview (Dallas & Jesse) — Instrument Config, Session Files, Status/Results Tables, Debug Workflow, and Pause | 2026-07-15 | setup-acquisitions-probe-config → setup-preferences → status-test-status → results → plots |
| [ae-dallas-jesse-session-context-and-overall-reactions](walkthroughs/ae-dallas-jesse-session-context-and-overall-reactions.md) | AE Interview (Dallas & Jesse) — Session Context, Prototype Framing, and Overall Workflow Reactions | 2026-07-15 | — |
| [ae-dallas-jesse-setup-flow-friction](walkthroughs/ae-dallas-jesse-setup-flow-friction.md) | AE Interview (Dallas & Jesse) — Setup Flow Friction: Test Selection, Interdependent Settings, Waveform Files, and Naming | 2026-07-15 | setup-test-selection → setup-dut → results |
| [ae-joey-chiu-dut-id-limits-and-prototype-reaction](walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md) | AE Interview (Joey Chiu session) — DUT ID / Path-Length Limits and Prototype Reactions | 2026-07-14 | setup-dut |
| [ae-joey-chiu-pcie-backward-compat-scaling](walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md) | AE Interview (Joey Chiu) — PCIe Backward-Compatibility Scaling and Test Setup | 2026-07-14 | setup-dut → setup-test-selection → setup-test-selection-config → setup-acquisitions → setup-test-selection-limits-editor |
| [ae-nadir-kahn-competitive-landscape-and-visual-direction](walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md) | AE Interview — Nadir Kahn: Competitive Landscape, Visual Hierarchy, and the Match-TekScope Directive | 2026-07-14 | — |
| [ae-nadir-kahn-pain-points-and-automation](walkthroughs/ae-nadir-kahn-pain-points-and-automation.md) | AE Interview — Nadir Kahn: Prototype First Reaction, Reporting Pain Points, and Automation Requirements | 2026-07-14 | — |
| [ae-sam-ddr-memory-feedback](walkthroughs/ae-sam-ddr-memory-feedback.md) | AE Feedback Session — Sam (DDR / Memory) | 2026-07-15 | — |
| [ae-tapo-parua-prototype-ui-feedback](walkthroughs/ae-tapo-parua-prototype-ui-feedback.md) | AE SME Session (Tapo Parua) — Prototype UI Feedback: Logs, Results, Reports, Help, Navigation | — | — |
| [ae-tapo-parua-workflow-and-settings-architecture](walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md) | AE SME Session (Tapo Parua) — TekExpress Workflow Architecture and Settings Placement | — | — |
| [ae-travis-berger-bench-setup-and-instrument-connection](walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md) | AE Interview — Travis Berger: PCIe Bench Setup, Instrument Connection Friction, and Channel Defaults | 2026-07-15 | setup-dut → setup-acquisitions |
| [ae-travis-berger-launcher-global-settings-and-setup-flow](walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md) | AE Interview — Travis Berger: A Launcher Layer Above TekExpress, Options-Menu Burial, Acrobat Schematics, and Presets | 2026-07-15 | options-dropdown → setup-test-selection → setup-test-selection-config → setup-preferences → setup-acquisitions |
| [ae-travis-berger-run-environments-adoption-and-reports](walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md) | AE Interview — Travis Berger: PC vs On-Scope, Change Tolerance, Report Interop, and Stop/Pause | 2026-07-15 | reports-view-settings → running-test |
| [ae-travis-berger-status-results-sessions-and-run-window](walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md) | AE Interview — Travis Berger: Log View, Results Redundancy, Session-File Discoverability, and the Minimized Run Window | 2026-07-15 | status-log-view → results → setup-dut-session-browser → running-test → status-test-status |
| [ae-will-teverovsky-acquisitions-presets-status-and-results](walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md) | AE Interview — Will Teverovsky: Acquisitions, Presets, Status/Results, and the 1024×768 Constraint | 2026-07-13 | setup-acquisitions → setup-preferences → status-test-status → status-log-view → results → plots |
| [ae-will-teverovsky-dut-panel-and-data-rates](walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md) | AE Interview — Will Teverovsky: DUT Panel, Suite/Device Nomenclature, and Data-Rate Selection | 2026-07-13 | setup-dut |
| [ae-will-teverovsky-session-files-options-and-program-context](walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md) | AE Interview — Will Teverovsky: Session Files, Options Overhaul, Platform Strategy, and Closing Verdict | 2026-07-13 | options-dropdown |
| [ae-will-teverovsky-test-selection-and-contextual-help](walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md) | AE Interview — Will Teverovsky: Test Selection, MOI/Schematic Contextual Help, and Compliance-Mode Visibility | 2026-07-13 | setup-test-selection → setup-test-selection-config → setup-test-selection-limits-editor |
| [competitive-deployment-licensing-and-status-value](walkthroughs/competitive-deployment-licensing-and-status-value.md) | Keysight-vs-TekExpress deployment model, licensing, and the status-visibility value principle | 2026-06-23 | — |
| [configuration-user-traps-and-cockpit-view](walkthroughs/configuration-user-traps-and-cockpit-view.md) | The two-layer configuration user trap and the WPF-era "cockpit view" prototype | 2026-06-23 | setup-test-selection → setup-test-selection-config |
| [customer-market-and-platform-context](walkthroughs/customer-market-and-platform-context.md) | TekExpress customers, market positioning, and the multi-interface compliance workflow | 2026-06-23 | — |
| [desktop-integration-strategy](walkthroughs/desktop-integration-strategy.md) | Desktop / WPF Integration Strategy | 2026-04-23 | — |
| [ds-architecture-presentation](walkthroughs/ds-architecture-presentation.md) | Tek Design System v2 — Architecture Presentation | 2026-04-23 | — |
| [empathy-discussion-guide-question-bank](walkthroughs/empathy-discussion-guide-question-bank.md) | Fortive Growth Accelerator empathy interview discussion guide and question bank | 2023-01-01 | — |
| [persona-evolution-physical-ai-and-voc-methodology](walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md) | Persona evolution toward AI, the "physical AI products" theme, and the VOC methodology / competitive-prep plan | 2026-06-23 | — |
| [personas-and-jobs-to-be-done](walkthroughs/personas-and-jobs-to-be-done.md) | TekExpress personas and the customer jobs-to-be-done landscape | 2026-06-23 | — |
| [prototype-feedback-loop-and-voc-synthesis-history](walkthroughs/prototype-feedback-loop-and-voc-synthesis-history.md) | The recorded-walkthrough feedback loop, pain-to-dollar synthesis, and the Clarius VOC playbook | 2026-06-23 | — |
| [tek-products-walkthrough](walkthroughs/tek-products-walkthrough.md) | TekExpress + TekRx Product Demos (Pranavi) | 2026-04-23 | setup-dut → setup-test-selection → setup-test-selection-config → setup-acquisitions → results → plots |
| [ui-redesign-mantras-and-transition-strategy](walkthroughs/ui-redesign-mantras-and-transition-strategy.md) | UI/UX deep-dive priorities, deployment friction, and incremental transition strategy | 2026-06-23 | — |
| [ux-feedback-and-open-questions](walkthroughs/ux-feedback-and-open-questions.md) | UX Feedback and Open Design Questions | 2026-04-23 | running-test → status-test-status → plots |

## Docs (65)

### tek-express-app-emulator (10)

| section_id | section_title | parent_section |
|---|---|---|
| [getting-started](docs/tek-express-app-emulator/getting-started.md) | Getting started — Hardware/software requirements, install, license | — |
| [results-panel](docs/tek-express-app-emulator/results-panel.md) | Results panel — View summary of test results | — |
| [setting-up-test-environment](docs/tek-express-app-emulator/setting-up-test-environment.md) | Setting up the test environment | — |
| [setup-configuration](docs/tek-express-app-emulator/setup-configuration.md) | Configuration — Set measurement limits for tests (Global Settings, Limits Editor) | — |
| [setup-dut-panel](docs/tek-express-app-emulator/setup-dut-panel.md) | Setup panel — DUT tab and multiple-session run | — |
| [setup-preferences-panel](docs/tek-express-app-emulator/setup-preferences-panel.md) | Setup panel — Preferences | — |
| [setup-test-selection-and-acquisitions](docs/tek-express-app-emulator/setup-test-selection-and-acquisitions.md) | Setup panel — Test Selection and Acquisitions | — |
| [starting-application](docs/tek-express-app-emulator/starting-application.md) | Starting the application — Application controls, Options menu, Email Settings | — |
| [status-panel](docs/tek-express-app-emulator/status-panel.md) | Status panel — Test Status and Log View | — |
| [welcome-and-help](docs/tek-express-app-emulator/welcome-and-help.md) | Welcome, Key features, and Getting help | — |

### tek-express-ddr5-tx-user-manual (14)

| section_id | section_title | parent_section |
|---|---|---|
| [getting-started](docs/tek-express-ddr5-tx-user-manual/getting-started.md) | Getting started — Hardware and software requirements | — |
| [references-and-appendices](docs/tek-express-ddr5-tx-user-manual/references-and-appendices.md) | References — directories, file formats, DDR DFE, SDLA, pre-recorded waveforms | — |
| [reports-panel](docs/tek-express-ddr5-tx-user-manual/reports-panel.md) | Reports panel — Configure report generation and view reports | — |
| [results-panel](docs/tek-express-ddr5-tx-user-manual/results-panel.md) | Results panel — View summary of test results | — |
| [saving-recalling-test-setup](docs/tek-express-ddr5-tx-user-manual/saving-recalling-test-setup.md) | Saving and recalling test setup | — |
| [scpi-commands](docs/tek-express-ddr5-tx-user-manual/scpi-commands.md) | SCPI Commands — remote control reference | — |
| [setting-up-test-environment](docs/tek-express-ddr5-tx-user-manual/setting-up-test-environment.md) | Setting up the test environment | — |
| [setup-configuration](docs/tek-express-ddr5-tx-user-manual/setup-configuration.md) | Setup panel — Configuration (Global Settings, Measurements, Limits Editor) | — |
| [setup-dut-panel](docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md) | Setup panel — DUT tab and burst detection | — |
| [setup-preferences-panel](docs/tek-express-ddr5-tx-user-manual/setup-preferences-panel.md) | Setup panel — Preferences | — |
| [setup-test-selection-and-acquisitions](docs/tek-express-ddr5-tx-user-manual/setup-test-selection-and-acquisitions.md) | Setup panel — Test Selection and Acquisitions | — |
| [starting-application](docs/tek-express-ddr5-tx-user-manual/starting-application.md) | Starting the application — Application controls, Options menu, Email settings | — |
| [status-panel](docs/tek-express-ddr5-tx-user-manual/status-panel.md) | Status panel — Test Status and Log View | — |
| [welcome-and-help](docs/tek-express-ddr5-tx-user-manual/welcome-and-help.md) | Welcome, Key features, and Getting help | — |

### tek-express-displayporttx (6)

| section_id | section_title | parent_section |
|---|---|---|
| [getting-started](docs/tek-express-displayporttx/getting-started.md) | Getting started — Installing the software and Introduction to the application | — |
| [operating-basics](docs/tek-express-displayporttx/operating-basics.md) | Operating basics — Start, Application controls, Options menu, Email, Instrument control | — |
| [results-panel](docs/tek-express-displayporttx/results-panel.md) | Results panel — View test results | — |
| [setup-panel](docs/tek-express-displayporttx/setup-panel.md) | Setup panel — DUT tab, Test Selection, Acquisitions, Configuration, Preferences | — |
| [status-panel](docs/tek-express-displayporttx/status-panel.md) | Status panel — Test Status and Log View | — |
| [welcome-and-help](docs/tek-express-displayporttx/welcome-and-help.md) | Welcome, Related documentation, Conventions, and Technical support | — |

### tek-express-displayporttx-2-1 (5)

| section_id | section_title | parent_section |
|---|---|---|
| [getting-started](docs/tek-express-displayporttx-2-1/getting-started.md) | Getting started — Hardware and software requirements | — |
| [setting-up-test-environment](docs/tek-express-displayporttx-2-1/setting-up-test-environment.md) | Setting up the test environment | — |
| [setup-dut-panel](docs/tek-express-displayporttx-2-1/setup-dut-panel.md) | Setup panel — DUT tab | — |
| [starting-application](docs/tek-express-displayporttx-2-1/starting-application.md) | Starting the application — Application controls, Options menu, Email settings, Instrument control | — |
| [welcome-and-help](docs/tek-express-displayporttx-2-1/welcome-and-help.md) | Welcome, Key features, and Getting help | — |

### tek-express-pci-express (13)

| section_id | section_title | parent_section |
|---|---|---|
| [getting-started](docs/tek-express-pci-express/getting-started.md) | Getting started — Hardware and software requirements | — |
| [references-and-appendices](docs/tek-express-pci-express/references-and-appendices.md) | References — Application directories, file extensions, view test-related files, de-embed, Setup files, RF Switch config files, SRIS Tx Test Board | — |
| [reports-panel](docs/tek-express-pci-express/reports-panel.md) | Reports panel — Configure report generation settings, CXL support, View Settings, View generated report | — |
| [saving-recalling-test-setup](docs/tek-express-pci-express/saving-recalling-test-setup.md) | Saving and recalling test setup | — |
| [scpi-commands](docs/tek-express-pci-express/scpi-commands.md) | SCPI Commands — remote control reference | — |
| [setting-up-test-environment](docs/tek-express-pci-express/setting-up-test-environment.md) | Setting up the test environment — install, equipment connection, deskew, prerun checklist | — |
| [setup-configuration-and-preferences](docs/tek-express-pci-express/setup-configuration-and-preferences.md) | Setup panel — Configuration (CTLE, scope noise), Preferences | — |
| [setup-dut-panel](docs/tek-express-pci-express/setup-dut-panel.md) | Setup panel — DUT, Filter setup, Automated DUT control, Multiple-session run | — |
| [setup-test-selection-and-acquisitions](docs/tek-express-pci-express/setup-test-selection-and-acquisitions.md) | Setup panel — Test Selection, Acquisitions | — |
| [starting-application](docs/tek-express-pci-express/starting-application.md) | Starting the application | — |
| [status-and-results-panels](docs/tek-express-pci-express/status-and-results-panels.md) | Status panel and Results panel | — |
| [switch-matrix-application](docs/tek-express-pci-express/switch-matrix-application.md) | Switch Matrix application | — |
| [welcome-and-help](docs/tek-express-pci-express/welcome-and-help.md) | Welcome, Key features, and Getting help | — |

### tx-rx-voc-guide (8)

| section_id | section_title | parent_section |
|---|---|---|
| [background-and-guidelines](docs/tx-rx-voc-guide/background-and-guidelines.md) | Background and Guidelines (INTERNAL TO TEKTRONIX) | — |
| [current-workflow-and-jtbd](docs/tx-rx-voc-guide/current-workflow-and-jtbd.md) | 2. Current Workflow & Job-to-be-Done (JTBD) | — |
| [customer-context-and-buying-influence](docs/tx-rx-voc-guide/customer-context-and-buying-influence.md) | 1. Customer Context & Buying Influence | — |
| [future-needs-and-wrap-up](docs/tx-rx-voc-guide/future-needs-and-wrap-up.md) | 5. Future Needs & Ideal Solution, and Wrap-Up | — |
| [introduction-outcomes-and-personas](docs/tx-rx-voc-guide/introduction-outcomes-and-personas.md) | Introduction script, expected outcomes, and target personas | — |
| [pain-points-analysis-reporting-and-debug](docs/tx-rx-voc-guide/pain-points-analysis-reporting-and-debug.md) | 3. Pain Points (continued) — 3.3 Analysis, 3.4 Reporting & Traceability, 3.5 Debug on Failure & Lifecycle Journey | — |
| [pain-points-setup-and-execution](docs/tx-rx-voc-guide/pain-points-setup-and-execution.md) | 3. Pain Points (Core Section) — 3.1 Setup & Bring-up, 3.2 Test Execution & Scalability | — |
| [ui-ux-deep-dive](docs/tx-rx-voc-guide/ui-ux-deep-dive.md) | 4. UI/UX Deep Dive | — |

### ui-audit (9)

| section_id | section_title | parent_section |
|---|---|---|
| [data-display](docs/ui-audit/data-display.md) | Data Display Components | — |
| [feedback-overlays](docs/ui-audit/feedback-overlays.md) | Feedback & Overlay Components | — |
| [form-inputs](docs/ui-audit/form-inputs.md) | Form Input Components | — |
| [icon-buttons](docs/ui-audit/icon-buttons.md) | Icon Buttons | — |
| [inline-teal-pill-buttons](docs/ui-audit/inline-teal-pill-buttons.md) | Inline Teal Pill Action Buttons | — |
| [navigation-components](docs/ui-audit/navigation-components.md) | Navigation Components | — |
| [outlined-pill-buttons](docs/ui-audit/outlined-pill-buttons.md) | Outlined Pill Buttons (non-teal) | — |
| [right-rail-toolbar](docs/ui-audit/right-rail-toolbar.md) | Right-Rail Toolbar Buttons | — |
| [screen-inventory](docs/ui-audit/screen-inventory.md) | Screen Inventory | — |

## Cross-references

| Source | Target | Edge |
|---|---|---|
| wireframe `wireframes/setup-dut-wireframe.md` | screen `setup-dut` | related_screens |
| wireframe `wireframes/setup-dut-wireframe.md` | screen `setup-test-selection` | related_screens |
| wireframe `wireframes/setup-dut-wireframe.md` | screen `setup-acquisitions` | related_screens |
| wireframe `wireframes/setup-dut-wireframe.md` | screen `setup-preferences` | related_screens |
| doc-section `results-panel` | screen `results` | related_screens |
| doc-section `setup-configuration` | screen `setup-test-selection-config` | related_screens |
| doc-section `setup-configuration` | screen `setup-test-selection-limits-editor` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-comments` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-session-browser` | related_screens |
| doc-section `setup-preferences-panel` | screen `setup-preferences` | related_screens |
| doc-section `setup-preferences-panel` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-test-selection` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions-probe-config` | related_screens |
| doc-section `starting-application` | screen `setup-dut` | related_screens |
| doc-section `starting-application` | screen `options-dropdown` | related_screens |
| doc-section `starting-application` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `starting-application` | screen `running-test` | related_screens |
| doc-section `status-panel` | screen `status-test-status` | related_screens |
| doc-section `status-panel` | screen `status-log-view` | related_screens |
| doc-section `welcome-and-help` | screen `setup-dut` | related_screens |
| doc-section `data-display` | screen `setup-dut` | related_screens |
| doc-section `data-display` | screen `setup-acquisitions` | related_screens |
| doc-section `data-display` | screen `status-test-status` | related_screens |
| doc-section `data-display` | screen `status-log-view` | related_screens |
| doc-section `data-display` | screen `results` | related_screens |
| doc-section `data-display` | screen `plots` | related_screens |
| doc-section `data-display` | screen `setup-test-selection` | related_screens |
| doc-section `data-display` | screen `setup-preferences` | related_screens |
| doc-section `data-display` | screen `reports-configuration` | related_screens |
| doc-section `data-display` | screen `reports-view-settings` | related_screens |
| doc-section `feedback-overlays` | screen `reports-configuration` | related_screens |
| doc-section `form-inputs` | screen `setup-dut` | related_screens |
| doc-section `form-inputs` | screen `setup-test-selection` | related_screens |
| doc-section `form-inputs` | screen `setup-acquisitions` | related_screens |
| doc-section `form-inputs` | screen `setup-preferences` | related_screens |
| doc-section `form-inputs` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `form-inputs` | screen `reports-configuration` | related_screens |
| doc-section `form-inputs` | screen `reports-view-settings` | related_screens |
| doc-section `form-inputs` | screen `status-log-view` | related_screens |
| doc-section `icon-buttons` | screen `setup-dut` | related_screens |
| doc-section `icon-buttons` | screen `reports-view-settings` | related_screens |
| doc-section `icon-buttons` | screen `reports-configuration` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `setup-acquisitions` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `setup-test-selection` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `setup-preferences` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `reports-configuration` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `reports-view-settings` | related_screens |
| doc-section `inline-teal-pill-buttons` | screen `status-log-view` | related_screens |
| doc-section `navigation-components` | screen `setup-dut` | related_screens |
| doc-section `navigation-components` | screen `setup-test-selection` | related_screens |
| doc-section `navigation-components` | screen `setup-acquisitions` | related_screens |
| doc-section `navigation-components` | screen `setup-preferences` | related_screens |
| doc-section `navigation-components` | screen `status-test-status` | related_screens |
| doc-section `navigation-components` | screen `status-log-view` | related_screens |
| doc-section `navigation-components` | screen `results` | related_screens |
| doc-section `navigation-components` | screen `plots` | related_screens |
| doc-section `navigation-components` | screen `reports-configuration` | related_screens |
| doc-section `navigation-components` | screen `reports-view-settings` | related_screens |
| doc-section `navigation-components` | screen `options-dropdown` | related_screens |
| doc-section `outlined-pill-buttons` | screen `results` | related_screens |
| doc-section `right-rail-toolbar` | screen `setup-dut` | related_screens |
| doc-section `right-rail-toolbar` | screen `results` | related_screens |
| doc-section `right-rail-toolbar` | screen `running-test` | related_screens |
| doc-section `screen-inventory` | screen `setup-dut` | related_screens |
| doc-section `screen-inventory` | screen `setup-test-selection` | related_screens |
| doc-section `screen-inventory` | screen `setup-acquisitions` | related_screens |
| doc-section `screen-inventory` | screen `setup-preferences` | related_screens |
| doc-section `screen-inventory` | screen `status-test-status` | related_screens |
| doc-section `screen-inventory` | screen `status-log-view` | related_screens |
| doc-section `screen-inventory` | screen `results` | related_screens |
| doc-section `screen-inventory` | screen `plots` | related_screens |
| doc-section `screen-inventory` | screen `reports-configuration` | related_screens |
| doc-section `screen-inventory` | screen `reports-view-settings` | related_screens |
| doc-section `setting-up-test-environment` | screen `setup-dut-session-browser` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-comments` | related_screens |
| doc-section `starting-application` | screen `options-dropdown` | related_screens |
| doc-section `starting-application` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `starting-application` | screen `running-test` | related_screens |
| doc-section `reports-panel` | screen `reports-configuration` | related_screens |
| doc-section `reports-panel` | screen `reports-view-settings` | related_screens |
| doc-section `results-panel` | screen `results` | related_screens |
| doc-section `setup-configuration` | screen `setup-test-selection-config` | related_screens |
| doc-section `setup-configuration` | screen `setup-test-selection-limits-editor` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-comments` | related_screens |
| doc-section `setup-preferences-panel` | screen `setup-preferences` | related_screens |
| doc-section `setup-preferences-panel` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-test-selection` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions-probe-config` | related_screens |
| doc-section `starting-application` | screen `setup-dut` | related_screens |
| doc-section `starting-application` | screen `options-dropdown` | related_screens |
| doc-section `starting-application` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `status-panel` | screen `status-test-status` | related_screens |
| doc-section `status-panel` | screen `status-log-view` | related_screens |
| doc-section `operating-basics` | screen `options-dropdown` | related_screens |
| doc-section `operating-basics` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `operating-basics` | screen `running-test` | related_screens |
| doc-section `results-panel` | screen `results` | related_screens |
| doc-section `setup-panel` | screen `setup-dut` | related_screens |
| doc-section `setup-panel` | screen `setup-test-selection` | related_screens |
| doc-section `setup-panel` | screen `setup-test-selection-config` | related_screens |
| doc-section `setup-panel` | screen `setup-acquisitions` | related_screens |
| doc-section `setup-panel` | screen `setup-acquisitions-probe-config` | related_screens |
| doc-section `setup-panel` | screen `setup-test-selection-limits-editor` | related_screens |
| doc-section `setup-panel` | screen `setup-preferences` | related_screens |
| doc-section `status-panel` | screen `status-test-status` | related_screens |
| doc-section `status-panel` | screen `status-log-view` | related_screens |
| doc-section `reports-panel` | screen `reports-configuration` | related_screens |
| doc-section `reports-panel` | screen `reports-view-settings` | related_screens |
| doc-section `saving-recalling-test-setup` | screen `setup-dut-session-browser` | related_screens |
| doc-section `setup-configuration-and-preferences` | screen `setup-test-selection-config` | related_screens |
| doc-section `setup-configuration-and-preferences` | screen `setup-test-selection-limits-editor` | related_screens |
| doc-section `setup-configuration-and-preferences` | screen `setup-preferences` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-comments` | related_screens |
| doc-section `setup-dut-panel` | screen `setup-dut-session-browser` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-test-selection` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-test-selection-config` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions` | related_screens |
| doc-section `setup-test-selection-and-acquisitions` | screen `setup-acquisitions-probe-config` | related_screens |
| doc-section `starting-application` | screen `options-dropdown` | related_screens |
| doc-section `starting-application` | screen `setup-preferences-email-settings` | related_screens |
| doc-section `status-and-results-panels` | screen `status-test-status` | related_screens |
| doc-section `status-and-results-panels` | screen `status-log-view` | related_screens |
| doc-section `status-and-results-panels` | screen `results` | related_screens |
| doc-section `status-and-results-panels` | screen `running-test` | related_screens |
| screen `options-dropdown` | screen `setup-dut` | related_screens |
| screen `options-dropdown` | screen `setup-preferences-email-settings` | related_screens |
| screen `plots` | screen `results` | related_screens |
| screen `plots` | screen `setup-test-selection` | related_screens |
| screen `reports-configuration` | screen `reports-view-settings` | related_screens |
| screen `reports-configuration` | screen `results` | related_screens |
| screen `reports-configuration` | screen `plots` | related_screens |
| screen `reports-view-settings` | screen `reports-configuration` | related_screens |
| screen `reports-view-settings` | screen `results` | related_screens |
| screen `reports-view-settings` | screen `plots` | related_screens |
| screen `results` | screen `status-test-status` | related_screens |
| screen `results` | screen `plots` | related_screens |
| screen `results` | screen `reports-configuration` | related_screens |
| screen `running-test` | screen `status-test-status` | related_screens |
| screen `running-test` | screen `status-log-view` | related_screens |
| screen `setup-acquisitions-probe-config` | screen `setup-acquisitions` | related_screens |
| screen `setup-acquisitions` | screen `setup-dut` | related_screens |
| screen `setup-acquisitions` | screen `setup-test-selection` | related_screens |
| screen `setup-acquisitions` | screen `setup-acquisitions-probe-config` | related_screens |
| screen `setup-acquisitions` | screen `setup-preferences` | related_screens |
| screen `setup-dut-comments` | screen `setup-dut` | related_screens |
| screen `setup-dut-comments` | screen `setup-dut-session-browser` | related_screens |
| screen `setup-dut-session-browser` | screen `setup-dut` | related_screens |
| screen `setup-dut-session-browser` | screen `setup-dut-comments` | related_screens |
| screen `setup-preferences-email-settings` | screen `setup-preferences` | related_screens |
| screen `setup-preferences` | screen `setup-dut` | related_screens |
| screen `setup-preferences` | screen `setup-test-selection` | related_screens |
| screen `setup-preferences` | screen `setup-acquisitions` | related_screens |
| screen `setup-preferences` | screen `setup-preferences-email-settings` | related_screens |
| screen `setup-test-selection-config` | screen `setup-test-selection` | related_screens |
| screen `setup-test-selection-config` | screen `setup-test-selection-limits-editor` | related_screens |
| screen `setup-test-selection-limits-editor` | screen `setup-test-selection` | related_screens |
| screen `setup-test-selection-limits-editor` | screen `setup-test-selection-config` | related_screens |
| screen `setup-test-selection` | screen `setup-dut` | related_screens |
| screen `setup-test-selection` | screen `setup-acquisitions` | related_screens |
| screen `setup-test-selection` | screen `setup-preferences` | related_screens |
| screen `status-log-view` | screen `status-test-status` | related_screens |
| screen `status-log-view` | screen `running-test` | related_screens |
| screen `status-test-status` | screen `status-log-view` | related_screens |
| screen `status-test-status` | screen `running-test` | related_screens |
| screen `status-test-status` | screen `setup-test-selection` | related_screens |
| screen `status-test-status` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-chrisb-reports-and-rerun-workflow` | screen `reports-configuration` | screens_visited |
| walkthrough `ae-chrisb-reports-and-rerun-workflow` | screen `reports-configuration` | related_screens |
| walkthrough `ae-chrisb-reports-and-rerun-workflow` | screen `reports-view-settings` | related_screens |
| walkthrough `ae-chrisb-reports-and-rerun-workflow` | screen `results` | related_screens |
| walkthrough `ae-chrisb-reports-and-rerun-workflow` | screen `options-dropdown` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `status-test-status` | screens_visited |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `status-log-view` | screens_visited |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `results` | screens_visited |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `setup-dut` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `status-test-status` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `status-log-view` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `results` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `running-test` | related_screens |
| walkthrough `ae-chrisb-setup-waveforms-and-run-modes` | screen `options-dropdown` | related_screens |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-dut` | screens_visited |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-test-selection` | screens_visited |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `status-test-status` | screens_visited |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-dut` | related_screens |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-dallas-jesse-compliance-mode-and-test-selection` | screen `status-test-status` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-acquisitions-probe-config` | screens_visited |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-preferences` | screens_visited |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `status-test-status` | screens_visited |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `results` | screens_visited |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `plots` | screens_visited |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-acquisitions-probe-config` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-preferences` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-preferences-email-settings` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `status-test-status` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `status-log-view` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `results` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `plots` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `reports-configuration` | related_screens |
| walkthrough `ae-dallas-jesse-instruments-sessions-results-debug` | screen `running-test` | related_screens |
| walkthrough `ae-dallas-jesse-session-context-and-overall-reactions` | screen `setup-dut` | related_screens |
| walkthrough `ae-dallas-jesse-session-context-and-overall-reactions` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-dallas-jesse-session-context-and-overall-reactions` | screen `running-test` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-test-selection` | screens_visited |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-dut` | screens_visited |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `results` | screens_visited |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-dut` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-dallas-jesse-setup-flow-friction` | screen `results` | related_screens |
| walkthrough `ae-joey-chiu-dut-id-limits-and-prototype-reaction` | screen `setup-dut` | screens_visited |
| walkthrough `ae-joey-chiu-dut-id-limits-and-prototype-reaction` | screen `setup-dut` | related_screens |
| walkthrough `ae-joey-chiu-dut-id-limits-and-prototype-reaction` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ae-joey-chiu-dut-id-limits-and-prototype-reaction` | screen `reports-configuration` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-dut` | screens_visited |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection` | screens_visited |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection-config` | screens_visited |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection-limits-editor` | screens_visited |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-dut` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `setup-test-selection-limits-editor` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `options-dropdown` | related_screens |
| walkthrough `ae-joey-chiu-pcie-backward-compat-scaling` | screen `status-log-view` | related_screens |
| walkthrough `ae-nadir-kahn-competitive-landscape-and-visual-direction` | screen `setup-dut` | related_screens |
| walkthrough `ae-nadir-kahn-competitive-landscape-and-visual-direction` | screen `running-test` | related_screens |
| walkthrough `ae-nadir-kahn-competitive-landscape-and-visual-direction` | screen `results` | related_screens |
| walkthrough `ae-nadir-kahn-competitive-landscape-and-visual-direction` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-nadir-kahn-pain-points-and-automation` | screen `running-test` | related_screens |
| walkthrough `ae-nadir-kahn-pain-points-and-automation` | screen `status-test-status` | related_screens |
| walkthrough `ae-nadir-kahn-pain-points-and-automation` | screen `reports-configuration` | related_screens |
| walkthrough `ae-nadir-kahn-pain-points-and-automation` | screen `setup-dut` | related_screens |
| walkthrough `ae-sam-ddr-memory-feedback` | screen `setup-dut` | related_screens |
| walkthrough `ae-sam-ddr-memory-feedback` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-sam-ddr-memory-feedback` | screen `setup-acquisitions-probe-config` | related_screens |
| walkthrough `ae-sam-ddr-memory-feedback` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `status-log-view` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `status-test-status` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `results` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `plots` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `reports-configuration` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `reports-view-settings` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `setup-dut` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `setup-preferences` | related_screens |
| walkthrough `ae-tapo-parua-prototype-ui-feedback` | screen `running-test` | related_screens |
| walkthrough `ae-tapo-parua-workflow-and-settings-architecture` | screen `setup-dut` | related_screens |
| walkthrough `ae-tapo-parua-workflow-and-settings-architecture` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-tapo-parua-workflow-and-settings-architecture` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-tapo-parua-workflow-and-settings-architecture` | screen `setup-preferences` | related_screens |
| walkthrough `ae-tapo-parua-workflow-and-settings-architecture` | screen `status-test-status` | related_screens |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `setup-dut` | screens_visited |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `setup-dut` | related_screens |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `options-dropdown` | related_screens |
| walkthrough `ae-travis-berger-bench-setup-and-instrument-connection` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `options-dropdown` | screens_visited |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-test-selection` | screens_visited |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-test-selection-config` | screens_visited |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-preferences` | screens_visited |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `options-dropdown` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-dut` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-preferences` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-travis-berger-launcher-global-settings-and-setup-flow` | screen `running-test` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `reports-view-settings` | screens_visited |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `running-test` | screens_visited |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `reports-view-settings` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `reports-configuration` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `plots` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `running-test` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `results` | related_screens |
| walkthrough `ae-travis-berger-run-environments-adoption-and-reports` | screen `status-log-view` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `status-log-view` | screens_visited |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `results` | screens_visited |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `setup-dut-session-browser` | screens_visited |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `running-test` | screens_visited |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `status-test-status` | screens_visited |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `status-log-view` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `status-test-status` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `results` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `running-test` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `setup-dut` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `options-dropdown` | related_screens |
| walkthrough `ae-travis-berger-status-results-sessions-and-run-window` | screen `reports-configuration` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `setup-acquisitions` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `setup-preferences` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `status-test-status` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `status-log-view` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `results` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `plots` | screens_visited |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `setup-acquisitions` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `setup-acquisitions-probe-config` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `setup-preferences` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `status-test-status` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `status-log-view` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `results` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `plots` | related_screens |
| walkthrough `ae-will-teverovsky-acquisitions-presets-status-and-results` | screen `options-dropdown` | related_screens |
| walkthrough `ae-will-teverovsky-dut-panel-and-data-rates` | screen `setup-dut` | screens_visited |
| walkthrough `ae-will-teverovsky-dut-panel-and-data-rates` | screen `setup-dut` | related_screens |
| walkthrough `ae-will-teverovsky-dut-panel-and-data-rates` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-will-teverovsky-dut-panel-and-data-rates` | screen `results` | related_screens |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `options-dropdown` | screens_visited |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `options-dropdown` | related_screens |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `setup-preferences` | related_screens |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `reports-configuration` | related_screens |
| walkthrough `ae-will-teverovsky-session-files-options-and-program-context` | screen `reports-view-settings` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection` | screens_visited |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection-config` | screens_visited |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection-limits-editor` | screens_visited |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection-config` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-test-selection-limits-editor` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `setup-dut-comments` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `status-test-status` | related_screens |
| walkthrough `ae-will-teverovsky-test-selection-and-contextual-help` | screen `results` | related_screens |
| walkthrough `competitive-deployment-licensing-and-status-value` | screen `status-test-status` | related_screens |
| walkthrough `competitive-deployment-licensing-and-status-value` | screen `status-log-view` | related_screens |
| walkthrough `competitive-deployment-licensing-and-status-value` | screen `results` | related_screens |
| walkthrough `competitive-deployment-licensing-and-status-value` | screen `reports-configuration` | related_screens |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-test-selection` | screens_visited |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-test-selection-config` | screens_visited |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-test-selection` | related_screens |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-test-selection-config` | related_screens |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-preferences` | related_screens |
| walkthrough `configuration-user-traps-and-cockpit-view` | screen `setup-dut` | related_screens |
| walkthrough `customer-market-and-platform-context` | screen `setup-test-selection` | related_screens |
| walkthrough `customer-market-and-platform-context` | screen `setup-acquisitions` | related_screens |
| walkthrough `customer-market-and-platform-context` | screen `status-test-status` | related_screens |
| walkthrough `customer-market-and-platform-context` | screen `results` | related_screens |
| walkthrough `desktop-integration-strategy` | module `qt` | related_modules |
| walkthrough `ds-architecture-presentation` | module `packages-tokens` | related_modules |
| walkthrough `ds-architecture-presentation` | module `packages-ui` | related_modules |
| walkthrough `ds-architecture-presentation` | module `packages-ui-button` | related_modules |
| walkthrough `ds-architecture-presentation` | module `figma-token-push` | related_modules |
| walkthrough `ds-architecture-presentation` | module `qt` | related_modules |
| walkthrough `personas-and-jobs-to-be-done` | screen `setup-dut` | related_screens |
| walkthrough `personas-and-jobs-to-be-done` | screen `setup-test-selection` | related_screens |
| walkthrough `personas-and-jobs-to-be-done` | screen `status-test-status` | related_screens |
| walkthrough `personas-and-jobs-to-be-done` | screen `results` | related_screens |
| walkthrough `personas-and-jobs-to-be-done` | screen `reports-configuration` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `setup-dut` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `setup-test-selection` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `setup-test-selection-config` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `setup-acquisitions` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `results` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `plots` | screens_visited |
| walkthrough `tek-products-walkthrough` | screen `setup-dut` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `setup-test-selection` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `setup-test-selection-config` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `setup-acquisitions` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `status-test-status` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `status-log-view` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `results` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `plots` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `reports-configuration` | related_screens |
| walkthrough `tek-products-walkthrough` | screen `reports-view-settings` | related_screens |
| walkthrough `ui-redesign-mantras-and-transition-strategy` | screen `setup-dut` | related_screens |
| walkthrough `ui-redesign-mantras-and-transition-strategy` | screen `setup-dut-session-browser` | related_screens |
| walkthrough `ux-feedback-and-open-questions` | screen `running-test` | screens_visited |
| walkthrough `ux-feedback-and-open-questions` | screen `status-test-status` | screens_visited |
| walkthrough `ux-feedback-and-open-questions` | screen `plots` | screens_visited |
| walkthrough `ux-feedback-and-open-questions` | screen `running-test` | related_screens |
| walkthrough `ux-feedback-and-open-questions` | screen `plots` | related_screens |
| walkthrough `ux-feedback-and-open-questions` | screen `results` | related_screens |
| walkthrough `ux-feedback-and-open-questions` | module `packages-tokens` | related_modules |
| walkthrough `ux-feedback-and-open-questions` | module `packages-ui` | related_modules |

## Coverage notes

- Screens documented: 18
- Walkthroughs documented: 33
- Manual sections documented: 65
- Hardware views documented: 0
- API snapshots: 0
- Code snapshots: 0
- Cross-references: 390
- Last regenerated: 2026-07-21 by /refresh-index
