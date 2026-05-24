import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";

type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string; list?: string[] }[];
  relatedService: { title: string; href: string };
};

const articles: Record<string, Article> = {
  "umzugscheckliste": {
    slug: "umzugscheckliste",
    title: "Die ultimative Umzugscheckliste",
    description: "Alles, was Sie vor, während und nach dem Umzug erledigen müssen – übersichtlich und Schritt für Schritt von SCHACHSERVICE.",
    category: "Planung",
    readTime: "5 Min",
    intro: "Ein Umzug ist eines der größten Projekte im Leben. Mit der richtigen Vorbereitung läuft alles reibungslos. Diese Checkliste führt Sie von 8 Wochen vor dem Umzug bis zu den letzten Aufgaben danach.",
    sections: [
      {
        heading: "8 Wochen vorher",
        body: "Beginnen Sie früh – das ist die goldene Regel beim Umzug.",
        list: [
          "Umzugsunternehmen vergleichen und buchen",
          "Alten Vermieter schriftlich kündigen",
          "Neuen Mietvertrag prüfen und unterschreiben",
          "Budget festlegen und Umzugskosten kalkulieren",
          "Erste Kartons für Selten-Genutzes einpacken",
        ],
      },
      {
        heading: "4–6 Wochen vorher",
        body: "Nun geht es ans Konkrete: Behörden und Dienstleister informieren.",
        list: [
          "Umzug der Post, Bank, Versicherungen und Arbeitgeber melden",
          "Kündigung: Internet, Strom, Gas, GEZ (ARD ZDF Deutschlandradio Beitragsservice)",
          "Neue Anbieter für Strom, Gas und Internet beauftragen",
          "Halteverbot beantragen (SCHACHSERVICE übernimmt das für Sie)",
          "Umzugskartons und Verpackungsmaterial besorgen oder mieten",
        ],
      },
      {
        heading: "1–2 Wochen vorher",
        body: "Die finale Vorbereitung – jetzt wird es ernst.",
        list: [
          "Alle verbleibenden Räume systematisch einpacken",
          "Kartons nach Zimmer beschriften",
          "Kühlschrank abtauen und leeren",
          "Wertsachen persönlich transportieren",
          "Schlüssel für neue Wohnung abholen",
        ],
      },
      {
        heading: "Am Umzugstag",
        body: "Bereiten Sie die Wohnung vor und halten Sie Unterlagen griffbereit.",
        list: [
          "Böden und Möbel mit Schutzdecken sichern",
          "Zählerstände in alter und neuer Wohnung ablesen und fotografieren",
          "Übergabeprotokoll für alte Wohnung unterschreiben",
          "Umzugsteam einweisen: welche Kartons in welches Zimmer",
          "Für Verpflegung des Umzugsteams sorgen",
        ],
      },
      {
        heading: "Nach dem Umzug",
        body: "Die häufig vergessenen Aufgaben – aber nicht weniger wichtig.",
        list: [
          "Ummeldung beim Einwohnermeldeamt (innerhalb von 2 Wochen Pflicht)",
          "KFZ-Zulassung ummelden",
          "Neue Adresse: Arzt, Apotheke, Steuerberater, Rechtsanwalt",
          "Nachsendeauftrag bei der Post einrichten",
          "Wohnung inspizieren und evtl. Mängel dokumentieren",
        ],
      },
    ],
    relatedService: { title: "Privatumzug anfragen", href: "/leistungen/lokalumzug" },
  },

  "einpacken-tipps": {
    slug: "einpacken-tipps",
    title: "Richtig einpacken: Profi-Tipps für den Umzug",
    description: "Professionelle Tipps zum sicheren Einpacken beim Umzug – von Geschirr bis Kleidung. So kommen alle Gegenstände unbeschadet an.",
    category: "Verpackung",
    readTime: "4 Min",
    intro: "Schlecht verpackte Gegenstände sind der häufigste Grund für Schäden beim Umzug. Unsere Profis packen täglich Hunderte von Haushalten ein – hier teilen wir die wichtigsten Erkenntnisse.",
    sections: [
      {
        heading: "Die richtigen Kartons wählen",
        body: "Nicht jeder Karton passt für jeden Inhalt. Schwere Gegenstände gehören in kleine, stabile Kartons.",
        list: [
          "Bücherkarton (60×40×40 cm): für Bücher, Geschirr, Küchenutensilien",
          "Kleiderbox: für Kleidung auf Hänger – knitterfrei transportieren",
          "TV-Karton: für Flachbildschirme, Bilder und Spiegel",
          "XXL-Karton: nur für leichte Textilien und Kissen",
          "Kartons nie überbeladen: max. 20–25 kg pro Karton",
        ],
      },
      {
        heading: "Geschirr und Gläser sicher verpacken",
        body: "Glas und Porzellan brauchen besondere Aufmerksamkeit.",
        list: [
          "Jeden Teller einzeln in Packpapier einwickeln",
          "Teller senkrecht stellen – nie flach legen",
          "Gläser umgekehrt einpacken und Hohlraum füllen",
          "Karton unten mit Luftpolster oder Papier polstern",
          "Karton mit 'ZERBRECHLICH' beschriften",
        ],
      },
      {
        heading: "Möbel schützen",
        body: "Kratzer und Dellen entstehen meist durch unzureichende Schutzmaßnahmen.",
        list: [
          "Glasplatten mit Schaumstoff oder Packpapier abpolstern",
          "Möbeloberflächen mit Stretchfolie oder Möbeldecken sichern",
          "Schubladen und Türen mit Klebeband sichern",
          "Tischbeine mit Schaumstoff oder alten Handtüchern umwickeln",
          "Schrauben und Kleinteile in beschriftete Tüten einpacken",
        ],
      },
      {
        heading: "Kleidung clever verpacken",
        body: "Kleidung nimmt überraschend viel Platz ein – so sparen Sie Kartons.",
        list: [
          "Kleiderboxen für Anzüge, Mäntel und Hemden nutzen",
          "T-Shirts und Pullis als Füllmaterial für fragile Gegenstände",
          "Koffer und Taschen mit Kleidung befüllen",
          "Saisonkleidung in Vakuumsäcken komprimieren",
          "Schuhe einzeln in Papier einwickeln und ins Schuhkarton packen",
        ],
      },
    ],
    relatedService: { title: "Einpackservice buchen", href: "/leistungen/einpackservice" },
  },

  "umzug-mit-kindern": {
    slug: "umzug-mit-kindern",
    title: "Umzug mit Kindern: So klappt es stressfrei",
    description: "Praxiserprobte Tipps für einen erfolgreichen Familienumzug mit Kindern – emotional und praktisch vorbereitet.",
    category: "Familie",
    readTime: "5 Min",
    intro: "Ein Umzug kann für Kinder aufregend oder beängstigend sein. Mit der richtigen Vorbereitung machen Sie den Wohnungswechsel zu einem positiven Erlebnis für die ganze Familie.",
    sections: [
      {
        heading: "Kinder frühzeitig einbeziehen",
        body: "Kinder verarbeiten Veränderungen besser, wenn sie informiert sind und mitbestimmen dürfen.",
        list: [
          "Frühzeitig und ehrlich über den Umzug sprechen",
          "Die neue Wohnung gemeinsam besichtigen",
          "Kind das neue Zimmer mitgestalten lassen (Farbe, Anordnung)",
          "Fragen der Kinder ernst nehmen und beantworten",
          "Positive Aspekte der neuen Umgebung hervorheben",
        ],
      },
      {
        heading: "Praktische Vorbereitung",
        body: "Kleine Umzügler brauchen Kontinuität und bekannte Gegenstände.",
        list: [
          "Lieblingsgegenstand und Spielzeug zuletzt einpacken – zuerst auspacken",
          "Schulwechsel rechtzeitig beantragen und vorbereiten",
          "Kita-Abschied bewusst gestalten – Abschieds-Party organisieren",
          "Kontaktdaten der alten Freunde sammeln",
          "Am Umzugstag Kinder zu Großeltern oder Freunden geben",
        ],
      },
      {
        heading: "Am Umzugstag",
        body: "Kinder und Umzugsstress vertragen sich schlecht – hier helfen klare Strukturen.",
        list: [
          "Kindertasche mit Beschäftigung und Snacks packen",
          "Vertraute Betreuungsperson anwesend halten",
          "Das Kinderzimmer als erstes einrichten",
          "Am Abend bekannte Rituale (Vorlesen, Gutenachtritual) beibehalten",
          "Geduld zeigen – erste Nächte können unruhig sein",
        ],
      },
      {
        heading: "Nach dem Umzug",
        body: "Die Eingewöhnung braucht Zeit – unterstützen Sie Ihr Kind aktiv.",
        list: [
          "Die neue Nachbarschaft gemeinsam erkunden",
          "Spielplatz, Schwimmbad oder Bibliothek in der Nähe finden",
          "Vereine und Aktivitäten für Kontakte organisieren",
          "Bei Schul- oder Kitawechsel: Lehrern und Erziehern die Situation erklären",
          "Regelmäßig nach dem Wohlbefinden fragen",
        ],
      },
    ],
    relatedService: { title: "Privatumzug mit Familie", href: "/leistungen/lokalumzug" },
  },

  "ummeldung": {
    slug: "ummeldung",
    title: "Ummeldung nach dem Umzug – Alles was Sie wissen müssen",
    description: "Alle Behördengänge und Änderungen nach dem Umzug kompakt erklärt: Einwohnermeldeamt, KFZ, Versicherungen und mehr.",
    category: "Behörden",
    readTime: "6 Min",
    intro: "Nach dem Umzug beginnt das Papierchaos. Wir haben alles auf einer Liste zusammengefasst, damit Sie nichts vergessen und keine Fristen verpassen.",
    sections: [
      {
        heading: "Einwohnermeldeamt (Pflicht!)",
        body: "Die Ummeldung beim Einwohnermeldeamt ist gesetzlich vorgeschrieben und muss innerhalb von 14 Tagen nach dem Einzug erfolgen.",
        list: [
          "Wohnungsgeberbestätigung vom neuen Vermieter einholen",
          "Personalausweis oder Reisepass mitbringen",
          "Ummeldung online oder persönlich beim Bürgeramt",
          "Neue Adresse wird automatisch im Personalausweis vermerkt",
          "Bußgeld bei Versäumnis: bis zu 1.000 €",
        ],
      },
      {
        heading: "Fahrzeug ummelden",
        body: "Das KFZ muss bei der neuen Zulassungsstelle umgemeldet werden.",
        list: [
          "Fahrzeugschein, Fahrzeugbrief und Personalausweis mitbringen",
          "Alte Zulassungsbescheinigung mitbringen",
          "Nummernschilder müssen evtl. gewechselt werden (neues Kennzeichen)",
          "KFZ-Versicherung sofort über neue Adresse informieren",
          "Frist: sobald wie möglich nach der Anmeldung",
        ],
      },
      {
        heading: "Versicherungen und Finanzen",
        body: "Alle Verträge mit alter Adresse müssen aktualisiert werden.",
        list: [
          "Krankenversicherung und Berufsunfähigkeitsversicherung",
          "Hausrat- und Haftpflichtversicherung (neue Wohnfläche prüfen!)",
          "Lebensversicherung und Rentenversicherung",
          "Bank und Kreditkartenfirma",
          "Finanzamt (Steuer-ID bleibt, Adresse ändern)",
        ],
      },
      {
        heading: "Abonnements und Dienstleistungen",
        body: "Viele Dienste sind adressabhängig – vergessen Sie diese nicht.",
        list: [
          "Rundfunkbeitrag (ARD ZDF Deutschlandradio): online unter rundfunkbeitrag.de",
          "Zeitungsabonnements und Zeitschriften",
          "Online-Shopping: Amazon, Zalando etc.",
          "Apotheke, Arztpraxis und Zahnarzt",
          "Nachsendeauftrag bei der Post (bis zu 24 Monate möglich)",
        ],
      },
    ],
    relatedService: { title: "Umzug in Mannheim anfragen", href: "/leistungen/lokalumzug" },
  },

  "firmenumzug-planen": {
    slug: "firmenumzug-planen",
    title: "Firmenumzug planen – Minimale Ausfallzeit, maximale Effizienz",
    description: "So planen Sie einen professionellen Büroumzug: von der IT-Migration bis zur Möbelmontage – mit minimaler Betriebsunterbrechung.",
    category: "Business",
    readTime: "7 Min",
    intro: "Ein Firmenumzug ist komplexer als ein Privatumzug: IT-Infrastruktur, Aktenarchive, Maschinen und laufende Betriebsprozesse müssen koordiniert werden. Mit der richtigen Planung gelingt der Übergang nahtlos.",
    sections: [
      {
        heading: "3 Monate vorher: Strategische Planung",
        body: "Früh beginnen ist beim Firmenumzug noch wichtiger als beim Privatumzug.",
        list: [
          "Projektverantwortlichen bestimmen und Umzugsteam intern bilden",
          "Umzugsfirma mit Firmenerfahrung anfragen und Angebote vergleichen",
          "Neues Bürolayout planen (Grundriss, Steckdosen, Netzwerkanschlüsse)",
          "IT-Dienstleister für Netzwerk- und Serverumzug beauftragen",
          "Mitarbeiter frühzeitig informieren und in Planung einbeziehen",
        ],
      },
      {
        heading: "6–8 Wochen vorher: Operative Vorbereitung",
        body: "Jetzt geht es in die Details – jede Abteilung braucht ihren Plan.",
        list: [
          "Inventarliste aller Büromöbel, Geräte und IT-Equipment erstellen",
          "Akten digitalisieren oder ordentlich beschriften und verpacken",
          "Kündigungsfristen für altes Büro prüfen und einhalten",
          "Neue Adresse bei Behörden, Lieferanten und Kunden kommunizieren",
          "Domainweiterleitung und E-Mail-Signaturen vorbereiten",
        ],
      },
      {
        heading: "Am Umzugswochenende",
        body: "Der eigentliche Umzug sollte idealerweise am Wochenende stattfinden.",
        list: [
          "IT-Infrastruktur abbauen und gesichert transportieren",
          "Server und sensible Datenträger persönlich begleiten",
          "Jedes Möbelstück und jede Kiste nummeriert beschriften",
          "Aufbau nach vorgeplantem Bürolayout koordinieren",
          "Am Montag: alle Systeme testen bevor Mitarbeiter ankommen",
        ],
      },
      {
        heading: "Nach dem Umzug",
        body: "Die Nacharbeit ist entscheidend für einen schnellen Normalbetrieb.",
        list: [
          "IT-Systeme und Telefone testen",
          "Mitarbeiter über neues Bürolayout informieren",
          "Adressänderung: Handelsregister, IHK, Finanzamt",
          "Website und Google My Business aktualisieren",
          "Restmängel im neuen Büro dokumentieren und melden",
        ],
      },
    ],
    relatedService: { title: "Firmenumzug anfragen", href: "/leistungen/firmenumzug" },
  },

  "seniorenumzug": {
    slug: "seniorenumzug",
    title: "Seniorenumzug: Besonderheiten und praktische Tipps",
    description: "Was es beim Umzug älterer Menschen zu beachten gibt – praktisch, emotional und rechtlich. Mit speziellem Seniorenservice von SCHACHSERVICE.",
    category: "Senioren",
    readTime: "5 Min",
    intro: "Ein Umzug im Alter ist eine besondere Herausforderung. Oft ist es der Abschluss eines langen Lebensabschnitts – mit vielen Erinnerungen und Emotionen. Wir begleiten Senioren mit besonderer Sorgfalt und Verständnis.",
    sections: [
      {
        heading: "Emotional vorbereiten",
        body: "Der Umzug eines Seniors hat oft einen emotionalen Hintergrund, der Respekt und Einfühlungsvermögen erfordert.",
        list: [
          "Zeit für Entscheidungen lassen – kein Stress und kein Druck",
          "Angehörige einbeziehen, aber Senior entscheiden lassen",
          "Liebgewordene Gegenstände bewusst auswählen und mitnehmen",
          "Abschied von der alten Wohnung bewusst gestalten",
          "Positive Aspekte des Neuanfangs hervorheben",
        ],
      },
      {
        heading: "Praktische Planung",
        body: "Senioren brauchen mehr Vorlaufzeit und mehr Unterstützung bei der Planung.",
        list: [
          "Inventur: Was wird mitgenommen, was verschenkt, was entsorgt?",
          "Hilfe bei der Haushaltsauflösung organisieren",
          "Barrierefreiheit der neuen Wohnung prüfen (Aufzug, Schwellen)",
          "Umzug in kleinen Etappen planen wenn möglich",
          "Möbelmontage und Aufbau von Schranksystemen durch Profis",
        ],
      },
      {
        heading: "Rechtliche und administrative Aufgaben",
        body: "Wichtige Formalitäten, die oft vergessen werden.",
        list: [
          "Ummeldung beim Einwohnermeldeamt",
          "Pflegekasse und Krankenkasse über neue Adresse informieren",
          "Testament und Vollmachten prüfen und ggf. aktualisieren",
          "Nachsendeauftrag bei der Post",
          "Arzt und Apotheke wechseln oder neue Anbieter finden",
        ],
      },
      {
        heading: "Unser Seniorenservice",
        body: "SCHACHSERVICE bietet speziell auf Senioren zugeschnittene Leistungen.",
        list: [
          "Persönliche Betreuung durch erfahrene Mitarbeiter",
          "Einpackservice: wir verpacken alles sorgfältig und kennzeichnen jeden Karton",
          "Möbelaufbau und Zimmergestaltung nach Ihren Wünschen",
          "Begleitung beim Behördengang auf Wunsch",
          "Haushaltsauflösung mit Entsorgung und Wertgegenstand-Übergabe",
        ],
      },
    ],
    relatedService: { title: "Seniorenumzug anfragen", href: "/leistungen/seniorenumzug" },
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Artikel nicht gefunden" };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/ratgeber/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://schachservice.de/ratgeber/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function RatgeberArticle({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://schachservice.de" },
      { "@type": "ListItem", position: 2, name: "Ratgeber", item: "https://schachservice.de/ratgeber" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://schachservice.de/ratgeber/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-ivory pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/ratgeber" className="font-body text-xs text-muted hover:text-gold transition-colors">
              Ratgeber
            </Link>
            <span className="text-muted/40">/</span>
            <span className="font-body text-xs text-gold">{article.category}</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-body font-semibold tracking-widest uppercase text-gold bg-gold/10 rounded-full mb-5">
            {article.category} · {article.readTime} Lesezeit
          </span>
          <h1 className="font-heading text-[clamp(2rem,4.5vw,3.2rem)] font-semibold text-navy leading-tight mb-6">
            {article.title}
          </h1>
          <p className="font-body text-lg text-muted leading-relaxed max-w-2xl">
            {article.intro}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-14">
          {article.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-navy mb-3">{section.heading}</h2>
              <p className="font-body text-base text-muted leading-relaxed mb-5">{section.body}</p>
              {section.list && (
                <ul className="space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-navy leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-navy">
            <div>
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-2">
                Bereit für Ihren Umzug?
              </p>
              <h3 className="font-heading text-xl font-semibold text-ivory">
                Jetzt kostenloses Angebot einholen
              </h3>
              <p className="font-body text-sm text-ivory/55 mt-1">
                Festpreisgarantie · Kostenlose Besichtigung · In 24h Antwort
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href={article.relatedService.href}
                className="inline-flex items-center gap-2 h-11 px-6 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300"
              >
                {article.relatedService.title} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="quote_click"
                className="inline-flex items-center gap-2 h-11 px-6 border border-ivory/25 text-ivory font-body font-medium text-sm rounded-xl hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                Angebot anfragen
              </a>
            </div>
          </div>

          {/* Back to ratgeber */}
          <div className="mt-10">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-muted hover:text-gold transition-colors duration-200"
            >
              ← Zurück zum Ratgeber
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
