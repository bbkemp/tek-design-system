---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-tapo-parua-prototype-ui-feedback
flow_title: "AE SME Session (Tapo Parua) — Prototype UI Feedback: Logs, Results, Reports, Help, Navigation"
recorded_by: "Tapojyoti \"Tapo\" Parua (Application Engineer); Bryan Kemp (facilitator)"
recorded_date: null
duration: null
transcript_source: "uploads/transcripts/TapojyotiParua.docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [status-log-view, status-test-status, results, plots, reports-configuration, reports-view-settings, setup-dut, setup-preferences, running-test]
related_apis: []
related_hardware: []
related_modules: []
---

# AE SME Session (Tapo Parua) — Prototype UI Feedback: Logs, Results, Reports, Help, Navigation

## Summary

Second half of the first SME review session with AE Tapojyoti "Tapo" Parua (facilitated by Bryan Kemp). With the workflow context established (see [`ae-tapo-parua-workflow-and-settings-architecture`](./ae-tapo-parua-workflow-and-settings-architecture.md)), Tapo works through concrete UI feedback against the prototype, repeatedly benchmarking against Keysight: flat uninformative logs vs. Keysight's summary+detail log view, a flat results grid that hides failures, missing on-screen HTML report preview, obsolete report formats vs. must-have CSV, PDF-only help vs. contextual in-app help, wizard navigation and the meaning of panel checkmarks, a proposed change-indicator for interdependent settings that span panels, rerun-and-merge reporting, and the placement of persistent chrome (Debug/Preferences links, application/suite label).

## Goal

Collect an expert AE's think-aloud reactions to the new Tek Express UI prototype and his prioritized pain points with the current product, to feed the redesign.

## Steps

**Step 1 — Tapo pivots from workflow to visualization: log intuitiveness, benchmarked against Keysight.** Long-running tests give the user no sense of position or progress detail.
- *"The visualization part … Keysight, what I see, the UXR applications … the intuitiveness of the log. … Logs means the status — test is running, sometimes a test runs for maybe hours. … So how do I know like where I am exactly?"*
- *"I need that, okay, this happened. I applied this setting on the scope, then this filter was applied. Then … I am now acquiring this waveform. So maybe it needs to acquire some 500 [waveforms] — which waveform is it acquiring now? So all those insights."*

**Step 2 — Tapo describes Keysight's summary + detail log pattern.**
- *"If you see in Keysight, there will be this panel … halfway split. This side there will be a bunch of messages … coming, and … if you click one of those messages, the details [come up in the other] panel. … This is like a high level [log], but if you want to go into more details, you will get [them] on the right panel."*
- Bryan: *"That sounds like … a big feature enhancement."*

**Step 3 — Current TekExpress logs are flat, lengthy, and too abstract — especially error messages.**
- *"The current Tek Express — the logs are pretty flat. … There is one panel … it's just like [rattling] lines there. … Sometimes what happens, if you want to put more information, that line kind of gets pretty lengthy — [you] use scrolling and other things. And sometimes they are too abstract … especially [what] happens in the error messages. … Then I have to just go inside and if the application [has] printed those logs in some text file, then I might know [what happened]."*

**Step 4 — Tapo pushes back on always-visible logs: discoverability is enough.** Bryan asks whether logs should show all the time; Tapo says a known, not-too-nested place suffices.
- *"As long as there is a place people know … and if it is … not too nested down … I think this is something not that difficult for … someone to learn that, okay, if I need to see the logs, what should I do? … This is not a very complex visibility problem. You do not have to always pop things out for a user for convenience."*

**Step 5 — The summary/description split is an interface gap, then an application-team responsibility.**
- *"One part depends on the application team, how intuitive they make those logs. But from a UI point of view … the application team currently do not have that feature that, okay, I have a … summary part and there is a description part. … That kind of thing is not [in] their interface [today]. So if you just put that … then it is application team['s] responsibility to feed those things better."*
- Bryan flags it as a prototype iteration target: *"iterating on the start run status log view. That would be a good thing to prototype out."*

