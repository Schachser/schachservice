import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Truck, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/umzug-transport" },
  title: "Umzug & Transport Mannheim – Lokal, national & international | SCHACHSERVICE",
  description:
    "Privatumzug, Firmenumzug, Fernumzug und Spezialtransporte in Mannheim und der Metropolregion. Festpreisgarantie, vollversichert, 15+ Jahre Erfahrung.",
  keywords: ["Umzug Mannheim", "Umzugsunternehmen", "Privatumzug", "Firmenumzug", "Fernumzug", "Schachservice"],
};

const faqs = [
  {
    q: "Was kostet ein Umzug in Mannheim?",
    a: "Lokale Umzüge beginnen ab 350 €, abhängig von Wohnungsgröße, Stockwerk und Umfang. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
  },
  {
    q: "Wie früh sollte ich meinen Umzug buchen?",
    a: "Für Wochenenden und Monatsenden empfehlen wir 4–6 Wochen Vorlauf. Kurzfristige Termine sind möglich – fragen Sie einfach nach Verfügbarkeit.",
  },
  {
    q: "Sind meine Möbel während des Umzugs versichert?",
    a: "Ja – alle Umzüge sind mit einer Transportversicherung abgesichert. Wertvolle Gegenstände können auf Wunsch mit Spezialverpackung zusätzlich geschützt werden.",
  },
  {
    q: "Bieten Sie auch Umzüge ins Ausland an?",
    a: "Ja – wir übernehmen Umzüge innerhalb Europas sowie in ausgewählte internationale Destinationen. GPS-Tracking und Zollabwicklung inklusive.",
  },
];

const trustPoints = [
  "Kostenlose Besichtigung & Festpreisangebot",
  "Vollversicherte Transporte",
  "GPS-Tracking auf Anfrage",
  "Erfahrenes Fachpersonal",
  "Keine versteckten Kosten",
  "Wochenendtermine verfügbar",
];

export default function UmzugTransportPage() {
  const cat = serviceCategories.find((c) => c.id === "umzug")!;
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
      { "@type": "ListItem", position: 3, name: "Umzug & Transport", item: "https://schachservice.de/leistungen/umzug-transport" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-navy pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/leistungen" className="font-body text-xs text-ivory/40 hover:text-gold transition-colors">
              Leistungen
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="font-body text-xs text-gold">Umzug & Transport</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Truck className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Umzug & Transport</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Ihr Umzug. Unsere Präzision.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Lokal in Mannheim, national oder international – wir übernehmen jeden Umzug mit
            Festpreisgarantie, geprüftem Fachpersonal und vollständiger Versicherung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Kostenloses Angebot <ArrowRight className="w-4 h-4" />
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
          <SectionLabel className="mb-5">Alle Umzugsleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen rund um Ihren Umzug
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Von der lokalen Wohnungsübergabe bis zum internationalen Firmenumzug – jeder
            Auftrag wird individuell geplant und mit höchster Sorgfalt durchgeführt.
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

      {/* Trust strip */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel className="mb-5">Warum Schachservice?</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
              Premium-Qualität zu fairen Festpreisen
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mb-6">
              Seit über 15 Jahren sind wir der vertrauenswürdige Umzugspartner in Mannheim und
              der gesamten Metropolregion Rhein-Neckar. Kein versteckter Preisaufschlag,
              kein Stress – nur zuverlässige, professionelle Arbeit.
            </p>
            <ul className="space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-navy">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "Jahre Erfahrung" },
              { value: "5.000+", label: "Umzüge" },
              { value: "4.9★", label: "Bewertung" },
              { value: "8", label: "Regionen" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-ivory border border-navy/8 text-center"
              >
                <span className="font-heading text-3xl font-semibold text-gold">{stat.value}</span>
                <span className="font-body text-xs text-muted mt-1 tracking-wide">{stat.label}</span>
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
            Häufige Fragen zum Umzug
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
