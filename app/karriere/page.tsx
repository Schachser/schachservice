import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/karriere" },
  title: "Karriere – Werden Sie Teil von SCHACHSERVICE",
  description:
    "Wir suchen engagierte Mitarbeiter für unser wachsendes Team in Mannheim. Umzugshelfer, Monteure, Fahrer und mehr – jetzt bewerben.",
};

const positions = [
  {
    title: "Umzugshelfer (m/w/d)",
    type: "Vollzeit / Teilzeit",
    description: "Unterstützung bei Umzügen in Mannheim und der Metropolregion.",
  },
  {
    title: "Kraftfahrer CE (m/w/d)",
    type: "Vollzeit",
    description: "Führen unserer modernen Umzugsfahrzeuge, Festanstellung, faire Vergütung.",
  },
  {
    title: "Möbelmonteur (m/w/d)",
    type: "Vollzeit / Teilzeit",
    description: "Professioneller Auf- und Abbau von Möbeln bei unseren Kunden.",
  },
  {
    title: "Teamleiter Umzug (m/w/d)",
    type: "Vollzeit",
    description: "Leitung von Umzugsteams, Koordination vor Ort, Kundenkommunikation.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(205,163,73,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel light className="mb-5">Karriere</SectionLabel>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Werden Sie Teil von{" "}
            <em className="not-italic text-gold">Mannheims bestem Team</em>
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-xl leading-relaxed">
            Wir suchen Menschen, die stolz auf ihre Arbeit sind und anderen einen
            wirklich guten Start an einem neuen Ort ermöglichen möchten.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
            Offene Stellen
          </h2>
          <div className="space-y-4">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-7 rounded-xl border border-navy/8 bg-ivory hover:border-gold/30 hover:shadow-card transition-all duration-300"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">{pos.title}</h3>
                  <p className="font-body text-xs text-gold mb-2 tracking-wide">{pos.type}</p>
                  <p className="font-body text-sm text-muted">{pos.description}</p>
                </div>
                <Link
                  href={`/kontakt?stelle=${encodeURIComponent(pos.title)}`}
                  className="inline-flex items-center gap-2 h-10 px-6 text-sm font-body font-medium text-navy border border-navy/15 rounded-lg hover:border-gold hover:text-gold transition-all duration-200 flex-shrink-0"
                >
                  Bewerben <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
