import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/leistungen" },
  title: "Alle Leistungen – Umzug, Montage, Reinigung & mehr",
  description:
    "SCHACHSERVICE bietet den vollständigen Umzugsservice aus einer Hand: Umzüge, Montage, Verpackung, Reinigung, Entrümpelung und Einlagerung in Mannheim.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Leistungen</SectionLabel>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-navy leading-tight max-w-3xl mb-6">
            Alles für Ihren Umzug —{" "}
            <em className="not-italic text-gold">aus einer Hand</em>
          </h1>
          <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
            Von der ersten Beratung bis zur letzten Schachtel: SCHACHSERVICE begleitet
            Sie durch jeden Schritt Ihres Umzugs mit Premium-Service und Festpreisgarantie.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-ivory rounded-xl p-8 border border-navy/8 hover:border-gold/30 hover:shadow-elegant transition-all duration-300"
              >
                <h2 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                  {cat.title}
                </h2>
                <p className="font-body text-sm text-muted mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {cat.services.slice(0, 5).map((s) => (
                    <li key={s.id}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-2 text-sm font-body text-muted hover:text-gold transition-colors duration-150"
                      >
                        <ArrowRight className="w-3 h-3 text-gold/50" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  {cat.services.length > 5 && (
                    <li className="text-xs text-muted/60 pl-5">
                      +{cat.services.length - 5} weitere
                    </li>
                  )}
                </ul>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-gold hover:gap-3 transition-all duration-200"
                >
                  Alle ansehen <ArrowRight className="w-3.5 h-3.5" />
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
