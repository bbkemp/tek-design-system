---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-will-teverovsky-session-files-options-and-program-context
flow_title: "AE Interview — Will Teverovsky: Session Files, Options Overhaul, Platform Strategy, and Closing Verdict"
recorded_by: "Will Teverovsky (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-13
duration: "1:38:12 (session total; this chunk collects the session-file/Options thread, the mid-session program-strategy interlude, product prioritization, and the closing verdict)"
transcript_source: "uploads/transcripts/WillTeverovsky.docx"
screens_visited: [options-dropdown]
applies_to: [tek-express, tek-design-system]
related_screens: [options-dropdown, setup-dut-session-browser, setup-preferences, reports-configuration, reports-view-settings]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Will Teverovsky: Session Files, Options Overhaul, Platform Strategy, and Closing Verdict

## Summary

This chunk collects the app-level and program-level threads of the 2026-07-13 session, which are interleaved with the panel walkthroughs in the recording. Will names saving/opening test setups as a standing pain point — session files live on a virtual X: drive, the save/recall commands hide under Options, and he has to coach customers through it every time. The room converges on "Options is the junk drawer" and a standard File-menu expectation. Mid-session, a colleague (Gary) probes the program's goals and platform, and the product leader lays out strategy: EXE-only (explicitly not browser-based), usability that scales from scope to PC, a multi-PC "cockpit view" control-station roadmap, a zero-new-manual-lines North Star, and design running one quarter ahead of engineering. Product prioritization follows: PCI Express first ("we capture 50% of the business"), DDR discouraged (fragmented across DPOJET/Clarius/TekExpress), DisplayPort urgent for Clarius license migration, plus a cautionary lost-trust story about a Gigabit Ethernet customer. Will closes with a positive look-and-feel verdict — align with TekScope, one stylized label font flagged — and "the best thing about it is that it works."

## Goal

Capture the session-file/Options usability gap, the program's platform and product strategy as stated to an AE audience, and the AE's overall verdict on the prototype.

## Steps

**Step 1 — Will names the pain point unprompted: saving and opening test setups.**

- Will: *"There's certain things in here like… why is saving and opening test setups incredibly difficult and frustrating for some reason, right? When I have to ask a customer, hey, can you get a Tek Express session and send it over to me? How that interacts with the file system and how that interacts with the GUI is a bit of a headache and I kind of have to coach him through it every time."*

**Step 2 — What a session actually is.**

- Will: *"Tek Express will create an X drive on the hard drive where some session files live. What we're looking for is like a bundle of files, including the configuration of this environment and the waveforms that it eventually collects and the results in PDF or HTML files or whatever it is — package that up and reuse it or send it… to rerun something or to run another run of the same thing or send it to someone for help or a colleague."*

**Step 3 — Discovery failure: save/recall hides under Options.** Screen: [`options-dropdown`](../screens/options-dropdown.md).

- Will: *"First of all, no one knows to look in options for it."* Facilitator: *"I got confused. Why is it an option?"*

**Step 4 — The product leader's session-portability story.** (Customer name redacted — see Confidence notes.)

- Product leader: *"There is [customer] in the Bay Area. There is [customer] in Vietnam. There is [customer] in Bangalore. All three share… the session file. Suppose I ran a [customer] device in Seattle and I'm going to move the system to Bangalore. I will move the files along with it saying that this device, this chip, has run this test on this box of Tektronix. And you just open the system there and replicate it."*
- Product leader: *"Now, that is like the file open… by PowerPoint… It cannot be in options."*

**Step 5 — File menu expectation.**

- Room consensus: *"There should be a start menu, file menu, the typical Windows user flow."* / *"If I go to configuration, 10 years back, as a developer, I would say file, settings — all those standard[s]… that would be the standard I would love to follow, because it does not force a customer to learn something new; it naturally takes you to that."*

**Step 6 — Options verdict: junk drawer, needs an overhaul.**

- Will: *"Honestly, just the option menu overall probably just needs somewhat of an overhaul rework."*
- Will, sorting keeps from throws: *"I like instrument control settings being in here, for example, but I hate the save and recall stuff being in here."* (Keeps also floated by the room: theme/black-and-white, keep-on-top.)
- Product leader: *"I will tell you in simple language, all the crap is in [options]."* Bryan, later: *"It's good hearing things like options is the junk drawer."*

