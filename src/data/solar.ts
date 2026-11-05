/**
 * Inhalte der Seite «Solar» (aus der Design-Arbeitsfläche «Berger Website – Seiten und Texte»).
 * Texte in [eckigen Klammern] sind offen und werden auf der Seite gestrichelt markiert.
 */
import type { ImageMetadata } from 'astro';
import volldach from '../assets/fotos/referenz-volldach.jpg';

export const solarIntro = {
  statement: 'Seit über 30 Jahren nutzen wir Solarenergie.',
  paragraphs: [
    'Wir beraten Sie persönlich und kompetent zu Solaranlagen für die Warmwasseraufbereitung, kombiniert mit Heizsystemen sowie zur Erzeugung und Speicherung Ihres eigenen Stroms.',
    'Unser Team für erneuerbare Energien begleitet Sie von der ersten Beratung über die Planung bis zur Installation und Inbetriebnahme. Dabei setzen wir auf hochwertige Komponenten und führen möglichst alle Arbeiten mit unseren eigenen Fachkräften aus.',
    'So erhalten Sie eine zuverlässige und auf Ihre Bedürfnisse abgestimmte Lösung aus einer Hand. Auch nach der Installation sind wir gerne für Sie da.',
  ],
};

export const solarBlocks = [
  {
    title: 'Über 30 Jahre Erfahrung',
    text: 'Seit über 30 Jahren beschäftigen wir uns mit Solarenergie. Dank unserer langjährigen Erfahrung betrachten wir nicht nur einzelne Teilbereiche, sondern das gesamte Energiesystem. So entwickeln wir durchdachte Lösungen, bei denen die verschiedenen Komponenten optimal zusammenspielen.',
  },
  {
    title: 'Alles aus einer Hand',
    text: 'Von der Beratung über die Planung bis zur Installation und zum Service begleiten wir Sie persönlich. Dabei setzen wir auf eigene Fachkräfte, hochwertige Komponenten und eine zuverlässige Ausführung.',
  },
  {
    title: 'Wir bilden aus',
    text: 'Als zukunftsorientiertes Unternehmen geben wir unser Fachwissen gerne an die nächste Generation weiter. Deshalb bilden wir Solarinstallateurinnen und Solarinstallateure EFZ aus und fördern so die Fachkräfte von morgen.',
  },
];

/** Balkendiagramme: Werte in kWh pro m² und Jahr; Skala bis `max`. */
export const chartMax = 600;

export const chartYield = [
  { label: 'Solarthermie (Wärme)', value: 450, display: 'ca. 450', range: [400, 600], note: 'Spanne 400–600 kWh, je nach Kollektor und Anlage', tone: 'primary' },
  { label: 'Photovoltaik (Strom)', value: 165, display: 'ca. 165', range: [140, 185], note: 'Spanne 140–185 kWh (850–1100 kWh pro kWp, rund 6 m² pro kWp)', tone: 'light' },
] as const;

export const chartHeat = [
  { label: 'Solarthermie, direkt in den Boiler', value: 450, display: 'ca. 450', tone: 'primary' },
  { label: 'PV-Strom mit Wärmepumpe', value: 495, display: 'ca. 500', tone: 'light' },
  { label: 'PV-Strom mit Heizstab', value: 165, display: 'ca. 165', tone: 'pale' },
] as const;

export const compare = {
  thermal: {
    title: 'Solarthermie',
    pros: [
      'Am meisten Energie pro m² Dach',
      'Wärme wird direkt im Boiler gespeichert',
      'Deckt im Einfamilienhaus 70–85 % des Warmwassers',
      'Reduziert die Laufleistung Ihrer Wärmepumpe und erhöht somit die Lebensdauer',
    ],
    cons: ['Liefert nur Wärme, keinen Strom'],
  },
  pv: {
    title: 'Photovoltaik',
    pros: [
      'Strom ist vielseitig: Haushalt, Wärmepumpe, E-Auto',
      'Überschuss geht in den Batteriespeicher oder ins Netz',
      'Mit Wärmepumpe auch für Wärme sehr effizient',
    ],
    cons: ['Weniger Energie pro m² als Solarthermie', 'Um Wärme zu erzeugen, wird viel mehr Fläche benötigt'],
  },
  combined: {
    title: 'Warum kombinieren?',
    points: [
      'Ein kleiner Kollektor deckt das Warmwasser – der PV-Strom bleibt frei für Haushalt, Wärmepumpe und die Mobilität.',
      'Die Dachfläche wird so eingesetzt, wie Sie und Ihr Gebäude es benötigen.',
      'Ein Kombispeicher wie der Berger Solar-WP Boiler 600 SWS 3 nimmt Wärme von Sonne und Wärmepumpe auf.',
      'Wir planen Boiler, Kollektoren, Wärmepumpe und PV als ein System – aus einer Hand.',
    ],
  },
};

