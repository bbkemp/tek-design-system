---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: accounts
module_title: "Accounts"
resource: accounts
endpoints:
  - { method: GET, path: /api/v1/accounts, summary: "List accounts" }
  - { method: POST, path: /api/v1/accounts, summary: "Create account" }
  - { method: GET, path: /api/v1/accounts/{id}, summary: "Get account" }
  - { method: PATCH, path: /api/v1/accounts/{id}, summary: "Update account (partial)" }
  - { method: PUT, path: /api/v1/accounts/{id}, summary: "Update account (full)" }
  - { method: DELETE, path: /api/v1/accounts/{id}, summary: "Delete account" }
  - { method: GET, path: /api/v1/accounts/{id}/products, summary: "List products that account has access to" }
  - { method: GET, path: /api/v1/accounts/{id}/memberships, summary: "Get user memberships for account" }
  - { method: GET, path: /api/v1/accounts/{account_id}/logs, summary: "List logs for an account" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Accounts

## Summary

Customer accounts — top-level identity in the Platform API. CRUD on the account itself plus three nested read-only collections: the products an account has access to (via purchases / entitlements), the user memberships attached to the account, and the audit logs scoped to the account.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/accounts` | List accounts |
| `POST` | `/api/v1/accounts` | Create account |
| `GET` | `/api/v1/accounts/{id}` | Get account |
| `PATCH` | `/api/v1/accounts/{id}` | Update (partial) |
| `PUT` | `/api/v1/accounts/{id}` | Update (full) |
| `DELETE` | `/api/v1/accounts/{id}` | Delete account |
| `GET` | `/api/v1/accounts/{id}/products` | Products this account can access |
| `GET` | `/api/v1/accounts/{id}/memberships` | User memberships in this account |
| `GET` | `/api/v1/accounts/{account_id}/logs` | Account-scoped audit logs |

## Authentication

OAuth2 bearer token in `Authorization` header (security scheme: `authorization`).

### GET /api/v1/accounts

List accounts. Query parameters: `filters_json`, `order_by`, `order_directions`, `page`, `page_size`. Returns `Account.Collection` on `200`; `forbidden` on `403`.

### POST /api/v1/accounts

Create an account. Request body: `Account.CreationRequest` (`application/json`). Returns `Account` on `201`; `forbidden` on `403`.

### GET /api/v1/accounts/{id}

Get a single account. Path param `id`. Query param `includes` for sideloading related resources. Returns `Account` on `200`; `forbidden` on `403`.

### PATCH / PUT /api/v1/accounts/{id}

Update. Both methods share the same controller — see Confidence notes; treat the partial-vs-full distinction as unconfirmed. Request body: `Account.UpdateRequest`. Returns updated `Account` on `200`.

### DELETE /api/v1/accounts/{id}

Delete the account. Returns `204 No Content` on success.

### GET /api/v1/accounts/{id}/products

Returns the products this account has access to via purchases and entitlement allocations. Same paginated query params as the top-level products list. Schema: `Product.Collection`. Useful for "what can this customer use right now?"

### GET /api/v1/accounts/{id}/memberships

Returns the user memberships within this account (paginated). Schema: `UserMembership.Collection`. Pairs with the top-level `memberships` resource — this nested form is scoped to one account.

### GET /api/v1/accounts/{account_id}/logs

Returns audit log entries for this account. Same filter/pagination DSL as the top-level `logs` resource, scoped here.

## Cross-references

- [products-list-create](./products-list-create.md), [products-detail](./products-detail.md) — referenced via `GET /accounts/{id}/products`.
- [memberships](./memberships.md) — `GET /accounts/{id}/memberships` is the scoped form.
- [entitlements-allocations](./entitlements-allocations.md) — the mechanism by which an account gains product access.
- [logs](./logs.md) — top-level logs feed; the account-scoped version is here.
- [users](./users.md) — user identities that hold memberships in accounts.

## Confidence notes

- `PATCH` and `PUT` likely share controller logic per the spec's `operationId` pattern; treat partial-vs-full as unconfirmed.
- The `includes` query param on `GET /accounts/{id}` is documented by name only; the set of includable relations is not enumerated in this slice of the spec. Inspect the live API for the canonical list.
- `GET /accounts/{account_id}/logs` uses `account_id` as the path param name (not `id`) — note the inconsistency with the other nested endpoints that use `{id}`.