**Step 7 — Gary probes the program's goal.**

- Gary: *"Is the goal of the program… just to kind of give a new look and feel to the existing Tek Express, or is it to try and address usability issues and change stuff?"*
- Bryan/team: *"The workflow… lift and shift now is… in-flight. We're getting feedback on just — is everyone comfortable with this? We know changing software that's been around for 15 years can be jarring… The first phase is going to be only the UI re-skinning, and after that we'll start with… usability… If we keep hearing… big things that are like small changes… quick, easy wins [we] could talk about them sooner. But we're hearing big themes come up already… with multiple people."*

**Step 8 — Platform strategy: scope + PC, EXE-only.**

- Gary: *"Where is this program gonna live? Is it gonna run on both PCs and on the scope?"* Answer: both. Product leader: *"This usability has to scale to a PC. Either way — so it runs on a scope [and] control[s] something on a PC, or it runs on the PC and controls something on the scope."*
- Gary: *"When it gets started on the PC, is it going to open as its own application or is it our goal that it runs in a browser?"* Product leader: *"No, EXE… Don't run it in a browser… It's going to be an EXE only."* And: *"If it's… Linux, there will be somebody who would fantasize to make it… run on a web or browser… And I don't want to do that."*
- Product leader, on stability of convention: *"This is bandwagon effect — like a keyboard that's there for 15 years… I want it to stay as natural… By the way, [Keysight] also has not changed its usability for 20 [years]."*

**Step 9 — North Star: no manual required, no new manual lines.**

- Product leader: *"The current pain point [must be] dumbed down to an extent that… if I move from a Subaru to Toyota, I'm not going with a user manual… If there is no explanation [of] why this button is good to be in this place, what it saves in… gray matter… Plus I don't add a single line into my user manual — I would love to do that… no matter whatever it is, small or big change."*

**Step 10 — Roadmap: multi-PC "cockpit view" control station; design runs a quarter ahead.**

- Product leader: *"I control multiple PCs as a control station. So Tek Express is going to be something that's going to control — I'm going to use multiple PCs to run measurement and bring the data back and consolidate that here. So when I was in engineering, I used to call it… a cockpit view. I am able to control the whole plane sitting at one place."*
- Product leader: *"That's… in the roadmap to be Q2. So you guys have to be one quarter ahead in design to what engineering would pick up."*
- Gary asks for the prototype to self-drive: *"Is this a beta that… you guys could send me and I could just run on my own?"* Bryan: *"Absolutely. This is a URL. This is a Figma."*

**Step 11 — Product prioritization: PCI Express first.**

- Product leader: *"I would really recommend you do PCI because that gets me the biggest business… It's consistently having maintenance release[s] every three months… If we sell PCI, we capture 50% of the business."*
- Will, agreeing: *"I would definitely focus on PCI Express… that's kind of the prime technology that we're trying to tackle, [we] have the most users, users have the most comfortability there."*
- On DDR (which the team had used for early research): Product leader: *"There are multiple flavors of DDR which I don't recommend you guys to do… some DDR is in [DPOJET], some DDR is in Clarius, some is in Tek Exp[ress]."* And: *"DDR is kind of — sorry, Will, to be candid — we are at the edge of losing business."* Will: *"That has not lived in Tek Express for very long and we don't sell it often. We don't know how to use it in the same depth."*
- Will's popularity map: *"Tek Express Gigabit Ethernet is a popular one. Tek Express USB 2 is even still a popular one. Tek Express USB 3 is a popular one… Some of the high-speed Ethernet stuff is pretty important — 400G and 100G… But the PCI Express is inarguably the one to focus on first."*

**Step 12 — The lost-trust story: Gigabit Ethernet shootout.** (Customer name redacted.)

- Will: *"There's a customer that I would recommend that somebody gather feedback from that is going to have us do a shootout for Gigabit Ethernet on Tek Express, and they would have just gone with us, but for some reason they really disliked the Tek Express. I don't know if it was bugs or flows or whatever, but they've lost trust of it for Gigabit Ethernet. And so now they're putting us in a competitive space and saying, like, hey, you know, I prefer Tek, but… this is what we have to do now."* (A named Tek AE is running the engagement.)

**Step 13 — DisplayPort urgency: Clarius license migration.**

