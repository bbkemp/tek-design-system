---
name: document-repo
description: Process a source code repository into chunked, versioned corpus markdown — public-surface and module summaries, not implementation bodies. Use when given a local repo path or a GitHub URL. Output is a versioned snapshot under rag/sources/<service-id>/code/<snapshot-id>/, one .md per major module plus _index.md. Re-run on new releases to add fresh snapshots; old ones stay for historical queries. Does not extract implementation details, tests, or generated files — those live in the live repo, queryable via grep at retrieval time.
---

# Document repo

Turns a source code repository into structured corpus markdown — the **public contract** and **module map**, not the implementation. The corpus answers "what does this expose, how do I consume it, and where is it" — not "how does it work line by line." Implementation is volatile; the public surface is the stable, queryable contract.

The format is **locked** by the first processed repo's snapshot: `rag/sources/tek-design-system/code/<first-snapshot>/`. Mirror its frontmatter shape and body section order for any future repo.

## Inputs

- A local repo path (e.g. `.` for the current repo) OR a GitHub URL.
- Implicit: `service-id` — the corpus subject id. Derived from the repo's name (`tek-design-system`, `bench`, `user-portal`). Kebab, unique within the org. Org-namespace only if collisions happen.

Optional:
- `--snapshot-id <slug>` to override the default snapshot folder name. Default: `<YYYY-MM-DD>-<short-sha>` (e.g. `2026-05-12-85a6857`). Always-latest mode (`--snapshot-id main`) overwrites the previous snapshot — useful for active development; lossy for history.
- `--depth <N>` to control module-map traversal depth (default 3).
- `--include <glob>` / `--exclude <glob>` to scope what counts as a "module."

## Hard rules

1. **Format is locked.** Mirror the first repo snapshot's frontmatter shape and body section order; class-specific fields extend the base rather than replacing it.
2. **Public surface only.** Extract exports, types, props, attributes, slots, events, tokens, CLI options, environment variables, build scripts. Do **not** extract function bodies, test suites, generated files (`dist/`, `node_modules/`), lockfiles, or anything in `.gitignore`. The implementation is volatile; the source repo is the truth at query time.
3. **Versioned, not durable.** Every run writes to a new snapshot folder under `code/<snapshot-id>/`. Snapshots accumulate; do not overwrite. The latest pointer is implicit in the most recent snapshot folder.
4. **One `.md` per module, not per file.** A module is a unit a consumer reasons about (a package, a top-level dir, a published component). Sub-files appear in the chunk's `## Module map`, not as separate chunks — unless the sub-unit has its own public surface (e.g. one `tek-*` Web Component per chunk for a component library).
5. **No design system mapping in chunks.** Mirrors the corpus-vs-audit rule from `document-screens` / `document-pdf`. The corpus describes what code exists; interpretation (DS audits, dependency graphs) lives under `audits/` via dedicated audit skills.
6. **Cross-link via frontmatter, not prose.** When a code module is the implementation of a documented screen, API, or hardware part, declare it in `related_screens` / `related_apis` / `related_hardware`. Audit skills that walk these graphs depend on the frontmatter being structured.

## Process

### 1. Identify the service and snapshot

- `service-id` — repo name in kebab. Defaults to the local folder name or the GitHub repo slug.
- `commit` — `git rev-parse --short HEAD` (or the explicit ref the user passed).
- `commit_date` — `git show -s --format=%cs HEAD` (ISO `YYYY-MM-DD`).
- `tag` — `git describe --exact-match --tags 2>/dev/null` (null if HEAD isn't tagged).
- `snapshot-id` — `<commit_date>-<short-sha>` (e.g. `2026-05-12-85a6857`).

### 2. Identify modules

A **module** is a coherent unit of public contract. Heuristics, in priority order:

1. **Monorepo packages.** If the root has a `workspaces:` declaration (npm/yarn/pnpm) or a `members:` (Cargo), each workspace is a module. Module id: `packages-<name>` for npm packages under `packages/`, or the workspace path kebab-ed.
2. **Top-level directories with their own role.** Directories at the root that contain executable code or generated artifacts (e.g. `qt/`, `figma-token-push/`, `scripts/`) are modules.
3. **Published components inside a component library package.** If a monorepo package is a component library (one component per directory, each with a public custom-element or class), each component is a sub-module. Module id: `<package-id>-<component-name>` (e.g. `packages-ui-button`).
4. **Single-package repos.** A repo with one `package.json` at the root is one module unless it has a clear `src/<area>/` structure exposing distinct public surfaces.

Skip:
- `node_modules/`, `dist/`, `build/`, `target/`, generated folders.
- `__tests__/`, `*.test.*`, `*.spec.*`, `tests/`, `test/`.
- Lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `Cargo.lock`).
- Anything in `.gitignore` (do not extract gitignored files even if they exist in the working tree).
- Drafts, prototypes, scratch directories that aren't part of the public contract — declare these in `_index.md` as "non-module dirs" so a reader knows they exist but they don't get their own chunk.

