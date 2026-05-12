# Skills

Project-local Claude Code skills under `.claude/skills/`. Each entry is a folder containing a `SKILL.md` with frontmatter (`name`, `description`) plus body instructions. Skills are discoverable to any Claude Code session opened in this repo and mirrored to other AI tools via the `export-skills` skill.

This README is the **map**. The categories below group skills by what they do to the repo, not by alphabet.

## RAG corpus — durable, write-once

Skills that produce the **as-is dump** of legacy products into `rag/sources/<product>/`. Output is durable; rerun only if the source artifact changes (firmware update, new manual revision).

| Skill | What it does | Status |
|---|---|---|
| [document-screens](./document-screens/SKILL.md) | photos → per-screen markdown | shipped |
| [document-pdf](./document-pdf/SKILL.md) | manuals / quickstart guides → chunked markdown; back-updates screen Manual references | shipped |
| [document-repo](./document-repo/SKILL.md) | source repos → versioned snapshot of public surface + module map | shipped |
| document-api | OpenAPI/Swagger specs → per-endpoint markdown | planned (P0) |
| document-hardware | physical product photos → hardware markdown | planned (P1) |
| document-walkthrough | walkthrough transcripts → flow markdown | planned (P2) |
| document-artifact | .cad / .ai / .step → artifact markdown + render | planned (P2) |

## Audits — on-demand, disposable snapshots

Skills that produce **views** on the corpus, on the design system, or on live code/Figma. Output is dated and disposable; rerun any time the lens changes (DS evolves, new redesign briefing needed). Output lives under `audits/<type>/<YYYY-MM-DD>-<slug>/`.

| Skill | What it does |
|---|---|
| [prototype-qa](./prototype-qa/SKILL.md) | Classifies elements vs DS-v2 (Figma frame, local HTML, or corpus screen `.md`). |
| [prototype-screenshot-diff](./prototype-screenshot-diff/SKILL.md) | Generates visual side-by-side comparisons for close matches. Invoked by `prototype-qa`. |
| [code-design-qa](./code-design-qa/SKILL.md) | Audits web code (`.ts`, `.html`, `.css`) for DS violations — hardcoded values, missing tokens, native elements where `tek-*` exists. |
| [figma-design-qa](./figma-design-qa/SKILL.md) | Audits a Figma file or frame for components and styles that bypass the design system. |
| [review-cc-pr](./review-cc-pr/SKILL.md) | Reviews a Claude Code-authored PR against Tek Design System conventions before merge or human handoff. |

## Design system meta — manages the DS itself

| Skill | What it does |
|---|---|
| [add-token](./add-token/SKILL.md) | Adds a new design token (color, spacing, font, border, radius) — primitive or semantic. |
| [code-connect](./code-connect/SKILL.md) | Maps a Figma component to its source file via Figma Code Connect. |
| [export-skills](./export-skills/SKILL.md) | Mirrors `.claude/skills/` to Cursor, Windsurf, Cline, Continue, Copilot, and `AGENTS.md`. Run after adding/editing/removing a skill. |

## Drops — repeatable handoffs

| Skill | What it does |
|---|---|
| [drop-bench](./drop-bench/SKILL.md) | Drops a Tek Bench artifact from Claude Design — injects PWA meta, branches, commits, pushes, opens PR. |

## Monitoring — watch for upstream changes

| Skill | What it does |
|---|---|
| [figma-mcp-watch](./figma-mcp-watch/SKILL.md) | Detects new Figma MCP tools and capabilities weekly; opens an issue when the documented tool list changes. |

## When to use which

- **New legacy product to document?** Start with `document-screens` (photos); add `document-pdf` (manual) when it ships. Each output lives in `rag/sources/<product-id>/`.
- **Need a DS-coverage view of the corpus?** `prototype-qa` against `rag/sources/<product>/screens/`. Output is a dated snapshot under `audits/prototype/`.
- **Implementing one of the proposed primitives?** `code-connect` for Figma mapping, `add-token` for any new tokens. Then rerun `prototype-qa` to verify the gap closed.
- **Adding or changing a skill?** Edit / create the SKILL.md, add a row in the table above under the right category, run `export-skills` to mirror to other AI tools, commit + PR with `feat(skills): <name> — <one-line>`.

## Adding a new skill

1. Create `.claude/skills/<kebab-name>/SKILL.md` with required frontmatter:
   ```yaml
   ---
   name: <kebab-name>
   description: <one-sentence what + when to use>
   ---
   ```
2. Add a row in the table above under the matching category.
3. Run `export-skills` to mirror to other AI tools.
4. Commit + PR with `feat(skills): <name> — <one-line>`.

If a skill spans multiple categories (some do), pick the dominant one and link from the others if helpful.
