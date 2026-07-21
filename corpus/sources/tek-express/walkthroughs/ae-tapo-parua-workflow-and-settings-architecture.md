---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-tapo-parua-workflow-and-settings-architecture
flow_title: "AE SME Session (Tapo Parua) — TekExpress Workflow Architecture and Settings Placement"
recorded_by: "Tapojyoti \"Tapo\" Parua (Application Engineer); Bryan Kemp (facilitator)"
recorded_date: null
duration: null
transcript_source: "uploads/transcripts/TapojyotiParua.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences, status-test-status]
related_apis: []
related_hardware: []
related_modules: []
---

# AE SME Session (Tapo Parua) — TekExpress Workflow Architecture and Settings Placement

## Summary

First SME review session for the new Tek Express UI prototype, with Application Engineer Tapojyoti "Tapo" Parua (formerly a developer on the TekExpress applications), facilitated by Bryan Kemp. This chunk covers the first half of the session: Tapo's reaction to the prototype at first look, and — mostly — the deep existing-app context he volunteers: what TekExpress's market differentiation is, the universal 3–4-step compliance workflow, the DUT panel's intended role, the organizational pressure that erodes settings segregation, the framework-vs-application-layer architecture, how TekExpress automates the oscilloscope, and 20 years of accumulated look-and-feel drift. The prototype-specific UI feedback continues in [`ae-tapo-parua-prototype-ui-feedback`](./ae-tapo-parua-prototype-ui-feedback.md).

## Goal

Capture an experienced AE/former developer's mental model of how TekExpress works and why it is structured the way it is, as grounding for the prototype redesign.

## Steps

**Step 1 — Bryan frames the session: prototype reaction, think-aloud.** The prototype has a tweaks panel for switching display types (prototype-only, not planned for the product) and an unfinished light mode.
- *"This is basically just the UI kind of rescan [redesign]. So not much functionality changes."*
- *"This little tweaks panel down here … you can change the different display types. … This is just for the prototype."*
- *"Really just kind of like encourage you to like click around and hear your thoughts and kind of think out loud … how it looks, how it functions. There is a light mode that is not good yet, but we'll fix that."*

**Step 2 — Tapo states what TekExpress stands out for: guided simplicity.** He immediately anchors the review in the product's core value proposition rather than visuals.
- *"Tek Express, traditionally, it standouts … compared to other vendors … in the matter of simplicity, and the way it guides the user to run a test run."*
- *"Almost … the wizard kind of model, like, go next, next, next, next, and then click run, and then everything happens. So that is something … Tek Express … stands out for."*

**Step 3 — Tapo recalls field-engineer feedback that a prior redesign ("Clarius") eroded that intuitiveness.**
- *"When you did the Clarius thing, some of those workflow got changed. And of course, there would always be a friction too, you know, [when you] push a new software. But … we have done actually interviews with field [engineers] who use our software. And they felt that there is a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have."*

**Step 4 — First impression of the prototype: familiar structure, new color theme.**
- *"By the look of it, it looks almost similar to the current Tek Express, just the color theme has changed here."*

**Step 5 — Tapo explains the framework/application split behind the center panel.** The middle content area is the per-application customizable region; the framework supplies the panel structure and flow of execution.
- *"There's a framework that runs, which gives you the panels, which gives you kind of the flow of execution, and the application teams basically plays with the specific settings that they need to run a test."*
- *"The settings that is required to run a test from one application to another, that changes a little"* — e.g. HDMI vs. DisplayPort vs. USB applications, installed as separate plugins.

**Step 6 — The DUT panel's intended role: device characteristics only.** (Transcribed throughout as "dirt panel" / "dot panel" — see Confidence notes.)
- *"[DUT] panel means like, this talks about the device. … Is it a Type-C device? It is a normal device … these are device characteristics that's specific to the technology. … All those things we kind of capture in the DUT."*

**Step 7 — Tapo describes the organizational pressure that breaks settings segregation.** Speaking from his developer background: application teams push settings onto the first panel purely because it is seen first.
- *"I come from a development background also before moving into this AE role. I was a developer for these applications."*
- *"Although … some settings may not fit into the [DUT] panel, but because it is the 1st panel that the user sees, a lot of [application engineers] kind of pushes that, okay, I need these settings to be available on the 1st panel so that you should not miss out on it."*
- *"Then what happens is like the segregation of settings that we have done here, that kind of goes for a toss."*
- *"If you really have like a cable filter that you want to apply, which is like nothing to do with the device … I should not necessarily be putting [it] in the [DUT] panel, but there are requests that, okay, because that is an important setting … just put it there."*
- *"Maybe now, since there is a UX [team] … we may have to, you know, run this design through them and then based on that … either push it or … implement it."*