**Step 6 — Results panel: flat numbers, no failure cues; users fall back to scanning the downloaded report.**
- *"Then comes the result part, and again, in results also, Keysight has a lot of — I think they use plots. They use better way of displaying the result. Our things, again, I feel like it's a bit flat. … [We] just show … like a bunch of numbers here … not much colors or like things that … the user needs to know … if something fail[ed]. Because sometimes I run so many measurements that it is almost difficult to … go through this thing and find … where that one or 2 fails [are]. So normally what [they do], they download a report and then scan that report."*

**Step 7 — Failures matter most, but pass/fail alone is not enough signal: margin matters.** Users care about how close a pass is to the limit.
- *"People would be interested in the failed results. Now, passing results also may not be [enough] … the pass or fail of a result … depends on the limits that you put. … If it is one millivolt, then also it is pass; if it is 99 millivolt, that is also pass. … So that green would not suggest … whether it is a good pass or a bad pass."*

**Step 8 — Custom limits and rework mode.** Customers with tighter internal specs re-check results against their own limits; TekExpress supports this in rework mode, with a non-compliance watermark on the report.
- *"Some customers … would have their own spec limits … because they know that … [a] certain voltage cannot go beyond 10 volt. So they will put this result into their limits and they will check … although it is a pass from the compliance standard … they would say that, okay, this is [a] fail."*
- *"In the [rework] mode, you can … have custom limits [edited]. … When you run a test in a rework mode and [generate a] report, it [explicitly says] that this is not a compliance report, so this cannot be submitted for certification."*
- *"Especially when they are building a chip or something, where they know that they need to do the iteration[s] … they would like to do these … custom limit checks."*

**Step 9 — Results should cue the user toward failures; future idea of auto-loading the failing waveform on the scope.**
- *"Our … results view … should give a user better cues — like, okay, there is a failure somewhere. And I think there were some thought of like loading that waveform into the scope and actually go to that … waveform and find out where exactly that fail happened. But … those are [a] one[-step-further] picture — let's talk about that later. But from the basic point of view … having a little bit more detail on the results panel … this is always I have felt like this is pretty flat and it should [be] a little bit more intuitive. … Ultimately the result is … what the user is the most interest[ed in] … because this decides whether the device is failing or [passing]."*
- On debugging failures: *"They would like to debug more on … that failure and find out what caused that failure. … That gives them some action-level insight — okay, this is … the [problem] we need to fix in our chipset so that we pass it."*
- *"This is all about visibility. … They always have the waveform, they can manually load [it] in the scope and do the [debug]. But since we have a software … ideally … any apps you take today, if you have some problem, it just gives you a cue to, you know, go and check this then and there. … That is the feature I'm talking about."*

**Step 10 — Reports: Keysight has an in-app HTML report preview; TekExpress makes you download first.**
- *"[Keysight], what they provide is … they have a good HTML view of the report before you download it even. … In the [UI] itself, you can just see and scroll. … Sometimes you … have to put it in the PDF document and then go through that. … On-screen visibility of the result — that is kind of good in Keysight, which is also not [there in TekExpress]."*

**Step 11 — Report formats: obsolete MHT, must-have CSV; Bryan floats a Markdown report.**
- *"Some of the formats that we supported, like [MHT] and all those, [are] obsolete — none of the browsers support those today. CSV is a must, because CSV format — it is not a report, but it is like a data dump that they use to create their custom [reports]. So they have … their script[s], they just feed the CSV, it pulls the data. … If they are looking for custom limits or something like that, they can do all those things because they have the result value. … They can [create] graphs and other things from that."*
- Bryan: *"[AI tools] use a ton of markdown files. It'd be worth considering adding a markdown report as well."* Tapo: *"Okay, that's cool."*

