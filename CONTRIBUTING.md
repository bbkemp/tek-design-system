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
├── semantic/tokens.json         ← dark (mode index 0)
└── semantic/tokens.light.json   ← light (mode index 1)
      │
      │  publish-tokens.yml fires automatically
      ▼
Style Dictionary → @bbkemp/tokens (GitHub Packages)
```

`dist/` is gitignored. Never committed to the repo.

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
2. Build and test locally:
   ```bash
   npm run build --workspace=packages/ui
   ```
3. Also update the matching inline definition in `component-library.html` and `signin.html` (these should stay in sync with `packages/ui/src/`)
4. Open a PR against `main`
5. Merge — `publish-ui.yml` fires automatically

**Token changes first:** If a component change also needs new tokens, push tokens first and confirm they published before updating the component.

**Typography:** Components use CSS custom properties for all type values (`--tek-fonts-*`). Hardcoded px sizes or font strings in components are a bug.

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

```bash
git pull origin main

# Make changes
git add .
git commit -m "type: description"
git push
```

### Plugin updates

After editing files in `figma-token-push/`:
```bash
git add figma-token-push/
git commit -m "chore: update Token Push plugin"
git push
```

Then **reload** in Figma Desktop:
**Plugins → Development → Token Push → right-click → Reload**

No re-import from manifest needed unless you’re setting up a new machine.

---

## Who to talk to

| Area | Contact |
|---|---|
| Figma variables + token structure | Bryan |
| Token Push plugin | Bryan |
| Web Components | Developer |
| GitHub Actions / pipeline | Bryan |
| Breaking changes | Both |
