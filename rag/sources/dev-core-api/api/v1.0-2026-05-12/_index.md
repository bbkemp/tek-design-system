# dev-core-api — API snapshot v1.0-2026-05-12

**Service:** `dev-core-api` · **Spec version:** `v1.0` · **Fetched:** 2026-05-12 · **Spec URL:** `https://dev-core.platform.tek-api.com/api/v1/openapi`

Generated **2026-05-12** by the `document-api` skill from the publicly fetchable OpenAPI document at the URL above. The full spec (162 KB JSON) is stashed at `uploads/api-specs/openapi.json` (gitignored).

## Auth

All requests require authentication unless otherwise noted. OAuth2 client-credentials flow:

1. Acquire a token with your `clientId` / `clientSecret`.
2. Pass the token in `Authorization: Bearer <TOKEN>` on every request.

**Auth failure codes:**

- `401 Unauthorized` — invalid credentials.
- `403 Forbidden` — authenticated, but permissions insufficient for the requested resource.
- `404 Not Found` — sometimes returned in place of `403` to avoid disclosing the existence of data the caller cannot access.

## Case support

The API accepts both `camelCase` and `snake_case` in requests. Default response casing is snake_case. To receive camelCase responses, send the header `x-response-case: camel`.

## Filtering

List endpoints support a structured filter DSL via either `filters` (array pattern) or `filters_json` (JSON pattern) query parameters. Filters specify `field`, `value`, optional `op` (default `==`), and optional `or_group` for OR-combining within a group.

**Supported operators:** `==`, `=~` / `ilike`, `like`, `in`, `>=`, `>`, `<=`, `<`.

See the full Filter DSL section in the source spec's top-level `info.description` for the array-vs-JSON syntax, OR-grouping, and SQL equivalents.

## Resources in this snapshot

| Resource | Cluster chunks | Count |
|---|---|---|
| products | [products-list-create](./products-list-create.md), [products-detail](./products-detail.md), [products-files](./products-files.md) | 9 endpoints |

## Pending resources

The spec contains 17 resources with 49 endpoints total. Documented in this snapshot: `products` only. Remaining are queued for follow-up passes — the skill's chunk format is locked by the products cluster files above; future runs reuse it.

| Resource | Endpoints | One-liner |
|---|---|---|
| `entitlements` | 9 | Licensing entitlements + activations + product-key allocations. |
| `accounts` | 5 | Customer accounts + nested products and memberships. |
| `invitations` | 4 | Membership invitations with accept/deny actions. |
| `users` | 3 | User identities + nested memberships. |
| `files` | 3 | Generic file resource with content download. |
| `license_versions` | 2 | License version definitions. |
| `product_compatibilities` | 2 | Product-to-product compatibility records. |
| `orders` | 2 | Read-only order history. |
| `memberships` | 2 | Account membership records. |
| `lms` | 2 | LMS feature compatibilities. |
| `node_links` | 2 | Inter-node link records. |
| `nodes` | 2 | Node entity (products / hosts / devices). |
| `series` | 2 | Product series groupings. |
| `licenses` | 2 | Per-vendor license checkout (oklib, optionkey). |
| `categories` | 2 | Product / asset categories. |
| `logs` | 1 | Read-only event log feed. |
