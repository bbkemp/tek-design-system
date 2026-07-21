---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-travis-berger-run-environments-adoption-and-reports
flow_title: "AE Interview — Travis Berger: PC vs On-Scope, Change Tolerance, Report Interop, and Stop/Pause"
recorded_by: "Travis Berger (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-15
duration: "1:14:53 (session total; this chunk covers ~56:00–1:14:53)"
transcript_source: "uploads/transcripts/TravisBergerPt2.vtt"
screens_visited: [reports-view-settings, running-test]
applies_to: [tek-express, tek-design-system]
related_screens: [reports-view-settings, reports-configuration, plots, running-test, results, status-log-view]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Travis Berger: PC vs On-Scope, Change Tolerance, Report Interop, and Stop/Pause

## Summary

Final segment of the Travis Berger session, recorded while the live PCIe run finishes. The facilitators probe the run-on-PC question: Travis hears little direct customer demand — under 20% of his customers do walk-away automation, most sit at the scope troubleshooting, and floating laptop licenses are the real blocker — but concedes scope processors are generations old and offloading analysis (via Tek HSI waveform export) would help. On adoption he's blunt: *"don't change it"* structurally — customers tolerate a reskin plus placement fixes, and the Clarius-style total revamp is the cautionary tale; his mitigation is a dismissible first-run tutorial overlay. Reviewing the finished report he asks for the report-to-waveform hyperlink to work ("saved me so much headache"), and relays the two-vendor interop reality: correlation against Keysight-equipped partner teams drives requests for CSV export and vendor-neutral report templates. Last complaints: Stop takes forever to die ("stopping your progress"), while Pause works instantly. Closes with a (redacted-customer) laptop-install war story and the facilitators calling it their favorite session yet.

## Goal

Capture the AE's read on deployment environments (on-scope vs PC), customer appetite for UI change, report interoperability needs, and run-control (stop/pause) behavior.

## Steps

**Step 1 — [00:55:57] Do customers ask to run TekExpress on a PC?** Direct demand is thin.

- Facilitator: *"Do you hear any feedback from the customer saying that they want to run it on a PC?"* Travis: *"Not really. … I feel like the industry is going that way, but I don't really hear that feedback from customers specifically."*

**Step 2 — [00:58:19] The automation reality: most customers sit at the scope.**

- Travis: *"I would say less than like 20% of customers do like full automation type testing — like they just do this and walk away. Most customers are there by the device … sometimes they'll have to flash firmware on their device. … they're troubleshooting while they're doing the test."*
- Travis: *"In that case, maybe it would be helpful to have like a remote PC, but the thing you have to worry about is the licensing."*

**Step 3 — [00:59:04] Licensing is the real constraint on PC installs.**

- Travis: *"A customer has a laptop, it has a license for this application, that customer gets moved to a different project. Now he has left the license on his laptop, but the other people on the team need to do the testing. … Whereas if it's on the scope, it's staying there in one place — the scope [is] staying in the lab; it makes more sense for it to be on there."*
- Remote fallback exists today: *"They'll remote into the scope just as like a regular Windows PC and then they'll do the control."*

**Step 4 — [01:00:07] The counterweight: scope processors are old and slow.**

- Travis: *"These aren't packed with the most powerful processors. By the time they're released, it's like [a] 5 generations old processor, because when they started development of the board, that's the processor that was available. … If there's any analyzing going on inside of Tek Express, it takes a long time. Whereas on a PC … you could take advantage of more powerful processing."*

**Step 5 — [01:00:54] Idea: use Tek HSI to move waveforms off-scope.**

- Travis: *"On the newer scopes, the Riddick scopes — have you guys heard of the Tek HSI, the high speed interface? If you can utilize that with Tek Express … some of these waveforms are massive … being able to export that into the application might help in terms of speed."*
- A facilitator confirms they worked with Clarius' back end previously: *"I did. … I don't think we're working on that anymore."*

**Step 6 — [01:01:28] Customer demographics.** A facilitator asks the typical age group ahead of the reskin.

