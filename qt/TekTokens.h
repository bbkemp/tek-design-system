#pragma once
// ============================================================
// TekTokens.h — Tek Design System v1.0
// Auto-generated from @bbkemp/tokens
//
// Usage:
//   #include "TekTokens.h"
//   label->setStyleSheet(QString("color: %1;").arg(Tek::Dark::Color::inputTextDefault.name()));
//
// Source of truth: packages/tokens/src/semantic/
// Do not edit manually. Regenerate when tokens change.
//
// Qt alpha note: QColor(r, g, b, a) — alpha is 0-255.
// CSS #181818cc → QColor(24, 24, 24, 204)
// ============================================================

#include <QColor>
#include <QString>

namespace Tek {

// ── Primitives ─────────────────────────────────────────────
// Raw palette. Use semantic tokens in components, not these.
namespace Primitive {
  namespace Neutral {
    const QColor n100(0xcc, 0xcc, 0xcc);
    const QColor n200(0xaf, 0xaf, 0xaf);
    const QColor n300(0x97, 0x97, 0x97);
    const QColor n400(0x7b, 0x7b, 0x7b);
    const QColor n450(0x64, 0x64, 0x64);
    const QColor n500(0x45, 0x45, 0x45);
    const QColor n600(0x33, 0x33, 0x33);
    const QColor n700(0x25, 0x25, 0x25);
    const QColor n800(0x1e, 0x1e, 0x1e);
    const QColor n900(0x18, 0x18, 0x18);
    const QColor black(0x00, 0x00, 0x00);
    const QColor white(0xff, 0xff, 0xff);
  }
  namespace Brand {
    const QColor tekBlue(0x33, 0xba, 0xea);
  }
  namespace UI {
    const QColor error(0xe7, 0x48, 0x48);
    const QColor warning(0xe0, 0xb7, 0x32);
    const QColor success(0x42, 0xb5, 0x4c);
    const QColor shadow(0x00, 0x00, 0x00, 0x33);   // #00000033
    const QColor backdropDark(0x18, 0x18, 0x18, 0xcc);  // #181818cc
    const QColor backdropLight(0xcc, 0xcc, 0xcc, 0xcc); // #cccccccc
  }
}

// ── Type ───────────────────────────────────────────────────
// Font families and sizes from primitives/fonts.json
namespace Font {
  // Families
  const QString geist    = "Geist";      // body / UI text
  const QString archivo  = "Archivo";    // headings / buttons
  const QString geistMono = "Geist Mono"; // code / labels

  // Text scale — pixel sizes
  // text/mono/* uses same sizes with geistMono family
  namespace Text {
    const int sizeXs = 10;  // line-height: 12
    const int sizeSm = 12;  // line-height: 12
    const int sizeMd = 13;  // line-height: 16
    const int sizeLg = 14;  // line-height: 20
    const int sizeXl = 16;  // line-height: 24

    const int lineHeightXs = 12;
    const int lineHeightSm = 12;
    const int lineHeightMd = 16;
    const int lineHeightLg = 20;
    const int lineHeightXl = 24;
  }

  // Heading scale — pixel sizes, Archivo SemiBold weight:600
  namespace Heading {
    const int sizeXs = 16;  // line-height: 24  — buttons
    const int sizeSm = 20;  // line-height: 26
    const int sizeMd = 24;  // line-height: 32  — modal header
    const int sizeLg = 32;  // line-height: 40
    const int sizeXl = 40;  // line-height: 48

    const int lineHeightXs = 24;
    const int lineHeightSm = 26;
    const int lineHeightMd = 32;
    const int lineHeightLg = 40;
    const int lineHeightXl = 48;

    const int weight = 600;
  }
}

// ── Dark mode (default) ────────────────────────────────────
// Source: semantic/tokens.json
namespace Dark {
  namespace Color {
    // Modal
    const QColor modalBackground(0x18, 0x18, 0x18, 0xcc); // backdrop-dark alpha
    const QColor modalBorder(0x7b, 0x7b, 0x7b);
    const QColor modalText(0xff, 0xff, 0xff);
    const QColor modalShadow(0x00, 0x00, 0x00, 0x33);

    // Input
    const QColor inputBackground(0x25, 0x25, 0x25);
    const QColor inputBorderDefault(0x7b, 0x7b, 0x7b);
    const QColor inputBorderFocus(0xff, 0xff, 0xff);
    const QColor inputBorderFilled(0xaf, 0xaf, 0xaf);
    const QColor inputBorderDisabled(0x45, 0x45, 0x45);
    const QColor inputBorderError(0xe7, 0x48, 0x48);
    const QColor inputTextDefault(0x97, 0x97, 0x97);
    const QColor inputTextFocus(0xff, 0xff, 0xff);
    const QColor inputTextFilled(0xcc, 0xcc, 0xcc);
    const QColor inputTextDisabled(0x45, 0x45, 0x45);
    const QColor inputTextError(0xff, 0xff, 0xff);
    const QColor inputLabelDefault(0xcc, 0xcc, 0xcc);

