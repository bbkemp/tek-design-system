---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: node-links
module_title: "Node Links"
resource: node_links
endpoints:
  - { method: GET, path: "/api/v1/node_links", summary: "List node links" }
  - { method: POST, path: "/api/v1/node_links", summary: "Create account node (link)" }
  - { method: GET, path: "/api/v1/node_links/{id}", summary: "Get account node (link)" }
  - { method: PATCH, path: "/api/v1/node_links/{id}", summary: "Update account node (link)" }
  - { method: DELETE, path: "/api/v1/node_links/{id}", summary: "Delete account node (link)" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Node Links

## Summary

Join-table resource linking a node (instrument / host / device) to an account. The spec's summaries phrase it as "account node" — i.e. the relationship between an account and the nodes registered under it. CRUD without `PUT` (`PATCH` only for updates).

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/node_links` | List |
| `POST` | `/api/v1/node_links` | Create (link a node to an account) |
| `GET` | `/api/v1/node_links/{id}` | Get one |
| `PATCH` | `/api/v1/node_links/{id}` | Update (e.g. ownership change) |
| `DELETE` | `/api/v1/node_links/{id}` | Remove the link |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD pattern. Schemas: `NodeLink.Collection`, `NodeLink.CreationRequest`, `NodeLink.UpdateRequest`, `NodeLink`. **No `PUT`** in this resource — `PATCH`-only for updates.

## Cross-references

- [nodes](./nodes.md) — the node resource this link references.
- [accounts](./accounts.md) — the account side of the link.

## Confidence notes

- The spec's summary phrasing ("account node") implies a specific node ↔ account relationship; whether nodes can also link to users or other entity types is unclear from this slice.
- No `PUT` endpoint — consistent with `license_versions`; may be intentional pattern for join-table resources.
