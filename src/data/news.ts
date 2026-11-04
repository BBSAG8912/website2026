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

export const news: NewsItem[] = [1, 2, 3].map((n) => ({
  date: '[Datum]',
  title: `[Titel Beitrag ${n}]`,
  teaser: '[Anriss]',
}));

export const jobs: Job[] = [1, 2, 3].map((n) => ({
  title: `[Stelle ${n}]`,
  meta: '[Pensum · Standort]',
}));
