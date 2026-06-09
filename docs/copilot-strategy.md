# Copilot Strategy

How Tek leverages GitHub Copilot — the CLI, the cloud coding agent, agentic review — without building a parallel system to maintain. The thesis from [tek-system-core.md](./tek-system-core.md) holds here unchanged: **codified, versioned, queryable systems compound, and AI tools amplify the system they're given.** Copilot is one more consumer of that system, not a new system. The work is almost entirely *plumbing the context we already have* into Copilot's ingest points, then using Copilot where it's genuinely better than a human in the loop.

The single most important framing: **we do not write a "Copilot system."** We extend `export-skills` to emit Copilot's formats, and Copilot inherits everything — the same way Cursor, Cline, Windsurf, and Aider already do. The knowledge is the asset; the format is today's container ([tek-system-core → Notes for Bill](./tek-system-core.md#appendix-notes-for-bill)).

## Contents

- [Where we already are](#where-we-already-are) — the honest starting line
- [The Copilot surface area](#the-copilot-surface-area) — four products, one mental model
- [Part 1 — Ground Copilot in the system we have](#part-1--ground-copilot-in-the-system-we-have)
- [Part 2 — Make GitHub stop feeling like a slog](#part-2--make-github-stop-feeling-like-a-slog)
- [Part 3 — Figma → component library, web and WPF](#part-3--figma--component-library-web-and-wpf)
- [Part 4 — Copilot CLI beyond writing components](#part-4--copilot-cli-beyond-writing-components)
- [Part 5 — The RAG push](#part-5--the-rag-push)
- [Part 6 — The multi-repo move](#part-6--the-multi-repo-move)
- [Part 7 — CD](#part-7--cd)
- [Part 8 — What else](#part-8--what-else)
- [Sequenced rollout](#sequenced-rollout)
- [Open questions](#open-questions)
- [References](#references)

---

## Where we already are

Before any recommendation, the honest map of what's on disk today — because the strategy is shaped by it.

- **Cross-tool skill mirroring already exists.** `export-skills` mirrors the 16 canonical `.claude/skills/` into `.cursor/rules/`, `.windsurf/rules/`, `.continue/rules/`, `.clinerules/`, `AGENTS.md`, **and `.github/instructions/*.instructions.md`**. `skills-sync.yml` fails CI if any mirror drifts. This is the spine of the whole Copilot strategy and it's already load-bearing.
- **Copilot reads two of those formats today, for free.** `AGENTS.md` is read natively by Copilot CLI. `.github/instructions/*.instructions.md` is Copilot's *path-specific* instruction format. So Copilot is already partially grounded — we just never pointed it at the repo on purpose.
- **Two gaps in grounding, both narrow.** There is no repo-wide `.github/copilot-instructions.md` (the Copilot equivalent of `CLAUDE.md`), and there are no Copilot custom-agent profiles (`.github/agents/*.md`). Closing both is an `export-skills` change, not a new system.
- **Token pipeline is multi-platform and solid.** Figma Variables → Style Dictionary v3 → CSS/JS/Qt **and XAML**. The WPF token layer already exists: `wpf/Tek.Tokens.*.xaml` plus `Tek.Telerik.Overrides.xaml`. Qt is fully wired (`TekTokens.h`, QSS, QML).
- **The component library is the soft spot.** 12 vanilla Web Components, single- or two-file each, shadow DOM. **No tests, no Storybook, no Plop scaffold.** WPF has *tokens but zero components*. This is the greenfield the user wants to harden.
- **RAG is well-structured.** `rag/sources/<product>/` with `screens/`, `docs/`, `hardware/`, `api/`, `code/`, write-once durable markdown, fed by six `document-*` skills. Raw inputs in `uploads/` are gitignored.
- **CI is minimal-but-clean.** `publish-tokens.yml`, `publish-ui.yml`, `figma-mcp-watch.yml`, `skills-sync.yml`. No reusable workflows, no `CODEOWNERS`, no `dependabot.yml`, no PR/issue templates, no `.github/actions/`.

Read that list as: the contract layer (tokens, skills, corpus conventions) is mature; the *generation and enforcement* layer for components is thin. Copilot's leverage lands almost entirely on the thin parts.

---

## The Copilot surface area

Four distinct products wear the "Copilot" name. Keeping them separate is the whole game — each has a different ingest point and a different job.

| Surface | What it is | Where it runs | Reads our context from |
|---|---|---|---|
| **Copilot CLI** (`copilot`) | Agentic coding agent in the terminal. Plan mode (`shift+tab`), autopilot, `/model`, `/fleet` for parallel subagents, native MCP. | Local terminal, **or headless in CI** via `copilot -p "…"` | `AGENTS.md`, `.github/instructions/`, MCP servers, custom agent profiles |
| **Coding agent (cloud)** | Assign an issue to `@copilot`; it runs in GitHub Actions, makes a branch, opens a PR, iterates on `@copilot` mentions. | GitHub-hosted Actions runner | Same instruction files + `.github/workflows/copilot-setup-steps.yml` for env, firewall allowlist for MCP |
| **Agentic code review** | PR reviewer that gathers full project context and can hand fixes straight to the coding agent. | GitHub PR UI / `request_copilot_review` | Repo instructions + the diff |
| **IDE agent mode** | In-editor agent (VS Code / JetBrains). | Developer's IDE | Same instruction files |

One mental model: **all four read the same instruction files.** Ground them once via `export-skills`, and every surface gets Tek-aware on the same commit. The differences are *where the work happens* (your terminal, a cloud runner, a PR) and *how much autonomy* you grant.

The two we should lean on hardest:
- **Headless `copilot -p`** is the scriptable unit. It's the thing that turns a skill into a cron job, a CD step, or a batch operation. `COPILOT_GITHUB_TOKEN` authenticates it in CI.
- **The cloud coding agent** is the "make GitHub less of a slog" lever — it absorbs the low-to-medium-complexity tier (the boilerplate that makes the repo feel like a chore) as background PRs you review, not author.

---

## Part 1 — Ground Copilot in the system we have

This is step zero and it gates everything else. An ungrounded Copilot produces the exact slop the design system exists to prevent — hardcoded hex, native `<button>`, React reflexes. Grounded, it inherits the hard constraints.

**1.1 — Extend `export-skills` to emit the two missing Copilot formats.** One PR to `scripts/export-skills.mjs`:

- **`.github/copilot-instructions.md`** — the repo-wide instruction file, Copilot's direct analog of `CLAUDE.md`. Generate it from the same source that feeds `AGENTS.md`: the hard constraints (Web Components only, tokens always, Figma is source of truth, TS strict, no local publishes, Conventional Commits), plus pointers to `docs/workflow.md` and `CONTRIBUTING.md`. This is the single highest-leverage file we are currently missing.
- **`.github/agents/*.md`** — custom agent profiles. Start with two that map to skills we already have:
  - `tek-component-author.md` — scoped to `packages/ui/`, encodes the component pattern (shadow DOM, `tek-*` naming, token-only CSS, `tek-click`/`tek-change` events, `observedAttributes`). Built from `code-design-qa` + the button reference.
  - `tek-corpus-ingest.md` — scoped to `rag/`, encodes the `document-*` locked formats.

Then add `.github/copilot-instructions.md` and `.github/agents/**` to the `skills-sync.yml` matcher so drift fails CI, exactly like the other mirrors. **Net effect:** Copilot becomes a first-class citizen of the same one-source-many-formats discipline, and it can never silently fall out of sync.

**1.2 — Wire the MCP servers Copilot should see.** Copilot CLI and the cloud agent both support MCP. Two that matter immediately:
- **Figma MCP** — same server Claude uses for `get_variable_defs`, `get_code_connect_map`, `get_design_context`. This is what makes "build from the Figma node, don't assume the code is right" (Hard Constraint 3) enforceable in Copilot, not just Claude.
- **The Tek corpus MCP** (when it lands — see Part 5) — so Copilot auto-retrieves grounded answers about products and components.

For the cloud agent, remote MCP servers need the **firewall allowlist** (repo → Settings → Copilot → Coding agent) and any setup deps installed in `copilot-setup-steps.yml`. The firewall does *not* gate MCP traffic itself, only the agent's Bash tool — worth knowing when debugging.

**1.3 — Port the Figma build guardrail.** Today `.claude/settings.json` injects the four-point Figma build rule as a `PreToolUse` hook before `use_figma`. Copilot has no identical hook, but the same content belongs in the `tek-component-author` agent profile and in a `.github/instructions/figma-build.instructions.md` scoped with `applyTo` to Figma-touching work. Same rule, Copilot's container.

---

## Part 2 — Make GitHub stop feeling like a slog

The slog is the boilerplate tier and the GitHub-UI tax. Copilot's coding agent is purpose-built for exactly the low-to-medium-complexity, well-tested-codebase work that drains time without being interesting. The move is to push that tier to background PRs and keep humans on the judgment calls.

**2.1 — Issue → PR for the boilerplate tier.** Assign an issue to `@copilot`; it branches, works on an Actions runner, and opens a PR you review. Good first candidates here, all real backlog from the in-flight list:
- "Add `.test.ts` for every component using the existing pattern" (there are zero tests today — perfect agent work).
- "Split `<name>.ts` into `<name>.styles.ts` / `<name>.ts`" per the planned per-component split.
- "Backfill ADRs under `/docs/adr/` from the decisions enumerated in tek-system-core.md."
- Dependency bumps, changelog grooming, doc cross-link fixes.

The agent excels at these *because the repo is internally consistent* — the same property that made the Day 2 refactor land. Consistency is the multiplier; we already have it.

**2.2 — Agentic code review as a design-system gate.** Copilot's reviewer (shipped March 2026) reads full project context and can pass fixes to the coding agent. Point it at our existing QA skills: a PR that adds a component gets auto-reviewed against `code-design-qa` rules (hardcoded colors, raw px, native elements where `tek-*` exists, shadow-DOM traps). This is the cheap version of the CI gate in [tek-system-core → DEV System layer 5](./tek-system-core.md#dev-system) — review-time enforcement before we've built the AST lint rules.

**2.3 — Close the GitHub-hygiene gaps that make the repo feel ad-hoc.** These are one-time, high-relief additions the coding agent can mostly do itself:
- `CODEOWNERS` — route component PRs to the maintainer team, RAG PRs to corpus owners.
- `.github/dependabot.yml` — stop manual dep-watching.
- PR/issue templates — encode `docs/workflow.md` so every PR arrives in the house format (the agent and humans both fill them).
- A `triage` automation: start a coding-agent session on `issue.opened` for issues labeled `good-first-agent-task`.

**2.4 — Keep the trigger-phrase workflow.** `docs/workflow.md`'s "let's push it / merge it" discipline stays the human interface. Copilot operates *inside* it — it authors PRs; the merge gate, branch naming, and Conventional Commits are unchanged. Don't let Copilot merge to `main`; Hard Constraint 6 holds for every agent.

---

## Part 3 — Figma → component library, web and WPF

The user's core ask: a cutting-edge component library, cleanly updated from Figma or Code Connect, producing pro-ready code — starting with web and WPF. The token half of this is *done and excellent*. The component half needs three things, and Copilot accelerates each.

**3.1 — Scaffold-first, always (the missing Plop layer).** Right now a new component is hand-built, which is exactly when drift enters. Ship `npm run new:component <Name>` (Plop or Hygen) that emits the full set — `<name>.ts`, `<name>.styles.ts`, `<name>.test.ts`, `<name>.stories.ts`, the `index.ts` export, and the registry line in `src/index.ts` — with every convention pre-encoded (shadow DOM, token-only CSS, `tek-*` tag, typed events). This is the code-side analog of the Token Push plugin: **enforce the system at the moment of creation.** Once it exists, both humans *and* every Copilot surface generate components *through* it instead of inventing structure — the scaffold becomes the spec the agent fills in.

**3.2 — Code Connect as the Figma↔code contract.** We already have the `code-connect` skill and the Figma MCP `get_code_connect_map` / `add_code_connect_map` tools. Make Code Connect mapping a required step in the component definition of done: every `tek-*` component maps to its Figma node, so design-to-code handoff (in Copilot, Cursor, or Claude) starts from a real mapping instead of a guess. This directly serves "cleanly updated from Figma or CC."

**3.3 — The WPF greenfield — biggest single opportunity.** Today: XAML *tokens* exist (`Tek.Tokens.*.xaml`, `Tek.Telerik.Overrides.xaml`), zero *components*. The pattern that worked for web works here:

- **Define the contract first.** A WPF component is a XAML `Style` / `ControlTemplate` (or a Telerik control + override) that consumes only `{DynamicResource TekBrush*}` / `{StaticResource Tek*}` keys — never a literal color or size. That's the WPF restatement of "tokens always." `DynamicResource` is what makes runtime dark/light theme swaps work, mirroring our `data-theme` story.
- **Mirror the web component set.** Button, input, checkbox, radio, toggle, modal — same 12, same `tek-*` semantics, same Figma nodes. One PRD/spec per component drives *both* the web and WPF implementations, so they can't diverge.
- **Let Copilot do the translation, grounded.** This is an ideal headless-`copilot -p` or coding-agent job: "Given `packages/ui/src/button/button.ts`, the Figma node, and `wpf/Tek.Tokens.Dark.xaml`, produce a WPF `Button` style that binds the same tokens." The token ResourceDictionary *is* the grounding that makes the output pro-ready instead of hallucinated hex.
- **Decide the topology now.** Either a new workspace path in this monorepo or (preferred, per the polyrepo plan) a `@tektronix/ui-wpf` package once the org exists. Either way it publishes from CI only, same as everything else.

**3.4 — Storybook / explorer.** Stand up `apps/storybook` as the component explorer and visual integration surface, alongside the existing `signin.html` / `component-library.html` reference pages. Storybook stories are also the substrate for the visual-regression CI gate (Part 7) and give Copilot concrete usage examples to pattern-match. Generating stories for the existing 12 is textbook coding-agent work.

The through-line: **the design system's job is to make every property traceable to a token; Copilot's job is to fill in the mechanical translation between surfaces.** Web and WPF become two renderings of one tokenized contract, not two codebases to keep in sync by hand.

---

## Part 4 — Copilot CLI beyond writing components

`copilot -p "…"` is a headless agent you can drop into any script, hook, or workflow with `COPILOT_GITHUB_TOKEN`. That makes it a general automation primitive, not just a coding tool. Where it earns its place:

- **Skill execution as batch jobs.** Our `document-*` and QA skills are markdown procedures. `copilot -p` can run them non-interactively over a folder — e.g. a job that runs `code-design-qa` across `packages/ui/` on every push and posts the report. The skill is the program; `copilot -p` is the interpreter.
- **`/fleet` for fan-out work.** Migrations that touch many files in the same shape — "add the test file to all 12 components," "add Code Connect to every unmapped node" — are exactly what parallel subagents converging on one result are for.
- **PR triage and labeling.** A scheduled headless run that reads new issues, classifies them against our taxonomy, and labels `good-first-agent-task` vs `needs-human` — feeding the Part 2.3 triage loop.
- **Release-note and changelog synthesis** from Conventional Commits at publish time.
- **The Figma MCP watch is the template.** `figma-mcp-watch.yml` already runs a scheduled job that diffs an external surface and opens an issue. The same shape, with `copilot -p` doing the reasoning step, generalizes to "watch X, summarize the delta, open an issue" for any source.

Guardrail: headless autonomy raises the blast radius. Keep `copilot -p` jobs scoped to a branch, never granting merge, and gate anything that writes to `main` behind the same PR review every human commit gets.

---

## Part 5 — The RAG push

The user is about to make a big push on the corpus. Copilot makes that push cheaper at both ends — ingestion and consumption — and the progressive-disclosure design from [tek-system-core → Notes for Bill](./tek-system-core.md#appendix-notes-for-bill) is the architecture to hold onto.

**5.1 — Ingestion as headless agent jobs.** The `document-pdf`, `document-screens`, `document-hardware`, `document-api`, `document-repo`, `document-walkthrough` skills are already the canonical ingest procedures. Today they run interactively. Wrap them in `copilot -p` (or coding-agent sessions) so a new drop in `uploads/` triggers a PR that adds the chunked, frontmatter'd markdown — same locked formats, same write-once discipline, no human babysitting the mechanical chunking. The human reviews the corpus PR; the agent does the toil.

**5.2 — `document-repo` on every release is the cleanest win.** It already produces dated, accumulating code snapshots (`code/<date>-<sha>/`). Make it a CD step: every `publish-ui` / `publish-tokens` release also opens a corpus-snapshot PR. The corpus stays current with the shipped system automatically, and historical snapshots accrue for "how did this work in version N" queries.

**5.3 — Expose the corpus as MCP, then Copilot retrieves for free.** This is corpus Phase 3 in the architecture doc, and it's the unlock for *every* Copilot surface: once the corpus is an MCP server, Copilot CLI, the cloud agent, and IDE mode all auto-retrieve grounded answers (cited, per the corpus contract) without anyone pasting context. Build the retrieval layer with **progressive disclosure** — cheap top-level index always available, mid-level summaries on relevance, deep specs only on demand — so Copilot pays for context it needs and isn't drowned in noise. The corpus's `index.md` files are already the top-level layer; the MCP server is the drill-down.

**5.4 — Evals in CI.** The architecture doc's 50-question eval harness should run as a CI gate on corpus changes (a `run-evals` reusable action). Copilot can author and maintain the eval set as a coding-agent task. Without it, RAG quality is invisible until users complain; with it, every corpus PR — agent- or human-authored — proves it didn't regress retrieval.

**The shape to keep:** the corpus is the asset, MCP is the surface, Copilot is one consumer among many (the sales persona, the "help me pick a scope" tool, internal training). Don't build Copilot-specific corpus access; build the MCP once and let Copilot be a client.

---

## Part 6 — The multi-repo move

The polyrepo topology is already designed ([tek-system-core → System Architecture](./tek-system-core.md#system-architecture)). The risk a multi-repo world introduces is **context fragmentation** — N repos each needing the same grounding, drifting independently. Our existing mirroring discipline is precisely the antidote, scaled to the org.

**6.1 — `@tektronix/.github` is the distribution mechanism for Copilot context.** The org-wide `.github` repo already in the plan should carry the *canonical* Copilot config:
- Org-default `copilot-instructions.md`, `AGENTS.md`, and agent profiles that every new repo inherits.
- **Workflow templates** for the coding-agent setup (`copilot-setup-steps.yml`), the publish flow, and the eval/corpus jobs — so a new repo starts Copilot-ready from commit one.
- The `export-skills` discipline promoted to org level: skills live once, mirror to every tool *and* every repo.

**6.2 — Reusable workflows kill the per-repo CI copy-paste.** Write `publish-package`, `run-evals`, `update-corpus`, and `copilot-review` once in `@tektronix/.github/actions`, call them from every repo. This is the CI restatement of "compose, don't duplicate." Today's `publish-tokens.yml` and `publish-ui.yml` are 90% identical — they're the first refactor into a single reusable `publish-package` workflow.

**6.3 — Coding agent per repo, MCP unifier across them.** Each product repo (`@tektronix/<product>`) gets its own Copilot coding agent scoped to that repo, grounded by the inherited org config. The cross-repo intelligence — "this component implements that PRD, emits these analytics events" — comes from the **MCP unifier**, the runtime layer that exposes design system + PRDs + ADRs + corpus + analytics as one queryable surface. Copilot, as an MCP client, queries the unifier and gets the whole graph regardless of which repo it's working in. That's how multi-repo stops being fragmentation and becomes the composable graph the architecture is aiming at.

**6.4 — Consistency is the cross-repo contract.** Same branch strategy, same Conventional Commits, same protected `main`, same instruction files everywhere. The reason AI output works on *this* repo is internal consistency; the reason it'll work across *fifty* repos is org-level consistency. Standardize once in `.github`, inherit everywhere.

---

## Part 7 — CD

CD is where Copilot's headless mode and the existing CI-only-publish discipline meet. The constraint is sacred: **no human holds the publish token; packages publish only from CI on push to `main`** (Hard Constraints 5 & 6). Nothing below weakens that.

- **Reusable publish workflow.** Collapse `publish-tokens.yml` + `publish-ui.yml` into one `publish-package` reusable workflow (Part 6.2). Less surface to drift, one place to harden.
- **Changesets for the monorepo.** As the package count grows (tokens, ui, icons, qt, ui-wpf), Changesets coordinates version bumps and changelogs across packages — the planned versioning tool. Copilot can open the changeset PR as part of a feature branch.
- **`copilot-setup-steps.yml` is CD-adjacent infrastructure.** It defines the cloud agent's environment — preinstalled deps, larger runners, proxy/firewall config, MCP setup. Treat it as a first-class CI file: it's what makes the coding agent's PRs build against the *real* toolchain (npm workspaces, Style Dictionary, rollup) instead of a guessed one. Get it right once and every agent PR is reproducible.
- **Corpus-snapshot-on-release** (Part 5.2) and **release-note synthesis** (Part 4) are CD steps that keep the corpus and changelog current without manual work.
- **CD-gated quality.** Visual regression (Playwright/Chromatic snapshots over Storybook), a11y (axe-core), and bundle budgets as merge gates — the validation layer from the DEV system. These are what let agent-authored PRs be reviewed at the architectural level instead of line-by-line, which is the only way agent throughput is safe at scale.

---

## Part 8 — What else

- **Security review in the loop.** Copilot's agentic review plus secret-scanning on every PR — cheap, and it matters more once agents are opening PRs autonomously.
- **The "how do I fit into the system?" skill** ([tek-system-core → Notes for Bill](./tek-system-core.md#appendix-notes-for-bill)) should emit a Copilot agent profile too. A product person, a hardware designer, or a firmware engineer pointing Copilot at their repo should get role-aware onboarding from the same markdown source. Contribution stops being "ask Bryan."
- **Skills as the temp MCP layer — Copilot edition.** The architecture doc's point that static knowledge ships *now* as a multi-format skill bundle includes Copilot. We don't wait for the MCP buildout; `export-skills` → Copilot formats gives every Copilot user the same baseline today, and the migration to real MCP later is mechanical, not a rewrite.
- **Model flexibility is the point, not a compromise.** The decoupled-MCP thesis means a team that "just wants to use Copilot because we already have it" is fully supported — same context, same constraints, different face. No lock-in, no parallel spend. Copilot, Cursor, and Claude all drink from one well.
- **Risk register.** Headless autonomy raises blast radius; never grant merge to an agent. External content (issue/PR bodies, CI logs, corpus inputs) is untrusted — agents acting on it need the same skepticism a human reviewer brings. Keep the human merge gate (`docs/workflow.md`) as the non-negotiable backstop for every surface.

---

## Sequenced rollout

Ordered so each step delivers value alone and de-risks the next — same discipline as the architecture doc's sequencing.

| # | Step | Effort | Unlocks |
|---|---|---|---|
| 1 | Extend `export-skills` → `.github/copilot-instructions.md` + `.github/agents/*.md`; add to `skills-sync.yml` | ~0.5 day | Every Copilot surface is Tek-grounded and drift-proof |
| 2 | Wire Figma MCP (and later corpus MCP) into Copilot CLI + cloud agent; firewall allowlist | ~0.5 day | "Build from Figma, not from guesses" enforceable in Copilot |
| 3 | `npm run new:component` scaffold (Plop) emitting the full file set | ~1–2 days | Drift-proof component creation for humans and agents |
| 4 | First coding-agent backlog: tests + Storybook stories for the 12 components | ~ongoing, background | Test/explorer gap closed; CI gates become possible |
| 5 | `CODEOWNERS`, `dependabot.yml`, PR/issue templates, triage automation | ~1 day | GitHub stops feeling ad-hoc |
| 6 | WPF component layer: spec-per-component, token-bound XAML, Copilot-translated | ~ongoing | Web + WPF as two renderings of one contract |
| 7 | Headless `copilot -p` ingestion jobs for `document-*` skills; `document-repo` on release | ~2–3 days | RAG ingestion de-toiled; corpus stays current automatically |
| 8 | Corpus MCP server with progressive disclosure + CI eval gate | ~ Phase 3 of corpus | Copilot (and every tool) auto-retrieves grounded, cited context |
| 9 | `@tektronix/.github`: org-default Copilot config + reusable `publish-package`/`run-evals`/`copilot-review` workflows | ~ with org migration | Multi-repo inherits grounding; no per-repo copy-paste |
| 10 | CD hardening: Changesets, `copilot-setup-steps.yml`, visual-regression / a11y / bundle gates | ~ with validation layer | Agent-authored PRs safe to merge at architectural review level |

Steps 1–5 are doable now, in this repo, before the org migration. 6–8 are the component-and-corpus push the user is asking about. 9–10 land with the polyrepo move.

---

## Open questions

- **WPF component topology.** New workspace in this monorepo now, or wait for `@tektronix/ui-wpf` in the org? Leaning: prototype here, publish from the org. Needs a call.
- **Telerik dependency.** The WPF token layer already maps Telerik Fluent keys. Are WPF components Telerik-themed controls + Tek overrides, or from-scratch `ControlTemplate`s? Changes how much Copilot can translate vs. build new. Needs a design decision before Step 6.
- **Copilot license tier.** Coding agent and agentic review availability depend on the plan. Confirm what the team has before committing to the issue→PR workflow in Part 2.
- **Where the corpus MCP runs.** Vercel function, small VM, or org infra — and the ZDR/enterprise posture for any non-public docs (flagged in the corpus stack notes). Gates Step 8.
- **Agent merge authority.** Confirmed stance: no agent merges to `main`, ever. Documented here so it's not relitigated per surface.

---

## References

GitHub's own docs, current as of June 2026:

- [GitHub Copilot CLI](https://github.com/features/copilot/cli) · [About Copilot CLI](https://docs.github.com/copilot/concepts/agents/about-copilot-cli) · [Using Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
- [Running Copilot CLI programmatically](https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically) · [Programmatic reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
- [About the coding agent](https://docs.github.com/copilot/concepts/agents/coding-agent/about-coding-agent) · [Assigning and completing issues with the coding agent](https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/)
- [Customize the agent environment (`copilot-setup-steps.yml`)](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment) · [Customize the agent firewall](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall)
- [Extend the coding agent with MCP](https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp) · [Enhance agent mode with MCP](https://docs.github.com/en/copilot/tutorials/enhance-agent-mode-with-mcp)
- [Custom agents configuration](https://docs.github.com/en/copilot/reference/custom-agents-configuration)

This doc is the working contract for Copilot in Tek. When a step here lands, update this file in the same PR — same rule as [CLAUDE.md](../CLAUDE.md).
