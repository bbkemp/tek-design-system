---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-nadir-kahn-pain-points-and-automation
flow_title: "AE Interview — Nadir Kahn: Prototype First Reaction, Reporting Pain Points, and Automation Requirements"
recorded_by: "Nadir Kahn (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-14
duration: "23:17 (session total; this chunk covers roughly the first half)"
transcript_source: "uploads/transcripts/NadirKahn.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [running-test, status-test-status, reports-configuration, setup-dut]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Nadir Kahn: Prototype First Reaction, Reporting Pain Points, and Automation Requirements

## Summary

First half of a one-on-one AE feedback session (2026-07-14). Bryan Kemp (with a second Tek facilitator — see Confidence notes) shows Nadir Kahn the new TekExpress UI prototype and asks for workflow-level feedback on the existing app. Nadir reacts positively to the prototype overall, then surfaces a run of concrete field pain points: progress bars that jump around and hide what's actually running, nagging splash/connection-diagram windows, a DUT naming field too short for customers' report-numbering schemes, 10–11 MB PCIe Gen 5 reports filling scope SSDs, and 25-year-old button-text overflow bugs. The segment closes with a strong requirement that TekExpress remain fully scriptable — customers "program through the GUI" for 24-hour regression loops, and the automation hooks must never trip up.

## Goal

Surface high-level workflow and UI pain points in the existing TekExpress from an AE who supports high-speed compliance-testing customers, and capture his first reaction to the redesign prototype.

## Steps

**Step 1 — Session framing.** Bryan sets expectations: high-level or detailed feedback on TekExpress issues wanted; the first release is UI-only, with more rounds to follow. Nadir agrees with the sequencing.

- Facilitator: *"What we wanna hear is just like… high-level or detailed like feedback on like issues with Tek Express. Things you've heard… something which needs improvement in this from the workflow perspective."*
- Nadir: *"I think getting the GUI looking better is probably more important… short term."*

**Step 2 — Prototype shown; progress-bar pain surfaces immediately.** On seeing the prototype's running state, Nadir's first question is whether the progress bar finally works — and he wants visibility into what the test is doing while it runs.

- Nadir: *"So you have like a progress bar that like actually works correctly? … Because that was like one thing is like progress bars are like here and then here and then here. And like, so people can't really tell what's going on sometimes."*
- Nadir, on run-state detail: *"If a trigger's getting hung up… versus some other processing [that] should take a long time"* — the user needs to distinguish a hang from a legitimately slow step.

**Step 3 — Splash windows and connection diagrams need show-again control.** Nadir flags the recurring splash/connect-diagram popups; Bryan shows a context-icon concept for surfacing descriptions/images (e.g. the MOI) on demand.

- Nadir: *"The other one is on like the splash windows that come up, or it's like connect diagram, there needs to be like really good control of, do you want to see this again over and over again?"*
- Nadir: *"Overall, like maintenance of, you know, block diagrams, connection diagrams is pretty critical."*

**Step 4 — DUT naming ID is too short for report workflows.** Field feedback: customers encode chip version and report numbering into the DUT name and run out of characters.

- Nadir: *"One feedback I heard recently was that the naming ID is like not long enough for the DUTs, like in the reports. Some people get the PCI Express reports back… they need to put like, you know, their test chip version, this, this, this, and like report number 60 and there's not enough characters, basically."*

**Step 5 — Report size fills the scope's SSD; PDF is the required format.** Heavy-validation customers accumulate reports until storage runs out. PDF is preferred because reports are distributed across sites.

- Nadir: *"These… Gen 5 reports, each one's like… ten to 11 megabytes each, and some of these customers who are doing a lot of validation actually like fill up the SSD of the SX… it does fill up at some point."*
- Nadir, on format: *"PDF typically… for some of these customers, because they're basically taking it and… they have to send it to either different… worldwide sites that they have, or like their other colleagues in different sites, or just internally."*

**Step 6 — Prototype verdict so far, plus legacy text-overflow bugs.** Nadir approves the prototype direction and contrasts it with long-standing rendering bugs in the current app.

- Nadir: *"The GUI itself looks good. I think, like, it's as long as you just follow the same format."*
- Nadir, on the current build: *"Some of the other complaints we were just… like the text is just like off on some of these buttons and stuff… sometimes like the text and the button itself doesn't even [fit], it goes out of the [bounds]… it just looks like something else… 25 years ago, essentially."*

**Step 7 — Localization question.** Nadir asks whether TekExpress is localized; the facilitators believe it is English-only but are not certain.

- Nadir: *"Is this localized for any other languages, or is it all English only?"* — Facilitator: *"I'm not too familiar with the international protocols, but I think it's English."*

**Step 8 — TekScope-family visual consistency raised for the first time.** Nadir notes the prototype is "sort of getting there" relative to TekScope, and that today each Tek application looks different from the next. The facilitator responds that the design system will unify buttons, tabs, and text across applications long-term.

- Nadir: *"Probably the more it matches like the TekScope… this looks like it's sort of getting there… same for like a TekRx test, like that has a certain visual look that looks different than this and different than that… So now you have like two different interfaces, and they both look different in the TekScope."*
- Facilitator: *"That is where design system comes into picture… the new look and feel of the buttons, the tabs, the text, everything that is going to be updated… across all the applications."*

**Step 9 — Automation and the programmatic interface are non-negotiable.** Nadir describes long-run regression validation (temp cycling and margin cycling for 24 hours at a major semiconductor customer — name redacted) and frames the GUI as the thing customers actually program.

