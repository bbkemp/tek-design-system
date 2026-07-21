---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-nadir-kahn-competitive-landscape-and-visual-direction
flow_title: "AE Interview — Nadir Kahn: Competitive Landscape, Visual Hierarchy, and the Match-TekScope Directive"
recorded_by: "Nadir Kahn (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-14
duration: "23:17 (session total; this chunk covers roughly the second half)"
transcript_source: "uploads/transcripts/NadirKahn.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, running-test, results, setup-test-selection]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Nadir Kahn: Competitive Landscape, Visual Hierarchy, and the Match-TekScope Directive

## Summary

Second half of the 2026-07-14 AE feedback session. Prompted by the facilitators, Nadir maps the compliance-software competitive landscape: Keysight's software is old but holds ~80% market share (so match its conventions), Teledyne LeCroy has the best TX compliance software and the only combined TX+RX interface, and Rohde & Schwarz's laptop-hosted approach is disliked — on-scope testing is a Tek strength. He then critiques the prototype's flatness against the current app's color-coded hierarchy, warns it reads as a "Clarius look" / web app rather than an instrument interface, and delivers his central directive: make TekExpress look like TekScope — same grays, same greens — or it will read as *"2 disconnected pieces of software for a long time."* He wants dark mode as the default, endorses keeping the existing layout, confirms window resizing was a top field complaint the prototype fixes, and closes with *"you're on the right track."*

## Goal

Capture the AE's competitive framing and visual-direction guidance for the TekExpress redesign, including his hierarchy critique of the prototype and his match-TekScope recommendation.

## Steps

**Step 1 — Competitor scan: Keysight, LeCroy, Rohde.** Asked what competitors do better, Nadir surveys the field.

- On Keysight: *"The Keysight thing is really old at this point. I'm not even sure it's worth exploring to some extent."*
- On LeCroy: *"LeCroy probably has like the best TX compliance software and the [QualiPHY 2]… their newest one… that has the TX and RX in one user interface, which no one else has."*
- On Rohde & Schwarz: *"Rohde technically has one interface just for USB 3, but Rohde's like compliance software is not very good."*

**Step 2 — The branching-checks layout is the industry convention.** Nadir validates TekExpress's core structure.

- Nadir: *"I think the general layout is like this type of like system here where you have these checks. And this kind of like, you know, branching structure is how everyone's doing it to some extent."*

**Step 3 — The copy-Keysight argument.** Despite Keysight's software being dated, Nadir argues for converging on its conventions because of market share and engineer learning cost.

- Nadir: *"If it was my decision, I would take it close to whatever Keysight's is, even if theirs is not the best, as much as possible… Keysight has like 80% market share for high speed testing at that point. And if you're not copying exactly what they're doing, you're just creating a branch that an engineer's going to have more trouble learning. Because they already have to come in and learn TekScope. And so it needs to be as close to whatever Keysight's doing as possible in as many situations as possible."*
- Supporting evidence: Keysight's new platform (the "XRH scope," as transcribed) shipped with new back-end software *"but… the compliance [software] is the exact same; they didn't change it… probably because it's too much work to change it."*

**Step 4 — DUT panel: no complaints.** Asked directly about the DUT panel, Nadir waves it through.

- Nadir: *"No, it's pretty straightforward… I haven't seen a lot of complaints with like just the overall GUI itself. Like it's pretty straightforward."*

**Step 5 — Visual hierarchy critique: the current app out-scans the flat prototype.** Comparing the two side by side, Nadir finds the legacy color system easier to read at a glance and pins the prototype's flatness as a "Clarius look."

- Nadir: *"Because of the like coloring system, you know, like this is like an indicator of progression. These are different buttons to show, and then these are like different shaded buttons. This is kind of easier to just look at, to be honest. At a glance, like there's a hierarchy to it… which the [prototype] sort of isn't, it is more flat… like Clarius look, which I don't know, I don't know if that's like a good thing, to be honest."*
- The exchange lands on framing: the goal is *"more of an instrument interface… less than a web app."*

**Step 6 — On-scope testing is a strategic strength.** Nadir contrasts with Rohde's laptop-hosted model.

- Nadir: *"Rohde's equivalent of this doesn't even run on the scope anymore, actually… it runs on a laptop, you connect to the scope… And people do not like that. And so if you're already in the standpoint of testing on the scope, you're already in good standing to some extent."*
- Nadir, on priority: *"In the short term, like just get it looking… more like this, modern, rather than this, is a big deal overall."*

**Step 7 — Don't flatten everything: the fatigue argument.** Bryan embraces the hierarchy feedback; Nadir explains why differentiation matters for repeat users.