export const sources =
  'Quellen der Richtwerte: Swissolar, Faktenblatt Solarwärme (ca. 450 kWh/m² im Einfamilienhaus, 70–85 % Warmwasser-Deckung) und Merkblatt Photovoltaik (850–1100 kWh/kWp, 6 m²/kWp); GebäudeKlima Schweiz, Infoblatt Solar (Flachkollektoren 400–600 kWh/m², Wirkungsgrad zwei- bis dreimal höher als PV). Neuere PV-Module brauchen etwas weniger Fläche pro kWp.';

export interface Reference {
  title: string;
  text: string;
  image?: ImageMetadata;
  imageAlt?: string;
  facts: { label: string; value: string }[];
}

const openFacts = [
  { label: 'PV-Leistung', value: '[kWp]' },
  { label: 'Kollektorfläche', value: '[m²]' },
  { label: 'Warmwasser', value: '[Liter]' },
  { label: 'Jahresertrag', value: '[kWh]' },
];

export const references: Reference[] = [
  {
    title: 'Volldachlösung in Rüedisbach',
    text: 'Warmwasser, Strom und Batteriespeicher: Die PV-Anlage auf dem ganzen Dach versorgt die Kühlanlagen des Lebensmittelladens. Deren Abwärme heizt über Wärmetauscher das Wasser für Heizung und Warmwasser der Wohnungen.',
    image: volldach,
    imageAlt: 'Solaranlage über die ganze Dachfläche eines Holzbaus',
    facts: [
      { label: 'PV-Leistung', value: '35,8 kWp' },
      { label: 'Wasserspeicher', value: '1800 Liter' },
      { label: 'Batteriespeicher', value: '15,0 kWh' },
      { label: 'Kollektorfläche', value: '30 m²' },
    ],
  },
  ...[2, 3, 4].map((n) => ({
    title: `[Projekt ${n}]`,
    text: '[Kurze Beschreibung: Gebäude, Anlage, Besonderheit]',
    facts: openFacts,
  })),
];

