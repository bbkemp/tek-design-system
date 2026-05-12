# RAG POC — Software Screen Documentation

Goal: a consistent, LLM-optimized way to document every screen of an existing piece of Tek software, so we can:

1. Feed the org-wide MCP RAG with high-signal references.
2. Hand Claude Code a complete picture of a legacy UI when refactoring it to the design system (cd→cc handoff, like we did for User Portal).

## Layout

```
prototypes/rag-poc/
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

## Markdown format

The canonical reference is `sources/2450-ec/screens/home.md`. Subsequent screens — and any other class-specific skill — must mirror its frontmatter shape and body section order; class-specific fields extend the base schema rather than replacing it.
