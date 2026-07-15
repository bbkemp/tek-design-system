# Tek MCP Endpoint

The hosted MCP server over the design system and corpus — the "Tek MCP Endpoint" from the meta-architecture diagram in [docs/tek-system-core.md](../../docs/tek-system-core.md). Build plan, decisions, and phasing: [docs/mcp-server-plan.md](../../docs/mcp-server-plan.md).

A Next.js app serving MCP over **streamable HTTP** via [`mcp-handler`](https://www.npmjs.com/package/mcp-handler), deployed on Vercel. Consumers configure one URL — no clone, no keys, no local setup.

## URL shape — the link is the key

```
https://<host>/<MCP_PATH_SECRET>/mcp
```

Access control is the unguessable path segment (see the plan's § Access). Anyone with the link has access — treat it like a password. Rotate by changing the `MCP_PATH_SECRET` env var and redeploying. Requests with a wrong or missing secret get a 404, indistinguishable from a nonexistent route.

Generate a secret:

```
openssl rand -hex 24
```

## Environment variables

| Var | Required | Used for |
|---|---|---|
| `MCP_PATH_SECRET` | yes | The URL path segment. No secret configured → every request 404s (fail closed). |
| `DATABASE_URL` | P0 step 5+ | Neon Postgres (pgvector) connection string |
| `VOYAGE_API_KEY` | P0 step 5+ | Query-time embeddings |
| `COHERE_API_KEY` | P0 step 5+ | Rerank |

All secrets live in the Vercel project's environment — never in this repo, never on consumer machines.

## Local dev

Create `apps/mcp/.env.local` (gitignored):

```
MCP_PATH_SECRET=devsecret
```

Then from the repo root:

```
npm run dev --workspace=apps/mcp
```

Serves on `http://localhost:3333/devsecret/mcp`.

## Deployment (Vercel)

- Import the GitHub repo into a Vercel project.
- Set **Root Directory** to `apps/mcp`.
- Set the env vars above (Production + Preview).
- Every push to `main` deploys; PRs get preview deployments.

## Connecting a client

Claude Code:

```
claude mcp add --transport http tek https://<host>/<secret>/mcp
```

Or in a project `.mcp.json`:

```json
{
  "mcpServers": {
    "tek": {
      "type": "http",
      "url": "https://<host>/<secret>/mcp"
    }
  }
}
```

claude.ai: Settings → Connectors → Add custom connector → paste the URL.
Hermes Agent, Cursor, and other MCP clients: add the same URL as a remote (streamable HTTP) server.

## Current tools

| Tool | Status |
|---|---|
| `server_info` | live — connectivity check; reports version + which surfaces are live |
| tokens (`search_tokens`, `get_token`) | planned — P0 step 5 |
| components (`list_components`, `get_component`) | planned — P0 step 5 |
| corpus (`list_subjects`, `get_subject_index`, `search_corpus`, `get_chunk`) | planned — P0 step 6 |
