---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ae-will-teverovsky-dut-panel-and-data-rates
flow_title: "AE Interview — Will Teverovsky: DUT Panel, Suite/Device Nomenclature, and Data-Rate Selection"
recorded_by: "Will Teverovsky (AE); Bryan Kemp (facilitator)"
recorded_date: 2026-07-13
duration: "1:38:12 (session total; this chunk covers the opening DUT-panel segment, roughly the first quarter)"
transcript_source: "uploads/transcripts/WillTeverovsky.docx"
screens_visited: [setup-dut]
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, results]
related_apis: []
related_hardware: []
related_modules: []
---

# AE Interview — Will Teverovsky: DUT Panel, Suite/Device Nomenclature, and Data-Rate Selection

## Summary

Opening segment of the longest AE feedback session (2026-07-13, 1h 38m). Will Teverovsky, an AE with deep PCI Express compliance experience, drives the new TekExpress UI prototype (PCI Express variant) live for the first time while thinking out loud. Bryan Kemp facilitates; at least one other design-team member and a Tek Express product/program leader are in the room (single-microphone recording — see Confidence notes). Will orients quickly ("feels relatively familiar"), then works through the Setup › DUT panel: tab iconography confusion, "Suite" nomenclature not matching how AEs and customers think about PCIe generations vs. device types, lane selection being a DUT characteristic rather than a test choice, and — the core finding of the segment — data-rate selection needing to be a multi-select test decision rather than a device-centric dropdown. The product leader closes the segment with the compliance-vs-conformance split across the TekExpress portfolio.

## Goal

Capture an expert AE's first-contact reaction to the prototype's DUT panel and surface how the DUT-configuration mental model (device profile vs. what-am-I-testing) differs from the current UI structure.

## Steps

**Step 1 — Session framing.** Bryan and a colleague set context: phase one is a refactor/lift-and-shift into the design system; they want gut reactions plus recurring customer feedback. The prototype's "Tweaks" panel is explained as prototype-only scaffolding.

- Facilitator: *"Tek Express has been needing a facelift for a while. So, what we're doing is first phase is they're going to be kind of refactoring it, updating the architecture, but doing a kind of like a lift and shift with the UI, incorporating it mainly into our design system."*
- Facilitator: *"We're not changing main workflows, but the idea behind this is A, getting your thoughts and opinions on how it's looking and feeling."*

**Step 2 — First impression: familiar, and the canonical workflow is left-right, top-to-bottom.** Screen: [`setup-dut`](../screens/setup-dut.md) (as mirrored in the prototype).

- Will: *"So far, it feels relatively familiar. Usually the workflow that I tell customers to go through is kind of like a little bit of a left, right, top to bottom, right? So set up into DUT, start with the first one and keep your way down."*
- Will, confirming the flow is what a returning user expects: *"If I'm a Tek Express user walking into this application, this is the workflow that I would expect to be doing."*

**Step 3 — Tab iconography confusion.**

- Will: *"On first glance, I'm a little bit confused about like what these, what the iconography means here… I'm clearly on the [DUT] page, right? I don't know what like the check mark is really referring to. So that's a little bit of confusion here."*

**Step 4 — "Suite" nomenclature and the Gen-vs-spec hierarchy.** Will flags that "Suite" is unfamiliar and that the prototype's dropdown values conflate PCIe generation with spec type.

- Will: *"Suite versus device. The suite nomenclature is a little bit different than I'm used to, I suppose."*
- Will: *"What do you mean by Gen. 5 versus [CEM] 5.0 versus whatever, right? Like those are kind of the same thing. Really what I would expect to see is that there is like Gen. 5 … Add-in card versus [CEM] slot, but you know, [CEM] is [CEM], right? … Gen. 5 might refer to a base spec or a [CEM] spec, and that should be a different level than this."* (Transcript renders "CEM" as "Kemp" — see Confidence notes.)
- Will: *"There's some — the things in these dropdowns don't really fully work in the context of the technology, I guess is what I'm saying."*

**Step 5 — Today, each technology is a separate application; integration is welcomed.**

- Will: *"Oftentimes I would actually open the technology from like the in-scope menu. I would choose, like, I'm opening up the Gen. 5 Tek Express app or the Ethernet Tek Express app. Those are separate applications, kind of. So I like that they're kind of potentially integrated into this."*

**Step 6 — Data-rate expectations: cascade from suite, default to highest.**

