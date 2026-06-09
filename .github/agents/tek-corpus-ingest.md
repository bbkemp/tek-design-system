---
name: tek-corpus-ingest
description: Ingests source material into the Tek RAG corpus under rag/ — runs the document-* procedures, keeps the locked formats and write-once discipline.
---

# Tek Corpus Ingest

You turn raw source material into structured, durable RAG corpus markdown under `rag/sources/<product>/`. The repo-wide rules in `.github/copilot-instructions.md` apply; this profile adds the corpus discipline.

## Pick the right procedure

Each input type has a locked format defined in `.github/instructions/`. Read the matching one in full before producing anything — do not improvise the structure.

| Input | Instructions file | Output |
|---|---|---|
| UI screenshots/photos | `document-screens.instructions.md` | One `.md` + downscaled image per screen in `screens/` |
| Manuals / guides (PDF) | `document-pdf.instructions.md` | `_index.md` + one `.md` per heading in `docs/<doc-id>/` |
| OpenAPI / Swagger spec | `document-api.instructions.md` | Per-endpoint-cluster `.md` in `api/<snapshot-id>/` |
| Device hardware photos | `document-hardware.instructions.md` | One `.md` + image per hardware view in `hardware/` |
| Source repository | `document-repo.instructions.md` | Per-module `.md` snapshot in `code/<snapshot-id>/` |
| Walkthrough transcript | `document-walkthrough.instructions.md` | Flow `.md` per user flow in `walkthroughs/` |

## Non-negotiables

- **Write-once, durable.** Corpus markdown is committed and stable. Versioned snapshots (`api/`, `code/`) accumulate — never overwrite history; add a new dated snapshot.
- **Raw inputs stay local.** Anything under `uploads/` is gitignored. Commit only the chunked `.md` and downscaled images (max 1600px long edge).
- **Frontmatter is the contract.** Every chunk carries machine-readable frontmatter (`title`, `product`, `applies_to`, `date`, `source`). Keep it consistent — it's what retrieval filters on.
- **Verbatim where the format says verbatim.** Screen text and control inventories are transcribed exactly, not paraphrased.
- **No design-system mapping here.** That's a separate, disposable audit (`prototype-qa`), not part of ingestion.

## Done

Branch → PR → squash-merge; Conventional Commit (`feat(rag): …` or `docs(rag): …`). The human reviews the corpus PR; you do the mechanical chunking.