- Nadir: *"You don't make everything like flat, flat, and like look at the exact same… overall, 'cause when you, when you like engineer looking at this over and over, you know, you won't be able to tell that this is something I should… take a look at."* — things needing attention *"should be distinguishable… just at first glance."*

**Step 8 — Rollout strategy: evolve the GUI, don't shock existing users.** Reacting to an engineering-side concern about sharing the prototype, Nadir endorses staged change. A facilitator describes the process: about six field interviews so far, with Arpita and Ryan pooling common problems so changes can be staged to avoid *"that phobia of… new user experience."*

- Nadir: *"There's a lot of customers who are using this GUI right now… if we tell them, hey, to go to the next version… you have to do something completely different and it's not a good thing actually in the short term. So… it's probably better at first get them on the GUI itself and then sort of like improving the GUI or the functionality on top of whatever the GUI is."*

**Step 9 — Back-end architecture hearsay from other AEs.** Nadir relays how colleagues describe the TekExpress internals, arguing architecture matters more than pixel debates.

- Nadir: *"I've talked to some of the AEs and like they said… Tek Express itself is like… this like branching like back end architecture that has like all these branches going in… every direction is different and like architecturally it's kind of a disaster… for like each application you have to like go a different direction than the other one."*
- He concedes Keysight is flat too — *"Keysight's, like, Infiniium TX application, it's pretty flat like this too, like all the buttons kind of look the same for the most part"* — and notes the current TekExpress *"has a lot of dead space… wasted space."*

**Step 10 — Compliance software as a differentiation opportunity.** Nadir recounts a conversation with Gary Walden (formerly on Clarius, then 8 Series) at a product launch party, and argues compliance testing deserves flagship-level investment.

- Nadir: *"He said he had an idea of like how to do good compliance testing, but it never obviously got explored at all… make sure you guys like get his ideas inputted at least because… this is an area that someone needs to differentiate. I mean, LeCroy is the first one to… [get] the first TX/RX combined GUI… kind of up and running."*
- Nadir: *"Once we release [product codename redacted], like everything in that space is compliance testing… and so this type of software like needs the same amount of like care put into it that was put into TekScope software… back then… 2017 or so."*

**Step 11 — Demo perception: old scope + old software compounds.** Why the visual pass matters commercially.

- Nadir: *"One of the problems we're [running] into in like demoing SX is one, the scope SX itself is old, and then when you open Tek Express, it's like gets the perception even older… and it's like not even being touched… so if we could at least demo it and it looks like this rather than this, that's already like a big one in my mind."*
- Nadir: *"You're on the right track."*

**Step 12 — Hands-on with the prototype; known dead ends.** Nadir clicks through the interactive prototype; navigation is partially broken ("nav's broken"), some buttons don't work yet, and he triggers "Show MOI." The facilitators confirm this is a GUI-only pass with no functionality behind it, and that deep functionality feedback belongs with the AEs in later rounds.

**Step 13 — Dark mode should be the default.** Asked about customer preference between light and dark:

- Nadir: *"I have seen some Keysight screens, it has all black interface and dark mode interface. Whereas Tek Express has this lighter… you should have it default to dark mode and then just have light mode available."*

**Step 14 — Keep the layout; ship fast.** Nadir separates visual age from layout quality, and pushes for speed over polish debates. He also notes users found Keithley's Clarius *"too complicated, just like overall setup and stuff."*

- Nadir: *"Aside from just like the visuals… looking old, like people did like this, like overall layout of like the buttons and stuff."*
- Nadir: *"Just getting it done and out as fast as possible is much more important than, you know, getting into the weeds on like some of these things. Right now, I think this just looks really outdated."*

**Step 15 — Progress-bar accuracy recap; speed as a future frontier.** The facilitators confirm progress-bar accuracy is continuous field feedback (largely a back-end fix); Nadir adds performance as the next competitive axis.

- Facilitator: *"That was one major feedback which we were getting continuously… that the progress bar is not accurate enough."*
- Nadir: *"No one's looking at any of this stuff, like speed… versus competitors, but that's like the other area to do in the future is how fast does it actually work. Right, does it take care of, you know, multi-core CPUs, and does it use the RAM available on the scope itself, that kind of stuff?"*

**Step 16 — The match-TekScope directive.** The central visual-direction guidance of the session: TekExpress should be visually indistinguishable from a TekScope window, down to shared grays and greens. Today, Nadir says, the prototype reads more like Keysight's Infiniium software.

