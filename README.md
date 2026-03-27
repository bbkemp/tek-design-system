# Tek Design System

A token-driven, framework-agnostic design system for Tektronix. Built on Figma Variables → W3C design tokens → Web Components, with a fully automated publish pipeline.

---

## What's in this repo

```
tek-design-system/
├── packages/
│   ├── tokens/               @bbkemp/tokens — design token CSS + JSON
│   └── ui/                   @bbkemp/ui — Web Components
├── .github/
│   └── workflows/
│       ├── publish-tokens.yml    auto-publishes tokens on change (serialized)
│       └── publish-ui.yml        auto-publishes UI on change
├── figma-token-push/         Figma plugin v5 (local dev only, not published)
├── component-library.html    component reference — original
├── component-library-v2.html component reference — v2, fully token-driven
├── signin.html               sign in page — original
└── signin-v2.html            sign in page — v2, pixel-perfect to DS-v2
```

---

## Architecture

```
Figma Variables
      │
      │  (Token Push plugin v5 — one button)
      ▼
GitHub: packages/tokens/src/
      │
      │  (GitHub Actions: publish-tokens.yml fires automatically)
      ▼
Style Dictionary build
      │
      ├── dist/tek.tokens.css        CSS custom properties (semantic)
      ├── dist/tek.primitives.css    CSS custom properties (primitives)
      └── dist/tek.tokens.js         JS/TS export
      │
      │  (published to GitHub Packages — dist/ is NOT committed to repo)
      ▼
@bbkemp/tokens   ←   consumed by any project via npm
@bbkemp/ui       ←   Web Components built on top of tokens
```

---

## Token structure

Tokens live in `packages/tokens/src/` split into two layers:

### Primitives (`src/primitives/`)

Raw values — the palette. Not applied directly to components.

| File | Contents |
|---|---|
| `color.json` | Full color palette: brand, neutral scale, UI states |
| `spacing.json` | Spacing scale (`s00`–`s33`) mapped to px values |
| `border.json` | Border radius and border width values |

Example:
```json
{
  "colors": {
    "neutral": {
      "500": { "$value": "#454545", "$type": "color" }
    }
  }
}
```

### Semantic (`src/semantic/tokens.json`)

Alias tokens — reference primitives and carry meaning. What components actually use.

Example:
```json
{
  "color": {
    "selector": {
      "border": {
        "default": { "$value": "{colors.neutral.500}", "$type": "color" }
      }
    }
  }
}
```

