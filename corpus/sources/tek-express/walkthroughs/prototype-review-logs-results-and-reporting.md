---
provenance: observed
class: walkthrough
product: tek-express
flow_id: prototype-review-logs-results-and-reporting
flow_title: "Prototype Review — Logs, Results Visibility, and Reporting"
recorded_by: "Tapo (application engineer / SME; former TekExpress application developer)"
recorded_date: null
duration: null
transcript_source: "uploads/transcripts/tek-express-prototype-sme-review-tapo-2026-07.txt"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [status-test-status, status-log-view, results, plots, reports-configuration, reports-view-settings]
related_apis: []
related_hardware: []
related_modules: []
---

# Prototype Review — Logs, Results Visibility, and Reporting

## Summary

Middle segment of the first SME prototype review session. Tapo benchmarks TekExpress against Keysight on the three surfaces downstream of the Start button: run-time logs (Keysight's summary + detail split panel vs. TekExpress's flat scrolling lines), the results view (a "flat" grid of numbers with no failure cues, driving a download-report-and-Ctrl-F workaround), and reporting (no in-UI HTML preview, obsolete MHT format, CSV as the must-keep data dump, markdown proposed as a new format). Also covers the pass/fail-isn't-binary nuance (marginal passes, customer custom limits in rework mode) and the rerun-failed-measurements → merge-into-earlier-report use case. One concrete prototyping action was logged in-session: iterate on the start/run status log view.

## Goal

Identify where the redesign should invest beyond a re-skin on the run-status, results, and reporting surfaces, using Keysight's compliance apps as the benchmark.

## Starting state

Continuing the same prototype session, moving from the setup-workflow explanation to the post-Start surfaces (legacy analogues: [status-test-status](../screens/status-test-status.md), [status-log-view](../screens/status-log-view.md), [results](../screens/results.md), [reports-configuration](../screens/reports-configuration.md)).

## Steps

**Step 1 — Keysight's log view is the benchmark: half-split panel, message list + detail on click.** Screen analogue: [status-log-view](../screens/status-log-view.md).
- *"Keysight… their intuitiveness of the log. So logs means the status… sometimes a test runs for maybe hours… how do I know where I am exactly?… I need that, okay, this happened. I applied this setting on the scope, then this filter was applied… I am now acquiring this waveform. So maybe it needs to acquire some 500 [waveforms]. Which [waveform] is [it acquiring] now? So all those insights."*
- *"In Keysight, there will be this panel, so this will halfway split. This side there will be a bunch of messages really coming… if you click one of those messages, the details… This is like a high level logs, but if you want to go into more details, you will get on the right panel."*

**Step 2 — Current TekExpress logs are flat, lengthy, and too abstract — especially errors.**
- *"The current Tek Express, the logs are pretty flat… there is one panel… just like [rattling] lines there… if you want to put more information, that line kind of gets pretty lengthy [needing] scrolling… And sometimes they are too abstract… especially [what] happens in the error [messages]… I don't know why it is important… Then I have to just go inside and if the applications [have] printed those logs in some text file, then I might know."*

**Step 3 — Summary + description is a framework interface change, not just UI.**
- *"One part depends on the application team, how intuitive they make those logs… I think the application team currently do not have that feature that… I have a summary part and there is a description part… If you just put that, then it is application team's responsibility to feed those things better."* The UI providing the two-level shape forces better log content.

**Step 4 — Logs don't need to be always visible — a dedicated, not-too-nested tab is fine.** Asked directly whether logs should show all the time (Keysight does), Tapo declines:
- *"As long as there is a place people know… and if it is not too nested down… once the test run [starts] you're showing the status thing… you're gonna have test status and the [log]… this is something not that difficult for someone to learn… This is not a very complex visibility problem. You do not have to always pop things out for a user for convenience."*
- In-session action item (Bryan): *"iterating on the start run status log view. That would be a good thing to prototype out."*

