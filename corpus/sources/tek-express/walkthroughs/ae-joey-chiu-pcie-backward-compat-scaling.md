---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-joey-chiu-pcie-backward-compat-scaling
flow_title: "AE Interview (Joey Chiu) — PCIe Backward-Compatibility Scaling and Test Setup"
recorded_by: "Joey Chiu (AE, TekExpress internal customer); Bryan Kemp (facilitator); TekExpress application-team members present (incl. Arpita)"
recorded_date: 2026-07-14
duration: "38:11 (full session; this chunk covers roughly the first two-thirds)"
transcript_source: "uploads/transcripts/JoeyChiu.docx"
screens_visited: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, setup-test-selection-limits-editor]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, setup-test-selection-config, setup-acquisitions, setup-test-selection-limits-editor, options-dropdown, status-log-view]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Joey Chiu) — PCIe Backward-Compatibility Scaling and Test Setup

## Summary

First AE feedback session in the July 2026 interview series. Joey Chiu — the AE for TekExpress, who describes himself as an internal customer who validates the application and channels customer feedback — reacts to the new TekExpress UI prototype and then drives the existing TekExpress PCIe application live, walking through where the current UI fails to scale as PCIe adds generations. TekExpress application-team members are present and add roadmap context (three-phase modernization, .NET/backend throughput work). The dominant theme: **backward compatibility makes every setup surface grow without bound** — data-rate checkboxes, the test tree, preset selection, and the limits editor all get worse with every new PCIe generation.

## Goal

Surface pain points, customer requests, and scaling risks in the existing TekExpress PCIe application to feed the redesign backlog; get an AE's first reaction to the re-skin prototype.

## Starting state

In-person session (single microphone). The new TekExpress UI prototype is open on one machine; the existing TekExpress PCIe application is running on a scope beside it. Joey also notes a DisplayPort TekExpress install is present but disabled on the demo unit.

## Steps

**Step 1 — Joey establishes his role and the feedback channel.** He is the AE for TekExpress; the application team treats him as an internal customer.

- *"I'm the AE for Tek Express … Tek Express does not go directly to the customer … I'm like an internal customer for them to, you know, just validate things … or give feedback. And sometimes I just connect people."*
- *"It will be Shubhashi and me, and then we can channel everything to them."*

**Step 2 — Application team frames the three-phase roadmap.** Phase 1 is a front-end re-skin with no functional change; phase 2 is usability changes that may break current panels; phase 3 is new features and application-specific work.

- *"The first set of changes that they are planning to do is just like change the colored themes, maybe a little bit orientation of buttons … the button that you see today in Tek Express [is] the same buttons, maybe in a little bit different look … the functionality remains all same, so [they] will only rework on the front end."*
- *"Say something like today, if we find, OK, this log … the logging mechanism, it is pretty flat, we did not get a lot of information from it, so how to make it better … those kind of changes, which is like break the current panels … those will be coming in the second phase."*

**Step 3 — Application team describes the backend throughput work (out of UX scope but context for phase 1).** .NET framework upgrade plus a measurement-service architecture to run measurements in parallel.

- *"The first priority of Tek Express is to gain throughput … we are upgrading the .NET frameworks … [moving] to a kind of measurement service where they can run things in parallel to gain more speed … Things what used to take one hour yesterday, maybe today it take 20 minutes."*

**Step 4 — Clarius learnings are flagged as an input the team must not lose.** Joey pushes to carry forward what was learned from the Clarius effort even though the product itself is winding down.

- *"My take, let's not … go to the Clarius part, because that is something we tried and it did not work out for some reason … but I mean a lot of [the] learnings are so relevant."*
- *"It will be sad to, like, lose all the context that we've been learning from [Clarius] … there's application-specific feedback that would be collected, which can be leveraged."*

**Step 5 — Bryan shows the prototype and asks the framing question.** The prototype is described as an early shell, close to one-to-one with the current app.

- *"This is like the look and feel kind of thing … it's not final, but it's like getting there … the replica of it is like pretty much gonna be one-to-one."*
- *"Would you have any concerns showing this to a customer, or [a] customer using this?"*

**Step 6 — Joey raises PCIe backward compatibility as the core scaling problem.** Screen: [`setup-dut`](../screens/setup-dut.md) (PCIe variant — data rate / generation selection).

- *"One thing I want to know is like PCI is one of the technolog[ies] that will test backward compatibility. So … when you have a Gen 6 device, the customer typically … will not just test Gen 6, we will have to test all the way back to Gen 1. So, how do we make that flow better?"*

