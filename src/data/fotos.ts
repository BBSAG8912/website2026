/**
 * Fotos aus src/assets/fotos/ nach Dateiname (ohne Endung).
 * Fehlt eine Datei noch, liefert foto() undefined und die Seite zeigt den
 * «FOTO: …»-Platzhalter. Neue Bilder einfach mit dem passenden Namen ablegen.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase();
  byName.set(name, mod.default);
}

export const foto = (name: string): ImageMetadata | undefined => byName.get(name.toLowerCase());
