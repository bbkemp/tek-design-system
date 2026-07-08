---
provenance: authored-analysis
authored_by: [Bryan Kemp, Claude Code]
authored_date: 2026-07-08
---

> ## ⚠️ Authored analysis — not corpus
> **This document is interpretation, authored by Bryan Kemp + Claude Code on 2026-07-08.** It is opinion and synthesis, not observed fact. The system of record is the cited corpus entries (`provenance: observed`). When this analysis and a corpus entry disagree, the corpus wins — and this file should be corrected.

# Repo root cleanup — 2026-07-08

A top-to-bottom review of the repository root. Part 1 records the changes executed in the cleanup PR (this branch). Part 2 records the review items, the decision Bryan made on each, and the outcome. Part 3 is what remains open.

## Part 1 — Executed in this PR

### Wave 1 — moves and deletes

| Item | Action taken |
|---|---|
| `.DS_Store` | Deleted locally (gitignored; Finder junk). |
| `drafts/` | Deleted — empty since April. |
| `signin.html` | Moved to `prototypes/sign-in/index.html` (now the folder index). |
| `signup.html`, `signup-v1…v7.html` | Moved to `prototypes/sign-in/` unchanged names. Cross-links to `signin.html` rewritten to `index.html`; package imports rewritten `./packages/…` → `../../packages/…`. |
| `page-layout.css`, `img/` | Moved into `prototypes/sign-in/` (used only by these pages). Relative refs unchanged. |
| `design-audit/bench-audit.md` | Moved to `audits/design-additions/2026-04-22-bench-audit/bench-audit.md`. |
| `design-audit/riddick/` | Moved to `audits/design-additions/2026-04-22-riddick/`. Riddick is one of the two documented Figma-build failures — preserved intact. |
| `design-audit/` | Removed (now empty; superseded by `audits/`). |

### Wave 2 — audit-item resolutions

| Item | Action taken |
|---|---|
| `component-library.html` | Moved to `prototypes/component-library/index.html`. Self-contained (no relative deps) — verified rendering after move. |
| `SETUP.md` | Kept as the onboarding doc; refreshed — preview URLs and file tree updated to new paths, duplicated Figma node-ID table replaced with a link to README's canonical map, added pointers to README's token/component usage sections. |
| `CHANGELOG.md` | Kept, frozen with a header note. Verified the v1.0.10 fix rationales (focused-input destruction, checkbox rendering artifacts, modal 320→360px) exist nowhere else — April git history is dominated by token-push auto-commits. |
| `CLAUDE.md` | Added one-line entries for `prototypes/`, `wpf/`, `uxr/`, `scripts/`. |
| `package-lock.json` | Removed from `.gitignore` and committed; regenerated via fresh `npm install`. Reproducible installs for all machines and CI. |
| Skill sources | `code-design-qa` and `review-cc-pr` SKILL.md files referenced root `*.html` paths — updated, and all mirrors (`.cursor`, `.windsurf`, `.continue`, `.clinerules`, `.github/instructions`, `AGENTS.md`) regenerated via `npm run skills:export`. |
| `docs/tek-system-core.md` | Two reference-page path mentions updated. |
| Doc path updates | `README.md`, `CONTRIBUTING.md` updated for both waves. |

Not touched on purpose: `CHANGELOG.md` body entries and `corpus/sources/tek-design-system/code/2026-05-12-85a6857/_index.md` still mention old paths — historical records are not rewritten.

## Part 2 — Reviewed items and verdicts

1. **SETUP.md** — *Decision: keep and update.* README was re-reviewed in full first; it covers consumer auth, install, usage, plugin setup, local dev, and the node map. SETUP.md remains the onboarding narrative with unique content (Actions write-permissions check, Token Push PAT `repo`-scope setup, reload-after-pull). Deduped by linking. **Resolved.**

2. **component-library.html** — *Decision: move to `prototypes/`.* Done, verified. Note: it still uses inline component definitions, so it is a demo/reference, not an integration test — the sign-in pages are the integration tests. Converting it to real `packages/*/dist/` imports remains open (Part 3). **Moved; conversion open.**

3. **CHANGELOG.md** — *Decision: delete only if nothing unique.* Verification found unique content (1.0.10 fix rationales). **Kept, frozen with header note.**

4. **wpf/wpf-reference.html** — *Decision: diff now.* Result: **not stale.** All 45 semantic color keys (dark + light) and all 68 displayed primitive values match the 2026-07-07 XAML exactly. The page intentionally shows a curated subset (76 XAML keys — extended border widths etc. — are not displayed). No action needed.

5. **CLAUDE.md coverage gaps** — *Decision: add now.* Done. **Resolved.**

6. **AGENTS.md size (172 KB)** — *Decision: leave as-is.* Generated mirror for Aider/Codex/Amp/Jules/Cody; no confirmed consumer pain. Revisit if a tool that loads it whole enters the workflow — `export-skills.mjs` could emit an index format instead.

7. **Large binaries in git history** — *Decision: accept for now.* `prototypes/sign-in/img/bg-mov.mp4` (4.6 MB) and 21 tracked font-lab `.woff2` files. Revisit (Git LFS or external hosting) if clone size becomes a problem — growth is a decision, not drift.

8. **package-lock.json gitignored** — *Decision: commit it.* Done. **Resolved.**

### Wave 3 — Qt retirement + WPF relocation (follow-up PR, same day)

| Item | Action taken |
|---|---|
| `qt/` | **Deleted** (TekTokens.h, QSS files, qt-reference.html — preserved in git history). The org's desktop direction is WPF; Qt was a one-time generated drop with no pipeline writing to it. |
| `wpf/` | **Moved to `docs/wpf/`** with the pipeline repointed: `packages/tokens/build.js` wpfDir and `publish-tokens.yml`'s `git add -f` path both updated. Verified by running `npm run build:tokens` — XAML regenerated into `docs/wpf/` byte-identical. |
| "Why Web Components" rationale | Updated everywhere from "the consuming runtime is Qt" to "the consuming runtime is native desktop (WPF/XAML)": CLAUDE.md hard constraint #1, README, SETUP.md, tek-system-core.md (8 spots), and the `add-token` / `code-design-qa` / `document-repo` / `review-cc-pr` skills + regenerated mirrors. |
| `document-repo` language enum | `qt-cpp | qss | qml` values kept — historical corpus snapshots (e.g. `2026-05-12-85a6857`) use them. |

## Part 3 — Remaining open items

- **Convert `prototypes/component-library/index.html` to real `packages/*/dist/` imports** so it becomes a true integration test. Its own follow-up PR — the inline definitions must be verified against current `packages/ui/src/` before swapping.
- ~~**AGENTS.md format**~~ — **Resolved 2026-07-08**: `export-skills.mjs` now emits AGENTS.md as a ~11 KB index (per-skill description + path to canonical SKILL.md) with the full concatenation preserved at `docs/agents-full.md` for consumers that can't follow file paths.
- **Binary growth** — revisit LFS/external hosting if clone size becomes a problem.
