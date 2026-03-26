# Tek Design System

A token-driven, framework-agnostic design system for Tektronix. Built on Figma Variables → W3C design tokens → Web Components, with a fully automated publish pipeline.

---

## What's in this repo

```
tek-design-system/
├── packages/
│   ├── tokens/          @bbkemp/tokens — design token CSS + JSON
│   └── ui/              @bbkemp/ui — Web Components
├── .github/
│   └── workflows/
│       ├── publish-tokens.yml   auto-publishes tokens on change
│       └── publish-ui.yml       auto-publishes UI on change
├── figma-token-push/    Figma plugin (local dev only, not published)
└── component-library.html   live component reference page
```

---

## Architecture

```
Figma Variables
      │
      │  (Token Push plugin — one button)
      ▼
GitHub: packages/tokens/src/
      │
      │  (GitHub Actions: publish-tokens.yml fires automatically)
      ▼
Style Dictionary build
      │
      ├── dist/tek.tokens.css        CSS custom properties
      ├── dist/tek.tokens.js         JS object export
      └── dist/tek.primitives.css    primitive-only CSS
      │
      │  (published to GitHub Packages)
      ▼
@bbkemp/tokens   ←   consumed by any project via npm
@bbkemp/ui       ←   Web Components built on top of tokens
```

---

## Token structure

Tokens live in `packages/tokens/src/` and are split into two layers:

### Primitives (`src/primitives/`)

Raw values. These are the palette — not applied directly to components.

| File | Contents |
|---|---|
| `color.json` | Full color palette: brand, neutral scale, UI states |
| `spacing.json` | Spacing scale (0–∞, logarithmic) |
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

Alias tokens — reference primitives and carry meaning. These are what components actually use.

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
4. Done — all 4 token files commit to `main` automatically and the publish pipeline fires

The plugin commits directly to GitHub via the API. No terminal, no Token Studio, no manual steps.

---

## How the publish pipeline works

Both workflows in `.github/workflows/` are triggered two ways:

- **Automatically** — when their source files change on `main` (e.g. after a token push)
- **Manually** — via the Actions tab → Run workflow button

### `publish-tokens.yml`
Triggers on changes to `packages/tokens/src/**`. Runs Style Dictionary, bumps the patch version, commits the version bump, and publishes `@bbkemp/tokens` to GitHub Packages.

### `publish-ui.yml`
Triggers on changes to `packages/ui/src/**`. Runs Rollup, bumps the patch version, and publishes `@bbkemp/ui` to GitHub Packages.

Both use `secrets.GITHUB_TOKEN` — no manual token setup needed for CI.

---

## Installing the packages

Both packages are published to GitHub Packages under the `@bbkemp` scope.

**1. Authenticate once (per machine):**

Add this to your `~/.npmrc`:
```
@bbkemp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Generate a PAT at: github.com → Settings → Developer settings → Personal access tokens
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

This sets all `--tek-*` CSS custom properties on `:root`. Use them anywhere:
```css
.my-component {
  border-color: var(--color-selector-border-default);
  border-radius: var(--border-radius-02);
}
```

### JS/TS
```js
import tokens from '@bbkemp/tokens';
console.log(tokens.color.selector.border.default); // #454545
```

---

## Using Web Components

```js
import '@bbkemp/ui';
```

Registers all custom elements globally. Then use them in any HTML or framework:

```html
<!-- Checkbox -->
<tek-checkbox></tek-checkbox>
<tek-checkbox checked></tek-checkbox>
<tek-checkbox error></tek-checkbox>
<tek-checkbox disabled></tek-checkbox>

<!-- Radio -->
<tek-radio name="group"></tek-radio>
<tek-radio name="group" checked></tek-radio>

<!-- Toggle -->
<tek-toggle></tek-toggle>
<tek-toggle checked></tek-toggle>

<!-- Selector (composite) -->
<tek-selector>
  <tek-checkbox></tek-checkbox>
  <tek-selector-label>Enable feature</tek-selector-label>
</tek-selector>

<!-- Input -->
<tek-input label="Email" placeholder="you@example.com"></tek-input>
<tek-input label="Email" error helper="Invalid email"></tek-input>

<!-- Button -->
<tek-button>Submit</tek-button>
<tek-button variant="secondary">Cancel</tek-button>
```

### Events
All interactive components emit a `tek-change` event:
```js
document.querySelector('tek-checkbox').addEventListener('tek-change', (e) => {
  console.log(e.detail.checked); // true | false
});

// Or delegate from a parent
document.addEventListener('tek-change', (e) => {
  console.log(e.target.tagName, e.detail);
});
```

### Component attributes

| Attribute | Type | Components | Description |
|---|---|---|---|
| `checked` | boolean | checkbox, radio, toggle, selector | Checked/on state |
| `error` | boolean | all | Error state — red border |
| `disabled` | boolean | all | Disabled — not interactive, 40% opacity |
| `name` | string | radio | Radio group name |
| `label` | string | input | Field label |
| `placeholder` | string | input | Placeholder text |
| `helper` | string | input | Helper/error message below field |
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

Every visual value is a CSS custom property. Override at any scope:

```css
:root {
  /* swap error color */
  --color-selector-border-error: #ff6b6b;

  /* swap brand color */
  --color-brand-tek-blue: #0099cc;
}
```

---

## Figma source

**File:** DS-v2
**Key:** `3wbYstse9TYKlPtCPpZH5X`
**Variables:** 3 collections — Primitives (96), Semantic (44), Figma Only (1, internal)

| Component | Figma node |
|---|---|
| Checkbox | 730:16982 |
| Radio | 780:10148 |
| Toggle | 780:10026 |
| SelectorLabel | 780:9896 |
| Selector | 7002:378 |

Code Connect mappings are written directly to the Figma file — component props surface automatically in Dev Mode.

---

## Local development

```bash
# install all workspace deps
npm install

# build tokens
npm run build --workspace=packages/tokens

# build UI
npm run build --workspace=packages/ui
```

Packages use npm workspaces. No Turborepo or special tooling required to build locally.

---

## Token Push plugin (Figma)

Lives in `/figma-token-push/`. This is a local Figma development plugin — it is not published to the Figma Community.

**Setup (one time):**
1. Figma Desktop → Plugins → Development → Import from manifest → select `figma-token-push/manifest.json`
2. Generate a GitHub fine-grained PAT with Contents: Read and write on this repo
3. Open the plugin, paste the PAT, click Save

**Usage:**
Open the plugin → Push Tokens to GitHub. That's it.

The plugin reads all Figma Variables, transforms them to W3C DTCG JSON, and commits directly to GitHub via the Contents API. No third-party services involved.
