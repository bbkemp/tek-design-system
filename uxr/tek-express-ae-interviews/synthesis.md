---
provenance: authored-analysis
authored_by: [Bryan Kemp (facilitator/study lead), Claude Code (synthesis)]
authored_date: 2026-07-21
project: tek-express-ae-interviews
study_dates: 2026-07-13 – 2026-07-15
applies_to: [tek-express, tek-design-system]
sources:
  - corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md
  - corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md
  - corpus/sources/tek-express/walkthroughs/ae-dallas-tony-session-context-and-overall-reactions.md
  - corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md
  - corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md
  - corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md
  - corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md
  - corpus/sources/tek-express/walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md
  - corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md
  - corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md
  - corpus/sources/tek-express/walkthroughs/ae-joe-swelland-ddr-memory-feedback.md
  - corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md
  - corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md
  - corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md
  - corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md
  - corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md
  - corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md
  - corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md
  - corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md
  - corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md
  - corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp and Claude Code on 2026-07-21.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins — and this file should be corrected.

# TekExpress AE Interview Synthesis — July 2026 prototype review round

Eight live sessions with Tektronix Application Engineers (2026-07-13 → 2026-07-15), each reviewing the new TekExpress prototype and walking the existing app. All sessions single-mic; speaker attribution in the corpus chunks is inferred and flagged per-chunk. This is the first SME feedback round against the prototype.

**Sessions:** Will Teverovsky (1:38), Tapo Parua, Joey Chiu + drop-in field AE (0:38), Nadir Kahn (0:23), Chris B (0:24), Dallas + Tony (1:19), Joe Swelland (0:10, truncated — see Coverage gaps), Travis Berger (1:15 — re-recorded after a failed first attempt; the only session with per-cue timestamps).

---

## 1. Headline

The prototype's **direction is validated** — every AE who saw it accepted the familiar workflow skeleton, and several called the modernization overdue ("it looks like it's modern, not 20 years old" — Chris B). Nobody asked for a different flow. The pushback is concentrated in three places:

1. **Workflow mechanics the redesign must fix, not just re-skin** — mode visibility, selective rerun, error/log intelligibility, buried functionality.
2. **Visual identity** — a strong, repeated directive to look like **TekScope**, with an unresolved tension about flatness vs. hierarchy (§5).
3. **Prototype accuracy debts** — panels that don't yet reflect real per-plugin behavior (memory/DDR especially).

The strongest single warning across the round is the **Clarius precedent**: a prior Tek redesign that looked better but "lost the free-flowing nature" and damaged trust ([Tapo](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md), [Will](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md), [Travis](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md)). Familiarity is a feature; the guided wizard flow is the product's core asset ("you had to be an expert… this flow holds that… customers appreciate that" — Dallas/Tony veteran).

## 2. Convergence matrix

Which AEs independently corroborate each theme (✓ = raised it unprompted; ~ = agreed when raised):

| # | Theme | Will | Tapo | Joey* | Nadir | Chris | Dallas+Tony | Joe | Travis |
|---|---|---|---|---|---|---|---|---|---|
| T1 | Compliance/user-defined **mode state invisible** | ✓ | | | | ~ | ✓ | | ~ |
| T2 | **Options menu is a junk drawer** (save/recall, loop, instruments buried) | ✓ | | ✓ | | ✓ | ✓ | | ✓ |
| T3 | **Selective rerun + report replace/merge** | | ✓ | | | ✓ | ✓ | | |
| T4 | **Errors/logs information-free**; no run-state insight | | ✓ | ✓ | ✓ | | ✓ | ✓ | ✓ |
| T5 | **Pre-recorded waveform filename convention** pain; live↔pre-recorded settings trap | | | | | ✓ | ✓ | ✓ | ✓ |
| T6 | **Results/Status fragmentation**; failures hard to find; no margin info | ✓ | ✓ | | ~ | ✓ | ✓ | | ✓ |
| T7 | **Scale**: test tree, data rates, presets, limits editor don't scale | ✓ | | ✓ | | | ✓ | | ✓ |
| T8 | **DUT ID / path length limit** | | | ✓ | ✓ | | | | |
| T9 | **Match TekScope visually**; dark mode | ✓ | | | ✓ | | ✓ | | ✓ |
| T10 | **Automation/scriptability** is load-bearing | | | | ✓ | ✓ | ✓ | | ~ |
| T11 | **Contextual help** instead of PDF round-trips | ✓ | ✓ | | | | ~ | | ✓ |
| T12 | **Window resize/full-screen** (prototype fixes it) | ✓ | | ✓ | ✓ | | | ~ | ✓ |

