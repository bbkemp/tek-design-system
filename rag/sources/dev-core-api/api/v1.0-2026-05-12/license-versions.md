---
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: license-versions
module_title: "License Versions"
resource: license_versions
endpoints:
  - { method: GET, path: /api/v1/license_versions, summary: "List license_versions" }
  - { method: POST, path: /api/v1/license_versions, summary: "Create license_version" }
  - { method: GET, path: /api/v1/license_versions/{id}, summary: "Get license_version" }
  - { method: PATCH, path: /api/v1/license_versions/{id}, summary: "Update license_version" }
  - { method: DELETE, path: /api/v1/license_versions/{id}, summary: "Delete license_version" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# License Versions

## Summary

License version definitions — the versioned contract a product entitlement is bound to. Standard CRUD without `PUT` (only `PATCH` for updates). Referenced from entitlement product keys via `license_version_id`.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/license_versions` | List |
| `POST` | `/api/v1/license_versions` | Create |
| `GET` | `/api/v1/license_versions/{id}` | Get one |
| `PATCH` | `/api/v1/license_versions/{id}` | Update (partial) |
| `DELETE` | `/api/v1/license_versions/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD pattern. `GET /license_versions` returns `LicenseVersion.Collection`; `POST` accepts `LicenseVersion.CreationRequest`; `PATCH` accepts `LicenseVersion.UpdateRequest`. `DELETE` returns `204`. **No `PUT`** in this resource — unusual compared to the rest of the API; treat as `PATCH`-only.

## Cross-references

- [entitlements-product-keys](./entitlements-product-keys.md) — references `license_version_id`.
- [licenses-checkout](./licenses-checkout.md) — license checkout may reference a specific version.
- [lms-feature-compatibilities](./lms-feature-compatibilities.md) — LMS features may be gated by license version.

## Confidence notes

- No `PUT` endpoint. Whether this is intentional API design (only partial updates supported) or a spec gap is unclear.
- The `LicenseVersion` schema fields (semver? human-readable label? expiry rules?) are not enumerated in this slice — inspect `components.schemas.LicenseVersion`.
