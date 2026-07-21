---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-joey-chiu-dut-id-limits-and-prototype-reaction
flow_title: "AE Interview (Joey Chiu session) — DUT ID / Path-Length Limits and Prototype Reactions"
recorded_by: "Unidentified drop-in AE (primary voice); Joey Chiu (AE); Bryan Kemp (facilitator); TekExpress application-team members present"
recorded_date: 2026-07-14
duration: "38:11 (full session; this chunk covers roughly the final third)"
transcript_source: "uploads/transcripts/JoeyChiu.docx"
screens_visited: [setup-dut]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-dut-session-browser, reports-configuration]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview (Joey Chiu session) — DUT ID / Path-Length Limits and Prototype Reactions

## Summary

Final segment of the Joey Chiu session. The session is taking place at a compliance-workshop-style event (breakout announcements and badge references are audible); partway through, a second Tek field AE drops in, is briefed on the re-skin prototype, and delivers his top field complaint: **the DUT ID field cannot hold enough characters**, a limit rooted in Windows path-length restrictions on session/waveform file naming. The application team explains the folder-naming mechanics behind the restriction and a possible registry-level fix. The drop-in AE also reacts to the prototype ("they're going to like this better because it's new"), probes window resizing, and names a competitor comparison before leaving for his event track.

## Goal

Capture unprompted field-AE pain points (customer complaints as heard at compliance events) and first reactions to the new TekExpress UI prototype.

## Starting state

Mid-session at the event venue; the prototype and the existing TekExpress app are both on screen. A second AE joins the table and Bryan re-frames the exercise for him: *"They're collecting feedback for the new Tek Express … we wanted to understand the pain points or customer requests, their frustrations."*

## Steps

**Step 1 — Bryan frames the prototype for the newcomer.** Expectation-setting that it is an early shell, not the final product.

- *"This is not accurate completely, but … this is a general … updated … re-skin kind of styling that we're working on … is there any concerns at a high level, visually, with updating the design of it — and then also … [getting] into the nitty-gritty with, like, what issues we have with Tek Express."*

**Step 2 — The drop-in AE leads with the DUT ID character limit as his biggest field complaint.** Screen: [`setup-dut`](../screens/setup-dut.md) (DUT ID field).

- *"I think the biggest complaint I've had lately is the inability to put enough characters in … the ID."* Confirmed by the group as the DUT ID field.
- Why customers need it long: *"Customers need to specifically identify the test that they're doing to the [DUT] level … multiple [DUTs], multiple different types of [DUTs], multiple different lanes. It gets to be pretty long."*
- How long: *"It needs to be like 200 characters, man. I don't know, but something, something very long."*
- Current state: *"And that's not even cutting it. So yeah, that's not going to cut it."*

**Step 3 — Application team explains the root cause: Windows path-length limits on the session folder tree.** The DUT ID is appended into folder and file names, so long IDs break saves.

- *"If you just put a long name here, [then] your waveform or the session name is … with the same name, and sometimes … Windows throws an error that we cannot save this. That's why we had to restrict it to 6 digit or 8 digit."*
- *"It's very, very easy to run into that issue, because … [the] Tek Express session already take[s] a lot of layer[s] of the folder — in the folder name it adds that entire date time … and then your waveform will have … DUT ID, this preset, this voltage sw[ing] — all those things … and then it's too long for us to save."*
- Current mitigation: *"We [are] just marginally managing right now — for some applications, we have restricted this name [from] be[ing] changed. That's not convenient for the user, but that is the only way."*

**Step 4 — Why the DUT ID is baked into every filename: Plugfest identification.** The naming scheme exists so waveforms/results are attributable per device at compliance workshops.

- *"That is the intention … because in Plugfest — when you do a compliance workshop — every [DUT] has an ID. So when you're saving the … folder, saving the waveform, you should be able to distinguish everything … DUT 001 … [otherwise you] might not know which [is] Intel['s], which [is] Xilinx['s], which [is] Broadc[om's]."* [Vendor names appear in the source as generic Plugfest examples, not customer disclosures.]
- The results file also carries the ID: *"The results file will also have this … DUT 01 … prefix and postfix, and also the folder structure … kind of take[s] all the Windows limitation."*

