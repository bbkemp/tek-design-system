# Tek Bench — DS Workstation

One shell that wraps the design system's micro tools, reference pages, and prototype
drops behind consistent, token-driven chrome. Instead of remembering six URLs under
`prototypes/`, open the Bench and pick from the rail.

> Naming note: `prototypes/bench/` is the bundled **bench-instrument prototype**
> (a Claude Design drop). *This* app is the workstation. Inside the Bench the drop
> is listed as "Bench (instrument prototype)".

## Run it

Serve the **repo root** (tools live all over the repo, so the server root must be
the repo root — VS Code Live Server on port 5500 is the canonical setup):

```
http://localhost:5500/apps/bench/
```

The shell links the real built tokens (`packages/tokens/dist/tek.complete.css`), and
the reference pages import both built packages, so build first:

```bash
npm run build:tokens
npm run build:ui
```

`bench.css` carries literal fallbacks for every token it uses, so the shell chrome
still renders before a build — but the reference pages won't.

## How it works

- `tools.js` — the registry. **Single source of truth** for what's on the Bench.
- `bench.js` — hash routing (`#/font-lab`), rail + home cards, one iframe at a time
  (drops are multi-MB; nothing loads until selected, nothing stays alive after switch).
- `bench.css` — chrome styled entirely from `--tek-*` tokens. Dark-only, matching the
  component library's chrome convention; tools theme themselves inside the frame.
- Toolbar: kind badge, source path, frame-width simulation (desktop / iPad / phone),
  reload, and open-standalone.

## Adding a tool

One entry in `tools.js`:

```js
{
  id: 'my-tool',                       // becomes the deep link #/my-tool
  group: 'tools',                      // 'tools' | 'reference' | 'drops'
  kind: 'tool',                        // 'tool' | 'reference' | 'drop'
  name: 'My Tool',
  desc: 'One sentence on what it does.',
  path: 'prototypes/my-tool/index.html', // repo-root-relative
  source: 'prototypes/my-tool/',
}
```

## Bench tool contract

The point of the Bench is that the micro tools converge instead of drifting. New
tools — and existing ones as they get touched — should meet this bar:

1. **Registered.** An entry in `tools.js`. If it's not on the Bench, it doesn't exist.
2. **Tokens always.** `var(--tek-*)` with a literal fallback for every color, spacing,
   radius, and font value ([CLAUDE.md](../../CLAUDE.md) hard constraint #2). Prefer
   linking the built CSS (`packages/tokens/dist/tek.complete.css`) like the reference
   pages do; a standalone page that must work with no build (e.g. GitHub Pages) may
   inline a mirror of the token block, keeping the `--tek-*` names — Font Lab is the
   precedent.
3. **Dark default.** `<html lang="en" data-theme="dark">`. Light mode is the tool's
   own toggle if it needs one.
4. **Fonts.** Geist (body/UI), Archivo (headings), Geist Mono (code/labels) — same
   Google Fonts loads as the reference pages.
5. **Framework-free.** Static HTML/CSS/JS, no build step, served from the repo root.
   Real `@bbkemp/ui` components where they fit (the sign-in pages are the model).
6. **Self-contained routes.** A tool must work standalone at its own URL *and* inside
   the Bench iframe — don't assume top-window.

Bundled prototype drops are exempt from 2–6: they're opaque artifacts (`kind: 'drop'`),
wrapped as-is, never hand-edited.
