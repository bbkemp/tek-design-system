---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: orders
module_title: "Orders"
resource: orders
endpoints:
  - { method: GET, path: /api/v1/orders, summary: "List orders" }
  - { method: GET, path: /api/v1/orders/{id}, summary: "Get order" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Orders

## Summary

Read-only order history. Two endpoints — list and get-by-id. Orders are authored by upstream commerce systems (Oracle, EMS); this API exposes them for reference but does not allow creation or modification.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/orders` | List orders |
| `GET` | `/api/v1/orders/{id}` | Get order |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### GET /api/v1/orders

List orders. Standard filter/pagination DSL. Returns `Order.Collection`.

### GET /api/v1/orders/{id}

Get one order. Returns `Order`.

## Cross-references

- [entitlements-allocations](./entitlements-allocations.md), [entitlements-product-keys](./entitlements-product-keys.md) — orders flow into entitlements via the upstream commerce pipeline.
- [accounts](./accounts.md) — orders belong to accounts.

## Confidence notes

- No write endpoints. If a workflow needs to *create* an order, it happens via a different system (Oracle, EMS) and this API exposes it after the fact.
- The `Order` schema (line items, totals, status lifecycle) is not enumerated in this slice — inspect `components.schemas.Order` for fields.