**Step 5 — Results view is flat: numbers with no failure cues; users scan the downloaded report instead.** Screen analogue: [results](../screens/results.md).
- *"Keysight has a lot of… I think they use plots. They use better way of displaying the result. Our things, again, I feel like it's a bit flat… just show that like a bunch of numbers here… not much colors or like things that… if something fail… the user needs to know, because sometimes I run so many measurements that it is almost difficult to go through this thing and find that where that one or 2 fails come. So normally what [they do], they download a report and then scan that report."*
- *"Ultimately the result is something the user is the most interest[ed in]… Because this decides whether the device is [passing] or [failing]."*

**Step 6 — Pass/fail is not binary: marginal passes and customer custom limits.**
- *"If it is below 100 [millivolts], it's a pass. If it goes beyond… it's a fail… Now, if it is one [millivolt], then also it is pass, if it is 99 [millivolts], that is also pass… that green would not suggest whether it is a good pass or a bad pass."*
- *"Some customers, they would have their own spec limits… although it is a pass from the compliance standard… they would say that, okay, this is the fail."* In rework/user-defined mode TekExpress supports custom limits: *"In the [rework] mode, you can do that… you can have custom limits… when you run a test in a rework mode and [generate a] report, it [is] particularly told there that this is not a compliance report, so this cannot be submitted for certification."* Chip-development customers iterating on silicon are the main users of this.

**Step 7 — Failure debugging: auto-load the failing waveform onto the scope.** A previously-floated feature Tapo endorses as "action-level insight," deferred as a later conversation.
- *"There were some thought of like loading that [waveform] into the scope and actually go to that [measurement]… and find out where exactly that fail happened."*
- *"They would like to debug more… on that failure and find out what caused that failure… that gives them some action level insight that, okay… this is [what] we need to fix in our chipset so that we pass."*
- *"They always have the waveform, they can manually load in the scope and [debug]. But since we have a software… like any apps you take today, if you have some problem, it just gives you a cue to go and check this then and there."*

**Step 8 — Keysight offers an in-UI HTML report view before download; TekExpress doesn't.** Screen analogue: [reports-view-settings](../screens/reports-view-settings.md).
- *"Keysight, what they provide is… a good HTML view of the report before you download it even… in the [UI] itself, you can just see and scroll… on-screen visibility of the result, that is kind of good in Keysight, which is also not there [in TekExpress]."*

**Step 9 — Report formats: MHT is obsolete, CSV is a must, markdown proposed.**
- *"Some of the formats that we supported like [MHT] and all those like obsolete, none of the browsers support those today. CSV is a must because CSV format, it is not a report, but it is like a data dump that they use to create their custom [reports]. So they have… their script, they just feed the CSV, it pulls the data… if they are looking for custom limits or something like that, they can do all those things because they have the result value… they can [create graphs] and other things from that."*
- Bryan proposes markdown for AI workflows: *"From an AI perspective… [AI tools] use a ton of markdown files. It'd be worth considering adding a markdown report as well."* Tapo: *"Okay, that's cool."*

**Step 10 — Rerun-failed-measurements → merge into the earlier report is a common use case needing better intuitiveness.**
- *"Sometimes user wants to [regenerate] a report… the 1st run gave 2 failures, 2 measurement failures, and the next run, they just want to run those 2 measurements, and if they pass… they just want to include those results in the [earlier] report. That is a common use case that we have in Tek Express. Current Tek Express also has that. But maybe the intuitiveness, again, there has to be a little bit [more]."*
- On interaction shape — asked whether the panel should *"show the previous result and the new result and give a user [the choice], you want to merge it now or something? Or by default, it merges and saves the older report into a different [file]"* — the default-merge option was rejected in-session ("don't like that"); explicit user choice preferred.
- Bryan closes the topic: *"We could start at the results screen. Once we're improving the visibility, the next step from there [is to] look at how you proceed."*

## Friction notes