All token files follow the [W3C DTCG format](https://tr.designtokens.org/format/) (`$value`, `$type`, `$description`).

---

## How to update tokens (designer workflow)

1. Make changes to variables in the **DS-v2 Figma file**
2. Open **Plugins → Development → Token Push**
3. Click **⬆ Push Tokens to GitHub**
4. Done — token files commit to `main` automatically and the build pipeline fires

The plugin commits directly to GitHub via the API. No terminal, no Token Studio, no manual steps.

> Figma collection names with emojis (e.g. 🧩 Primitives, 🐮 Semantic) are fully supported.

---

## How the publish pipeline works

Workflows trigger two ways:

- **Automatically** — when source files change on `main`
- **Manually** — Actions tab → Run workflow

`publish-tokens` uses a `concurrency` group to serialize runs — multiple simultaneous commits queue instead of racing.

### `publish-tokens.yml`
Triggers on `packages/tokens/src/**`. Runs Style Dictionary → bumps patch version → publishes `@bbkemp/tokens`.

### `publish-ui.yml`
Triggers on `packages/ui/src/**`. Runs Rollup → bumps patch version → publishes `@bbkemp/ui`.

Both use `secrets.GITHUB_TOKEN`. `dist/` is gitignored — built output lives only in the published npm package.

---

## Installing the packages

**1. Authenticate once per machine (required first):**

Add to `~/.npmrc`:
```
@bbkemp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Generate a PAT at github.com → Settings → Developer settings → Personal access tokens.
Required scope: `read:packages`

**2. Install:**
```bash
npm install @bbkemp/tokens @bbkemp/ui
```

---

## Using tokens

### CSS custom properties
```css
@import '@bbkemp/tokens/css';
```

Sets all `--tek-*` CSS custom properties on `:root`:
```css
.my-component {
  border-color: var(--color-selector-border-default);
  border-radius: var(--tek-borders-radius-02);
  padding: var(--tek-spacing-s05);
}
```

### JS/TS
```js
import tokens from '@bbkemp/tokens';
console.log(tokens['tek-spacing-s05']); // "8px"
```

---

## Using Web Components

```js
import '@bbkemp/ui';
```

Registers all custom elements globally:

```html
<tek-checkbox></tek-checkbox>
<tek-checkbox checked></tek-checkbox>
<tek-checkbox error></tek-checkbox>
<tek-checkbox disabled></tek-checkbox>

<tek-radio name="group"></tek-radio>
<tek-radio name="group" checked></tek-radio>

<tek-toggle></tek-toggle>
<tek-toggle checked></tek-toggle>

<tek-selector>
  <tek-checkbox></tek-checkbox>
  <tek-selector-label>Enable feature</tek-selector-label>
</tek-selector>

<tek-input label="Email" placeholder="you@example.com"></tek-input>
<tek-input label="Email" error helper="Invalid email"></tek-input>

<tek-button>Submit</tek-button>
<tek-button variant="secondary">Cancel</tek-button>
```

### Events
```js
document.querySelector('tek-checkbox').addEventListener('tek-change', (e) => {
  console.log(e.detail.checked); // true | false
});
```

### Attributes

| Attribute | Type | Components | Description |
|---|---|---|---|
| `checked` | boolean | checkbox, radio, toggle, selector | Checked/on state |
| `error` | boolean | all | Error state |
| `disabled` | boolean | all | Disabled, 40% opacity |
| `name` | string | radio | Radio group name |
| `label` | string | input | Field label |
| `placeholder` | string | input | Placeholder text |
| `helper` | string | input | Helper/error message |
| `variant` | string | button | `primary` (default) or `secondary` |

---

## Framework usage

### React
```jsx
import '@bbkemp/ui';

function MyForm() {
  return (
    <tek-selector onTek-change={(e) => console.log(e.detail.checked)}>
      <tek-checkbox></tek-checkbox>
      <tek-selector-label>Enable feature</tek-selector-label>
    </tek-selector>
  );
}
```

### Vue 3
```vue
<template>
  <tek-selector @tek-change="handleChange">
    <tek-toggle></tek-toggle>
    <tek-selector-label>Dark mode</tek-selector-label>
  </tek-selector>
</template>

<script setup>
import '@bbkemp/ui';
const handleChange = (e) => console.log(e.detail.checked);
</script>
```

---

## Overriding tokens

```css
:root {
  --color-selector-border-error: #ff6b6b;
  --tek-colors-brand-tek-blue: #0099cc;
}
```

---

## Figma source

**File:** DS-v2 · **Key:** `3wbYstse9TYKlPtCPpZH5X`

| Component | Figma node |
|---|---|
| Checkbox | 730:16982 |
| Radio | 780:10148 |
| Toggle | 780:10026 |
| SelectorLabel | 780:9896 |
| Selector | 7002:378 |

Code Connect mappings are live in the Figma file — props surface automatically in Dev Mode.

---

## Local development

```bash
npm install
npm run build --workspace=packages/tokens
npm run build --workspace=packages/ui
```

---

## Token Push plugin

Lives in `figma-token-push/`. Local Figma development plugin — not published to the Community.

**Version:** v5 — emoji-safe collection matching, dynamic primitive routing, mode-aware export.

**One-time setup:**
1. Figma Desktop → Plugins → Development → Import from manifest → `figma-token-push/manifest.json`
2. Generate a GitHub fine-grained PAT (Contents: Read and write on this repo)
3. Open the plugin → paste PAT → Save

**Usage:** Open plugin → Push Tokens to GitHub. Done.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the update process, review requirements, and versioning policy.
