---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: products-files
module_title: "Products — File Associations"
resource: products
endpoints:
  - { method: GET, path: /api/v1/products/{id}/files, summary: "List product files" }
  - { method: POST, path: /api/v1/products/{id}/files, summary: "Create product file association" }
  - { method: DELETE, path: /api/v1/products/{id}/files/{product_file_id}, summary: "Delete product file association" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Products — File Associations

## Summary

Nested resource: file associations attached to a specific product. List the files associated with a product, attach a new file (by file ID, likely created via the top-level `files` resource), or detach an existing association. Associations are first-class — they have their own `product_file_id` — so detachment uses that ID, not the underlying file ID.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/products/{id}/files` | List product files |
| `POST` | `/api/v1/products/{id}/files` | Create product file association |
| `DELETE` | `/api/v1/products/{id}/files/{product_file_id}` | Delete product file association |

## Authentication

OAuth2 bearer token in `Authorization` header (security scheme: `authorization`).

### GET /api/v1/products/{id}/files

Returns the file associations for a single product.

**Parameters (path)**

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | The product's UUID. |

**Parameters (query)**

| Name | Type | Required | Description |
|---|---|---|---|
| `page` | integer | no | Pagination. |
| `page_size` | integer | no | Pagination. |
| `sort` | string | no | Sort spec. |
| `filters` | array | no | Filter DSL (array pattern). |
| `filters_json` | string | no | Filter DSL (JSON pattern). |

**Responses**

| Status | Description | Schema |
|---|---|---|
| `200` | Successful list | (likely a collection of file-association objects — see Confidence notes) |
| `403` | Forbidden | shared `forbidden` response |

### POST /api/v1/products/{id}/files

Attaches a file to the product. The file itself is created via the top-level `/files` resource; this endpoint creates the *association* between an existing file and the product.

**Parameters (path)** — `id` (product UUID).

**Request body** — `application/json`. Schema name `FileController.create_product_file` per the `operationId`. The body almost certainly carries the file ID being attached and optional metadata; see Confidence notes.

**Responses** — `200` returns the new association; `403` Forbidden.

### DELETE /api/v1/products/{id}/files/{product_file_id}

Detaches a file association. Does not delete the underlying file (that's done via the top-level `/files/{id}` resource if at all).

**Parameters (path)**

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | The product's UUID. |
| `product_file_id` | string | yes | The association's UUID (not the file's UUID). |

**Responses**

| Status | Description | Schema |
|---|---|---|
| `204` | Detached, no content | `no_content` (shared) |
| `403` | Forbidden | shared `forbidden` response |

## Cross-references

- [products-list-create](./products-list-create.md) — parent resource.
- [products-detail](./products-detail.md) — sibling chunk; managing the product itself.
- Top-level `files` resource (3 endpoints; chunk *pending*) — where the underlying file objects live.

## Confidence notes

- The `200` response schema for `GET /api/v1/products/{id}/files` is not directly enumerated in the slice of spec I extracted. The shape is almost certainly `{ data: <FileAssociation>[], meta: { pagination: … } }` following the rest of the API's collection convention; verify against the live spec.
- The `POST` request body schema is referenced by `operationId` only in the spec excerpt extracted; the resolved schema name (e.g. `ProductFile.CreationRequest`) and required fields should be confirmed by inspecting `components.schemas` directly.
- The distinction between "file ID" (the underlying file) and "product_file_id" (the association) is inferred from the path shape, not stated explicitly in the operation summaries. If the live API uses the file ID for detachment instead, this chunk needs correction.
- The `files` top-level resource has its own chunks pending (3 endpoints: `POST /files`, `GET /files/{id}`, `GET /files/{id}/contents`); cross-link this chunk to those when they land.
