import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Warehouse, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/einlagerung" },
  title: "Einlagerung Mannheim – Möbel & Haushaltsgüter sicher lagern | SCHACHSERVICE",
  description:
    "Kurzzeit- und Langzeitlagerung für Möbel, Haushaltsgüter und Dokumente in Mannheim. Gesicherte, klimatisierte Lagerhallen – flexibel und zu Festpreisen.",
  keywords: ["Einlagerung Mannheim", "Möbellagerung", "Kurzzeitlagerung", "Langzeitlagerung", "Self Storage", "Schachservice"],
};

const faqs = [
  {
    q: "Wie lange kann ich einlagern?",
    a: "Wir bieten Einlagerung ab einer Woche bis zu mehreren Jahren an. Kündigung ist flexibel möglich – keine langen Mindestlaufzeiten.",
  },
  {
    q: "Wie sicher sind meine Möbel?",
    a: "Unsere Lagerhallen sind videoüberwacht, abgesperrt und nur für autorisiertes Personal zugänglich. Alle eingelagerten Güter sind standardmäßig versichert.",
  },
  {
    q: "Was kostet die Einlagerung?",
    a: "Der Preis richtet sich nach Volumen und Lagerdauer. Ein typisches Schlafzimmerset startet ab ca. 79 € pro Monat. Genaue Preise nach Anfrage.",
  },
  {
    q: "Können Sie die Möbel auch bei mir abholen?",
    a: "Ja – wir holen Ihre Güter direkt bei Ihnen ab, transportieren sie sicher ins Lager und liefern bei Bedarf wieder zurück.",
  },
];

export default function EinlagerungPage() {
  const cat = serviceCategories.find((c) => c.id === "lagerung")!;
  const services = cat.services.map((s) => ({
    ...s,
    tagline: allFlatServices.find((f) => f.slug === s.id)?.tagline ?? "",
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://schachservice.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://schachservice.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Einlagerung", item: "https://schachservice.de/leistungen/einlagerung" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-navy pt-36 pb-24 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 72% 28%, rgba(205,163,73,0.13), transparent 50%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/leistungen" className="font-body text-xs text-ivory/40 hover:text-gold transition-colors">
              Leistungen
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="font-body text-xs text-gold">Einlagerung</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Warehouse className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Einlagerung</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Sicher gelagert. Flexibel verfügbar.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Kurzzeit- oder Langzeitlagerung in gesicherten, klimatisierten Lagerhallen in
            Mannheim. Inklusive Abhol- und Lieferservice auf Wunsch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Lagerplatz anfragen <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+4917641726196"
              className="inline-flex items-center gap-2 h-12 px-7 border border-ivory/20 text-ivory text-sm font-body font-medium rounded-xl hover:border-gold/50 hover:text-gold transition-all duration-300"
            >
              +49 176 41726196
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Alle Lagerleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen rund um Einlagerung
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Ob Überbrückungszeit zwischen zwei Wohnungen, Saisonlagerung oder dauerhafte
            Archivierung – wir haben die passende Lösung.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group flex flex-col gap-3 p-6 bg-white rounded-2xl border border-navy/8 hover:border-gold/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-heading text-base font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                  {s.title}
                </h3>
                {s.tagline && (
                  <p className="font-body text-sm text-muted leading-relaxed flex-1">{s.tagline}</p>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-gold mt-auto group-hover:gap-2.5 transition-all duration-200">
                  Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Lagerstandard</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Was unsere Lagerhallen auszeichnet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Videoüberwacht 24/7", desc: "Lückenlose Kameraüberwachung und Zugangsprotokoll." },
              { title: "Klimatisiert", desc: "Konstante Temperatur und Luftfeuchtigkeit für empfindliche Güter." },
              { title: "Vollversichert", desc: "Alle eingelagerten Güter sind über unsere Betriebshaftpflicht abgesichert." },
              { title: "Flexibel kündbar", desc: "Keine langen Mindestlaufzeiten – kündbar nach Ihrer Planung." },
              { title: "Abhol- & Bringservice", desc: "Wir holen Ihre Möbel ab und liefern sie bei Bedarf direkt zurück." },
              { title: "Sauber & trocken", desc: "Regelmäßige Kontrollen, keine Schädlinge, keine Feuchtigkeit." },
            ].map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-navy/8 bg-ivory hover:border-gold/30 transition-colors duration-200"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-body text-sm font-semibold text-navy mb-1">{feat.title}</h3>
                  <p className="font-body text-xs text-muted leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Häufige Fragen zur Einlagerung
          </h2>
          <div className="space-y-1 divide-y divide-navy/8">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="font-body text-sm font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
