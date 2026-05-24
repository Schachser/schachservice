import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/montage-aufbau" },
  title: "Möbelmontage & Aufbauservice Mannheim – SCHACHSERVICE",
  description:
    "Professionelle Möbelmontage, Küchenmontage, IKEA-Aufbauservice und Demontage in Mannheim. Präzise, schonend und zu Festpreisen.",
  keywords: ["Möbelmontage Mannheim", "Küchenmontage", "IKEA Aufbau", "Möbelaufbau", "Schachservice"],
};

const faqs = [
  {
    q: "Wie lange dauert ein typischer Montageauftrag?",
    a: "Ein Schlafzimmer dauert ca. 2–4 Stunden, eine Küche je nach Größe 4–8 Stunden. Wir geben Ihnen vorab eine realistische Zeiteinschätzung.",
  },
  {
    q: "Bauen Sie auch IKEA-Möbel auf?",
    a: "Ja – IKEA-Möbel gehören zu unseren häufigsten Aufträgen. Wir bringen Werkzeug mit, folgen der Anleitung präzise und hinterlassen keinen Schmutz.",
  },
  {
    q: "Können Sie Möbel auch demontieren?",
    a: "Selbstverständlich. Möbeldemontage vor dem Umzug und Wiederaufbau in der neuen Wohnung sind ein fester Bestandteil unseres Services.",
  },
  {
    q: "Was kostet der Aufbauservice?",
    a: "Der Preis richtet sich nach Aufwand und Möbelanzahl. Wir arbeiten auf Stundenbasis oder zum Festpreis – nach Absprache. Anfrage kostenlos.",
  },
];

export default function MontageAufbauPage() {
  const cat = serviceCategories.find((c) => c.id === "montage")!;
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
      { "@type": "ListItem", position: 3, name: "Montage & Aufbau", item: "https://schachservice.de/leistungen/montage-aufbau" },
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
            <span className="font-body text-xs text-gold">Montage & Aufbau</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Wrench className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Montage & Aufbau</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Präzise montiert. Schonend aufgebaut.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Von der Küche bis zur Gardinenstange – unser Montageteam arbeitet sorgfältig,
            pünktlich und hinterlässt keinen Schmutz. Alle Arbeiten mit Festpreisgarantie.
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
          <SectionLabel className="mb-5">Alle Montageleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen für Montage & Aufbau
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Ob einzelne Möbelstücke oder komplette Wohnungseinrichtung – wir montieren
            alles fachgerecht, ohne Kratzer und ohne Rückstände.
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

      {/* What we bring */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Eigenes Werkzeug", desc: "Wir bringen alles mit – Bohrmaschine, Akkuschrauber, Wasserwaage, Dübeln." },
              { title: "Kein Schmutz", desc: "Wir schützen Böden und räumen vollständig auf. Der Auftrag endet erst wenn es sauber ist." },
              { title: "Festpreis", desc: "Kein Stundenrisiko – auf Wunsch Festpreis vorab vereinbart. Keine Nachberechnungen." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-3 p-7 rounded-2xl bg-white/6 border border-white/10">
                <Check className="w-5 h-5 text-gold" />
                <h3 className="font-heading text-base font-semibold text-ivory">{item.title}</h3>
                <p className="font-body text-sm text-ivory/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Häufige Fragen zur Möbelmontage
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
