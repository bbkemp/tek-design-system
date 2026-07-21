---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-travis-berger-bench-setup-and-instrument-connection
flow_title: "AE Interview — Travis Berger: PCIe Bench Setup, Instrument Connection Friction, and Channel Defaults"
recorded_by: "Travis Berger (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:14:53 (session total; this chunk covers ~00:00–13:00)"
transcript_source: "uploads/transcripts/TravisBergerPt2.vtt"
screens_visited: [setup-dut, setup-acquisitions]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-acquisitions, options-dropdown, setup-test-selection]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Travis Berger: PCIe Bench Setup, Instrument Connection Friction, and Channel Defaults

## Summary

Opening segment of the 2026-07-15 AE feedback session with Travis Berger (re-recorded after a failed ~2-minute first attempt earlier the same day). Travis narrates a live PCIe Gen 3 transmit-compliance bench: the compliance baseboard (CBB), riser/load board, DUT (a 4-lane network card), and the AFG function generator that toggles compliance patterns. He walks the instrument-connection process — where LAN-connected instruments often fail to auto-detect in TekExpress and he falls back to an external tool or USB — then reviews the DUT/setup panel. His headline setup-level ask: TekExpress defaults acquisition channels to 1 and 3 (a shared-hardware constraint from older scope platforms) even on the 7 series where no resources are shared, and there is no global setting to change the default. The segment closes on whether cascading cross-panel settings confuse him (mildly, on the more complex standards).

## Goal

Capture the AE's real bench workflow for PCIe transmit compliance — physical setup, instrument connection, and the setup-panel defaults he has to correct every time.

## Steps

**Step 1 — [00:00:03] Recording restart.** Bryan confirms the mic is working after the earlier failed attempt.

- Bryan: *"That's the transcript and this thing, it's on mic'd, OK, sweet."*

**Step 2 — [00:00:32] Physical setup tour: CBB, riser board, lanes.** Travis narrates the bench hardware on camera.

- Travis: *"This is a PCIE setup. … This is a PCIE device is actually a network card. It's 4 lanes. This is a baseboard. This is what's called a compliance baseboard, CBB. And this is the load board or riser board. It just depends on the generation."*
- Travis on scope of testing: *"When we do PCIE testing at like workshops, we typically do lane 0 only. … Because it takes a long time to get through these tests."*

**Step 3 — [00:01:23] Receive lane + AFG toggling.** Not testing receiver, but the receive lane is wired to a function generator that toggles compliance patterns.

- Travis: *"We're not testing receiver actually. … But we do have this connected to this function generator. … it's going to toggle like different compliance patterns."*
- Travis on customer context: *"There's customers who haven't done this stuff, so we kind of have to walk them through … every step here in terms of connection."* Boards come from the PCI-SIG; at workshops AEs pre-stage everything: *"They just bring in their device, we plug it in."*

**Step 4 — [00:03:06] Receiver-test aside: ISI board and BERT.** Receiver testing needs an ISI (inter-symbol interference) board and a BERT (bit error rate tester); this session is transmit-only via TekExpress.

- Travis: *"Receiver testing is a little more complex. You have to add something called an ISI board … in between that and the BERT."*

**Step 5 — [00:04:07] Gen 5 fixture retro-compatibility.** The Gen 3 boards are no longer purchasable; a correlation path lets Gen 5 fixtures test Gen 3.

- Travis: *"You do have the option to run a Gen 5 fixture because you can't really buy these anymore. … I was talking to the product line engineer the other day … they did a correlation between the old Gen 3 boards and the Gen 5 boards. So when they get the signals, they'll embed the signals … put [them] through Sig Test."*

**Step 6 — [00:04:54] Instrument connection: AFG first, via Instrument Manager.** Screen context: the TekExpress application-level instrument search. USB usually self-detects; LAN frequently does not.

