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
   python3 -m http.server 3000                 # then open signin.html / component-library.html
   ```
3. Open a PR against `main`
4. Merge — `publish-ui.yml` fires automatically

The preview pages (`signin.html`, `signup.html`, `component-library.html`) import from
`packages/*/dist/` directly — no inline component definitions to keep in sync. If your
component change breaks a page, you'll see it immediately during local testing.

**Token changes first:** If a component change also needs new tokens, push tokens first and
confirm they published before updating the component.

**Token adherence:** Components must use CSS custom properties for all design values:
- Colors: `var(--tek-color-*)` — never hardcoded hex
- Typography: `var(--tek-fonts-family-*)`, `var(--tek-fonts-text-size-*)` — never hardcoded strings or px
- Spacing: `var(--tek-spacing-*)` — never hardcoded px in padding/gap/margin
- Border radius: `var(--tek-borders-radius-*)` — never hardcoded px
- Fallback values are required: `var(--tek-spacing-s05, 8px)` — for resilience when primitives aren't loaded

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