- Travis: *"[The] median of the customers would probably [be] like early 30s. … I've worked with a lot of people who are really older … they're coming from [Keysight], and now I got to teach them everything about the Tek GUI and … all the testing and interfaces."*
- Travis on the Bay Area: *"There's like a lot of recycling of engineers — the older groups get pushed up [in]to management, and we have all the newer engineers doing this type of testing."*

**Step 7 — [01:02:46] Change tolerance: reskin yes, revamp no.**

- Travis: *"I would say don't change it. Like a lot of customers that are embedded in it don't like a whole lot of change. … Getting customers to move from this old platform, which they got used to, to the Riddick platform was kind of a hurdle for a few customers. I would say [the] majority are more than happy to use this new stuff."*
- Facilitator: *"Lessons have been learned with Clarius, and that was a drastic change. That was a complete revamp … everyone's a little shell-shocked."* Travis: *"[Rohde] and [Keysight] and us, we were all kind of similar [in] workflow … Clari[u]s just seemed very foreign to me, and I think it felt that way for a lot of customers."*
- Travis's scope for the redesign: *"I definitely [would] update the GUI … just the GUI update in general, the skin would be nice, and maybe some of the other feature changes. … I don't feel like any of those other things that I'd mentioned are too drastic."* (E.g. the launcher layer: *"having just a layer above it — it's not too blatant of a change, but they're gonna eventually get back into Tek Express."*)

**Step 8 — [01:05:18] Mitigation: a dismissible first-run tutorial overlay.**

- Travis/facilitator (converging): *"The intro tutorial thing — it darkens the screen, then it highlights: click here, click here … a get started guide, which would appear for maybe one or two times once you are launching the Tek Express for the first or second time. After that, you can just click on 'Don't show me this again.'"* Travis: *"I feel like that would be helpful."*

**Step 9 — [01:06:01] The run finishes; report review.** Screen: [`reports-view-settings`](../screens/reports-view-settings.md) (report surfaces). The run completed faster than expected.

- Travis: *"It finished way faster than I thought it would. … this test, this one's pretty dense."*
- On plot styling: *"This looks like a MATLAB plot or something. … I think this is just like a SIG test thing"* — Sig Test-generated plots differ from the eye diagrams the scope renders: *"it uses [the scope] to generate the eye diagrams and paste them on here."* Verdict: *"Not a huge deal, I'm not too worried about it."*

**Step 10 — [01:07:04] The broken report-to-waveform hyperlink.**

- Facilitator: *"What if you can [have] a hyperlink to the waveform? We're button-mashing them earlier, and like, why does this not anchor to the waveform?"* — *"I think it's broken. It might have worked at some point."*
- Travis: *"If I see something that fails — bam, I could go right to the waveform that failed. Oh my god, like it [would have] saved me so much headache."*

**Step 11 — [01:07:45] HTML-report idea; customers live in PDFs.**

- Facilitator: *"This could be just one long [page], not paged … an HTML view and then you'd save the PDF from that."* Travis: *"I feel like most customers do PDFs — they'll just send those back and forth."*

**Step 12 — [01:08:04] Two-vendor interop: custom report formats and CSV export.** Partner teams on different vendors need comparable reports. (Customer names redacted.)

- Travis: *"One thing I hear pretty often is like customers will use their own report format. … a group at [customer redacted] in Santa Clara will work with a group out in Shenzhen … the Shenzhen group has [Keysight]; the Santa Clara folks have Tek — and they have two different report formats. If they want to keep them consistent and be able to collaborate on projects easily, some customers have asked to export just like these as a CSV or something they could take and put in a different report format, so that they can easily share with their team."*

**Step 13 — [01:08:52] Vendor-neutral report template idea.**

- Facilitator: *"Would having a view that matches [Keysight's] be beneficial? … doesn't say [Keysight] on it … a checkbox — name it something, but vendor two … style two."* Travis: *"That would be pretty cool."*
- Travis on the automation backdoor: *"You can automate and use SCPI commands with Tek Express and get report data through [scripting] control … that's always like a backdoor option to populate a different report format."*

**Step 14 — [01:10:02] Why it matters: correlation runs.**

