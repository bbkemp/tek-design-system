# TekExpress walkthroughs — index

Cross-meeting index of processed walkthrough chunks under `corpus/sources/tek-express/walkthroughs/`. Each chunk is locked to the format of [`tek-products-walkthrough.md`](./tek-products-walkthrough.md) (see [`document-walkthrough` SKILL.md](../../../../.claude/skills/document-walkthrough/SKILL.md)).

## Meetings documented

### 1. TekExpress Design System Follow-up Discussion (2026-04-23)

**Source:** `uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx` · **Recorded:** 23 April 2026, 02:36 PM · **Duration:** 1h 4m 3s · **Applies to:** `tek-express`, `tek-design-system`

Cross-team design-system follow-up meeting in which Bryan Kemp (DS lead) presents Tek Design System v2 to the TekExpress / TekRx engineering team. Bill Israel frames integration strategy. Pranavi Chanda demos TekExpress and TekRx. Mahesha Gl, Rick Kuhlman, Richard Patterson, Hemant Pardeshi, Srevats Laxman raise UX, integration, and architectural questions. Highest-signal source for *"why* should the redesign do X" questions.

| Chunk | Topic | Time range |
|---|---|---|
| [ds-architecture-presentation](./ds-architecture-presentation.md) | Bryan's DS overview — tokens, components, Figma → CSS pipeline, planned motion libraries, release process | 0:18 – 9:00 |
| [desktop-integration-strategy](./desktop-integration-strategy.md) | WPF integration approach; Mahesha's control-library proposal; Bill's "take it at your pace" framing | 9:00 – 16:35 |
| [tek-products-walkthrough](./tek-products-walkthrough.md) | Pranavi's combined demo of TekExpress (compliance app) and TekRx (receiver test wizard) | 16:35 – 46:00 |
| [ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md) | Half-screen mode, container breakpoints, composite controls, chart-library re-implementation pain, mermaid diagrams | 46:00 – 1:04:00 |

#### Participants (2026-04-23)

| Name | Role (inferred) | Key contributions |
|---|---|---|
| Bryan Kemp | DS lead | DS architecture overview, container-breakpoints strategy, redesign plan |
| Bill Israel | Engineering lead / DS sponsor | Integration strategy, release process, "take it at your pace" framing |
| Pranavi Chanda | TekExpress / TekRx engineer | Live product demos |
| Srevats Laxman | Engineering manager | Meeting facilitation, product context for TekExpress and TekRx |
| Mahesha Gl | Desktop / WPF engineer | WPF library proposal, composite-control concerns |
| Rick Kuhlman | UX / product | Half-screen-mode question, chart-library critique |
| Richard Patterson | Engineer / designer | Window-layout design challenge |
| Hemant Pardeshi | Engineer | RF switch + grid extensive-use note |

### 2. AU VoC Sync up (2026-06-23)

**Source:** `uploads/transcripts/AU VoC Sync up.docx` · **Recorded:** 23 June 2026, 04:07 PM · **Duration:** 1h 1m 33s · **Applies to:** `tek-express`, `tek-flow`

Subhasis Bera (Principal Product Manager, Solutions Platform and Decoders) gives the AU UX team a comprehensive product / customer / strategy briefing for TekExpress redesign work. Covers personas (Guru Gus / Push-Button Pete / Midway Max), the four-stage JTBD landscape, customer market positioning (humanoids, AI servers, EVs, Tesla, Meta Lab, JLR named), cross-vendor compliance parity, conformance differentiation, and three redesign mantras (guided customer engagement, Mazda-to-Jaguar transition, bandwagon respect).

This meeting is **directly upstream of the 2026-06-25 batch 2 corpus material** — Subhasis's "I will dump everything on this chat" commitment at 55:01 produced the TekFlow VOC decks, Designcon 2023, mAR 2023 India VOC, GA Empathy Question Bank, Tx-Rx Solutions Platform VOC guide, and TekExpress_Needed_Features summary that all now live in `tek-express/uploads/artifacts/`.