### 3. Generate `module_id` (chunk filename)

Kebab. Avoid filesystem nesting; flatten with hyphens so all chunks sit at the same depth under the snapshot folder.

| Module | `module_id` |
|---|---|
| `packages/tokens` | `packages-tokens` |
| `packages/ui` | `packages-ui` |
| `packages/ui/src/button` (component sub-module) | `packages-ui-button` |
| `qt/` | `qt` |
| `figma-token-push/` | `figma-token-push` |
| `scripts/` | `scripts` |

### 4. Extract the public surface, per module

For each module, read **only what's needed to describe the public contract**. Specifically:

- The module's `README.md` if present (full content; this is a key authoritative source).
- The module's manifest: `package.json` / `Cargo.toml` / `pyproject.toml` / `setup.py`.
- The module's entry point: `index.ts`, `index.js`, `mod.rs`, `__init__.py`, etc. Read only the exports — top-of-file `export { … }`, `pub use`, etc.
- For each public symbol, read its JSDoc / docstring / typedoc header comment. Skip the body.
- For component libraries: read the top-of-file comment block in each component (props, slots, events, tokens consumed). Skip the rendering logic.
- For build / CLI tools: read the script's argument parsing or the README's "Options" section.
- For Web Components: extract custom element tag name, observed attributes, slots, events, CSS custom properties consumed.
- For language layers other than TS/JS (e.g. Qt C++ headers, QSS stylesheets): extract symbol declarations from headers, selector lists from stylesheets, public function signatures.

Do **not** read implementation bodies. Resist the urge to summarize what the code does internally — that's the source's job.

### 5. Write chunks

Path: `rag/sources/<service-id>/code/<snapshot-id>/<module_id>.md`

#### Frontmatter

```yaml
---
class: code-module
service: <service-id>
snapshot: <snapshot-id>
commit: <short-sha>
commit_date: <YYYY-MM-DD>
tag: <tag at HEAD, or null>
module_id: <kebab>
module_title: <human-readable, e.g. "@bbkemp/tokens" or "Qt translation layer">
module_path: <relative path from repo root>
language: <ts | js | python | rust | qt-cpp | qss | qml | mixed>
package_name: <if a published package, e.g. "@bbkemp/tokens"; else null>
package_version: <if a published package; else null>
applies_to: [<service-id>, …]
related_screens: [<screen-id>, …]
related_apis: [<endpoint-id>, …]
related_hardware: [<hardware-id>, …]
related_modules: [<module_id>, …]
---
```

#### Body sections, in this exact order

1. **`# <module_title>` heading** — short, human-readable.
2. **`## Summary`** — one short paragraph paraphrasing the module's role. Optimized for retrieval matching.
3. **`## Purpose`** — one paragraph: what role this module plays in the service, why it exists, who consumes it. Derive from README if present.
4. **`## Public surface`** — the contract a consumer relies on. Format varies by module type:
   - Library / package: `### Exports` list with names, type signatures, and one-liner docs. `### Peer dependencies` if any.
   - Web Component: `### Custom element`, `### Attributes`, `### Slots`, `### Events`, `### Tokens consumed` (CSS custom properties from `--tek-*`).
   - Build tool / CLI: `### Commands` / `### Options`.
   - Stylesheet layer: `### Selectors` / `### Tokens consumed`.
   - C/C++ header: `### Constants` / `### Macros` / `### Functions`.
5. **`## How to consume`** — install, import, instantiate. Verbatim example from README or top-of-file comment if available; otherwise the smallest legible example. Code fenced.
6. **`## Module map`** — bulleted list of files / sub-directories with one-line role descriptions. Reference sibling chunks where they exist.
7. **`## Cross-references`** — bulleted list of related corpus entries (screens, apis, hardware, other modules) the module relates to. Mirror these in frontmatter `related_*` arrays.
8. **`## Confidence notes`** — bulleted list of items that are unverified (missing README, ambiguous public surface, generated file masquerading as source). Omit if nothing uncertain.

