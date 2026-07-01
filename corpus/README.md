# Corpus

A structured-markdown corpus of the legacy Tek products being modernized — one folder per *subject* (product, internal service, repo) under [`sources/`](./sources/), with screens, walkthroughs, hardware views, manuals, APIs, and code snapshots all in a locked markdown format.

**Corpus vs. RAG.** The corpus is the *asset* — the durable markdown. RAG (retrieval-augmented generation) is one *technique* for consuming it, and only one of several consumers (Claude Code reading files directly, grep, a future vector-DB retrieval layer). This folder holds the corpus, not retrieval code; the retrieval pipeline is Phase 2.

Two downstream uses today:

1. Hand Claude Code a complete picture of a legacy UI when refactoring it to the design system (cd→cc handoff, like we did for User Portal).
2. Feed the org-wide retrieval layer with high-signal references when it ships.

## Layout

**Subjects are folders.** A "subject" is anything we corpus: a Tek product (`2450-ec`), a competitor product (`keysight-b2961a`), an internal service (`dev-core-api`), or a code repo (`tek-design-system`). All use the same `uploads/<class>/` schema. Cross-subject joins happen at retrieval time via `applies_to:` frontmatter, not folder hierarchy.

```
corpus/
├── _inbox/                       drop zone for unsorted assets — routed by /corpus-intake
└── sources/
    └── <subject-id>/              e.g. 2450-ec/, keysight-b2961a/, dev-core-api/
        ├── uploads/               local-only dump zone — gitignored
        │   ├── photos/            screen + hardware photos
        │   ├── pdfs/              manuals, quick-start guides, spec sheets, .chm help files
        │   ├── transcripts/       walkthrough transcripts (text — .docx, .vtt, .srt, .txt)
        │   ├── artifacts/         CAD, AI, slide decks, spreadsheets, anything else
        │   └── api-specs/         OpenAPI / Swagger / similar
        ├── screens/               one .md per UI screen + downscaled image (document-screens)
        ├── hardware/              one .md per hardware view + downscaled image (document-hardware)
        ├── docs/<doc-id>/         chunked manual / guide markdown (document-pdf)
        ├── walkthroughs/          per-flow transcript chunks (document-walkthrough)
        ├── api/<snapshot-id>/     versioned API spec snapshots (document-api)
        ├── code/<snapshot-id>/    versioned code-module snapshots (document-repo)
        └── index.md               cross-asset index (regenerated on every processing-skill run)
```

**Audio/video recordings are refused at corpus-intake.** Transcribe externally (Whisper, Otter.ai, Teams export), then re-intake the resulting `.vtt`/`.txt`/`.docx` transcript. A `/document-recording` skill is on the high-priority follow-up list to remove this friction.

## Workflow

1. Either drop raw inputs directly into the right `uploads/<class>/` subfolder, or dump everything (mixed files, whole folders, zip archives) into `corpus/_inbox/` and run `/corpus-intake` to sort them.
2. Run the matching processing skill (today: `/document-screens` for `uploads/photos/`).
3. Skill produces, per asset:
   - Downscaled / extracted reference (max 1600px long edge for images) in the class output folder.
   - Structured markdown with frontmatter + class-specific body sections.
4. Skill regenerates `index.md` (cross-asset graph).

Markdown is the RAG payload. PDFs and other binaries stay in `uploads/` and are local-only.

## Local hygiene — what's committed vs. local-only

| Path | Committed? | Why |
|---|---|---|
| `sources/*/uploads/` | **No** (gitignored) | Raw photos, PDFs, transcripts, and binary artifacts are large, often license-restricted, and add no RAG value once their markdown is extracted. |
| `sources/*/screens/*.md` | Yes | The RAG payload. |
| `sources/*/screens/*.{jpg,png,webp}` | Yes | Downscaled reference image, paired 1:1 with the markdown. |
| `sources/*/index.md` | Yes | Generated cross-asset index. |

After an asset is processed, the original in `uploads/` can be deleted from local disk — the markdown + downscaled reference are the artifact.

### Sharing high-res originals

Most consumers (designers reading screen .md for redesign work, devs implementing) get everything they need from the downscaled 1600px image in `screens/`. Occasionally a contributor needs the original-resolution photo for control-placement verification or a side-by-side comparison.

**Today:** originals live in the corpus author's `uploads/` folder (local-only, gitignored). Request the original by pinging the author.

**Planned:** when the friction warrants it, formalize a low-cost shared location for original photos. Candidate services in rough cost order — Backblaze B2 ($6/TB/mo), Cloudflare R2 ($0.015/GB/mo + zero egress), Google Drive (existing org subscription). The chosen service becomes a referenced field in screen frontmatter (`source_photo_url:`) so consumers can fetch directly without asking. Decision deferred until "ask the author" becomes a measurable bottleneck — currently rare.

