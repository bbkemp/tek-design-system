# Contributing

This document covers how to make changes to the Tek Design System — tokens, components, and the pipeline that connects them.

---

## Table of contents

- [How the pipeline works](#how-the-pipeline-works)
- [Updating token values](#updating-token-values)
- [Adding new token groups](#adding-new-token-groups)
- [Updating Web Components](#updating-web-components)
- [Review and approval process](#review-and-approval-process)
- [Versioning](#versioning)
- [Who to talk to](#who-to-talk-to)

---

## How the pipeline works

```
Figma Variables
      │
      │  Token Push plugin (one button from inside Figma)
      ▼
packages/tokens/src/          ← W3C DTCG token JSON
      │
      │  publish-tokens.yml fires automatically on commit
      │  (serialized via concurrency group — no race conditions)
      ▼
Style Dictionary build
      │
      ├── dist/tek.tokens.css       CSS custom properties (semantic)
      ├── dist/tek.primitives.css   CSS custom properties (primitives)
      └── dist/tek.tokens.js        JS/TS export
      │
      ▼
@bbkemp/tokens published to GitHub Packages
```

Changes to token source files on `main` automatically trigger a build and publish. No manual publish steps. `dist/` is gitignored — it is never committed to the repo.

---

## Updating token values

Use this when changing an existing token's value — e.g. adjusting a color, spacing value, or border radius.

**Who:** Designer (no dev required)

**Steps:**

1. Make the change in Figma Variables (DS-v2 file)
2. Get sign-off from the relevant stakeholder
3. Open the Token Push plugin: **Plugins → Development → Token Push**
4. Click **⬆ Push Tokens to GitHub**
5. Confirm all file rows show ✓
6. Verify `Publish @bbkemp/tokens` passes in [GitHub Actions](https://github.com/bbkemp/tek-design-system/actions)
7. Notify consuming teams that a new version is available

**Consuming teams update by running:**
```bash
npm update @bbkemp/tokens
```

---

## Adding new token groups

Use this when adding an entirely new category of tokens — e.g. `typography`, `motion`, `dimension`.

**Who:** Designer + optional dev review

### Adding a new Primitive group

1. In Figma, add a new group inside the **Primitives** collection using the naming pattern `groupname/subgroup/tokenname`
   - Example: `typography/font-size/sm`, `typography/font-size/md`
2. The plugin automatically creates `packages/tokens/src/primitives/{groupname}.json`
   - `typography` → `primitives/typography.json`
   - No plugin configuration changes needed
3. Run Token Push
4. Verify Actions passed
5. New CSS custom properties are live: `--tek-typography-font-size-sm`

**Note:** Collection names with emojis (e.g. 🧩 Primitives) are fully supported — the plugin strips them automatically.

### Adding new Semantic tokens

1. In Figma, add tokens to the **Semantic** collection using the pattern `group/subgroup/variant`
   - Example: `form/padding/sm`
   - Set the value as an alias to a primitive: `{spacing.s05}`
2. Run Token Push — semantic tokens always land in `semantic/tokens.json`
3. Verify Actions passed
4. New CSS custom properties are live: `--tek-form-padding-sm`

### ⚠ Adding a new Collection

Adding a new top-level Figma Variables collection (beyond `Primitives` and `Semantic`) requires a plugin update. Open an issue or contact the maintainer before doing this.

---

## Updating Web Components

Use this when changing component structure, styles, or which tokens a component references.

**Who:** Developer

**Steps:**

1. Edit the relevant component in `packages/ui/src/`
2. Test locally:
   ```bash
   npm run build --workspace=packages/ui
   ```
3. Open a pull request against `main` with a clear description of what changed and why
4. Get at least one review
5. Merge — `publish-ui.yml` fires automatically

**If a component change also requires a token change**, do the token push first, confirm it published, then update the component.

---

## Review and approval process

| Change type | Review required | Who approves |
|---|---|---|
| Token value update | Design sign-off | Design lead |
| New primitive group | Design sign-off | Design lead |
| New semantic tokens | Design sign-off | Design lead |
| Web Component change | PR review | Developer |
| New collection | Discussion first | Design lead + Developer |
| Breaking change | PR review + stakeholder sign-off | Design lead + Developer |

**Breaking changes** are any changes that rename or remove existing token keys or CSS custom properties. These require advance notice to consuming teams before merging.

---

## Versioning

Packages are versioned automatically. The GitHub Actions workflow bumps the patch version on every publish.

| Change | Version bump | Example |
|---|---|---|
| Token value update | patch | `0.2.1` → `0.2.2` |
| New tokens added | patch | `0.2.1` → `0.2.2` |
| Token renamed/removed | minor or major | discuss first |

If a change is breaking, bump the version manually in `package.json` before merging and document what changed in a comment on the PR.

---

## Working with the repo locally

```bash
# Pull latest
cd ~/kemp-sys/tek-design-system
git pull origin main

# Make changes, then push
git add .
git commit -m "chore: description of change"
git push
```

For plugin updates — after replacing files in `figma-token-push/`:

```bash
git add figma-token-push/
git commit -m "chore: update token push plugin"
git push
```

Then re-import the plugin in Figma Desktop from its existing path — no need to remove and re-add if the folder location hasn't changed.

---

## Who to talk to

| Area | Contact |
|---|---|
| Figma variables + token structure | Design lead (Bryan) |
| Token Push plugin | Design lead (Bryan) |
| Web Components | Developer |
| GitHub Actions / pipeline | Design lead (Bryan) |
| Breaking changes | Both |
