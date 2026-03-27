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