\* Joey column includes the unnamed drop-in field AE in his session.

No theme is single-source; the weakest corroboration is T8 (two sources, but it was the drop-in AE's *top* customer complaint and has a known root cause and fix path). Travis's session (added after the initial synthesis) independently corroborated 9 of the 12 themes and supplied root-cause evidence for T12: schematics open in Acrobat *because* "TekExpress can't get any bigger, so that's why it's a PDF." His T10 mark is a qualified ~: he confirms the SCPI "backdoor" but tempers the demand narrative — "less than 20% of customers do full automation… most are there by the device," with licensing (stranded laptop licenses) as the real on-scope-vs-PC decider.

## 3. Prioritized findings

Priorities are authored judgment: P0 = shapes the redesign's information architecture or the DS itself, multi-AE, high frequency-of-pain; P1 = important, more contained; P2 = valuable, opportunistic.

### P0 — structural

**P0.1 — Make mode state (compliance vs. user-defined) persistently visible.** Today it's one dismissable popup, then nothing until the report. "Oh, crap, I just spent two days just not realizing that it's not compliant" ([Dallas/Tony](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md)); "constant confusion… make it painfully clear" (Gary, in [Will's session](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md)). Convergent proposals: persistent status bar carrying mode + current preset (Will), color-coded frame per mode (Dallas/Tony). The prototype's persistent bottom bar was liked and is the natural home.

**P0.2 — Selective rerun with report section replace/merge.** The single most repeated *workflow* ask. "If the test took eight hours to run… let me run this one test. Give me the choice to replace the results" (Dallas/Tony); Chris B independently: rerun one test, "replace just that section" of the report; Tapo: rerun-and-merge is "a common use case" needing intuitiveness work. Adjacent: rerun-failed-only with append/replace choice, right-click debug menu on a failed result. Team context: the MVVM re-architecture ("run 5, fix the 7th, continue") is the enabling backend work — the UI concept should be designed now so the two land together.

**P0.3 — Error, log, and run-state intelligibility.** The most broadly corroborated pain (5 of 7 sessions). "They'll pop up a dialogue and… the information is just missing. I don't know what to do with that and I work here" (Dallas/Tony); logs "too abstract," failures findable only by downloading the report (Tapo); error reporting "not obvious where it goes wrong" (Joe); progress bars "not accurate enough," can't distinguish a hung trigger from slow processing (Nadir); "flat logging" self-critique from the app team (Joey's session). Convergent target picture, benchmarked to Keysight by Tapo: **summary + detail split log**, richer run statuses ("waiting on trigger" vs "analyzing"), failure cues surfaced in Results with **margin-to-limit** ("am I a couple millivolts off?" — Will).

**P0.4 — Unbury the buried: kill the Options junk drawer.** "All the crap is in options" (product leader, Will's session); save/recall "no one knows to look in options for it" (Will); loop run modes "don't bury it in the menu. You got real estate… that's probably my number one" (Chris B); instrument settings "slightly hidden" and belong top-level as physical setup (Joey's session consensus); "It's kind of buried in this little options menu… Customers don't know to go in there to connect" + "The options screen is very confusing. It's not options" ([Travis](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md)). The redesign's IA should treat this as a placement pass over *everything* currently under Options — standard File-menu semantics for sessions, run modes on the run surface, instruments as a first-class setup step with liveness/pre-flight check (T4/P1.4).

Travis extends this into the round's one genuinely new **structural** proposal: a **launcher / global-settings layer above the per-standard applications** — channel defaults (his 7-series pain: "This always defaults to one and three… there's no shared resources in the hardware"), instrument connections, save-waveform, and preferences hoisted out of any single technology app, modeled on Rohde & Schwarz's single block-diagram compliance launcher (he worked there briefly). Settings today are "the top drawer" scattered everywhere. This reframes T2 from "re-home the menu items" to "introduce a layer" — logged as Open decision 11 rather than resolved here.

