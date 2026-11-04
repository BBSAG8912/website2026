# Website Berger Boiler-Service AG (2026)

Neue Firmenwebseite für [boiler-service.ch](https://www.boiler-service.ch), umgesetzt mit [Astro](https://astro.build) als statische Seite – nach dem Design-Handoff aus Claude Design.

## Schnellstart

```bash
npm install
npm run dev       # Entwicklungsserver: http://localhost:4321
npm run build     # statischer Build nach dist/
npm run preview   # Build lokal ansehen
```

Voraussetzung: Node.js ≥ 22.

## Stand

| Bereich | Status |
|---|---|
| Design-Tokens, Schriften (selbst gehostet, kein Google-CDN → datenschutzfreundlich) | ✅ |
| Bausteine: Header, Foto-Spalten, Footer, mobile CTA-Leiste, Button, Textkachel, Schrittkachel, FAQ, CTA-Block | ✅ |
| Startseite (Design 5a, Desktop + Mobile) | ✅ |
| Baustein-Übersicht zur Abnahme: `/bausteine/` (noindex, nicht verlinkt) | ✅ |
| Unterseiten (Boiler, Themenseiten, Solar, Korrosion, Installateure, Über uns, Aktuelles, Kontakt) | offen |
| Formulare (Service, Solar, Ersatzteil, Kontakt) inkl. Versand + reCAPTCHA | offen |
| Impressum, Datenschutz | offen (Texte vom Kunden) |

## Struktur

```
src/
  assets/            Logo (später Fotos unter assets/fotos/)
  components/
    Header.astro         Kopfzeile ohne Menü; mobil sticky
    PhotoColumns.astro   Foto-Spalten: Hover-Erweiterung Desktop, Akkordeon mobil, Option fixed
    Footer.astro         3 Kacheln (Hover Desktop / Akkordeon mobil), Option compact
    MobileCtaBar.astro   Sticky-Leiste Telefon + «Service anfragen» (nur mobil)
    Button.astro         Pill-Buttons (primary, outline, white, soft, outline-light)
    TextTile.astro       Textkachel
    StepTile.astro       Schrittkachel (So läuft es ab / Warum wir)
    Faq.astro            Häufige Fragen (natives <details>)
    CtaBlock.astro       Violetter CTA-Block
    Photo.astro          Foto oder schraffierter «FOTO: …»-Platzhalter
    Copy.astro           Text; [in Klammern] = offener Inhalt, gestrichelt markiert
  data/site.ts         Kontaktdaten und alle Routen zentral
  layouts/BaseLayout.astro
  pages/
  styles/tokens.css    Farben, Radien, Abstände (CSS Custom Properties)
  styles/global.css
```

## Konventionen

- **Sprache:** Deutsch (Schweiz) – kein «ß», Anführungszeichen « », Kunden werden gesiezt.
- **Offene Inhalte:** Texte in `[eckigen Klammern]` werden über `Copy.astro` automatisch gestrichelt markiert. Nichts erfinden (keine Zahlen, Preise, Bewertungen, Zitate, Zertifikate) – Markierung verschwindet, sobald der echte Text drinsteht.
- **Fotos:** Bild in `src/assets/fotos/` ablegen, importieren und bei `image` (plus `imageAlt`) eintragen. Der Platzhalter verschwindet automatisch; Astro erzeugt optimierte WebP-Grössen. Mindestens 1600px Breite.
- **Breakpoint:** 900px (darunter mobiles Layout mit Akkordeons und CTA-Leiste).
- **Interaktion:** Desktop mit Maus → Hover/Fokus erweitert Spalten. Touch/mobil → Antippen. Ohne JavaScript sind alle Inhalte offen. `prefers-reduced-motion` wird respektiert.
- **Telefon:** immer `tel:0447624000` (über `company.phone` in `src/data/site.ts`).

## Offene Punkte (aus dem Handoff)

- Alle Texte in [ ] · alle Fotos · Logo als SVG
- Liste Boiler-Marken / Bauarten / Lieferoptionen · Felder Solar-Formular bestätigen
- Mobile Navigation ohne Menü klären
- Formular-Versand (Empfänger berger@boiler-service.ch bestätigen) + reCAPTCHA-Schlüssel
- Hosting/Deployment festlegen
- Online-Shop (Phase 2, separat)
- Impressum/Datenschutz-Texte
