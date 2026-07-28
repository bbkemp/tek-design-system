---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-dallas-tony-compliance-mode-and-test-selection
flow_title: "AE Interview (Dallas & Tony) — Compliance vs. User-Defined Mode, Acquisition Speed, Presets, and Signal Validation"
recorded_by: "Dallas & Tony (AEs); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:19:17"
transcript_source: "uploads/transcripts/DallasandJesse.docx"
screens_visited: [setup-dut, setup-test-selection, setup-acquisitions, status-test-status]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, status-test-status]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Dallas & Tony) — Compliance vs. User-Defined Mode, Acquisition Speed, Presets, and Signal Validation

## Summary

The middle of the session. The veteran AE lays out a philosophy of compliance software — the app knows the spec, so it should drive aggressively and hold the user's hand — and derives concrete asks from it: don't reset instrumentation between acquisitions (a claimed 30–40% speedup), parallelize multi-lane acquisition, offer math waveforms as sources, and make the compliance vs. user-defined mode visually unmistakable (color-coded chrome). Test Selection feedback follows: presets hidden in second tabs are confusing, tests should be grouped by pattern source with tooltips showing the required pattern, and test names must match the specification. The segment closes with a long working discussion of signal validation — the AEs walk over to a Tek scope to demo its global/local measurement paradigm and converge with Bryan on a global/local design for validation, collapsing the current three-option control.

## Goal

Capture what compliance mode should do automatically, how mode switching should be communicated, and how Test Selection / signal validation should be restructured — in the AEs' own words.

## Steps

**Segment 1 — Overall verdict on the DUT panel and settings segregation.**
- *"You're modernizing this, but the general flow is not bad here, so DUT menus tends to be pretty good."*
- A team member relays a recurring user request to hoist buried settings onto the DUT panel: *"There have been asked that you please put it on the [DUT] panel, because this panel comes to me first, and I do not want to go and search this setting somewhere in the inside."* Counterpoint: *"There are tons of setting on the back panel and the other panels people do not like to go, and if you are putting something there, it's kind of our next level hard thing to find."*
- Veteran AE's resolution: *"I think you keep the DUT at a high level."*

**Segment 2 — Compliance philosophy: the app knows the answer, so drive.**
- *"This is compliance software… I'm doing compliance software. I know what the waveform should look like… I'm in control of that because compliance tells me I got to capture this many UIs… you're an oscilloscope company, so we want to fill 70% of the screen so that we're using the best acquisition so we get best results."*
- Against over-flexibility: *"Sometimes we put a little too much… they wanted too much flexibility. It was like, oh, well, it has to work in every scenario. And it's like, no, it doesn't. It needs to run compliance as fast as possible."*

**Segment 3 — Don't reset instrumentation between acquisitions.**
- *"Tek Express defaults itself… reloads a whole bunch of parameters, exactly what it was for the last capture. You just burned 30 or 40 seconds for no damn reason, because guess what? The next waveform capture is the exact same [setup]."*
- *"There needs to be some intelligence that like, do not reset the instrumentation between acquisitions. Just take the acquisition. We would speed ourselves up 30 and 40% by just doing that."*

**Segment 4 — Parallelize multi-lane acquisition; math sources.**
- *"Also, don't do things in sequential order, like a multi-lane, apply multiple sequences at the same time. We'll basically turn on channel one, acquire, and… turn [on] channel 2, trigger, acquire, channel 3, [then] turn all four channels… that could have happened in like 4 minutes instead of 30."*
- *"Also have all the sources be a math as an option. If the customer wants to add filtering, de-embedding, or whatever else, or do their own processing… into [a] math waveform, it would come in handy so much."*