**P0.5 — Pre-recorded waveform workflow.** Three independent corroborations of the same broken loop: metadata lives in a rigid filename convention customers never follow ("If I have to remember what that name's supposed to be… good luck" — Chris B; AEs connect an AWG just to harvest correct names — Dallas/Tony), settings are locked in pre-recorded mode forcing a live-mode round-trip ("I can work around that now, but why?" — Joe), and failures produce generic errors (Joe's customer-waveform story, Dallas/Tony "the messages were terrible"). Fix shape suggested in-session: point-and-rename dialog mapping files to signals (Chris B), grouped/scannable filter-and-file pickers (Joe). Dallas/Tony's framing raises the stakes: the feature is *underused because* it's hard — this is capability left on the table.

**P0.6 — Visual identity: TekScope kinship.** See §5 — it's a DS-level decision with an open tension, not a settled directive.

### P1 — important, contained

**P1.1 — DUT ID length.** Drop-in AE's top customer complaint ("It needs to be like 200 characters, man… The customers hate it"), corroborated by Nadir (chip version + report number don't fit). Root cause known (Windows path limits from appended session-folder naming), fix path named (long-path registry support). Quick win with outsized field goodwill.

**P1.2 — Results/Status consolidation.** Chris B would merge them; Will's lowest-friction fix is a pass/fail column in Status (Clarius already merged them); Tapo wants failures findable and pass *quality* visible (margin, not just green). Counterweight: R&S-style multi-run report picking is the one reason Chris keeps Results separate. Candidate: one surface, progressive detail.

**P1.3 — Scale-proofing the test model.** PCIe is the forcing function: "Gen 7 and then Gen 8… it's just gonna explode the UI" and 200-test trees (Joey); preset selection hidden in the wrong tab silently costs 10x run time (Joey); multi-select data rates, presets as list rows not tabs, tests grouped by pattern source, names matching spec test IDs (Will, Dallas/Tony). Dallas/Tony's design rule: PCIe is "the super set of stupid" — design for it and everything else follows. Matches Will + product leader's **PCIe-first** strategy (50% of the business).

**P1.4 — Instrument liveness + pre-flight check.** "Can I ping it? Is it working?" (Will); car-dashboard pre-flight (product leader); Clarius precedent has a connectivity LED. Pairs with the instrument-settings unburying (P0.4) and the hard-coded-model-numbers automation break (Dallas/Tony: "It's now a B version and all of a sudden the automation doesn't work" — user-editable equipment allowlist proposed in-session).

**P1.5 — Layered contextual help.** Doc-only help breaks flow ("In PDF, I just have to scroll, scroll, scroll" — Tapo). Convergent design: selection-aware help (F1/global "?") → on-screen description → deep link into the reference section. Explicitly NOT a question mark per setting (Clarius got "too many question marks" feedback). Will's variant: required-vs-informative test marking with rationale tooltips, MOI stays as depth.

**P1.6 — Automation as a contract.** Customers "are literally programming through this GUI" for 24-hour regression (Nadir); customers "always ask for automation" (Chris B); a GUI redesign that breaks scripted control breaks the field. Nadir's proposal: a SCPI-like command per GUI action; must run "fully automated… without any user interaction." The redesign needs an explicit automation-parity checklist per screen. Counterweight from Travis: "less than 20% of customers do full automation… most are there by the device" — automation parity is a hard floor for the minority who script, not the majority workflow; the majority sit *at the scope*, which also makes on-scope licensing the real platform decider (stranded laptop licenses).

### P2 — opportunistic

