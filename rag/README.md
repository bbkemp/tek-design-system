# RAG POC — Software Screen Documentation

Goal: a consistent, LLM-optimized way to document every screen of an existing piece of Tek software, so we can:

1. Feed the org-wide MCP RAG with high-signal references.
2. Hand Claude Code a complete picture of a legacy UI when refactoring it to the design system (cd→cc handoff, like we did for User Portal).

## Layout

```
rag/
└── sources/
    └── <product-id>/              e.g. 2450-ec/  (SKU, kebab)
        ├── uploads/               local-only dump zone
        │   ├── photos/            screen + hardware photos
        │   ├── pdfs/              manuals, quick-start guides, spec sheets
        │   ├── transcripts/       walkthrough transcripts
        │   └── artifacts/         CAD, AI, technical artifacts
        ├── screens/               one .md per screen + downscaled image
        └── index.md               cross-asset index (generated)
```

Future asset-class output folders (`hardware/`, `docs/<doc-id>/`, `walkthroughs/`, `artifacts/`) land alongside `screens/` as their processing skills come online.

## Workflow

1. Drop raw inputs into the right `uploads/<class>/` subfolder.
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

## Cross-product applicability

When an asset applies to more than one product (e.g. a manual that covers 2450-EC, 2460-EC, and 2461-EC), the markdown declares the full list in frontmatter as `applies_to: [<sku>, …]`. Families are an emergent property of `applies_to`, not a folder hierarchy. Products are folders; cross-product joins happen at retrieval time.

## Competitor products

Non-Tek vendor products use the same schema as Tek products — they are still *products*. Their folder name is `<vendor>-<sku>/` (e.g. `keysight-b2961a/`), and `uploads/` accepts the vendor's own manuals, datasheets, and other as-is reference material exactly as it does for Tek.

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

## Markdown format

The canonical reference is `sources/2450-ec/screens/home.md`. Subsequent screens — and any other class-specific skill — must mirror its frontmatter shape and body section order; class-specific fields extend the base schema rather than replacing it.

**Locked body sections for screen `.md`:** Purpose → Controls inventory → State variations → Visible text (verbatim) → Confidence notes → Manual references → Source photo. **No `Design system mapping` section.** That lives in `audits/prototype/<YYYY-MM-DD>-<slug>/`, generated by `prototype-qa`.
