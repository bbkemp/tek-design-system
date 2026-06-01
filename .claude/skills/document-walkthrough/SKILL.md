---
name: document-walkthrough
description: Process a recorded walkthrough transcript (text, VTT, SRT, or speaker-attributed dialogue) into structured flow markdown — steps with timestamps, screens visited, friction notes, and architectural annotations from the narrator. Use when given a transcript at rag/sources/<product>/uploads/transcripts/. Produces one .md per distinct user flow under rag/sources/<product>/walkthroughs/, cross-linked to screens/hardware/APIs. Does not produce design system mapping — that's a separate, disposable audit via prototype-qa.
---

# Document walkthrough

Turns a recorded walkthrough — typically a screen-record + voiceover by an engineer, support agent, or product manager demonstrating a user flow — into structured corpus markdown. The transcript is the input; the output is a flow `.md` that captures the user's intent, the steps they take, the screens they visit, where they get stuck, and any architectural or historical context the narrator volunteers.

The format is **locked by the first processed walkthrough**. Until that exists, this skill spec is the contract; mirror it exactly when the first walkthrough lands.

## Inputs

- A transcript file at `rag/sources/<product-id>/uploads/transcripts/<filename>`. Supported formats:
  - **Plain text** (`.txt`, `.md`) — flowing narrative.
  - **WebVTT** (`.vtt`) — common output from screen-record tools (Loom, Riverside, automatic captions).
  - **SubRip** (`.srt`) — same shape as VTT.
  - **Speaker-attributed dialogue** (e.g. `Bryan: …\nClaude: …\n`) — multi-person walkthroughs.
  - **Markdown with timestamps** (`[01:23] Speaker: …`) — common manual-transcription format.

Optional:
- `--flow-id <kebab>` to override the derived id.
- `--video <filename>` if a paired video file is available locally for reference (gitignored, never committed; used only to cross-check timestamps).

## Hard rules

1. **Format is locked** (by the first processed walkthrough). Mirror its frontmatter and body section order exactly.
2. **Verbatim where possible.** Narrator quotes that explain *why* the product behaves this way are high-RAG-value — preserve them word-for-word in `## Annotations`. Step descriptions get paraphrased for clarity in `## Steps`, but the original transcript line(s) for each step are quoted inline.
3. **One `.md` per distinct user flow, not per recording.** A 30-minute recording that covers three flows yields three `.md` files; a 5-minute recording that covers one flow yields one.
4. **Cross-link via frontmatter.** When the narrator visits a documented screen, declare `screens_visited: [<screen-id>, …]` in frontmatter (ordered as visited) and `related_screens` for screens conceptually relevant but not directly shown. Same for hardware and APIs.
5. **Friction goes in its own section.** Confusion, errors, workarounds, "where did that go?" moments — capture verbatim in `## Friction notes`. Designers reading the corpus for redesign work will mine this section first.
6. **No design system mapping in chunks.** Same corpus-vs-audit rule as the other skills. Suggestions like "this dialog should use a tek-modal" don't belong in a walkthrough chunk — they're audit content.
7. **`uploads/` stays gitignored.** Source transcript (and any paired video) never commits.

## Process

### 1. Identify the flow(s)

Read the transcript. Recognize natural flow boundaries:

- A new task introduction ("OK, now let's set up a new sweep").
- A return to a known root screen (Home / dashboard).
- A long pause or topic switch.
- Narrator says "and that's how you [verb] [object]" — flow complete.

For each flow, generate a `flow_id` (kebab, descriptive). Examples: `cv-test-setup`, `import-csv`, `connect-instrument`, `recover-lost-password`.

### 2. Pull metadata from the transcript

- `flow_title` — human readable, derived from the narrator's stated task.
- `recorded_by` — speaker identity if attributed (`Bryan Kemp`) or role (`unknown narrator`).
- `recorded_date` — if mentioned by the narrator or in the file's metadata; else `null`.
- `duration` — total length of the source recording if known.
- `transcript_source` — the relative path under `uploads/transcripts/`.

### 3. Walk the flow

For each flow, identify:

- **Goal** — what the user is trying to accomplish.
- **Starting state** — what screen / context the flow begins in.
- **Steps** — discrete actions the user takes. Each step gets:
  - A timestamp if the transcript has them (`[01:23]`).
  - A one-sentence action description.
  - The screen visited or interacted with (cross-reference to `screens/<screen-id>.md` where it exists).
  - The verbatim transcript line(s) that motivated this step, quoted as a sub-bullet.
