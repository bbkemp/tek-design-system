---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-chrisb-reports-and-rerun-workflow
flow_title: "AE Interview — Chris B: Reports, Rerun-One-Test Workflow, and Report Output Review"
recorded_by: "Chris B. (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "23:49 (session total; this chunk covers roughly the first half)"
transcript_source: "uploads/transcripts/ChrisB.docx"
screens_visited: [reports-configuration]
applies_to: [tek-express, tek-design-system]
related_screens: [reports-configuration, reports-view-settings, results, options-dropdown]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Chris B: Reports, Rerun-One-Test Workflow, and Report Output Review

## Summary

First half of a one-on-one AE feedback session (2026-07-15). Bryan Kemp had shown Chris B. the new TekExpress UI prototype earlier the same day; in this recorded segment Chris drives the *current* TekExpress build live, framing everything through customer workflow rather than internal use. He lays out the compliance-workshop rerun problem (rerun one failed test, replace only that section of the report), enumerates report use cases (pass-only reports for SIG submission, multi-run aggregate reports, custom customer logos), explores the Reports tab, generates a report, and critiques the generated HTML output (broken anchor hyperlinks, no back-to-top link, legacy lilac color scheme, type density).

## Goal

Surface reporting and rerun-workflow pain points in the existing TekExpress from an AE who runs week-long compliance workshops and supports customers using the software.

## Steps

**Step 1 — Session framing.** Bryan sets context: the prototype was shown earlier; this segment is about TekExpress specifically and pain points. Chris confirms the app on screen is the current build and is invited to click through freely.

- Bryan: *"I showed him the prototype and so we're kind of at the point where we're just like talking about Tek Express specifically and pain points."*
- Chris (on first seeing the current build next to the prototype): *"Is this the old build or is this? … OK, current thing, that doesn't look like what you're showing me."*

**Step 2 — Chris frames his lens: customer workflow over internal use.**

- Chris: *"For me, when I'm looking at this, I'm thinking about our customers' workflow. … a lot of times we end up building things for how we use it internally. … Let me pick one test and run that for a demo, and it looks great, and I'm done."*

**Step 3 — The compliance-workshop rerun problem.** Chris describes week-long compliance workshops as the painful internal use case and states the core ask: rerun a single failed test and have the report update only that section.

- Chris: *"A lot of times we'll test the device, we'll run through a full report, and you've got one test that [fails]. … And what I really want is the ability to go back and rerun just that one test. But have it update my report to show the results of that … and replace just that section, just that test that we ran."*
- Chris, clarifying against Bryan's restatement: *"Say I've already ran everything and I had one test that failed like 3 steps back. Just rerun only that test and then have it replace the results in the final report."*

**Step 4 — Report-content use cases: pass-only vs everything.** Asked whether failed results should stay in the report, Chris says it depends on use case.

- Chris: *"For a compliance workshop, no, I only want the passing stuff in there because that ends up getting submitted to the SIG and customers are nervous. [They] won't show anything failing."*
- Chris on customer-side use cases: *"they want a full report showing everything passed, but a lot of times they also want to quickly loop on a failure, just have a loop until it fails or loop while failing until they hit the pass. And then they always ask for automation of how to automate these as well."*

**Step 5 — Hunting for the loop option; it's buried.** Chris tries to find where loop-until-failure lives in the current build and cannot locate it.

- Chris: *"Right now, to kind of do that, we like bury it under options … And on the newer build, it was under options. I'm not even sure where that would be at at this point."*
- Chris, clicking around: *"This is where I haven't driven this recently. … Okay, so there's no reports, there's no results. I'm just kind of clicking through, seeing where everything was at on here."*

**Step 6 — Reports tab exploration.** Screen: [`reports-configuration`](../screens/reports-configuration.md). Chris finds report options and reacts positively, while noting he can't fully tell what they do.

- Chris: *"Generate new report, previous run, replace current test. Okay, so it looks like we have some of these options in here. That's good."*
- Chris: *"They look like it, but I don't know exactly what the functionality of it is. Just run, include header, and test results. Okay, so it looks like I can't come in here and say what things specific[ally]. So this is really good. I'm glad that's in here."*

**Step 7 — Multi-run aggregate report use case.**

- Chris: *"I have use cases where a customer is going to run five times and they want all of those on the … one report and they want all the data from every time."*

**Step 8 — Custom logo on reports.** Chris asks whether customers can put their own logo on the report; the facilitators believe it appears on generate. Chris expects it under settings. He explains why customers use their own logo.

- Chris: *"Do we give them an option to put their custom logo on the report? … I mean, that seems to me like it would be under settings."*
- Chris: *"It'll be theirs because they're going to provide a report to a customer and sometimes they don't want it to show whose test equipment they were using."*

**Step 9 — Report generates almost instantly (positive surprise, with caveat).** A report pops up when Chris hits generate.

- Chris: *"My first comment is when I hit report, it actually popped up almost instantly, and I wasn't expecting it. … Oh, it must be the old test [data] … If we do it this fast on new tests, then that would be really nice."*

**Step 10 — Report formats.** The generated report is HTML. Asked what formats customers use most:

- Chris: *"Probably PDF is going to be the most used. But I like these, yeah, the HTML."*
- On a proposed render-then-save preview flow (render first, choose file format on save): Chris: *"I mean, it could be."* — noncommittal.

