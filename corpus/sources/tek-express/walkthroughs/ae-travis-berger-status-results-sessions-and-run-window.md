---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-travis-berger-status-results-sessions-and-run-window
flow_title: "AE Interview — Travis Berger: Log View, Results Redundancy, Session-File Discoverability, and the Minimized Run Window"
recorded_by: "Travis Berger (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:14:53 (session total; this chunk covers ~39:20–56:00)"
transcript_source: "uploads/transcripts/TravisBergerPt2.vtt"
screens_visited: [status-log-view, results, setup-dut-session-browser, running-test, status-test-status]
applies_to: [tek-express, tek-design-system]
related_screens: [status-log-view, status-test-status, results, running-test, setup-dut, setup-dut-session-browser, options-dropdown, reports-configuration]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Travis Berger: Log View, Results Redundancy, Session-File Discoverability, and the Minimized Run Window

## Summary

Middle segment of the Travis Berger session, running a live PCIe test. Travis praises Log View (it's what the minimized run window defaults to) but asks for a verbose/debug log level and a Riddick-style "export log files → zip" button for escalations to the product line. He admits he ignores the Results panel entirely in favor of the PDF report, and flags that results populating in two places during a run (Test Status *and* Results) confuses users. The deepest friction is session files: customers can't find them ("untitled session, there's like a million folders, timestamp based"), can't double-click a session to open it in the right TekExpress application, and Travis has to paste directory paths into emails to walk them to it. He starts the run, showing the connection-diagram prompt (picturing a Gen 5 board while his bench is Gen 3) and the minimized run window most users don't know they can restore — which on old platforms can't be resized, unlike Riddick.

## Goal

Capture the AE's assessment of TekExpress's run-time surfaces (status, logs, results) and the session-file workflow he mediates between customers and Tek support.

## Steps

**Step 1 — [00:39:24] Log View praise — it's the minimized default.** Screen: [`status-log-view`](../screens/status-log-view.md).

- Travis: *"Status — I mean, log view is pretty nice. This is what it minimizes to, right? When it goes down here. It basically defaults to the log view and you can see kind of what it's doing, progressing through the tests and all. I think that's awesome."*

**Step 2 — [00:39:44] Ask: a verbose/debug log mode.** For escalations to the software team, not for customers.

- Travis: *"Maybe have an option for like a — we're debugging, right? Because I know we're always sending stuff to the software team if we run into bugs or issues. Maybe like a more verbose version that you can access easily."*
- Facilitator (probing): *"More specific logs as it's running and … make it clearer when things fail, where they fail, what failed, and be able to get access to that failed waveform?"* Travis: *"It typically tells you enough, I would say, but I guess in some cases, maybe if there's like a more verbose mode that can be added for debugging purposes."*
- Who it's for: *"Mostly us [AEs]. I mean, I wouldn't like hide it behind layers and layers of stuff … but maybe if they want to send it for debug, that option can be a more verbose one."*

**Step 3 — [00:41:13] Precedent: the Riddick scopes' Export Log Files button.**

- Travis: *"On the Riddick scopes, if there's an issue with the self-tests or any of the stuff that it performs, there's an export log files button. It'll dump everything in a zip folder, and then we usually send that to product line for further analysis. … Maybe have something sort of similar here."*
- Refinement: *"When you hit save, you can save either just like the regular log or maybe more of a verbose version … for debugging. … I just like kind of having that as an option … we can send our product line engineer."*

**Step 4 — [00:42:15] Results: Travis only reads the PDF.** Screen: [`results`](../screens/results.md).

- Travis: *"Results — I mean, I usually just look at the PDFs if I'm being honest. I don't really look at the results in here. I guess it is kind of nice — you can see it populate while it's running."*

**Step 5 — [00:42:59] Live results populate in two places — confusing.** Test Status and Results both fill during a run; the report only appears at the end.

- Travis: *"The report's just gonna pop up at the end when everything's done, whereas here, I'm pretty sure it'll populate as the test is running."*
- Facilitator: *"When the test is running, it is displayed in the test status, and here, in results, it pops up as it goes too, which makes it confusing."* Facilitator: *"We're gonna just look at consolidating some of that."*

**Step 6 — [00:43:19] Session files: customers can't find them.** Screen: [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md) (Browse entry point).

- Travis: *"Sometimes it's like customers don't know where to find their session files. … here you can go into browse and then that'll take me into like the general folder where the stuff is. I feel like it's not as transparent — if I ask for a customer session file, say they're failing a test, they want me to take a look at the waveform that caused the failure … I'll just have them send me a session. I think making it easy to locate that in the file system [matters]."*
- Proposed surface: Facilitator: *"Where will this file be saved … and they can change the root directory when you start the first session?"* Travis: *"It's fine where it is, but maybe just have it more transparent, like where their session folder is located … kind of where this session is going to be saved, or recent sessions or something."*

**Step 7 — [00:44:48] Live mishap: Open Recent starts recalling a session.** Opening the recent-sessions path nearly recalls a previous session mid-demo.

- Travis: *"Uh oh, I hope it's not recalling it. I don't think I clicked away from it. … It's trying to recall. … Oh shoot, okay. I think I can get through this pretty quick."*

**Step 8 — [00:45:34] Sessions must be opened from inside the right application.** No file-association / double-click path exists.

- Facilitator: *"You're opening up a past session, and you have to open up the correct version of Tek Express — you have to go to the PCI[e application] to open up a PCI[e] session."*
- Travis on the wish: *"It'd be nice if you could just double-click on the session, and then it would load up everything in the right application."*
- Facilitator (analogy): *"Normal file usage … I go to Finder and double click this thing and it opens up the application. … versus I can open Photoshop and go to my previous file — this is what we are doing, the second approach … and that's why it's confusing, because they never take that route to open up the file."*

**Step 9 — [00:47:10] Walking customers to the folder: the "million folders" problem.**

- Travis: *"It's hard for me to explain to customers sometimes. I'll have to just paste like the directory. … Usually they don't have some good naming schemes, so I'll tell them, oh, go into untitled session — there's like a million folders, timestamp based — and it's like, go in this and then sort by date modified and then send me the latest one; is that probably the one that failed last, right?"*

**Step 10 — [00:47:43] Semantic session naming: some customers do, most don't.** DUT-ID naming feeds the report and folder names.

- Travis: *"Some do. Some actually understand kind of the file system … how this saves … and how everything is layered and structured — customers that have used this for a long time. But newer customers, no. … Usually they'll try and be descriptive [about] what device you're testing … they manually write that name out [in the DUT field], and then that's what shows up in the report and the folder name."*
- The use case: *"There's customers who get in like 10 different boards … they have to test in like a few months, and they have to be very descriptive in tracking where everything is at and what's failing, what isn't."*

**Step 11 — [00:49:36] Run starts; connection-diagram prompt appears.** Screen: [`running-test`](../screens/running-test.md). The prompt's schematic shows a Gen 5 board while the bench is Gen 3.

- Travis: *"So when I started it … it's telling me how to wire this up. This is an older model of an AFG, but it tells me at least what components I need. So I have these DC blocks installed, I'm going to Lane Zero. This is a Gen 5 board on the schematic. This is [a] Gen 3 board, so it looks a little different, but same connection."*

**Step 12 — [00:50:49] The minimized run window: most users don't know it comes back.**

- Facilitator: *"Do people usually just keep it small, minimized out there?"* Travis: *"When the test is running? Yeah, I would say mostly. Most don't even know that you could bring it back up."*
- Travis: *"It kind of hides behind here. … on the scopes, sometimes it'll just go to the back. So it'd be nice if it could stay up front, but you're kind of blocking some of the scope view. So I don't know — I feel like that's kind of a preference."*

**Step 13 — [00:52:03] Status as the customer-facing view; resize only exists on Riddick.** Screen: [`status-test-status`](../screens/status-test-status.md).

- Travis: *"When I'm doing this with customers, I usually show this screen to show, you know, what's going on. … It's better if I have a separate monitor."*
- Travis on Riddick: *"I can resize the window here on Riddick though. So I can push it like over here and then I can have Tek Express log view down here — on the same screen."* Facilitator: *"On these older platforms, there's no resizing."*

**Step 14 — [00:52:53] Run duration and bench acoustics.** The full suite takes about an hour or more; the relay clicking is the scope's step attenuator.

- Travis: *"To run like this whole suite of tests — I don't know, maybe like an hour, hour and a half."*
- On the clicking: *"There's like a step attenuator thing in the back of these channels, so when you get to a certain voltage, [you'll] hear the signal path change the relays. … I think the voltage of the signal [is] kind of in between that threshold and it sometimes hits it."*

**Step 15 — [00:54:42] Toggle-hardware aside.** Not every standard uses an AFG; USB uses a separate microcontroller; the 7 series' rear AFG can replace the external one.

- Travis: *"There's a baseboard controller that'll just sit on these square pins … For USB, there's another microcontroller that Tek Express will try to interface with that then controls the USB device. It depends on the technology and how you toggle the compliance patterns."*
- Travis: *"The rear AFG on the seven series can do what this is doing. I don't need that in the loop."*

## Annotations

- **Log View is the de facto run-time face of TekExpress** — the minimized run window defaults to it, and Travis rates it *"awesome"* as-is. The ask is additive (verbose level + one-click export), not a redesign.
- **The Riddick scope platform already ships the support workflow Travis wants** (Export Log Files → zip → send to product line) — a Tek-internal precedent, not a competitor pattern.
- **Results vs Test Status vs Report:** during a run, per-test outcomes surface in Test Status *and* Results simultaneously; the PDF report only exists at the end. Travis's personal workflow skips the Results panel entirely and reads PDFs — corroborating the results-fragmentation critique from other AE sessions. A facilitator states the redesign intent on-record: *"we're gonna just look at consolidating some of that."*
- **The session-file model breaks the desktop convention** (file → double-click → right app). Sessions live deep in the X: drive under per-application folders, are timestamp-named by default ("Untitled Session"), and must be opened from inside the matching standard's TekExpress application. AEs absorb this friction on behalf of customers by pasting directory paths into support emails.
- **The DUT-ID field is the de facto semantic-naming mechanism** — it names the report and the session folder, and multi-board customers depend on it for tracking. (Connects to the DUT-ID length-limit complaints in other sessions.)
- **Connection-diagram prompts can picture different fixture generations than the bench** (Gen 5 board pictured, Gen 3 in use) — *"it looks a little different, but same connection"* is AE knowledge a new customer wouldn't have.
- **On-scope window management is a first-class constraint:** the run window hides behind the scope UI, staying on top would cost scope visibility, and old platforms can't resize — Travis's fix on Riddick is manual side-by-side tiling of scope + log view.

## Friction notes

- **No verbose/debug log level and no one-click log export.** *"We're always sending stuff to the software team … maybe like a more verbose version that you can access easily."*
- **Results panel is redundant with Test Status during a run.** *"I usually just look at the PDFs if I'm being honest. I don't really look at the results in here."* / *"It pops up as it goes too, which makes it confusing."*
- **Customers can't find session files.** *"Customers don't know where to find their session files. … go into untitled session — there's like a million folders, timestamp based … sort by date modified and then send me the latest one."*
- **No double-click/file-association for sessions; must open the right application first.** *"It'd be nice if you could just double-click on the session, and then it would load up everything in the right application."*
- **Open Recent nearly recalled a session unintentionally mid-demo.** *"Uh oh, I hope it's not recalling it."*
- **Most users don't know the minimized run window can be restored.** *"Most don't even know that you could bring it back up. … sometimes it'll just go to the back."*
- **No window resizing on the older platforms** — side-by-side scope + log view is only possible on Riddick.

## Cross-references

- Run-time surfaces: [`status-log-view`](../screens/status-log-view.md), [`status-test-status`](../screens/status-test-status.md), [`results`](../screens/results.md), [`running-test`](../screens/running-test.md).
- Session browsing: [`setup-dut-session-browser`](../screens/setup-dut-session-browser.md) and the DUT panel it hangs off: [`setup-dut`](../screens/setup-dut.md).
- Previous chunk: [`ae-travis-berger-launcher-global-settings-and-setup-flow`](./ae-travis-berger-launcher-global-settings-and-setup-flow.md); final chunk (reports, stop/pause, adoption): [`ae-travis-berger-run-environments-adoption-and-reports`](./ae-travis-berger-run-environments-adoption-and-reports.md).
- Results/Status consolidation theme in sibling sessions: [`ae-chrisb-setup-waveforms-and-run-modes`](./ae-chrisb-setup-waveforms-and-run-modes.md) (Chris proposes merging Results into Test Status), [`ae-will-teverovsky-acquisitions-presets-status-and-results`](./ae-will-teverovsky-acquisitions-presets-status-and-results.md).
- Session-file discoverability in sibling sessions: [`ae-will-teverovsky-session-files-options-and-program-context`](./ae-will-teverovsky-session-files-options-and-program-context.md).

## Pending references

- **Verbose/debug log level and Export Log Files (zip) for TekExpress** — proposed; does not exist in the product.
- **Riddick scope Export Log Files button** — cited precedent; the Riddick scope UI is not a corpus subject.
- **Connection-diagram run prompt** ("is this how it's wired up") — shown live; no dedicated screen doc.
- **X: drive session-folder hierarchy** (per-application folders, "Untitled Session" timestamp directories) — file-system behavior, not a screen; documented only via this narration.
- **Step attenuator / relay behavior on scope channels** — hardware explanation; no tek-express hardware views exist.
- **USB toggle microcontroller and the 7-series rear AFG** — toggle-hardware alternatives mentioned; not documented in this corpus.

## Confidence notes

- **Single-microphone recording; all cues attributed to "Kemp, Bryan."** Speaker turns inferred. Travis's turns (AE workflows, customer anecdotes, bench operation) are high-confidence; some run-time exchanges interleave rapidly and facilitator identity (Bryan vs a third participant) is uncertain — those are attributed as "Facilitator."
- Timestamps from the WebVTT cues, marking the start of each exchange.
- The garbled cue at [00:51:47] (*"Is there a spare torch matching?"*) is unintelligible and omitted; likewise scattered filler cues.
- "X drive"/"WPO folder"/"dot WPF format" at [00:38] (previous chunk) and the folder narration here are phonetic; the waveform extension is normalized to .wfm in the summary but left verbatim inside quotes where quoted.
- Step 5's key confusion line ("it pops up as it goes too, which makes it confusing") reads as facilitator speech summarizing Travis's demonstration; attribution is uncertain — flagged rather than assigned to Travis.
- The session-recall mishap (Step 7) interrupted the Open Recent walkthrough; the recent-sessions UI was therefore not fully demonstrated.
- No credentials or customer names in this segment; nothing redacted.