**Step 7 — Application team elaborates the data-rate real-estate problem.** Each generation adds a data rate (2.5, 5, 8, 16, 32, 64, 128 GT/s …) rendered as checkboxes; the panel cannot absorb ten more generations.

- *"The data rate support in each of these generations [is] backward compatible … So the real estate is kind of — if we are talking about Gen 12, Gen 13, you know, like how many data rates you need to fit in here. So is there a way that we can, you know, seamlessly [ensure] it will never cause another real estate problem or an overload of settings problems? So that is something that Jo[e]y is talking about."*
- *"If you were talking about five years, 10 years down, then I'm going to have Gen 15, 16 — you should not see a cumbersome UI here … too many checkboxes to select."*

**Step 8 — A more compact representation is floated; compliance semantics of unchecking are debated.** Idea: replace per-rate checkboxes with a table. Bryan asks whether unchecking rates breaks compliance; Joey clarifies that compliance does not require a single run.

- App team: *"Instead of having separate checkbox, we want to have a table kind of thing that's more compact."*
- Joey: *"The compliance thing is more like managing the limits right now. Because customer can, like, run one run, that's just 2.5 and 5, and then run another run testing higher data rate. So technically … compliance doesn't require you just complete everything in one run."*
- Bryan asks whether data rates could be labeled by generation; answer: *"the data rate essentially … means the previous generation"* — Gen 4 selection implies Gen 1–4 rates — and labeling each rate with its generation was judged *"not necessarily"* needed.

**Step 9 — Joey shows the test tree and its scaling failure.** Screen: [`setup-test-selection`](../screens/setup-test-selection.md) (PCIe variant — hierarchical test tree per data rate).

- *"Just [t]here, we have a long tree. We have 2.5, we have 5 … and 16 and so on. Just imagine like if there are like 10 more data rates here — if we just want to do a very selective few test[s] — lot of clicks here, lot of collapse and expand and things like that."*
- *"Test tree is good for like if it is [a] good 20 tests there, but if there are like 200 tests there on a tree, [it] often gets very difficult to select things there."*
- One idea, offered tentatively: *"Just want to have … a totally separate tab for separate data rate and have shorter trees there, I do not know."*

**Step 10 — Joey critiques preset placement: presets are test configuration but live in the wrong tab.** Screen: [`setup-acquisitions`](../screens/setup-acquisitions.md) / [`setup-test-selection-config`](../screens/setup-test-selection-config.md) (PCIe variant).

- *"I don't really like … how it was designed right now … PCIe, some of the measurement[s] will take the preset here. So, like — I think considering preset is part of the test configuration, but it resides in this tab, which is like not very intuitive … because user may not be aware that they selected all 10 preset[s]."*
- The risk: *"People tend to miss out that — okay, if I just want to select one preset here — they might miss out and ultimately run with all the preset[s] and it will take maybe 10 times more time."*
- Characterization vs. compliance drives the need: *"In a characterization scenario, they might want to test all preset[s], but in the compliance scenario … they already know like these two preset[s are] the best preset for their device, and they just test these two — they can pass [a] single preset, it's compliant."*
- On merging preset selection into test selection, Joey stops short of a prescription: *"I don't have a strong, like, very concrete idea of what [it] should [be]"* — and the group notes it *"would make things nested"* and that the surface *"will also grow [with] each data rate … it will be a very … nested [UI]."*

**Step 11 — Joey untangles preset test vs. signal test for Bryan.** Two different things share the word "preset," which itself confuses.

- *"The preset test is like just test the preset itself, but the signal test — it will configure the device to send us the preset while testing other things like the eye [diagram]."*
- Bryan: *"When you select the presets here and then you go to the test selection — it's slightly confusing."* Joey: *"That's one of the reason[s] I brought this up … I'm not really a fan."*
- Preset counts by generation: Gen 1 has a single preset (no selection shown), Gen 2 has two, Gen 3 onward has the full preset set, which stays the same through Gen 5.

**Step 12 — Joey flags instrument connection settings as hidden in the wrong place.** Screen: instrument settings reached via menu (cf. [`options-dropdown`](../screens/options-dropdown.md)).

- *"The instrument settings are like slightly hidden here … I can understand the initial thought was that scope is … the only instrument that we need to configure — TekExpress is already run[ning] on [the] scope. Now, because there are other instruments … involved for like automation purpose[s], maybe we can reconsider where should we put these instrument connection settings."*
- Bryan agrees it belongs at the top level as part of physical setup: *"At the beginning, [you] plug it [in] … you're doing the physical setup … before you're doing any measurements or talking about tests, you set it up."*
- Bryan also relays prior feedback about the menu it currently lives in: *"We've heard this, it's like a … junk drawer."*

