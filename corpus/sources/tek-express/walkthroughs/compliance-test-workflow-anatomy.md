---
provenance: observed
class: walkthrough
product: tek-express
flow_id: compliance-test-workflow-anatomy
flow_title: "Compliance Test Workflow Anatomy — Framework vs. Application Layer"
recorded_by: "Tapo (application engineer / SME; former TekExpress application developer)"
recorded_date: null
duration: null
transcript_source: "uploads/transcripts/tek-express-prototype-sme-review-tapo-2026-07.txt"
screens_visited: []
applies_to: [tek-express]
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences, results, reports-configuration]
related_apis: []
related_hardware: []
related_modules: []
---

# Compliance Test Workflow Anatomy — Framework vs. Application Layer

## Summary

First segment of the first SME review session of the TekExpress prototype (`prototypes/tek-express/`). Before giving UI feedback, Tapo — an application engineer who previously developed TekExpress compliance applications — walks through how every TekExpress compliance app is structured: the guided-simplicity differentiator, the framework-vs-application-layer split, DUT-panel semantics and the "first panel" settings-placement pressure, the universal setup → test selection → acquire → analyze → report sequence, scope communication, and 20 years of accumulated look-and-feel drift. This is the deepest architectural explanation of TekExpress in the corpus so far, from someone who built the applications.

## Goal

Give the design-system team the mental model of how TekExpress compliance applications actually work — what is generic framework behavior vs. per-application customization — before critiquing the prototype UI.

## Starting state

The TekExpress prototype open in front of Tapo, dark theme, prototype-only "tweaks panel" available for switching display types. Bryan frames the session: *"this is basically just the UI kind of rescan [re-skin]. So not much functionality changes… really just kind of like encourage you to like click around and hear your thoughts and kind of think out loud."*

## Steps

**Step 1 — TekExpress's differentiator is guided simplicity.** Tapo opens with what the product stands for competitively.
- *"Take express, traditionally, it standouts compared to other vendors, is in the matter of simplicity, and the way it guides the user to run a test run… like this is something take express stands out."* (Named competitors transcribed as "Eastside or Lecroix" — Keysight and LeCroy.)

**Step 2 — The Clarius redesign eroded that intuitiveness, per field-AE interviews.** A cautionary precedent for this redesign.
- *"When you did the Clarius thing, some of those workflow got changed… we have done actually interviews with field [AEs] who use our software. And they felt that there is a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have. Almost… the wizard kind of model, like, go next, next, next, next, and then click run, and then everything happens."*

**Step 3 — The middle content area is the per-application customizable region; the framework supplies panels and flow of execution.** Screen: the prototype's setup content area (legacy analogue: [setup-dut](../screens/setup-dut.md)).
- *"There's a framework that runs, which gives you the panels, which gives you kind of the flow of execution, and the application teams basically plays with the specific settings that they need to run a test."* Settings differ per technology — HDMI, DisplayPort, USB apps ship as different installations — *"the settings that is required to run a test from one application to another, that changes a little."*

**Step 4 — DUT panel semantics: device characteristics only.** (Transcribed throughout as "dirt panel" / "the dot".) Screen: [setup-dut](../screens/setup-dut.md).
- *"So you have a [DUT] panel… this talks about the device. So if certain standards have certain device features… do we have this device SSC capable?… Is it a type C device? It is a normal device?… these are device characteristics that's specific to the technology."*

**Step 5 — The "first panel" pressure corrupts settings segregation.** The most candid developer-experience note of the session.
- *"Although some settings may not fit into the [DUT] panel, but because it is the 1st panel that the user sees, a lot of [AEs] kind of pushes that, okay, I need these settings to be available on the 1st panel so that you should not miss out on it… then what happens is like the segregation of settings that we have done here, that kind of goes for a toss."* Example: *"If you really have like a cable filter that you want to apply, which is like nothing to do with the device, it is just like analysis related settings… I should not necessarily be putting in the [DUT] panel, but there are requests that, okay, because that is an important setting… you just put it there."*
- He wants UX to arbitrate now that one exists: *"Sometimes we need to take that call as a developer or maybe now, since there is a [UX team] and since there is people who can kind of guide this kind of principles, we may have to run this design through them."*

