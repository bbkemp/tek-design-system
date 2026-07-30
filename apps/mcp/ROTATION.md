# Runbook: rotate the MCP endpoint secret link

**When to run this:** the endpoint URL leaked (committed, posted, screenshotted, sent to the wrong person), or you suspect it might have. Also fine to run on a schedule as hygiene. Target time: **under 5 minutes**.

The URL *is* the credential (`https://<host>/<MCP_PATH_SECRET>/mcp`). Rotation = new path secret + redeploy + re-distribute. Old link starts 404ing the moment the new deploy is live.

## Steps

### 1. Generate a new secret (10 s)

```bash
openssl rand -hex 24
```

### 2. Update Vercel and redeploy (2 min)

1. Vercel dashboard → the MCP project → **Settings → Environment Variables**.
2. Edit `MCP_PATH_SECRET` → paste the new value → save for **Production** (and Preview if set there).
3. **Deployments** → latest production deployment → ⋯ → **Redeploy** (env-var changes need a redeploy to take effect).
4. Verify: old URL now returns 404; new URL responds. (A wrong secret 404s indistinguishably from a nonexistent route — that's fail-closed working as designed.)

### 3. Re-distribute the new URL (2 min)

Every place the old URL lives needs the new one. Known distribution list — **keep this list current; it is the actual security boundary**:

| Where | What to update |
|---|---|
| This repo's local `.mcp.json` (gitignored, per machine) | Paste new URL (`.mcp.json.example` shows the shape) |
| Claude desktop / claude.ai connector settings | Update the Tek connector URL |
| Hermes Agent config (Bryan's second MCP client) | Update endpoint URL |
| GitHub repo secret `TEK_MCP_URL` (used by `eval-gate.yml` CI) | Settings → Secrets and variables → Actions → update |
| Any person the link was shared with | Send the new link over a private channel (not email threads that forwarded the old one) |

> CI note: until `TEK_MCP_URL` is updated, every PR touching `apps/mcp/**` will fail its eval gate with connection errors — that's the reminder, not a retrieval regression.

### 4. Confirm (30 s)

- Run one tool call against the new URL (any MCP client, or the eval harness: `TEK_MCP_URL=<new url> npm run eval --workspace=apps/mcp`).
- Old URL → 404. Done.

## What rotation does NOT cover

- `DATABASE_URL`, `VOYAGE_API_KEY`, `COHERE_API_KEY` — separate credentials, rotate at their providers if they leaked too.
- Data already exfiltrated during exposure. The corpus currently holds public-manual content by policy, which bounds the damage — see the hosting-tier gate discussion (issue #264) before that policy changes.

## If you can't reach Vercel

Deleting the `MCP_PATH_SECRET` env var entirely also works as an emergency stop: no secret configured → every request 404s (fail closed).
