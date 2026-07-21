---
provenance: observed
class: walkthrough
product: tek-express
flow_id: competitive-deployment-licensing-and-status-value
flow_title: Keysight-vs-TekExpress deployment model, licensing, and the status-visibility value principle
recorded_by: [Bera, Subhasis (Principal Product Manager, Solutions Platform and Decoders)]
participants: [Kemp, Bryan; Bera, Subhasis; Jogdand, Arpita]
recorded_date: 2026-06-23
duration: ~7 min (segment ~28:00 – ~35:12 of a 1h 1m meeting)
transcript_source: "uploads/transcripts/AU VoC Sync up.docx"
screens_visited: []
applies_to: [tek-express, keysight-d9040]
related_screens: [status-test-status, status-log-view, results, reports-configuration]
related_apis: []
related_hardware: []
---

# Keysight-vs-TekExpress deployment model, licensing, and the status-visibility value principle

## Summary

Subhasis walks Bryan and Arpita through Farzana's competitive-analysis Word doc dimension by dimension: **software installation / deployment model**, **licensing**, **post-install steps**, **reporting**, and **information architecture**. The headline findings: Keysight's dual-install master/slave deployment is **simpler than Tek's service-based deployment** ("the beauty in their simplicity, although it is very traditional"); TekExpress has a legacy **virtual-drive post-install step** nobody can explain; Subhasis has **doubts about TekExpress reporting completeness**; and per the analysis **Keysight leads on information architecture**. Along the way he states the core instrumentation-software value principle: *the biggest value is letting the user know the status of the system at any given point in time* — which is why TekExpress's logs and status surfaces matter so much for 8-hour DisplayPort runs.

## Goal

Transfer the competitive-comparison findings (Keysight D9040DPPC vs TekExpress) to the AU UX team dimension by dimension, so the redesign knows where Tek is behind, at parity, and structurally constrained.

## Starting state

Immediately follows the Farzana / Asus-HQ competitive-prep discussion (see [persona-evolution-physical-ai-and-voc-methodology.md](./persona-evolution-physical-ai-and-voc-methodology.md), which ends as Subhasis opens the competitive doc at "So software installation…"). Subhasis is screen-sharing Farzana's competitive analysis Word doc.

## Steps

### 1. Deployment model — the box-to-PC complexity (~28:00 – 28:40)

> *"So software installation. is again in usability, but I would keep it for later. It becomes a little complicated when we try to move. The job to be done from inside a box to a PC. So the complexity increases when you take it away. Like in an analogy, if I want to park the car using the app on my phone, which is there in the new cars, you need some practice. You need to know how to use it."* — Bera

Deployment model is classified as a usability dimension. Moving the job-to-be-done off the instrument ("inside a box") onto a PC inherently raises complexity.

### 2. Licensing and the virtual-drive post-install step (~28:40 – 29:10)

> *"Licensing, we can't do much about it. It's a standard legal procedure we have. And post-install step is 1 problem we have is we have to create a drive. It's called a virtual drive. For some reason, it is existing from day one, and I don't know if we could remove that, but that's not a major hurdle right now."* — Bera

- **Licensing**: treated as a fixed legal constraint, not a redesign lever.
- **Virtual drive**: a TekExpress post-install requirement that has existed "from day one" with no known rationale. Subhasis flags it as removable-in-principle but deprioritized.

### 3. Keysight's deployment options and per-PC worker licensing (~29:10 – 29:50)

> *"these are the different options, Brian and Arpita, which you will see standalone PC, offline, distributed measurement server. So I'll walk you guys sometime next week on how does Keyser give their value proposition and how they sell. What are the different layers of their selling their value depending on the customer need? … For every PC, you have to pay for a license. It's like a worker license. You have to pay 1500 bucks for each laptop to get activated. You can then add four laptops and wait for four licenses, and it's a little complicated. So. But it works."* — Bera

Keysight deployment tiers named: **standalone PC**, **offline**, **distributed measurement server**. Per-laptop "worker" licenses at **~$1,500 each**. Subhasis commits to a follow-up session ("sometime next week") on Keysight's value-proposition layering.

### 4. The master/slave dual-install simplicity vs Tek's service deployment (~29:50 – 31:49)

