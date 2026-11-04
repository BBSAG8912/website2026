/**
 * News und offene Stellen.
 * Solange keine echten Einträge vorliegen, werden Platzhalter angezeigt.
 * Später ggf. als Astro Content Collection (Markdown pro Beitrag) umsetzen.
 */
import type { ImageMetadata } from 'astro';

export interface NewsItem {
  date: string;
  title: string;
  teaser: string;
  href?: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export interface Job {
  title: string;
  meta: string;
  href?: string;
}

export const news: NewsItem[] = [
  {
    date: '8. Mai 2026',
    title: 'Sponsoring Kantonales Schwingfest Mettmenstetten',
    teaser: 'Wir unterstützen das Kantonale Schwingfest in Mettmenstetten als Sponsor.',
  },
  {
    date: 'Juni 2025',
    title: 'Prospekt Berger Solar-WP Boiler 600 SWS 3',
    teaser: 'Neu gibt es einen Prospekt zum Berger Solar-WP Boiler 600 SWS 3.',
  },
];

export const jobs: Job[] = [
  {
    title: 'Heizungsinstallateur/in EFZ mit Solarerfahrung',
    meta: '[Pensum · Standort]',
  },
];
