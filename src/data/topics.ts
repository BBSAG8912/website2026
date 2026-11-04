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

const base = (t: Pick<Topic, 'slug' | 'section' | 'title' | 'imageHint'>): Topic => ({
  ...t,
  teaser: '[1–2 Sätze zum Thema]',
  intro: '[Einleitung: Nutzen in 2 Sätzen]',
  steps: steps(),
  blocks: blocks(),
  faqs: faqs(),
});

export const topics: Topic[] = [
  base({ slug: 'service-und-entkalkung', section: 'boiler', title: 'Service und Entkalkung', imageHint: 'Entkalkung eines Boilers' }),
  base({ slug: 'reparatur-und-ersatz', section: 'boiler', title: 'Reparatur und Ersatz', imageHint: 'Montage eines neuen Boilers' }),
  base({ slug: 'boiler-ersatzteile', section: 'installateure', title: 'Boiler-Ersatzteile', imageHint: 'Ersatzteil-Regal' }),
  base({ slug: 'boiler-verkauf', section: 'installateure', title: 'Boiler-Verkauf', imageHint: 'Neue Boiler im Lager' }),
  base({ slug: 'elysator-produkte', section: 'installateure', title: 'Elysator-Produkte', imageHint: 'Elysator-Gerät' }),
  base({ slug: 'serviceunterstuetzung', section: 'installateure', title: 'Service\u00ADunterstützung', imageHint: 'Techniker mit Installateur' }),
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
  { title: 'Kompetente Beratung', text: '[1–2 Sätze]' },
  { title: 'Effiziente Ausführung', text: '[1–2 Sätze]' },
  { title: 'Transparenter Preis', text: '[1–2 Sätze]' },
  { title: 'Umfassender Service', text: '[1–2 Sätze]' },
];

export const placeholderProjects = [1, 2, 3, 4].map((n) => ({ title: `[Projekt ${n}]`, meta: '[Ort · Jahr]' }));
