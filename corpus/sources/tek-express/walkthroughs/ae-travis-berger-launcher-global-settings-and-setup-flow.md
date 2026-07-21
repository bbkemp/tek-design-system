---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-travis-berger-launcher-global-settings-and-setup-flow
flow_title: "AE Interview — Travis Berger: A Launcher Layer Above TekExpress, Options-Menu Burial, Acrobat Schematics, and Presets"
recorded_by: "Travis Berger (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:14:53 (session total; this chunk covers ~13:00–39:20)"
transcript_source: "uploads/transcripts/TravisBergerPt2.vtt"
screens_visited: [options-dropdown, setup-test-selection, setup-test-selection-config, setup-preferences, setup-acquisitions]
applies_to: [tek-express, tek-design-system]
related_screens: [options-dropdown, setup-dut, setup-test-selection, setup-test-selection-config, setup-preferences, setup-acquisitions, running-test]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Travis Berger: A Launcher Layer Above TekExpress, Options-Menu Burial, Acrobat Schematics, and Presets

## Summary

Core setup-critique segment of the Travis Berger session. Travis — who had a brief stint at Rohde & Schwarz — contrasts Tek's buried Analyze-menu launch path with Rohde's single compliance launcher that shows every standard in one block-diagram window, and builds it into this session's signature proposal: a launcher/global-settings layer *above* the per-standard TekExpress applications where channel defaults, instrument connections, and save-waveform behavior live once. Along the way the group discovers DPOJet and the legacy TekScope UI ("Terminator interface"), which the facilitators immediately recognize as the visual ancestor of TekExpress. Travis then hits the classics: instrument connection buried in the Options menu, connection schematics that open in Adobe Acrobat because the TekExpress window can't resize, the two-tab test-selection layout people miss, presets duplicated in two places, and a Preferences page he never touches — more fuel for the global-settings layer.

## Goal

