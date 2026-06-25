---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: nodes
module_title: "Nodes"
resource: nodes
endpoints:
  - { method: GET, path: /api/v1/nodes, summary: "List nodes" }
  - { method: POST, path: /api/v1/nodes, summary: "Create node" }
  - { method: GET, path: /api/v1/nodes/{id}, summary: "Get node" }
  - { method: PATCH, path: /api/v1/nodes/{id}, summary: "Update node (partial)" }
  - { method: PUT, path: /api/v1/nodes/{id}, summary: "Update node (full)" }
  - { method: DELETE, path: /api/v1/nodes/{id}, summary: "Delete node" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Nodes

## Summary

Generic entity resource representing instruments, hosts, or other identifiable runtime targets ("nodes"). Standard CRUD. Nodes are linked via the sibling `node_links` resource and serve as the target type for many activations and license checkouts.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/nodes` | List |
| `POST` | `/api/v1/nodes` | Create |
| `GET` | `/api/v1/nodes/{id}` | Get one |
| `PATCH` | `/api/v1/nodes/{id}` | Update (partial) |
| `PUT` | `/api/v1/nodes/{id}` | Update (full) |
| `DELETE` | `/api/v1/nodes/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD with both `PATCH` and `PUT`. Request/response schemas: `Node.Collection`, `Node.CreationRequest`, `Node.UpdateRequest`, `Node`.

## Cross-references

- [node-links](./node-links.md) — links between nodes (sibling resource).
- [entitlements-activations](./entitlements-activations.md) — activations typically target a specific node.
- [licenses-checkout](./licenses-checkout.md) — license checkout binds to a node.

## Confidence notes

- The `Node` schema's `type` discriminator (instrument / host / device / …) is suggested by the Filter DSL examples in the top-level docs (where `type = 'device'` and `type = 'pc'` appear) but not formally documented in this slice. Inspect `components.schemas.Node` for the canonical type vocabulary.
- `PATCH` and `PUT` likely share controller logic per the spec's API-wide pattern.