**Step 8 — Tapo walks the Setup area of the prototype and lays out the universal compliance workflow.** Setup panels: DUT → Test Selection → Acquisition → Configuration → Preferences. Any compliance application follows the same 3–4 steps.
- *"This is the setup area. … This is where the user will spend all his time before he goes and [hits] the start button."*
- *"Any compliance application, there are like 3 basic steps that you follow. … First thing you need to set up the test environment … Is it a Type-C device you are testing … Is it SSC enable[d]? … What all presets you want to select? What are lanes that you want to test on?"*
- *"Once that setup is done, then you move next to the test selection. … You have a number of tests … [in] a test tree somewhere … I just may want to run a couple of tests."*
- *"Until … this point, there is nothing happening inside. … The actual work starts when you [hit] the start button. … You acquire a bunch of signals, and save [them] as … waveforms, and then you analyze those [waveforms]. That is the 3rd step, and the [4th] step is … after analysis is complete … report them out. Part of it you show live on the … UI screen and then there is a PDF [or] another extension [report] that you kind of create."*

**Step 9 — Interdependency between DUT settings and Test Selection.**
- *"If you disable the setting called SSC … [the SSC-related measurements get] knock[ed] off from [the test tree] — just get grayed out. So that dependency is there."*

**Step 10 — How TekExpress drives the oscilloscope.** Waveforms are physical `.wfm` files saved by the scope; TekExpress automates the scope over SCPI.
- *"There are like physical files, like … WFM extension. … That job is done by the oscilloscope."*
- *"It communicates to the scope using [SCPI] commands … that is the protocol that it follows. … If I am telling, like, I want to capture a [waveform] which is like … 10 million record length, and a [certain] sample rate … all these things needs to be set in the scope. … Once the setting is done, then it tells the scope that now you can [acquire] the waveform."*

**Step 11 — Why TekExpress exists vs. hand automation.** Many customers have their own scope-automation scripts; TekExpress's value is one-button, standard-aware configuration.
- *"In a lot of cases, people do have their own automation script that they use to set up the scope. … What [Tek] Express brings is like, you can just click one button and it automatically does all those settings for you. You do not have to worry about that."*
- *"These settings are specific to … the standard … Like, for example, [a] measurement should only be run if you have 4 million UI captured. So for capturing that, I may have to go and do a bunch of settings in the scope manually … But instead, if you run Tek Express, [the] technology automatically do the setting."*

**Step 12 — Measurement/analysis layer: internal, base-scope, and third-party engines.**
- *"The measurement can be internally written in the Tek Express itself. It can be the base scope measurements — like our scope supports some base measurements like the jitter [measurements] and the eye measurements. … Or also you can use 3rd party — like Intel supports a tool called [SigTest], which is kind of the recommended tool by the consortium. … For compliance testing, you have to use [SigTest], you cannot use any other. So those also are integrated within Tek Express."*
- *"[SigTest] you can think of like a black box. It does the calculation, it [gives] out the result, then you read the result and put it in your [report]."*

**Step 13 — Framework owns scope communication; applications feed it settings.**
- *"The framework itself will have … the layer that talks to the scope. Now the application just feeds … that layer and then that layer kind of does the job."*
- *"Acquiring the waveform, saving them, then loading them … all these things are generic Tek Express … framework feature[s]. Applications do not interfere in those. They just … tell that this is my setting. … And once you are done acquiring the waveform, I will load my measurements and I will get the results. That is what the application layer does."*
- *"It is kind of … 90% same in any application … any compliance [application] on Tek Express."*

**Step 14 — Cross-application workflow consistency is a customer expectation.**
- *"Some customers, they have multiple compliance applications running in their lab. … If you take like a [CPU] technology, they have DisplayPort, USB, and Thunderbolt, all three. Now, they expect that the workflow remains same. So they do not have to put more energy into, you know, learning two, three, 4 different kind of workflows. … Any Tek Express application, if you see, from a very high level, it all looks the same."*

**Step 15 — Tapo names the drift problem the redesign can fix: 20 years of accumulated inconsistency.**
- *"Tek [Express], it started out 2007 or something. It's like almost 20 years old software now. So a lot of those things has kind of got [stale]. And … because so many developers have turned [over], so many projects happen on multiple application and technologies … in some places that standard look and feel kind of got a bit [eroded]. Someone putting the filter selection here, someone another place. So … it's kind of a lot of learning for the [user]. So that may be something we can fix here with a new design."*

## Annotations