**Step 12 — Help today is document-only; intuitiveness "goes away."** Tapo frames the help content as a reference guide for a specialized domain, not an instruction manual.
- *"One more thing would be the help files that we have today. They are all document files. … You need to download it … a PDF or something. … So that intuitiveness kind of, you know, goes away."*
- *"Your software should be intuitive [so] people need not have to go and see documents. But this is a specialized domain. … Every now and then, once in a month or somewhere, you might need to know … what does these settings do exactly. … The things that [it's] talking [about are] not always … a common term."* — Bryan/Tapo agree: *"It's not an instruction manual, it's a reference [guide]."*
- *"Sometimes … the name of certain components that they're using here … deviate[s from] the industry standard names. … If they have a question — oh, what does this mean? — … they can always … go and check … what exactly these settings is about. So they don't have to download the whole [document]."*
- *"The problem with PDF is … I just need this information — [but] in PDF, I just [have] to scroll, scroll, scroll and find out, okay, this panel, this setting, what does it mean?"*

**Step 13 — Contextual in-app help: per-setting popup like "Riddick", not just tooltips, linked into the help document.**
- *"If I'm just worried about … what is this [setting] … and if there is a question mark here, you just click that question mark and something pops up here. … It is there in Riddick."* (Product-name transcription uncertain — see Confidence notes.)
- *"Not just tool tips — [the] thing should point to the document. … The help document, maybe a PDF, can always be there. But I need information on screen, so that I do not have to jump back and forth. … If you want to go into more details, [it] can give a link to the help document, which will point to that section."*

**Step 14 — But not 100 question marks: a minimalist, selection-aware global help affordance.** Bryan notes Clarius got that exact complaint.
- *"The thing that happens is, like, if you just start putting question mark and exclamation mark [on] all these settings, the UI kind of gets very clumsy. … I need a minimalist help view somewhere … maybe … I just click on this one and press F1, or there is … a common question mark — based on the current selected item, it can just show me [the help]."*
- *"That should come only for those settings which are not very understandable, or which needs explanation. … Why do you want to put it for [every]thing?"*
- Bryan: *"That's a global pattern we need to … work out for kind of everything. We had that for [Clarius]. … We got that feedback also from [Clarius], that there are too many question marks all over the page."*
- Tapo, distinguishing from tooltips: *"Those are essentially only tool tips, right? I'm not looking for a tool[tip]. … Like in Riddick … it kind of gives a good description of almost about everything."*

**Step 15 — Icons: yes.** Bryan asks whether adding icons is noise.
- *"Adding icons makes it … looks more professional, for sure. … Go for it."*

**Step 16 — Visual feedback on the prototype: color good, white too bright.**
- *"The color looks good. Maybe the white is a little bit [bright]. It kind of hurting my eye right now."* (Bryan notes the light mode is unfinished; the blue is new — *"it is not [Riddick] colors. These are some colors which we are going to introduce … this is like just Tek blue."*)

**Step 17 — Wizard navigation: Next/Back is fine, but panel tabs must be directly clickable.**
- *"The next and back button is fine, but I should be able to click this [tab directly]. Because not always … I go in sequence. [Maybe] I forgot — okay, I was in [the] config panel and I think like, okay, in that panel, I'll change some setting. So I shouldn't [have to] go … back and back [to] go there."*

**Step 18 — The checkmark on panels means only "visited," and that's the confusing part.** Bryan asks what the checkmarks imply; Tapo clarifies they don't validate anything, and gating Start on them would break the product's run-with-defaults promise.
- *"[The] tick mark … only say[s] … that you have visited that. You just visited it. … It gives me an indication that, okay, I have done everything in test selection … that panel is ready. Because normally, it's not validated."*
- *"Preference panel — … people do not even visit sometimes. It's … very rarely people visit [the] preference panel. So are you telling that if I do not have that tick mark[ed], I should not be able to start a test? [That]'s [the] confusing part."*
- *"You will be able to run a test even though you are not visiting the other 3 panels, right? … If I have … made [my] selections … but I'm not going to the last 3 panels of configuration and preference, will I be able to [run] a test? … Ideally, Tek Express — you should not [have to] do anything else. … The default setting should get [you] to some test."*
- Bryan: *"Let's definitely [iterate] on that because I think we could just make it more clear … if [they] visited it or not … but not, like, heavy handed."*