| Chunk | Topic | Time range |
|---|---|---|
| [personas-and-jobs-to-be-done](./personas-and-jobs-to-be-done.md) | The 3 personas (Guru Gus, Push-Button Pete, Midway Max) + the 4-stage JTBD landscape (design-integrate → system-validate → reliability → manufacturing) + the Clarius cautionary tale | 0:03 – ~12:00 |
| [customer-market-and-platform-context](./customer-market-and-platform-context.md) | Customer landscape (humanoids, AI servers, EVs), the multi-interface compliance workflow (Qualcomm + AMD AI server examples, ~600 interfaces per AMD board, JLR EV stack), cross-vendor parity vs. conformance differentiation | ~6:18 – ~12:00 |
| [persona-evolution-physical-ai-and-voc-methodology](./persona-evolution-physical-ai-and-voc-methodology.md) | Persona evolution toward AI, the "physical AI products" theme, D9-codes-vs-Tek-names asymmetry, WOW-FIT scoring, competitive-prep plan | ~12:00 – ~28:00 |
| [competitive-deployment-licensing-and-status-value](./competitive-deployment-licensing-and-status-value.md) | Farzana's competitive doc dimension-by-dimension: deployment (Keysight master/slave dual-install), licensing, post-install, reporting, information architecture; "the biggest value… is letting know the user the status of the system" | ~28:00 – ~35:12 |
| [configuration-user-traps-and-cockpit-view](./configuration-user-traps-and-cockpit-view.md) | The two-layer configuration "user trap" demonstrated live; the WPF-era three-pane Outlook-style "cockpit view" prior art (built with Hemant) | ~35:15 – ~39:57 |
| [prototype-feedback-loop-and-voc-synthesis-history](./prototype-feedback-loop-and-voc-synthesis-history.md) | The recorded-walkthrough → RAG feedback protocol (origin of this corpus's pipeline), pain-to-dollar formula (intensity × frequency × density × $40/hr), Clarius VOC synthesis playbook | ~39:57 – ~54:53 |
| [ui-redesign-mantras-and-transition-strategy](./ui-redesign-mantras-and-transition-strategy.md) | Materials handoff (origin of batch 2), AU UX team's VOC guide, three redesign mantras (guided engagement, Mazda-to-Jaguar / no manual to drive, bandwagon respect), deployment-friction wedge | ~54:53 – 1:00:39 |

#### Participants (2026-06-23)

| Name | Role | Key contributions |
|---|---|---|
| Subhasis Bera | Principal Product Manager, Solutions Platform and Decoders | Personas framework (attributed to Tek Lung), JTBD landscape, customer context, three redesign mantras |
| Bryan Kemp | DS lead | Materials handoff coordination, follow-ups |
| Arpita Jogdand | AU UX team | Commits to producing AU-team VOC guide from UX perspective |

The full meeting is now chunked (0:03 – 1:00:39 across the seven chunks above); the former ~12:00 – ~54:53 gap was processed 2026-07-21.

### 3. Fortive Growth Accelerator empathy interview discussion guide (methodology document)

**Source:** `uploads/artifacts/GA VOC for Empathy Disc Guide Question Bank - GM v1.docx` · **Type:** methodology document (not a recorded session) · **Author:** Fortive Growth Accelerator (GA) team · **Applies to:** `tek-express`, `tek-flow`

Generic Fortive corporate VOC methodology — the discussion-guide / question-bank template that **every** Subhasis-authored empathy-map deck in the corpus is built on. Covers contextual + advice interview structure (ground rules → strong intro → snorkel-to-scuba body → wrap), the full question bank by category (Background, Responsibilities, Social / Emotional Jobs, IFD pain quantification, Persistent Questions, Initial Discovery, Customer Journeyline, Identifying Problems), and the "Customers don't buy the what, they buy the why" UVP-construction rule. Not Tek-specific — the worked example uses a US Cellular telecom domain.

| Chunk | Topic |
|---|---|
| [empathy-discussion-guide-question-bank](./empathy-discussion-guide-question-bank.md) | Full methodology — ground rules · introduction script · snorkel-to-scuba body · wrap-up · question bank by category · UVP construction rule |

This is the **methodology family parent** of the Subhasis-authored empathy-map decks at [`tek-express/decks/designcon-2023-voc-summary/`](../decks/designcon-2023-voc-summary/_index.md), [`tek-express/decks/india-customer-voc-2023-march/`](../decks/india-customer-voc-2023-march/_index.md), and [`tek-flow/decks/tekflow-voc-synthesis-2022-12/`](../../tek-flow/decks/tekflow-voc-synthesis-2022-12/_index.md). It is also the upstream template for the **Tek-specific** Tx-Rx Solutions Platform VOC guide PDF (processed 2026-07-21 into `docs/tx-rx-voc-guide/`; publication under review — the source carries a "TALK ONLY" sharing restriction, so the chunks are held pending a confidentiality decision).

### 4. July 2026 AE interview round (2026-07-13 → 2026-07-15)

**Sources:** eight single-mic live sessions in `uploads/transcripts/` (ChrisB, DallasandJesse, JoeyChiu, NadirKahn, Sam, TapojyotiParua, TravisBergerPt2, WillTeverovsky) · **Applies to:** `tek-express`, `tek-design-system`

Application Engineers who know TekExpress deeply react to the DS-v2 prototype and walk the existing app. 21 chunks, all prefixed `ae-`, one-to-four per session; every chunk flags the single-mic attribution caveat in its Confidence notes. The cross-session synthesis (`provenance: authored-analysis`) lives outside the corpus at [`uxr/tek-express-ae-interviews/synthesis.md`](../../../../uxr/tek-express-ae-interviews/synthesis.md) — convergence matrix, P0/P1/P2 findings, preserve-list, open decisions.

| Session (date, duration) | Chunks |
|---|---|
| Will Teverovsky (07-13, 1:38:12) | [dut-panel-and-data-rates](./ae-will-teverovsky-dut-panel-and-data-rates.md) · [test-selection-and-contextual-help](./ae-will-teverovsky-test-selection-and-contextual-help.md) · [acquisitions-presets-status-and-results](./ae-will-teverovsky-acquisitions-presets-status-and-results.md) · [session-files-options-and-program-context](./ae-will-teverovsky-session-files-options-and-program-context.md) |
| Tapo Parua (mid-July, undated) | [workflow-and-settings-architecture](./ae-tapo-parua-workflow-and-settings-architecture.md) · [prototype-ui-feedback](./ae-tapo-parua-prototype-ui-feedback.md) |
| Joey Chiu + drop-in AE (07-14, 38:11) | [pcie-backward-compat-scaling](./ae-joey-chiu-pcie-backward-compat-scaling.md) · [dut-id-limits-and-prototype-reaction](./ae-joey-chiu-dut-id-limits-and-prototype-reaction.md) |
| Nadir Kahn (07-14, 23:17) | [pain-points-and-automation](./ae-nadir-kahn-pain-points-and-automation.md) · [competitive-landscape-and-visual-direction](./ae-nadir-kahn-competitive-landscape-and-visual-direction.md) |
| Chris B (07-15, 23:49) | [setup-waveforms-and-run-modes](./ae-chrisb-setup-waveforms-and-run-modes.md) · [reports-and-rerun-workflow](./ae-chrisb-reports-and-rerun-workflow.md) |
| Dallas + Jesse (07-15, 1:19:17) | [session-context-and-overall-reactions](./ae-dallas-jesse-session-context-and-overall-reactions.md) · [setup-flow-friction](./ae-dallas-jesse-setup-flow-friction.md) · [compliance-mode-and-test-selection](./ae-dallas-jesse-compliance-mode-and-test-selection.md) · [instruments-sessions-results-debug](./ae-dallas-jesse-instruments-sessions-results-debug.md) |
| Sam (07-15, 9:35 — truncated) | [ddr-memory-feedback](./ae-sam-ddr-memory-feedback.md) |
| Travis Berger (07-15, 1:14:53 — re-record) | [bench-setup-and-instrument-connection](./ae-travis-berger-bench-setup-and-instrument-connection.md) · [launcher-global-settings-and-setup-flow](./ae-travis-berger-launcher-global-settings-and-setup-flow.md) · [status-results-sessions-and-run-window](./ae-travis-berger-status-results-sessions-and-run-window.md) · [run-environments-adoption-and-reports](./ae-travis-berger-run-environments-adoption-and-reports.md) |

## Pending references (across all meetings)

- **TekRx product** — Pranavi demos it alongside TekExpress (2026-04-23) and Subhasis references TekFlow's relation to TekExpress (2026-06-23). TekFlow has its own subject; TekRx may need one if more material surfaces.
- **Chart library decision** — Kuhlman raised the original concern (2026-04-23, 55:23, "we lose all the richness"). Subhasis's mantras don't directly address it but reinforce the cross-vendor parity constraint that caps differentiation outside the workflow layer.
- **WPF control library approach** — Mahesha's proposal (2026-04-23). No update from Subhasis (2026-06-23).
- **Container breakpoints in practice** — Bryan's DS feature (2026-04-23, 51:56). Open for redesign validation.
- **Section 4 of the UI/UX deep-dive** (in the Tx-Rx VOC guide PDF) — processed 2026-07-21 (`docs/tx-rx-voc-guide/ui-ux-deep-dive.md`, held with the rest of that doc pending the confidentiality decision above).
- **Bangkok slides** — Subhasis committed to share (2026-06-23, 55:30). Not in inbox as of 2026-06-25.
- **48 VOCs from 2020 pandemic customer list** — Subhasis committed to share + reconnect (2026-06-23, 55:30). Not in inbox as of 2026-06-25.