- Will: *"I would kind of expect that maybe it does it based off of which suite I select. So if it's Gen. 3 or Gen. 5, that kind of necessitates what data rates are available and I kind of expect it to select the highest one available."*

**Step 7 — Lane selection is a DUT characteristic, not a test plan.**

- Will: *"Testing multiple lanes is an interesting workflow because there's different ways that people do it, there's different ways that people could do it, and a lot of people who don't do it… The by 16, by 4, by 8, by 1, whatever it is, is more of a [DUT] characteristic. So it kind of makes sense. Maybe that's a device profile."*
- Will: *"But it doesn't necessarily reflect how I'm going to test it, right? Just because I have a by-16 [DUT] doesn't mean I'm going to test all 16 lanes. That might be very difficult to do. Oftentimes people might pick like, I don't know, one to three lanes on a multi-lane device to test."*

**Step 8 — The segment's core finding: data rates are a multi-select test decision, not a device dropdown.**

- Will: *"One, this data-rate selection, while important, isn't necessarily device-centric, and two, the data rates I'm about to test is more of like a multi-select rather than a drop-down."*
- Will, on real usage: *"In most cases, people would just test the highest data rate available for that DUT… For PCI Express and most many of these technologies, they are somewhat backwards compatible… If you are running a thorough test, however, you may select, I need to test all data rates that this type of device is capable of… But most people probably pick a subset of that to test."*
- Will: *"You'll get a mixture of people who just test that highest, just need to test like the highest three… You need to test all of them, and those are all very common compliance test use cases."*

**Step 9 — Compliance view vs. what users actually run.**

- Will: *"Compliance view, technically I need to test everything that it's capable of, including all backwards compatibilities… But still, most people even doing full compliance will say, just test the highest Gen. 5 data rate, or just test the highest Gen. 6 data rate."*
- Will: *"I would say, though, again, most users, at least in my experience, still only test the highest data rate because they're confident that it would pass those lower data rates."*
- Another participant, on customer reality: *"Even the guy working on [Gen] six doesn't want to run 5, 4, and 3 most of the time because there is an assumption that they'll probably pass it."* And on PVT re-testing: *"When they deliver to their ecosystem, they have to again do that PVT test again and again at different pressure, voltage, and temperature depending on the application."*

**Step 10 — The report is the deliverable.**

- Will: *"What most people want out of this is a report at the end that is their deliverable of we pass every test, we see it all, they've got green check boxes, etc."*
- Will, sketching the interaction he'd expect: *"Maybe I open this down and instead of just hitting one, it's kind of like a multi-select where I'm hitting like, you know, check, check, check, check, apply… then the final report would include all that."*

**Step 11 — Background: how DUT toggling steps through data rates and presets.** Will explains the under-the-hood automation that makes multi-rate runs possible.

- Will: *"What's happening kind of under the hood as the device is going through its different test modes… It starts at the lowest data rate… It would go from 2 1/2 gig to 5 gig to 8 gig to 16 gig, preset 0, preset 1, preset whatever… And then we'd finally be where we need to be."*
- Will, on toggle hardware: *"You would have to do AFG toggling or there's like an [Anritsu]… little… actually is it [Anritsu]? Well, it's what [Anritsu] recommends, but I think there's like some like smaller toggle boxes… that's much cheaper than an AFG, but we don't sell it. So, but there are hooks, I think, in existing Tek Express to use it as an option."*

**Step 12 — Product leader: the golden-reference workflow standard.**

- Product leader: *"If you say what is the golden reference of workflow, we should always think the customer is gonna run every data rate at every speed… we should enable them."* Will's caveat: *"That's like the gold standard, what people need to be enabled to do; that is not the bulk of the use cases."*

**Step 13 — Compliance vs. conformance products; per-technology workflow variation.**

- Product leader: *"There are set of products which are conformance, which is not compliance… You guys cannot design a unified workflow for both. Because [MIPI] and all are standards which are conformance."*
- Product leader: *"So if you go to different products, you will see slightly different workflows here… If you go to [MIPI], it will be slightly different. It completely depends on the application. If you go to DisplayPort, you will have preset tests. I think PCI also has preset tests."*

## Annotations

