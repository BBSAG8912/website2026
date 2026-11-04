/**
 * Formular-Definitionen (6h Service anfragen, 6i Solar anfragen, 6j Ersatzteil anfragen, Kontakt).
 *
 * Auswahllisten mit leeren `options` sind beim Kunden noch offen (Boiler-Marken, Bauarten,
 * Lieferoptionen …). Solange die Liste leer ist, wird ein freies Textfeld angezeigt.
 * Sobald Werte vorliegen, hier eintragen – dann erscheint automatisch eine Auswahl.
 */

export type FieldType = 'text' | 'email' | 'tel' | 'plz' | 'number' | 'year' | 'select' | 'textarea' | 'file';

export interface FieldDef {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  /** Spalten von 6 (Desktop) */
  span: 1 | 2 | 3 | 4 | 5 | 6;
  /** Spalten von 6 (mobil) – Standard 6 */
  mspan?: 1 | 2 | 3 | 4 | 5 | 6;
  unit?: string;
  options?: string[];
  autocomplete?: string;
}

export interface SectionDef {
  key: string;
  title: string;
  fields: FieldDef[];
  hint?: string;
  /** Nur zeigen, wenn Auswahl-Kachel diesen Wert hat: «name=wert» */
  showWhen?: string;
}

export interface ChoiceDef {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
}

export interface FormDef {
  id: string;
  /** Wird als verstecktes Feld «formular» mitgesendet */
  formName: string;
  choice: ChoiceDef;
  sections: SectionDef[];
}

/* ---------- Offene Auswahllisten (Werte vom Kunden) ---------- */
export const boilerBrands: string[] = [];
export const boilerConstructions: string[] = [];
export const deliveryOptions: string[] = [];
export const buildingTypes: string[] = [];
export const hotWaterSources: string[] = [];
export const solarManufacturers: string[] = [];
export const solarConcerns: string[] = [];

/* ---------- Bausteine ---------- */
const person = (): FieldDef[] => [
  { name: 'vorname', label: 'Vorname', required: true, span: 3, autocomplete: 'given-name' },
  { name: 'nachname', label: 'Nachname', required: true, span: 3, autocomplete: 'family-name' },
  { name: 'adresse', label: 'Adresse', required: true, span: 6, autocomplete: 'street-address' },
  { name: 'plz', label: 'PLZ', type: 'plz', required: true, span: 2, mspan: 2, autocomplete: 'postal-code' },
  { name: 'ort', label: 'Ort', required: true, span: 4, mspan: 4, autocomplete: 'address-level2' },
  { name: 'email', label: 'E-Mail', type: 'email', required: true, span: 3, autocomplete: 'email' },
  { name: 'telefon', label: 'Telefon', type: 'tel', required: true, span: 3, autocomplete: 'tel' },
];

export const serviceForm: FormDef = {
  id: 'service',
  formName: 'Service anfragen (Boiler)',
  choice: {
    name: 'anfrageart',
    legend: 'Art der Anfrage',
    options: [
      { value: 'Offerte', label: 'Offerte' },
      { value: 'Auftrag', label: 'Auftrag' },
    ],
  },
  sections: [
    { key: 'angaben', title: 'Ihre Angaben', fields: person() },
    {
      key: 'boiler',
      title: 'Ihr Boiler',
      hint: '[Hinweis: Angaben stehen auf dem Typenschild]',
      fields: [
        { name: 'boiler_marke', label: 'Boiler-Marke', type: 'select', options: boilerBrands, span: 2 },
        { name: 'boiler_typ', label: 'Boiler-Typ', span: 2 },
        { name: 'boiler_groesse', label: 'Boiler-Grösse', type: 'number', unit: 'Liter', span: 2 },
        { name: 'bemerkungen', label: 'Bemerkungen', type: 'textarea', span: 6 },
      ],
    },
  ],
};

