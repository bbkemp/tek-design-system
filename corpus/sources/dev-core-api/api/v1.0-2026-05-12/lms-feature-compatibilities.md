---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: lms-feature-compatibilities
module_title: "LMS — Feature Compatibilities"
resource: lms
endpoints:
  - { method: GET, path: "/api/v1/lms/feature_compatibilities", summary: "List LMS Feature Compatibilities" }
  - { method: POST, path: "/api/v1/lms/feature_compatibilities", summary: "Create LMS Feature Compatibility" }
  - { method: GET, path: "/api/v1/lms/feature_compatibilities/{id}", summary: "Get LMS Feature Compatibility" }
  - { method: PATCH, path: "/api/v1/lms/feature_compatibilities/{id}", summary: "Update LMS Feature Compatibility (partial)" }
  - { method: PUT, path: "/api/v1/lms/feature_compatibilities/{id}", summary: "Update LMS Feature Compatibility (full)" }
  - { method: DELETE, path: "/api/v1/lms/feature_compatibilities/{id}", summary: "Delete LMS Feature Compatibility" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# LMS — Feature Compatibilities

## Summary

LMS-namespaced resource. Feature compatibilities describe which features of an LMS (License Management Server, or possibly Learning Management — see Confidence notes) are valid for which products or contexts. Standard CRUD; nested under `/lms/` because the parent namespace expects to grow other LMS-specific resources.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `GET` | `/api/v1/lms/feature_compatibilities` | List |
| `POST` | `/api/v1/lms/feature_compatibilities` | Create |
| `GET` | `/api/v1/lms/feature_compatibilities/{id}` | Get one |
| `PATCH` | `/api/v1/lms/feature_compatibilities/{id}` | Update (partial) |
| `PUT` | `/api/v1/lms/feature_compatibilities/{id}` | Update (full) |
| `DELETE` | `/api/v1/lms/feature_compatibilities/{id}` | Delete |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

Standard CRUD with both `PATCH` and `PUT`. Request/response schemas: `LmsFeatureCompatibility.Collection`, `LmsFeatureCompatibility.CreationRequest`, `LmsFeatureCompatibility.UpdateRequest`, `LmsFeatureCompatibility`.

## Cross-references

- [license-versions](./license-versions.md) — feature compatibility records typically tie a license version to a feature set.
- [product_compatibilities](./product-compatibilities.md) — sibling concept at the product level rather than feature level.

## Confidence notes

- "LMS" is ambiguous from the spec alone — Tek context (instrument licensing) strongly suggests **License Management Server**, but a Learning Management System interpretation cannot be ruled out without checking the `LmsFeatureCompatibility` schema content. Inspect `components.schemas.LmsFeatureCompatibility` for context clues.
- `PATCH` and `PUT` likely share controller logic per the spec's API-wide pattern.
