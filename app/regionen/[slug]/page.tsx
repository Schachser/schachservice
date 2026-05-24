import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { cities } from "@/lib/cities";
import { featuredServiceCards } from "@/lib/services";
import { LEAD_URL } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.id === slug);
  if (!city) return { title: "Region nicht gefunden" };
  return {
    alternates: { canonical: `/regionen/${slug}` },
    title: `Umzugsunternehmen ${city.name} – SCHACHSERVICE`,
    description: `SCHACHSERVICE – Ihr Premium-Umzugsunternehmen in ${city.name}. Festpreisgarantie, lokale Expertise, über 15 Jahre Erfahrung. Kostenlos anfragen.`,
    keywords: [`Umzug ${city.name}`, `Umzugsunternehmen ${city.name}`, "Schachservice", city.area ?? ""],
  };
}

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.id }));
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((c) => c.id === slug);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(205,163,73,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/regionen" className="font-body text-xs text-ivory/40 hover:text-gold transition-colors">
              Regionen
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="font-body text-xs text-gold">{city.name}</span>
          </div>
          <SectionLabel light className="mb-5">{city.area ?? "Serviceregion"}</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Umzugsunternehmen {city.name} —{" "}
            <em className="not-italic text-gold">Ihre Experten vor Ort</em>
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            {city.description}
            {city.population && ` ${city.name} mit ${city.population} – wir kennen jeden Stadtteil.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-semibold text-sm rounded-xl hover:bg-gold-muted transition-all duration-300 shadow-gold"
            >
              Angebot für {city.name} anfragen <ArrowRight className="w-4 h-4" />
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

      {/* Local details + Guarantees */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Neighborhoods */}
          {city.neighborhoods && (
            <div>
              <SectionLabel className="mb-5">Stadtteile</SectionLabel>
              <h2 className="font-heading text-2xl font-semibold text-navy mb-5">
                Alle Stadtteile in {city.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body text-muted bg-ivory border border-navy/8 rounded-full"
                  >
                    <MapPin className="w-2.5 h-2.5 text-gold" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights / Guarantees */}
          <div>
            <SectionLabel className="mb-5">Unsere Garantien</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-5">
              {city.name}-Garantien
            </h2>
            <div className="space-y-3">
              {city.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <p className="font-body text-sm text-navy">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Karte</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
            Unser Servicegebiet in {city.name}
          </h2>
          <div className="relative rounded-2xl overflow-hidden border border-navy/12 shadow-elegant" style={{ height: 420 }}>
            <iframe
              src={city.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`SCHACHSERVICE Umzüge in ${city.name}`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none">
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1">
                Schachservice Mannheim
              </p>
              <p className="font-heading text-sm text-white">
                Umzüge in {city.name} und Umgebung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Unsere Leistungen in {city.name}</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
            Premium-Service vor Ort
          </h2>
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

      {/* FAQ */}
      {city.localFaqs.length > 0 && (
        <section className="bg-ivory py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <SectionLabel className="mb-5">FAQ</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
              Häufige Fragen zu Umzügen in {city.name}
            </h2>
            <div className="divide-y divide-navy/8">
              {city.localFaqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="font-body text-sm font-semibold text-navy mb-2">{faq.question}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
