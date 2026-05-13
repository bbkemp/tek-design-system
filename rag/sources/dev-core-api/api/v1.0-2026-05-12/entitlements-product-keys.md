---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: entitlements-product-keys
module_title: "Entitlements — Product Keys"
resource: entitlements
endpoints:
  - { method: GET, path: /api/v1/entitlements/product_keys, summary: "List entitlement product keys" }
  - { method: GET, path: /api/v1/entitlements/product_keys/{id}, summary: "Get entitlement product key" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Entitlements — Product Keys

## Summary

Product keys are the per-product-line-item view of an entitlement: how much of a specific product is granted, by what activation method, with what expiry. Read-only listing and lookup — product keys are authored by upstream commerce systems (Oracle, EMS), not via this API.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/entitlements/product_keys` | List product keys |
| `GET` | `/api/v1/entitlements/product_keys/{id}` | Get product key |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/entitlements/product_keys

List. Query: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `EntitlementProductKey.Collection`.

### GET /api/v1/entitlements/product_keys/{id}

Get one product key. Returns `EntitlementProductKey`.

## Schema highlights (from spec)

`EntitlementProductKey` carries the per-product-key state:

| Field | Type | Description |
|---|---|---|
| `id` | string | Product key ID |
| `entitlement_id` | string | Parent entitlement |
| `license_version_id` | string | Associated license version |
| `activation_method` | string | Activation method from EMS |
| `state` | string | State of the product key from EMS |
| `total_quantity` | integer | Total quantity granted |
| `activated_quantity` | integer | Already activated |
| `available_quantity` | integer | Remaining (typically `total - activated`) |
| `starts_at` | string (ISO datetime) | UTC start |
| `expiry_end_date` | string (ISO datetime) | UTC expiry |
| `expiry_in_days` | integer | Days from `starts_at` until expiry |

All listed fields except `available_quantity` and `license_version_id` are required in the spec.

## Cross-references

- [entitlements-allocations](./entitlements-allocations.md) — sibling resource on the same entitlement.
- [entitlements-activations](./entitlements-activations.md) — activations consume against product-key totals.
- [license_versions](./license-versions.md) — referenced by `license_version_id`.

## Confidence notes

- The relationship between `total_quantity`, `activated_quantity`, and `available_quantity` is inferred — the schema descriptions don't formally state the invariant. Most likely `available = total - activated`; verify against live data.
