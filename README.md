# Tek Design System

Monorepo for the `tek` design system — tokens and Web Components.

```
packages/
  tokens/   @tek/tokens   — CSS custom properties + JSON
  ui/       @tek/ui       — Web Components
```

---

## Setup

This is a private npm package. Before installing, authenticate with your registry:

```bash
# GitHub Packages
echo "@tek:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
```

---

## Install

```bash
npm install @tek/tokens @tek/ui
```

---

## Usage

### 1. Import tokens CSS

In your main CSS or entry point:

```css
@import '@tek/tokens/css';
```

This sets all `--tek-*` and `--color-selector-*` CSS custom properties on `:root`.

### 2. Register Web Components

```js
import '@tek/ui'
```

Importing this module registers all custom elements globally. After this, you can use them anywhere in your HTML.

### 3. Use components

```html
<!-- Checkbox -->
<tek-checkbox></tek-checkbox>
<tek-checkbox checked></tek-checkbox>
<tek-checkbox error></tek-checkbox>
<tek-checkbox disabled></tek-checkbox>

<!-- Radio -->
<tek-radio name="group"></tek-radio>
<tek-radio name="group" checked></tek-radio>
<tek-radio name="group" error></tek-radio>

<!-- Toggle -->
<tek-toggle></tek-toggle>
<tek-toggle checked></tek-toggle>
<tek-toggle error></tek-toggle>

<!-- SelectorLabel -->
<tek-selector-label>Please select</tek-selector-label>
<tek-selector-label checked>Please select</tek-selector-label>
<tek-selector-label error>Please select</tek-selector-label>

<!-- Selector (composite) -->
<tek-selector>
  <tek-checkbox></tek-checkbox>
  <tek-selector-label>Please select</tek-selector-label>
</tek-selector>

<tek-selector>
  <tek-radio name="group"></tek-radio>
  <tek-selector-label>Please select</tek-selector-label>
</tek-selector>

<tek-selector>
  <tek-toggle></tek-toggle>
  <tek-selector-label>Please select</tek-selector-label>
</tek-selector>
```

### 4. Listen for changes

```js
document.querySelector('tek-checkbox').addEventListener('tek-change', (e) => {
  console.log(e.detail.checked) // true | false
})

// Or delegate from a parent
document.addEventListener('tek-change', (e) => {
  console.log(e.target.tagName, e.detail.checked)
})
```

---

## Framework usage

### React

```jsx
import '@tek/ui'

function MyForm() {
  const handleChange = (e) => console.log(e.detail.checked)

  return (
    <tek-selector onTek-change={handleChange}>
      <tek-checkbox></tek-checkbox>
      <tek-selector-label>Enable feature</tek-selector-label>
    </tek-selector>
  )
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
import '@tek/ui'
const handleChange = (e) => console.log(e.detail.checked)
</script>
```

### Vanilla HTML

```html
<script type="module">
  import '@tek/ui'
</script>

<tek-selector>
  <tek-checkbox></tek-checkbox>
  <tek-selector-label>Subscribe</tek-selector-label>
</tek-selector>
```

---

## Attributes

| Attribute  | Type      | Default | Description                          |
|------------|-----------|---------|--------------------------------------|
| `checked`  | boolean   | false   | Checked/on state                     |
| `error`    | boolean   | false   | Error state — red border             |
| `disabled` | boolean   | false   | Disabled — not interactive, 40% opacity |
| `name`     | string    | —       | Radio group name (`tek-radio` only)  |

All attributes are boolean — presence = true, absence = false.

---

## Tokens

All visual values are CSS custom properties. Override any token to customize:

```css
:root {
  /* Change error color */
  --color-selector-border-error: #ff6b6b;

  /* Change checked state */
  --color-selector-background-checked: #ffffff;
  --color-selector-border-checked:     #cccccc;
}
```

Full token reference: see `packages/tokens/src/`

---

## Building

```bash
# Build everything
npm run build

# Build tokens only
npm run build:tokens

# Build UI only
npm run build:ui
```

---

## Publishing

```bash
# Tokens
cd packages/tokens
npm publish --access restricted

# UI
cd packages/ui
npm publish --access restricted
```

---

## Figma

Source of truth: `DS-v2` — [open in Figma](https://www.figma.com/design/3wbYstse9TYKlPtCPpZH5X/DS-v2)

| Component      | Figma node  |
|----------------|-------------|
| Checkbox       | 730:16982   |
| Radio          | 780:10148   |
| Toggle         | 780:10026   |
| SelectorLabel  | 780:9896    |
| Selector       | 7002:378    |
