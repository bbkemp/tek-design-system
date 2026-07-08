# Contributing

How to make changes to the Tek Design System — tokens, components, and the pipeline connecting them.

---

## Table of contents

- [How the pipeline works](#how-the-pipeline-works)
- [Updating token values](#updating-token-values)
- [Adding new token groups](#adding-new-token-groups)
- [Updating Web Components](#updating-web-components)
- [Review and approval](#review-and-approval)
- [Versioning](#versioning)
- [Working locally](#working-locally)

---

## How the pipeline works

```
Figma Variables (dark + light modes)
      │
      │  Token Push plugin — exports ALL Semantic modes in one push
      ▼
packages/tokens/src/
├── primitives/          ← raw values (fonts, spacing, border, color)
│   ├── color.json           managed by Token Push
│   ├── fonts.json           managed by Token Push
│   ├── spacing.json         managed by Token Push
│   └── border.json          managed by Token Push
└── semantic/            ← alias tokens (what components use)
    ├── tokens.json          dark mode — managed by Token Push
    └── tokens.light.json    light mode — managed by Token Push
      │
      │  publish-tokens.yml fires automatically
      ▼
Style Dictionary builds:
  tek.primitives.css        — raw values only (:root)
  tek.tokens.css            — dark semantic (:root)
  tek.tokens.light.css      — light semantic ([data-theme="light"])
  tek.tokens.combined.css   — dark + light semantic (all mode blocks)
  tek.complete.css          — primitives + dark + light (recommended single import)
      │
      ▼
@bbkemp/tokens (GitHub Packages)
```

`dist/` is gitignored. Never committed to the repo.

### Token layers

| Layer | Files | What's in it | Import path |
|---|---|---|---|
| Primitives | `primitives/*.json` | Raw values — scale, palette, families | `@bbkemp/tokens/primitives/css` |
| Semantic | `semantic/tokens*.json` | Alias tokens, mode-aware | `@bbkemp/tokens/css/combined` |
| **Complete** | _(post-build)_ | **Both layers in one file** | **`@bbkemp/tokens/css/complete`** |

Use `css/complete` unless you have a specific reason to split them.

---

## Updating token values

**Who:** Designer (no dev required)

1. Make the change in Figma Variables (DS-v2)
2. Get design sign-off
3. Open **Plugins → Development → Token Push**
4. Click **⬆ Push Tokens to GitHub**
5. All file rows turn green — `semantic/tokens.json` AND `semantic/tokens.light.json` both commit
6. Verify `Publish @bbkemp/tokens` passes in [GitHub Actions](https://github.com/bbkemp/tek-design-system/actions)
7. Notify consuming teams

```bash
npm update @bbkemp/tokens  # consuming project
```

---

## Adding new token groups

### New Primitive group

1. Add variables to the **Primitives** collection in Figma using `groupname/subgroup/name` pattern
2. Token Push auto-creates `src/primitives/{groupname}.json` — no plugin config changes needed
3. Push and verify Actions passed

**Routing examples:**
- `fonts/...` → `primitives/fonts.json`
- `motion/...` → `primitives/motion.json`
- `spacing/...` → `primitives/spacing.json`

### New Semantic tokens

1. Add to the **Semantic** collection using `group/subgroup/variant` pattern
2. Set values as aliases to primitives: `{colors.neutral.500}`
3. Add to **both** dark and light modes in Figma before pushing
4. Push — both `tokens.json` and `tokens.light.json` update in one operation

### Adding a new Semantic mode

The plugin auto-generates a file per mode using a slug derived from the mode name:
- Mode name `🌚 dark` → `tokens.json` (index 0, always)
- Mode name `🌝 light` → `tokens.light.json`
- Any future mode `🔴 high-contrast` → `tokens.high-contrast.json`

No plugin changes needed to add new modes.

### ⚠️ Adding a new Collection

Adding a new top-level Figma Variables collection beyond `Primitives` and `Semantic` requires a plugin update to `figma-token-push/code.js`. Open an issue or contact the maintainer.

---

## Updating Web Components

**Who:** Developer

1. Edit `packages/ui/src/`
2. Build and verify locally:
   ```bash
   npm run build --workspace=packages/tokens   # if tokens also changed
   npm run build --workspace=packages/ui
   # VS Code Live Server (recommended) or: python3 -m http.server 3000
   # then open prototypes/sign-in/index.html / prototypes/sign-in/signup.html / prototypes/component-library/index.html
   ```
3. Open a PR against `main`
4. Merge — `publish-ui.yml` fires automatically

The sign-in pages (`prototypes/sign-in/`) import from `packages/*/dist/` directly — if your component
change breaks those pages, you'll see it immediately during local testing.
`prototypes/component-library/index.html` currently uses inline component definitions for demo flexibility.

**Token changes first:** If a component change also needs new tokens, push tokens first and
confirm they published before updating the component.

**Token adherence:** Components must use CSS custom properties for all design values:
- Colors: `var(--tek-color-*)` — never hardcoded hex
- Typography: `var(--tek-fonts-family-*)`, `var(--tek-fonts-text-size-*)` — never hardcoded strings or px
- Spacing: `var(--tek-spacing-*)` — never hardcoded px in padding/gap/margin
- Border radius: `var(--tek-borders-radius-*)` — never hardcoded px
- Fallback values are required: `var(--tek-spacing-s05, 8px)` — for resilience when primitives aren't loaded

**Shadow DOM `:host` padding:** Components define their padding via `:host { padding: ... }` in the shadow DOM stylesheet. This works correctly — **unless** the consuming page uses a broad CSS reset like `* { padding: 0 }`. Light DOM `*` styles targeting a custom element host always override shadow DOM `:host` rules. See the CSS reset section in README for the correct pattern.

**`tek-modal` in flex containers:** `tek-modal` has a max-width of 360px and grows to fit its content. When placed inside a flex column container, always add `flex-shrink: 0` so the modal doesn't compress on short viewports — `overflow: clip` on the host will otherwise hide action buttons:

```css
tek-modal { flex-shrink: 0; }
```

**`width: 100%` on components inside `tek-modal`:** `tek-input`, `tek-label`, and slotted divs should have `style="display:block;width:100%"` or use a flex column wrapper at full width so they fill the modal's content area rather than using their component's default fixed widths.

---

## Building in Figma

**Who:** Designer, or AI agent producing a Figma file.

The same "tokens always" rule that governs code (see [Updating Web Components → Token adherence](#updating-web-components)) applies to every Figma write — at every property, on every node, every time. This is the core ethos of the design system, not a stylistic preference.

### The four-point rule

1. **Apply every existing variable to every property that can take one.** Spacing, border radius, colors, stroke weights — bind them. Raw numbers are forbidden where a variable exists.
2. **Every text node has a text style applied.** No raw `fontName + fontSize` pairs. If the library publishes `text/body/md/regular`, the text uses that style.
3. **Use the component. Every single time.** If `tek-button` is in the library, do not draw a frame that resembles a button. Variant overrides (`Type=Secondary`, `State=Hover`) are the right adjustments; replacing with a shape is not.
4. **If a variable or component doesn't exist:**
   - **Close to existing → defer.** 23px → use the 24px spacing token. A dropdown with a different caret glyph → still the dropdown component (the caret is an icon swap, not a justification for a custom build).
   - **Genuinely new → bind what you can, add to the additions audit.** Use every variable that fits, every component that applies, and flag the new token / component / variant proposal in `audits/design-additions/<date>-<slug>/<artifact>-redesign-additions.md` with `(PROPOSED: tek-…)` annotations both in the Figma layer name AND the audit `.md` table.

### Workflow

1. **Discovery before writing.** Before the first `use_figma` write, query the library: `get_libraries` (confirm DS-v2 subscription), `search_design_system` for `color`, `spacing`, `borders`, `fonts`, and for component names (`button`, `selector`, `input`, etc.), plus text-style searches (`body`, `heading`, `bold`, `mono` — NOT `typography`, which returns empty). Record the variable + style + component-set keys you'll need.

2. **Bind during writing**, not after. The "I'll bind it in a later pass" pattern is exactly how the failure mode happens. Bind the variable as you create the node — `setBoundVariableForPaint` for fills/strokes, `setBoundVariableForLayoutMode` for padding/gap/itemSpacing, `setBoundVariable` for cornerRadius/strokeWeight, `setTextStyleIdAsync` for typography.

3. **Verify before declaring done.** A frame is not complete until: every fill/stroke is bound, every layout property with a matching token is bound, every text node has a style applied, every Tek component is an instance (not a frame mimicking it), every deviation is flagged.

4. **Run `figma-design-qa`** ([skill](./.claude/skills/figma-design-qa/SKILL.md)) on the finished file to catch any binding misses before declaring complete.

### Enforcement layers (redundant on purpose)

| Layer | Where | What it does |
|---|---|---|
| Memory | `~/.claude/projects/.../memory/feedback_design_system_execution.md` | Personal-context reminder (per-agent) |
| Repo contract | This file + [`CLAUDE.md`](./CLAUDE.md) Hard Constraint 9 | Anyone in the repo reads it |
| Skill | [`.claude/skills/tek-figma-build/SKILL.md`](./.claude/skills/tek-figma-build/SKILL.md) | MANDATORY prerequisite — load before every `use_figma` call |
| Hook | [`.claude/settings.json`](./.claude/settings.json) PreToolUse on `use_figma` | Re-injects the rule into context on every write |
| Universal | [`bkai/CHARTER.md`](https://github.com/bbkemp/bkai/blob/main/CHARTER.md) Rule 22 + [`bkai/design-system.md`](https://github.com/bbkemp/bkai/blob/main/design-system.md) | Bryan's cross-LLM operating contract |

If any layer were the only enforcement, it would fail eventually (memory is per-agent; CLAUDE.md is per-session; the skill is per-tool-call). All five together is the design.

### Why this is so emphatic

The receipts: building 4 Riddick screens on 2026-04-22 with 100% inline hex / no components / no variables, and the Tek Express setup-dut + 9 screens on 2026-06-04 with partial binding (colors yes; spacing/radius/typography no). Both were caught after the fact by Bryan. Both happened despite the prescriptive memory file existing. **A rule that doesn't fire is the same as no rule.** The redundant layers above are what makes it fire.

---

## Figma Code Connect

Code Connect links Figma component instances to their source files so designers see real code in the Dev Panel.

**Current mappings** (managed via Figma MCP in Claude Code — every component below has at least one mapping in the Figma store):

| Figma component | Source file | Label |
|---|---|---|
| Button | `packages/ui/src/button/button.ts` | Web Components |
| CharacterCount | `packages/ui/src/character-count/character-count.ts` ⚠️ | Web Components |
| Checkbox | `packages/ui/src/checkbox/checkbox.ts` | Web Components |
| Footer | `packages/ui/src/footer/footer.ts` | Web Components |
| Form / Input | `packages/ui/src/input/input.ts` | Web Components |
| Label | `packages/ui/src/input/input.ts` ⚠️ | Web Components |
| Modal | `packages/ui/src/modal/modal.ts` | Web Components |
| Radio | `packages/ui/src/radio/radio.ts` | Web Components |
| Selector | `packages/ui/src/selector/selector.ts` | Web Components |
| SelectorLabel | `packages/ui/src/selector-label/selector-label.ts` | Web Components |
| Sign In (all viewports) | `prototypes/sign-in/index.html` | Web Components |
| TextLink | `packages/ui/src/text-link/text-link.ts` | Web Components |
| Toggle | `packages/ui/src/toggle/toggle.ts` | Web Components |

⚠️ See [README → Known Code Connect issues](./README.md#known-code-connect-issues--todo) for two outstanding mapping bugs (Label points at the wrong source; CharacterCount `componentName` is misspelled). Both require Figma-UI-side disconnect before they can be re-added via MCP.

**Adding or updating a mapping:** follow the [`code-connect` skill](./.claude/skills/code-connect/SKILL.md). The skill captures: required MCP tools, naming conventions, single-vs-batch flow, and doc-table sync.

**Naming convention for new mappings:** use the component's TypeScript class name or page filename as `componentName`, always with `label: "Web Components"`.

---

## Review and approval

| Change | Review | Approver |
|---|---|---|
| Token value update | Design sign-off | Design lead |
| New primitive group | Design sign-off | Design lead |
| New semantic tokens | Design sign-off | Design lead |
| Web Component change | PR review | Developer |
| New collection | Discussion first | Both |
| Breaking change | PR + stakeholder sign-off | Both |

Breaking changes = any rename or removal of existing token keys or CSS custom properties. Advance notice to consuming teams required.

---

## Versioning

Patch version bumped automatically on every publish.

| Change | Bump |
|---|---|
| Token value update | patch |
| New tokens added | patch |
| Token renamed/removed | minor or major — discuss first |

---

## Working locally

The branching, commit, PR, and merge conventions for this repo are codified in **[docs/workflow.md](./docs/workflow.md)** — that's the source of truth, including the trigger phrases used when working with AI assistants. Read it once; the rest of this section is the short version.

All code changes go through branches and pull requests — never commit directly to `main`.

```bash
git checkout main && git pull origin main
git checkout -b type/your-change-name   # type ∈ feat, fix, chore, docs, refactor

# Make changes, then:
git add <specific files>
git commit -m "type(scope): description"
git push -u origin type/your-change-name
```

Open a PR. Squash-merge when ready. Branches auto-delete on merge.

After merging, update your local main:
```bash
git checkout main && git pull origin main
```

### Plugin updates

After editing files in `figma-token-push/`, follow the standard flow above (typically `chore/...` or `feat/...`). After the PR merges, **reload** in Figma Desktop:
**Plugins → Development → Token Push → right-click → Reload**

No re-import from manifest needed unless you're setting up a new machine.

---

## Who to talk to

| Area | Contact |
|---|---|
| Figma variables + token structure | Bryan |
| Token Push plugin | Bryan |
| Web Components | Developer |
| GitHub Actions / pipeline | Bryan |
| Breaking changes | Both |