- **Splash/connection-diagram nag control** ("do you want to see this again" — Nadir) and an always-on mini connection schematic during reconnection (Will).
- **Report evolution**: keep PDF (distributed artifact), CSV is a must (customers script custom reports against it — Tapo), MHT is dead, in-app HTML preview (Keysight parity), Markdown option received positively; report size (10–11 MB × heavy validation fills the scope SSD — Nadir); fix broken anchor links + back-to-top (Chris B); custom logo expected under settings (Chris B — exists today for demo-whitelabeling reasons).
- **Session recall correctness** — "It doesn't recall the parameters correctly. It just — it's broken" (Dallas/Tony), and the X:-drive virtual filesystem is "a hangover from NI TestStand" that should become normal save-anywhere.
- **Acquisition speed opportunities** (backend, but UX-visible): don't reset instruments between acquisitions ("We would speed ourselves up 30 and 40%"), parallel lane acquisition (Dallas/Tony).
- **Cross-plugin consistency governance** — "They'll fix something in one and break something in the other one" (Dallas/Tony); labs run DisplayPort + USB + Thunderbolt side-by-side and expect one identical workflow (Tapo). This is exactly the argument for the design system owning TekExpress patterns.
- **Interaction details**: mutually-exclusive test toggles that can't both be off, silent cascading setting changes → "this will change A, B, C — continue/cancel" dialogs (Dallas/Tony); directly clickable wizard tabs (Tapo); consistent Next-button placement across window sizes (Joe); math waveforms as sources; column add/remove everywhere, stealing TekScope's results-table configure (Dallas/Tony, team-endorsed); Stop-vs-Pause behavior gap — "Everybody complains about stopping a test and having to wait," while Pause "works like immediately" (Travis); minimized run window hides behind the scope UI and "most don't even know that you could bring it back up" (Travis).
- **Session files as OS citizens** (Travis): "Customers don't know where to find their session files… there's like a million folders, timestamp based" — visible save location, recent-sessions list, double-click file association. Extends the X:-drive retirement (above) into everyday discoverability; the DUT-ID field is already the semantic-naming mechanism feeding report and folder names (bridges to T8).
- **Report-to-artifact links + cross-vendor interoperability** (Travis): restore the broken report-to-waveform hyperlink ("Bam, I could go right to the waveform that failed… saved me so much headache"); CSV export and a vendor-neutral report template for two-vendor customer programs that hand-correlate Tek and Keysight reports today. Reinforces the CSV-is-a-must signal (Tapo).
- **Support/debug loop** (Travis): verbose/debug log level and a Riddick-style "Export Log Files → zip" — AEs are "always sending stuff to the software team."

## 4. What must NOT change

The preserve-list is as load-bearing as the fix-list (Clarius is the cautionary tale for ignoring it):