## Cross-subject applicability

When an asset applies to more than one subject (e.g. a manual that covers 2450-EC, 2460-EC, and 2461-EC), the markdown declares the full list in frontmatter as `applies_to: [<id>, …]`. Families are an emergent property of `applies_to`, not a folder hierarchy. Subjects are folders; cross-subject joins happen at retrieval time.

## Competitor products

Non-Tek vendor products use the same schema as Tek subjects — they are still corpus subjects. Their folder name is `<vendor>-<sku>/` (e.g. `keysight-b2961a/`), and `uploads/` accepts the vendor's own manuals, datasheets, and other as-is reference material exactly as it does for Tek. **Default to a full corpus folder** for every competitor product we have substantive material on — symmetric treatment with our own products.

The corpus is for *as-is* legacy artifact dumps only. Tek-authored comparative analysis (competitive decks, feature matrices, UX critiques of a competitor's product) is **interpretation**, not corpus — it lives under `audits/competitive/` and is dated/disposable like any other audit.

## Corpus vs. audits — what belongs here and what doesn't

The corpus is the **as-is dump** of the legacy product. It is durable and write-once: once a screen, hardware view, or manual section is processed, the markdown stays put unless the *legacy artifact itself* changes (firmware update, manual revision).

That means the corpus deliberately stays **silent about the design system, support knowledge base, training material, and any other interpretation layer** — those move at a different speed than the legacy artifact and would rot the corpus if baked in.

Interpretations live under [`audits/`](../audits/) at the repo root, produced on-demand by skills like [`prototype-qa`](../.claude/skills/prototype-qa/SKILL.md), dated, and treated as disposable snapshots.

| | Corpus (here) | Audit (`audits/`) |
|---|---|---|
| Lifespan | Write-once, durable | Snapshot, disposable |
| Triggered by | Legacy artifact added or revised | DS evolves; new redesign briefing; on-demand |
| Content | Observation: anatomy, controls, visible text, confidence notes | Interpretation: DS mapping, gap analysis, redesign brief |
| Skill | `document-*` family | `prototype-qa`, `code-design-qa`, etc. |

When a corpus consumer needs a current view (e.g. CD wants to redesign a screen), they pair the corpus markdown with a fresh audit from `audits/` — never with stale opinion baked into the corpus.

## Provenance tagging — `observed` vs. `authored-analysis`

The corpus/audit split above is enforced by **location** (where a file lives). On top of that, **every markdown artifact in this repo carries an explicit `provenance:` frontmatter key** so the distinction is also machine-queryable and visible inside the file — independent of which folder it sits in. This is the triage layer: it lets a reader (or a retrieval pipeline) tell observed fact from authored interpretation at a glance, and quarantine a suspect claim to the right side of the line.

There are exactly two values:

| `provenance:` value | Meaning | Trust posture | Where it lives |
|---|---|---|---|
| `observed` | As-is documentation of a real artifact — a screen, hardware view, manual section, API spec, transcript. Verifiable against its `source_photo` / source document. | High — this is the system of record. Errors are *transcription* errors, fixable against the source. | `corpus/sources/**` content chunks |
| `authored-analysis` | Interpretation authored by people and/or AI — comparisons, gap analyses, redesign briefs, UXR synthesis, analytics readouts. May contain inference, ranking, and error. | Provisional — a starting position to challenge, not fact. **When it disagrees with an `observed` entry, the observed entry wins.** | `audits/**`, `uxr/**`, and any future analytics/analysis surface |

**Rules:**

1. **Corpus content chunks are `provenance: observed`.** The `document-*` skills emit it; it is part of the locked frontmatter (see [§ Markdown format](#markdown-format)). Generated `index.md` / `_index.md` files are navigational and carry no frontmatter — they inherit `observed` by location.
2. **Anything you and a collaborator (human or AI) author is `provenance: authored-analysis`**, and additionally carries `authored_by:` (the people/agents responsible) and `authored_date:`. It must also open with a visible **"Authored analysis — not corpus"** banner so a reader skimming the body, not the frontmatter, still sees the tag. See [`audits/README.md`](../audits/README.md) for the banner template.
3. **Never silently move an `authored-analysis` claim into an `observed` file.** If analysis hardens into fact, the fact must be re-derived from the artifact and documented as a corpus observation — not copy-pasted across the line.
4. **UXR and analytics especially.** Voice-of-customer synthesis, persona work, and analytics interpretation are `authored-analysis` even when they summarize real data, because the *summary* is the interpretation. Keep the raw signal (transcripts, exports) as `observed` corpus uploads; tag the synthesis on top of it as `authored-analysis`.

## Markdown format

The canonical reference is `sources/2450-ec/screens/home.md`. Subsequent screens — and any other class-specific skill — must mirror its frontmatter shape and body section order; class-specific fields extend the base schema rather than replacing it.

**Every content chunk's frontmatter opens with `provenance: observed`** (see [§ Provenance tagging](#provenance-tagging--observed-vs-authored-analysis)). The `document-*` skills emit it as the first key; it is part of the locked shape, not optional.

**Locked body sections for screen `.md`:** Purpose → Controls inventory → State variations → Visible text (verbatim) → Confidence notes → Manual references → Source photo. **No `Design system mapping` section.** That lives in `audits/prototype/<YYYY-MM-DD>-<slug>/`, generated by `prototype-qa`.

## Idempotence — processing skills are safe to re-run

Every `document-*` skill is idempotent. Re-running on the same product (or the same single photo via `--photo`) regenerates the output from the current state of `uploads/`. There is no append mode and no skip-already-done mode — output is always derived from inputs.

In practice that means:
- If you fix a confidence note or relabel a control by hand-editing the .md, **don't re-run the skill** without copying your edit back into the source photo or transcript first; the re-run will overwrite your hand-edit.
- If you drop a corrected source photo into `uploads/photos/`, re-running `document-screens` for that product will pick it up and regenerate the affected screen .md.
- If you add a new manual chunk via `document-pdf`, screen `.md` files get their `Manual references` sections automatically back-updated.

## Process completion — how to know a screen (or chunk) is done

A processed asset is ready to commit when all of the following hold:

- [ ] Markdown committed to `<subject>/<output-class>/<id>.md`
- [ ] Paired downscaled image committed (for screens / hardware) — text on the LCD legible at 100% zoom in a browser
- [ ] `Confidence notes` section is substantive and reflects what the source photo actually shows; no boilerplate
- [ ] No fabricated controls, labels, or values — anything not derivable from the source is flagged in confidence notes
- [ ] Cross-references resolve: every `[link](path)` opens to a real file
- [ ] `index.md` regenerated (every processing skill does this; verify the entry exists)
- [ ] `git status` shows no untracked binaries (everything under `uploads/` correctly gitignored)
- [ ] **No `Design system mapping` section** — that's a separate audit produced on-demand by `prototype-qa`

**Manual pairing** (linking screens to manual chunks) is a separate pass. Until `/pair-manual` ships, the social rule is: whoever processes the second of (screens, manual) for a subject does the pairing as part of their work. Confidence notes flagging "manual pairing pending" stay as honest status until then.

## Undo and recovery

The corpus is markdown — every change is recoverable.

- **Bad output from a skill run**: fix in place (edit the `.md`) or `git checkout HEAD -- <path>` to revert; re-run the skill with the inputs corrected if the root cause was the source.
- **Whole product folder went sideways**: `git revert <commit>` or, on an unpushed branch, `git restore --source HEAD~1 -- corpus/sources/<subject>/`.
- **Source photo or transcript was wrong**: the originals stay in `uploads/` (local-only), so you can swap and re-run; nothing about the corpus pipeline assumes one-shot processing.

There is no "undo intake" — once `corpus-intake` moves a file, it's at the destination. To re-route, `mv` it manually or drop it back into `_inbox/` and re-run.

## Scaling notes

The current structure works comfortably at the POC scale (≤10 subjects, ≤100 screens, ≤20 chunks per manual). Inflection points to watch for:

- **At ~50 subjects** the flat `sources/` listing becomes hard to browse. Consider grouping by vendor or product line (e.g. `sources/keithley/`, `sources/tektronix/`) — but every reorg is a path-update cost, so defer until friction is concrete.
- **At ~500 screens per subject** the per-product `screens/` folder becomes hard to browse in Finder/VS Code. Consider sub-grouping (`screens/setup/`, `screens/results/`) — affects `screen_id` conventions.
- **At any size** retrieval relies on `applies_to:` frontmatter for cross-subject queries; never invent a "product-family" folder hierarchy. Families are emergent.

## Read order — if you're touching corpus work specifically

1. This file (corpus layout, idempotence, completion criteria, undo)
2. The skill SKILL.md for the class you're working on: [`corpus-intake`](../.claude/skills/corpus-intake/SKILL.md), [`document-screens`](../.claude/skills/document-screens/SKILL.md), [`document-pdf`](../.claude/skills/document-pdf/SKILL.md), [`document-walkthrough`](../.claude/skills/document-walkthrough/SKILL.md), [`document-hardware`](../.claude/skills/document-hardware/SKILL.md), [`document-api`](../.claude/skills/document-api/SKILL.md), [`document-repo`](../.claude/skills/document-repo/SKILL.md)
3. The canonical reference file for that class — for screens it's `sources/2450-ec/screens/home.md`; each skill names its own canonical
4. [`audits/README.md`](../audits/README.md) for the corpus-vs-audit boundary
5. [`docs/tek-system-core.md`](../docs/tek-system-core.md) for the broader Knowledge Corpus → retrieval architecture (Phase 2)