Capture the AE's structural critique of TekExpress's launch, settings placement, and test-selection flow, anchored by a concrete competitor pattern (Rohde & Schwarz's launcher).

## Steps

**Step 1 — [00:13:09] Rohde & Schwarz comparison: one launcher, all standards.** Travis discloses his background and the Tek pain it highlights.

- Travis: *"So I had a brief stint at [Rohde] and Schwartz and I got to use some of their compliance software a little bit. … one thing I think that kind of bugs customers, and I feel like I have to walk them through all the time, is like you have to go to this analyze menu. And then you have to choose your Tek Express from this drop down."*
- Travis on Rohde's pattern: *"One thing I think that they do kind of well is like, there's just Tek Express, basically — you open the window and then it's got all your standards listed in a window, in a block diagram, and then from there it's like you hit that and then now you're in the specific Tek Express environment."*

**Step 2 — [00:14:56] Aside: DPOJet and the legacy scope UI.** A facilitator asks about the application behind TekExpress; the answer reframes the whole redesign for the team.

- Travis: *"That is DPO Jet. … kind of part of the main scope application. … the Tek scope software, it uses this design … all these buttons, radio buttons, and stuff like that."*
- Facilitator: *"This is helping me so much understand why Tek Express looks the way it does, because this looks like that."*
- Travis: *"This is our Terminator interface. And Riddick is the one that you guys are probably [used to]."* Facilitator: *"One of the biggest things feedback is like that UI just looks old … this one looks old — the Riddick looks pretty alright."*
- Facilitator: *"This is far less intuitive than the newer scopes."*

**Step 3 — [00:18:24] Signal validation: what it catches and where it's broken.** TekExpress prompts when the acquired signal is invalid (on by default).

- Travis: *"If I run a test and my signal's incorrect, it'll prompt me … It's often that I just forget to connect the receive link [for toggling]."*
- Travis on a live bug: *"We are running into an issue with PCIE on the seven series in particular, where this signal validation comes up even though the waveform is correct. … when we run on here [older platform], it runs perfectly."*

**Step 4 — [00:19:47] The proposal crystallizes: a layer above TekExpress.** Global settings (preferred channels, connections) belong in the launcher, before any specific application opens.

- Travis: *"Going back, like how you have that first menu that gives you all your options — if there's kind of like a global setting for like preferred channels or something like that. And you can get to [it] in that main window before you even click on a particular technology."*
- Travis: *"A layer above Tek Express, and you get most of your like default configurations and stuff done there out of the gate, and then it populates everything in preferred settings … maybe like channel connections and stuff like that."*
- Facilitator (analogy): *"Like if you open up like Illustrator and you set up your canvas size, your DPI, your color space, and then boom, then you're now working within this."* Travis: *"Correct. Yes. So now again, you don't have to go back and make those changes."*
- Travis extends it to instruments: *"Maybe something you can also pull out into that higher level layer is connecting to … stuff like this. That way … you go into the application, it's already populated as one of your options in configurations."*
- Facilitator reaction: *"That is great feedback because the configuration section, every time we've gotten to that, people are like, that's here for some reason. … There are so many different types of settings which are placed different places, it's the top drawer."*

**Step 5 — [00:22:15] Live demo of the pain: AFG missing from the connection list.** The AFG initially fails to appear; refresh over LAN is slow, with a dated loading graphic.

- Travis: *"Now I'm in here and I can't find the AFG for some reason. … Oh, there we go. Okay, now it's showing up. I don't know why it showed up as the scope rather than the AFG on here."*
- Facilitator: *"The loading graphics is incredible. It's a big, thick, black laptop from like 2001 or whatever."*

**Step 6 — [00:23:14] Instrument connection is buried in Options — and duplicated.** Screen: [`options-dropdown`](../screens/options-dropdown.md).

- Travis: *"It's kind of buried in this little options menu. … Customers don't know to go in there to connect."* Facilitator: *"The options screen is very confusing. … It's not options."*
- Duplication: *"It's also right here; it's also in configuration instrument control."* Facilitator: *"There's a few redundancies in here … the Control also out here and also up here."* Travis: *"I have noticed a lot of that kind of stuff, or they'll take you back to another step."*

**Step 7 — [00:24:17] Toggle-count setting explained; can settings break compliance?** Travis explains the burst/toggle count; a facilitator asks whether changing it invalidates compliance.

- Travis: *"This basically tells it how many times to toggle, like if your device is different than what's written in the spec. … it wants to get to a specific compliance pattern for a particular test."*
- Facilitator: *"When you change that, does that break the compliance?"* Travis: *"You'll likely get failures or the signal validation thing will pop up."*

**Step 8 — [00:25:16] Test Selection: schematics open in Adobe Acrobat.** Screen: [`setup-test-selection`](../screens/setup-test-selection.md).

- Travis: *"Here's where you find your schematic. Like when I tell users like, okay, you figure out what tests you want to run, you go in here. I hate that you have to go through this Adobe Acrobat, all this like weird crap."*
- Travis confirms the source: *"This is pulled out of the help document for the technology."* The diagrams themselves are good: *"They're pretty good. Like the diagrams are usually pretty good."*

**Step 9 — [00:27:34] Proposed fix: inline PNG with full-screen and a PDF fallback link.**

- Travis: *"This is something that could be greatly [im]proved. It would be nice if I could just click on a test and then it just shows the PNG, rather than having to open Adobe."*
- Facilitator: *"I'm imagining like you get a little thumbnail or whatever, like reference button, it could go full screen. Then there's a link to download the PDF kind of thing."*
- Why it's a PDF today: *"Sometimes I've seen it where it's like a tiny window and you can't resize it. … [The] TekExpress [window] can't get any bigger, so that's why it's a PDF."*

**Step 10 — [00:28:48] The two-tab test-selection layout is missed by users.**

- Travis: *"Here in test selection, like for PCIe, this is kind of the only time that I really see this — there's two tabs here. So some people aren't aware; usually they're just in a list. … there's a separate set of tests for the presets that are in a different tab."*

**Step 11 — [00:29:23] Preset domain knowledge: P4 is the flat-EQ reference.** Screen: [`setup-test-selection-config`](../screens/setup-test-selection-config.md) (preset selection also appears in the configure dialog).

- Travis: *"For Gen 3, it's usually contingent on P4. So P4 doesn't have any equalization. … Sig Test uses P4 as a reference for the equalization settings of the other presets. … You have to capture P4 in order for it to do any sort of analysis."*
- Preset counts/naming: *"It depends on the generation. I would say like 10 or 11. … I think 10 is a non-standard one, so there's usually zero through 9 that gets tested. … Gen 4 is labeled the same. So is Gen 5. I think Gen 6 is where it goes to Q0. … It's actually true to spec."*
- Receive-side history: *"Early releases, it was kind of an issue — you had to reacquire all the presets. Whereas I think now you can just go back and just reacquire P4 before moving on."*

**Step 12 — [00:30:26] Presets appear in two places; even Travis isn't sure if they're the same control.** He deselects presets in one window to test it; a validation dialog fires.

- Facilitator: *"What [is] the difference between the two [preset] sets?"* Travis: *"I actually don't know. I think they're the same, so if I deselect them and I hit OK — oh, it says at least one preset must be selected. … So I mean, those are the same windows, those are the same things."*
- Travis's mental model of the split: signal-quality tests run *at* the presets, while the preset tests themselves *"check for the equalization amount, and that gets dumped through SIG test. … The signal quality will do like eye diagram renderings for each of the presets."*
- Runtime warning: *"This will take probably hours to run … if I do them all."*

**Step 13 — [00:34:11] Preferences page: never touched.** Screen: [`setup-preferences`](../screens/setup-preferences.md).

- Travis: *"Preferences — I don't really spend any time on this page, honestly. … I usually just leave stuff default."*
- On the de-skew alert option: *"Typically, from what I understand, it doesn't de-skew if you have any non-zero [de-skew] value. … Typically I'll do a manual de-skew before I go in there. And I think Tek Express holds on to your settings. … That's kind of like a gray area to me, whether or not it messes with any of that stuff."* Some applications have an auto-de-skew option; *"I don't think this one has it."*
- Verdict on the page: Facilitator: *"Could this pretty much go away and be part of the global stuff?"* Travis: *"I would say that this would be in the global settings."*

**Step 14 — [00:37:38] Save-waveform options should also be global.** Screen: [`setup-acquisitions`](../screens/setup-acquisitions.md) (save/analyze waveform settings).

- Travis on the mechanics: *"In most applications, it saves the waveform to like the X drive … and saves in the [.wfm] format … it has to have a specific naming convention … that specific waveform that it looks for gets dumped through like Sig Test or whatever external tool."*
- Travis: *"Most customers will save the [waveforms] and stuff. I don't really see a case where they don't. … Something you could probably put in one of the global settings."*
- Facilitator: *"That makes a lot of sense. It's like, why ask the question there? … Just don't bring it up. … not like make them think about, do I want to save these or not? Why would I not want to save these?"*

## Annotations

- **Travis worked at Rohde & Schwarz** before Tek — his launcher comparison is first-hand, not hearsay. Rohde's compliance software presents *all* standards in one block-diagram launcher window; Tek scatters per-standard TekExpress applications behind the scope's Analyze/Applications menu.
- **TekExpress's visual style is inherited from the legacy TekScope/DPOJet era** (the "Terminator interface"). The facilitators treat this as the origin story for the "UI looks 20 years old" feedback; the newer Riddick scope platform *"looks pretty alright."*
- **Why schematics open in Acrobat:** the TekExpress window is fixed-size, so an in-app diagram would be unreadably small — the PDF hand-off is a workaround for the non-resizable window, not a deliberate choice. (Connects to the window-resize theme across AE sessions.)
- **Why the file-naming convention exists (per Travis):** the saved waveform's name is what Sig Test and other external analysis tools key on — the pipeline is scope-setup → capture → dump to Sig Test for PCIe, while other standards embed analysis in TekExpress itself.
- **Presets are spec-defined equalization settings** (P0–P9, Q-naming from Gen 6), not scope presets — a facilitator explicitly notes they'd misunderstood this the day before: *"I got tripped up on word preset … I'm glad you said equalization, because now that makes sense."*
- **Signal validation is a safety net AEs rely on** (catches forgotten toggle connections) and it defaults on — but a live 7-series PCIe bug throws false positives, eroding trust in the prompt.

## Friction notes

- **Launch path is buried and per-standard.** *"You have to go to this analyze menu. And then you have to choose your Tek Express from this drop down"* — vs Rohde's single launcher; *"I feel like I have to walk them through all the time."*
- **Instrument connection is buried in Options and duplicated elsewhere.** *"It's kind of buried in this little options menu. … Customers don't know to go in there to connect."* / *"The options screen is very confusing. … It's not options."*
- **Connection schematics require an Adobe Acrobat round-trip.** *"I hate that you have to go through this Adobe Acrobat, all this like weird crap."* Root cause: the TekExpress window can't be resized.
- **Two-tab test selection is missed.** *"Some people aren't aware; usually they're just in a list."*
- **Preset selection is duplicated in two windows** and even an AE can't say whether they're the same control: *"I actually don't know. I think they're the same."*
- **Settings scattered across Preferences / Acquisitions / Configuration that nobody changes per-session** — Travis's repeated refrain is "put it in the global settings"; the facilitator's: *"There are so many different types of settings which are placed different places, it's the top drawer."*
- **7-series signal-validation false positives** on PCIe: *"this signal validation comes up even though the waveform is correct."*
- **Instrument list flaked during the demo** — the AFG appeared as the scope, then resolved on refresh; LAN refresh is slow with a dated loading graphic.

## Cross-references

- Options menu: [`options-dropdown`](../screens/options-dropdown.md); test tree + schematic link: [`setup-test-selection`](../screens/setup-test-selection.md); per-test configure dialog: [`setup-test-selection-config`](../screens/setup-test-selection-config.md); preferences: [`setup-preferences`](../screens/setup-preferences.md); acquisition/save-waveform settings: [`setup-acquisitions`](../screens/setup-acquisitions.md).
- Previous chunk (bench setup, channel defaults — the other half of the global-settings case): [`ae-travis-berger-bench-setup-and-instrument-connection`](./ae-travis-berger-bench-setup-and-instrument-connection.md); next chunk: [`ae-travis-berger-status-results-sessions-and-run-window`](./ae-travis-berger-status-results-sessions-and-run-window.md).
- Options-menu burial corroborated across sessions: [`ae-will-teverovsky-session-files-options-and-program-context`](./ae-will-teverovsky-session-files-options-and-program-context.md), [`ae-tapo-parua-workflow-and-settings-architecture`](./ae-tapo-parua-workflow-and-settings-architecture.md).
- Legacy-vs-Riddick visual direction: [`ae-nadir-kahn-competitive-landscape-and-visual-direction`](./ae-nadir-kahn-competitive-landscape-and-visual-direction.md).

## Pending references

- **Rohde & Schwarz compliance launcher** (block-diagram standard picker) — compared in detail; not a corpus subject.
- **DPOJet / legacy TekScope ("Terminator") interface** — shown live as TekExpress's visual ancestor; not documented in this corpus.
- **The proposed launcher / global-settings layer** — does not exist in the product; design concept only.
- **Signal-validation prompt dialog** ("prompt me if signal check fails") — behavior discussed; no dedicated screen doc.
- **Toggle-count configuration control** — walked through; lives in the per-test configuration surfaces, exact screen unresolved.
- **7-series PCIe signal-validation false-positive bug** — open product issue Travis's team is chasing; *"that's an issue for another time."*

## Confidence notes

- **Single-microphone recording; all cues attributed to "Kemp, Bryan."** Speaker turns inferred. The Rohde stint, bench operation, and customer anecdotes are confidently Travis; several facilitator lines suggest a third participant (phrasing such as *"who are supposed to give a clear and high definition picture"*), attributed as "Facilitator."
- Competitor and platform names are transcribed phonetically: "Ruri and Schwartz"/"Rohde and Schwartz" → Rohde & Schwarz; "Riddick" is the transcript's rendering of the new Tek scope platform codename and is left as-is to match sibling chunks; "PCAE"/"PCIE" → PCIe; "Sig Test"/"SIG test" → Sig Test (PCI-SIG's analysis tool); "DSU"/"D-SKU" → de-skew; "text vote"/"textbook" → TekScope.
- Step boundaries are editorial; the discussion loops between the launcher idea and live demo mishaps ([00:22:15]) — steps are ordered by transcript time, not by topic.
- The preset-duplication test at [00:31:05] happened live with some confusion about what was selected (*"oh, no, no, they actually were all selected, sorry"*); the conclusion "same windows" is Travis's on-the-spot read, not verified behavior.
- No credentials or customer names in this segment; nothing redacted.
