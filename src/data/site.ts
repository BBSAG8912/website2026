/**
 * Zentrale Stammdaten und Routen.
 * Kontaktdaten gemäss Handoff «Kontaktdaten (bestätigt)».
 */

export const company = {
  name: 'Berger Boiler-Service AG',
  claim: 'Ihr Warmwasserspezialist seit 1992',
  subClaim: 'Elysator Servicestelle',
  phone: {
    display: '044 762 40 00',
    href: 'tel:0447624000',
  },
  email: 'berger@boiler-service.ch',
  instagram: 'https://www.instagram.com/boiler.service/',
  locations: [
    { label: 'Hauptsitz', name: 'Obfelden', street: 'Räschstrasse 31', city: '8912 Obfelden' },
    { label: 'Standort', name: 'Bubikon', street: 'Rosswiesstrasse 23', city: '8608 Bubikon' },
  ],
} as const;

/** Alle Routen der Sitemap an einem Ort – Seiten folgen schrittweise. */
export const routes = {
  home: '/',
  boiler: '/boiler/',
  boilerService: '/boiler/service-und-entkalkung/',
  boilerRepair: '/boiler/reparatur-und-ersatz/',
  solar: '/solar/',
  corrosion: '/korrosions-und-kalkschutz/',
  installers: '/installateure/',
  installersParts: '/installateure/boiler-ersatzteile/',
  installersSales: '/installateure/boiler-verkauf/',
  installersElysator: '/installateure/elysator-produkte/',
  installersSupport: '/installateure/serviceunterstuetzung/',
  about: '/ueber-uns/',
  news: '/aktuelles/',
  newsJobs: '/aktuelles/#offene-stellen',
  contact: '/kontakt/',
  contactForm: '/kontakt/#kontaktformular',
  formService: '/service-anfragen/',
  formSolar: '/solar-anfragen/',
  formParts: '/ersatzteil-anfragen/',
  imprint: '/impressum/',
  privacy: '/datenschutz/',
} as const;
