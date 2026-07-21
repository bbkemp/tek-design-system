---
provenance: observed
class: walkthrough
product: tek-express
flow_id: configuration-user-traps-and-cockpit-view
flow_title: The two-layer configuration user trap and the WPF-era "cockpit view" prototype
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~5 min (segment ~35:15 – ~39:57 of a 1h 1m meeting)
transcript_source: "uploads/transcripts/AU VoC Sync up.docx"
screens_visited: [setup-test-selection, setup-test-selection-config]
applies_to: [tek-express]
related_screens: [setup-test-selection, setup-test-selection-config, setup-preferences, setup-dut]
related_apis: []
related_hardware: []
---

# The two-layer configuration user trap and the WPF-era "cockpit view" prototype

## Summary

The most screen-specific segment of the meeting. Driving Bryan's TekExpress prototype live, Subhasis identifies the **configuration user trap** in today's TekExpress: test configuration is split across **two layers** (global/general parameters vs measurement-specific settings) opened in **separate windows**, and the measurement-specific configure surface is only discoverable after highlighting a test in the selection list. He recounts the **"cockpit view" prototype** he built with engineering ~10 years ago when WPF arrived — pulling the configure panel out into a persistent three-pane, Outlook-style layout timed to the arrival of widescreen resolutions. He explains the two-layer settings model with a **time-zone analogy** (phone picks up the global zone automatically; the laptop must be configured per-device). Bryan asks for the old cockpit-view wireframes and clarifies that the prototype being driven is illustrative, not functionally accurate.

## Goal

Show the AU UX team the known setup-workflow trap in TekExpress test configuration and hand over the historical design response (cockpit view) so the redesign doesn't rediscover it from scratch.

## Starting state

Subhasis has just closed the competitive dimension-by-dimension walkthrough ([competitive-deployment-licensing-and-status-value.md](./competitive-deployment-licensing-and-status-value.md)). He now shifts to "Set up workflow" and begins driving Bryan's prototype (the build Arpita had shared with him earlier), starting from test setup.

## Steps

### 1. The WPF-era prototype backstory (~35:15 – 35:53)

> *"So I had actually built a prototype along with the team when WPF had come in around six years back. I was an engineering manager for the TEK space platform. Sorry, 10 years back. I got a view where you might be seeing some user, perhaps in Tek Express, that when you select a test. You usually need to go one level inside. and then select the test configuration."* — Bera

The known workflow depth problem: **select a test → go one level inside → then reach test configuration.** Screen: [setup-test-selection.md](../screens/setup-test-selection.md).

### 2. Driving the prototype to the configure trap (~35:53 – 36:53)

> *"Let me, this is what Arpita had shared with me earlier. Now, suppose I go to test selection. Yeah, so I go to test setup. … So, these logs and all are fine. Let's talk now. Next, okay. Let's say I select this measurement. I go to configure. Now it opens a new window in existing Tek Express. I think there are two configure windows, one that opens up inside and then you open like general set tests. Oh, there are two configurations. One is general parameters, one is, you know, specific to that test. This is specific to the test. We felt there is a user trap there. Until unless you click on highlight that test, you won't be seeing the configure."* — Bera

**The trap, decomposed:**

1. Configure opens a **new window** over the main flow.
2. There are **two configure surfaces**: general parameters vs test-specific settings — easy to conflate.
3. The test-specific configure is **invisible until the test row is highlighted** — configuration discoverability depends on selection state.

Screens: [setup-test-selection.md](../screens/setup-test-selection.md) → [setup-test-selection-config.md](../screens/setup-test-selection-config.md).

### 3. The cockpit-view response (~36:53 – 37:23)

> *"What we did was we pulled this out to the side and make it a cockpit view, like Outlook, the extension of when you have Outlook, right? I just called it our cockpit view where you can see everything in one shot. Because that is the time we started getting the widescreen resolution in the market."* — Bera

> *"Yeah, do you have any artifacts of that? Do you have like any wire frames or images?"* — Kemp (37:04)
>
> *"I worked with Hemant in the past when he was an engineer, so I'm still looking for that. It's actually three-layered like Outlook. I'll give you that. I we had that."* — Bera
>
> *"That'd be awesome. Yes, thank you. Yes, I would love, I would love to understand that more."* — Kemp

**Cockpit view** = the configure panel pulled out of its modal window into a persistent side pane; a **three-pane Outlook-style layout** ("three-layered like Outlook") showing selection and configuration "in one shot". Motivated by widescreen displays becoming standard. Built with an engineer named **Hemant**; Subhasis commits to digging up the wireframes.

### 4. Global vs measurement-specific settings — the time-zone analogy (~37:23 – 39:57)

> *"Yeah, this is a global setting. So global setting also resides in a different window. Then you have specific to the measurement. The problem here in this view, guys, this is a user trap. I will tell you why. I selected this measurement in Tek Express. If you click on this measurement, it will actually at the bottom show configuration. If I'm not wrong, I may be wrong. I have not used it in the recent times, but when you say so, this is a test I have selected, right? … When I say, configure the test. It should actually only configure that for that specific test. That's how it works. So you do have global settings. which applies to everything. But there are some measurements settings which apply specifically to this test."* — Bera