export const solarForm: FormDef = {
  id: 'solar',
  formName: 'Solar anfragen',
  choice: {
    name: 'anlage',
    legend: 'Art der Anlage',
    options: [
      { value: 'Neue Anlage', label: 'Neue Anlage' },
      { value: 'Bestehende Anlage', label: 'Bestehende Anlage' },
    ],
  },
  sections: [
    { key: 'angaben', title: 'Ihre Angaben', fields: person() },
    {
      key: 'objekt',
      title: 'Ihr Objekt',
      showWhen: 'anlage=Neue Anlage',
      fields: [
        { name: 'gebaeudeart', label: 'Gebäudeart', type: 'select', options: buildingTypes, span: 2 },
        { name: 'personen', label: 'Personen im Haushalt', type: 'number', span: 2 },
        { name: 'warmwasser_heute', label: 'Heutige Warmwasser-Erzeugung', type: 'select', options: hotWaterSources, span: 2 },
        { name: 'fotos', label: 'Fotos Dach / Technikraum', type: 'file', span: 6 },
        { name: 'bemerkungen', label: 'Bemerkungen', type: 'textarea', span: 6 },
      ],
    },
    {
      key: 'anlage',
      title: 'Ihre Anlage',
      showWhen: 'anlage=Bestehende Anlage',
      fields: [
        { name: 'hersteller', label: 'Hersteller', type: 'select', options: solarManufacturers, span: 2 },
        { name: 'baujahr', label: 'Baujahr', type: 'year', span: 2 },
        { name: 'kollektorflaeche', label: 'Kollektorfläche', type: 'number', unit: 'm²', span: 2 },
        { name: 'anliegen', label: 'Anliegen', type: 'select', options: solarConcerns, span: 6 },
        { name: 'fotos', label: 'Fotos Anlage', type: 'file', span: 6 },
        { name: 'bemerkungen', label: 'Bemerkungen', type: 'textarea', span: 6 },
      ],
    },
  ],
};

export const partsForm: FormDef = {
  id: 'ersatzteil',
  formName: 'Ersatzteil anfragen (Installateure)',
  choice: {
    name: 'anfrageart',
    legend: 'Art der Anfrage',
    options: [
      { value: 'Offerte', label: 'Offerte' },
      { value: 'Bestellung', label: 'Bestellung' },
    ],
  },
  sections: [
    {
      key: 'angaben',
      title: 'Ihre Angaben',
      fields: [
        { name: 'firma', label: 'Firma', span: 4, autocomplete: 'organization' },
        { name: 'kundennummer', label: 'Kundennummer', span: 2 },
        ...person(),
      ],
    },
    {
      key: 'ersatzteil',
      title: 'Ersatzteil',
      fields: [
        { name: 'boiler_marke', label: 'Boiler-Marke', type: 'select', options: boilerBrands, span: 2 },
        { name: 'boiler_typ', label: 'Boiler-Typ', span: 2 },
        { name: 'boiler_groesse', label: 'Boiler-Grösse', type: 'number', unit: 'Liter', span: 2 },
        { name: 'bauart', label: 'Bauart', type: 'select', options: boilerConstructions, span: 2 },
        { name: 'artikelnummer', label: 'Artikelnummer', span: 2 },
        { name: 'bezeichnung', label: 'Bezeichnung', span: 2 },
        { name: 'optische_merkmale', label: 'Optische Merkmale', span: 6 },
        { name: 'artikel', label: 'Gewünschte Artikel inkl. Anzahl', type: 'textarea', span: 6 },
        { name: 'fotos', label: 'Foto Typenschild / Teil', type: 'file', span: 6 },
        { name: 'lieferung', label: 'Lieferung', type: 'select', options: deliveryOptions, span: 6 },
        { name: 'bemerkungen', label: 'Bemerkungen', type: 'textarea', span: 6 },
      ],
    },
  ],
};

export const contactFields: FieldDef[] = [
  { name: 'vorname', label: 'Vorname', span: 3, autocomplete: 'given-name' },
  { name: 'nachname', label: 'Nachname', span: 3, autocomplete: 'family-name' },
  { name: 'email', label: 'E-Mail', type: 'email', required: true, span: 3, autocomplete: 'email' },
  { name: 'telefon', label: 'Telefon', type: 'tel', span: 3, autocomplete: 'tel' },
  { name: 'nachricht', label: 'Nachricht', type: 'textarea', required: true, span: 6 },
];

/** Datei-Upload: erlaubte Typen und Grenzen (clientseitig; serverseitig erneut prüfen) */
export const uploadRules = {
  accept: 'image/*,application/pdf',
  maxFiles: 5,
  maxFileMb: 10,
};
