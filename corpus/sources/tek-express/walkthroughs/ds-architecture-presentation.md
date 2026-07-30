---
provenance: observed
class: walkthrough
product: tek-express
flow_id: ds-architecture-presentation
flow_title: "Tek Design System v2 — Architecture Presentation"
recorded_by: Bryan Kemp
recorded_date: 2026-04-23
duration: "~9 min (0:18 to 9:00)"
transcript_source: "uploads/transcripts/TekExpress & TekRx Overview Transcript(By Pranavi).docx"
screens_visited: []
applies_to: [tek-express, tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-tokens, packages-ui, packages-ui-button, figma-token-push, qt]
---

# Tek Design System v2 — Architecture Presentation

## Summary

Opening segment of the meeting. Bryan walks the team through the structure of the design system: how token primitives feed semantic tokens, how Figma Variables export to CSS via the Token Push plugin, and how components are previewable in Dev Mode with token-driven QA. Mahesha asks about control *behaviour* (interaction states) and Bryan / Bill answer that behaviour will live in Figma component libraries built on top of the token primitives, with state-transition previews available via Figma or rendered HTML.

## Goal

Establish a shared understanding of the design system's foundation layer so the TekExpress / TekRx team can reason about how downstream tokens and components will land in their products.

## Starting state

Bryan is screen-sharing a Figma file with the design system components. Dev Mode inspector visible on individual components.

## Steps

**0:18 — Bryan introduces the token-driven approach.** *"If you look at, for example, you look at this button here, this button has applied to it a background token, so default hovering inactive values for light and dark modes. That way we can have full control over what colors are what in the in either mode, as well as extracting it from linking everything directly to the primitives."*

**~1:30 — Bryan demonstrates Dev Mode inspection.** *"All these components, if you look in… Dev mode, and you inspect one of these, you can see every… all the spacing has these tokens applied to it. These values, you can inspect and see that what the what that translation is."*

**~2:00 — Bryan shows the Token Push plugin → CSS export.** *"We export, we build a plugin that exports all the plugins in all the variables into CSS design tokens. So whenever we update tokens from Figma and publish it, it will create these JSON files that has all of the tokens and token values. This is what the front end team is using to build out the designs."*

**~3:30 — Bryan demonstrates the resulting HTML output.** *"Using all those values, we're able to … export those design files into rendered HTML, because each piece of the of these UI elements have that one-to-one Figma variable to CSS translation, so this is what the output was, and it built this page, and you need dark and light mode. I mean, light mode needs work, but for the POC, this is kind of how it rendered."*

**4:51 — Mahesha asks about control behaviour, not just visuals.** *"So my question is, like we talked about the control layout and then the designing part. How about the behavior of the controls? For example, if I have a drop-down box, if I click on that, so how will the expanded drop-down look like and what should happen? … So how can we get the information about that during implementation?"*

**5:21 — Bill answers — tokens are the foundation, component states layer on top.** *"The short answer is the design tokens here are useful as sort of a foundation that we will build on top of. So for something like an expanded dropdown list or something like that, you will continue to use these where we can. But this is going to be used in conjunction with a more standard, you know, Figma template for component libraries, things like that, which will have those kinds of states. And because of the way it's going to be built in Figma, it will be built on top of all of these primitives and semantic layer values."*

**6:09 — Bill on token-driven re-skinning.** *"When you're implementing them on the front end, you can use the exact same variables on your side or same design tokens on your side so that when we make changes, you know, further down the line, if we decide our brand colors are no longer tech blue, turns out it's going to be a tech green or a tech red, then we go change those design tokens. We will do a release of the design system, new tokens, everything. You guys pull those tokens in. The app should just automatically pull in and run a build and should automatically get those new colors, new spacing, things like that as we make smaller tweaks."*

**7:15 — Bryan on state-transition previews.** *"When you're talking about an interactive element that you want to see, like the transition from one state to another, those Figma components will have a preview. So you'll be able to see what that, like we designed that with the component. So you'll be able to preview that either in Figma or HTML, depending on what it is."*

**7:34 — Bryan flags motion / animation tokens as planned, not built.** *"As we get a little further along with it, we'll have some, probably some standard motion libraries with some like… kind of basic tokens around like easing and things like that, like duration and easing tokens to help define some transitions. We haven't gotten that far yet, but that's the plan."*

**7:56 — Bill commits to a versioned release process.** *"We are still kind of early with some of this and figuring out what tokens are we missing, things like that. So we will be doing, we're also kind of defining a release process for this more modern, you know, increased usage of Figma features version of the design system so that we're going to do proper releases with release notes, making it clear what we're using."*

**8:34 — Bill mentions Claude Design as the interaction-prototyping accelerator.** *"Some interactions are going to be harder to define via tokens or via Figma. So we're currently, spoilers, we're currently looking at like Claude design for kind of help, kind of helping us do some more interactive prototyping so we can kind of get a feel for what looks and feels right and maybe do some faster iterations of those things."*

## Annotations

- **Token-first architecture is non-negotiable.** Bryan returns to "all the spacing has these tokens applied to it" and "every value is a token" repeatedly. No hardcoded values in the redesign.
- **Figma component libraries are the bridge between tokens and behaviour.** Bill's framing: tokens = primitives + semantic; component libraries (built in Figma, exported) = behaviour + state.
- **Motion is on the roadmap but not delivered.** "We haven't gotten that far yet, but that's the plan." Mark as open for the redesign.
- **Releases are a feature, not a process.** Bill explicitly says "release notes, making it clear what we're using" — the DS is moving from continuous-update to versioned.
- **Claude Design is acknowledged as the prototyping accelerator.** External signal for the cd→cc handoff pattern this corpus exists to enable.

## Friction notes

- **Mahesha's question is unresolved at this point of the meeting.** *"How will the expanded drop-down look like and what should happen?"* — Bill answers with "Figma component libraries will cover this" but the libraries themselves aren't shown. The state-transition preview is mentioned but not demonstrated. This is a real gap the redesign needs to close before TekExpress engineers can implement against the DS.

## Cross-references

- DS architecture: [`corpus/sources/tek-design-system/index.md`](../../tek-design-system/index.md).
- Token package: [`corpus/sources/tek-design-system/code/<latest>/packages-tokens.md`](../../tek-design-system/index.md).
- UI components: [`corpus/sources/tek-design-system/code/<latest>/packages-ui.md`](../../tek-design-system/index.md) and per-component chunks.
- Figma Token Push plugin: [`corpus/sources/tek-design-system/code/<latest>/figma-token-push.md`](../../tek-design-system/index.md).
- The C# / WPF integration question Mahesha raises here is followed up in the next chunk: [`desktop-integration-strategy`](./desktop-integration-strategy.md).

## Pending references

- The "Figma template for component libraries" Bill mentions does not yet exist as a chunk in the DS corpus — it's an authoring artifact, not a code module. Worth surfacing as its own doc when it lands.

## Confidence notes

- Transcript text has minor OCR-style artifacts from the meeting recorder (`extracting it from linking` is awkwardly phrased; "Ap." is a transcription artifact at line breaks). Treated as verbatim with minor punctuation cleanup for readability.
- "Mehmet" in turn 4 appears to refer to Mahesha (Bill self-corrects: *"oh, go ahead, Mehmet. Mahesha. Sorry, I'll wait."*). Treated as Mahesha throughout.