**Step 19 — Feature idea: a change-indicator ("blue dot") for interdependent settings that span panels.**
- *"There should be one more good feature. … The interdependent settings, right? I change something in this panel … and let's say that impacts something over here. … Users do not know that if I just change this dropdown to a different item here, maybe something has changed [on another panel]. … I would like to have … a blue dot kind of thing here, telling that, okay, something got changed here, so that it's a good thing to [go look]."*
- *"It is not [about] deviating from [the] defaults. … [The] user … might not know that … changing this setting — let's say in a config panel there is another setting [whose] value also changes based on this setting. … Just want to tell the user that, okay, because you change[d] something here, there is something that needs your attention here. … You can just go [ahead] and run it, but … if you're not aware of it, at least you will get a cue."*
- *"Because sometimes these interdependent settings, they are spanned across pages … and it is not visible at the same time. Less chances of making mistakes, that's it."*

**Step 20 — Responsiveness question: laptop-scale windows.** Bryan describes the container-breakpoint plan.
- Tapo: *"Will this be, like, if I … want to [use] it [on] a laptop [screen]?"*
- Bryan: *"We're working on … responsive bits … there will be different [breakpoints] where the UI might change above or below that. … The components will just adjust themselves."*

**Step 21 — Deferred: session management flows; the rerun-and-merge-report use case.** Tapo flags session save/load/export as needing a future pass, and describes the common partial-rerun report merge.
- *"Some use case would come when you go into those session [dialogs] — session [saving], export, and other things. I do not have things in my mind right now to give you inputs on that … this will be [an iterative] process."*
- *"Those are the places … sometimes user wants to re[generate] a report. Like, for example, the 1st run gave 2 failures — 2 measurement failures — and the next run, they just want to run those 2 measurements, and if they pass …, they just want to include those results in the earli[er] report. So that is a common use case that we have in Tek Express. Current Tek Express also has that. But maybe the intuitiveness, again, there has to be a little bit [of work]."*
- Discussion of merge behavior: *"Does it require to show the previous result and the new result and give a user [the choice] — okay, you want to merge it now or something? Or by default, it merges and saves the older report into a different [file]?"* Bryan: *"We could start at the results screen … once we're improving the visibility, [that's] the next step from there."*

**Step 22 — Chrome placement: Debug/Preferences links should be persistent common chrome, not per-panel.** Bryan asks about the Debug and Preferences links in the prototype.
- *"These things should be … common to everything. Like if you're running a test, it should be … persistent across all the panels. … Maybe there can be one space which is kind of common across all the panel[s] that we can keep there."*

**Step 23 — The application/suite label is in the wrong spot in the prototype.** In current TekExpress a label shows which application/suite is selected; the prototype places it elsewhere.
- *"I think there is a label [that] comes, that tells you which application it is or which suite … is selected. … This is kind of [it], but it does not come here. It comes here."* Bryan: *"Someone [else] said [it's] just, like, in [the] wrong spot."*

**Step 24 — Closing: habit is not approval; Keysight comparison is where help is needed.**
- Tapo: *"Something that … maybe people got used to it or they do not complain about that much, but actually, if you see the Keysight software … they are really doing that [well]. That's where we need help identifying."*
- Bryan: *"There'll always be [blind spots]. Like, you can get used to using a dish rag for a drain [stopper] … just 'cause you [use it], it doesn't mean you don't like … a normal [stopper]."*
- Tapo: *"I think that's all for today. I['ve] run out of thoughts."*

## Annotations