**Segment 5 — Compliance vs. user-defined: switching and visibility.** Bryan probes how users experience the mode split.
- Usage pattern: *"You're gonna run in compliance, and then if you don't pass, you wanna find out why, and you're gonna switch to user [defined]."*
- The color-coding idea (veteran AE): *"What would be really cool from the UI side of it is that's color-coded… Your frame or outline when I'm in compliance is this color. And when I switch to user defined, it is really obvious, because that's the other problem is it's in one of these other menus and you may not be looking at that menu."*
- The failure it prevents: *"It's like, oh, wait a minute, why is it color difference? It's like, oh, I'm in a different mode. It's like, oh, crap, I just spent two days just not realizing that it's not compliant."*
- Mode behavior contract: *"When it's in compliance… we're gonna set things the best they should be, and boom, do it… I'm doing it fast, and I'm doing it with the least amount of changes… You go into user mode… okay, you've made a choice and I'm gonna let you have some control."*
- Why hand-holding is the product: *"At the end of the day, they're paying us for the software because of our expertise. If they knew what the hell they were doing, they wouldn't buy the software. They'd write their own code."*

**Segment 6 — Terminology: "user-defined" vs. "debug."** Bryan asks whether the "user-defined" label works.
- Veteran AE: *"I like debug, but you're doing compliance… In my mind, I'm doing compliance or I'm doing debugging. Why am I running this software if I'm not debugging it?"*
- Second AE's counter-case: *"I have like [customer name redacted — major silicon vendor] that are doing the compliance test, but they know that their pattern is slightly different… for their requirements, they want to be able to use that, so they have to switch to user-defined mode… but still doing the compliance test."*
- History: *"We had arguments about this before as compliance versus conformance, and then [they] were too similar."* Competitor terminology: *"So, what terminologies do competitors use? I don't know… I don't even know if they have an option [like user-defined]."*
- Usage split: *"Most of the times it is compliance… unless… when the standards first come out, all of the silicon guys… flipped bits in the pattern, and so the pattern doesn't match compliance… they have to go to user-defined, but they're still running everything as if they were [in compliance]."*

**Segment 7 — Test Selection: presets-as-tabs are confusing.**
- *"There is a classic problem here… does preset define the test selection or the test selection defines the preset? There's some of these standards that will have two tabs here… in the test selection, and it's confusing. The presets are confusing."*
- The ask: *"From an overall arc, why the hell are there two tabs? It's just another test, just put it in the list… if presets would just show up as another [row] — I either check it or I don't check it."*
- Standard-specific dependency noted by the second AE: *"There are certain conditions in PCI[e] like this test only run[s] on P0 and P10, so if you are… not select[ing] P0 and P10, then this should be disabled."* Veteran: *"That's on the standard owner to help define that."*

**Segment 8 — Tooltips with pattern requirements; grouping by pattern source.**
- *"It would be really handy for modern software if I'm running preset test 6, I've hovered over it — give me a tooltip and tell me what pattern I need to acquire."*
- *"They need to be grouped by pattern source… some of the patterns will be in one and some of the… like one, three, and seven [are] the same patterns — just group them."*
- Why it matters at selection time: *"When I go to select that test, I need to make the choice of how much of my time and effort [it] is. If I select all these tests and I don't realize that… I've got 7 different patterns to deal with, and guess what? I don't have pattern control yet — I'm not going to select those tests."*
- Information in both places: *"I want it in both places. Because this menu feeds the next menu. I want to know here. And then I want to do more details on the next menu… I'm not going to select this test if it has a pattern I can't create. And you're going to make me go down and then find that on the next menu and then come back. I don't want to do that."*
- Naming: *"Make sure the names match with the specifications calling those tests. Sometimes they don't. They don't match."*

