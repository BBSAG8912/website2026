/**
 * Inhalte der Themenseiten (Vorlage 6b).
 * Texte in [eckigen Klammern] sind offen und werden auf der Seite gestrichelt markiert.
 * Fotos: `image` mit importiertem Bild aus src/assets/fotos/ ergänzen.
 */
import type { ImageMetadata } from 'astro';
import { routes } from './site';

export interface Topic {
  slug: string;
  section: 'boiler' | 'installateure';
  title: string;
  /** Kurztext auf Übersichts-Spalten */
  teaser: string;
  intro: string;
  imageHint: string;
  image?: ImageMetadata;
  imageAlt?: string;
  steps: { title: string; text: string }[];
  blocks: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

const steps = () => [
  { title: '[Schritt]', text: '[1 Satz]' },
  { title: '[Schritt]', text: '[1 Satz]' },
  { title: '[Schritt]', text: '[1 Satz]' },
];

const blocks = () => [
  { title: '[Abschnitt 1]', text: '[2–3 Sätze]' },
  { title: '[Abschnitt 2]', text: '[2–3 Sätze]' },
  { title: '[Abschnitt 3]', text: '[2–3 Sätze]' },
];

const faqs = () => [
  { q: '[Frage 1]', a: '[Antwort]' },
  { q: '[Frage 2]', a: '[Antwort]' },
  { q: '[Frage 3]', a: '[Antwort]' },
];

export const topics: Topic[] = [
  {
    slug: 'service-und-entkalkung',
    section: 'boiler',
    title: 'Service und Entkalkung',
    imageHint: 'Entkalkung eines Boilers',
    teaser: 'Regelmässige Wartung und Entkalkung – für hygienisches Warmwasser und einen sparsamen Boiler.',
    intro:
      'Mit der Zeit sammeln sich im Boiler Sand, Ablagerungen und Kalk. Ein regelmässiger Service hält das Warmwasser hygienisch, spart Energie und verlängert die Lebensdauer Ihres Boilers.',
    steps: [
      { title: 'Offerte anfragen', text: 'Telefonisch unter 044 762 40 00 oder über das Serviceformular – die Offerte erhalten Sie innert weniger Stunden.' },
      { title: 'Service vor Ort', text: 'Wir entfernen Sand und Ablagerungen im Boilersumpf und entkalken den Boiler.' },
      { title: 'Schutz und Kontrolle', text: 'Bei jeder Entkalkung schützen wir den Boiler gegen Korrosion und prüfen Temperatur und Ventile.' },
    ],
    blocks: [
      {
        title: 'Hygienisches Warmwasser',
        text: 'Ablagerungen im Boilersumpf begünstigen Keime. Aus hygienischen Gründen empfehlen wir eine Wartung etwa alle drei Jahre.',
      },
      {
        title: 'Weniger Energie, mehr Leistung',
        text: 'Ein entkalkter Boiler heizt effizienter. Das senkt den Energieverbrauch und bringt die volle Leistung zurück.',
      },
      {
        title: 'Längere Lebensdauer',
        text: 'Regelmässige Pflege beugt Schäden und Ausfällen vor. Den passenden Service-Intervall legen wir individuell mit Ihnen fest.',
      },
    ],
    faqs: [
      { q: 'Wie oft sollte ein Boiler gewartet werden?', a: 'Aus hygienischen Gründen empfehlen wir eine Wartung etwa alle drei Jahre. Gerne vereinbaren wir mit Ihnen einen individuellen Service-Intervall.' },
      { q: 'Was ist im Service enthalten?', a: 'Wir entfernen Sand und Ablagerungen im Boilersumpf, entkalken den Boiler und schützen ihn dabei gegen Korrosion.' },
      { q: 'Wie wird abgerechnet?', a: 'Wir arbeiten mit Netto-Pauschalpreisen. Anfahrt, Kleinmaterial und Dichtungen sind inbegriffen.' },
    ],
  },
  {
    slug: 'reparatur-und-ersatz',
    section: 'boiler',
    title: 'Reparatur und Ersatz',
    imageHint: 'Montage eines neuen Boilers',
    teaser: 'Reparieren, wo es sich lohnt – und wenn nötig ein neuer Berger Boiler.',
    intro:
      'Wir reparieren Boiler und ersetzen sie, wenn sich eine Reparatur nicht mehr lohnt. Unsere Servicefahrzeuge führen Ersatzteile für nahezu alle Modelle mit – so ist die Arbeit meist in einem Arbeitsgang erledigt.',
    steps: [
      { title: 'Kontakt aufnehmen', text: 'Telefonisch unter 044 762 40 00, per E-Mail oder über das Serviceformular.' },
      { title: 'Beratung', text: 'Wir sagen Ihnen ehrlich, ob sich eine Reparatur lohnt oder ein Ersatz sinnvoller ist.' },
      { title: 'Ausführung', text: 'Dank Ersatzteilen im Servicefahrzeug meist in einem Arbeitsgang – mit möglichst kurzem Unterbruch beim Warmwasser.' },
    ],
    blocks: [
      {
        title: 'Reparatur vor Ersatz',
        text: 'Pflege und Reparatur sind oft günstiger als ein neuer Boiler. Wir prüfen, was sich für Sie lohnt.',
      },
      {
        title: 'Berger Boiler',
        text: 'Für den Ersatz bieten wir Berger Boiler an, darunter den Solar-WP Boiler 600 SWS 3 und den Kronoterm ESSENTA 303-1 E D PV P3. Katalog und Datenblätter erhalten Sie bei uns.',
      },
      {
        title: 'Transparente Preise',
        text: 'Wir arbeiten mit Netto-Pauschalpreisen inklusive Anfahrt, Kleinmaterial und Dichtungen.',
      },
    ],
    faqs: [
      { q: 'Lohnt sich die Reparatur meines Boilers noch?', a: 'Das hängt von Alter und Zustand ab. Wir beraten Sie ehrlich – Reparatur und Pflege sind oft günstiger als ein neuer Boiler.' },
      { q: 'Wie lange bin ich ohne Warmwasser?', a: 'Unsere Servicefahrzeuge führen Ersatzteile für nahezu alle Boilermodelle mit. Meist erledigen wir die Arbeit in einem Arbeitsgang.' },
      { q: '[Frage 3]', a: '[Antwort]' },
    ],
  },
  {
    slug: 'boiler-ersatzteile',
    section: 'installateure',
    title: 'Boiler-Ersatzteile',
    imageHint: 'Ersatzteil-Regal',
    teaser: 'Ersatzteile für alle Boiler – und Sonderanfertigungen auf Anfrage.',
    intro: 'Wir führen Ersatzteile für alle Boiler und fertigen auf Anfrage auch Sonderanfertigungen. Unser Team berät Sie gerne.',
    steps: [
      { title: 'Anfrage senden', text: 'Über das Ersatzteil-Formular, per E-Mail oder telefonisch unter 044 762 40 00.' },
      { title: '[Schritt]', text: '[1 Satz]' },
      { title: '[Schritt]', text: '[1 Satz]' },
    ],
    blocks: [
      { title: 'Für alle Boiler', text: 'Wir führen Ersatzteile für alle Boiler.' },
      { title: 'Sonderanfertigungen', text: 'Ist ein Teil nicht ab Lager erhältlich, fragen wir eine Sonderanfertigung für Sie an.' },
      { title: '[Abschnitt 3]', text: '[2–3 Sätze]' },
    ],
    faqs: faqs(),
  },
  {
    slug: 'boiler-verkauf',
    section: 'installateure',
    title: 'Boiler-Verkauf',
    imageHint: 'Neue Boiler im Lager',
    teaser: 'Berger Boiler – Katalog und Datenblätter für Installateure.',
    intro: 'Wir verkaufen Berger Boiler an Installateure. Katalog und Datenblätter stellen wir Ihnen gerne zur Verfügung.',
    steps: steps(),
    blocks: [
      { title: 'Berger Boiler 600 SWS 3', text: 'Der Solar-WP Boiler 600 SWS 3 ist ein sicherer Energiespeicher für Solar und Wärmepumpe.' },
      { title: 'Kronoterm ESSENTA 303-1 E D PV P3', text: 'Als weiteres Modell führen wir den Kronoterm ESSENTA 303-1 E D PV P3.' },
      { title: 'Katalog 2026', text: 'Den Berger Katalog mit Preisen ab 1. September 2026 erhalten Sie bei uns.' },
    ],
    faqs: faqs(),
  },
  {
    slug: 'elysator-produkte',
    section: 'installateure',
    title: 'Elysator-Produkte',
    imageHint: 'Elysator-Gerät',
    teaser: 'Elysator-Produkte ab Lager – mit technischem Kundendienst aus Obfelden und Bubikon.',
    intro: 'Als Elysator technischer Kundendienst haben wir verschiedene Elysator-Produkte am Lager und betreuen sie im Service.',
    steps: steps(),
    blocks: blocks(),
    faqs: faqs(),
  },
  {
    slug: 'serviceunterstuetzung',
    section: 'installateure',
    title: 'Service\u00ADunterstützung',
    imageHint: 'Techniker mit Installateur',
    teaser: '[1–2 Sätze zum Thema]',
    intro: '[Einleitung: Nutzen in 2 Sätzen]',
    steps: steps(),
    blocks: blocks(),
    faqs: faqs(),
  },
];

export const sections = {
  boiler: {
    title: 'Boiler',
    href: routes.boiler,
    siblingsTitle: 'Weitere Boiler-Themen',
    ctaLabel: 'Service anfragen',
    ctaHref: routes.formService,
  },
  installateure: {
    title: 'Für Installateure',
    href: routes.installers,
    siblingsTitle: 'Weitere Themen für Installateure',
    ctaLabel: 'Ersatzteil anfragen',
    ctaHref: routes.formParts,
  },
} as const;

export const topicHref = (t: Topic) => `${sections[t.section].href}${t.slug}/`;

export const topicsOf = (section: Topic['section']) => topics.filter((t) => t.section === section);

/** «Warum Sie bei uns richtig sind» (Solar, Korrosions- und Kalkschutz) */
export const whyUs = [
  { title: 'Kompetente Beratung', text: 'Seit 1992 auf Warmwasser spezialisiert: Boiler, Solar sowie Korrosions- und Kalkschutz.' },
  { title: 'Effiziente Ausführung', text: 'Unsere Servicefahrzeuge führen Ersatzteile für nahezu alle Boilermodelle mit.' },
  { title: 'Transparenter Preis', text: 'Netto-Pauschalpreise inklusive Anfahrt, Kleinmaterial und Dichtungen.' },
  { title: 'Umfassender Service', text: 'Möglichst kurze Unterbrüche beim Warmwasser und ein Service-Intervall, der zu Ihrer Anlage passt.' },
];

export const placeholderProjects = [1, 2, 3, 4].map((n) => ({ title: `[Projekt ${n}]`, meta: '[Ort · Jahr]' }));
