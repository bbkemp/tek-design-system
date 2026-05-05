# Audits

Shareable Markdown reports produced by the QA skills under `.claude/skills/`. Each report is self-contained and intended to be handed to design or dev as-is.

## Layout

```
audits/
├── figma/<YYYY-MM-DD>-<slug>.md            ← figma-design-qa
├── code/<YYYY-MM-DD>.md                    ← code-design-qa
└── prototype/<YYYY-MM-DD>-<slug>/
    ├── report.md                           ← prototype-qa
    ├── screenshot-diff.md                  ← prototype-screenshot-diff
    └── screenshots/*.png                   ← prototype-screenshot-diff
```

## Generating a report

Invoke the matching skill in Claude Code (or any tool that reads the mirrors under `.cursor/rules/`, `.windsurf/rules/`, `AGENTS.md`, etc.). For example:

- `figma-design-qa` — pass a Figma URL
- `code-design-qa` — runs against `packages/ui/`, root `*.html`, and `prototypes/` by default
- `prototype-qa` — pass a Figma frame URL or a local HTML/JSX path; auto-invokes `prototype-screenshot-diff` for any close matches

Each skill accepts an `output-dir` override.

## Future home

This directory is the interim home. When the dedicated PRD / requirements / design-work repo is in place, audits will move there — pass `output-dir` to the skill to redirect output without changing the skill itself.
