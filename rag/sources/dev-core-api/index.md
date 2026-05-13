# dev-core-api — service index

The Tek Platform API (dev environment) as a corpus subject. Source: `https://dev-core.platform.tek-api.com/`.

## API snapshots

| Snapshot | Spec version | Fetched | Endpoints documented |
|---|---|---|---|
| [v1.0-2026-05-12](./api/v1.0-2026-05-12/_index.md) | `v1.0` | 2026-05-12 | **49 of 49** (complete — all 17 resources, 21 cluster chunks) |

## Code snapshots

*pending* — populated by `document-repo` if the service's source repo gets processed.

## Hardware

*not applicable* — this is a software service, not a physical product.

## Cross-product applicability

`applies_to: [dev-core-api]` — the dev environment of the Tek Platform API.

When a product's corpus references a Platform API endpoint (e.g. a screen whose "Save" tile triggers `POST /products`), the screen's frontmatter declares `related_apis: [products-list-create]` and the API chunk's `related_screens` mirrors that.
