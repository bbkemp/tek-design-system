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
| [customer-market-and-platform-context](./customer-market-and-platform-context.md) | Customer landscape (humanoids, AI servers, EVs), the multi-interface compliance workflow (Qualcomm + AMD AI server examples, ~600 interfaces per AMD board, JLR EV stack), cross-vendor parity vs. conformance differentiation | ~6:18 – ~30:00 |
| [ui-redesign-mantras-and-transition-strategy](./ui-redesign-mantras-and-transition-strategy.md) | Materials handoff (origin of batch 2), AU UX team's VOC guide, three redesign mantras (guided engagement, Mazda-to-Jaguar / no manual to drive, bandwagon respect), deployment-friction wedge | ~54:53 – 1:00:39 |

#### Participants (2026-06-23)

| Name | Role | Key contributions |
|---|---|---|
| Subhasis Bera | Principal Product Manager, Solutions Platform and Decoders | Personas framework (attributed to Tek Lung), JTBD landscape, customer context, three redesign mantras |
| Bryan Kemp | DS lead | Materials handoff coordination, follow-ups |
| Arpita Jogdand | AU UX team | Commits to producing AU-team VOC guide from UX perspective |

Mid-meeting segments (~12:00 – ~54:53) cover UI/UX deep-dive section 4 and customer-by-customer examples that are not yet chunked. **Pending follow-up processing.**

### 3. Fortive Growth Accelerator empathy interview discussion guide (methodology document)

**Source:** `uploads/artifacts/GA VOC for Empathy Disc Guide Question Bank - GM v1.docx` · **Type:** methodology document (not a recorded session) · **Author:** Fortive Growth Accelerator (GA) team · **Applies to:** `tek-express`, `tek-flow`

Generic Fortive corporate VOC methodology — the discussion-guide / question-bank template that **every** Subhasis-authored empathy-map deck in the corpus is built on. Covers contextual + advice interview structure (ground rules → strong intro → snorkel-to-scuba body → wrap), the full question bank by category (Background, Responsibilities, Social / Emotional Jobs, IFD pain quantification, Persistent Questions, Initial Discovery, Customer Journeyline, Identifying Problems), and the "Customers don't buy the what, they buy the why" UVP-construction rule. Not Tek-specific — the worked example uses a US Cellular telecom domain.

| Chunk | Topic |
|---|---|
| [empathy-discussion-guide-question-bank](./empathy-discussion-guide-question-bank.md) | Full methodology — ground rules · introduction script · snorkel-to-scuba body · wrap-up · question bank by category · UVP construction rule |

This is the **methodology family parent** of the Subhasis-authored empathy-map decks at [`tek-express/decks/designcon-2023-voc-summary/`](../decks/designcon-2023-voc-summary/_index.md), [`tek-express/decks/india-customer-voc-2023-march/`](../decks/india-customer-voc-2023-march/_index.md), and [`tek-flow/decks/tekflow-voc-synthesis-2022-12/`](../../tek-flow/decks/tekflow-voc-synthesis-2022-12/_index.md). It is also the upstream template for the **Tek-specific** Tx-Rx Solutions Platform VOC guide PDF (pending `/document-pdf` processing).

### 4. TekExpress prototype SME review #1 — Tapo (2026-07)

**Source:** `uploads/transcripts/tek-express-prototype-sme-review-tapo-2026-07.txt` · **Recorded:** on or shortly before 2026-07-13 (exact date not stated in transcript) · **Duration:** unknown (no timestamps) · **Applies to:** `tek-express`, `tek-design-system`

First SME review session of the TekExpress prototype (`prototypes/tek-express/`). Tapo — an application engineer and former TekExpress application developer — clicks through the prototype and thinks out loud. First half is the deepest architectural explanation of TekExpress in the corpus (framework vs. application layer, DUT-panel semantics, the universal setup → selection → acquire → analyze → report anatomy, SCPI scope communication, SigTest); second half is concrete prototype feedback benchmarked against Keysight (split-panel logs, flat results, HTML report preview, report formats) plus DS-level pattern asks (selection-driven contextual help without Clarius-style question-mark clutter, a "blue dot" cross-panel change indicator, checkmark semantics, run-with-defaults invariant).