**Step 13 — Scope parameters and analysis parameters: fine to keep detailed, but tier them.** Some are user-editable, some spec-locked.

- Joey: *"These are the scope parameter[s] and also the analysis parameter[s] … For this, I'm fine. These are like very detailed settings. We can have [them] somewhere that's more hidden, but more like instrument hardware itself — I would hope there's like a separate, more top layer."*
- App team on why they're exposed at test level: *"Some are like exposed — user can change — some are like fixed for the spec … for example, you want to take a longer waveform, you can configure here, but that's not necessarily the option if you just want to do compliance. Same for the scope bandwidth — scope bandwidth is actually locked because this is … spec required."*

**Step 14 — The limits editor is the next scaling casualty.** Screen: [`setup-test-selection-limits-editor`](../screens/setup-test-selection-limits-editor.md) (PCIe variant).

- Joey: *"The limit editor might also be something that we can think about, 'cause it's gonna be … super long."*
- Editing requires a mode switch: *"We need to first click the user-defined mode instead of compliance."* Rows do reduce when tests are unchecked, but: *"If you have 7 generations and 200 test[s] … how long is this gonna be?"*
- Current mitigation is weak: *"This is like a horizontal scroll, but … that also do[es] not suffice, so you just double click here so that the column kind of expands."*

**Step 15 — Historical framing: the software predates the generation explosion.** App team explains why the UI is overloaded.

- *"When it was developed … maybe a one generation, new generation thing — things [were] pretty easy. This particular software, this technology is kind of overloaded with generation after generation; it's [coming] thick and fast, every year there is a new [spec] … and everything is backward compatible."*

**Step 16 — Bryan probes actual usage: how often do users touch prior-generation settings?** Answer: rarely — most users are compliance-first.

- Bryan: *"Are people digging into 3rd and 2nd [generation] and changing a bunch of things?"* Response: *"Typically not. Less than 50% [of] people have to change. So most of the time they purchase our solution to do the compliance testing … that's the majority of the user[s], and then they want to troubleshoot something."*
- Bryan's takeaway framing: *"Some of that stuff we can not expose all at once, especially when it's an aggregate of all of the generations, but [users should] have access to it — not like click a button [and be] scrolling forever."*

**Step 17 — Automation-sequencing optimizations discussed and confirmed already done (backend, not UX-visible).** Joey suggests optimizing pattern-toggle order across data rates; the app team confirms it exists.

- Joey: *"There's automation … we can have a device or AFG sending signal to the device to toggle its pattern. There are some optimization[s] … I feel we can pursue."*
- App team: *"We have done that, actually … we do all the reset[s] … whichever toggle is the shortest … [and the] ISI connection … you need to do that … at the end, so that the user needs to do the connection only at the end."* Both sides agree: *"that's more of an internal thing … visibility-wise, it may not be so visible on the outside layer."*

## Friction notes

- **Data-rate checkbox real estate does not scale with PCIe generations.** *"If we are talking about Gen 12, Gen 13 … how many data rates you need to fit in here … it will never cause another real estate problem or an overload of settings problems?"* And: *"You should not see a cumbersome UI here … too many checkboxes to select."*
- **Test tree breaks down past ~20 tests.** Joey: *"Test tree is good for like if it is [a] good 20 tests there, but if there are like 200 tests there on a tree, [it] often gets very difficult to select things there."* Corroborated: *"PCI is going up to Gen 7 and then Gen 8 … it's just gonna explode the UI."*
- **Preset selection is in an unintuitive tab and silently costs users 10x run time.** Joey: *"It resides in this tab, which is like not very intuitive … they might miss out and ultimately run with all the preset[s] and it will take maybe 10 times more time."*
- **"Preset" is overloaded** — a preset *test* (tests the preset signal itself) vs. presets applied during *signal* tests (eye diagram etc.). Bryan, as a fresh pair of eyes, was confused until Joey untangled it; Joey: *"I'm not really a fan."*
- **Instrument connection settings are hidden in a menu ("junk drawer") instead of surfaced as a first-class setup step.** Joey: *"The instrument settings are like slightly hidden here … maybe we can reconsider where should we put these instrument connection settings."*
- **Limits editor grows unboundedly and is hard to edit.** *"It's gonna be … super long … a horizontal scroll, but … that also do[es] not suffice."*
- **Logging is flat and low-information** (app-team self-critique, queued for phase 2): *"This log … the logging mechanism, it is pretty flat, we did not get a lot of information from it."*

## Annotations

