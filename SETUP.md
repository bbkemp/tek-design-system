# Tek Design System — Setup Guide

Everything you need to get the design system running. The repo and packages already exist — this guide is for onboarding a new machine or developer.

---

## Prerequisites

- GitHub account with access to `bbkemp/tek-design-system`
- Node.js 18+ (`node --version` to check)
- Figma Desktop (for the Token Push plugin)

---

## Step 1 — Clone and install

```bash
git clone https://github.com/bbkemp/tek-design-system.git
cd tek-design-system
npm install
```

This installs dev dependencies (`style-dictionary`, `rollup`) from the public npm registry — no authentication needed for this step.

---

## Step 2 — Authenticate with GitHub Packages

The `@bbkemp/tokens` and `@bbkemp/ui` packages live on GitHub Packages. One-time auth per machine — required when installing these packages in a **consuming project**.

1. **github.com → Settings → Developer settings → Personal access tokens (classic)**
2. Generate a new token — name it `npm GitHub Packages`, check `read:packages`
3. Copy the token
4. Add to `~/.npmrc` (create if it doesn't exist):

```
@bbkemp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

You can now install packages in any project:
```bash
npm install @bbkemp/tokens @bbkemp/ui
```

---

## Step 3 — Verify GitHub Actions publishing is enabled

1. Repo → **Settings → Actions → General**
2. Under **Workflow permissions**, confirm **Read and write permissions** is selected
3. Save if needed

This is already configured — just verify it's active.

---

## Step 4 — Set up the Token Push plugin

Token Push is how Figma variable changes flow into the repo without touching a terminal.

### First time on a machine (import from manifest)

1. Open **Figma Desktop** and open the DS-v2 file
2. **Plugins → Development → Import plugin from manifest**
3. Navigate to `figma-token-push/manifest.json` in your local clone
4. The plugin appears under **Plugins → Development → Token Push**

**Authorize with GitHub:**
1. Generate a GitHub PAT: **Settings → Developer settings → Personal access tokens (classic)**
2. Name it `Token Push`, check `repo` scope, generate and copy it
3. Open Token Push in Figma → paste the PAT → **Save**

### After pulling a plugin update from git

No re-import needed. Just reload:
**Plugins → Development → Token Push → right-click → Reload**

Or use the reload button in the Figma dev toolbar if the plugin is open.

---

## How it works day-to-day

### Designer updates token values in Figma

1. Change the variable value in DS-v2
2. Open **Plugins → Development → Token Push**
3. Click **⬆ Push Tokens to GitHub**
4. All file rows turn green — including both `semantic/tokens.json` (dark) and `semantic/tokens.light.json` (light)
5. `publish-tokens.yml` fires automatically → `@bbkemp/tokens` gets a new version

Both modes export in one push — no need to switch the active mode in Figma.

### Developer consumes updated tokens

```bash
npm update @bbkemp/tokens
```

### Developer updates a component

1. Edit `packages/ui/src/`
2. Commit and push to `main`
3. `publish-ui.yml` fires automatically

---

## Viewing the preview pages

Open `component-library.html` or `signin.html` directly in your browser — no server needed. Both pages are self-contained: tokens and components are inlined, so they work from `file://`.

```bash
open component-library.html   # macOS
start component-library.html  # Windows
```

---

## File reference

```
tek-design-system/
├── packages/
│   ├── tokens/
│   │   ├── src/primitives/     raw value tokens (color, fonts, spacing, border)
│   │   └── src/semantic/
│   │       ├── tokens.json         dark mode (default)
│   │       └── tokens.light.json   light mode (auto-exported by Token Push)
│   └── ui/src/             Web Component TypeScript source
├── .github/workflows/
│   ├── publish-tokens.yml  triggers on tokens/src/** changes
│   └── publish-ui.yml      triggers on ui/src/** changes
├── figma-token-push/   Token Push plugin source
├── qt/                 Qt/QSS translation layer (not required for web)
├── component-library.html
└── signin.html
```

---

## Figma file reference

**DS-v2:** https://www.figma.com/design/3wbYstse9TYKlPtCPpZH5X/DS-v2

| Component | Node ID |
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
| Sign In — Mobile (dark) | 7134:600 |
| Sign In — Tablet (dark) | 7135:638 |
| Sign In — Desktop (dark) | 7134:598 |
| Sign In — Mobile (light) | 7148:1177 |
| Sign In — Tablet (light) | 7148:1185 |
| Sign In — Desktop (light) | 7148:1193 |
