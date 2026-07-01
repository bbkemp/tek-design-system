---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: memberships
module_title: "Memberships"
resource: memberships
endpoints:
  - { method: POST, path: /api/v1/memberships, summary: "Create membership" }
  - { method: GET, path: /api/v1/memberships/{id}, summary: "Get membership" }
  - { method: PATCH, path: /api/v1/memberships/{id}, summary: "Update membership" }
  - { method: DELETE, path: /api/v1/memberships/{id}, summary: "Delete membership" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Memberships

## Summary

Join-table resource between users and accounts. A membership grants a user some role/permission within an account. No top-level list endpoint — query via the nested forms on `accounts/{id}/memberships` or `users/{id}/memberships`. Create, read-by-id, update, and delete are all supported at the top level.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `POST` | `/api/v1/memberships` | Create membership (user joins account) |
| `GET` | `/api/v1/memberships/{id}` | Get membership |
| `PATCH` | `/api/v1/memberships/{id}` | Update membership (e.g. role change) |
| `DELETE` | `/api/v1/memberships/{id}` | Remove membership |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### POST /api/v1/memberships

Create. Body: `Membership.CreationRequest`. Returns the new `Membership`. This is typically the endpoint hit when an invitation is accepted.

### GET /api/v1/memberships/{id}

Returns one `Membership` by ID.

### PATCH /api/v1/memberships/{id}

Update — typically used to change a user's role within an account. Body: `Membership.UpdateRequest`. Returns the updated `Membership`.

### DELETE /api/v1/memberships/{id}

Removes the membership — the user no longer belongs to the account. Returns `204`.

## Cross-references

- [accounts](./accounts.md) — `GET /accounts/{id}/memberships` lists memberships scoped to an account.
- [users](./users.md) — `GET /users/{id}/memberships` lists memberships scoped to a user.
- [invitations](./invitations.md) — invitations resolve into memberships on accept.

## Confidence notes

- No top-level `GET /memberships` listing endpoint. To enumerate, walk by account or by user. This may be intentional (memberships only make sense in context) or a gap in the spec.
- The role/permission shape inside `Membership` is not enumerated in this slice of the spec — inspect `components.schemas.Membership` for the canonical fields.