- **Keysight is the recurring benchmark**, cited four separate times: (1) summary+detail log panel, (2) richer results display with plots, (3) in-app HTML report preview, (4) general polish (*"if you see the Keysight software … they are really doing that [well]"*). Tapo references Keysight "UXR applications" — likely the compliance apps on Keysight's UXR-series oscilloscopes.
- **The log summary/description split is an interface contract, not just UI.** Tapo's point: application teams *can't* feed structured summary+description logs today because the framework interface doesn't offer it. Adding the UI creates the contract; content quality then becomes the application teams' responsibility.
- **Pass/fail color alone under-informs** — margin-to-limit is the real signal (*"that green would not suggest … whether it is a good pass or a bad pass"*), and customers with internal spec limits re-evaluate results via CSV exports and rework-mode custom limits.
- **CSV is load-bearing infrastructure**: customers script against it to build custom reports, apply custom limits, and chart results. MHT is dead. Bryan's Markdown-report suggestion was received positively (Tapo: *"Okay, that's cool"*).
- **Help model requested: layered.** On-screen contextual description (selection-aware, F1 / single global question mark) → link into the exact section of the reference document. Explicitly *not* tooltips, and explicitly *not* a question mark on every setting (Clarius precedent: *"too many question marks all over the page"*). The "Riddick" per-setting help popup is the positive reference.
- **Checkmarks-as-visited is the agreed model**: navigation tabs directly clickable, checkmark = visited only, never a gate on Start — because run-with-defaults from the DUT panel alone is core TekExpress behavior (see the workflow chunk). Bryan committed to iterating on the affordance.
- **The "blue dot" cross-panel change-indicator is Tapo's one net-new feature proposal** in this session: a non-blocking attention cue when a setting change on one panel alters values on another, because interdependent settings *"are spanned across pages … not visible at the same time."*
- **Persistent chrome**: Debug/Preferences links and the application/suite identity label belong in an always-visible common region, matching current TekExpress's header label behavior.
- **Auto-load-failing-waveform-on-scope** is flagged as a future/bigger-picture idea, not a current ask — the near-term ask is failure cues in the results panel.

## Friction notes

- **Flat, abstract logs; no progress insight during hours-long runs:** *"The logs are pretty flat. … It's just like [rattling] lines there. … Sometimes they are too abstract … especially … the error messages. … Then I have to just go inside and if the application [has] printed those logs in some text file, then I might know."* And: *"a test runs for maybe hours … how do I know like where I am exactly?"*
- **Flat results grid hides the failures that matter:** *"I feel like it's a bit flat … just … a bunch of numbers here … not much colors … sometimes I run so many measurements that it is almost difficult to … find … where that one or 2 fails [are]. So normally … they download a report and then scan that report."* — the workaround is leaving the app entirely.
- **No on-screen report preview:** *"[Keysight] have a good HTML view of the report before you download it even. … [That] on-screen visibility of the result … is also not [there in TekExpress]."*
- **Obsolete report formats still shipped:** *"Some of the formats that we supported, like [MHT] … [are] obsolete — none of the browsers support those today."*
- **Document-only help breaks flow:** *"They are all document files. … You need to download it. … So that intuitiveness kind of … goes away."* / *"In PDF, I just [have] to scroll, scroll, scroll and find out, okay, this panel, this setting, what does it mean?"*
- **Wizard forces sequential navigation:** *"I should be able to click this [tab directly]. Because not always … I go in sequence."*
- **Checkmark semantics confusing / risk of gating Start:** *"Are you telling that if I do not have that tick mark[ed], I should not be able to start a test? [That]'s [the] confusing part."* (Preferences is rarely visited; gating on it would break run-with-defaults.)
- **Invisible cross-panel side effects:** *"These interdependent settings, they are spanned across pages … and it is not visible at the same time."*
- **Rerun-and-merge report flow lacks intuitiveness:** *"That is a common use case … Current Tek Express also has that. But maybe the intuitiveness, again, there has to be a little bit [of work]."*
- **Prototype visual: white too bright:** *"Maybe the white is a little bit [bright]. It kind of hurting my eye right now."*
- **Prototype: application/suite label in the wrong place** relative to current TekExpress: *"it does not come here. It comes here."* (Exact positions not recoverable from audio-only transcript.)

