---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: logs
module_title: "Logs"
resource: logs
endpoints:
  - { method: GET, path: /api/v1/logs, summary: "List all logs (internal audit)" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Logs

## Summary

Read-only top-level audit log feed. One endpoint. Likely admin / internal-tooling only — the summary explicitly notes "internal audit." For account-scoped logs, use `GET /accounts/{account_id}/logs` instead.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/logs` | List all logs (internal audit) |

## Authentication

OAuth2 bearer token (security scheme: `authorization`). Given this is the unscoped firehose, expect strict permission gating — most callers will see `403`.

### GET /api/v1/logs

Returns `Log.Collection`. Standard filter/pagination DSL applies. Use `filters_json` with field-specific filters (`account_id`, `user_id`, `action`, time range) to scope.

## Cross-references

- [accounts](./accounts.md) — `GET /accounts/{account_id}/logs` is the account-scoped equivalent.

## Confidence notes

- The shape of `Log` entries (which fields are populated for each action type) is not enumerated in this slice. Inspect `components.schemas.Log` for canonical fields.
- Permission model for this endpoint is not documented in the slice — likely admin / service-token only. Most application callers should use the account-scoped form.
