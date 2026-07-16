---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: entitlements-activations
module_title: "Entitlements — Activations"
resource: entitlements
endpoints:
  - { method: GET, path: "/api/v1/entitlements/activations", summary: "List entitlement activations" }
  - { method: POST, path: "/api/v1/entitlements/activations", summary: "Activate entitlement" }
  - { method: GET, path: "/api/v1/entitlements/activations/{id}", summary: "Get entitlement activation" }
  - { method: POST, path: "/api/v1/entitlements/activations/revoke", summary: "Revoke activation (bulk)" }
  - { method: POST, path: "/api/v1/entitlements/activations/{id}/revoke", summary: "Revoke entitlement by ID" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Entitlements — Activations

## Summary

Activations are the lifecycle event that consumes part of an entitlement on a specific target (instrument, user, install). List existing activations, create a new one to claim entitled capacity, look one up by ID, or revoke — either one specific activation by ID or in bulk via the `/revoke` endpoint.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/entitlements/activations` | List activations |
| `POST` | `/api/v1/entitlements/activations` | Activate (create new) |
| `GET` | `/api/v1/entitlements/activations/{id}` | Get activation |
| `POST` | `/api/v1/entitlements/activations/revoke` | Revoke (bulk; body specifies which) |
| `POST` | `/api/v1/entitlements/activations/{id}/revoke` | Revoke a specific activation |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/entitlements/activations

List activations. Query: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `EntitlementActivation.Collection`.

### POST /api/v1/entitlements/activations

Create an activation — claim entitled capacity for a target. Body: `EntitlementActivation.CreationRequest` (includes the entitlement / allocation reference and the target). Returns the new `EntitlementActivation` on `201`.

### GET /api/v1/entitlements/activations/{id}

Get one activation. Returns `EntitlementActivation`.

### POST /api/v1/entitlements/activations/revoke

Bulk revoke. Body specifies the set of activations to revoke (likely a list of IDs and/or a filter). Use when revoking many activations atomically.

### POST /api/v1/entitlements/activations/{id}/revoke

Revoke a single activation by ID. Returns `204` or the revoked record (verify against live API).

## Cross-references

- [entitlements-allocations](./entitlements-allocations.md) — the allocation that this activation consumes against.
- [entitlements-product-keys](./entitlements-product-keys.md) — the per-product line item that ties allocation to activation.
- [licenses-checkout](./licenses-checkout.md) — license checkout is typically downstream of an activation.

## Confidence notes

- The body shape for bulk `POST /activations/revoke` is not enumerated here — verify whether it expects `{ ids: […] }`, a filter spec, or both.
- The response shape for `revoke` endpoints (`204` vs. revoked record) is not stated in the slice; check the live API.