**Step 6 — The universal three-step (plus report) anatomy of any compliance app.**
- *"Any compliance application, there are like 3 basic steps that you follow… First thing you need to set up the test environment"* — device type (Type-C vs. normal, card vs. host), SSC enable/disable, presets, lanes. Screen: [setup-dut](../screens/setup-dut.md).
- *"Once that setup is done, then you move next to the test selection… you'll see a test tree somewhere… I just may want to run a couple of tests."* Screen: [setup-test-selection](../screens/setup-test-selection.md). Test selection is dependent on DUT settings: *"If you disable the SSC, this [SSC-related] measurement… just get grayed out."*
- *"Until up until this point, there is nothing happening [on the scope]… The actual work starts when you [hit] the start button… You acquire a bunch of signals, and save it as [waveforms], and then you analyze those [waveforms]. That is the 3rd step, and the [4th] step is… report them out. Part of it you show live on the UI screen and then there is a PDF or another extension [report] that you kind of create out."*

**Step 7 — Live vs. recorded (prerecorded) sessions.**
- *"In the recorded mode, the waveforms are already available, so you just load it and do the analysis, but in a live session, you do settings, then the system will acquire your waveforms."*

**Step 8 — Scope communication: SCPI/PI commands; waveforms are physical `.wfm` files saved by the scope.**
- *"There are like physical files, like [.WFM] extension… that job is done by the oscilloscope… It communicates to the scope using PI commands, or the [SCPI] commands… if I am telling, like, I want to capture a [waveform] which is like a 10 M record length… and a [~25 GS/s] sample rate… all these things needs to be set in the scope… once the setting is done, then it tells the scope that now you can [acquire] the waveform."*

**Step 9 — Three classes of measurement engines.**
- *"The measurement can be internally written in the Tek Express itself. It can be the base scope measurements like… the jitter [measurements] and the eye measurements… or also you can use 3rd party, like Intel supports a tool called [SigTest], which is kind of the recommended tool by the consortium… for compliance testing, you have to use [SigTest], you cannot use any other. So those also are integrated within Tek Express… you can think of like a black box. It does the calculation, it [gives] out the result, then you read the result and put it in your [report]."*

**Step 10 — Why TekExpress over customers' own automation scripts.** Answering the interviewer's "manual scope setup vs. TekExpress" question.
- *"In a lot of cases, people do have their own automation script that they use to set up the scope… What [Tek] Express brings is like, you can just click one button and it automatically does all those settings for you… for example, this measurement should only be run if you have [4,000,000] UI captured. So for capturing that, I may have to go and do a bunch of settings in the scope manually… instead, if you run Tek Express, [it will] automatically do the setting."*

**Step 11 — The framework/application contract, restated precisely.**
- *"The framework itself will have… the layer that talks to the scope. Now the application just feeds that layer and then that layer kind of does the job… acquiring the waveform, saving them, then loading them on scope, all these things are generic Tek Express feature, a framework feature. Applications do not interfere in those… 'This is my setting. Now, you know rest what you need to do.' And once you are done acquiring the waveform, 'I will load my measurements and I will get the results.' That is what the application layer does."* The workflow is *"90% same in any application"*.

**Step 12 — Cross-application workflow consistency is a customer expectation, not a nicety.**
- *"Some customers, they have multiple compliance applications running in their lab… they have [DisplayPort], USB, and Thunderbolt, all three. Now, they expect that the workflow remains same. So they do not have to put more energy into learning two, three, 4 different kind of workflows… any Tek Express application, if you see, from a very high level, it all looks the same."*

**Step 13 — 20 years of drift; the redesign is the chance to re-standardize.**
- *"[TekExpress] started out 2007 or something. It's like almost 20 years old [software] now… because so many developers have [churned], so many projects happen on multiple application and technologies… in some places that standard look and feel kind of got a bit [distorted]. Someone putting the filter selection here, someone another place. So it's kind of a lot of learning for the [user]. So that may be something we can fix here with a new design."*

## Friction notes

- **The DUT panel is a dumping ground.** AE pressure pushes non-device settings (e.g. analysis-side cable filters) onto the first panel because it's the most visible, breaking the intended segregation — *"the segregation of settings that we have done here, that kind of goes for a toss."* Tapo explicitly asks for UX principles to arbitrate placement.
- **Clarius lost the free-flowing wizard feel.** Field AE interviews report *"a lack of that intuitiveness or that the free flowing nature of Tek Express, what it used to have."* This is first-hand corroboration of the Clarius cautionary tale from the 2026-06-23 AU VoC session.
- **Per-app look-and-feel drift.** Same control (e.g. filter selection) lands in different places in different applications after 20 years and many teams — a per-application learning cost the design system can eliminate.

