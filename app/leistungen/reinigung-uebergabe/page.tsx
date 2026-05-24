import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/reinigung-uebergabe" },
  title: "Endreinigung & Wohnungsübergabe Mannheim – Kautionssicher | SCHACHSERVICE",
  description:
    "Professionelle Endreinigung, Fensterreinigung, Wandreparaturen und Wohnungsabnahme in Mannheim. Kautionssicher und besenrein – Festpreisgarantie.",
  keywords: ["Endreinigung Mannheim", "Wohnungsübergabe", "Fensterreinigung", "Wandreparatur", "Kaution", "Schachservice"],
};

const faqs = [
  {
    q: "Was ist eine Endreinigung?",
    a: "Die Endreinigung umfasst die vollständige Reinigung der Wohnung vor der Übergabe an den Vermieter: Böden, Küche, Bad, Fenster, Heizkörper und alle Oberflächen.",
  },
  {
    q: "Erhalte ich mit Ihrer Reinigung meine Kaution zurück?",
    a: "Unsere Reinigungen entsprechen den Übergabestandards der meisten Vermieter. Wir empfehlen, bei der Abnahme dabei zu sein und etwaige Nacharbeiten sofort in Auftrag zu geben.",
  },
  {
    q: "Führen Sie auch Wandreparaturen durch?",
    a: "Ja – Dübellöcher, Risse und Farbflecken werden von unserem Team fachgerecht repariert und wenn nötig neu gestrichen.",
  },
  {
    q: "Wie schnell können Sie kommen?",
    a: "In der Regel innerhalb von 2–5 Werktagen. Für Eilfälle bieten wir kurzfristige Termine an – sprechen Sie uns einfach an.",
  },
];

export default function ReinigungUebergabePage() {
  const cat = serviceCategories.find((c) => c.id === "reinigung")!;
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
      { "@type": "ListItem", position: 3, name: "Reinigung & Übergabe", item: "https://schachservice.de/leistungen/reinigung-uebergabe" },
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
            <span className="font-body text-xs text-gold">Reinigung & Übergabe</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Reinigung & Übergabe</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Kautionssicher. Besenrein. Entspannt übergeben.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Wir bereiten Ihre alte Wohnung perfekt auf die Übergabe vor – von der Endreinigung
            über Fenster bis zu Wandreparaturen. Mit Festpreis und Zufriedenheitsgarantie.
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
          <SectionLabel className="mb-5">Alle Reinigungsleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen für eine makellose Übergabe
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Alles aus einer Hand – damit Sie sich auf den Neubeginn konzentrieren können
            und die alte Wohnung professionell übergeben wird.
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

      {/* Checklist */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel className="mb-5">Unser Standard</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
              Was eine professionelle Endreinigung umfasst
            </h2>
            <ul className="space-y-3">
              {[
                "Alle Böden gesaugt und feucht gewischt",
                "Küche komplett gereinigt inkl. Herd & Backofen",
                "Bad & WC desinfiziert und poliert",
                "Fenster innen und auf Wunsch außen",
                "Heizkörper, Fensterbänke & Lichtschalter",
                "Schränke innen gereinigt",
                "Dübellöcher und kleinere Schäden behoben",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-ivory border border-navy/8">
            <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-4">Hinweis</p>
            <h3 className="font-heading text-xl font-semibold text-navy mb-4">
              Zufriedenheit garantiert
            </h3>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              Sollte Ihr Vermieter bei der Abnahme Nachbesserungen verlangen, kommen wir
              innerhalb von 48 Stunden zurück und erledigen diese kostenfrei.
            </p>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-11 px-7 bg-navy text-ivory font-body font-medium text-sm rounded-xl hover:bg-slate transition-all duration-300"
            >
              Jetzt anfragen <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Häufige Fragen zur Reinigung & Übergabe
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