**Step 5 — A fix direction is identified: Windows long-path support.** The limit is OS-configurable; the AE doesn't care how it's fixed, just that it is.

- *"You can extend that Windows limitation … there are ways to defeat that, but that's [not] the way our system's set up."*
- App team: *"There are two selections in Windows that you can choose in the registry."*
- Drop-in AE: *"Whatever way you can fix it, fix it."* And on customer sentiment: *"The customers hate [it]."*

**Step 6 — Side note: the slot-number / auto field next to DUT ID is barely used and unclear.** Screen: [`setup-dut`](../screens/setup-dut.md).

- Drop-in AE: *"The auto, by the way — I haven't had anyone use that."*
- App team: *"That's a slot number … where you're putting the [DUT] … not all applications have the slot number, that is for [P]CI[e] … some people use the slot number; most people don't."*
- Bryan: *"It's not very intuitive for the user to know what exactly … this will change — that ID or the session name or something."* App team clarifies: *"It's a field in the report"* — not part of the session naming.

**Step 7 — Prototype reaction from the drop-in AE.** Positive but shallow — novelty-driven; no visual concerns raised.

- *"The overall look and feel — they're going to like this better because it's new."*

**Step 8 — Window sizing probe.** The AE asks whether the new UI is fixed-size; resizability defuses the concern.

- AE: *"What's [in]convenient about this? I have to cycle through, right? It's limited to this size?"* Bryan/team: *"We can change the size of the window."* AE: *"OK, so that's not terribly bad."*
- Bryan's follow-on commitment: *"We can really make the best use of the space, as opposed to … this is just like dumping fields … device profile [says] what it does, but then it doesn't tell me how I test."* Bryan flags that middle section as inaccurate in the current shell: *"That's the shell … a super [early] shell … we're getting the developers the styles, colors, background colors, so they could start refactoring it all … still refining those screens, trying to make it as close as possible to the actual application."*

**Step 9 — Competitor comparison and an offered artifact.** Asked what stands out in other vendors' compliance software, the AE names one tool as difficult and offers a past comparison report.

- *"Most of the time we're comparing to [competitor tool, transcribed as "Bidify"] and … I find [it] to be difficult to use, but … my customers don't tell me much on that. So … I've done some comparisons."*
- Offer accepted enthusiastically: *"I can dig up my previous report, like, comparing Key[sight] [and] clients — any information is super helpful."*
- App team's own focus areas for competitive parity: *"Maybe the log — the way we show [it] — those are the areas which we are trying to focus on."*

**Step 10 — Session winds down with follow-up commitments.** The drop-in AE leaves for his event track; the team commits to iterating and reconnecting.

- *"We'll do some more refinement and maybe we can have some connects again after … a few weeks."* The AE offers continued availability: *"Can we talk to you again?" — "Yeah, this afternoon on the open time. I'm not going anywhere."*

## Friction notes

- **DUT ID character limit is the top field complaint.** *"The biggest complaint I've had lately is the inability to put enough characters in … the ID."* / *"It needs to be like 200 characters, man."* / *"The customers hate [it]."*
- **Windows path-length errors on save are easy to trigger.** *"Sometimes … Windows throws an error that we cannot save this … It's very, very easy to run into that issue."*
- **The mitigation punishes users:** *"For some applications, we have restricted this name [from] be[ing] changed. That's not convenient for the user, but that is the only way."*
- **The slot-number/auto field is dead weight for most users and its effect is unclear.** *"I haven't had anyone use that."* / *"Most people don't [use it]."* / Bryan: *"It's not very intuitive for the user to know what exactly … this will change."*
- **The existing UI's fixed window size prompts "cycling through"** — the AE's first usability probe of the new UI was whether it, too, would be size-limited.
- **Current layout reads as field-dumping.** Bryan (relaying/agreeing during the exchange): *"This is just like dumping fields … device profile [says] what it does, but then it doesn't tell me how I test."*

