# Token Push — Figma Plugin

One-button export of all Figma Variables → W3C DTCG token JSON → committed directly to `bbkemp/tek-design-system`.

## Files

```
manifest.json   — plugin config
code.js         — main thread (reads variables, handles storage)
ui.html         — UI thread (button, GitHub API commit)
```

## Install in Figma

1. Open Figma Desktop
2. Menu → Plugins → Development → Import plugin from manifest…
3. Select the `manifest.json` file from this folder
4. Plugin appears under Plugins → Development → Token Push

## First-time setup

1. Run the plugin (Plugins → Development → Token Push)
2. Generate a GitHub PAT:
   - github.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens
   - Scope: `bbkemp/tek-design-system` → Repository permissions → Contents: **Read and write**
3. Paste the PAT into the plugin field → click **Save**
   - PAT is stored in Figma's `clientStorage` (sandboxed to this plugin only, never transmitted anywhere except the GitHub API)

## Usage

1. Run the plugin
2. Click **⬆ Push Tokens to GitHub**
3. Done — `packages/tokens/src/tokens.json` is updated on `main`

The existing `publish-tokens` GitHub Action fires automatically on that commit.

## Token structure

Flat W3C DTCG JSON, nested by collection → variable name path:

```json
{
  "primitives": {
    "color": {
      "blue": {
        "500": {
          "$value": "#3b82f6",
          "$type": "color"
        }
      }
    }
  }
}
```

Aliases are written as DTCG reference syntax: `{collection.path.to.token}`

## Target branch (release workflow)

The **Target branch** field chooses where pushes land (default `main`, remembered between sessions; the dropdown lists live branches once a PAT is saved).

- **`main`** — production: `publish-tokens.yml` fires and publishes `@bbkemp/tokens` immediately.
- **A working/release branch** (e.g. `claude/release-v2.03`) — tokens land on the open PR instead; **packages do NOT publish** until the PR merges to main. The plugin shows a warning row when a non-main branch is selected, and refuses to push to a branch that doesn't exist on GitHub.

This supports the release cycle: design freely on a `vX.XX (working)` Figma page, push tokens into the release PR as you go, and production only updates at merge.