- **The two-level device model.** Will's mental model separates a *device profile* (lane width ×16/×8/×4/×1, generation capability — facts about the DUT) from the *test plan* (which lanes and which data rates to actually run — choices per session). The current DUT panel mixes both into one column of dropdowns. This is observed AE framing, not a redesign proposal.
- **Backwards-compatibility drives the data-rate set.** A Gen-5 DUT is capable of every lower rate; full compliance technically requires all of them; almost nobody runs all of them routinely. Three common patterns Will names: highest only, highest three, all.
- **Separate per-technology apps today.** Each technology (Gen 5, Ethernet, …) opens as its own TekExpress application from the scope menu; Will reacts positively to them being "potentially integrated" in the prototype.
- **DUT toggling is automated but hardware-dependent.** Stepping the DUT through rates/presets takes seconds and uses AFG toggling or a cheaper third-party toggle box ("what [Anritsu] recommends… we don't sell it") — existing TekExpress has hooks for it as an option.
- **Compliance vs. conformance is a portfolio-level split.** Per the product leader, conformance products (e.g. MIPI) cannot share one unified workflow with compliance products; existing TekExpress keeps panels "under a guideline frame" so application teams can vary the workflow "within a certain guard rail."
- **Full compliance run duration** for the discussed scenario is on the order of an hour ("Take an hour… for the full test across all suites"), while DUT state toggling is "a few seconds."

## Friction notes

- **Tab iconography is unclear.** *"I'm a little bit confused about like what these, what the iconography means here… I don't know what like the check mark is really referring to."*
- **"Suite" nomenclature doesn't match AE vocabulary.** *"The suite nomenclature is a little bit different than I'm used to."*
- **Dropdown contents conflate spec levels.** *"Gen. 5 versus [CEM] 5.0 … those are kind of the same thing… that should be a different level than this."* / *"The things in these dropdowns don't really fully work in the context of the technology."*
- **Data-rate selection modeled wrong.** *"The data rates I'm about to test is more of like a multi-select rather than a drop-down."*
- **Lane selection implies a test plan it shouldn't.** *"Just because I have a by-16 [DUT] doesn't mean I'm going to test all 16 lanes."*

## Cross-references

- The DUT panel under discussion (existing app): [`setup-dut`](../screens/setup-dut.md).
- Data-rate / multi-select consequences carry into test selection: [`setup-test-selection`](../screens/setup-test-selection.md) and the next chunk, [`ae-will-teverovsky-test-selection-and-contextual-help`](./ae-will-teverovsky-test-selection-and-contextual-help.md).
- The "report as deliverable" theme recurs in [`ae-chrisb-reports-and-rerun-workflow`](./ae-chrisb-reports-and-rerun-workflow.md) (SIG submissions, pass-only reports).
- Selection cascading across screens was independently raised by Srevats in [`tek-products-walkthrough`](./tek-products-walkthrough.md).

## Pending references

- **Prototype DUT screen** — the prototype's PCI Express DUT panel (with Tweaks section) is not itself a documented corpus screen; quotes are mapped to the existing-app screen it mirrors.
- **Third-party DUT toggle box** — the cheaper non-Tek toggle device Will mentions (recommended by [Anritsu]) is not documented; existing TekExpress reportedly has option hooks for it.
- **Compliance vs. conformance product matrix** — which TekExpress technologies are compliance vs. conformance is not documented anywhere in this corpus.

## Confidence notes

- **Single-microphone recording; every transcript line is attributed to "Kemp, Bryan."** Speaker turns are inferred from context. Will's turns are confident where first-person AE experience is described (customer coaching, PCIe domain depth). Besides Bryan, at least one other design-team facilitator asks questions (e.g. *"what kind of customer feedback you get repeatedly"*), and a Tek Express product/program leader is present (roadmap, portfolio, and Bangalore-engineering references); the leader's name is never captured in the transcript. Attributions marked "Product leader" and "Another participant" are inferred and could be misassigned.
- **The Teams export collapsed the entire session into one block with a single timestamp (1:03).** No per-step timestamps exist; step boundaries are editorial.
- **"Kemp 5.0" / "Kemp slot" / "Kemp is Kemp" in the transcript are almost certainly mis-transcriptions of "CEM"** (PCIe Card Electromechanical spec) — rendered as [CEM] above. Similarly "duck"/"dot" → [DUT], "Enritsu" → [Anritsu], "NIPI"/"MIP" → [MIPI].
- Opening ~2 minutes are logistics (screen recording setup, camera off) — summarized, not step-documented.
- No credentials appeared in this segment; customer names appear in later segments and are redacted there.
