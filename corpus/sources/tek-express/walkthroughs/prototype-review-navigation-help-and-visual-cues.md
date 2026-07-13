---
provenance: observed
class: walkthrough
product: tek-express
flow_id: prototype-review-navigation-help-and-visual-cues
flow_title: "Prototype Review — Navigation, Contextual Help, and Visual Cues"
recorded_by: "Tapo (application engineer / SME; former TekExpress application developer)"
recorded_date: null
duration: null
transcript_source: "uploads/transcripts/tek-express-prototype-sme-review-tapo-2026-07.txt"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: [setup-dut, setup-test-selection, setup-preferences, options-dropdown]
related_apis: []
related_hardware: []
related_modules: [packages-ui]
---

# Prototype Review — Navigation, Contextual Help, and Visual Cues

## Summary

Final segment of the first SME prototype review session. Tapo's direct feedback on the prototype UI itself: contextual help should be on-screen and selection-driven (a "minimalist help view", not 100 question marks — the exact over-tooltipping complaint Clarius received), wizard step checkmarks that mean only "visited" are confusing, step navigation must allow direct non-sequential clicks, cross-panel interdependent-settings changes need a notification cue (a "blue dot"), the white in the dark theme is too bright, icons read as more professional, and the Debug/Preferences links belong in a persistent common area. Also surfaced: whether a test should be runnable without visiting all setup panels (today: yes, defaults suffice — the team commits to revisiting the checkmark semantics), responsive/laptop sizing (container-breakpoints work already underway), and Tapo's closing warning against mistaking users' habituation for satisfaction.

## Goal

Collect the SME's concrete UI reactions to the prototype — what to keep, what to iterate on — and log the patterns that need design-system-level answers rather than per-screen fixes.

## Starting state

Same session, prototype open; conversation shifts from post-run surfaces to the prototype's chrome, wizard navigation, and help affordances.

## Steps

**Step 1 — On-screen contextual help: the pain is PDF round-trips in a specialized domain.**
- *"The help files that we have today. They are all document files… you need to download it… that intuitiveness kind of goes away… all the people say that your software should be intuitive [so] people need not have to go and see documents. But this is a specialized domain… every now and then… you might need to know, okay, what does these settings do exactly?… It's not an instruction manual, it's a reference [guide]."*
- *"Sometimes… the name of certain components that they're using here, they sometimes deviate [from] the industry standard names… at least if they have a question, oh, what does this mean? So they can always go and check."*
- *"The problem with PDF is… I just need this information… in PDF, I just [have] to scroll, scroll, scroll and find out, okay, this panel, this setting, what does it mean?"*

**Step 2 — The shape he wants: click a setting (e.g. "DQS"), get an understandable description in place, with a link deeper into the doc.**
- *"If I just want to know what is this DQS… if there is a question mark here, you just click that question mark and something pops up here… it gives at least an understandable description of that setting… specific to this particular setting."*
- More than a tooltip: *"Not just tool tips, so that thing should point to the document… the help document, maybe a PDF, can always be there. But I need information on screen. So that I do not have to jump back and forth… if you want to go into more details, you can give a link to the help document, which will point to that section."* The benchmark he cites (transcribed "Riddick", probably Radix — see Confidence notes) *"kind of gives a good description of almost about everything… Like a chunk that big, that pops up."*

**Step 3 — But not 100 question marks: the Clarius over-tooltipping lesson.**
- *"If you just start putting question mark and exclamation mark in all these settings, the UI kind of gets very clumsy… I need a minimalist help view somewhere… Maybe… I just click on this one and press F1, or there is a question mark over here, a common question mark. Based on the current selected item, it can just show me [the help]."*
- Bryan: *"That's a global pattern we need to work out for kind of everything. We had that for Clarius… we got that feedback also from Clarius, that there are too many question marks all over the page."* Tapo, asked if help should appear on everything: *"That should come only for those settings which are not very understandable, or which needs explanation… Instead of showing 100 question marks on the same screen."* Counterpoint raised in-session: *"You cannot really tell which can bring up question in which [case] or which customers might"* — so the selection-driven global pattern, not per-control icons, is the direction. Current state for contrast: *"Currently what we do in Tek Express, all the settings are listed and then the [description] in the PDF… there's a big table… every setting… what this setting [does], what the range you can set."*

**Step 4 — Icons: yes.** Asked whether adding icons is just noise:
- *"Adding icons makes it look more professional, for sure… go for it."*

**Step 5 — Color: good; the white is too bright.**
- *"The color looks good. Maybe the white is a little bit [bright]. It kind of [is] hurting my eye right now."* On the blue, Tapo asks *"Does [Radix] support blue?"* — Bryan: *"It is not [Radix] colors. These are some colors which we are going to introduce… this is like just Tek blue."* (A separate not-good-yet light mode was flagged at session start as known-WIP.)