- Travis: *"First, usually you want to try and connect the AFG … And I get to go through the instrument manager sometimes to make sure that it's there."*
- Travis: *"USB typically shows up without any intervention, but if this is connected via LAN, you have to go in here first. … go to search criteria … go to LAN, and then you have to figure out the IP of this guy. Type that in, and then make sure it's populated in this window."*
- Facilitator: *"Doesn't it auto-detect?"* Travis: *"Not all the time. Sometimes it won't auto-detect through the instrument control manager, and you'll have to put it in here first."*
- Travis: *"I'm supposed to be able to go here and click LAN and then hit refresh, but it doesn't always refresh in here, so then I'll have to resort to that tool. … I don't know what the disconnect is between there. … I usually just use USB if it's available."*

**Step 7 — [00:06:46] Gen 5 aside: the NI baseboard controller is undocumented added friction.** A National Instruments CBB controller (non-VISA device) handles toggling on newer generations and requires a separate software install.

- Travis: *"There's a CVB [CBB] controller made by National Instruments. So it's a non-Visa device that you got to find in here as well. You have to install a software to make that work. … it's kind of like an added process for customers. I don't even think we have documentation on that."*
- Travis on how it works: *"If I plug these two connectors into Lane Zero, I can toggle with this switch on the board. … It's like 100 megahertz, like little burst … coming from the clock. There's a clock on board. … more so in like recent times, we're using the NI controller to control the toggle … because it utilizes the onboard clock."*

**Step 8 — [00:08:52] Setup layout verdict: intuitive, everything up front.** Screen: [`setup-dut`](../screens/setup-dut.md).

- Travis: *"Layouts, you know, it's pretty intuitive, yeah, I would say. Like, you basically have all your configuration options presented to you, like immediately."*

**Step 9 — [00:09:05] The channel-defaults complaint.** Screen: [`setup-acquisitions`](../screens/setup-acquisitions.md). Default source channels are 1 and 3 — a shared-hardware workaround that no longer applies on the 7 series.

- Travis: *"One thing I would probably change is like your channel connections. … you have to go in acquisitions, I believe. So if I happen to be using channel one or two — the thing is on the seven series, there's no shared resources in the hardware. So you can use one and two. This always defaults to one and three."*
- Travis on the legacy reason: *"[On older platforms] one and two is shared, three and four is shared … But on the seven series, it's not the case."*
- Travis on discoverability: *"It's like not blatantly obvious to customers who aren't like used to using the software. Where for AEs, we know that typically that is gonna default … plug it into one and two, like out of the gate."*

**Step 10 — [00:10:13] Proposed fix: global default-channel setting, ideally scope-model-aware.** Facilitators and Travis converge on the ask.

- Facilitator: *"So would like a global setting in Tek Express to say, change the default?"* Travis: *"Yeah, that'd be pretty cool."*
- On auto-detecting the scope model: *"It should know the model — if you go to configuration it shows the real time scope that it's using. … it'll refer to itself."* Facilitator: *"That's just a straightforward enhancement of just having the default be specific to the scope … user should be able to default the channels somewhere in the settings."*

**Step 11 — [00:11:47] Cascading-settings probe.** Bryan asks whether changing one panel silently changes another.

- Bryan: *"You're going through this, and then you change something on one of the panels, and then it changes something on another panel. Are you ever like, I don't know what is changing where?"*
- Travis: *"I can usually track most of that stuff … if I select like these two, I'm gonna get more test options, right? … that'll change stuff in subsequent menus, but those are subsequent steps, not the previous ones."*
- Travis, conceding: *"Sometimes I do get confused. There are a lot of settings … it's standard dependent as well, like some are way more complex in terms of setup than this."*

## Annotations

