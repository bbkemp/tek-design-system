---
class: code-module
service: tek-design-system
snapshot: 2026-05-12-85a6857
commit: 85a6857
commit_date: 2026-05-12
tag: null
module_id: qt
module_title: "Qt translation layer"
module_path: qt
language: mixed
package_name: null
package_version: null
applies_to: [tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-tokens]
---

# Qt translation layer

## Summary

Auto-generated C++ headers and QSS stylesheets that expose the same tokens as `@bbkemp/tokens` to Qt-native widgets. The reason the design system is Web Components and not React: Qt is the consuming runtime for several Tek products, and Qt apps need both a web rendering path (Web Components in `QWebEngineView`) **and** native Qt widget styling — this module provides the latter.

## Purpose

Single source-of-truth token parity between web and Qt. A Tek app that mixes Qt-native chrome (toolbars, menus, status bars) with web content (the actual app body via `QWebEngineView`) gets identical colors, spacing, and type across both surfaces — without manual sync. The header is regenerated whenever the token JSON changes; the publish workflow keeps it consistent with the npm package.

## Public surface

### Header: `TekTokens.h`

C++ header in the `Tek::` namespace. Two top-level namespaces inside:

- **`Tek::Primitive`** — raw palette. Sub-namespaces by family: `Tek::Primitive::Neutral`, etc. Each value is a `QColor` constant with hex values.
- **`Tek::Dark`** / **`Tek::Light`** — semantic tokens, one namespace per mode. Sub-namespaces by component / token role: `Tek::Dark::Color::inputTextDefault`, etc.

Usage from Qt C++:

```cpp
#include "TekTokens.h"

label->setStyleSheet(
  QString("color: %1;").arg(Tek::Dark::Color::inputTextDefault.name())
);
```

Alpha note: `QColor(r, g, b, a)` takes alpha 0–255. CSS `#181818cc` maps to `QColor(24, 24, 24, 204)`.

### Stylesheets: `tek.dark.qss` and `tek.light.qss`

Qt Style Sheets. Apply to a `QApplication` or a widget subtree via `setStyleSheet()`. Selector grammar is QSS (Qt-flavored CSS); references the token-derived values inline.

### Static reference page: `qt-reference.html`

Generated HTML page that visually previews the token set as it renders against Qt's semantic types. Used by Qt developers to verify the translation matches the web reference.

## How to consume

```cpp
// In your Qt main()
#include <QApplication>
#include <QFile>
#include "TekTokens.h"

QApplication app(argc, argv);

QFile qss(":/tek.dark.qss");
qss.open(QIODevice::ReadOnly);
app.setStyleSheet(QString::fromUtf8(qss.readAll()));
```

Bundle `tek.dark.qss` (or `.light.qss`) as a Qt resource (`.qrc`); include `TekTokens.h` wherever you need symbolic access.

## Module map

| File | Role |
|---|---|
| `TekTokens.h` | C++ header. Auto-generated from `packages/tokens/src/semantic/`. Do not hand-edit. |
| `tek.dark.qss` | Qt stylesheet, dark mode. |
| `tek.light.qss` | Qt stylesheet, light mode. |
| `qt-reference.html` | HTML preview of the token set in Qt-conventions context. |

## Cross-references

- [`packages-tokens`](./packages-tokens.md) — the source of truth. Regenerate Qt files when token JSON changes.
- [`packages-ui`](./packages-ui.md) — Web Components consumed via `QWebEngineView` in Qt apps. The Qt translation layer styles the non-web Qt chrome around them.
- A planned `qt-sync` skill (or the existing `add-token` skill, per CLAUDE.md) regenerates these files on token changes.

## Confidence notes

- The exact regeneration script (`qt-sync` skill or a build step) is referenced in CLAUDE.md and `add-token` SKILL.md but not in this module's directory; the regenerator may live in `scripts/` or be invoked manually. Verify by reading those skills.
- A planned WPF translation layer (`wpf/` directory) mirrors this approach for WPF/XAML consumers but is not yet implemented at this snapshot.