- **Joey Chiu (on his role):** *"Tek Express does not go directly to the customer … I'm like an internal customer for them to … validate things … or give feedback."* AEs are the proxy voice of customers for TekExpress.
- **Application team (roadmap):** Phase 1 = re-skin only (*"the functionality remains all same, so [they] will only rework on the front end"*); phase 2 = panel-breaking usability changes; phase 3 = new features. Backend in parallel: .NET upgrade + parallel measurement service targeting *"things what used to take one hour yesterday, maybe today it take 20 minutes."*
- **Application team (why the UI is overloaded):** *"This technology is kind of overloaded with generation after generation … every year there is a new [spec] … and everything is backward compatible."* The scaling pain is structural, not incidental.
- **Joey (Clarius learnings):** *"It will be sad to … lose all the context that we've been learning from [Clarius]."* Clarius is winding down (*"Clari[u]s [is] going down, so we're now putting some love into [TekExpress]"*), but its UX learnings and application-specific feedback are considered a live input to the TekExpress redesign.
- **Application team (compliance model):** Compliance limits, not run structure, define conformance — users may split data rates across runs. Redesigns that treat "all boxes checked in one run" as the compliance definition would be wrong.
- **Application team (competitive posture on trees):** *"Keys[ight] is doing the same … tree [navigation] is standard with all the vendors"* — so a better-scaling selection model is a differentiation opportunity, not table stakes.
- **Usage insight:** fewer than half of users ever modify prior-generation settings; the majority buy TekExpress for compliance and only dig deeper when troubleshooting. Progressive disclosure of prior-generation detail is therefore viable.

## Cross-references

- Data-rate / device selection surface: [`setup-dut.md`](../screens/setup-dut.md) (documented from the DisplayPort AppEmulator; the PCIe variant Joey demos adds per-generation data-rate checkboxes).
- Test tree: [`setup-test-selection.md`](../screens/setup-test-selection.md); per-test configuration: [`setup-test-selection-config.md`](../screens/setup-test-selection-config.md).
- Acquisition/preset surface: [`setup-acquisitions.md`](../screens/setup-acquisitions.md).
- Limits editor: [`setup-test-selection-limits-editor.md`](../screens/setup-test-selection-limits-editor.md).
- Instrument-settings menu placement: [`options-dropdown.md`](../screens/options-dropdown.md).
- Flat-logging complaint relates to [`status-log-view.md`](../screens/status-log-view.md).
- The April 2026 walkthrough covering the same product surfaces: [`tek-products-walkthrough.md`](./tek-products-walkthrough.md); prior UX feedback session: [`ux-feedback-and-open-questions.md`](./ux-feedback-and-open-questions.md).

## Pending references

- **TekExpress PCIe application screens** — all documented screens are from the DisplayPort AppEmulator. The PCIe variant's data-rate selection panel, preset selection tab, preset-count-by-generation behavior, and PCIe test tree are not yet captured as screen chunks.
- **Instrument connection settings dialog** — mentioned as "hidden"; the dialog itself is not documented as a screen.
- **AFG-driven pattern-toggle automation flow** — referenced (AFG toggles DUT pattern per data rate; ISI connection deferred to end); no corpus documentation.
- **Clarius UX learnings / feedback archive** — repeatedly cited as leverageable input; not in this corpus.
- **DPO7 scope context** — Joey/team mention the mismatch between TekExpress look-and-feel and the scope UI it runs on (*"the software look and feel of Tek Express and the actual [scope] background is kind of mis[matched] because the blue screen"*); no corpus chunk covers the host-scope UI.

## Confidence notes

- **Single-microphone transcript: every line is attributed to "Kemp, Bryan" in the source.** Speaker turns above are inferred from context. Joey Chiu's turns are identified by AE-role self-description and first-person PCIe deployment experience; application-team turns by roadmap/backend ownership language (one team member is addressed as "Arpita"; a "Shubhashi" is named as Joey's co-channel for feedback but their presence/turns cannot be confirmed). Attribution of individual sentences within fast exchanges is uncertain throughout; quotes are verbatim but the speaker labels are best-effort inference.
- The transcript has only one timestamp (0:03) — steps are ordered by transcript sequence, not timed.
- Transcription quality is rough (live single-mic capture): "Tech Express" = TekExpress, "Claris/Clarius/Claire's/clearance" = Clarius, "Keyser" = Keysight (inferred), "Joy" = Joey, "tree innovation" is read as "tree navigation" (inferred). Bracketed insertions in quotes are minimal repairs of transcription garble; original wording is otherwise preserved.
- The session opens mid-conversation ("started transcription" after talk began); some framing before 0:03 is lost.
- Small talk and logistics (seating, recording setup, event announcements) are omitted.
- The demo unit's exact application version is unknown; Joey notes it lacks Gen 6 ("I'm not having Gen 6").
