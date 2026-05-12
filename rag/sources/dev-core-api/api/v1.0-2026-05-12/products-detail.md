---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: products-detail
module_title: "Products — Detail, Update, Delete"
resource: products
endpoints:
  - { method: GET, path: /api/v1/products/{id}, summary: "Get product" }
  - { method: PATCH, path: /api/v1/products/{id}, summary: "Update product (partial)" }
  - { method: PUT, path: /api/v1/products/{id}, summary: "Update product (full)" }
  - { method: DELETE, path: /api/v1/products/{id}, summary: "Delete product" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Products — Detail, Update, Delete

## Summary

Item-level operations on a single product. Read, partial-update, full-update, and delete by ID. All four operations require authentication and return `403 Forbidden` for permission failures (potentially masked as `404 Not Found` per the API's general auth behavior).

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/products/{id}` | Get product |
| `PATCH` | `/api/v1/products/{id}` | Update product (partial) |
| `PUT` | `/api/v1/products/{id}` | Update product (full) |
| `DELETE` | `/api/v1/products/{id}` | Delete product |

## Authentication

OAuth2 bearer token in `Authorization` header (security scheme: `authorization`). Same auth model as the rest of the API.

### GET /api/v1/products/{id}

Returns a single product by ID.

**Parameters (path)**

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | The product's UUID. |

**Responses**

| Status | Description | Schema |
|---|---|---|
| `200` | Found | `Product` |
| `403` | Forbidden | shared `forbidden` response |

### PATCH /api/v1/products/{id}

Partial update. Only the fields in the request body are modified.

**Parameters (path)** — same as GET.

**Request body** — `application/json`, partial `Product` shape. Any subset of `name`, `description`, `image_url`, `nomenclature`, `product_type`, `specifications` is accepted.

**Responses** — `200` returns the updated `Product`; `403` Forbidden.

### PUT /api/v1/products/{id}

Full update. Per the spec, both `PATCH` and `PUT` share the same `operationId` family (`PlatformWeb.V1.ProductController.update`), suggesting the server may treat them equivalently — verify against the live API; see Confidence notes.

**Parameters (path)** — same as GET.

**Request body** — `application/json`, full `Product` shape.

**Responses** — `200` returns the updated `Product`; `403` Forbidden.

### DELETE /api/v1/products/{id}

Deletes the product.

**Parameters (path)** — same as GET.

**Responses**

| Status | Description | Schema |
|---|---|---|
| `204` | Deleted, no content | `no_content` (shared) |
| `403` | Forbidden | shared `forbidden` response |

## Cross-references

- [products-list-create](./products-list-create.md) — sibling chunk covering collection-level operations.
- [products-files](./products-files.md) — nested chunk covering product-file associations attached to a specific product.

## Confidence notes

- `PATCH` and `PUT` share the controller name `PlatformWeb.V1.ProductController.update` in the spec's `operationId` field (with PATCH carrying a `(2)` suffix). This is unusual — RESTful convention treats them as distinct (PATCH = partial, PUT = full replace). The server's actual behavior may merge them; confirm against the live API before relying on the distinction.
- The spec does not document optimistic-concurrency headers (`If-Match`, `ETag`). Updates may have last-write-wins semantics; verify before integrating high-conflict workflows.
- `DELETE` returns `204 No Content` per the spec's shared response. No undelete or soft-delete behavior is documented; treat deletes as permanent unless the live API contradicts.
