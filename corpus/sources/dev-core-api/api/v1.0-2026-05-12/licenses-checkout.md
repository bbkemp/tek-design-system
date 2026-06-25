---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: licenses-checkout
module_title: "Licenses — Checkout"
resource: licenses
endpoints:
  - { method: POST, path: /api/v1/licenses/oklib/checkout, summary: "Generate license using OKlib technology" }
  - { method: POST, path: /api/v1/licenses/optionkey/checkout, summary: "Generate license using OptionKey technology" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Licenses — Checkout

## Summary

Two action endpoints that generate runtime licenses against an activation. One per licensing technology: `OKlib` and `OptionKey`. The split exists because each technology has its own serialization format and validation rules; the API exposes them as separate endpoints rather than overloading a single one with a "format" param.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `POST` | `/api/v1/licenses/oklib/checkout` | Generate license (OKlib format) |
| `POST` | `/api/v1/licenses/optionkey/checkout` | Generate license (OptionKey format) |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### POST /api/v1/licenses/oklib/checkout

Generates an OKlib-format license bound to a specific activation. Body likely carries the activation reference, instrument identity, and any installation context. Returns the license payload (string or structured response — verify against live API).

### POST /api/v1/licenses/optionkey/checkout

Same shape, OptionKey format. Used by older Tek instruments that consume the OptionKey serialization.

## Cross-references

- [entitlements-activations](./entitlements-activations.md) — activations are typically the precondition for license checkout.
- [license-versions](./license-versions.md) — the license version determines which technology format and feature set is encoded.

## Confidence notes

- The request body schema for both endpoints is not enumerated in this slice. The probable shape is `{ activation_id, target: { instrument_id, host_id, …}, … }` — verify against the live API.
- The response shape (raw license string vs. JSON-wrapped) varies by technology; verify per endpoint.
- Whether checkout is idempotent (same input → same license) or generates a fresh one each time is not stated; relevant for retry behavior.