## Cross-references

- Current flat log view: [`status-log-view`](../screens/status-log-view.md); run status: [`status-test-status`](../screens/status-test-status.md) — Tapo's proposed navigation is Status → Test Status + a log detail view.
- Flat results grid: [`results`](../screens/results.md); Keysight-style richer plots relate to [`plots`](../screens/plots.md).
- Report formats and generation: [`reports-configuration`](../screens/reports-configuration.md), [`reports-view-settings`](../screens/reports-view-settings.md).
- Rarely-visited Preferences panel: [`setup-preferences`](../screens/setup-preferences.md); run-with-defaults starting point: [`setup-dut`](../screens/setup-dut.md).
- Rick Kuhlman's chart-richness friction in [`ux-feedback-and-open-questions`](./ux-feedback-and-open-questions.md) is reinforced by Tapo's "Keysight uses plots / our results are flat" comparison.
- First half of this session (workflow architecture, settings placement, Clarius regression): [`ae-tapo-parua-workflow-and-settings-architecture`](./ae-tapo-parua-workflow-and-settings-architecture.md).

## Pending references

- **The prototype's screens/states** (tweaks panel, setup tabs with checkmarks, Debug/Preferences links, status/log view) are not corpus-documented; `screens_visited` is empty for that reason.
- **Keysight log view / HTML report preview screenshots** — Tapo: *"I think they have the screenshot for that"*; Bryan: *"I've seen those."* Screenshots exist somewhere but are not in the corpus; a `keysight-<sku>/` competitor subject would hold them.
- **"Riddick" per-setting help popup** — the positive reference pattern for contextual help; product name transcription uncertain, not documented in corpus.
- **Rework mode / custom limits editor** — described in detail; the closest documented screen is [`setup-test-selection-limits-editor`](../screens/setup-test-selection-limits-editor.md), but the rework-mode report watermark flow is not documented.
- **Session dialogs (save/load/export) and the rerun-merge flow** — Tapo explicitly deferred these to a future session: *"when I … talk about those, maybe I'll take the [walk]through and I'll tell you what all this is going to be."*

## Confidence notes

- **Speaker turns are unattributed** (single mic, dictated auto-transcription). Attribution inferred: Tapo = the SME making comparisons and requests; Bryan = facilitator asking questions and making design commitments. A few facilitator turns may belong to a second Tek-side participant; where attribution was too uncertain, quotes are presented without a hard name or omitted.
- **`recorded_date` is `null`** — no date is stated in the transcript content. Session context places it around mid-July 2026 (first SME review of the prototype), but that is inference.
- **Garbled transcription, bracketed reconstructions.** As in the sibling chunk: "Keyside"/"key site"/"Eastside" = Keysight; "MST" = MHT; "health files"/"health text" = help files/help text; "lungs"/"laws" = logs; "millifold"/"millionfold" = millivolt (unit uncertain — could be another unit; the 1-vs-99 margin point is clear); "Sigma" (in a facilitator aside about change-indicator patterns) is likely "Figma". Bracketed words inside quotes are editorial reconstructions of garbled audio.
- **"Riddick"** appears three times as the product with the good per-setting help popup and as a color-scheme reference ("Does Riddick support blue?"). The real product name behind this transcription is uncertain — flagged rather than guessed.
- **"DQS"** — the example setting Tapo clicks when illustrating contextual help; the exact acronym may be mis-transcribed.
- The exact on-screen positions in the label-placement discussion ("it does not come here, it comes here") are gestural and unrecoverable from an audio-only transcript — recorded as a placement mismatch without coordinates.
- Several heavily garbled fragments (e.g. *"I had something about TikTok about this next unbag"* — apparently about earlier feedback on the Next/Back buttons, given the following turn) were summarized from surrounding context rather than quoted; small talk and personal asides were skipped.
- Step boundaries are editorial; the source has no timestamps; `duration` is `null`.
