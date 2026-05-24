import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { featuredServiceCards } from "@/lib/services";
import { homepageCities } from "@/lib/cities";
import { LEAD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Umzugsunternehmen Metropolregion Rhein-Neckar – SCHACHSERVICE",
  description: "SCHACHSERVICE – Premium-Umzüge in der gesamten Metropolregion Rhein-Neckar. Festpreisgarantie, 9 Städte abgedeckt.",
  keywords: ["Umzug Rhein-Neckar", "Umzugsunternehmen Metropolregion", "Schachservice"],
};

const highlights = [
  "Alle 9 Städte der Metropolregion abgedeckt",
  "Festpreisgarantie für jede Strecke",
  "Kombi-Umzüge zwischen Städten",
  "Vollversicherung",
  "Lokal verwurzeltes Unternehmen",
  "Über 15 Jahre Erfahrung in der Region",
];

export default function RheinNeckarPage() {
  return (
    <>
      <section className="bg-navy pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(205,163,73,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel light className="mb-5">Metropolregion Rhein-Neckar</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Umzüge in der Metropolregion —{" "}
            <em className="not-italic text-gold">eine Region, ein Anbieter</em>
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            Von Mannheim bis Karlsruhe, von Worms bis Heidelberg – SCHACHSERVICE bedient die gesamte Metropolregion Rhein-Neckar mit Premium-Umzugsservice und Festpreisgarantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Angebot anfragen <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Cities + Highlights */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel className="mb-5">Unsere Städte</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
              Alle Serviceregionen
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {homepageCities.map((city) => (
                <Link
                  key={city.id}
                  href={city.href}
                  className="group flex items-center gap-2 p-3 rounded-xl border border-navy/10 hover:border-gold/40 hover:bg-ivory transition-all duration-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="font-body text-sm font-medium text-navy group-hover:text-gold transition-colors duration-200">{city.name}</span>
                  <ArrowRight className="w-3 h-3 ml-auto text-navy/20 group-hover:text-gold/60 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel className="mb-5">Garantien</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
              Rhein-Neckar Garantien
            </h2>
            <div className="space-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <p className="font-body text-sm text-navy">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Karte</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
            Unser Servicegebiet – Metropolregion Rhein-Neckar
          </h2>
          <div className="relative rounded-2xl overflow-hidden border border-navy/12 shadow-elegant" style={{ height: 420 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d8.5!3d49.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCHACHSERVICE Servicegebiet Metropolregion Rhein-Neckar"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none">
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1">Schachservice Mannheim</p>
              <p className="font-heading text-sm text-white">Metropolregion Rhein-Neckar – vollständig abgedeckt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Unsere Leistungen</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-8">Premium-Service in der ganzen Region</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredServiceCards.slice(0, 4).map((card) => (
              <Link
                key={card.slug}
                href={card.href}
                className={`group flex flex-col gap-3 p-6 rounded-xl bg-gradient-to-br ${card.gradient} border border-white/10 hover:shadow-elegant transition-shadow duration-300`}
              >
                <h3 className="font-heading text-base font-semibold text-white">{card.title}</h3>
                <p className="font-body text-xs text-white/60 group-hover:text-white/80 transition-colors flex-1">{card.tagline}</p>
                <span className="inline-flex items-center gap-1 text-xs font-body font-medium" style={{ color: card.accent }}>
                  Mehr <ArrowRight className="w-3 h-3" />
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