## Annotations

- **Framework vs. application layer is the load-bearing architecture.** The framework owns panels, flow of execution, scope communication (SCPI), acquisition, and waveform save/load; applications contribute settings and measurements only. Any redesigned panel chrome, wizard, or status surface is therefore *framework* real estate — build it once, every compliance app inherits it.
- **Setting interdependency is structural.** DUT-panel settings gate the test tree (SSC disabled → SSC measurements grayed out). This is the mechanism behind the cross-panel change-notification ask in [prototype-review-navigation-help-and-visual-cues](./prototype-review-navigation-help-and-visual-cues.md).
- **SigTest is a hard external constraint.** For some standards the consortium mandates Intel's SigTest as the analysis engine; TekExpress wraps it as a black box. Result-display redesign cannot assume Tek controls measurement output shape.
- **Tapo's dual background** (developer of these applications → application engineer) makes him a rare both-sides SME: he articulates the AE pressure *and* the developer cost of yielding to it.

## Cross-references

- The legacy 4-step Setup wizard this maps onto: [setup-dut](../screens/setup-dut.md) → [setup-test-selection](../screens/setup-test-selection.md) → [setup-acquisitions](../screens/setup-acquisitions.md) → [setup-preferences](../screens/setup-preferences.md). (Tapo enumerates five panels for his applications: *"we have [DUT], then you are going to test selection, then you have acquisition, configuration, and [preferences]"* — the Configuration panel exists in product-specific apps, cf. the DDR5 manual's [setup-configuration](../docs/tek-express-ddr5-tx-user-manual/setup-configuration.md).)
- SCPI command surface: [scpi-commands](../docs/tek-express-ddr5-tx-user-manual/scpi-commands.md).
- The Clarius cautionary tale first appears in [personas-and-jobs-to-be-done](./personas-and-jobs-to-be-done.md) (Subhasis, 2026-06-23); Tapo independently corroborates it here with field-AE interview evidence.
- The wizard model and framework demo: [tek-products-walkthrough](./tek-products-walkthrough.md) (Pranavi's 2026-04-23 demo).
- Session's UI-feedback segments: [prototype-review-logs-results-and-reporting](./prototype-review-logs-results-and-reporting.md) and [prototype-review-navigation-help-and-visual-cues](./prototype-review-navigation-help-and-visual-cues.md).

## Pending references

- **Field-AE interview material on Clarius workflow regressions** — Tapo says interviews were done; the raw material is not in the corpus.
- **Rework / user-defined mode with custom limits** — described in the reporting segment of this session; the legacy [setup-test-selection-limits-editor](../screens/setup-test-selection-limits-editor.md) screen is the closest documented surface, but the non-compliance report watermark behavior is undocumented.
- **SigTest integration** — no corpus chunk documents the third-party analysis-engine integration.
- **Clarius** as a product — referenced repeatedly across two meetings now; no corpus subject exists for it.

## Confidence notes

- **Session date is not stated in the transcript.** Processed 2026-07-13; Bryan reports it as the *first* SME review session of the prototype, held on or shortly before that date. `recorded_date` left null.
- **No timestamps and no speaker labels in the source** — the auto-transcription is a single unlabeled stream. Speaker attribution (Tapo vs. Bryan vs. a third UX participant taking notes) is inferred from content and is confident for the long SME explanations, less so for short interviewer interjections.
- **Heavy ASR garbling; bracketed interpretations added.** Glossary of recurring mis-transcriptions: "dirt panel" / "the dot" / "death panel" / "duty selections" → **DUT panel/selections**; "Eastside" / "Keyside" / "key site" → **Keysight**; "Lecroix" → **LeCroy**; "sick test" → **SigTest**; "PI commands or the skipping commands" → **PI/SCPI commands**; "WWFM" / "my forms" / "iPhones" / "Wi-Fi" → **waveforms / .wfm files**; "SDMI" / "SDMA" → **HDMI**; "field days" → **field AEs**. "2 LGSTS sample rate" is read as a GS/s sample rate (exact value unrecoverable). "CIU technology" (in the multi-app customer example) is unrecoverable.
- "Tapo" is the name as provided by the session organizer; full name and exact title not stated in the transcript.
- The "Rita" Tapo says he spoke with recently is plausibly **Arpita Jogdand** (AU UX team, participant in the 2026-06-23 session) — inferred, not stated.
