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

All 17 resources from the spec are documented. 21 cluster chunks total, covering all 49 endpoints.

| Resource | Cluster chunks | Endpoint count |
|---|---|---|
| accounts | [accounts](./accounts.md) | 9 |
| categories | [categories](./categories.md) | 6 |
| entitlements | [entitlements-allocations](./entitlements-allocations.md), [entitlements-activations](./entitlements-activations.md), [entitlements-product-keys](./entitlements-product-keys.md) | 13 |
| files | [files](./files.md) | 3 |
| invitations | [invitations](./invitations.md) | 5 |
| license_versions | [license-versions](./license-versions.md) | 5 |
| licenses | [licenses-checkout](./licenses-checkout.md) | 2 |
| lms | [lms-feature-compatibilities](./lms-feature-compatibilities.md) | 6 |
| logs | [logs](./logs.md) | 1 |
| memberships | [memberships](./memberships.md) | 4 |
| node_links | [node-links](./node-links.md) | 5 |
| nodes | [nodes](./nodes.md) | 6 |
| orders | [orders](./orders.md) | 2 |
| product_compatibilities | [product-compatibilities](./product-compatibilities.md) | 3 |
| products | [products-list-create](./products-list-create.md), [products-detail](./products-detail.md), [products-files](./products-files.md) | 9 |
| series | [series](./series.md) | 6 |
| users | [users](./users.md) | 7 |

## Cross-resource relationships

Documented in each chunk's `## Cross-references` section. High-traffic connections:

- **accounts ↔ users ↔ memberships** — three-way join. `accounts/{id}/memberships` and `users/{id}/memberships` are the scoped read paths; `memberships/{id}` is the join row itself; `invitations` is how new memberships start.
- **entitlements → allocations → activations → licenses** — the licensing pipeline. Allocations distribute purchased entitlements; activations claim them on specific targets (nodes); license-checkout generates the runtime artifact (OKlib or OptionKey format).
- **products ↔ series ↔ categories ↔ product_compatibilities** — the product graph. Series groups SKUs, categories taxonomically slice them, compatibilities declare relationships.
- **nodes ↔ node_links ↔ accounts** — instrument-to-account linkage.

## Confidence notes (snapshot-wide)

- **`PATCH` vs. `PUT`** — every resource that exposes both shares controller logic per the spec's `operationId` pattern. Treat them as equivalent unless verified otherwise on the live API.
- **Schema details inside cluster chunks** — most chunks describe the schema *by name* (e.g. `Account.UpdateRequest`) but do not enumerate fields. Inspect `components.schemas` in the stashed `uploads/api-specs/openapi.json` for canonical shapes.
- **LMS namespace** — read as "License Management Server" given Tek licensing context; "Learning Management System" interpretation cannot be fully ruled out without checking schema content.

## What's next

The snapshot is **complete** for v1.0 of the spec. Future passes:

- Re-run when the spec ships v1.1 / v2.0 — produces a new dated snapshot folder; this one stays for historical queries.
- Enrich the cross-link arrows by populating `related_screens` and `related_modules` on each chunk as related corpus content lands (e.g. when a customer-portal screen corpus is processed, link its Save tile to the appropriate API chunk).
- Optional deepening: flesh out the schema field tables inline in each chunk (currently chunks reference `components.schemas.X` for details).