- Product leader: *"We are bleeding money because we have sold 13 licenses in Clarius. We need to move those customers or we have to give them a credit note saying that you buy something else… DisplayPort would be the first product that I would target to move, because we need to ensure that the customer is not so unhappy with us in course of time."* Clarified: *"I don't want to push you guys… [don't] run to the end goal without taking time and understanding."*
- Suggested study mix for the design team: three distinct applications spanning compliance and conformance — PCI, DisplayPort, MIPI.

**Step 14 — How the design team should learn the domain.**

- Product leader: *"Why don't you talk to [the] PCI… product owner — be a fly on [the] wall and… observe that person running the software. And how do you start? Where do you go? … How do you run Gen. 5?"*
- Product leader: *"Do you know an Airbus pilot cannot [fly] a Boeing all their life? … Similarly in compliance applications, the guys who do compliance really need to understand why is this button here… Why does it need to do X and not Y? Those questions I request both of you to ask."*
- Will: *"You'll get there because it takes time. It took us three years to get to understand Tek Express."* Follow-ups agreed: remote instrument access via technical support engineers; a TSC PCI Gen-3 walkthrough with Steve Guerrero (arranged via Travis).

**Step 15 — Reports: good enough for now.**

- Will: *"Reports I'm not going to comment too much on. I think that's another thing that's kind of future or less important than the core workflow. And it is actually the end deliverable that people need from this. But what Tek Express does today is more or less good enough. I love the user logo thing."* (*"The groupings, there's maybe some work to do there."*)

**Step 16 — Run-control buttons don't need permanent prominence — but mind panic-stop.**

- Will, asked if start/pause/stop need their own dedicated column: *"No… this could share a spot here or here… They might not even need to always be visible or even prominent necessarily. My hesitation there… was something like, hey, there might be a situation where I want to cancel and exit with the least frustration possible. That might be the situation where I'd want that ready to access. But otherwise, if this bar is letting me know what's going on and has a clear and obvious indicator of like, hey, we started, we're running, we're ready, we're not, we quit… maybe that's sufficient."*
- Room addendum: *"You don't want to accidentally press it, is the other thing."* Will: *"Yes, that's important."* / *"You want to use it when you want to use it, and you really don't want to use it when you don't want to use it."*

**Step 17 — What should not change.**

- Will: *"My gut reaction is like consider changing everything, but that's not necessarily true, right? Like one of the things I liked about Clarius was that it was kind of changing everything into what I thought would have ended up as a more useful workflow. There are always, you know, downsides… But, like, really, the best thing about it is that it works."*

**Step 18 — Closing verdict on colors, font, contrast.**

- Will: *"It seemed, honestly, it seemed good… I like the overall look and feel. It feels fairly natural."*
- On brand alignment: *"Tek [S]cope is going to be the thing that lasts longer, right? So as close it is to that — sharing colors and sharing look and feel — is great. This doesn't seem terribly out of place to me."*
- The one exception: *"The only thing that felt a little bit weird was actually that label right there in that font… that top level… it's the only thing stylized in that font and that felt a little bit weird. But that was the only… font, color… choice that felt out of place to me. Everything else looks good."*
- On the monospace log styling: *"I like that this is kind of like a more technical font and… looks more like… log info, which I thought was fine."*

## Annotations