| Chunk | Topic |
|---|---|
| [compliance-test-workflow-anatomy](./compliance-test-workflow-anatomy.md) | Guided-simplicity differentiator · Clarius workflow regression (field-AE evidence) · framework vs. application layer · DUT panel + "first panel" settings-placement pressure · SCPI / waveforms / SigTest · cross-app workflow consistency · 20 years of look-and-feel drift |
| [prototype-review-logs-results-and-reporting](./prototype-review-logs-results-and-reporting.md) | Keysight split-panel logs benchmark · flat/abstract logs and errors · flat results view + download-and-scan workaround · marginal passes and custom limits (rework mode) · auto-load failing waveform idea · HTML report preview · MHT obsolete / CSV must-keep / markdown proposed · rerun-and-merge use case |
| [prototype-review-navigation-help-and-visual-cues](./prototype-review-navigation-help-and-visual-cues.md) | On-screen contextual help (minimalist, selection-driven, not 100 question marks) · icons "more professional" · white too bright · direct non-sequential step navigation · checkmark = visited-only confusion · run-with-defaults · "blue dot" interdependent-settings cue · Debug/Preferences placement · container breakpoints · habituation ≠ satisfaction |

#### Participants (2026-07 SME review #1)

| Name | Role | Key contributions |
|---|---|---|
| Tapo | Application engineer / SME (former TekExpress application developer) | Full workflow anatomy, Keysight benchmarks, all UI feedback items |
| Bryan Kemp | DS lead | Session facilitation, markdown-report proposal, global-help-pattern and checkmark-iteration commitments |
| (unnamed) | UX participant, note-taking | Interviewer questions (icons, formats, merge behavior); likely Arpita Jogdand — inferred, not stated |

## Pending references (across all meetings)

- **TekRx product** — Pranavi demos it alongside TekExpress (2026-04-23) and Subhasis references TekFlow's relation to TekExpress (2026-06-23). TekFlow has its own subject; TekRx may need one if more material surfaces.
- **Chart library decision** — Kuhlman raised the original concern (2026-04-23, 55:23, "we lose all the richness"). Subhasis's mantras don't directly address it but reinforce the cross-vendor parity constraint that caps differentiation outside the workflow layer.
- **WPF control library approach** — Mahesha's proposal (2026-04-23). No update from Subhasis (2026-06-23).
- **Container breakpoints in practice** — Bryan's DS feature (2026-04-23, 51:56). Open for redesign validation.
- **Section 4 of the UI/UX deep-dive** (in the Tx-Rx VOC guide PDF) — Subhasis's pointed-to extension point for the AU team's VOC guide. Process via `/document-pdf` when ready.
- **Bangkok slides** — Subhasis committed to share (2026-06-23, 55:30). Not in inbox as of 2026-06-25.
- **48 VOCs from 2020 pandemic customer list** — Subhasis committed to share + reconnect (2026-06-23, 55:30). Not in inbox as of 2026-06-25.
- **Global contextual-help pattern** (2026-07 SME review) — selection-driven on-screen help with doc deep-links; committed to explore as a DS-wide pattern. No component or spec yet.
- **Cross-panel change-indicator ("blue dot") pattern** (2026-07 SME review) — attention cue for interdependent-settings side effects. No DS primitive yet.
- **Keysight split-panel log-view screenshots** (2026-07 SME review) — Tapo believes screenshots exist; route into a Keysight subject when they surface.
- **Field-AE Clarius interview material** (2026-07 SME review) — Tapo cites interviews evidencing the Clarius intuitiveness regression; raw material not in corpus.
- **Session save/load, export, and rerun-and-merge flows** (2026-07 SME review) — deferred to a follow-up SME session with Tapo.
