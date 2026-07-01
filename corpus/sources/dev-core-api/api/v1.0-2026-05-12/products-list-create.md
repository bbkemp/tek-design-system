---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: products-list-create
module_title: "Products — List & Create"
resource: products
endpoints:
  - { method: GET, path: /api/v1/products, summary: "List products" }
  - { method: POST, path: /api/v1/products, summary: "Create product" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Products — List & Create

## Summary

Collection-level operations on the products resource. `GET /products` returns a paginated list with filtering and sorting; `POST /products` creates a new product. Both require authentication. Products represent Tektronix product entries (oscilloscopes, SMUs, accessories) with descriptions, nomenclature, product type, image URL, and free-form specifications.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/products` | List products |
| `POST` | `/api/v1/products` | Create product |

## Authentication

Both endpoints require an OAuth2 bearer token in the `Authorization` header (security scheme: `authorization`). See the snapshot `_index.md` for the auth flow. `403 Forbidden` is returned when the token is valid but the caller lacks permission to read or create products.

### GET /api/v1/products

Returns a paginated collection of products.

**Parameters (query)**

| Name | Type | Required | Description |
|---|---|---|---|
| `page` | integer | no | Page number for pagination. |
| `page_size` | integer | no | Items per page. |
| `sort` | string | no | Sort spec (e.g. `name`, `-inserted_at`). |
| `filters` | array | no | Array-form filter spec (see snapshot index Filter DSL). |
| `filters_json` | string | no | JSON-encoded filter spec; required for `or_group` filters. |

**Responses**

| Status | Description | Schema |
|---|---|---|
| `200` | Successful list | `Product.Collection` (`{ data: Product[], meta: { pagination: … } }`) |
| `403` | Forbidden | shared `forbidden` response |

**Example response (from spec)**

```json
{
  "data": [
    {
      "id": "01925a76-5ec4-7904-9d73-51a3b474d778",
      "name": "5-Series MSO54B",
      "nomenclature": "MSO54B",
      "description": "The TBS1000C oscilloscope provides industry-leading quality and reliability for educational institutions, embedded designers, and small business owners…",
      "image_url": "https://...",
      "license_technologies": ["oklib"],
      "product_type": "hardware",
      "specifications": { "Analog Bandwidth": "350 MHz - 2 GHz" },
      "status": "active",
      "inserted_at": "2017-09-12T12:34:55Z",
      "updated_at": "2017-09-13T10:11:12Z"
    }
  ],
  "meta": { "pagination": { "current_page": 1 } }
}
```

### POST /api/v1/products

Creates a new product.

**Request body** — `Product.CreationRequest` (`application/json`)

Required fields per the `Product` schema's `required` array: `name`, `nomenclature`, `description`. The `CreationRequest` body explicitly accepts `name`, `description`, and `image_url`. Server assigns `id`, `inserted_at`, `updated_at` on success.

**Responses**

| Status | Description | Schema |
|---|---|---|
| `201` | Created | `Product` |
| `403` | Forbidden | shared `forbidden` response |

The spec also typically applies the shared `unprocessable_entity` (`422`) response for validation errors — confirm against the live API; see Confidence notes.

## Cross-references

- [products-detail](./products-detail.md) — sibling chunk covering item-level operations (`GET/PATCH/PUT/DELETE /products/{id}`).
- [products-files](./products-files.md) — nested chunk covering product-file associations.

## Confidence notes

- The `Product.CreationRequest` schema in the spec lists only `name`, `description`, and `image_url`; the parent `Product` schema's `required` array additionally lists `nomenclature`. The spec does not explicitly state whether the server auto-derives `nomenclature` or requires it on creation — verify against the live API before treating either as authoritative.
- The shared `422 Unprocessable Entity` response is defined in `components.responses` but not directly referenced in `POST /products`'s `responses` block. Most well-behaved REST APIs return `422` for validation errors regardless; flagged for confirmation.
- The `Product.specifications` field is typed as `json` (free-form object) in the schema. The example shows `{ "Analog Bandwidth": "350 MHz - 2 GHz" }` but no schema constrains keys or value types — consumers must handle the field defensively.
- `inserted_at` and `updated_at` are typed as `?` in the schema dump; the example values are ISO-8601 timestamps. Treat as `string` (date-time).
