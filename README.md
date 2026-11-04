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
| Bausteine (Header, Foto-Spalten, Footer, CTA-Leiste, Kacheln, FAQ, Formularfelder …) | ✅ |
| Startseite (5a) | ✅ |
| Boiler (6a) + Themenseiten Service und Entkalkung, Reparatur und Ersatz (6b) | ✅ |
| Solar (6c), Korrosions- und Kalkschutz (6k) | ✅ |
| Für Installateure (6d) + 4 Themenseiten (6b) | ✅ |
| Über uns (6e), Aktuelles (6f), Kontakt (6g) | ✅ |
| Formulare Service (6h), Solar (6i), Ersatzteil (6j), Kontakt – clientseitig validiert | ✅ |
| Impressum, Datenschutz (Gerüst, Texte offen), 404 | ✅ |
| Formular-Versand: Serverless-Funktion + E-Mail | offen (Hosting festlegen) |
| Baustein-Übersicht zur Abnahme: `/bausteine/` (noindex, nicht verlinkt) | ✅ |

## Seiten

| URL | Vorlage | Datei |
|---|---|---|
| `/` | 5a | `src/pages/index.astro` |
| `/boiler/` | 6a | `src/pages/boiler/index.astro` |
| `/boiler/<thema>/` | 6b | `src/pages/boiler/[topic].astro` → `TopicPage.astro`, Inhalte in `src/data/topics.ts` |
| `/solar/`, `/korrosions-und-kalkschutz/` | 6c / 6k | → `OfferPage.astro` |
| `/installateure/` | 6d | `src/pages/installateure/index.astro` |
| `/installateure/<thema>/` | 6b | `src/pages/installateure/[topic].astro` |
| `/ueber-uns/`, `/aktuelles/`, `/kontakt/` | 6e / 6f / 6g | `src/pages/…` (News/Stellen in `src/data/news.ts`) |
| `/service-anfragen/`, `/solar-anfragen/`, `/ersatzteil-anfragen/` | 6h / 6i / 6j | → `form/FormPage.astro`, Felder in `src/data/forms.ts` |
| `/impressum/`, `/datenschutz/` | – | `src/pages/…` |

## Formulare

- Felder und Auswahllisten: `src/data/forms.ts`. **Auswahllisten mit leeren Werten** (Boiler-Marken, Bauarten, Lieferoptionen, Solar-Felder) werden bis zur Lieferung als freies Textfeld angezeigt – Werte eintragen, dann erscheint automatisch eine Auswahl.
- Clientseitige Prüfung: Pflichtfelder, E-Mail, PLZ 4-stellig, Telefon, Zahlen, Baujahr, Uploads (nur Bilder/PDF, max. 5 Dateien à 10 MB). Fehlermeldungen pro Feld, Fokus auf erstes fehlerhaftes Feld.
- Solar: «Neue Anlage» / «Bestehende Anlage» schaltet die Abschnitte um (ausgeblendete Felder werden nicht gesendet).
- Spam: Honeypot-Feld `website` (muss leer sein) + reCAPTCHA v2 auf den drei Anfrageformularen.
- Versand: `POST multipart/form-data` an `PUBLIC_FORM_ENDPOINT` (siehe `.env.example`). Mitgesendet wird `formular` (Name des Formulars). Erwartet HTTP 2xx → Erfolgsmeldung.
- **Der Endpoint muss serverseitig erneut validieren**, das reCAPTCHA-Token (`g-recaptcha-response`) prüfen, den Honeypot verwerfen und die Mail an berger@boiler-service.ch senden. Ohne Endpoint zeigt das Formular einen Hinweis mit Telefon und E-Mail.

## Konventionen

- **Sprache:** Deutsch (Schweiz) – kein «ß», Anführungszeichen « », Kunden werden gesiezt.
- **Offene Inhalte:** Texte in `[eckigen Klammern]` werden über `Copy.astro` automatisch gestrichelt markiert. Nichts erfinden (keine Zahlen, Preise, Bewertungen, Zitate, Zertifikate) – Markierung verschwindet, sobald der echte Text drinsteht.
- **Fotos:** Bild in `src/assets/fotos/` ablegen, importieren und bei `image` (plus `imageAlt`) eintragen. Der Platzhalter verschwindet automatisch; Astro erzeugt optimierte WebP-Grössen. Mindestens 1600px Breite.
- **Breakpoint:** 900px (darunter mobiles Layout mit Akkordeons und CTA-Leiste).
- **Interaktion:** Desktop mit Maus → Hover/Fokus erweitert Spalten. Touch/mobil → Antippen. Ohne JavaScript sind alle Inhalte offen. `prefers-reduced-motion` wird respektiert.
- **Telefon:** immer `tel:0447624000` (über `company.phone` in `src/data/site.ts`).

## Offene Punkte (aus dem Handoff)

- Alle Texte in [ ] · alle Fotos · Logo als SVG · Team, News, Stellen
- Liste Boiler-Marken / Bauarten / Lieferoptionen · Felder Solar-Formular bestätigen
- Mobile Navigation ohne Menü klären
- Formular-Versand (Empfänger berger@boiler-service.ch bestätigen) + reCAPTCHA-Schlüssel
- Hosting/Deployment festlegen
- Online-Shop (Phase 2, separat)
- Impressum/Datenschutz-Texte
