import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/preise" },
  title: "Preise & Pakete – Transparente Festpreise",
  description:
    "SCHACHSERVICE bietet transparente Festpreispakete für jeden Umzug. Basic, Komfort, Premium, Senioren und Business-Pakete – ohne versteckte Kosten.",
};

const packages = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Für den einfachen Umzug",
    description: "Professioneller Transport Ihrer Möbel und Kartons.",
    includes: [
      "Umzugstransport",
      "Professionelles Team",
      "Versicherungsschutz",
      "Halteverbot-Beantragung",
    ],
    highlight: false,
  },
  {
    id: "komfort",
    name: "Komfort",
    tagline: "Der beliebteste Umzug",
    description: "Rundum-Betreuung – von der Verpackung bis zum Aufbau.",
    includes: [
      "Alles aus Basic",
      "Professioneller Einpackservice",
      "Möbeldemontage & -aufbau",
      "Karton-Lieferung & -Abholung",
      "Reinigung der Umzugsrouten",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Vollständig sorglos",
    description: "Der kompletzte Umzugsservice – Sie müssen nichts tun.",
    includes: [
      "Alles aus Komfort",
      "Kompletter Ein- & Auspacksservice",
      "Spezialverpackung (Gemälde, Antik)",
      "Endreinigung der alten Wohnung",
      "Persönlicher Umzugskoordinator",
      "Priority-Termin",
    ],
    highlight: false,
  },
  {
    id: "senioren",
    name: "Senioren",
    tagline: "Mit Herz & Geduld",
    description: "Besonders einfühlsamer Service für Senioren.",
    includes: [
      "Alles aus Komfort",
      "Persönliche Umzugsbegleitung",
      "Behördenbegleitung",
      "Dolmetscher (auf Anfrage)",
      "Flexible Zeiteinteilung",
    ],
    highlight: false,
  },
  {
    id: "business",
    name: "Business",
    tagline: "Für Unternehmen & Büros",
    description: "Minimale Ausfallzeit für Ihr Unternehmen.",
    includes: [
      "Alles aus Premium",
      "IT-Equipment-Umzug",
      "Akten & Dokumententransport",
      "Wochenend- & Nachtumzüge",
      "Projektkoordination",
    ],
    highlight: false,
  },
];

export default function PreisePage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Preise & Pakete</SectionLabel>
          <h1 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-navy leading-tight max-w-2xl mb-6">
            Transparent. Fair.{" "}
            <em className="not-italic text-gold">Festpreis garantiert.</em>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl leading-relaxed">
            Alle Preise sind Festpreise. Kein Stundenlohn, keine nachträglichen Aufschläge –
            nur ehrliche, transparente Umzugspreise. Fordern Sie Ihr individuelles Angebot an.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`rounded-2xl p-8 border flex flex-col ${
                  pkg.highlight
                    ? "bg-navy border-gold/30 shadow-lifted"
                    : "bg-ivory border-navy/8 shadow-card"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-flex items-center px-3 py-1 text-[10px] font-body font-semibold tracking-widest uppercase text-navy bg-gold rounded-full mb-5 w-fit">
                    Beliebteste Wahl
                  </span>
                )}
                <h2
                  className={`font-heading text-2xl font-semibold mb-1 ${
                    pkg.highlight ? "text-gold" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h2>
                <p
                  className={`font-body text-xs font-medium tracking-wide uppercase mb-3 ${
                    pkg.highlight ? "text-ivory/60" : "text-muted"
                  }`}
                >
                  {pkg.tagline}
                </p>
                <p
                  className={`font-body text-sm leading-relaxed mb-7 ${
                    pkg.highlight ? "text-ivory/70" : "text-muted"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          pkg.highlight ? "text-gold" : "text-gold"
                        }`}
                      />
                      <span
                        className={`font-body text-sm ${
                          pkg.highlight ? "text-ivory/80" : "text-navy"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="quote_click"
                  className={`inline-flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-body font-medium transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-gold text-navy hover:bg-gold-muted shadow-gold"
                      : "border border-navy/15 text-navy hover:border-gold hover:text-gold"
                  }`}
                >
                  Angebot anfordern <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-sm text-muted mt-10">
            Alle Pakete als <strong className="text-navy">Festpreis</strong> nach Vor-Ort-Besichtigung.
            Individuelle Leistungen auf Anfrage.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
