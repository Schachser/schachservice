export type City = {
  id: string;
  name: string;
  href: string;
  tagline: string;
  description: string;
  area?: string;
  mapEmbed: string;
  population?: string;
  highlights: string[];
  neighborhoods?: string[];
  localFaqs: { question: string; answer: string }[];
};

export const cities: City[] = [
  {
    id: "mannheim",
    name: "Mannheim",
    href: "/regionen/mannheim",
    tagline: "Unsere Heimatstadt",
    description: "Als Mannheimer Unternehmen kennen wir jeden Stadtteil – von den Quadraten bis nach Käfertal.",
    area: "Metropolregion Rhein-Neckar",
    population: "330.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.4660!3d49.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc27e60d3b59%3A0x40dcfeee93c80f17!2sMannheim!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Festpreise für alle Stadtteile",
      "Halteverbotsbeantragung beim Ordnungsamt",
      "Kenntnis aller Einfahrtsbeschränkungen",
      "Außenaufzug für Wohnungen ohne Fahrstuhl",
      "Schnellste Reaktionszeit in Mannheim",
    ],
    neighborhoods: [
      "Quadrate (Innenstadt)", "Lindenhof", "Niederfeld", "Neckarstadt-West",
      "Feudenheim", "Käfertal", "Seckenheim", "Sandhofen",
      "Rheinau", "Gartenstadt", "Wallstadt", "Friedrichsfeld",
    ],
    localFaqs: [
      {
        question: "Wie gut kennen Sie die Mannheimer Stadtteile?",
        answer: "Als in Mannheim ansässiges Unternehmen sind wir in jedem Stadtteil zu Hause – von den engen Gassen der Quadrate bis in die Außenbezirke Sandhofen und Wallstadt.",
      },
      {
        question: "Beantragen Sie Haltverbotszonen in Mannheim?",
        answer: "Ja – das gehört bei uns zum Standardservice. Wir beantragen die Schilder beim Ordnungsamt Mannheim für Sie.",
      },
      {
        question: "Wie schnell können Sie in Mannheim kommen?",
        answer: "Als lokales Unternehmen können wir für Besichtigungen und Express-Umzüge oft innerhalb von 24 Stunden reagieren.",
      },
    ],
  },
  {
    id: "heidelberg",
    name: "Heidelberg",
    href: "/regionen/heidelberg",
    tagline: "Schlossstadt & Universitätsmetropole",
    description: "Umzüge in der romantischen Altstadt bis in die modernen Stadtteile Heidelbergs.",
    area: "Metropolregion Rhein-Neckar",
    population: "160.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.6924!3d49.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797b0e2bcfcccb3%3A0x2eaa8b2b0e3f8c9!2sHeidelberg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Erfahrung in der Altstadt und Bergheim",
      "Enge Gassen kein Problem",
      "Studentenwohnungen und Villen",
      "Schnelle Verbindung von Mannheim",
      "Außenaufzug verfügbar",
    ],
    neighborhoods: ["Altstadt", "Bergheim", "Weststadt", "Handschuhsheim", "Neuenheim", "Rohrbach", "Kirchheim"],
    localFaqs: [
      {
        question: "Haben Sie Erfahrung mit der engen Heidelberger Altstadt?",
        answer: "Ja – wir kennen die Parkrestriktionen, Einfahrtssperren und schmalen Durchfahrten der Altstadt sehr gut.",
      },
      {
        question: "Führen Sie auch Studentenumzüge in Heidelberg durch?",
        answer: "Selbstverständlich – zu fairen Preisen für WG-Zimmer und Studentenapartments.",
      },
      {
        question: "Wie weit ist Mannheim nach Heidelberg?",
        answer: "Nur ca. 20 km – wir sind schnell vor Ort ohne Mehrkosten.",
      },
    ],
  },
  {
    id: "ludwigshafen",
    name: "Ludwigshafen",
    href: "/regionen/ludwigshafen",
    tagline: "Direkt am Rhein",
    description: "Schnelle und zuverlässige Umzüge in Mannheims Schwesterstadt.",
    area: "Metropolregion Rhein-Neckar",
    population: "173.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.4420!3d49.4773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc1aba826155%3A0xa6e38bd880e36917!2sLudwigshafen+am+Rhein!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Direkt am Rhein – kurze Fahrtzeit",
      "Alle Stadtteile abgedeckt",
      "Halteverbotsbeantragung in Ludwigshafen",
      "Erfahrung mit Hochhäusern",
      "Kombiumzüge MA↔LU möglich",
    ],
    neighborhoods: ["Mitte", "Nord", "Süd", "Oggersheim", "Oppau", "Gartenstadt", "Friesenheim"],
    localFaqs: [
      {
        question: "Führen Sie auch Kombi-Umzüge zwischen Mannheim und Ludwigshafen durch?",
        answer: "Ja – viele unserer Kunden ziehen von Mannheim nach Ludwigshafen oder umgekehrt. Das ist für uns eine Standardstrecke.",
      },
      {
        question: "Kennen Sie die Hochhäuser in Ludwigshafen?",
        answer: "Ja – wir haben Erfahrung mit den großen Wohnblöcken in Nord und Mitte und kennen die Aufzugsituationen.",
      },
    ],
  },
  {
    id: "frankenthal",
    name: "Frankenthal",
    href: "/regionen/frankenthal",
    tagline: "Nördlich von Mannheim",
    description: "Professionelle Umzugsdienstleistungen in Frankenthal und Umgebung.",
    area: "Rheinland-Pfalz",
    population: "49.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.3528!3d49.5347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479782edbbf0b7e1%3A0x5e9b7f05e9a3c8c0!2sFrankenthal!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Kurze Anfahrt von Mannheim",
      "Alle Frankenthal Stadtteile",
      "Festpreisgarantie",
      "Erfahrenes lokales Team",
      "Halteverbotszone organisiert",
    ],
    neighborhoods: ["Innenstadt", "Eppstein", "Flomersheim", "Mörsch", "Studernheim"],
    localFaqs: [
      {
        question: "Sind Sie schnell in Frankenthal?",
        answer: "Von Mannheim aus sind wir in ca. 15–20 Minuten in Frankenthal – kein Mehraufwand für Sie.",
      },
      {
        question: "Kennen Sie die Gemeinden rund um Frankenthal?",
        answer: "Ja – auch Eppstein, Flomersheim und Studernheim sind für uns bekannte Ziele.",
      },
    ],
  },
  {
    id: "worms",
    name: "Worms",
    href: "/regionen/worms",
    tagline: "Nibelungenstadt am Rhein",
    description: "Zuverlässige Umzüge in Worms und der gesamten Wormser Rheinebene.",
    area: "Rheinland-Pfalz",
    population: "84.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.3601!3d49.6317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797adbe25d29885%3A0xb29fd6490e05b74e!2sWorms!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Alle Wormser Stadtteile",
      "Festpreisgarantie",
      "Erfahrung mit Altbauten",
      "Schnelle Anfahrt",
      "Vollversicherung",
    ],
    neighborhoods: ["Innenstadt", "Hochheim", "Horchheim", "Pfiffligheim", "Neuhausen", "Herrnsheim"],
    localFaqs: [
      {
        question: "Wie weit ist Mannheim nach Worms?",
        answer: "Ca. 25 km – wir sind in unter 30 Minuten vor Ort.",
      },
      {
        question: "Haben Sie Erfahrung mit den historischen Gebäuden in Worms?",
        answer: "Ja – Altbauten mit engen Treppenhäusern und besonderen Böden sind uns vertraut.",
      },
    ],
  },
  {
    id: "speyer",
    name: "Speyer",
    href: "/regionen/speyer",
    tagline: "Domstadt am Rhein",
    description: "Schonende Umzüge in der historischen Domstadt Speyer.",
    area: "Rheinland-Pfalz",
    population: "51.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.4395!3d49.3172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479803ddb9e8edcd%3A0x94ba29a8e1c49e10!2sSpeyer!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Historische Altstadt erfahren",
      "Alle Speyerer Stadtteile",
      "Festpreisgarantie",
      "Parkbeantragung organisiert",
      "Vollversicherung",
    ],
    neighborhoods: ["Innenstadt", "Speyer-Nord", "Speyer-Süd", "Speyer-West", "Speyer-Ost"],
    localFaqs: [
      {
        question: "Wie erreichen Sie Speyer?",
        answer: "Speyer liegt ca. 25 km südlich von Mannheim – wir sind schnell und ohne Aufpreis vor Ort.",
      },
      {
        question: "Haben Sie Erfahrung in der Speyerer Altstadt?",
        answer: "Ja – wir kennen die Parkrestriktionen und engen Straßen rund um den Dom.",
      },
    ],
  },
  {
    id: "schwetzingen",
    name: "Schwetzingen",
    href: "/regionen/schwetzingen",
    tagline: "Spargelstadt im Herzen der Metropolregion",
    description: "Zuverlässige Premium-Umzüge in Schwetzingen und der Umgebung.",
    area: "Metropolregion Rhein-Neckar",
    population: "21.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20800!2d8.5744!3d49.3836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797b8d80b9e4e79%3A0x1234567890abcdef!2sSchwetzingen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Kurze Anfahrt von Mannheim (15 km)",
      "Alle Schwetzinger Stadtteile",
      "Festpreisgarantie",
      "Erfahrung in der Region",
      "Vollversicherung inklusive",
    ],
    neighborhoods: ["Innenstadt", "Nordstadt", "Südstadt", "Ketsch", "Plankstadt"],
    localFaqs: [
      {
        question: "Wie weit ist Schwetzingen von Mannheim?",
        answer: "Nur ca. 15 km – wir sind in kurzer Zeit vor Ort ohne zusätzliche Fahrtkosten.",
      },
      {
        question: "Führen Sie auch Umzüge in den Schwetzinger Ortschaften durch?",
        answer: "Ja – auch Plankstadt, Ketsch und alle umliegenden Gemeinden bedienen wir problemlos.",
      },
    ],
  },
  {
    id: "weinheim",
    name: "Weinheim",
    href: "/regionen/weinheim",
    tagline: "Zweiburgenstadt an der Bergstraße",
    description: "Premium-Umzüge in Weinheim und der Bergstraße.",
    area: "Metropolregion Rhein-Neckar",
    population: "44.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20800!2d8.6656!3d49.5477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a17b5b5b5b5b%3A0xabcdef1234567890!2sWeinheim!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Bergstraße und Weinheim-Zentrum",
      "Villenviertel-Erfahrung",
      "Alle Stadtteile abgedeckt",
      "Festpreisgarantie",
      "Vollversicherung",
    ],
    neighborhoods: ["Innenstadt", "Lützelsachsen", "Sulzbach", "Rippenweier", "Oberflockenbach", "Hohensachsen"],
    localFaqs: [
      {
        question: "Haben Sie Erfahrung mit den Villenvierteln in Weinheim?",
        answer: "Ja – große Häuser, Treppen und aufwändige Möbel sind für uns kein Problem.",
      },
      {
        question: "Wie weit ist Weinheim von Mannheim?",
        answer: "Ca. 20 km nördlich von Mannheim – problemlos erreichbar in kurzer Zeit.",
      },
    ],
  },
  {
    id: "karlsruhe",
    name: "Karlsruhe",
    href: "/regionen/karlsruhe",
    tagline: "Fächerstadt im Süden",
    description: "Premium-Umzüge in der Fächerstadt Karlsruhe und der TechnologieRegion.",
    area: "Baden-Württemberg",
    population: "313.000 Einwohner",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41677.52!2d8.4037!3d49.0069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479704f4b4b4b4b4%3A0x1234567890abcdef!2sKarlsruhe!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    highlights: [
      "Alle Karlsruher Stadtteile",
      "Firmenumzüge Technologieregion",
      "Festpreisgarantie",
      "Fernumzug MA–KA Standard",
      "Vollversicherung",
    ],
    neighborhoods: ["Innenstadt-West", "Innenstadt-Ost", "Mühlburg", "Rintheim", "Durlach", "Neureut", "Hagsfeld"],
    localFaqs: [
      {
        question: "Führen Sie regelmäßig Umzüge nach Karlsruhe durch?",
        answer: "Ja – die Strecke Mannheim–Karlsruhe (ca. 40 km) ist für uns ein Standard-Fernumzug.",
      },
      {
        question: "Haben Sie Erfahrung mit Firmenumzügen in der Technologieregion?",
        answer: "Ja – IT-Equipment und Büromöbel für Technologieunternehmen sind unser Spezialgebiet.",
      },
    ],
  },
];

export const homepageCities = cities.filter((c) =>
  ["mannheim", "heidelberg", "ludwigshafen", "frankenthal", "worms", "speyer", "schwetzingen", "weinheim", "karlsruhe"].includes(c.id)
);
