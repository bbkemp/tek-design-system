# Audits

Shareable Markdown reports produced by the QA skills under `.claude/skills/`. Each report is self-contained and intended to be handed to design or dev as-is.

## Provenance — everything here is `authored-analysis`

Every artifact under `audits/` is **interpretation**, not observed fact, and is tagged as such so it can never be mistaken for corpus signal. The convention is defined authoritatively in [`corpus/README.md` § Provenance tagging](../corpus/README.md#provenance-tagging--observed-vs-authored-analysis). For audits specifically:

1. **Frontmatter** carries `provenance: authored-analysis`, `authored_by: [...]` (people and/or AI agents), and `authored_date:`.
2. **A visible banner** opens the file, so a reader skimming the body still sees the tag. Template:

   ```markdown
   > ## ⚠️ Authored analysis — not corpus
   > **This document is interpretation, authored by <authors> on <date>.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins — and this file should be corrected.
   ```

3. **Cite corpus sources.** Every factual claim about a product should be traceable to a `provenance: observed` corpus chunk; the rankings and verdicts are the authored judgment to argue with.

This applies equally to UXR synthesis (`uxr/`) and any future analytics-analysis surface — see the corpus README for why summaries-of-real-data are still `authored-analysis`.

## Layout

```
audits/
├── competitive/<YYYY-MM-DD>-<slug>/        ← Tek-authored competitive analysis
│   ├── report.md                           ← comparison narrative / feature matrix
│   └── assets/                             ← source decks, screenshots, vendor PDFs (local-only)
├── design-additions/<YYYY-MM-DD>-<slug>/   ← Claude Design redesign briefs, gap analyses, baseline audits
│   └── *.md                                ← variable layout per audit (report.md, gap-analysis.md, etc.)
└── prototype/<YYYY-MM-DD>-<slug>/
    ├── report.md                           ← prototype-qa
    ├── screenshot-diff.md                  ← prototype-screenshot-diff
    └── screenshots/*.png                   ← prototype-screenshot-diff
```

### Audit types

- **`competitive/`** — Tek-authored interpretation of competitor products (decks, feature matrices, UX critiques). Vendor-authored manuals and datasheets go in the corpus instead, as a peer subject source under `corpus/sources/<vendor>-<sku>/` — see [`corpus/README.md`](../corpus/README.md#competitor-products). Source assets local-only via `.gitignore`; synthesized `report.md` committed.
- **`design-additions/`** — Claude Design / Claude Code outputs for in-flight redesign work: build specs, additions audits, prompt iterations, cohesion reviews, baseline audits of the corpus or other systems. Each folder is dated and represents a snapshot in time. Layout per folder is flexible — `report.md` is the default but multi-file audits (separate `gap-analysis.md`, `cd-prompt.md`, etc.) are common.
- **`prototype/`** — `prototype-qa` output: a corpus screen audited against the current Design System v2. Includes a side-by-side screenshot diff when close matches are flagged.

### Planned audit types

Not yet populated; folders are created on first invocation of the matching skill:

- `figma/<YYYY-MM-DD>-<slug>.md` — `figma-design-qa`
- `code/<YYYY-MM-DD>.md` — `code-design-qa`

## Generating a report

Invoke the matching skill in Claude Code (or any tool that reads the mirrors under `.cursor/rules/`, `.windsurf/rules/`, `AGENTS.md`, etc.). For example:

- `figma-design-qa` — pass a Figma URL
- `code-design-qa` — runs against `packages/ui/`, root `*.html`, and `prototypes/` by default
- `prototype-qa` — pass a Figma frame URL or a local HTML/JSX path; auto-invokes `prototype-screenshot-diff` for any close matches

Competitive audits and design-additions audits are hand-authored today; no skill auto-produces them. A template skeleton + worked example for `competitive/` is on the follow-up list.

Each skill accepts an `output-dir` override.

## Future home

This directory is the interim home. When the dedicated PRD / requirements / design-work repo is in place, audits will move there — pass `output-dir` to the skill to redirect output without changing the skill itself.