- **Flat, abstract logs.** One panel of scrolling lines; long lines need horizontal effort; error messages don't explain what happened, why it matters, or what to do — users resort to application-written text-file logs on disk.
- **No mid-run situational awareness.** During multi-hour runs there is no "which waveform of 500 am I on" insight beyond a progress bar.
- **Flat results grid.** No color/failure cues; finding 1–2 failures among many measurements is hard enough that the standard workaround is *download the report and scan/Ctrl-F it*.
- **Binary pass/fail coloring hides marginal results.** A 99-of-100 pass and a 1-of-100 pass render identically green.
- **No on-screen report preview.** Report must be generated and opened as a document to read results in flowing form; Keysight shows HTML in-app.
- **MHT report format is dead weight.** No modern browser opens it.
- **Rerun-and-merge flow lacks intuitiveness** despite being a common use case in current TekExpress.

## Annotations

- **Keysight is the explicit benchmark on all three surfaces** (logs, results richness/plots, HTML report preview). This connects to Rick Kuhlman's 2026-04-23 chart-richness complaint — Keysight's advantage is visualization depth, and Tapo confirms it panel by panel.
- **Two-level logs (summary + description) are a framework-level interface change.** Giving the UI the split forces application teams to author better log content — the UI shape drives the data contract.
- **The results panel is "the ultimate thing from a test run."** Tapo repeatedly ranks results visibility as the highest-value redesign investment: settings are fine, results decide pass/fail of the device.
- **CSV is not a report — it's an integration surface.** Customers pipe it into their own scripts for custom limits, filtering, and graphing. Any format rationalization must preserve CSV exactly.
- **Markdown report format is a new, Tek-originated idea** (Bryan, this session) motivated by AI-tooling consumption; Tapo had no objection. Candidate for the redesign backlog.
- **Auto-load-failing-waveform is bounded by architecture:** the waveforms are `.wfm` files the customer already has; the feature is a *visibility shortcut*, not new capability (see [compliance-test-workflow-anatomy](./compliance-test-workflow-anatomy.md) Step 8).

## Cross-references

- Legacy log surface: [status-log-view](../screens/status-log-view.md); run status: [status-test-status](../screens/status-test-status.md); results grid: [results](../screens/results.md); report generation/viewing: [reports-configuration](../screens/reports-configuration.md), [reports-view-settings](../screens/reports-view-settings.md); plots: [plots](../screens/plots.md).
- DDR5 manual's documentation of the same panels: [status-panel](../docs/tek-express-ddr5-tx-user-manual/status-panel.md), [results-panel](../docs/tek-express-ddr5-tx-user-manual/results-panel.md), [reports-panel](../docs/tek-express-ddr5-tx-user-manual/reports-panel.md).
- Custom limits surface: [setup-test-selection-limits-editor](../screens/setup-test-selection-limits-editor.md).
- Chart/plot richness gap vs. competitors: [ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md) (Rick Kuhlman, 2026-04-23, 55:23).
- Keysight compliance-app corpus subjects for benchmark material: `keysight-d9020`, `keysight-d9040`.

## Pending references

- **Keysight log-view screenshots** — Tapo believes screenshots of the split-panel log view exist ("I think they have the screenshot for that"); not yet routed into a Keysight subject's corpus folder.
- **Start/run status log view prototype iteration** — the one explicit action item logged during this segment.
- **Rework-mode / non-compliance report watermark** — behavior described but not documented in any corpus screen or manual chunk.
- **Rerun-and-merge report flow** — exists in current TekExpress; no corpus screen documents the merge interaction.

## Confidence notes

- Same source caveats as [compliance-test-workflow-anatomy](./compliance-test-workflow-anatomy.md): no timestamps, no speaker labels, heavy ASR garbling with bracketed interpretations ("Keyside"/"Eastside"/"key site" → Keysight; "MST"/"MHD" → MHT; "millifold"/"millionfold" → millivolts; "500 Wi-Fi" → 500 waveforms).
- The voltage limit numbers in Step 6 are Tapo's illustrative examples, further distorted by transcription — treat the *shape* of the argument (marginal pass vs. comfortable pass) as the observation, not the values.
- "Rework mode" is the transcribed term; the legacy UI/manual may name it differently (e.g. user-defined mode). Verify against the live build before reusing the label.
- Speaker attribution in Step 10's merge-option exchange is ambiguous — the "don't like that" rejection of default-merge is clear in context, but which participant said it is not.