- **Session files are a collaboration and portability primitive, not just save state.** Both Will (send-to-colleague, rerun, support) and the product leader (multi-site replication of a device's test record) treat the session bundle — config + waveforms + results — as the unit that moves between people, machines, and countries. Its UI today (X: drive + Options menu) does not match that importance.
- **EXE-only is a hard platform decision, stated emphatically.** Browser/Linux deployment is explicitly rejected by the product leader; Will's relieved "thank you" underscores AE alignment.
- **Design is expected to run one quarter ahead of engineering** on the roadmap (multi-PC cockpit view targeted at Q2), per the product leader.
- **The zero-manual-lines North Star** doubles as a change gate: any moved button must justify itself ("what it saves in… gray matter") and must not add documentation burden.
- **Keysight stability cited as competitive context:** *"[Keysight] also has not changed its usability for 20 [years]"* — used to argue for evolution without disorientation, alongside the "keyboard for 15 years" bandwagon analogy.
- **DDR-first research was a known mis-start.** The team's earliest corpus material came from DDR; both the product leader and Will steer future depth work to PCI Express, with DisplayPort next for business (Clarius migration) reasons. DDR is fragmented across DPOJET, Clarius, and TekExpress.
- **Trust, once lost, moves customers to competitive evaluation** — the redacted Gigabit Ethernet story is the concrete stakes: a customer who "prefer[s] Tek" is nonetheless running a shootout.
- **Reports intentionally deprioritized in this session** — contrast with the Chris B session, which covered reports in depth; Will defers ("almost like a different topic") while endorsing the custom-logo capability.

## Friction notes

- **Save/open test setups is "incredibly difficult and frustrating."** *"How that interacts with the file system and how that interacts with the GUI is a bit of a headache and I kind of have to coach [customers] through it every time."*
- **Save/recall is undiscoverable under Options.** *"No one knows to look in options for it."* / *"It cannot be in options."*
- **No standard File menu.** *"There should be a start menu, file menu, the typical Windows user flow."*
- **Options is the junk drawer.** *"All the crap is in [options]"* / *"the option menu overall probably just needs somewhat of an overhaul rework."*
- **A customer lost trust in TekExpress Gigabit Ethernet** (bugs or flows unknown) and forced a competitive shootout — the session's sharpest evidence that UX/quality problems have direct revenue consequences.
- **Prototype nit:** the stylized top-level label font is the single look-and-feel element Will flags as out of place.

## Cross-references

- Options menu (existing app): [`options-dropdown`](../screens/options-dropdown.md); session browser: [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md); preferences relocation target: [`setup-preferences`](../screens/setup-preferences.md).
- Reports screens Will declined to dig into: [`reports-configuration`](../screens/reports-configuration.md), [`reports-view-settings`](../screens/reports-view-settings.md) — covered in depth by [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md) (including the same buried-under-Options discovery failure for loop/run options).
- Panel-level segments of this session: [`ae-will-teverovsky-dut-panel-and-data-rates`](./ae-will-teverovsky-dut-panel-and-data-rates.md), [`ae-will-teverovsky-test-selection-and-contextual-help`](./ae-will-teverovsky-test-selection-and-contextual-help.md), [`ae-will-teverovsky-acquisitions-presets-status-and-results`](./ae-will-teverovsky-acquisitions-presets-status-and-results.md).
- Desktop/EXE platform direction aligns with [`desktop-integration-strategy`](./desktop-integration-strategy.md).
- Clarius as sibling product and migration source also appears in [`customer-market-and-platform-context`](./customer-market-and-platform-context.md).

## Pending references

- **X: virtual drive / session-file browser** — the file-system side of session management is not documented as a screen; [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md) covers the in-app browser only.
- **Multi-PC "cockpit view" control station** — roadmap concept (Q2 per the product leader); no artifact in this corpus.
- **Clarius** — repeatedly cited (DisplayPort licenses, merged status/results, connectivity LED, workflow praise); not a corpus subject.
- **Gigabit Ethernet shootout engagement** — customer feedback source recommended by Will; nothing captured beyond this mention.
- **MIPI (conformance) application** — recommended as part of the three-app study mix; not in this corpus.

## Confidence notes

- **Single-microphone recording; all transcript lines attributed to "Kemp, Bryan."** Speaker turns inferred. This chunk interleaves the most voices (Will, Bryan, a second facilitator, the unnamed product leader, and Gary, who is present only mid-session); "Product leader" attributions rest on consistent references to roadmap ownership, Clarius licensing, and Bangalore engineering, but individual lines could be misassigned. The product leader's name is never spoken in a form the transcriber preserved.
- **Customer names redacted** per the corpus sensitive-information rule: a major cloud/e-commerce customer in the session-portability story (three global sites, a consumer device) and the Gigabit Ethernet shootout customer (an industrial-automation company). Tek-internal names (Gary, Travis, Steve Guerrero, Madhu, Bill Israel, Arpita, Abdul, Farsana, Daniel Ganger, Cameron Lowe, Tim) are retained as in precedent chunks.
- **"Keyser" → [Keysight]** is an inferred transcription correction; context (competitor usability stability) strongly supports it.
- **This chunk is topically, not chronologically, assembled**: Steps 1–6 occur early in the session, Steps 7–10 mid-session (Gary interlude), Steps 11–14 in two bursts (mid and late), Steps 15–18 at the close. The single-block Teams export provides no timestamps to anchor them.
- Closing small talk (name spellings, meeting-slide chatter, a paused personal call) is summarized/skipped.