- **The guided step-down wizard flow** (Dallas/Tony veteran, emphatically; Tapo: TekExpress's differentiator vs Keysight/LeCroy is "simplicity, and the way it guides the user").
- **The universal 4-step model** — setup env → test selection → acquire/analyze → report; "90% same in any application"; nothing executes before Start (Tapo). Checkmarks must never gate Start (Tapo: run-with-defaults from DUT alone is core behavior).
- **Up-front visible configuration** vs. LeCroy's registry-style tree ("I've got to scroll through like 3,000 things" — Chris B). A stated competitive strength.
- **On-scope operation** (vs. R&S laptop-hosted: "people do not like that" — Nadir). Platform decision already aligned: EXE-only, never browser (Will's session).
- **Report structure** — "kind of accepted in the industry"; restyle, don't restructure (Chris B).
- **Acquisition table's derived per-row context** and signal validation as a capability ("this is actually an advantage for us" — Dallas/Tony).
- **Set-and-forget defaults** — Select Required is the default path; most users test only the highest data rate (Will).
- **Structural familiarity itself** — "I would say don't change it… customers that are embedded in it don't like a whole lot of change" (Travis: reskin + placement fixes, "not too drastic"); his adoption aids are additive (first-run dismissible tutorial overlay, onboarding for the older Keysight-migrant population), not restructuring. Third independent invocation of the Clarius cautionary tale.

## 5. Visual direction — the one real tension

Everyone wants TekScope kinship; they disagree about what that means at the token level.

- **Nadir (strongest, most specific):** "I would make it look as close to TekScope as possible… your dark mode should be based on like this gray… this green should be the same as that green… if it doesn't look like TekScope, it's just going to look like 2 disconnected pieces of software." He criticized the prototype as **too flat** — "a web app look… AI generated Clarius look" — and noted it currently resembles Keysight's Infiniium One more than TekScope. Wants color *hierarchy* so attention items pop at a glance.
- **Dallas/Tony veteran:** "Customers love that [TekScope PC] GUI… because it's flat… keep this stuff flat."
- **Will:** endorses sharing TekScope's colors; likes the prototype's look overall; monospace log styling praised.
- **Tapo:** color theme "looks good," familiarity is the virtue; white too bright ("hurting my eye").

Reading: "flat" is being used two ways — Dallas/Tony mean *TekScope PC's* flat aesthetic (which Nadir also wants); Nadir's "too flat" is about **insufficient hierarchy/affordance within that aesthetic**, not a request for skeuomorphism. These are probably compatible: TekScope's palette and surface flatness + deliberate hierarchy for state and attention. But that's an authored inference — validate it, don't assume it (see Open decisions). Concrete DS implications regardless: dark mode as default theme (Nadir; Dallas/Tony "it'll look better"; Tapo's bright-white complaint), TekScope-shared grays/greens as token values, and status/attention color roles with real contrast hierarchy.

## 6. Prototype scorecard

**Validated wins:** responsive resizing ("I'm just gonna move it and they'll be like, 'All right, sign me up'" — Will; "one of the biggest problems" fixed — Nadir); familiar workflow skeleton (Will: "this is the workflow I would expect"); technologies integrated into one app; persistent bottom bar concept; Select Required/Select All; modern look as demo/perception value (Nadir: old software makes the hardware look old).

**Accuracy debts (prototype doesn't match real behavior yet):** configuration screen "makes no sense for memory" — DDR-specific controls live elsewhere (Joe); middle DUT section "just dumping fields" (Joey's session; Bryan acknowledged early shell); Select Required non-functional; embed filter misplaced; acquisition grouping, test comments, and presets missing (Will); application/suite label placement wrong vs. current app (Tapo).

**Design questions raised:** checkmark semantics unclear — and must never read as a Start gate (Tapo, Will); "Suite" nomenclature off; Gen vs. CEM spec levels conflated in one dropdown (Will); tab iconography unclear; one stylized top-label font "out of place" (Will); Next/Previous button position must not shift with window size (Joe); data-rate model should be multi-select, and device profile vs. test plan are conflated on the DUT panel (Will).

**Exposure caveat:** prototype exposure varied wildly by session — Dallas/Tony saw it only "at a glance" by design; Joe's bench lacked his plugin; Chris saw it before recording started; Travis's session was almost entirely an existing-app/bench walkthrough with no direct prototype verdict on record (closest: "I definitely [would] update the GUI… the skin would be nice"). The *depth* of prototype validation is thinner than the session count suggests (see §9).

## 7. Competitive picture (as reported by AEs — unverified)

| Competitor | Signal |
|---|---|
| **Keysight** | ~80% high-speed market share (Nadir); usability unchanged ~20 years — stability as strategy (Will); benchmark for logs, results richness, in-app report preview (Tapo, ×4); same tree navigation as everyone (Joey — differentiation opportunity); **crucially: no measurement algorithms in the scope → cannot debug on-instrument** (Dallas/Tony). |
| **Teledyne LeCroy** | "Best TX compliance software" (QualiPHY) and the only combined TX+RX interface (Nadir); registry-style settings tree is their weakness (Chris B); same waveform-naming flaw as Tek (Chris B). |
| **Rohde & Schwarz** | Laptop-hosted, USB-only — disliked; on-scope testing is a Tek moat (Nadir); redundant run buttons anti-pattern, but good multi-run report picking (Chris B). |
| **Anritsu** | Sells around a gap: recommends a cheap third-party DUT toggle box Tek doesn't offer (Will). |
| **Clarius (internal)** | Merged status+results, connectivity LED, praised UI — commercially failed; "the best thing about it is that it works"; 13 licenses to migrate (Will). Cautionary + harvestable. |

**The claimed kill shot** (Dallas/Tony): exporting a scope session (.TSS with measurement, limits, waveforms) from a failed result for the technician → SI-engineer debug handoff — "No one does that. We would win based on that." Because Tek's algorithms run in the scope and Keysight's don't, this is structurally hard to copy. Flagged as the highest-leverage *new feature* concept from the round.

**Continuity with prior corpus signal:** NVIDIA's "Gen4 was late by Tek, we moved to KS" ([India VOC deck](../../corpus/sources/tek-express/decks/india-customer-voc-2023-march/empathy-map-nvidia.md)) and Intel's "break the monopolistic barrier" ([Designcon deck](../../corpus/sources/tek-express/decks/designcon-2023-voc-summary/empathy-map-intel.md)) still frame the stakes: time-to-market and cross-vendor reality, not feature polish, decide compliance business. Nadir's "ship fast > polish" and staged-rollout advice matches.

## 8. Connections to prior open questions (April 2026 session)

From [ux-feedback-and-open-questions](../../corpus/sources/tek-express/walkthroughs/ux-feedback-and-open-questions.md):

- **Chart library decision** — still open; this round adds pressure (plots surfaced in results/reports asked by Dallas/Tony; Keysight richer-results benchmark from Tapo) but no new decision input.
- **Half-screen docking** — no AE this round raised docking; Will instead anchored a **1024×768 floor**. The April question stays open but drops in urgency relative to the density floor.
- **Density** — Patterson's "so many settings in a small space" is now sharpened: design against 1024×768 (Will) while scale-proofing for PCIe growth (Joey).
- **Composite controls** — not raised directly, but the settings-tiering asks (spec-locked vs. user-editable, grayed limits editor behind a user-defined toggle) imply labelled-input composites with lock/warning states.

## 9. Coverage gaps and method notes

- **Travis Berger's session was re-recorded and recovered** — the first attempt captured only ~2 min of mic setup; the Pt2 re-record (1:14:53, same day) is fully processed into 4 chunks. It is the only session with per-cue timestamps. His prototype exposure, however, was near-zero (see §6) — facilitators called it "my favorite session yet," but it's an existing-app deep-dive, not prototype validation.
- **Joe's session truncated at 9:35** — bench lacked the DDR plugin and TekExpress hung at launch; mostly verbal recall; a follow-up was agreed in-session and should be scheduled. **DDR/memory is the outlier plugin** (spec-less, probe-centric — "the DDR version is kind of the only one that's assuming you're using the probes") and currently has near-zero prototype validation. A redesign validated only on spec-driven plugins (USB/DP/PCIe) will miss memory.
- **Prototype exposure was uneven** (see §6) — treat "no negative prototype reactions" in several sessions as *absence of exposure*, not endorsement. A second, prototype-centric round with hands-on tasks is the natural next study.
- **Single-mic attribution** — every quote's speaker is inferred; each corpus chunk flags its own uncertainty. The Dallas+Tony session was originally filed as "Dallas and Jesse"; Bryan corrected the names (2026-07-28), and the transcript's in-session "Tony" references corroborate the corrected pairing. Quotes there are still attributed by role (veteran AE / second AE). Confirm identities before quoting externally.
- **Names/terms normalized from garbled transcription** throughout (e.g. "skippy"→SCPI, "Eastside"→Keysight); per-chunk Confidence notes list them. Two remain unresolved: "Bidify"/"Riddick" (competitor/product names).
- Habit ≠ approval (Tapo, endorsing Bryan's framing): lack of complaints about the current UI is not evidence it's good — but the inverse holds for the preserve-list, which AEs defended *unprompted*.

## 10. Open decisions

Explicitly unresolved — needs an owner, not silent resolution:

1. **"User-defined" vs. "Debug" mode naming.** Debated live (veteran prefers Debug; second AE defends User-defined via early-silicon compliance users). Suggestion from the room: put it to a vote. Touches T1's persistent mode indicator copy.
2. **How literally to match TekScope.** Shared palette only, or shared component idioms too? And the flat-vs-hierarchy reading in §5 — validate with a TekScope-styled prototype variant before committing tokens. DS-level decision (token values for dark-default grays/greens).
3. **Results/Status: merge vs. column-level parity.** Merge (Chris, Clarius precedent) vs. keep Results for multi-run report workflows (Chris's own counterpoint via R&S). 
4. **Data-rate/preset selection model.** Multi-select vs. per-rate tabs vs. table (Joey tentative, Will multi-select, Dallas/Tony list-rows) — needs a design spike against real PCIe Gen-7-scale content.
5. **Chart library** (carried from April, still undecided, still the biggest DS gap for this product family).
6. **Report format roadmap** — PDF keeps, CSV guaranteed, HTML preview? Markdown? Who owns killing MHT?
7. **1024×768 floor vs. container-breakpoint responsiveness** — reconcile Will's floor with the DS's container-breakpoints commitment; define the tested resolution matrix.
8. **Scope-session debug export (.TSS handoff)** — pursue as differentiator? Needs product + engineering feasibility read; the claim it's uncopyable rests on algorithm-in-scope architecture.
9. **DDR/memory validation plan** — when and how the outlier plugin gets prototype coverage (Joe follow-up + dedicated memory-workflow review).
10. **Automation parity contract** — what's the mechanism (SCPI-per-action? scripting API freeze?) and who signs off per screen? Scope it against Travis's <20%-automation datapoint: parity floor for scripters, not the majority workflow.
11. **Launcher / global-settings layer** (Travis's structural proposal, R&S-pattern) — pursue as a real architectural layer above the per-standard apps, or satisfy it with placement fixes inside the current shell (P0.4)? Changes the IA scope of the redesign materially; needs product + engineering weigh-in before design commits either way. Related reliability/platform facts surfaced with it: 7-series channel defaults, LAN detection flakiness, licensing as the on-scope decider.

## 11. Per-AE evidence index

| AE | Date | Duration | Corpus chunks |
|---|---|---|---|
| Will Teverovsky | 2026-07-13 | 1:38:12 | [dut-panel-and-data-rates](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-dut-panel-and-data-rates.md) · [test-selection-and-contextual-help](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-test-selection-and-contextual-help.md) · [acquisitions-presets-status-and-results](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-acquisitions-presets-status-and-results.md) · [session-files-options-and-program-context](../../corpus/sources/tek-express/walkthroughs/ae-will-teverovsky-session-files-options-and-program-context.md) |
| Tapo Parua | mid-July 2026 (undated) | — | [workflow-and-settings-architecture](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-workflow-and-settings-architecture.md) · [prototype-ui-feedback](../../corpus/sources/tek-express/walkthroughs/ae-tapo-parua-prototype-ui-feedback.md) |
| Joey Chiu (+ drop-in field AE) | 2026-07-14 | 38:11 | [pcie-backward-compat-scaling](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-pcie-backward-compat-scaling.md) · [dut-id-limits-and-prototype-reaction](../../corpus/sources/tek-express/walkthroughs/ae-joey-chiu-dut-id-limits-and-prototype-reaction.md) |
| Nadir Kahn | 2026-07-14 | 23:17 | [pain-points-and-automation](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-pain-points-and-automation.md) · [competitive-landscape-and-visual-direction](../../corpus/sources/tek-express/walkthroughs/ae-nadir-kahn-competitive-landscape-and-visual-direction.md) |
| Chris B | 2026-07-15 | 23:49 | [setup-waveforms-and-run-modes](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-setup-waveforms-and-run-modes.md) · [reports-and-rerun-workflow](../../corpus/sources/tek-express/walkthroughs/ae-chrisb-reports-and-rerun-workflow.md) |
| Dallas + Tony | 2026-07-15 | 1:19:17 | [session-context-and-overall-reactions](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-session-context-and-overall-reactions.md) · [setup-flow-friction](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-setup-flow-friction.md) · [compliance-mode-and-test-selection](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-compliance-mode-and-test-selection.md) · [instruments-sessions-results-debug](../../corpus/sources/tek-express/walkthroughs/ae-dallas-tony-instruments-sessions-results-debug.md) |
| Joe Swelland | 2026-07-15 | 9:35 (truncated) | [ddr-memory-feedback](../../corpus/sources/tek-express/walkthroughs/ae-joe-swelland-ddr-memory-feedback.md) |
| Travis Berger | 2026-07-15 | 1:14:53 (re-record; first attempt failed at 2:08) | [bench-setup-and-instrument-connection](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-bench-setup-and-instrument-connection.md) · [launcher-global-settings-and-setup-flow](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-launcher-global-settings-and-setup-flow.md) · [status-results-sessions-and-run-window](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-status-results-sessions-and-run-window.md) · [run-environments-adoption-and-reports](../../corpus/sources/tek-express/walkthroughs/ae-travis-berger-run-environments-adoption-and-reports.md) |
