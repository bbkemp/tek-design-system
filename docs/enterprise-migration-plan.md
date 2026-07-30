# Enterprise Migration Plan — bbkemp/tek-design-system → TEK-Product-AI

**Status:** Draft for review · **Author:** Claude + Bryan Kemp · **Date:** 2026-07-30
**Scope:** Moving this repo (and everything wired to it) from Bryan's personal GitHub account into the Ralliance/Tektronix enterprise org [github.com/TEK-Product-AI](https://github.com/TEK-Product-AI). Nothing moves until the open decisions below are settled.

---

## 1. The one thing that changes everything

TEK-Product-AI is an **enterprise-managed-users (EMU)** organization. Enterprise accounts (like `bryan-kemp_ralliant`) cannot interact with repos outside the enterprise, and outside accounts (like `bbkemp`) cannot be added to it. Consequence:

> **GitHub's native "Transfer repository" is not available for this move.** A native transfer would have carried issues, PRs, and redirects automatically. Instead we migrate in two parts:
>
> 1. **Code** — `git push --mirror` to a fresh org repo: full history, all branches, all tags. Lossless.
> 2. **Issues / labels / milestones** — scripted recreation via the GitHub API (Claude executes). Titles, bodies, labels, state, and cross-references survive; original timestamps and the `bbkemp` author byline don't (each migrated issue gets a provenance footer instead). PR history stays readable on the old repo.