**Step 6 — Wizard navigation must allow direct, non-sequential panel clicks.** Screen analogue: the Setup wizard step rail ([setup-dut](../screens/setup-dut.md) → [setup-preferences](../screens/setup-preferences.md)).
- *"The next and back button is fine, but I should be able to click this [step directly]. Because not always like I go in sequence. [If] I was in [Config] panel and I think like, okay, in that panel, I'll change some setting. So I shouldn't [have to] go back, back, back and go there."*

**Step 7 — Checkmark semantics are confusing: visited ≠ ready ≠ required.**
- Told the checkmark *"doesn't really only say [anything except] that you have visited that,"* Tapo objects: *"It gives me an indication that, okay, I have done everything in test selection… that panel is ready. Because normally, it's not validated[?]. Preference panel, now people do not even visit sometimes… very rarely people visit [preferences] panels. So are you telling that if I do not have that tick marked, I should not be able to start a test? [That's the] confusing part."*
- Interviewer-side echo: *"I was struggling with that because I was like, if [it's] not required, what are these check marks for?… Are you able to go to the next step [without the] check mark?"*
- Resolution in-session: *"Let's definitely [iterate] on that because I think we could just make it more clear [whether they] visited it or not. And so they know where they've been, but not, like, heavy handed."*

**Step 8 — You must be able to run with defaults, without visiting every panel.**
- *"If I have [made test] selection, I have made [DUT] selections… but I'm not going to the last 3 panels of configuration and preference[s]. Will I be able to [run] a test? Yeah, right? Ideally, Tek Express, you should not do anything else. It's just… run. The default setting should [let you run] some test."*
- Bryan: *"We might have to revisit that… I was never comfortable with that."* (The prototype's current gating/checkmark behavior implied otherwise.)

**Step 9 — Interdependent settings across panels need a change-notification cue ("blue dot").**
- *"The interdependent settings… I change something in this panel… and let's say that impacts something over here… users do not know that if I just change this dropdown to a different item here, maybe something has changed [in another panel]… I would like to have… a blue dot kind of thing here, telling that, okay, something got changed here."*
- Explicitly *not* a deviation-from-defaults marker: *"No, no, not [deviating] from [defaults]. It is all about… changing this setting, also, let's say in a [Config] panel, there is another setting [whose] value also changes based on this setting… Just want to tell the user that… because you changed something here, there is something that needs your attention here… you can just go [ahead] and run it, but… at least you will get a [cue]."*
- *"These interdependent settings, they are [spanned across pages] and it is not visible at the same time. Less chances of making mistakes, that's it."* Figma's behavior cited as the analogy in-session ("when you… do something, it's like auto width, change to fixed… you only know that there"). Tapo confirms current TekExpress does not have this: *"I can just think about it, [we] do not have it today."*

**Step 10 — Debug / Preferences links: probably in the wrong place; app/suite identity should be persistent chrome.**
- Asked *"Any reason you have [the Debug and] Preferences links here? It could be just noise"*, Tapo: *"These things should be… common to everything. Like if you're running a test, it should be… persistent across all the panels… maybe there can be one space which is kind of common across all the panels that we can keep there."*
- In current TekExpress *"there is a label… that tells you which application it is or which [suite] and other things is selected"* — but placement differs from the prototype's ("it does not come here. It comes here"), i.e. some elements are *"in wrong spots"*.

**Step 11 — Responsive / laptop sizing question.**
- Tapo: *"Will this be, like, if I want to maximize it [on] a laptop…?"* Bryan: *"We're working on like responsive bits… there will be different [breakpoints] where the UI might change above or below that… the components will just adjust themselves."*

**Step 12 — Future sessions: sessions, export, and deeper flows deferred.**
- *"Some use case would come when you go into those session [dialogs], session [saving], export, and other things. I do not have things in my mind right now to give you inputs on that, but I think this will be [an iterative] process."* (The rerun-and-merge report use case raised here is captured in [prototype-review-logs-results-and-reporting](./prototype-review-logs-results-and-reporting.md) Step 10.)

**Step 13 — Closing: don't mistake habituation for satisfaction.**
- Tapo: *"Maybe people got used to it or they do not complain about that much, but actually, if you see the Keysight software… they are really doing that."* Interviewer-side agreement: *"That's where we need help identifying… you can get used to using a dish rag for a drain, but… just 'cause [you don't complain], it doesn't mean you don't like [a better tool]."* Session ends: *"I think that's all for today. I run out of thoughts."*

## Friction notes

- **Help requires leaving the app.** All help is downloadable documents (PDF/CHM); finding one setting's meaning means scroll-hunting a reference PDF. Domain terms sometimes deviate from industry-standard names, making in-context definitions more necessary, not less.
- **Checkmark ambiguity.** Visited-only checkmarks read as "panel complete/validated/required," and raise the false question of whether an unchecked panel blocks the run. Both the SME and the interviewers tripped on it. Committed in-session to iterate.
- **Sequential-only navigation.** Next/Back without direct step clicks forces multi-click backtracking for cross-panel edits.
- **Invisible cross-panel side effects.** Changing a setting can silently change dependent values on other panels; no cue exists today (verbatim ask: *"a blue dot kind of thing"*).
- **White too bright in the current theme** — immediate physical complaint ("hurting my eye right now").
- **Debug/Preferences placement reads as noise** — belongs in persistent common chrome alongside application/suite identity, which current TekExpress positions differently.
- **Habituation masks problems.** Lack of complaints about legacy placements is not evidence they're right; Keysight comparison is the suggested corrective.

## Annotations

- **The contextual-help ask is a design-system-level global pattern, not a TekExpress feature.** Bryan explicitly frames it as *"a global pattern we need to work out for kind of everything… something that we'll just always use [in] all the software that we're doing."* Constraints gathered: selection-driven (click/F1/single global "?" affordance), rich description chunk (not a tooltip), deep-links into the reference doc section, and *sparse* per-control icons only where genuinely non-obvious. The Clarius "too many question marks all over the page" feedback is the documented anti-pattern.
- **The blue-dot cross-panel notification is likewise a candidate DS pattern** — an attention indicator meaning "a dependent value changed here since you last looked," distinct from unsaved-state and from non-default-value markers. No component in `packages/ui` covers this today.
- **Run-with-defaults is a workflow invariant.** Tapo's *"Ideally, Tek Express… it's just run"* restates the guided-simplicity differentiator from [compliance-test-workflow-anatomy](./compliance-test-workflow-anatomy.md) as an acceptance criterion: DUT + test selection filled in, everything else defaulted, Start must work.
- **Container-breakpoint responsiveness** (Bryan's answer to the laptop question) is the same committed DS feature first recorded 2026-04-23 ([ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md), 51:56).
- **Tek blue is new, deliberately not a stock palette** — Bryan on the record that the prototype colors are Tek-introduced, not Radix's.

## Cross-references

- Legacy wizard/step-indicator and side-nav anatomy: [navigation-components](../docs/ui-audit/navigation-components.md).
- The Debug + Preferences pills Tapo questions are documented as the app's only two outlined non-teal pills: [outlined-pill-buttons](../docs/ui-audit/outlined-pill-buttons.md).
- Persistent chrome (application/suite label, title bar) in the legacy app: `index.md` § Persistent chrome, and [options-dropdown](../screens/options-dropdown.md).
- Rarely-visited Preferences panel: [setup-preferences](../screens/setup-preferences.md).
- Clarius cautionary tale (workflow intuitiveness): [personas-and-jobs-to-be-done](./personas-and-jobs-to-be-done.md) and [compliance-test-workflow-anatomy](./compliance-test-workflow-anatomy.md) Step 2 — this chunk adds the *help-affordance* Clarius lesson (over-tooltipping) to the same file of precedents.
- Container breakpoints: [ux-feedback-and-open-questions](./ux-feedback-and-open-questions.md).

## Pending references

- **Global contextual-help pattern** — committed to explore; no DS component, token, or spec exists yet.
- **Cross-panel change-indicator ("blue dot") pattern** — committed to think through; no DS primitive exists.
- **Checkmark-semantics iteration on the Setup wizard rail** — committed in-session.
- **Run-gating decision** — whether the prototype should gate Start on anything beyond defaults; Bryan flagged discomfort with current prototype behavior.
- **Light mode** — acknowledged not-good-yet at session start; fix planned.
- **Session save/load, export, and related dialogs** — deferred to a future SME session with Tapo walking through those flows.

## Confidence notes

- Same source caveats as the sibling chunks: no timestamps, no speaker labels, single ASR stream. Interviewer-side lines (Bryan vs. the third UX participant) are not reliably distinguishable; attributions above say "interviewer-side" where uncertain.
- **"Riddick" / "Reddick" / "redic" is interpreted as Radix** (the UI library — its docs give per-setting descriptions and it ships a named color system, matching both of Tapo's uses: the help-description benchmark and the "does it support blue" question). This is a probable-but-unverified reading; if Tapo meant a different product, the help-pattern observation stands unchanged.
- "Claudius" appears once for Clarius; treated as the same product.
- "Sigma does real fast" is read as a reference to **Figma**, supported by the immediately following auto-width/fixed-width example. Moderate confidence.
- One item was lost to transcription: Tapo mentions having previously given feedback about "this next [something]" (transcribed "TikTok about this next unbag") but says he forgot it. Unrecoverable.
- The dish-rag closing quote is garbled ("throw a normal stubber"); the sense — habituation ≠ satisfaction — is clear from both speakers' surrounding turns.