- **Why channels default to 1 and 3:** on older scope platforms channels 1+2 and 3+4 share acquisition hardware — enabling an adjacent channel halves sample rate (*"as soon as I enable either of these, my sample rate and everything drops"*). The 7 series has per-channel hardware, but TekExpress still ships the legacy default.
- **Why lane 0 only at workshops:** full multi-lane compliance runs are too slow for a workshop format — *"it takes a long time to get through these tests."*
- **Gen 3 fixtures are end-of-life** and the sanctioned path is running Gen 5 fixtures with embedded correlation files through Sig Test — bench hardware and software versions drift apart over a standard's lifetime.
- **Toggle mechanisms vary by generation:** an AFG burst into the receive lane (older), or the NI CBB controller driving the onboard clock (newer). The NI path requires a separate non-VISA driver install that Travis believes is undocumented.
- **AEs pre-stage the bench at workshops** — the customer only brings the DUT. Customers doing this alone at their site hit the connection-diagram and instrument-connection friction without an AE present.

## Friction notes

- **LAN instrument detection is unreliable.** *"It doesn't always refresh in here, so then I'll have to resort to that tool. … I don't know what the disconnect is between there. … I usually just use USB if it's available."*
- **NI CBB controller is an undocumented extra install.** *"You have to install a software to make that work. … it's kind of like an added process for customers. I don't even think we have documentation on that."*
- **Channel defaults are wrong for the 7 series and not obvious to customers.** *"This always defaults to one and three. … it's like not blatantly obvious to customers who aren't used to using the software."* No global setting exists to change the default.
- **Settings volume confuses even an AE on complex standards.** *"Sometimes I do get confused. There are a lot of settings … some [standards] are way more complex in terms of setup than this."*

## Cross-references

- DUT/setup panel: [`setup-dut`](../screens/setup-dut.md); channel/source configuration: [`setup-acquisitions`](../screens/setup-acquisitions.md); Options menu (instrument-connection entry point, discussed in the next chunk): [`options-dropdown`](../screens/options-dropdown.md).
- Continuation of this session: [`ae-travis-berger-launcher-global-settings-and-setup-flow`](./ae-travis-berger-launcher-global-settings-and-setup-flow.md).
- The global-settings theme recurs across AE sessions — see [`ae-tapo-parua-workflow-and-settings-architecture`](./ae-tapo-parua-workflow-and-settings-architecture.md) and [`ae-will-teverovsky-session-files-options-and-program-context`](./ae-will-teverovsky-session-files-options-and-program-context.md).

## Pending references

- **TekExpress instrument search / Instrument Manager dialog** (search criteria, LAN/USB filters, refresh) — walked through live; no dedicated screen doc in the corpus.
- **External instrument-control utility** Travis falls back to when TekExpress's LAN refresh fails (*"that tool"*) — name not stated; not documented.
- **NI compliance-baseboard controller** (non-VISA device + companion software) — hardware dependency; not documented anywhere in this corpus.
- **CBB / riser board / ISI board / BERT bench hardware** — physical fixtures shown on camera; no hardware views exist for tek-express.
- **PCI-SIG** as the source of compliance boards — external ecosystem reference.

## Confidence notes

- **Single-microphone recording; every cue is attributed to "Kemp, Bryan" in the source.** Speaker turns are inferred from context. Travis's turns (first-person bench operation, AE/customer experience) are high-confidence. Several facilitator questions have phrasing that suggests a third participant beyond Bryan (e.g. *"Does Tek Express aware of that connection"*); facilitator-side quotes are attributed as "Facilitator" where the voice is uncertain.
- Timestamps are taken from the WebVTT cues (this transcript has per-cue timestamps, unlike most siblings in this study round) and mark the start of the relevant exchange.
- "AFG"/"AEG"/"DFG" all appear in the transcript for the function generator; normalized to AFG. "CVB controller" is read as CBB (compliance baseboard) controller.
- The opening ~30 seconds are logistics about the failed first recording and camera positioning; summarized, not transcribed.
- Whether the instrument-manager walkthrough at [00:04:54] happened inside TekExpress or in the scope-level utility is partially ambiguous on audio-only; the fallback "that tool" is clearly external to TekExpress.
- No credentials appeared in this segment; nothing redacted here (customer names appear in later chunks and are redacted there).
