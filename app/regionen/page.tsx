import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/regionen" },
  title: "Regionen – Umzug in Mannheim, Heidelberg, Karlsruhe & mehr",
  description:
    "SCHACHSERVICE bedient die gesamte Metropolregion Rhein-Neckar. Premium-Umzüge in Mannheim, Heidelberg, Ludwigshafen, Karlsruhe, Worms, Speyer und Frankenthal.",
};

export default function RegionenPage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Serviceregionen</SectionLabel>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-navy leading-tight max-w-3xl mb-6">
            Eine Region.{" "}
            <em className="not-italic text-gold">Ein Premium-Partner.</em>
          </h1>
          <p className="font-body text-lg text-muted max-w-2xl leading-relaxed">
            Als Mannheimer Unternehmen kennen wir die gesamte Metropolregion Rhein-Neckar
            wie unsere Westentasche – und bedienen sie mit demselben hohen Standard.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={city.href}
                className="group p-7 rounded-xl border border-navy/8 bg-ivory hover:border-gold/35 hover:shadow-elegant transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <MapPin className="w-4 h-4 text-gold mt-0.5" />
                  {city.id === "mannheim" && (
                    <span className="text-[10px] font-body font-medium tracking-widest uppercase text-gold border border-gold/30 px-2 py-0.5 rounded-full">
                      Heimat
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-navy mb-1 group-hover:text-gold transition-colors duration-300">
                    {city.name}
                  </h2>
                  <p className="font-body text-xs text-muted/70 uppercase tracking-wide mb-3">
                    {city.tagline}
                  </p>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {city.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1.5 text-sm font-body font-medium text-gold">
                  Mehr erfahren
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