## Annotations

- **App team (why the DUT ID naming exists):** Plugfest/compliance-workshop attribution — every DUT's waveforms, results, and folders must be distinguishable per device ID when many vendors' devices are tested in one place. The naming scheme is a real requirement; the length ceiling is the bug.
- **App team (fix landscape):** Windows long-path support is registry-selectable (*"there are two selections in Windows that you can choose in the registry"*), i.e., the limit is not immovable — it is a packaging/deployment decision.
- **Drop-in AE (prototype):** *"They're going to like this better because it's new"* — an honest read that novelty, not structure, drives the first-impression win. No concerns about showing the re-skin to customers were raised.
- **Drop-in AE (competitive):** Customers rarely volunteer comparisons of the competitor tool; the AE's own comparison work (a prior report comparing Keysight [and other] solutions) exists and was offered to the team.
- **Bryan (design intent):** the redesign should "make the best use of the space" rather than reproduce the field-dump layout — consistent with the phase-1 constraint that functionality stays identical.

## Cross-references

- DUT ID and slot-number fields: [`setup-dut.md`](../screens/setup-dut.md).
- Session naming / saved-session browsing implicated by the folder-name mechanics: [`setup-dut-session-browser.md`](../screens/setup-dut-session-browser.md).
- The report field the slot number feeds: [`reports-configuration.md`](../screens/reports-configuration.md).
- First two-thirds of this same session: [`ae-joey-chiu-pcie-backward-compat-scaling.md`](./ae-joey-chiu-pcie-backward-compat-scaling.md).
- Prior prototype-reaction / UX-feedback content: [`ux-feedback-and-open-questions.md`](./ux-feedback-and-open-questions.md).

## Pending references

- **Session folder / file-naming scheme** — `<session>/<datetime>/<DUT-ID>_<preset>_<voltage-swing>…` structure described verbally; not documented anywhere in the corpus. High value for any fix to the path-length problem.
- **Competitor compliance tool ("Bidify" in transcript)** — name is almost certainly garbled (no corpus subject exists; candidate readings unclear). The AE's prior comparison report (Keysight vs. others) was offered and should be intaken to `audits/competitive/` when received.
- **Windows long-path registry configuration** — referenced as the fix path; no corpus/docs coverage.
- **The new-UI prototype itself** — lives in `prototypes/tek-express/`; the specific build shown at this session is not snapshotted in the corpus.

## Confidence notes

- **Speaker attribution is the weakest in this segment.** Single-mic transcript attributes everything to "Kemp, Bryan." A second AE audibly joins mid-session (greeting, re-briefing, and later *"I'm gonna head off"* / *"I am in Nashville"*) and is the primary voice for the DUT ID complaint, prototype reaction, and competitor comparison — but he is never named in the transcript. He is recorded here as "unidentified drop-in AE"; it is possible some of these turns belong to Joey Chiu instead. Follow up with Bryan to attach a name.
- **"Bidify" and "Key site clients" are garbled transcriptions.** "Key site" is read as Keysight with high confidence; "Bidify" (a competitor compliance/analysis tool the AE finds *"difficult to use"*) could not be confidently resolved to a real product name and is left flagged rather than guessed.
- Silicon-vendor names (Intel, Xilinx, Broadcom) appear in the source only as generic examples of Plugfest participants; noted inline rather than treated as customer disclosures. No credentials or actual customer identities appear in the transcript.
- Event-venue interruptions ("Sessions are starting, please head to your track," badge/breakout logistics) and closing small talk (locations, travel) are omitted as off-topic.
- The exchange about the "auto" field vs. slot number is fast and overlapping; the reading that "auto" refers to the slot-number-adjacent field on the DUT panel is inferred, not certain.
- No timestamps exist in this segment; step order follows transcript sequence.
