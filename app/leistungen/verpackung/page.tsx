import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Umzugskartons & Verpackungsmaterial – SCHACHSERVICE Mannheim",
  description:
    "Alle Kartongrößen für Ihren Umzug: Bücherkartons, Kleiderboxen, TV-Kartons, XXL-Umzugskartons. Lieferung, Vermietung und professionelles Einpacken in Mannheim.",
  keywords: ["Umzugskartons Mannheim", "Kartongrößen", "Verpackungsmaterial", "Kleiderbox", "Bücherkarton", "Schachservice"],
};

const boxTypes = [
  {
    id: "buch",
    name: "Bücherkarton",
    subtitle: "Klassischer Umzugskarton",
    dimensions: "60 × 40 × 40 cm",
    volume: "ca. 96 Liter",
    maxWeight: "30 kg",
    idealFor: ["Bücher & Akten", "Geschirr & Gläser", "Küchenzubehör", "Kleinelektronik", "Werkzeug"],
    color: "bg-[#F6F1E8]",
    badge: "Bestseller",
    badgeColor: "bg-gold text-navy",
  },
  {
    id: "kleiner",
    name: "Kleiner Karton",
    subtitle: "Kompakt & handlich",
    dimensions: "50 × 35 × 30 cm",
    volume: "ca. 53 Liter",
    maxWeight: "20 kg",
    idealFor: ["Medikamente & Kosmetik", "CDs, DVDs & Spiele", "Schreibtischzubehör", "Dekoartikel", "Kleinkinderspielzeug"],
    color: "bg-white",
    badge: null,
    badgeColor: "",
  },
  {
    id: "kleider",
    name: "Kleiderbox",
    subtitle: "Kleidung auf Hänger transportieren",
    dimensions: "60 × 50 × 115 cm",
    volume: "ca. 345 Liter",
    maxWeight: "20 kg (Kleider)",
    idealFor: ["Anzüge & Kleider auf Hänger", "Mäntel & Jacken", "Hemden knitterfrei", "Kostüme", "Abendgarderobe"],
    color: "bg-[#F6F1E8]",
    badge: "Knitterfrei",
    badgeColor: "bg-navy text-ivory",
  },
  {
    id: "kueche",
    name: "Küchenkarton",
    subtitle: "Geschirr & Gläser sicher",
    dimensions: "45 × 45 × 60 cm (doppelwandig)",
    volume: "ca. 122 Liter",
    maxWeight: "25 kg",
    idealFor: ["Teller & Schüsseln", "Gläser & Tassen", "Töpfe & Pfannen", "Küchenmaschinen", "Vasen & Dekogläser"],
    color: "bg-white",
    badge: "Doppelwandig",
    badgeColor: "bg-gold text-navy",
  },
  {
    id: "tv",
    name: "TV-Karton",
    subtitle: "Fernseher sicher verpacken",
    dimensions: "130 × 20 × 80 cm",
    volume: "variabel",
    maxWeight: "30 kg",
    idealFor: ['Fernseher bis 55"', "Flachbildschirme", "Bilder & Gemälde", "Spiegel", "Große Glasscheiben"],
    color: "bg-[#F6F1E8]",
    badge: null,
    badgeColor: "",
  },
  {
    id: "xxl",
    name: "XXL Umzugskarton",
    subtitle: "Leichte Großgüter",
    dimensions: "80 × 60 × 60 cm",
    volume: "ca. 288 Liter",
    maxWeight: "15 kg",
    idealFor: ["Bettwäsche & Kissen", "Decken & Plüschtiere", "Leichte Textilien", "Lampenschirme", "Styroporteile"],
    color: "bg-white",
    badge: "Volumen-King",
    badgeColor: "bg-navy text-ivory",
  },
];

const materials = [
  { name: "Luftpolsterfolie", desc: "Schützt empfindliche Oberflächen", icon: "📦" },
  { name: "Packpapier (10 kg)", desc: "Säurefreies Einwickelpapier", icon: "📰" },
  { name: "Klebeband (6er-Set)", desc: "Extra stark für Kartonböden", icon: "🏷️" },
  { name: "Möbelfolie (Stretch)", desc: "Kratzer- und Staubschutz für Möbel", icon: "🛡️" },
  { name: "Schaumstoffplatten", desc: "Schutz für Glas, Bilder, Spiegel", icon: "🖼️" },
  { name: "Markierstifte & Etiketten", desc: "Organisiert umziehen", icon: "🏷️" },
];

const faqs = [
  {
    q: "Wie viele Kartons brauche ich?",
    a: "Als Faustregel: ca. 30 Kartons für 1-Zimmer-Wohnung, 50–60 für 2 Zimmer, 80–100 für 4 Zimmer. Unser Team gibt Ihnen eine genaue Empfehlung nach Besichtigung.",
  },
  {
    q: "Liefern Sie Kartons auch nach Hause?",
    a: "Ja – wir liefern Kartons und Verpackungsmaterial direkt zu Ihnen nach Hause. Auf Wunsch auch direkt am Umzugstag mitgebracht.",
  },
  {
    q: "Kann ich Kartons auch mieten?",
    a: "Ja – Kartonvermietung ist umweltfreundlicher und günstiger. Wir bringen robuste Mietkartons und holen sie nach dem Umzug wieder ab.",
  },
  {
    q: "Verpacken Sie auch selbst?",
    a: "Absolut – unser Einpackservice übernimmt alles: Küche, Bücher, Glaswaren, Garderobe. Professionell und mit der richtigen Kartonwahl für jeden Gegenstand.",
  },
  {
    q: "Was kostet ein Karton-Paket?",
    a: "Komplettpaket für 3-Zimmer-Wohnung ab 89 € inklusive Kartons, Luftpolsterfolie und Klebeband. Genaue Preise nach Anfrage.",
  },
];