**Step 11 — Report body review: summary table good, anchor links broken.** Chris scans the generated report expecting a pass/fail summary up top (it's there) and tries the hyperlinks in it.

- Chris: *"I'm kind of expecting like a summary report up at the top that would show me these are the tests I ran, these are the pass and failed, which I see right here. But these hyperlinks, either I'm just clicking wrong with this mouse or they don't work. But I expect that to jump to — to anchor to where it would be."*
- Chris: *"Clearly it's supposed to be a hyperlink, even if it's not [working]."*

**Step 12 — Report color scheme and type density.** Bryan asks about the light lilac/purple report styling and the small condensed type.

- On the color: *"I think it just matched the … that color scheme at the time"* — i.e. the old UI; no functional reason. (Attribution uncertain — see Confidence notes.)
- Chris on density: *"Everyone's gonna give you a different answer on that one. … My preference, I prefer it to be smaller and compact. … I know a lot of things get really long as well, and it's more legible than a bunch of broken lines."*

**Step 13 — Back-to-top navigation ask.** Chris asks for a hyperlink from each result section back to the summary table.

- Chris: *"When we're actually on the results, down here, if there's a hyperlink to jump back to the results table at the top. OK, so I'm not scrolling it everywhere. … That should be in the reports."*
- Chris: *"I don't know if I just expect that because it's kind of modern functionality everywhere, if our competitors are doing that right now in their reports, but it's kind of best practice anyway."*

**Step 14 — Overall report verdict: industry-standard.**

- Chris: *"The way the report's presented and what it shows is kind of what everybody does, so it's kind of accepted in the industry."*

## Annotations

- **Internal use vs customer workflow is a known design trap.** Chris: *"a lot of times we end up building things for how we use it internally."* His two internal archetypes — one-test demo runs, and week-long compliance workshops — bracket the customer use cases and expose different needs (speed vs selective rerun).
- **Why pass-only reports exist:** compliance-workshop reports *"end[..] up getting submitted to the SIG and customers are nervous"* — the report is a deliverable to a standards body, not just an engineering artifact.
- **Why custom logos exist:** service labs re-brand reports for *their* customers and *"sometimes they don't want it to show whose test equipment they were using."*
- **Report presentation is an industry convention.** Chris explicitly says the report layout is *"kind of accepted in the industry"* — the redesign can restyle it but should not restructure it without cause.
- **Automation is a standing customer ask.** Chris, in passing: customers *"always ask for automation of how to automate these as well."* Not elaborated in this session.

## Friction notes

- **No selective rerun + report section replacement.** *"What I really want is the ability to go back and rerun just that one test. But have it update my report … and replace just that section."* This is the central workflow gap of the first half of the session.
- **Loop/run options are buried and undiscoverable.** *"We like bury it under options … I'm not even sure where that would be at at this point."* An expert AE could not find the loop feature live on camera.
- **Report option labels don't communicate function.** On the Reports tab checkboxes: *"They look like it, but I don't know exactly what the functionality of it is."*
- **Anchor hyperlinks in the generated report don't work.** *"These hyperlinks, either I'm just clicking wrong with this mouse or they don't work."* Expected jump-to-section behavior is broken (or unsupported in the viewer — unresolved on the call).
- **No back-to-top link from result sections.** *"If there's a hyperlink to jump back to the results table at the top … so I'm not scrolling it everywhere."*
- **Report color scheme is legacy, not intentional.** The lilac/purple scheme *"just matched … that color scheme at the time"* of the old UI.
- **File-format expectation mismatch on logo placement.** Chris expected the custom-logo option under settings; it (reportedly) appears in the generate-report flow instead.

## Cross-references

- Reports panel controls Chris explored: [`reports-configuration`](../screens/reports-configuration.md) and its sibling [`reports-view-settings`](../screens/reports-view-settings.md).
- The results screen his summary-table expectations relate to: [`results`](../screens/results.md).
- The Options menu where the loop feature is reportedly buried: [`options-dropdown`](../screens/options-dropdown.md).
- Second half of this session (setup, waveforms, status, run modes, prototype verdict): [`ae-chrisb-setup-waveforms-and-run-modes`](./ae-chrisb-setup-waveforms-and-run-modes.md).
- The loop-until-failure ask recurs and is ranked "number one" in the second-half chunk.

## Pending references

- **Generated HTML report** — the report document itself (summary table, per-test sections, lilac styling) is not a documented screen in this corpus. A `report-output` screen/artifact chunk would let the anchor-link and back-to-top friction notes point at something concrete.
- **Custom-logo dialog** — reportedly appears on generate-report; not captured in the current screen set.
- **Loop / run-mode options location in the current build** — Chris could not find it; whichever dialog hosts it today is undocumented.

## Confidence notes

- **Single-microphone recording; all transcript lines are attributed to "Kemp, Bryan."** Speaker turns above are inferred from context. Chris B.'s turns are generally confident (first-person AE experience: workshops, customers, SIG submissions). Bryan's facilitator turns are confident where they reference the prototype or ask design questions.
- **A third participant appears to be present.** Several question turns have phrasing unlike Bryan's (e.g. *"do you see any other functionality which needs to be added or removed, which is not useful enough?"*), and later in the session someone says *"he's talking about some other applications"* — implying at least three people in the room. Quotes from facilitator-side questions are left unattributed or attributed cautiously.
- **Step 12 color-scheme answer attribution is uncertain** — the *"just matched the color scheme at the time"* explanation may be Chris or the third participant.
- The transcript contains one apparent mis-transcription in Step 10: *"do you think of preview, Michael, before generating"* — "Michael" is likely a transcription artifact (possibly "maybe"), not a person.
- Only session-level timestamps exist (start 0:08, total 23:49); the Teams export collapsed the session into one block, so steps carry no per-step timestamps and step boundaries are editorial.
- Opening ~2 minutes are small talk (dress code jokes, a story about industrial designers Tony and Renee and the 20-year-old original design being a *"cult classic"*) — summarized here, not step-documented.
- No credentials or customer names appeared in the transcript; nothing redacted.