**Segment 9 — Acquisition table: improved, but multi-lane needs work.**
- Positive: *"So now we go into acquisition based on the tests that I picked. So this field is built from that field. And here it tells me that I'm acquiring Lane Zero, PRTS 7, P0. That is way better than it used to be… That's acceptable."*
- Hand-holding restated at the acquisition step: *"I'm not going to seven different menus to find stuff. You're going to walk me through. I just paid you a bunch of money. You need to hold my hand."*
- Multi-lane gap: *"The one thing that gets confusing… is when you have like different test parameters and you have like multiple channels and it's like, well, there's single [ended] or differential… when it mixes things up."*
- The ask: *"If I did have a standard that allowed multi-lanes… this needs to have a different look and feel so that I can say lane one is on channel 1, lane 2 is on channel 3, or math, or [whatever]… And also let me pick more [than] four channels, since now we've been supporting more [than] four channels."*

**Segment 10 — Keep it flat: TekScope PC as the reference.**
- *"When you're playing with this, make sure to get stick time with the Tek Scope PC… Customers love that GUI… and one of the big reasons is because it's flat. I've got the badges and I can open the badge and get into details, but… there's not layers. That control's right there, out on the table… I don't have to know that I had to drill down… So you just have to keep this stuff flat."*

**Segment 11 — Signal validation: global vs. local.** Bryan asks whether validation should be a global setting or per-test.
- Veteran AE, initially global, then self-corrects: *"I think it's more global. I'm gonna — now that you brought it up, I'm gonna argue [with] that."* Reason: confidence varies per pattern: *"I've got that pattern, I don't even need to check it… but this test… is a little lossy because of how it's connected… So I want to check to make sure we got that right."*
- The converged design: *"Maybe there's a global versus local, and if you leave it global, it's global, and if you switch local, then I get a selection behind each test, whether I'm gonna validate that test… Just like in the scopes application, I have global and local for a bunch of measurement settings… if I slide it over to local, all of a sudden a column shows up."*
- *"That can be a huge time [saving]… But it's like, I have to have it on this pattern because I don't have confidence. Right. But on the other four, I'm pretty confident. You don't waste my time. We've already debugged that."*

**Segment 12 — Live demo on the scope: the global/local measurement paradigm.** The AE opens a measurement on a Tek scope to show the pattern in situ. *"So, when you're in here, you get to define this, and when you're in here, you have the choice of going global or local… if I'm global, all of my measurements are using that capability; if I go local, only this measurement gets this parameter."* — *"And it falls in line with how we do it in the scope."*

**Segment 13 — The three validation options debated.** Current control offers roughly: validate, use signal as-is (skip validation), and skip-test-if-validation-fails. The group works through whether the third is needed.
- Veteran AE challenges it: *"Why are we given a third choice? …Are you either gonna validate it or [not]… you're just burning my time."*
- Second AE defends it with the long-run case: *"Some of these things like [HDMI] 2.1, it could take hours to run the test. And if the fifth one down failed validation, but the rest of them passed, you just lost all that time… [The third option] way, at the end… you have the ability to make sure that pattern was correct, rerun that one test so you don't lose 8 hours of the data."*
- Team member context: *"Sometimes if you feed a wrong waveform, the measurement kind of hangs because it doesn't proceed — that's why we're putting all these tooltips and stuff in."*
- Convergence: run the test anyway but flag it. *"Instead of skipping it, actually run it and get the results, just flag that it [failed validation]… Flag me if I fail validation — if I turn that on, I wanna know, did I violate it? …but I still want [the] result. That would be better."* Bryan sketches the control: *"You could catch that in a couple controls up top [global/local]… and if I'm local, then you have to turn on another column."* AE: *"Pretty slick."*
- Everyone acknowledges the current wording fails: *"The language doesn't make sense. We're all confused."*

## Annotations