> *"When I. change a time zone when I fly to US, my phone picks up the global time to be on that time zone. But when I open my laptop, I have to sometimes configure on Dell saying that I'm in a different time zone. That's how it works. It's specific and it's global."* — Bera

> *"So global is for everything I do with that display port software and that box. Like I'm going to use channel one only to acquire display port. So the global setting will be set to channel one. The address of the instrument will be a global setting. But when I come to a test, the settings might be totally different."* — Bera

**The settings model:**

| Layer | Scope | Examples |
|---|---|---|
| **Global settings** | Everything the app does with that instrument | Acquisition channel (e.g. channel 1 for DisplayPort), instrument address |
| **Measurement settings** | One selected test only | Test-specific parameters |

Both layers exist today but live in **separate windows** with selection-state-dependent visibility — the structural source of the trap.

Bryan interjects mid-demo to bound the prototype's fidelity:

> *"This is perfect. Yeah, I, to be clear, this functionality is not going to be accurate. If you think we're we, I don't think this is accurate. I'm not relying on this to be accurate, just so you know."* — Kemp (38:25)
>
> *"No, no, I'm just giving you an example. I know, but in Tek Express, it works fine. I remember that if I select the measurement, it opens that specific conflict for that measurement at a certain point. It's called the measurement settings. There is 2 layers of settings."* — Bera

## Friction notes

- **Configure opens a new window** over the setup flow — modal interruption of the wizard.
- **Two configuration surfaces (general vs test-specific)** with no persistent simultaneous visibility; users conflate the layers.
- **Selection-state-gated discoverability**: *"Until unless you click on highlight that test, you won't be seeing the configure."* A user who hasn't highlighted a row cannot find test-specific configuration at all.
- **One-level-deep navigation to reach configuration** — the select-then-descend pattern Subhasis has been trying to flatten since the WPF era.
- **Global settings live in yet another window**, compounding the layer confusion.

## Annotations

> *"We felt there is a user trap there."* — Bera

"User trap" is Subhasis's recurring term for a discoverability dead-end; Bryan picks it up later (~40:25) as the category of finding he wants mined from future recorded walkthroughs. Worth adopting as shared vocabulary in redesign audits.

> *"I just called it our cockpit view where you can see everything in one shot. Because that is the time we started getting the widescreen resolution in the market."* — Bera

**A decade-old, engineering-built answer to the exact problem the redesign now faces.** The cockpit view is prior art from inside Tek: persistent three-pane selection + configuration. If the wireframes surface, they belong in the corpus as an artifact.

> *"It's specific and it's global."* — Bera (time-zone analogy)

The phone-vs-laptop time-zone analogy is the cleanest articulation of the intended settings mental model — global should inherit automatically; specific should override locally and visibly.

## Cross-references

- **The trap's screens as documented today**: [setup-test-selection.md](../screens/setup-test-selection.md), [setup-test-selection-config.md](../screens/setup-test-selection-config.md), [setup-test-selection-limits-editor.md](../screens/setup-test-selection-limits-editor.md).
- **Global-settings surfaces**: [setup-preferences.md](../screens/setup-preferences.md), [setup-acquisitions.md](../screens/setup-acquisitions.md) (channel assignment is a named global example).
- **Immediately upstream**: [competitive-deployment-licensing-and-status-value.md](./competitive-deployment-licensing-and-status-value.md) — Keysight information-architecture lead that frames this deep-dive.
- **Immediately downstream**: [prototype-feedback-loop-and-voc-synthesis-history.md](./prototype-feedback-loop-and-voc-synthesis-history.md) — Bryan's plan to systematize exactly this kind of user-trap capture via recorded walkthroughs.
- **AE-interview corroboration of settings-architecture pain**: [ae-tapo-parua-workflow-and-settings-architecture.md](./ae-tapo-parua-workflow-and-settings-architecture.md), [ae-travis-berger-launcher-global-settings-and-setup-flow.md](./ae-travis-berger-launcher-global-settings-and-setup-flow.md).

## Pending references

- **Cockpit-view wireframes / images** — Subhasis is "still looking"; built with **Hemant** ~10 years ago on the WPF platform. If found, intake via `corpus/_inbox/` as a tek-express artifact.
- **The prototype build being driven** — Bryan's TekExpress prototype shared via Arpita; lives in this repo's prototype drops, not in the corpus. No corpus entry needed, but this segment records its first PM-driven review.

## Confidence notes

- **"TEK space platform"** (~35:15) is preserved as transcribed; almost certainly the **TekExpress platform** (mis-transcription). The timeline self-corrects from "six years back" to "10 years back" — the later figure is Subhasis's correction and is used here.
- **Subhasis hedges his memory of current behavior**: *"If I'm not wrong, I may be wrong. I have not used it in the recent times."* The two-layer settings description matches the documented screens, but his click-by-click account is memory, and the on-screen artifact being driven was Bryan's **illustrative prototype, explicitly not functionally accurate** (Kemp, 38:25). Verify trap details against a live TekExpress session before treating them as pixel-level fact.
- **"opens that specific conflict"** (~38:37) — transcription artifact, read as "specific config".
- **Hemant** — surname not given; identity unverified.
- Steps in this chunk track what Subhasis *narrates while driving the prototype*; `screens_visited` maps his narration onto the corresponding documented legacy screens rather than literal prototype screenshots.
