---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: categories
module_title: "Categories"
resource: categories
endpoints:
  - { method: GET, path: /api/v1/categories, summary: "List categories" }
  - { method: POST, path: /api/v1/categories, summary: "Create category" }
  - { method: GET, path: /api/v1/categories/{id}, summary: "Get category" }
  - { method: PATCH, path: /api/v1/categories/{id}, summary: "Update category (partial)" }
  - { method: PUT, path: /api/v1/categories/{id}, summary: "Update category (full)" }
  - { method: DELETE, path: /api/v1/categories/{id}, summary: "Delete category" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Categories

## Summary

Generic taxonomy resource — categories used to group products, assets, or other entities. Standard CRUD; no nested relationships in this snapshot. Likely consumed as a lookup table by clients that present filter UIs.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/categories` | List |
| `POST` | `/api/v1/categories` | Create |
| `GET` | `/api/v1/categories/{id}` | Get one |
| `PATCH` | `/api/v1/categories/{id}` | Update (partial) |
| `PUT` | `/api/v1/categories/{id}` | Update (full) |
| `DELETE` | `/api/v1/categories/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD pattern. `GET /categories` returns `Category.Collection` with the usual filter/pagination DSL. `POST` accepts `Category.CreationRequest`, returns `Category` on `201`. `PATCH` and `PUT` both accept `Category.UpdateRequest`. `DELETE` returns `204`.

## Cross-references

- [products-list-create](./products-list-create.md), [products-detail](./products-detail.md) — products may carry a category reference (verify against the `Product` schema).

## Confidence notes

- Whether categories nest (parent/child) is not derivable from this slice; check `components.schemas.Category` for a `parent_id` field.
- `PATCH` and `PUT` likely share controller logic per the spec pattern.