- Nadir: *"The repeatability is really important. I understand this is more like GUI… look based, but also the programmatic interface and how to automate these steps is really important too… maybe you expose a [SCPI command] of like each button in the GUI, but that's something that needs to be considered at least at some point."*
- Nadir: *"They're actually just programming the GUI… they're programming through this GUI, and so it needs to be easy to understand from like a programming perspective."*
- Nadir: *"You need to make sure those hooks are in place that it never gets tripped up, basically… I understand if the scope crashes or something, that's the one thing, but… within Tek Express itself, it needs to be able to run, you know, fully automated essentially… without any like user interaction, assuming it's been like set up correctly at least once."*

## Annotations

- **GUI-first sequencing endorsed by the AE.** Nadir explicitly agrees the visual pass is the right short-term priority: *"getting the GUI looking better is probably more important… short term."* Deeper workflow/functionality work is a later round.
- **The GUI is the automation surface.** Nadir's framing that customers are *"literally… programming the GUI"* reframes every UI element as part of a programmable contract, not just a visual: redesigns must not break scriptability. His concrete suggestion is exposing a programmatic command per GUI action.
- **Why PDF reports dominate:** reports are distributed artifacts — sent to *"worldwide sites… other colleagues in different sites, or just internally"* — so a portable single-file format wins.
- **Run-state transparency is diagnostic, not cosmetic.** The reason detailed progress matters is triage: distinguishing *"a trigger's getting hung up"* from processing that legitimately *"should take a long time."*
- **Connection/block diagram maintenance called out as critical** — the diagrams themselves, and user control over when they appear, are both part of the ask.
- **Localization status is unknown even to the team** — nobody on the call could say definitively whether TekExpress is English-only.

## Friction notes

- **Progress bars are misleading and fragmented.** *"Progress bars are like here and then here and then here. And like, so people can't really tell what's going on sometimes."* Reinforced later in the session as *"the progress bar is not accurate enough"* — flagged by the facilitators as continuous field feedback.
- **No visibility into what a running test is doing** — *"if a trigger's getting hung up… versus some other processing"* the user can't tell which.
- **Splash / connection-diagram windows nag repeatedly.** *"There needs to be like really good control of, do you want to see this again over and over again?"*
- **DUT naming ID character limit is too short** for customers encoding test-chip version + report number: *"there's not enough characters, basically."*
- **Reports are 10–11 MB each and fill the SX scope's SSD** under heavy validation workloads.
- **Button text overflows its buttons in the current build** — *"the text and the button itself doesn't even [fit], it goes out of the [bounds]"* — dated at *"25 years ago, essentially."*
- **Automation hooks are fragile in long unattended runs** — the requirement that it *"never gets tripped up"* implies today it sometimes does; scope crashes are excused, TekExpress-internal failures are not.

## Cross-references

- The running/progress state Nadir critiques: [`running-test`](../screens/running-test.md) and [`status-test-status`](../screens/status-test-status.md).
- Report generation and options: [`reports-configuration`](../screens/reports-configuration.md).
- The DUT identity fields his naming-length feedback targets: [`setup-dut`](../screens/setup-dut.md).
- Second half of this session (competitors, visual hierarchy, match-TekScope directive): [`ae-nadir-kahn-competitive-landscape-and-visual-direction`](./ae-nadir-kahn-competitive-landscape-and-visual-direction.md).
- Chris B.'s parallel AE session independently raises report workflows and the standing automation ask: [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md).
- The progress-accuracy complaint echoes the run-state feedback themes in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md).

## Pending references

- **Splash / connection-diagram popup windows** — the "do you want to see this again" dialogs are not documented as screens in this corpus.
- **MOI (Method of Implementation) context surface** — Bryan demos a context-icon concept for MOI descriptions; neither the concept nor the current MOI access path is documented.
- **Report output artifact** — the generated PDF report (size, DUT-name truncation behavior) is not a documented artifact; also flagged in the Chris B. session.
- **Programmatic-interface surface** — whatever automation/scripting interface TekExpress exposes today is undocumented in this corpus.

## Confidence notes

- **Single-microphone recording; every transcript line is attributed to "Kemp, Bryan."** Speaker turns above are inferred from context. Nadir's turns are generally confident (first-person field/customer anecdotes); facilitator turns are confident where they reference the prototype roadmap.
- **A third participant (second Tek facilitator) is clearly present.** Early on, someone tells Nadir *"from the UI perspective, Brian is going to show you what we are planning to do"* — referring to Bryan in the third person — and later facilitator turns reference pooling feedback via "Arpita and Ryan." Facilitator quotes are attributed generically as "Facilitator" where the specific speaker is uncertain.
- **Transcription artifacts corrected editorially:** "Kemp Gen. 5 reports" is read as *PCIe Gen 5 reports* (the mic owner's name bleeding into the transcript); "skippy" in the automation discussion is read as *SCPI* (rendered as "[SCPI command]"); "silloscope" = oscilloscope; "Tech Express" is normalized to "Tek Express" inside quotes only where the source spelling is a transcriber artifact.
- **Redaction:** the regression-testing customer named in Step 9 is a major semiconductor manufacturer; the name is redacted per corpus sensitive-info rules. One word in the same passage is censored (asterisks) in the source itself.
- **No per-turn timestamps exist** — the Teams export collapses the whole 23:17 session into a single block at 0:03, so step boundaries and ordering are editorial (though the ordering follows the transcript's linear flow).
- The chunk boundary with the second half is the facilitator's pivot question about competitors; the split is editorial, not a break in the recording.
