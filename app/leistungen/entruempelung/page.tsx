import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trash2, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/entruempelung" },
  title: "Entrümpelung & Haushaltsauflösung Mannheim – SCHACHSERVICE",
  description:
    "Professionelle Entrümpelung, Wohnungsauflösung, Kellerräumung und Nachlassauflösung in Mannheim. Schnell, diskret, vollständig – Festpreisgarantie.",
  keywords: ["Entrümpelung Mannheim", "Haushaltsauflösung", "Wohnungsauflösung", "Kellerräumung", "Nachlassauflösung", "Schachservice"],
};

const faqs = [
  {
    q: "Was kostet eine Entrümpelung?",
    a: "Der Preis hängt von Menge und Art des Inventars ab. Kleine Kellerentrümpelungen beginnen ab 199 €. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.",
  },
  {
    q: "Wie lange dauert eine Wohnungsauflösung?",
    a: "Eine typische 3-Zimmer-Wohnung wird in einem Tag geräumt. Größere Objekte planen wir entsprechend – immer mit einem festen Enddatum.",
  },
  {
    q: "Was passiert mit den Gegenständen?",
    a: "Verwertbares wird gespendet oder weiterverwertet, Sperrmüll ordnungsgemäß entsorgt. Auf Wunsch organisieren wir auch Möbelspenden an soziale Einrichtungen.",
  },
  {
    q: "Können Sie auch Keller oder Dachböden räumen?",
    a: "Ja – Keller, Dachboden, Garage und Gartenhaus gehören zu unseren Standardleistungen. Auch schwer zugängliche Objekte sind kein Problem.",
  },
];

export default function EntruempelungPage() {
  const cat = serviceCategories.find((c) => c.id === "entruempelung")!;
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
      { "@type": "ListItem", position: 3, name: "Entrümpelung", item: "https://schachservice.de/leistungen/entruempelung" },
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
            <span className="font-body text-xs text-gold">Entrümpelung</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Entrümpelung</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Schnell, diskret und vollständig geräumt.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Wohnungs-, Keller- und Haushaltsauflösungen mit respektvollem Umgang.
            Wir räumen, entsorgen und hinterlassen einen besenreinen Zustand.
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
          <SectionLabel className="mb-5">Alle Entrümpelungsleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen für Entrümpelung & Auflösung
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Von der kleinen Kellerentrümpelung bis zur vollständigen Nachlassauflösung –
            wir gehen sensibel, effizient und zuverlässig vor.
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

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Ablauf</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            So läuft Ihre Entrümpelung ab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Anfrage & Termin", text: "Kontaktieren Sie uns – wir vereinbaren einen kostenlosen Besichtigungstermin." },
              { step: "02", title: "Besichtigung & Angebot", text: "Wir besichtigen das Objekt und erstellen ein verbindliches Festpreisangebot." },
              { step: "03", title: "Entrümpelung", text: "Unser Team erscheint pünktlich und räumt vollständig, sortiert und entsorgt." },
              { step: "04", title: "Besenrein übergeben", text: "Das Objekt wird besenrein hinterlassen – bereit für Übergabe, Sanierung oder Vermietung." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-4 p-6 bg-ivory rounded-xl border border-navy/8">
                <span className="font-heading text-4xl font-semibold text-gold/20 leading-none">{s.step}</span>
                <h3 className="font-heading text-base font-semibold text-navy">{s.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Kostenlose Besichtigung", desc: "Kein Risiko – Angebot unverbindlich" },
              { label: "Diskrete Abwicklung", desc: "Vertraulich & respektvoll" },
              { label: "Entsorgungsnachweis", desc: "Ordnungsgemäß & dokumentiert" },
              { label: "Festpreisgarantie", desc: "Keine versteckten Kosten" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-5 bg-white rounded-xl border border-navy/8">
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-semibold text-navy">{item.label}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{item.desc}</p>
                </div>
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
            Häufige Fragen zur Entrümpelung
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
