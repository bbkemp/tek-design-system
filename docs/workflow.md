# Workflow — Bryan + AI assistants

The script for shipping changes to this repo. The whole point is **predictability**: same trigger phrases, same actions, every time. Bryan stays out of the GitHub UI; AI assistants handle git and PRs end-to-end via the GitHub MCP.

This is the source of truth. CLAUDE.md and CONTRIBUTING.md point here.

---

## Trigger phrases

What Bryan says → what the assistant does. No variance.

| Bryan says | Assistant does |
|---|---|
| **"let's push it"** / **"ship it"** | If on `main`, cut a branch named `type/short-kebab` from current changes. Stage only files touched by this work. Commit with a Conventional Commits message. Push. Open a PR via GitHub MCP using the standard PR template. Reply with the PR URL and a one-line summary. |
| **"status"** / **"where's the PR"** | Check PR status via GitHub MCP (CI checks, review state, mergeable). Reply with one line. |
| **"merge it"** | Squash-merge the open PR via GitHub MCP. Branch auto-deletes. `cd` to the main repo root. `git checkout main && git pull origin main`. Wait for direction on the next branch — do not start new work unprompted. *(Since 2026-07-27 this phrase is optional for the assistant's own PRs — see Merge policy below — but it still works, and it's still the only way to merge a held PR.)* |
| **"hold it"** / **"let me review"** | Do not merge the open PR until Bryan says "merge it", regardless of the default merge policy. |
| **"new branch for X"** | `cd` to main repo root. `git checkout main && git pull origin main`. Cut `type/x-name`. |
| **"park it"** / **"wip"** | Commit current state with a `wip:` prefix, push the branch, **do not open a PR**. Reply with branch name + commit SHA. |
| **"undo that"** | Soft-reset the last local-only commit and restage as directed. Confirm before any destructive action. Never run on a pushed commit without explicit confirmation. |

Anything outside this table: ask before acting.

---

## Conventions (no variance)

### Branch names

`type/short-kebab-summary`

| Type | When |
|---|---|
| `feat` | New capability — component, token group, plugin feature, skill |
| `fix` | Bug fix — code, doc, or pipeline |
| `chore` | Tooling, deps, CI, plugin updates, no user-facing change |
| `docs` | Docs only — README, CONTRIBUTING, CLAUDE.md, `/docs/**`, skill SKILL.md |
| `refactor` | Code restructure with no behavior change |

Examples: `feat/character-count-aria`, `fix/modal-flex-shrink`, `chore/update-token-push`, `docs/workflow`, `refactor/input-shadow-styles`.

The `figma-token-push/` plugin is **not** a special case — same flow, typically `chore/...` or `feat/...` depending on what changed.

### Commit messages

Conventional Commits, scoped, single line:

```
type(scope): summary in imperative mood
```

- `scope` is the area touched: a package (`tokens`, `ui`), a component (`button`, `modal`), or a top-level area (`skills`, `tek-system-core`, `figma-token-push`).
- Scope is optional when the change is repo-wide (`docs: ...`, `chore: ...`).
- No body unless the why is non-obvious. Never narrate the diff.

Examples — all from this repo's history:

```
feat(skills): document-screens — codify the locked screen format
docs(tek-system-core): replace integrated appendix with Notes for Bill
docs: reconcile Code Connect tables with actual Figma mapping store
fix(modal): add flex-shrink guidance for column containers
chore(figma-token-push): bump plugin version
```

### PR template

Title: same as the commit message.

Body:

```markdown
## Summary
- one-to-three bullets on what changed and why

## Test plan
- [ ] checklist of how to verify
```

For docs-only PRs the test plan can be `- [ ] read it`. For UI changes, list the specific pages or components to open in Live Server.

### Merge style

- **Squash merge.** One clean commit per PR on `main`.
- **Branch auto-deletes** on merge.

### Merge policy (updated 2026-07-27)

The explicit "merge it" gate is retired for the assistant's **own PRs**: once the work is verified (CI green, evidence gathered per the no-confidence-without-proof rule), the assistant squash-merges without waiting for the phrase, then pulls `main`.

The assistant still **holds for Bryan's word** when any of these apply:

- The PR contains **open questions**, flagged decisions, or a scope reduction
- The PR touches **publish/release workflows, secrets, or repo settings**
- The PR was **authored by someone else** (e.g. Broc, or a Claude GitHub Action run Bryan hasn't reviewed)
- There are **merge conflicts** (existing rule: stop and report)
- Bryan said **"hold it"**, **"let me review"**, or "park it"

"Merge it" always works and always wins over a hold.
- **No force-push** to any branch.
- **No direct commits to `main`.** Ever.

---

## Lifecycle of a change

1. Bryan asks for something.
2. Assistant does the work on the current branch. If we're on `main`, the first edit triggers cutting a `type/...` branch — assistant doesn't ask, just does it.
3. Bryan says **"let's push it"**. Assistant commits, pushes, opens the PR. Replies with PR URL.
4. (Optional) Bryan says **"status"**. Assistant reports CI + review state in one line.
5. Assistant squash-merges its own PR once verified (see Merge policy), then `cd`s to main repo root and pulls `main`. If the PR is held (open questions, someone else's PR, "hold it"), Bryan's **"merge it"** is what merges it.
6. Assistant waits for the next instruction. Does **not** start new work or cut a new branch unprompted.

That's the whole loop.

---

## Edge cases

**Hotfix.** Same flow. There is no fast path — the moment we add an exception, predictability breaks. Use `fix/...`, push, merge.

**Multiple things at once.** One branch per concern. If a request expands mid-work, ask whether to stay on this branch or split — don't silently bundle.

**Build/test failure on push.** Don't push a known-broken branch. Fix locally first. If broken state needs to be shared, use **"park it"** — the `wip:` prefix signals "do not merge."

**PR already open, more changes needed.** Commit to the same branch and push. PR updates automatically. No new PR.

**Worktrees.** After merge, `cd` to the main repo root before `git checkout main`. Never `git checkout main` from inside a worktree directory.

**Conflicts on merge.** Stop. Report the conflict files. Wait for direction — do not auto-resolve.

---

## Why this exists

Bryan is learning git. Every session that flails on git mechanics burns trust and time. This doc removes the variance: there are six phrases, five branch types, one commit format, one PR template, one merge style. Everything else is a question to ask, not a decision to improvise.

When the org-wide standard ships under `@tektronix/.github`, this doc is the seed for it.