    // Selector
    const QColor selectorBgDefault(0x25, 0x25, 0x25);
    const QColor selectorBgUnchecked(0x45, 0x45, 0x45);
    const QColor selectorBgChecked(0xcc, 0xcc, 0xcc);
    const QColor selectorBorderUnchecked(0x7b, 0x7b, 0x7b);
    const QColor selectorBorderChecked(0x97, 0x97, 0x97);
    const QColor selectorBorderError(0xe7, 0x48, 0x48);
    const QColor selectorLabelUnchecked(0xcc, 0xcc, 0xcc);
    const QColor selectorLabelChecked(0xff, 0xff, 0xff);
    const QColor selectorLabelError(0xff, 0xff, 0xff);

    // Button
    const QColor buttonBgDefault(0x1e, 0x1e, 0x1e);
    const QColor buttonBgHover(0x00, 0x00, 0x00);
    const QColor buttonBgInactive(0x18, 0x18, 0x18);
    const QColor buttonBorderDefault(0x33, 0xba, 0xea);
    const QColor buttonBorderInactive(0x45, 0x45, 0x45);
    const QColor buttonTextDefault(0xcc, 0xcc, 0xcc);
    const QColor buttonTextHover(0xff, 0xff, 0xff);
    const QColor buttonTextInactive(0x45, 0x45, 0x45);

    // Footer
    const QColor footerBackground(0x25, 0x25, 0x25);
    const QColor footerText(0xcc, 0xcc, 0xcc);

    // Misc
    const QColor textLink(0x33, 0xba, 0xea);
    const QColor icons(0xff, 0xff, 0xff);
  }
}

// ── Light mode ─────────────────────────────────────────────
// Source: semantic/tokens.light.json
namespace Light {
  namespace Color {
    // Modal
    const QColor modalBackground(0xcc, 0xcc, 0xcc, 0xcc); // backdrop-light alpha
    const QColor modalBorder(0x33, 0x33, 0x33);
    const QColor modalText(0x00, 0x00, 0x00);
    const QColor modalShadow(0x00, 0x00, 0x00, 0x33);

    // Input
    const QColor inputBackground(0xff, 0xff, 0xff);
    const QColor inputBorderDefault(0x33, 0x33, 0x33);
    const QColor inputBorderFocus(0x00, 0x00, 0x00);
    const QColor inputBorderFilled(0x1e, 0x1e, 0x1e);
    const QColor inputBorderDisabled(0x64, 0x64, 0x64);
    const QColor inputBorderError(0xe7, 0x48, 0x48);
    const QColor inputTextDefault(0x25, 0x25, 0x25);
    const QColor inputTextFocus(0x00, 0x00, 0x00);
    const QColor inputTextFilled(0x18, 0x18, 0x18);
    const QColor inputTextDisabled(0x64, 0x64, 0x64);
    const QColor inputTextError(0x00, 0x00, 0x00);
    const QColor inputLabelDefault(0x18, 0x18, 0x18);

    // Selector
    const QColor selectorBgDefault(0xff, 0xff, 0xff);
    const QColor selectorBgUnchecked(0x64, 0x64, 0x64);
    const QColor selectorBgChecked(0x18, 0x18, 0x18);
    const QColor selectorBorderUnchecked(0x33, 0x33, 0x33);
    const QColor selectorBorderChecked(0x25, 0x25, 0x25);
    const QColor selectorBorderError(0xe7, 0x48, 0x48);
    const QColor selectorLabelUnchecked(0x00, 0x00, 0x00);
    const QColor selectorLabelChecked(0x00, 0x00, 0x00);
    const QColor selectorLabelError(0x00, 0x00, 0x00);

    // Button
    const QColor buttonBgDefault(0xff, 0xff, 0xff);
    const QColor buttonBgHover(0x33, 0xba, 0xea);
    const QColor buttonBgInactive(0xaf, 0xaf, 0xaf);
    const QColor buttonBorderDefault(0x33, 0xba, 0xea);
    const QColor buttonBorderInactive(0x64, 0x64, 0x64);
    const QColor buttonTextDefault(0x00, 0x00, 0x00);
    const QColor buttonTextHover(0x00, 0x00, 0x00);
    const QColor buttonTextInactive(0x64, 0x64, 0x64);

    // Footer
    const QColor footerBackground(0xaf, 0xaf, 0xaf);
    const QColor footerText(0x18, 0x18, 0x18);

    // Misc
    const QColor textLink(0x33, 0xba, 0xea);
    const QColor icons(0x00, 0x00, 0x00);
  }
}

// ── Theme helper ───────────────────────────────────────────
// Convenience: select a color by theme at runtime.
// Usage:
//   bool isDark = appTheme == Theme::Dark;
//   label->setColor(Tek::themed(isDark,
//     Tek::Dark::Color::inputTextDefault,
//     Tek::Light::Color::inputTextDefault));
enum class Theme { Dark, Light };

inline QColor themed(Theme t, const QColor& dark, const QColor& light) {
  return (t == Theme::Dark) ? dark : light;
}

} // namespace Tek
