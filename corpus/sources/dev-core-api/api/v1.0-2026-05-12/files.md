---
provenance: observed
class: api-endpoint-cluster
service: dev-core-api
snapshot: v1.0-2026-05-12
spec_version: v1.0
spec_url: https://dev-core.platform.tek-api.com/api/v1/openapi
fetched_date: 2026-05-12
module_id: files
module_title: "Files"
resource: files
endpoints:
  - { method: POST, path: /api/v1/files, summary: "Create file" }
  - { method: GET, path: /api/v1/files/{id}, summary: "Get file (metadata)" }
  - { method: GET, path: /api/v1/files/{id}/contents, summary: "Get file contents (bytes)" }
auth_required: true
auth_schemes: [authorization]
applies_to: [dev-core-api]
related_screens: []
related_modules: []
---

# Files

## Summary

Foundational file resource. Three operations: create a file (typically via multipart upload or a URL reference), fetch the file's metadata by ID, and stream its contents. Other resources (products, nodes, etc.) associate files via their own nested endpoints — those associations reference the file IDs created here.

## Endpoints

| Method | Path | Summary |
|---|---|---|
| `POST` | `/api/v1/files` | Create file |
| `GET` | `/api/v1/files/{id}` | Get file metadata |
| `GET` | `/api/v1/files/{id}/contents` | Get file contents (raw bytes) |

## Authentication

OAuth2 bearer token (security scheme: `authorization`).

### POST /api/v1/files

Create a new file. The request body likely accepts either a direct upload (`multipart/form-data`) or a URL reference (`application/json` with a source URL). The spec's `application/json` content type for `requestBody` suggests the JSON-reference pattern is canonical; verify against the live API for upload semantics.

Returns the new `File` (metadata + ID, not the bytes) on `201`.

### GET /api/v1/files/{id}

Returns the file's metadata: name, size, content type, the file's owner / creator, timestamps. Returns `File` on `200`.

### GET /api/v1/files/{id}/contents

Returns the file's raw bytes. Likely streams; content type matches the stored file. No filters or pagination.

## Cross-references

- [products-files](./products-files.md) — product-to-file associations.
- (future) Other resources that may attach files (nodes, accounts, etc.) — none additional in this snapshot.

## Confidence notes

- The `requestBody` content type for `POST /files` is documented as `application/json` per the spec, which is unusual for file uploads. Either the API expects a JSON envelope with a base64-encoded payload or a remote URL, OR there is an alternate `multipart/form-data` route not captured in the OpenAPI doc. Verify with a live `curl` upload before integrating.
- The `200` response for `GET /files/{id}/contents` is presumably the raw byte stream with the original `Content-Type` header; the spec does not explicitly state this.
