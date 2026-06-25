---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: invitations
module_title: "Invitations"
resource: invitations
endpoints:
  - { method: GET, path: /api/v1/invitations, summary: "List invitations" }
  - { method: POST, path: /api/v1/invitations, summary: "Create invitation" }
  - { method: DELETE, path: /api/v1/invitations/{id}, summary: "Delete invitation" }
  - { method: POST, path: /api/v1/invitations/{id}/accept, summary: "Accept invitation" }
  - { method: POST, path: /api/v1/invitations/{id}/deny, summary: "Deny invitation" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Invitations

## Summary

Pending invitations for users to join accounts. List, create, and delete the invitation itself plus two custom actions (`accept`, `deny`) that resolve the invitation into a real membership or dismiss it. No GET-by-id endpoint — the list is the access pattern; the action endpoints don't require fetching the invitation first.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/invitations` | List invitations |
| `POST` | `/api/v1/invitations` | Create invitation |
| `DELETE` | `/api/v1/invitations/{id}` | Delete invitation (admin-style revoke) |
| `POST` | `/api/v1/invitations/{id}/accept` | Accept invitation → creates membership |
| `POST` | `/api/v1/invitations/{id}/deny` | Deny invitation → drops it |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/invitations

List. Query params: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `Invitation.Collection`.

### POST /api/v1/invitations

Create an invitation. Body: `Invitation.CreationRequest` (almost certainly includes a target email and an account ID). Returns the new `Invitation` on `201`.

### DELETE /api/v1/invitations/{id}

Delete (revoke) the invitation. Returns `204`.

### POST /api/v1/invitations/{id}/accept

Accept the invitation. Side effect: creates a `Membership` linking the user to the account. Returns the new `Membership` or related response (verify against live API).

### POST /api/v1/invitations/{id}/deny

Deny the invitation. The invitation is dismissed without creating a membership. Returns `204` or similar.

## Cross-references

- [memberships](./memberships.md) — accepted invitations resolve into memberships.
- [accounts](./accounts.md) — invitations target an account.
- [users](./users.md) — invitations target a user (by email, typically).

## Confidence notes

- The exact response shape from `accept` and `deny` is not enumerated in this slice — likely returns the resulting `Membership` (accept) or `204 No Content` (deny). Verify against the live API.
- No `GET /invitations/{id}` — to inspect a single invitation, list with a filter.
