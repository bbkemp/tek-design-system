# Tek Design System — Setup Guide

This guide walks you through getting the design system live on GitHub
with automatic token syncing from Figma. Follow the steps in order.
No prior experience with GitHub or terminals required beyond what's here.

---

## Step 1 — Create the GitHub Repository

1. Go to **github.com** and sign in
2. Click the **+** icon top right → **New repository**
3. Name it: `tek-design-system`
4. Set it to **Private**
5. Leave everything else unchecked
6. Click **Create repository**

---

## Step 2 — Upload This Package

1. On the new repo page, click **uploading an existing file**
2. Drag the entire contents of this zip into the upload area
3. At the bottom, write commit message: `Initial commit`
4. Click **Commit changes**

---

## Step 3 — Add Your Figma API Token

This lets GitHub pull variables from your Figma file automatically.

1. Go to **figma.com** → click your profile picture → **Settings**
2. Scroll to **Personal access tokens** → click **Generate new token**
3. Name it `GitHub Actions` → click **Generate token**
4. **Copy the token** — you won't see it again

Now add it to GitHub:
1. In your GitHub repo, go to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `FIGMA_ACCESS_TOKEN`
4. Value: paste your Figma token
5. Click **Add secret**
6. Add another secret:
   - Name: `FIGMA_FILE_KEY`
   - Value: `3wbYstse9TYKlPtCPpZH5X`
   *(this is your DS-v2 file key from the Figma URL)*

---

## Step 4 — Install Token Studio in Figma (push-button sync)

Token Studio lets you push variables directly from Figma to GitHub.

1. In Figma, open your DS-v2 file
2. Go to **Plugins → Browse plugins** → search **Token Studio**
3. Install it and open it
4. Click **Sync → GitHub**
5. Enter:
   - Repository: `yourGitHubUsername/tek-design-system`
   - Branch: `main`
   - File path: `packages/tokens/src`
   - Token: create a GitHub Personal Access Token at
     **github.com/settings/tokens** with `repo` scope
6. Click **Save**

Now whenever you make changes to variables in Figma, open Token Studio
and click **Push to GitHub**. The workflows will fire automatically.

---

## Step 5 — Enable GitHub Packages publishing

1. In your GitHub repo, go to **Settings → Actions → General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Click **Save**

This allows the Actions to publish `@tek/tokens` and `@tek/ui` automatically.

---

## Step 6 — Install the packages in your project

On any developer machine:

```bash
# Add to ~/.npmrc (one time per machine)
echo "@tek:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc

# Install
npm install @tek/tokens @tek/ui
```

---

## How it works day-to-day

### Designer changes a color in Figma:
1. Open Token Studio plugin in Figma
2. Click **Push to GitHub**
3. GitHub automatically:
   - Runs Style Dictionary build
   - Bumps `@tek/tokens` version
   - Publishes new version to GitHub Packages
4. Developers run `npm update @tek/tokens` to get the new values

### Developer changes a component:
1. Edit the TypeScript file in `packages/ui/src/`
2. Push to GitHub main branch
3. GitHub automatically:
   - Builds the Web Components
   - Bumps `@tek/ui` version
   - Publishes new version to GitHub Packages

### Automatic daily sync (optional, already configured):
- Every day at 9am UTC, GitHub pulls the latest Figma variables
- If anything changed, it commits the updated token JSON
- The publish workflow fires automatically from that commit

---

## Files reference

```
tek-design-system/
  packages/
    tokens/           @tek/tokens — CSS custom properties
    ui/               @tek/ui — Web Components
  .github/
    workflows/
      sync-figma-tokens.yml   Figma → GitHub sync
      publish-tokens.yml      Auto-publish tokens on change
      publish-ui.yml          Auto-publish UI on change
    scripts/
      transform-figma-variables.js
  signin.html         Sign In page preview
  component-library.html  Full component reference
  .npmrc              Registry config
```

---

## Figma file reference

DS-v2: https://www.figma.com/design/3wbYstse9TYKlPtCPpZH5X/DS-v2

| Component       | Node ID     |
|-----------------|-------------|
| Checkbox        | 730:16982   |
| Radio           | 780:10148   |
| Toggle          | 780:10026   |
| SelectorLabel   | 780:9896    |
| Selector        | 7002:378    |
| Input           | 7003:495    |
| Label           | 780:10209   |
| CharacterCount  | 7011:143    |
| TextLink        | 7011:150    |
| Button          | 202:2605    |
| Modal           | 7003:2158   |
| Footer          | 7003:2168   |
| Sign In page    | 3020:490    |