The ~90 triaged issues (#203–#293 plus later) are structured data we already control — recreating them is a mechanical, verifiable batch job, not a risk. **Old issue numbers will not match new numbers**; the migration script writes an old→new mapping table into the new repo so cross-references can be rewritten.

## 2. What we verified (2026-07-30)

- `bryan-kemp_ralliant` is an **active member** of TEK-Product-AI; members can create public/private (and internal) repos. Both accounts live side-by-side in the `gh` CLI on Bryan's Mac; `bbkemp` stays the active default until cutover.
- Org infra is a 3-layer paved road: `.github` (org defaults, fallback reviewer = `@TEK-Product-AI/TIFF-Team`), `cicd-pipelines` (reusable CI called at `@v1`), `repo-template` (Copier scaffolder + retrofit). Reusable workflows require **internal** repo visibility.
- `tek-mcp-python` (their MCP) is instrument-command tooling — **zero overlap** with this design system. No conflicts; some patterns worth borrowing (deterministic runtime, overlay DBs, honest waiver tables).

## 3. Inventory — everything wired to the personal account

| # | Asset | Today | Needs after move |
|---|---|---|---|
| 1 | Git repo + history | `bbkemp/tek-design-system` (public) | Mirror-push to `TEK-Product-AI/<name>` |
| 2 | Issues, labels, milestones | ~90 open/triaged on bbkemp | Scripted API recreation + mapping table |
| 3 | Project board | "Tektronix DS Project" (user-level) | Rebuild as org Project (org already has 2) |
| 4 | Actions secrets | `DATABASE_URL`, `VOYAGE_API_KEY`, `TEK_MCP_URL`, `CLAUDE_CODE_OAUTH_TOKEN` | Re-create in org repo settings |
| 5 | Workflows (8) | claude, corpus-index-check, eval-gate, figma-mcp-watch, ingest, publish-tokens, publish-ui, skills-sync | Carry over as-is; later add org CI stubs alongside (§5) |
| 6 | GitHub Pages | Serves the bench + prototypes publicly from the repo | **Open decision** — internal repos gate Pages behind org sign-in (good for IP, changes bench sharing) |
| 7 | Published packages | `@bbkemp/tokens`, `@bbkemp/ui` on GitHub Packages | Rename to org scope — finally executes the long-planned namespace migration |
| 8 | Tek MCP endpoint | Vercel app + Neon/pgvector, re-ingests on push to `main`; secret-URL access because repo is public | Repoint ingest to new repo; hosting/auth is **open decision** (§6) |
| 9 | Figma Token Push plugin | Commits 4 token files to bbkemp repo | Retarget to org repo; needs an EMU-compatible token (org PAT policy TBD) |
| 10 | Claude GitHub App / MCP connector | Installed & authorized on bbkemp | Org must install/approve apps — EMU orgs commonly restrict; needs org-owner action |
| 11 | Vercel Git integration | Connected to bbkemp repo | Reconnect to org repo (Vercel GitHub app must be approved in org) |
| 12 | Local clone + `.mcp.json` | Points at bbkemp remote | Update remote; `.mcp.json` unchanged unless endpoint auth changes |

## 4. Phased plan

### Phase 0 — Prep (zero risk, start anytime)
1. Settle the open decisions in §6 with the org's admin (likely needs a conversation with whoever runs TEK-Product-AI).
2. Confirm org policies: internal-repo Pages availability, GitHub App installs (Claude, Vercel), PAT policy for the Figma plugin, Actions policy for third-party actions.
3. Create/join a GitHub **team** for the design system so CODEOWNERS doesn't fall back to TIFF-Team.
4. Dry-run the issues-migration script against a throwaway org repo; verify label/milestone/mapping fidelity.

### Phase 1 — Stand up the org repo (personal repo stays live and canonical)
1. Create `TEK-Product-AI/<name>` (internal), mirror-push code.
2. Re-create secrets; add repo-level CODEOWNERS; verify all 8 workflows go green (ingest pointed at a **staging** Neon branch until cutover).
3. Solve Pages/bench hosting per decision D2.
4. Retrofit org CI stubs (`ci-node` + gitleaks security) alongside our workflows — theirs handle generic lint/build, ours keep publish/ingest/eval. Their docs explicitly bless this split.

### Phase 2 — Cutover (one announced day)
1. Freeze merges on bbkemp repo; final mirror-push; run issues migration for real.
2. Repoint Vercel, Figma plugin, local remotes, DesignSync notes; flip ingest to production Neon.
3. Rename package scope (`@bbkemp/*` → org scope) in one PR: package.json names, imports, sign-in prototype import paths, README/CLAUDE.md, publish workflows.
4. bbkemp repo: archive with a pointer README (per decision D5). **Never delete.**

### Phase 3 — Org alignment (afterwards, incremental)
1. Contribute our skill library patterns to `mcp-skills` (it's near-empty scaffolding today; we arrive as the mature example).
2. Consider Copier retrofit for `copier update` support (D6).
3. Revisit MCP endpoint auth: org SSO (#231) becomes real now that an org exists.

## 5. Their Python/Jinja stack — what we adopt, what we don't

Their stacks: **Python + uv** (services, MCP), **Jinja via Copier** (repo scaffolding), **C# /.NET** (with `os-matrix: windows-latest` support), **TypeScript + Node** (vscode-extension). We fit their `typescript-node` lane natively — prettier/eslint/tsc/vitest are exactly what their `ci-node@v1` runs, and what our planned ESLint work (in-flight table) already intended.

- **Adopt:** their reusable CI for generic checks; Copier's Jinja templating **for the planned `new:component` scaffold** — the org standard scaffolder is Copier, and `copier update` propagates template evolution in a way Plop can't. This would replace the "Plop.js or Hygen" line in CLAUDE.md (decision D6).
- **Adopt later:** their C# lane if/when the WPF XAML library work (#228) grows real .NET builds — their `os-matrix` exists for exactly this.
- **Don't adopt:** rewriting any of our Node token pipeline in Python (Style Dictionary is the right tool and works), or their corpus/SQLite patterns (our markdown-in-git + pgvector corpus is reproducible from source; theirs currently isn't — their own README says so).
- **Steer clear of (their own known weaknesses):** shipping docs that claim more coverage than the artifact has; hardcoded special-case branches (their `_skip_*` debt) — our "consistency over cleverness" rule already forbids this; missing LICENSE files; Windows-first tooling that has caused UTF-16 file corruption for them.

## 6. Decisions — resolved by Bryan, 2026-07-30

| ID | Decision | **Resolution** |
|---|---|---|
| D1 | Repo visibility | **Internal.** Enables org reusable CI; corpus no longer world-readable. |
| D2 | Bench/prototypes hosting | **Vercel.** Static bench moves to Vercel hosting, decoupled from repo visibility; phone PWAs re-add once at the new URL. Old bbkemp Pages retire at cutover. |
| D3 | MCP endpoint access | **Keep Vercel + secret URL.** Model strengthens once the repo is internal. Org SSO (#231) stays a fast-follow, not on the critical path. |
| D4 | Names | **Repo: `tek-design-system`** (created 2026-07-30, internal, Bryan admin). **Packages: `@tek-product-ai/tek-sys-tokens`, `@tek-product-ai/tek-sys-ui`** — future packages follow the `tek-sys-*` name pattern (GitHub Packages forces the org scope; the `tek-sys` prefix carries the design-system identity). |
| D5 | Fate of bbkemp repo | **Archive with pointer README** at cutover. Never delete; history and PR record stay browsable. |
| D6 | Scaffolder | **Copier + Jinja** (org standard) for the future `new:component` generator. Supersedes the Plop.js/Hygen line in CLAUDE.md. |
| D7 | Review workflow | **Keep current Bryan+Claude flow until told otherwise.** Adapt if an org ruleset or admin says so; no preemptive change. |

### Migration log

- **2026-07-30** — `TEK-Product-AI/tek-design-system` created (internal) by `bryan-kemp_ralliant`; full history mirror-pushed (38 branches, 12 tags); default branch set to `main`, verified identical to bbkemp `main` (`ca2260f`). bbkemp repo remains canonical until Phase 2 cutover.

## 7. Explicitly out of scope

- Other bbkemp repos (`kemp-sys`, `user-portal` mirrors) — separate decisions, separate plans.
- Migrating PR history (stays readable on the archived repo).
- Any org-level changes to TEK-Product-AI itself (CODEOWNERS defaults, workflow templates) — we conform first, propose later.