> *"The beauty in their simplicity, although it is very traditional. They very simply installed the software in the laptop as well as the scope for the extension. And they one, they go and configure. So Brian, you are telling the tabs, right? They go to one setup tab and they say, configure this machine as master. So it configures wherever I say as a master and the other one you go configure as a slave and you give IP address and you say the master is going to run the show. And it's like a client-server network, not so complicated, just a talker listener. So one talks, the other listens."* — Bera

> *"And the simplicity here is tomorrow if I want to move away from the scope and just run it on the PC and do everything and make that as a master, my deployment is already there. In our case, we try to deploy a service, then if customer decides to move away from the instrument to the PC, the usability becomes challenging in my view. It's a personal view, because I have to remember that I have to go download a software from the web and upgrade. Now, if I upgrade after one year, the version might have changed, MATLAB version would have screwed up, and multiple things might come into picture, so Keyser has made it very simple. They deployed in both the places, the whole thing. I just decide how I want to use it. So I was pushing engineering to actually do that rather than, you know, services installation makes it."* — Bera

**The Keysight pattern**: install the full software on *both* scope and PC up front; a setup tab designates master vs slave by IP; role reassignment later requires **no new deployment**. **The Tek pattern**: deploy a service; migrating from instrument to PC later means finding the installer on the web, upgrading, and risking version drift (the MATLAB-version example). Subhasis has been "pushing engineering" toward the Keysight-style dual-install.

### 5. Reporting doubts (~31:49 – 32:10)

> *"So reporting, I have my doubts. I don't think we do have everything that is needed here. But every part of the product portfolio is actually evaluated to a certain extent."* — Bera

Reporting is flagged as a suspected gap — no specifics given in this segment.

### 6. The status-visibility value principle (~32:10 – 33:50)

> *"One thing which I have seen, Brian, if I saw the screens which you guys have made, actually they are having those log files and status that come which are pretty important for a user, right? Because when I run a test and I pay 30,000 bucks. There is 1 principle that I learn in my engineering is that in the instrumentation world. The biggest value that an instrumentation software or a hardware can create is to letting know the user the status of the system at any given point in time."* — Bera

> *"In display port, if you want to test the port. One port runs for 8 hours. You hit run, you have to ensure that it runs and those status and logs actually help. In some cases when you do USB, the tests do run for 45 minutes. But if you take a company like Bill Kit, imagine how many types of USB devices they might be making. So the volumes are high, the test times are less, but at net net at the end of the day, the job to be done is on the higher side. So efficiency and knowing what's happening, did I do something that my test might fail after three hours? I need to know that now. And typically the software tells that you're not able to acquire, not happening, not happening, retry, retry, and all those things. So, decent enough on Tek Express."* — Bera

Two run-length regimes anchor the principle:
- **DisplayPort**: one port runs **~8 hours** — early failure detection is worth hours.
- **USB**: **~45-minute** runs but at high device volume — aggregate job-to-be-done still large.

TekExpress's current status/log behavior is rated *"decent enough"* — and Subhasis explicitly endorses the log/status surfaces in Bryan's prototype screens.

### 7. Information architecture verdict + the app of interest (~33:50 – 35:12)

> *"So, information architecture as per the analysis, Keyser leads. Like analysis money is better something for you guys to go check."* — Bera

> *"The analyze menu of a scope is what she's talking about. OK. So this was the, this is the app of interest. D90DPPC is actually the Tek Express equivalent of T side."* — Bera (~34:29)

> *"So these are different information architectures which is bought up which you might be interested like resize of the screen. I think we cannot resize like Express."* — Bera (~34:54)
>
> *"We want to."* — Kemp (35:12)

- Per Farzana's analysis, **Keysight leads on information architecture**; Subhasis defers the detail to the doc ("something for you guys to go check").
- **D9040DPPC** ("D90DPPC" as spoken) is identified as the direct Keysight equivalent of TekExpress's Tx-side DisplayPort app.
- **Window resizability** is raised as an information-architecture difference; Bryan's *"We want to"* registers resizability as a redesign requirement.

## Friction notes

