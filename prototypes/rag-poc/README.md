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
   - Downscaled image in `screens/`
   - Structured markdown with frontmatter + controls inventory + DS mapping
4. Skill regenerates `index.md` (screen graph) and an optional thumbnail PDF for human browsing.

Markdown is the RAG payload. PDF is for humans.
