---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: users
module_title: "Users"
resource: users
endpoints:
  - { method: GET, path: "/api/v1/users", summary: "List users" }
  - { method: POST, path: "/api/v1/users", summary: "Create user" }
  - { method: GET, path: "/api/v1/users/{id}", summary: "Get user" }
  - { method: PATCH, path: "/api/v1/users/{id}", summary: "Update user (partial)" }
  - { method: PUT, path: "/api/v1/users/{id}", summary: "Update user (full)" }
  - { method: DELETE, path: "/api/v1/users/{id}", summary: "Delete user" }
  - { method: GET, path: "/api/v1/users/{id}/memberships", summary: "Get memberships for user" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Users

## Summary

Individual user identities. Standard CRUD plus a nested read-only memberships endpoint that returns the accounts a user belongs to. Users are the identity layer; accounts hold them via memberships.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/users` | List users |
| `POST` | `/api/v1/users` | Create user |
| `GET` | `/api/v1/users/{id}` | Get user |
| `PATCH` | `/api/v1/users/{id}` | Update (partial) |
| `PUT` | `/api/v1/users/{id}` | Update (full) |
| `DELETE` | `/api/v1/users/{id}` | Delete user |
| `GET` | `/api/v1/users/{id}/memberships` | Memberships this user holds across accounts |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/users

List users. Query: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `User.Collection`.

### POST /api/v1/users

Create. Body: `User.CreationRequest`. Returns `User` on `201`.

### GET /api/v1/users/{id}

Get one. Returns `User` on `200`.

### PATCH / PUT /api/v1/users/{id}

Update. Same controller; see Confidence notes. Body: `User.UpdateRequest`. Returns updated `User`.

### DELETE /api/v1/users/{id}

Delete. Returns `204`.

### GET /api/v1/users/{id}/memberships

Returns the user's memberships across accounts. Schema: `UserMembership.Collection`. Pairs with `accounts/{id}/memberships` — the inverse direction of the same relationship.

## Cross-references

- [accounts](./accounts.md) — `GET /accounts/{id}/memberships` returns the same relationship rows scoped by account.
- [memberships](./memberships.md) — top-level CRUD on the relationship rows.
- [invitations](./invitations.md) — how new users join accounts.

## Confidence notes

- `PATCH` and `PUT` share controller logic per the spec; partial-vs-full distinction unconfirmed.
- The `User.CreationRequest` and `User.UpdateRequest` schema details (which fields are required, what role/permission shapes look like) are not enumerated here; inspect the spec's `components.schemas` for the canonical shape.