export default function VerpackungPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://schachservice.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://schachservice.de/leistungen" },
      { "@type": "ListItem", position: 3, name: "Verpackung & Kartons", item: "https://schachservice.de/leistungen/verpackung" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-36 pb-24 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(205,163,73,0.14), transparent 50%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/leistungen" className="font-body text-xs text-ivory/40 hover:text-gold transition-colors">
              Leistungen
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="font-body text-xs text-gold">Verpackung</span>
          </div>
          <SectionLabel light className="mb-5">Verpackung & Material</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Umzugskartons & Verpackungsmaterial
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Die richtigen Kartons für jeden Gegenstand. Kaufen, mieten oder von uns einpacken lassen –
            sicher, schnell und organisiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Kartons bestellen <ArrowRight className="w-4 h-4" />
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

      {/* Box types grid */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Kartongrößen</SectionLabel>
          <h2 className="font-heading text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-navy leading-tight mb-4">
            Der richtige Karton für jeden Inhalt
          </h2>
          <p className="font-body text-base text-muted mb-14 max-w-2xl leading-relaxed">
            Wir führen alle gängigen Kartongrößen in erstklassiger Qualität. Kaufen oder mieten –
            auf Wunsch bringen wir alles zu Ihnen nach Hause.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxTypes.map((box) => (
              <div
                key={box.id}
                className={`relative rounded-2xl border border-navy/8 overflow-hidden flex flex-col ${box.color}`}
              >
                {/* Badge */}
                {box.badge && (
                  <span className={`absolute top-4 right-4 text-[10px] font-body font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full ${box.badgeColor}`}>
                    {box.badge}
                  </span>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gold/12 flex items-center justify-center mb-5">
                    <Package className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">{box.name}</h3>
                  <p className="font-body text-xs text-muted mb-5">{box.subtitle}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="text-center p-2 rounded-lg bg-navy/4">
                      <p className="font-body text-[10px] text-muted mb-0.5">Maße</p>
                      <p className="font-body text-xs font-semibold text-navy leading-tight">{box.dimensions}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-navy/4">
                      <p className="font-body text-[10px] text-muted mb-0.5">Volumen</p>
                      <p className="font-body text-xs font-semibold text-navy leading-tight">{box.volume}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-navy/4">
                      <p className="font-body text-[10px] text-muted mb-0.5">Max. Last</p>
                      <p className="font-body text-xs font-semibold text-navy leading-tight">{box.maxWeight}</p>
                    </div>
                  </div>

                  {/* Ideal for */}
                  <div className="flex-1">
                    <p className="font-body text-[10px] font-bold tracking-[0.16em] uppercase text-gold mb-3">
                      Ideal für
                    </p>
                    <ul className="space-y-1.5">
                      {box.idealFor.map((use) => (
                        <li key={use} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span className="font-body text-xs text-navy">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional materials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Verpackungsmaterial</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Alles für einen sicheren Umzug
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {materials.map((m) => (
              <div
                key={m.name}
                className="flex items-start gap-4 p-5 rounded-xl border border-navy/8 bg-ivory hover:border-gold/30 transition-colors duration-200"
              >
                <span className="text-2xl">{m.icon}</span>
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
              {
                title: "Kartons kaufen",
                desc: "Einmaliger Kauf – Sie behalten die Kartons. Ideal wenn Sie häufiger umziehen oder lagern.",
                cta: "Jetzt bestellen",
              },
              {
                title: "Kartons mieten",
                desc: "Umweltfreundlicher und günstiger. Wir liefern, Sie packen, wir holen ab.",
                cta: "Mietanfrage",
              },
              {
                title: "Einpackservice",
                desc: "Unser Team verpackt alles professionell – mit der richtigen Box für jeden Gegenstand.",
                cta: "Service anfragen",
              },
            ].map((opt) => (
              <div key={opt.title} className="flex flex-col gap-4 p-7 rounded-2xl bg-white/6 border border-white/10">
                <h3 className="font-heading text-lg font-semibold text-ivory">{opt.title}</h3>
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            Häufige Fragen zu Kartons & Verpackung
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

      {/* Related services */}
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Ergänzende Leistungen</SectionLabel>
          <h2 className="font-heading text-xl font-semibold text-navy mb-7">
            Passend zur Verpackung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { slug: "einpackservice", title: "Einpackservice", tagline: "Wir verpacken alles professionell für Sie." },
              { slug: "lokalumzug", title: "Privatumzug", tagline: "Kompletterservice mit Festpreisgarantie." },
              { slug: "umzugskartons-lieferung", title: "Kartonlieferung", tagline: "Kartons direkt zu Ihnen nach Hause liefern." },
            ].map((rel) => (
              <Link
                key={rel.slug}
                href={`/leistungen/${rel.slug}`}
                className="group flex flex-col gap-2 p-6 bg-white rounded-xl border border-navy/8 hover:border-gold/30 hover:shadow-card transition-all duration-300"
              >
                <h3 className="font-heading text-base font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                  {rel.title}
                </h3>
                <p className="font-body text-sm text-muted leading-snug flex-1">{rel.tagline}</p>
                <span className="inline-flex items-center gap-1 text-xs font-body font-medium text-gold mt-2">
                  Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