- **TekExpress's differentiator is guided simplicity, per Tapo.** *"Tek Express, traditionally, it standouts … compared to other vendors … in the matter of simplicity, and the way it guides the user to run a test."* He names Keysight (transcribed "Eastside"/"Keyside") and LeCroy (transcribed "Lecroix") as the comparison vendors. The redesign's first job is preserving the wizard-guided flow.
- **A prior redesign already damaged this once.** Tapo: field-engineer interviews after "the Clarius thing" found *"a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have."* Direct precedent/warning for this redesign.
- **The settings-placement pressure is organizational, not technical.** Tapo (as former developer): application teams push settings to the DUT panel because it's seen first, and *"the segregation of settings … goes for a toss."* He explicitly welcomes a UX team as arbiter of these calls — a governance role for the design system, stated by the SME unprompted.
- **The universal 4-step compliance model** (setup → test selection → acquire → analyze/report) is *"90% same in any application."* This is the invariant the panel structure encodes; per-application variance lives only in the settings the framework hosts.
- **Framework/application layering:** the framework owns panels, flow of execution, and all scope communication (SCPI, `.wfm` acquisition); application plugins contribute settings and measurements (internal, base-scope like jitter/eye, or third-party consortium tools like Intel SigTest). UI changes to the shared shell propagate to every application.
- **Cross-application consistency is a customer expectation, not just aesthetics** — labs run DisplayPort + USB + Thunderbolt side by side and expect one workflow.
- **The 20-year drift diagnosis** — *"someone putting the filter selection here, someone another place"* — is Tapo's own framing of what the new design should fix: re-standardizing look and feel across application teams.

## Friction notes

- **Post-Clarius intuitiveness regression (field feedback, relayed):** *"They felt that there is a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have."*
- **Settings dumped onto the first panel:** *"Because it is the 1st panel that the user sees, a lot of [AEs] kind of pushes that, okay, I need these settings to be available on the 1st panel … then … the segregation of settings that we have done here … kind of goes for a toss."*
- **Buried settings on later panels:** *"On the other panels, they kind of need to, you know, go deep down … to find out where the setting is."*
- **Look-and-feel drift across 20 years of application teams:** *"That standard look and feel kind of got a bit [eroded]. Someone putting the filter selection here, someone another place. So … it's kind of a lot of learning for the [user]."*

## Cross-references

- The Setup panels Tapo walks (DUT, Test Selection, Acquisition, Configuration, Preferences) are documented from the shipped product in [`setup-dut`](../screens/setup-dut.md), [`setup-test-selection`](../screens/setup-test-selection.md), [`setup-acquisitions`](../screens/setup-acquisitions.md), and [`setup-preferences`](../screens/setup-preferences.md).
- The SSC-dependent test-tree graying Tapo describes concerns the test tree in [`setup-test-selection`](../screens/setup-test-selection.md).
- The framework-vs-application context matches Pranavi's demo in [`tek-products-walkthrough`](./tek-products-walkthrough.md) (plugin model, per-application settings variance).
- The second half of this session is [`ae-tapo-parua-prototype-ui-feedback`](./ae-tapo-parua-prototype-ui-feedback.md).

## Pending references

- **The Tek Express prototype itself** is not documented as corpus screens — `screens_visited` is empty because the session navigates the prototype, not the shipped app. If prototype states become corpus-documented (or audited), this chunk should cross-link.
- **"Clarius"** — the prior redesigned Tek software Tapo compares against (transcription of the name is uncertain). Not a corpus subject.
- **Keysight compliance applications** — named as the benchmark competitor; no competitor corpus subject exists for them yet (`keysight-<sku>/` pattern per corpus README).
- **Intel SigTest** — third-party consortium analysis tool integrated in TekExpress; not documented.
- **`.wfm` waveform files / SCPI command layer** — framework interfaces mentioned; no API corpus exists for TekExpress.

## Confidence notes

- **Speaker turns are unattributed** — single-microphone dictated auto-transcription, not a Teams export. Attribution above is inferred from context (Tapo = the SME explaining product internals; Bryan = facilitator framing the prototype and asking questions). A second note-taking facilitator may be present (a *"she's taking notes"* aside, and *"like I was telling Rita the other day"* — the name may be a mis-transcription, possibly of "Arpita"). Some short interjections could not be confidently attributed and were omitted rather than guessed.
- **Recording date is not stated anywhere in the content** — `recorded_date` is `null`. Session context (first SME review of the prototype) places it around mid-July 2026, but that is inference, not observation.
- **Heavy auto-transcription garbling.** Recurring mis-transcriptions were normalized in paraphrase but preserved in quotes with bracketed corrections: "dirt panel"/"dot panel" = **DUT panel**; "sick test" = **SigTest**; "PI commands"/"skipping commands" = **SCPI commands**; "iPhones" = **waveforms**; "Eastside"/"Keyside"/"key site" = **Keysight**; "Lecroix" = **LeCroy**; "take express"/"take a space"/"tech express" = **TekExpress**; "field days" = **field [engineers]**. Bracketed words inside quotes are editorial reconstructions of garbled audio, flagged here rather than silently corrected.
- The opening line of the transcript (Bryan describing the session and addressing an assistant) is meta-framing about processing the recording, not interview content — excluded from the flow.
- A garbled personal aside near the start (about the note-taker) is clearly a transcription error of innocuous small talk; skipped per the sensitive-info/small-talk rule.
- "HDMI" appears as "SDMI"/"SDMA" in the source; "Type-C" as "type C"; the "CPU technology" in the multi-app lab example is garbled ("CIU") — the DisplayPort/USB/Thunderbolt list is clear, the umbrella term is not.
- Step boundaries are editorial — the source has no timestamps and flows continuously; `duration` is `null` (not derivable).