- **Virtual-drive post-install step** — legacy requirement "existing from day one" with unknown rationale. Candidate for elimination in any re-deployment work.
- **Service-based deployment blocks instrument→PC migration.** Customer must locate the web installer and upgrade; a year of version drift (app version, MATLAB runtime) can break the migration. This is the concrete mechanism behind the deployment-manual friction named in the closing mantras ([ui-redesign-mantras-and-transition-strategy.md](./ui-redesign-mantras-and-transition-strategy.md)).
- **Reporting completeness** — *"I have my doubts. I don't think we do have everything that is needed here."* Unspecified gap; needs follow-up against [reports-configuration.md](../screens/reports-configuration.md) / [reports-view-settings.md](../screens/reports-view-settings.md).
- **Screen resize** — TekExpress apparently cannot be freely resized; flagged as an information-architecture deficiency vs Keysight, and Bryan confirms resizability is wanted.
- **Information architecture overall** — Keysight leads per the competitive analysis. The redesign inherits this as the primary catch-up dimension.

## Annotations

> *"The biggest value that an instrumentation software or a hardware can create is to letting know the user the status of the system at any given point in time."* — Bera

**The single clearest design principle in the whole meeting.** For a $30K compliance product running multi-hour tests, status/log visibility is the value, not a chrome detail. It directly elevates [status-test-status.md](../screens/status-test-status.md) and [status-log-view.md](../screens/status-log-view.md) to first-class surfaces in the redesign.

> *"did I do something that my test might fail after three hours? I need to know that now."* — Bera

**Early-failure detection** is the specific job the status surface must do — not just progress display, but *predictive/diagnostic* signal that a run is doomed before hours are wasted.

> *"So I was pushing engineering to actually do that rather than, you know, services installation."* — Bera

The dual-install master/slave model is an **active product-management push**, not idle admiration. If engineering adopts it, the launcher / deployment UX surface changes substantially.

## Cross-references

- **Immediately upstream**: [persona-evolution-physical-ai-and-voc-methodology.md](./persona-evolution-physical-ai-and-voc-methodology.md) — the Farzana / Asus-HQ competitive-prep context and the D9-codes-vs-Tek-names naming asymmetry.
- **Continues into**: [configuration-user-traps-and-cockpit-view.md](./configuration-user-traps-and-cockpit-view.md) — the setup-workflow / configuration deep-dive that follows at ~35:15.
- **Status/log surfaces endorsed**: [status-test-status.md](../screens/status-test-status.md), [status-log-view.md](../screens/status-log-view.md), [running-test.md](../screens/running-test.md).
- **Reporting surfaces under doubt**: [reports-configuration.md](../screens/reports-configuration.md), [reports-view-settings.md](../screens/reports-view-settings.md), [results.md](../screens/results.md).
- **The Keysight comparator corpus**: [`corpus/sources/keysight-d9040/index.md`](../../keysight-d9040/index.md) — the D9040DPPC screens photographed at Asus HQ.
- **The competitive audit built from the same material**: [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/).

## Pending references

- **Farzana's competitive-analysis Word doc** — the artifact being screen-shared. The derived PDF exists in the competitive audit assets; the Word original is not in the corpus.
- **The promised follow-up session** on Keysight's value-proposition layering ("I'll walk you guys sometime next week") — capture as its own walkthrough when it happens.
- **TekExpress reporting-gap specifics** — Subhasis's doubt is recorded but unenumerated; needs a follow-up VOC or SME session to pin the missing report features.
- **The virtual-drive rationale** — no one on the call knows why it exists; an engineering SME could close this.

## Confidence notes

- **"Bill Kit"** (~33:10) is preserved as transcribed; almost certainly a mis-transcription of a high-volume USB device maker (possibly "Belkin"). Not verified.
- **"D90DPPC"** as spoken is taken to mean the Keysight **D9040DPPC** based on the surrounding "app of interest" context and the documented `keysight-d9040` corpus; "the Tek Express equivalent of T side" is read as "Tx side" (transmitter). Both are interpretive normalizations of unclear speech.
- **"$1,500 per laptop worker license"** is Subhasis's spoken figure for Keysight licensing; not verified against a Keysight price list.
- **"analysis money is better something for you guys to go check"** (~34:01) — garbled transcription; the surrounding meaning (the analysis doc has more detail worth checking) is inferred. Flagged for verification against the recording.
- **"I think we cannot resize like Express"** (~34:54) — ambiguous phrasing; read in context as "TekExpress cannot resize [its window] the way [the comparison shows]". The direction of the deficiency (Tek can't resize) is consistent with Bryan's "We want to" response, but the sentence itself is unclear.
- Segment boundaries (~28:00 start, ~35:12 end) are estimated; the source transcript timestamps the start of long speaker turns, not sentence-level positions.
