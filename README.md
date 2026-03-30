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
│       ├── publish-tokens.yml    auto-publishes tokens on change
│       └── publish-ui.yml        auto-publishes UI on change
├── figma-token-push/         Token Push Figma plugin (local dev, not published)
├── img/                      Static assets for preview pages
│   ├── IconLogo.svg          Tek icon mark
│   ├── TypeLogo.svg          TekCloud wordmark
│   └── bg-mov.mp4            Background video
├── component-library.html    interactive component reference (live web components)
├── signin.html               sign in page (responsive, mobile-first, web components)
├── SETUP.md                  first-time setup guide
└── CONTRIBUTING.md           how to make changes
```

---

## Architecture

```
Figma Variables
      │
      │  Token Push plugin — one button from inside Figma
      ▼
GitHub: packages/tokens/src/
      │
      │  publish-tokens.yml fires automatically on commit
      ▼
Style Dictionary build
      │
      ├── dist/tek.tokens.css        CSS custom properties (semantic)
      ├── dist/tek.primitives.css    CSS custom properties (primitives)
      └── dist/tek.tokens.js         JS/TS export
      │
      │  published to GitHub Packages — dist/ is NOT committed to repo
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
| `spacing.json` | Spacing scale mapped to px values |
| `border.json` | Border radius and border width values (none → 01–16 → full) |

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
4. Done — token files commit to `main` and the build pipeline fires automatically

The plugin commits directly to GitHub via the API. No terminal, no third-party tools, no manual steps.

> Figma collection names with emojis are fully supported — the plugin strips them automatically.

---

## How the publish pipeline works

Workflows trigger two ways:

- **Automatically** — when source files change on `main`
- **Manually** — Actions tab → select workflow → Run workflow

`publish-tokens` uses a `concurrency` group to serialize runs — multiple simultaneous commits queue instead of racing.

### `publish-tokens.yml`
Triggers on changes to `packages/tokens/src/**`. Runs Style Dictionary → bumps patch version → publishes `@bbkemp/tokens`.

### `publish-ui.yml`
Triggers on changes to `packages/ui/src/**`. Runs Rollup → bumps patch version → publishes `@bbkemp/ui`.

Both use `secrets.GITHUB_TOKEN`. `dist/` is gitignored — built output lives only in the published package.

---

## Installing the packages

**1. Authenticate once per machine:**

Add to `~/.npmrc`:
```
@bbkemp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Generate a PAT at github.com → Settings → Developer settings → Personal access tokens (classic). Required scope: `read:packages`

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

Registers all 11 custom elements globally:

```html
<!-- Selectors -->
<tek-checkbox></tek-checkbox>
<tek-checkbox checked></tek-checkbox>
<tek-checkbox error></tek-checkbox>
<tek-checkbox disabled></tek-checkbox>

<tek-radio name="group"></tek-radio>
<tek-radio name="group" checked></tek-radio>

<tek-toggle></tek-toggle>
<tek-toggle checked></tek-toggle>

<tek-selector type="checkbox" label="Enable feature"></tek-selector>
<tek-selector type="radio" name="group" label="Channel A"></tek-selector>
<tek-selector type="toggle" label="Live mode"></tek-selector>

<!-- Form -->
<tek-input placeholder="Enter value"></tek-input>
<tek-input state="error" value="bad input"></tek-input>
<tek-input height="double" placeholder="Notes..."></tek-input>
<tek-character-count count="72" max="140"></tek-character-count>

<!-- Actions -->
<tek-button>Sign In</tek-button>
<tek-button variant="secondary">Cancel</tek-button>
<tek-button inactive>Unavailable</tek-button>
<tek-text-link href="/forgot">Forgot password?</tek-text-link>

<!-- Layout -->
<tek-modal>
  <span slot="header">Sign In</span>
  <div slot="input-blocks">...</div>
  <div slot="action-blocks">...</div>
</tek-modal>
<tek-footer>©2026 Tektronix. All rights reserved.</tek-footer>
```

### Events
```js
document.querySelector('tek-checkbox').addEventListener('tek-change', (e) => {
  console.log(e.detail.checked); // true | false
});

document.querySelector('tek-input').addEventListener('tek-input', (e) => {
  console.log(e.detail.value);
});

document.querySelector('tek-button').addEventListener('tek-click', () => {
  console.log('clicked');
});
```

### Attributes

| Attribute | Type | Components | Description |
|---|---|---|---|
| `checked` | boolean | checkbox, radio, toggle, selector | Checked/on state |
| `error` | boolean | checkbox, radio, toggle, selector, input | Error state |
| `disabled` | boolean | all interactive | Non-interactive, reduced opacity |
| `name` | string | radio, selector | Radio group name |
| `type` | string | selector | `checkbox`, `radio`, or `toggle` |
| `label` | string | selector | Label text |
| `placeholder` | string | input | Placeholder text |
| `value` | string | input | Field value |
| `state` | string | input, character-count | `default`, `focus`, `filled`, `disabled`, `error` |
| `height` | string | input | `single` (default), `double`, `triple` |
| `count` | number | character-count | Current character count |
| `max` | number | character-count | Maximum character count |
| `variant` | string | button | `primary` (default) or `secondary` |
| `inactive` | boolean | button | Non-interactive, visually muted |
| `href` | string | text-link | Link destination |
| `target` | string | text-link | Link target (e.g. `_blank`) |

---

## Shadow DOM cascade — developer note

Web Components use shadow DOM. Chrome allows the page-level `* { padding: 0 }` CSS reset to bleed into custom element `:host` styles at equal specificity. Any component that declares padding on `:host` must use `!important` to guarantee shadow DOM wins.

This affects: `tek-modal`, `tek-footer`, `tek-button`, `tek-input`. The `!important` declarations in `packages/ui/src/` are intentional and correct — do not remove them.

```css
/* In shadow DOM component styles — required, not optional */
:host { padding: 32px !important; }
```

---

## Responsive layout — container queries

Preview pages use CSS container queries, not viewport media queries. The page container establishes the containment context:

```css
.page-wrap {
  container-type: inline-size;
  container-name: page;
}
```

Breakpoints match the Figma `Cxx` container variables:

| Variable | Value | Viewport |
|---|---|---|
| `--tek-container-xs` | 384px | Mobile (base) |
| `--tek-container-sm` | 640px | Tablet |
| `--tek-container-xl` | 1280px | Desktop |

```css
@container page (min-width: 640px)  { /* tablet  */ }
@container page (min-width: 1280px) { /* desktop */ }
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
| Input | 7003:495 |
| CharacterCount | 7011:143 |
| TextLink | 7011:150 |
| Button | 202:2605 |
| Modal | 7003:2158 |
| Footer | 7003:2168 |
| Sign In — Mobile | 7134:600 |
| Sign In — Tablet | 7135:638 |
| Sign In — Desktop | 7134:598 |

Code Connect mappings are live in the Figma file — component usage surfaces automatically in Dev Mode.

---

## Local development

```bash
npm install
npm run build --workspace=packages/tokens
npm run build --workspace=packages/ui
```

---

## Token Push plugin

Lives in `figma-token-push/`. A local Figma development plugin — not published to the Figma Community.

**One-time setup:**
1. Figma Desktop → Plugins → Development → Import plugin from manifest → select `figma-token-push/manifest.json`
2. Go to github.com → Settings → Developer settings → Personal access tokens (classic) → generate token with `repo` scope
3. Open the plugin in Figma → paste the PAT → Save

**Daily usage:** Open plugin → Push Tokens to GitHub. Watch the per-file status rows turn green.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the update process, review requirements, and versioning policy.