export const solarFaqs = [
  {
    q: 'Was ist der Unterschied zwischen Solarthermie und Photovoltaik?',
    a: 'Solarthermie erwärmt mit Sonnenkollektoren Wasser, das im Boiler oder im Speicher der Heizung gespeichert wird. Photovoltaik wandelt Sonnenlicht in Strom um, den Sie im Haus nutzen, speichern oder ins Netz einspeisen.',
  },
  {
    q: 'Was bringt mehr pro Quadratmeter Dach?',
    a: 'Ein Sonnenkollektor liefert pro m² rund zwei- bis dreimal mehr Energie als ein PV-Modul – aber als Wärme. Strom ist dafür vielseitiger einsetzbar. Mit einer Wärmepumpe wird auch aus PV-Strom sehr effizient Wärme.',
  },
  {
    q: 'Lohnt sich eine Kombination aus Solarthermie und PV?',
    a: 'Oft ja. Ein kleiner Kollektor deckt einen grossen Teil des Warmwassers, und der Rest des Dachs produziert Strom für Haushalt, Wärmepumpe oder E-Auto. Ob sich das für Ihr Haus lohnt, klären wir in der Beratung.',
  },
  {
    q: 'Wie viel Warmwasser deckt eine Solarthermie-Anlage?',
    a: 'Im Einfamilienhaus deckt eine gut ausgelegte Anlage rund 70 bis 85 % des Warmwassers. Im Mehrfamilienhaus rechnet man mit etwa 1 m² Kollektorfläche pro Person für rund die Hälfte des Warmwassers.',
  },
  {
    q: 'Funktioniert Solar auch im Winter?',
    a: 'Ja, aber mit deutlich weniger Ertrag als im Sommer. Fehlt Sonnenwärme, heizt der Boiler mit der bestehenden Heizung, der Wärmepumpe oder elektrisch nach.',
  },
  {
    q: 'Brauche ich einen Batteriespeicher?',
    a: 'Nicht zwingend. Ein Batteriespeicher erhöht den Anteil des eigenen Stroms, den Sie selbst nutzen. Auch ein Boiler oder eine Wärmepumpe kann Solarstrom als Wärme speichern. Wir zeigen Ihnen, was für Ihren Verbrauch sinnvoll ist.',
  },
  {
    q: 'Kann ich meinen bestehenden Boiler weiter nutzen?',
    a: 'Das hängt vom Boiler ab. Für Solarwärme braucht der Speicher einen Wärmetauscher, über den die Kollektoren das Wasser erwärmen. Ist keiner vorhanden oder ist der Boiler alt, ist ein Solar- oder Kombiboiler meist die bessere Lösung. Für Solarstrom lässt sich ein bestehender Elektroboiler oft so steuern, dass er bevorzugt mit eigenem Strom heizt. Wir prüfen Zustand, Grösse und Anschlüsse vor Ort und sagen Ihnen ehrlich, was sich lohnt.',
  },
  {
    q: 'Kann ich mit Solarstrom auch Warmwasser machen?',
    a: 'Ja. Am effizientesten mit einem Wärmepumpenboiler oder einer Wärmepumpe: Sie machen aus 1 kWh Strom rund 3 kWh Wärme. Ein Elektroboiler mit Heizstab geht auch, braucht aber etwa dreimal mehr Strom für dieselbe Menge Warmwasser. Mit einer passenden Steuerung heizt der Boiler vor allem dann, wenn die Sonne scheint.',
  },
  {
    q: 'Welche Dachausrichtung eignet sich?',
    a: 'Am meisten Ertrag bringt ein Dach nach Süden. Für Photovoltaik eignen sich auch Ost- und Westdächer gut: Sie liefern über den Tag verteilter Strom, morgens und abends, wenn im Haushalt oft mehr verbraucht wird. Auf Flachdächern werden die Module oder Kollektoren aufgeständert. Wir beurteilen Ihr Dach bei der Beratung.',
  },
  {
    q: 'Was passiert mit überschüssigem Solarstrom?',
    a: 'Was Sie nicht selbst verbrauchen, fliesst ins Stromnetz und wird von Ihrem Energieversorger vergütet. Wer mehr selbst nutzen will, lädt damit einen Batteriespeicher, das E-Auto oder heizt den Boiler.',
  },
  {
    q: 'Wie lange hält eine Solaranlage?',
    a: 'Kollektoren und PV-Module sind auf viele Jahrzehnte ausgelegt. Einzelne Teile wie der Wechselrichter der PV-Anlage oder die Pumpe der Solarthermie werden während der Lebensdauer meist einmal ersetzt. Regelmässiger Service hält die Anlage zuverlässig.',
  },
  {
    q: 'Braucht es eine Baubewilligung?',
    a: 'Für gut angepasste Solaranlagen auf Dächern genügt in der Schweiz meist eine Meldung bei der Gemeinde. In Kern- und Schutzzonen oder bei Denkmälern braucht es eine Bewilligung.',
  },
  {
    q: 'Gibt es Förderbeiträge?',
    a: 'Für Photovoltaik und Solarwärme gibt es je nach Anlage Förderbeiträge von Bund, Kanton oder Gemeinde. Wir sagen Ihnen in der Beratung, welche für Sie in Frage kommen.',
  },
  {
    q: 'Wer wartet die Anlage?',
    a: 'Wir. Nach der Installation sind wir weiter für Sie da – für Service, Kontrolle und Reparaturen an Kollektoren, Boiler und PV-Anlage.',
  },
];

export const solarWhyUs = [
  { title: 'Kompetente Beratung', text: 'Wir beraten Sie persönlich und entwickeln gemeinsam mit Ihnen eine passende Lösung für Ihre Energieversorgung.' },
  { title: 'Fachgerechte Ausführung', text: 'Unsere eigenen Solarmitarbeitenden sorgen für eine sorgfältige Installation mit hochwertigen und bewährten Komponenten.' },
  { title: 'Transparente Angebote', text: 'Wir erstellen verständliche und nachvollziehbare Angebote, abgestimmt auf Ihre Bedürfnisse und die Gegebenheiten vor Ort.' },
  { title: 'Service und Betreuung', text: 'Auch nach der Installation sind wir für Sie da. Unser eigenes Serviceteam kümmert sich um Wartungen, Reparaturen und Störungen.' },
];