### 6. Write `_index.md`

After every snapshot, write `rag/sources/<service-id>/code/<snapshot-id>/_index.md`:

```markdown
# <service-id> — code snapshot <snapshot-id>

**Service:** `<service-id>` · **Commit:** `<short-sha>` (<commit_date>) · **Tag:** `<tag or "none">`

Generated <YYYY-MM-DD> by `document-repo` skill from <repo-path-or-url>.

## Module map

(ASCII or bulleted tree showing the module hierarchy. Reference each chunk by relative link.)

## Modules in this snapshot

| Module | Path | Language | Published as | Version |
|---|---|---|---|---|
| [packages-tokens](./packages-tokens.md) | `packages/tokens` | ts | `@bbkemp/tokens` | 1.0.16 |
| [packages-ui](./packages-ui.md) | `packages/ui` | ts | `@bbkemp/ui` | 1.0.12 |
| … | … | … | … | … |

## Non-module directories

(Directories at root that exist but were intentionally not chunked — drafts, prototypes, audits, generated dirs. Brief one-liner per.)
```

### 7. Update the service-level `index.md`

Write or update `rag/sources/<service-id>/index.md` to list all snapshots:

```markdown
# <service-id> — service index

## Code snapshots

| Snapshot | Commit | Tag | Date | Modules |
|---|---|---|---|---|
| [2026-05-12-85a6857](./code/2026-05-12-85a6857/_index.md) | `85a6857` | none | 2026-05-12 | 5 |

## API snapshots
(populated by document-api)

## Hardware
(populated by document-hardware)
```

### 8. Cross-link back to dependent corpus entries (optional, low-confidence)

When a code module is the implementation of a documented screen, API, or hardware part — e.g. a `tek-button` component is the Figma DS Button — the chunk's frontmatter declares `related_*`. **Do not silently back-update** screen `.md` files based on guessed correlations; the matches are too fuzzy. Surface candidate cross-links in the chunk's `## Cross-references` section instead, with a confidence note if uncertain.

This is different from `document-pdf`'s back-update — manuals reference screens with high confidence; code modules implement screens with looser correspondence.

## Output

For one repo processed at one snapshot:

```
rag/sources/<service-id>/code/<snapshot-id>/
├── _index.md
├── <module_id-1>.md
├── <module_id-2>.md
└── …
rag/sources/<service-id>/index.md          (created or updated)
```

Nothing written outside of `rag/sources/<service-id>/`. The source repo is never modified.

## Required tools

- **Bash** — for `git rev-parse`, `git describe`, `git show`, `ls`, `find`, `grep`.
- **Read** — for source files, READMEs, manifests.
- **Write** — for new chunks and `_index.md`.
- **Edit** — for updating the service-level `index.md` when a new snapshot is added.

## Workflow rules from CLAUDE.md that apply here

- Branch → PR; never commit to `main`. `feat(rag):` for new corpus content; `feat(skills):` for skill changes.
- Never commit generated artifacts. Only the extracted markdown.
- Match existing patterns. The format is locked to the first snapshot — do not improvise.

## Notes

- **Why versioned snapshots instead of overwriting?** Code is volatile; the corpus is queryable. Asking "how did the API look at v1.0.16?" requires the snapshot to persist. Disk grows linearly with releases; sweep old snapshots manually when stale.
- **Why not extract everything?** A full source dump is a less useful corpus than the public contract. Implementation details belong in the live repo, not a stale snapshot. The skill's value is the *summary layer*, not the *mirror layer*.
- **Why "service-id" instead of "product-id"?** A product is a SKU (`2450-ec`); a service is a piece of software (`tek-design-system`, `dev-core-api`). Both are corpus subjects; folders work the same way. The `applies_to` tag connects them when a service supports a product.
- **What about constantly-evolving local development?** The `--snapshot-id main` flag overwrites the previous snapshot — useful when you want a "current" view that mutates as you commit. Lossy; only use when history doesn't matter.
- **What about private repos?** Same as document-pdf — auth lives on your machine (SSH keys, gh tokens) and the skill reads from there. Never accept pasted credentials.
- **Generated files (dist/, etc.)?** Skipped. The build is reproducible from source; the corpus doesn't need both. If a downstream consumer needs the compiled output, they `npm install` it.