- **Friction** — points where the narrator hesitates, expresses confusion, hits an error, or applies a workaround. Quote verbatim.
- **Annotations** — narrator voiceover that explains *why* — architectural decisions, historical context, "this only exists because of [reason]," "we should change this but haven't gotten to it." High-value for redesign work.

### 4. Cross-reference

Map every screen the user visits to its `screens/<screen-id>.md` if documented; if not, list it in `## Pending references` so the corpus owner knows what screen-doc gaps to fill. Same for API endpoints (the narrator may mention "this calls `POST /accounts`") and hardware features.

### 5. Write the chunk

Path: `rag/sources/<product>/walkthroughs/<flow_id>.md`

#### Frontmatter

```yaml
---
class: walkthrough
product: <product-id>
flow_id: <kebab>
flow_title: <human readable>
recorded_by: <name or role>
recorded_date: <YYYY-MM-DD, or null>
duration: <mm:ss, or null>
transcript_source: uploads/transcripts/<filename>
screens_visited:
  - <screen-id>           # ordered as visited
  - <screen-id>
applies_to: [<product-id>, …]
related_screens: [<screen-id>, …]    # conceptually relevant, not necessarily visited
related_apis: [<endpoint-id>, …]
related_hardware: [<part-id>, …]
---
```

#### Body sections, in this exact order

1. **`# <flow-title>` heading** — short.
2. **`## Summary`** — one short paragraph, paraphrasing what the user is doing and why.
3. **`## Goal`** — the user's stated or evident intent. One sentence.
4. **`## Starting state`** — the screen / context the flow begins from.
5. **`## Steps`** — numbered list. Each step:
   - `**Step N — [timestamp if present]** — <one-sentence action>. Screen: [<screen-id>](../screens/<screen-id>.md).`
   - Sub-bullet with the verbatim transcript line(s) in quotes.
6. **`## Friction notes`** — bulleted list of pain points, verbatim quotes. Empty if none observed.
7. **`## Annotations`** — narrator voiceover that explains *why*. Quote verbatim with attribution.
8. **`## Cross-references`** — relations to other corpus content.
9. **`## Pending references`** — screens / APIs / hardware mentioned by the narrator but not yet documented in the corpus. Each as a one-liner so the next pass knows what to fill in.
10. **`## Confidence notes`** — inaudible passages, ambiguous step boundaries, narrator slips, anything uncertain.

### 6. Update `index.md`

Add a "Documented walkthroughs" section to `rag/sources/<product>/index.md`:

```markdown
## Documented walkthroughs

| flow_id | flow_title | duration | screens visited |
|---|---|---|---|
| [cv-test-setup](walkthroughs/cv-test-setup.md) | Cyclic voltammetry test setup | 4:32 | home → graph → graph-data |
```

## Output

```
rag/sources/<product>/walkthroughs/<flow_id>.md
rag/sources/<product>/index.md          (updated)
```

The source transcript stays in `uploads/transcripts/` (gitignored).

## Required tools

- **Read** — for the transcript and existing markdown.
- **Write** — for new walkthrough chunks.
- **Edit** — for updating the product-level `index.md`.

## Workflow rules from CLAUDE.md that apply here

- Branch → PR; never commit to `main`. `feat(rag):` for new corpus content.
- Never commit transcripts or paired videos — they're in `uploads/`, gitignored.
- Match existing patterns. Mirror the locked observation format the other `document-*` skills established.

## Notes

- **Why a separate "Friction notes" section instead of folding into Steps?** Friction is the redesign goldmine. Designers reading the corpus for "what's broken about this product" want a single section to read; they don't want to scan ten steps for the ones the user struggled with.
- **Why preserve narrator voiceover verbatim in Annotations?** "Why does it work this way?" answers tend to be the highest-value, lowest-frequency content in any walkthrough. Paraphrasing loses the nuance.
- **What if the transcript has multiple speakers (e.g. a user being interviewed)?** Attribute each quote in `## Annotations` (e.g. `**Bryan:** "…"`). Speaker confusion goes in Confidence notes.
- **What about screen recordings without voiceover?** Skip this skill — there's no narrator content to capture. If the video has only on-screen action, use `document-screens` against keyframe extractions instead.
- **Sensitive information in transcripts** (credentials, customer names, internal product names not yet announced)? Redact in the chunk and flag in Confidence notes. Better: tell the narrator to redact before recording. Never paste credentials into the chunk even if they're in the source transcript.