- Travis: *"A lot of customers do like correlation. And it's like, our results might be mid-page [where Keysight's] is the top of the page for some particular test. I got to match the test name and all that."*

**Step 15 — [01:10:26] Stop is slow; Pause is instant.** Screen: [`running-test`](../screens/running-test.md) (run toolbar).

- Travis: *"There's always — I'm sure everybody complains about — stopping a test and having to wait for it to process."*
- The live demo: *"You want to stop, and then I hit yes, and it says 'stopping your progress.'"* Facilitator: *"What, why is that happening?"* Travis: *"I don't quite know … what's happening in the back end."* Facilitator: *"If the customer really, truly wants to stop, why not just [kill] the process that's running?"*
- Travis on Pause: *"There is a pause button, which is kind of nice — that works like immediately."* Pause events show in the logs.

**Step 16 — [01:12:15] Closing war story: install breaks after reboot.** (Customer name redacted.) A laptop TekExpress install for a DisplayPort demo worked on first install but wouldn't launch after any reboot.

- Travis: *"When I first installed it, I was doing a DisplayPort demo for [customer redacted] and it worked right after I immediately installed everything. But when I rebooted my laptop, it wouldn't launch anymore."*
- Travis: *"There were three AEs in the Bay Area … my demo is at 10:30 and I'm calling another AE like, hey, I'm going to walk you through the install process. Do not turn off your laptop … drive your laptop down to me. … [His battery] lasts like forty-five minutes … it turned off, but it had saved the state — it went more like a hibernate rather than a reboot. … After we rebooted it, it didn't work again — his didn't work — so we can replicate the issue."*

**Step 17 — [01:14:05] Session close.**

- Travis: *"That's kind of all I've got."* Facilitator: *"That was amazing. … I can't tell you how helpful this was. … This has been like my favorite session yet."*

## Annotations

- **On-scope vs PC is a licensing and workflow question, not just a technical one.** Floating laptop licenses strand when engineers change projects; the scope stays in the lab, so the license does too. Remote-desktop into the scope is today's remote path. Direct customer demand for a PC build is thin in Travis's territory (Bay Area), but analysis speed on aging scope CPUs is a real cost.
- **Tek HSI (high-speed interface) on Riddick scopes** is Travis's suggested bridge: export massive waveforms to a more powerful host for analysis rather than porting the whole application.
- **The Clarius revamp is the shared cautionary tale** for drastic UI change: *"[Rohde], [Keysight] and us were all kind of similar … Clari[u]s just seemed very foreign."* Travis's adoption guidance: keep structure, reskin the GUI, fix placements, add nothing that forces relearning — and ship a dismissible first-run tutorial for what does change. (Facilitator context suggests Clarius is a product the Tek team previously worked with; see Confidence notes.)
- **Older engineers migrating from Keysight are a real onboarding population** — AEs teach them the Tek GUI from scratch; median customer age skews early-30s in his territory.
- **Report interop is a two-vendor world.** Multi-site programs split across Tek and Keysight benches; correlation work means manually matching test names across differently-ordered reports. CSV export and a vendor-neutral ("style two") template are the customer-driven asks; SCPI scripting is the existing backdoor for extracting report data.
- **Sig Test-generated plots and scope-generated eye diagrams coexist in one report** with visibly different styling ("looks like a MATLAB plot") — cosmetic, low priority per Travis.
- **Stop's slow teardown is universal:** *"I'm sure everybody complains about"* it; Pause is the well-behaved control. Nobody in the room could explain what "stopping your progress" is doing in the back end.

## Friction notes

