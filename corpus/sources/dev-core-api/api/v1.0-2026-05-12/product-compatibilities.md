---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: product-compatibilities
module_title: "Product Compatibilities"
resource: product_compatibilities
endpoints:
  - { method: GET, path: /api/v1/product_compatibilities, summary: "List product compatibilities" }
  - { method: POST, path: /api/v1/product_compatibilities, summary: "Create product compatibility" }
  - { method: DELETE, path: /api/v1/product_compatibilities/{id}, summary: "Delete product compatibility" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Product Compatibilities

## Summary

Join-table resource declaring which products are compatible with which. Used for upgrade-path validation ("which products can the customer move to from their current SKU?") and complementary-product suggestions. Three operations: list, create, delete. No update — compatibility records are recreated rather than mutated.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/product_compatibilities` | List |
| `POST` | `/api/v1/product_compatibilities` | Create |
| `DELETE` | `/api/v1/product_compatibilities/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard pattern. Schemas: `ProductCompatibility.Collection`, `ProductCompatibility.CreationRequest`, `ProductCompatibility`. The body shape almost certainly contains two product IDs and possibly a relationship type (upgrade, replacement, accessory).

## Cross-references

- [products-list-create](./products-list-create.md), [products-detail](./products-detail.md) — both product IDs reference this resource.
- [lms-feature-compatibilities](./lms-feature-compatibilities.md) — sibling at the feature level.

## Confidence notes

- No `GET /product_compatibilities/{id}` and no `PATCH` / `PUT` — compatibility is treated as a tombstone-able relationship rather than a mutable record. Verify against live API.
- The `ProductCompatibility` schema's relationship type vocabulary (upgrade / cross-grade / accessory / etc.) is not enumerated in this slice.
