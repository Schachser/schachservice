import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";
import { serviceCategories, allFlatServices } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen/verpackung-material" },
  title: "Verpackung & Umzugsmaterial Mannheim – Kartons, Einpackservice | SCHACHSERVICE",
  description:
    "Umzugskartons kaufen oder mieten, professioneller Einpackservice und hochwertiges Verpackungsmaterial in Mannheim. Lieferung bis zur Haustür.",
  keywords: ["Umzugskartons Mannheim", "Einpackservice", "Verpackungsmaterial", "Kartons kaufen", "Kartons mieten", "Schachservice"],
};

const faqs = [
  {
    q: "Wie viele Kartons brauche ich für meinen Umzug?",
    a: "Als Faustregel: ca. 30 Kartons für 1-Zimmer-Wohnung, 50–60 für 2 Zimmer, 80–100 für 4 Zimmer. Nach einer Besichtigung geben wir eine genaue Empfehlung.",
  },
  {
    q: "Kann ich Kartons auch mieten?",
    a: "Ja – Kartonvermietung ist umweltfreundlicher und günstiger. Wir bringen robuste Mietkartons und holen sie nach dem Umzug kostenlos wieder ab.",
  },
  {
    q: "Verpacken Sie auch selbst?",
    a: "Ja – unser Einpackservice übernimmt alles: Küche, Bücher, Glaswaren, Garderobe. Professionell und mit der richtigen Verpackungslösung für jeden Gegenstand.",
  },
  {
    q: "Liefern Sie das Material auch nach Hause?",
    a: "Ja – wir liefern Kartons und Verpackungsmaterial direkt zu Ihnen. Auf Wunsch bereits am Umzugstag mitgebracht.",
  },
];

const materials = [
  { name: "Luftpolsterfolie", desc: "Schützt empfindliche Oberflächen und Glaswaren" },
  { name: "Packpapier", desc: "Säurefreies Einwickelpapier für Geschirr" },
  { name: "Klebeband (6er-Set)", desc: "Extra stark für Kartonböden und Verschlüsse" },
  { name: "Möbelfolie (Stretch)", desc: "Kratzer- und Staubschutz für Möbeloberflächen" },
  { name: "Schaumstoffplatten", desc: "Schutz für Glas, Bilder und Spiegel" },
  { name: "Etiketten & Markierstifte", desc: "Damit jede Schachtel am Zielort landet" },
];

export default function VerpackungMaterialPage() {
  const cat = serviceCategories.find((c) => c.id === "verpackung")!;
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
      { "@type": "ListItem", position: 3, name: "Verpackung & Material", item: "https://schachservice.de/leistungen/verpackung-material" },
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
            <span className="font-body text-xs text-gold">Verpackung & Material</span>
          </div>
          <div className="mb-5 w-12 h-12 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center">
            <Package className="w-6 h-6 text-gold" />
          </div>
          <SectionLabel light className="mb-5">Verpackung & Material</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Die richtigen Kartons. Für jeden Gegenstand.
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Kaufen, mieten oder von uns einpacken lassen – wir versorgen Sie mit
            geprüftem Umzugsmaterial und übernehmen das Verpacken auf Wunsch komplett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Material bestellen <ArrowRight className="w-4 h-4" />
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
          <SectionLabel className="mb-5">Alle Verpackungsleistungen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            {services.length} Leistungen rund um Verpackung & Material
          </h2>
          <p className="font-body text-base text-muted mb-12 max-w-2xl leading-relaxed">
            Von der Kartonlieferung bis zum professionellen Einpackservice –
            alles für einen sicheren und organisierten Umzug.
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

      {/* Materials section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Verpackungsmaterial</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Alles für einen sicheren Transport
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((m) => (
              <div
                key={m.name}
                className="flex items-start gap-4 p-5 rounded-xl border border-navy/8 bg-ivory hover:border-gold/30 transition-colors duration-200"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-body text-sm font-semibold text-navy mb-1">{m.name}</h3>
                  <p className="font-body text-xs text-muted">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options strip */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Kartons kaufen", desc: "Kaufen und behalten – ideal wenn Sie öfter umziehen oder lagern möchten.", cta: "Jetzt bestellen" },
              { title: "Kartons mieten", desc: "Umweltfreundlicher und günstiger. Wir liefern, Sie packen, wir holen ab.", cta: "Mietanfrage" },
              { title: "Einpackservice", desc: "Wir verpacken alles professionell – mit der richtigen Lösung für jeden Gegenstand.", cta: "Service anfragen" },
            ].map((opt) => (
              <div key={opt.title} className="flex flex-col gap-4 p-7 rounded-2xl bg-white/6 border border-white/10">
                <h3 className="font-heading text-base font-semibold text-ivory">{opt.title}</h3>
                <p className="font-body text-sm text-ivory/65 leading-relaxed flex-1">{opt.desc}</p>
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="quote_click"
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold hover:gap-3 transition-all duration-200"
                >
                  {opt.cta} <ArrowRight className="w-4 h-4" />
                </a>
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
            Häufige Fragen zu Verpackung & Material
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