- **Stop takes a long time to actually stop.** *"Everybody complains about stopping a test and having to wait for it to process."* / *"It says 'stopping your progress' — what, why is that happening? I don't quite know."*
- **Report-to-waveform hyperlinks are broken.** *"Why does this not anchor to the waveform? … I think it's broken. It might have worked at some point."* Working links *"[would have] saved me so much headache."*
- **No CSV / neutral-format export for cross-vendor report sharing.** *"Some customers have asked to export just like these as a CSV or something they could take and put in a different report format."*
- **Correlation against Keysight reports is manual.** *"Our results might be mid-page [where theirs] is the top of the page … I got to match the test name and all that."*
- **Laptop installs can break irrecoverably after reboot** (replicated across two machines): *"when I rebooted my laptop, it wouldn't launch anymore."*
- **Licensing model strands PC licenses on individuals' laptops** when staff rotate projects.
- **Change itself is a risk:** *"a lot of customers that are embedded in it don't like a whole lot of change"* — the old-platform → Riddick migration was already *"a hurdle for a few customers."*

## Cross-references

- Report surfaces: [`reports-view-settings`](../screens/reports-view-settings.md), [`reports-configuration`](../screens/reports-configuration.md), [`plots`](../screens/plots.md); run toolbar (stop/pause): [`running-test`](../screens/running-test.md); results panel Travis skips in favor of PDFs: [`results`](../screens/results.md).
- Previous chunk: [`ae-travis-berger-status-results-sessions-and-run-window`](./ae-travis-berger-status-results-sessions-and-run-window.md); session start: [`ae-travis-berger-bench-setup-and-instrument-connection`](./ae-travis-berger-bench-setup-and-instrument-connection.md).
- Automation/scriptability and PC-vs-scope themes in sibling sessions: [`ae-nadir-kahn-pain-points-and-automation`](./ae-nadir-kahn-pain-points-and-automation.md), [`ae-chrisb-setup-waveforms-and-run-modes`](./ae-chrisb-setup-waveforms-and-run-modes.md) (on-scope real-estate constraint).
- Visual-direction / match-the-new-scopes theme: [`ae-nadir-kahn-competitive-landscape-and-visual-direction`](./ae-nadir-kahn-competitive-landscape-and-visual-direction.md).

## Pending references

- **Tek HSI (high-speed interface)** — Riddick-scope capability suggested as a waveform-offload path; not documented in this corpus.
- **Clarius** — prior product/revamp referenced as the drastic-change cautionary tale; identity partially uncertain (see Confidence notes); not a corpus subject.
- **SCPI / scripting control for TekExpress report data** — existing automation surface mentioned; no API documentation in this corpus.
- **CSV export and vendor-neutral report template** — proposed; do not exist in the product.
- **First-run tutorial overlay ("get started guide")** — proposed; does not exist in the product.
- **TekExpress laptop/PC installer** and its post-reboot launch failure — install surface not documented; open defect anecdote.
- **Keysight compliance report format** — correlation target; Keysight compliance software is not a corpus subject.

## Confidence notes

- **Single-microphone recording; all cues attributed to "Kemp, Bryan."** Speaker turns inferred. This segment is the most multi-voiced of the session — at [01:01:28] a facilitator addresses someone as "Steven" (possibly a mis-transcription of another name, possibly a third facilitator); at least three participants are evident. Facilitator quotes are attributed generically.
- **Redactions:** two end-customer company names are redacted as "[customer redacted]" per the sensitive-info rule — one in the Santa Clara/Shenzhen report-format anecdote (Step 12), one in the DisplayPort demo war story (Step 16). The vendor names Keysight and Rohde & Schwarz are competitors, not customers, and are retained.
- Phonetic normalizations: "Keyser" → Keysight; "Rhody" → Rohde & Schwarz; "Shinzen" → Shenzhen; "key sites" → Keysight; "skipping control" → scripting control (inferred alongside "SCPI commands"). "Clarius"/"Claris" is left as transcribed; from context it is a software product the facilitators previously worked on (*"I did [work with it] … I don't think we're working on that anymore"*) whose revamp *"seemed very foreign"* — its exact identity is unresolved and flagged rather than guessed.
- Step 8's tutorial-overlay exchange is heavily interleaved between Travis and facilitators; the composite quote preserves the words but the sentence-by-sentence attribution is uncertain.
- The report review (Step 9–10) happened in the generated report (PDF-style view); mapping to the documented `reports-view-settings` screen is an approximation — the corpus has no "generated report viewer" screen.
- The final minute is photo logistics and recording shutdown; summarized.