- Nadir: *"Honestly… I would probably just try to make it look as close to like TekScope as possible… it does look like their Infinium One software… like the OG… the idea is like if you open this on TekScope right now, it doesn't look like TekScope… if it was my decision, even on first pass, like I would make it look as close to TekScope as possible. Just because it's going to seem more integrated and less of like [an] afterthought."*
- Nadir, on tokens-level specifics: *"So like this gray, like your dark mode should be based on like this gray… like that black and… this green should be the same as that green… everything [needs] to look as close to this, because we're not changing this anytime… soon. And so ideally, because if you get stuck launching this in a way where it doesn't look like TekScope, it's just going to look like 2 disconnected pieces of software for a long time."*
- Nadir: *"That would be like the lowest hanging fruit is just like make it look like TekScope… rather than, you know, like the sort of AI generated… Clarius look… it's like a web app look. Not a… interface [look]."*
- Precedent cited: *"The same way when you open [SIM] on TekScope now. It looks like TekScope. It just opens in a new window, like the same interface."*

**Step 17 — "TekScope" naming confusion; the SX/DX install base is shrinking.** Nadir explains the Terminator-era interface is also called TekScope but is a completely different, ~25-year-old UI — and its host platforms are declining.

- Nadir: *"The amount of people using Terminator like SX, DX is like declining every year… DX, SX doesn't use this interface. The Terminator interface is completely different than this TekScope. They're both called TekScope, but that TekScope is… completely different… that's the 20 or [25] year old interface that was correlated with this… compliance software."*

**Step 18 — Resizing / full-screen was a top field complaint; prototype fixes it.**

- Nadir: *"Oh, dude, I forgot about the other one. So the other one is like just resizing it. That was one of the biggest problems. People wanted to go full screen… because it's like this big on a 4K monitor. It's like literally this big… people are using it on different… screen sizes."*
- On the prototype supporting resize: *"It sound[s] like you fixed that already."*

**Step 19 — Wrap.** Nadir's closing: *"That was the last… thing I have, basically… no, if you can make it look like TekScope, that's great."* The facilitators thank him and agree to keep the feedback channel open.

## Annotations

- **Competitive map (as stated by Nadir):** Keysight = ~80% market share in high-speed testing, dated software they chose not to rewrite for their new platform; Teledyne LeCroy = *"best TX compliance software"* and *"the TX and RX in one user interface, which no one else has"* (their newest, transcribed as "Qualify Two" — likely QualiPHY 2); Rohde & Schwarz = single interface for USB 3 only, laptop-hosted, *"not very good"* and *"people do not like that."*
- **Convention beats innovation at the interaction layer.** Nadir's copy-Keysight argument is explicitly about learning cost: engineers *"already have to come in and learn TekScope,"* so diverging from the dominant player's compliance-software conventions adds friction. Keysight's own refusal to change its compliance software across platform generations is cited as proof the conventions are sticky.
- **On-scope execution is a moat.** Rohde moved compliance testing to a laptop and users hate it; Tek testing on the scope is *"already in good standing."*
- **The match-TekScope directive is token-level guidance.** Nadir doesn't just want family resemblance — he names specific values: dark mode based on TekScope's gray, *"this green should be the same as that green."* Rationale: TekScope's look isn't changing soon, and a mismatched TekExpress reads as *"2 disconnected pieces of software"* — the SIM plugin is his precedent for how integrated should feel.
- **Hierarchy over flatness, for expert fatigue reasons.** The legacy color system (progression indicators, shaded button classes) gives at-a-glance state legibility that a flat "Clarius look" / *"web app look"* loses. Attention-worthy items *"should be distinguishable… just at first glance."*
- **"Clarius look" is used pejoratively twice** — once for the prototype's flatness, once recalling that users found Clarius *"too complicated, just like overall setup."* Within this session "web app," "CSS looking bootstrap" (a facilitator's phrase), and "AI generated Clarius look" are the anti-pattern vocabulary; "instrument interface" is the target.
- **Demo optics compound hardware age.** Old scope + old-looking software each make the other feel older; a modern TekExpress visibly *"being touched"* has direct selling value.
- **Compliance software as strategic differentiator.** With a coming product generation (codename redacted) *"everything in that space is compliance testing"* — Nadir argues for flagship-level ("TekScope circa 2017") investment, and for harvesting Gary Walden's unexplored compliance-testing ideas.
- **Staged-rollout consensus.** Both sides agree: modernize the GUI first for existing customers, then layer functionality changes — avoiding *"that phobia of… new user experience."* The facilitators are pooling ~6 field interviews (via Arpita and Ryan) to rank common problems.
- **Performance is the next competitive axis nobody measures:** multi-core utilization, RAM usage on the scope, speed vs. competitors — explicitly out of scope for the UI pass but flagged for the future.

## Friction notes