- **Compliance mode is a contract, not a preference.** The veteran AE's model: in compliance the app should take control, configure per spec, and optimize ruthlessly; in user-defined the user has explicitly traded speed for control. Most speed/automation asks in this session derive from that model.
- **The instrument-reset behavior exists because the app distrusts state.** As paraphrased by the AE, the team's rationale was *"oh, well, we don't know [what] they were going to capture [next],"* to which: *"Hell yeah, you do. It's in the checkbox."* — the selected-test list already determines the next acquisition.
- **The scope's global/local measurement-settings paradigm is presented as the pattern to reuse** for validation (and later for other per-test controls: *"a lot of these also… is it global versus local, 'cause [right now] you have to like go to each one [and] do the same thing for each"*).
- **Early-silicon pattern mismatch is the canonical reason user-defined mode exists**: pre-release patterns with flipped bits can't pass compliance-pattern validation even when the customer is effectively running the compliance procedure.
- **Signal validation itself is seen as a differentiator**: *"This is actually an advantage for us. I don't know that everybody does this."*
- **"Compliance versus conformance" naming battle is old history** inside Tektronix; the AEs treat the current "user-defined" label as tolerable but debatable, and suggest a vote; no competitor terminology was known in the room.

## Friction notes

- **Per-acquisition instrument reset wastes 30–40 seconds each time.** *"You just burned 30 or 40 seconds for no damn reason."*
- **Sequential lane-by-lane acquisition.** *"That could have happened in like 4 minutes instead of 30."*
- **Mode changes are invisible.** *"Oh, crap, I just spent two days just not realizing that it's not compliant."*
- **Presets hidden in a second tab.** *"Why the hell are there two tabs? It's just another test, just put it in the list."*
- **No pattern info at selection time.** *"You're going to make me go to another menu and deal with the test I just selected."*
- **Test names drift from the specification.** *"Make sure the names match with the specifications calling those tests. Sometimes they don't."*
- **Multi-lane channel assignment is confusing.** *"It gets confusing… when it mixes things up [single-ended vs. differential, multiple channels]."*
- **Validation control's three options confuse everyone, including the room.** *"The language doesn't make sense. We're all confused."*
- **Per-test repeated configuration with no global apply.** *"You have to like go to each one [and] do the same thing for each."*

## Cross-references

- DUT panel: [`setup-dut`](../screens/setup-dut.md). Test selection and per-test configure: [`setup-test-selection`](../screens/setup-test-selection.md), [`setup-test-selection-config`](../screens/setup-test-selection-config.md).
- Acquisition table (the "Lane Zero, PRTS 7, P0" per-row context the AE praises): [`setup-acquisitions`](../screens/setup-acquisitions.md).
- Status view referenced when contrasting selection-time vs. run-time information: [`status-test-status`](../screens/status-test-status.md).
- The wizard/hand-holding strength echoes the product team's framing in [tek-products-walkthrough](./tek-products-walkthrough.md).

## Pending references

- **TekScope PC** — repeatedly used as the reference UI (flat badges, global/local measurements); not a corpus subject yet.
- **Signal validation control** — the specific three-option UI discussed is not yet captured as its own screen document.
- **DPOJet** — the scope-side analysis package the AEs assume as the debug surface; no corpus artifact.

## Confidence notes

- Speaker attribution inferred throughout (single-mic transcript). The compliance-philosophy monologues, color-coding idea, presets rant, and hand-holding refrain are one consistent veteran voice; the [customer]-pattern counter-case, PCIe P0/P10 dependency, HDMI-2.1 validation defense, and AWG-era workarounds are the second AE. Tek Express team members are also audibly present and answer occasionally (e.g., the tooltip/hang explanation); their turns are attributed as "team member."
- A customer name (a major silicon vendor) was redacted from the terminology discussion per the corpus sensitive-information rule.
- "HTML 2.1" in the source is read as HDMI 2.1 (transcription error). "PRTS 7" is likely PRBS7. "year six / gears" garble is read as Gear selections.
- The mid-segment scope demo happens off-transcript visually; several fragmented lines ("Hold on, this one can scale", "after the edge, I couldn't see it") are demo narration and were summarized rather than quoted.
- One brief exchange ("I'll show you something… No, you're not going to show me, you're listening. Customers driving this.") reflects good-natured sparring between an AE and a team member about who drives the demo; preserved in spirit, not fully quoted.
