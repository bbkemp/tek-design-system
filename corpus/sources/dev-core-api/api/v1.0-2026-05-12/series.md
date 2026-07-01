---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: series
module_title: "Series"
resource: series
endpoints:
  - { method: GET, path: /api/v1/series, summary: "List series" }
  - { method: POST, path: /api/v1/series, summary: "Create series" }
  - { method: GET, path: /api/v1/series/{id}, summary: "Get series" }
  - { method: PATCH, path: /api/v1/series/{id}, summary: "Update series (partial)" }
  - { method: PUT, path: /api/v1/series/{id}, summary: "Update series (full)" }
  - { method: DELETE, path: /api/v1/series/{id}, summary: "Delete series" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Series

## Summary

Product series — the marketing grouping above the individual SKU level (e.g. "5-Series MSO"). Standard CRUD with both `PATCH` and `PUT`. Products reference their series; this resource lets consumers list and manage the series themselves.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/series` | List |
| `POST` | `/api/v1/series` | Create |
| `GET` | `/api/v1/series/{id}` | Get one |
| `PATCH` | `/api/v1/series/{id}` | Update (partial) |
| `PUT` | `/api/v1/series/{id}` | Update (full) |
| `DELETE` | `/api/v1/series/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD pattern. Schemas: `Series.Collection`, `Series.CreationRequest`, `Series.UpdateRequest`, `Series`.

## Cross-references

- [products-list-create](./products-list-create.md), [products-detail](./products-detail.md) — products carry a series reference (verify the field name against the `Product` schema).

## Confidence notes

- The relationship between products and series is implied by the resource naming and Tek's product line conventions but is not directly visible in the slice — the `Product` schema's `series_id` (or similar) field is not enumerated. Inspect `components.schemas.Product` to confirm.
- `PATCH` and `PUT` likely share controller logic per the spec pattern.