- **The prototype is too flat to scan.** *"At a glance, like there's a hierarchy to it [the current app]… which the [prototype] sort of isn't, it is more flat… like Clarius look, which I don't know if that's like a good thing, to be honest."*
- **The prototype doesn't look like TekScope — and that's the launch risk.** *"If you open this on TekScope right now, it doesn't look like TekScope… if you get stuck launching this in a way where it doesn't look like TekScope, it's just going to look like 2 disconnected pieces of software for a long time."* He says today it resembles Keysight's Infiniium software more than TekScope.
- **Current TekExpress window can't resize / go full screen** — *"one of the biggest problems… it's like this big on a 4K monitor."* (Prototype reportedly fixes this.)
- **Current TekExpress wastes space** — *"this has a lot of dead space… wasted space."*
- **Progress bar is not accurate enough** — reiterated as the single most continuous field complaint; the fix is acknowledged to be mostly back-end.
- **Back-end architecture described (secondhand) as "kind of a disaster"** — per-application branching in every direction, per other AEs.
- **Demoing today actively hurts perception:** opening TekExpress on an SX *"gets the perception even older… it's like not even being touched."*
- **Prototype dead ends during hands-on:** navigation partially broken, several controls inert ("These don't work right now"), interaction *"a little loose… not accurate enough"* — acknowledged as expected for a GUI-only pass.

## Cross-references

- The DUT panel Nadir cleared in Step 4: [`setup-dut`](../screens/setup-dut.md).
- The checks/branching test-tree structure he calls the industry convention: [`setup-test-selection`](../screens/setup-test-selection.md).
- The progress/run state behind the accuracy complaint: [`running-test`](../screens/running-test.md); pass/fail color hierarchy: [`results`](../screens/results.md).
- First half of this session (pain points, reports, automation): [`ae-nadir-kahn-pain-points-and-automation`](./ae-nadir-kahn-pain-points-and-automation.md).
- Chris B.'s parallel AE session (reports/rerun focus) for cross-AE synthesis: [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md).
- The staged-rollout framing matches the transition strategy in [`ui-redesign-mantras-and-transition-strategy`](./ui-redesign-mantras-and-transition-strategy.md).
- Market-share and platform context complements [`customer-market-and-platform-context`](./customer-market-and-platform-context.md).

## Pending references

- **TekScope (new platform) visual reference** — the grays/greens Nadir wants TekExpress to inherit are not documented in this corpus; a TekScope screen/token reference would make the match-TekScope directive actionable.
- **SIM on TekScope** — cited as the precedent for an integrated plugin window; not documented.
- **Competitor software** — Keysight Infiniium TX / "Infiniium One," Teledyne LeCroy QualiPHY (2), Rohde & Schwarz laptop-hosted suite: none have corpus subjects yet. Per corpus rules these would be full competitor subject folders when material exists.
- **Terminator-era TekScope (SX/DX interface)** — the ~25-year-old sibling interface sharing the TekScope name; undocumented.
- **Gary Walden's compliance-testing ideas** — referenced as unexplored; no artifact exists to corpus.

## Confidence notes

- **Single-microphone recording; every transcript line is attributed to "Kemp, Bryan."** Speaker turns are inferred from context. Nadir's turns are confident where content is field/competitor experience in the first person; Bryan's are confident where content references the design system or prototype internals. A second Tek facilitator is present (references to "Arpita and Ryan," "I've spoken to around six of them," and questions phrased unlike Bryan's); facilitator attribution is deliberately generic where uncertain.
- **Competitor names are mis-transcribed throughout and normalized in quotes:** "Keyser"/"key sites" → Keysight; "LaCroix" → (Teledyne) LeCroy; "Roadie" → Rohde (& Schwarz); "Qualify Two" is kept as transcribed but is likely *QualiPHY 2*; "XRH scope" (Keysight's new platform) is kept as transcribed — exact product name uncertain.
- **Redaction:** an unreleased Tek product codename (transcribed as "JiraFalcon"; the same program's launch party is mentioned in the Gary Walden anecdote) is redacted as "[product codename redacted]" per the sensitive-info rule. One expletive is asterisk-censored in the source itself.
- **The "dead space / wasted space" exchange (Step 9) has ambiguous referent** — read here as describing the current TekExpress, but the rapid back-and-forth makes prototype-vs-current attribution uncertain.
- **One garbled passage** — *"we have this like poll that was made after we've made it hilarious"* — likely refers to a poll made after Clarius shipped; unresolvable from the transcript and therefore only paraphrased (Step 14).
- **No per-turn timestamps exist** — the Teams export collapses the session into a single block; step ordering follows the transcript's linear flow but boundaries are editorial.
- Closing ~30 seconds (a colleague interrupting, people waiting outside, goodbyes) is small talk and omitted.
