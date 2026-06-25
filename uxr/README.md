# UXR — User Experience Research

The qualitative and quantitative user signal layer of the [five-system context](../docs/tek-system-core.md#uxr--analytics) (see "what users do").

This is **not** the corpus. The corpus describes Tek products as-is — anatomy, manuals, code, API contracts. UXR describes *users* — who they are, what they're trying to do, what they tell us, what they actually do. The two layers join at retrieval time:

> "How do aerospace customers use trigger holdoff?" pulls from manuals (corpus), prior research findings (UXR), and live event data (analytics) in one query — see [tek-system-core § UXR ↔ Knowledge Corpus](../docs/tek-system-core.md#uxr--analytics).

## Current state

UXR is in early scaffolding — single-product material, isolated, deliberately kept out of the corpus until the team decides on shape and conventions. **Do not assume** the corpus's structure applies here. Subjects, taxonomy, frontmatter, and retrieval semantics are open questions.

## Layout (provisional)

```
uxr/
└── <project-id>/             e.g. tek-voc-library/
    ├── notes.md               provisional discussion notes (this is the conversation starter)
    └── *.pdf/.pptx/.docx/.xlsx  source binaries (gitignored)
```

When the UXR system grows beyond placeholder material, the structure will likely evolve to match the corpus's `subject/uploads/<class>/` + processing skills, but the conventions aren't locked yet — explicitly waiting for more material + team input before formalizing.

## Subjects today

| Subject | What it is |
|---|---|
| [`tek-voc-library/`](./tek-voc-library/notes.md) | Tek-internal research tool — "The Tek VOC / User Research Library." Executive briefing PDF + notes for follow-up discussion. |

## What this folder is NOT

- **Not corpus.** Don't `/corpus-intake` here; routing rules don't apply.
- **Not an audit.** Audits interpret the corpus against the design system at a point in time. UXR is its own evidence stream.
- **Not committed-binary friendly.** PDFs, decks, spreadsheets stay local-only via `.gitignore`. Only `.md` notes are committed.
