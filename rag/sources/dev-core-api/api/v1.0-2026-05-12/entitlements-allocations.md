---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: entitlements-allocations
module_title: "Entitlements — Allocations"
resource: entitlements
endpoints:
  - { method: GET, path: /api/v1/entitlements, summary: "List entitlements" }
  - { method: GET, path: /api/v1/entitlements/allocations, summary: "List entitlement allocations" }
  - { method: POST, path: /api/v1/entitlements/allocations, summary: "Create entitlement allocation" }
  - { method: GET, path: /api/v1/entitlements/allocations/{id}, summary: "Get entitlement allocation" }
  - { method: PATCH, path: /api/v1/entitlements/allocations/{id}, summary: "Update entitlement allocation" }
  - { method: DELETE, path: /api/v1/entitlements/allocations/{id}, summary: "Delete entitlement allocation" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Entitlements — Allocations

## Summary

Entitlements model what an account has *purchased the right to use*. Allocations are how that purchased right is distributed — typically assigning portions of an entitlement to specific instruments, users, or sub-accounts. This chunk covers the top-level entitlement listing plus full CRUD on allocations.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/entitlements` | List entitlements |
| `GET` | `/api/v1/entitlements/allocations` | List allocations |
| `POST` | `/api/v1/entitlements/allocations` | Create allocation |
| `GET` | `/api/v1/entitlements/allocations/{id}` | Get allocation |
| `PATCH` | `/api/v1/entitlements/allocations/{id}` | Update allocation |
| `DELETE` | `/api/v1/entitlements/allocations/{id}` | Delete allocation |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/entitlements

Top-level entitlement listing. Query params: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `Entitlement.Collection`. No create endpoint at this level — entitlements are issued by upstream commerce systems (Oracle, EMS), not authored via this API.

### GET /api/v1/entitlements/allocations

List allocations. Same pagination/filter shape.

### POST /api/v1/entitlements/allocations

Create an allocation. Body: `EntitlementAllocation.CreationRequest`. Returns the new allocation on `201`.

### GET /api/v1/entitlements/allocations/{id}

Get one allocation. Returns `EntitlementAllocation`.

### PATCH /api/v1/entitlements/allocations/{id}

Update (partial). Body: `EntitlementAllocation.UpdateRequest`. Returns the updated allocation.

### DELETE /api/v1/entitlements/allocations/{id}

Delete the allocation. Returns `204`.

## Cross-references

- [entitlements-activations](./entitlements-activations.md) — sibling: how an allocation gets activated for actual use.
- [entitlements-product-keys](./entitlements-product-keys.md) — sibling: per-product-line-item view of an entitlement.
- [accounts](./accounts.md) — `GET /accounts/{id}/products` derives access in part from this resource.

## Confidence notes

- The shape of `EntitlementAllocation` (target type — user, instrument, sub-account — and quantity model) is not enumerated in this slice. Inspect `components.schemas.EntitlementAllocation` for canonical fields.
- No top-level `POST /entitlements` — entitlements come in from upstream commerce systems. Verify this is intentional vs. a future endpoint.
