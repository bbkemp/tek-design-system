# RAG POC — Software Screen Documentation

Goal: a consistent, LLM-optimized way to document every screen of an existing piece of Tek software, so we can:

1. Feed the org-wide MCP RAG with high-signal references.
2. Hand Claude Code a complete picture of a legacy UI when refactoring it to the design system (cd→cc handoff, like we did for User Portal).

## Layout

```
prototypes/rag-poc/
└── sources/
    └── <product-id>/              e.g. 2450-smu/
        ├── raw/                   raw photos / screenshots dropped here
        ├── screens/               one .md per screen + downscaled image
        ├── manual.pdf             optional, paired during processing
        └── index.md               screen graph + nav map (generated)
```

## Workflow

1. Drop raw photos into `sources/<product>/raw/`.
2. Run the `/document-screens` skill against that folder.
3. Skill produces, per image:
   - Downscaled image (max 1600px long edge) in `screens/`
   - Structured markdown with frontmatter + controls inventory + DS mapping
4. Skill regenerates `index.md` (screen graph) and an optional thumbnail PDF for human browsing.

Markdown is the RAG payload. PDF is for humans.

## Local hygiene — what's committed vs. local-only

| Path | Committed? | Why |
|---|---|---|
| `sources/*/raw/` | **No** (gitignored) | Raw photos are 3–12MB each; permanent repo bloat. Originals add no RAG value once markdown + downscale are extracted. |
| `sources/*/screens/*.md` | Yes | The RAG payload. |
| `sources/*/screens/*.{jpg,png,webp}` | Yes | Downscaled reference image, paired 1:1 with the markdown. |
| `sources/*/manual.pdf` | **No** (gitignored) | Manuals are large and may be license-restricted. Pair locally during processing. |
| `sources/*/index.md` | Yes | Generated screen graph. |

After a screen is processed, the raw photo can be deleted from local disk — the downscaled image + markdown are the artifact.

## Markdown format (locked once step-0 ships)

The first processed screen under `sources/2450-smu/screens/` is the canonical format reference. Subsequent screens — and the eventual `/document-screens` skill — must match its frontmatter shape and body sections exactly.
