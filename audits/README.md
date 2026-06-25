# Audits

Shareable Markdown reports produced by the QA skills under `.claude/skills/`. Each report is self-contained and intended to be handed to design or dev as-is.

## Layout

```
audits/
├── figma/<YYYY-MM-DD>-<slug>.md            ← figma-design-qa
├── code/<YYYY-MM-DD>.md                    ← code-design-qa
├── competitive/<YYYY-MM-DD>-<slug>/        ← Tek-authored competitive analysis
│   ├── report.md                           ← comparison narrative / feature matrix
│   └── assets/                             ← source decks, screenshots, vendor PDFs (local-only)
└── prototype/<YYYY-MM-DD>-<slug>/
    ├── report.md                           ← prototype-qa
    ├── screenshot-diff.md                  ← prototype-screenshot-diff
    └── screenshots/*.png                   ← prototype-screenshot-diff
```

`competitive/` is the home for interpretation of competitor products (decks, feature matrices, UX critiques). Vendor-authored manuals and datasheets go in the corpus instead, as a peer product source under `corpus/sources/<vendor>-<sku>/` — see [`corpus/README.md`](../corpus/README.md#competitor-products).

## Generating a report

Invoke the matching skill in Claude Code (or any tool that reads the mirrors under `.cursor/rules/`, `.windsurf/rules/`, `AGENTS.md`, etc.). For example:

- `figma-design-qa` — pass a Figma URL
- `code-design-qa` — runs against `packages/ui/`, root `*.html`, and `prototypes/` by default
- `prototype-qa` — pass a Figma frame URL or a local HTML/JSX path; auto-invokes `prototype-screenshot-diff` for any close matches

Each skill accepts an `output-dir` override.

## Future home

This directory is the interim home. When the dedicated PRD / requirements / design-work repo is in place, audits will move there — pass `output-dir` to the skill to redirect output without changing the skill itself.
