import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Zap, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { allFlatServices } from "@/lib/services";
import { LEAD_URL, BLITZANGEBOT_URL } from "@/lib/constants";
import { homepageCities } from "@/lib/cities";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allFlatServices.find((s) => s.slug === slug);
  if (!service) return { title: "Leistung nicht gefunden" };
  return {
    title: `${service.title} – SCHACHSERVICE Mannheim`,
    description: service.description,
    keywords: [service.title, "Mannheim", service.categoryLabel, "Schachservice"],
  };
}

export async function generateStaticParams() {
  return allFlatServices.map((s) => ({ slug: s.slug }));
}

const relatedSlugs: Record<string, string[]> = {
  lokalumzug:           ["einpackservice", "moebelmontage", "endreinigung"],
  fernumzug:            ["lokalumzug", "kurzzeitlagerung", "einpackservice"],
  firmenumzug:          ["bueroumzug", "moebelmontage", "dokumentenlagerung"],
  seniorenumzug:        ["haushaltsaufloesung", "wohnungsabnahme-begleitung", "moebelmontage"],
  wohnungsentruempelung:["haushaltsaufloesung", "sperrmuellentsorgung", "endreinigung"],
  moebelmontage:        ["moebeldemontage", "kuechenmontage", "ikea-aufbauservice"],
  kuechenmontage:       ["moebelmontage", "lampenmontage", "silikonfugen-erneuerung"],
  endreinigung:         ["wohnungsabnahme-begleitung", "wandreparaturen", "fensterreinigung"],
  haushaltsaufloesung:  ["wohnungsentruempelung", "nachlassaufloesung", "moebel-lagerung"],
  bueroaufloesung:      ["firmenumzug", "bueroumzug", "it-umzug"],
  moebeltaxi:           ["lokalumzug", "umzugshelfer", "moebelmontage"],
  transportservice:     ["moebeltaxi", "umzugshelfer", "halteverbotszone"],
  halteverbotszone:     ["lokalumzug", "fernumzug", "umzugshelfer"],
  umzugshelfer:         ["lokalumzug", "moebeltaxi", "einpackservice"],
  praxisumzug:          ["firmenumzug", "it-umzug", "moebelmontage"],
  "it-umzug":           ["firmenumzug", "bueroaufloesung", "praxisumzug"],
  umzugsreinigung:      ["endreinigung", "wohnungsabnahme-begleitung", "fensterreinigung"],
  notfallumzug:         ["lokalumzug", "umzugshelfer", "kurzzeitlagerung"],
  wochenendumzug:       ["lokalumzug", "einpackservice", "halteverbotszone"],
  "last-minute-umzug":  ["notfallumzug", "umzugshelfer", "moebeltaxi"],
  europaumzug:          ["fernumzug", "internationale-umzuege", "kurzzeitlagerung"],
  "internationale-umzuege": ["europaumzug", "fernumzug", "moebel-lagerung"],
  "moebel-lagerung":    ["kurzzeitlagerung", "langzeitlagerung", "wohnungsentruempelung"],
};

const serviceImageMap: Record<string, string> = {
  // Residential & local moves
  lokalumzug:               "/images/service-privatumzug.png",
  seniorenumzug:            "/images/service-privatumzug.png",
  studentenumzug:           "/images/service-privatumzug.png",
  "express-umzug":          "/images/service-privatumzug.png",
  notfallumzug:             "/images/service-privatumzug.png",
  wochenendumzug:           "/images/service-privatumzug.png",
  "last-minute-umzug":      "/images/service-privatumzug.png",
  moebeltaxi:               "/images/service-privatumzug.png",
  transportservice:         "/images/service-privatumzug.png",
  halteverbotszone:         "/images/service-privatumzug.png",
  umzugshelfer:             "/images/service-privatumzug.png",
  "wohnungsabnahme-begleitung": "/images/service-privatumzug.png",
  // Long distance & international
  fernumzug:                "/images/service-fernumzug.png",
  auslandsumzug:            "/images/service-fernumzug.png",
  europaumzug:              "/images/service-fernumzug.png",
  "internationale-umzuege": "/images/service-fernumzug.png",
  kurzzeitlagerung:         "/images/service-fernumzug.png",
  langzeitlagerung:         "/images/service-fernumzug.png",
  "moebel-lagerung":        "/images/service-fernumzug.png",
  "self-storage-vermittlung": "/images/service-fernumzug.png",
  // Business & office
  firmenumzug:              "/images/service-firmenumzug.png",
  bueroumzug:               "/images/service-firmenumzug.png",
  praxisumzug:              "/images/service-firmenumzug.png",
  "it-umzug":               "/images/service-firmenumzug.png",
  bueroaufloesung:          "/images/service-firmenumzug.png",
  dokumentenlagerung:       "/images/service-firmenumzug.png",
  // Furniture & assembly
  moebelmontage:            "/images/service-moebelmontage.png",
  moebeldemontage:          "/images/service-moebelmontage.png",
  klaviertransport:         "/images/service-moebelmontage.png",
  tresortransport:          "/images/service-moebelmontage.png",
  kunsttransport:           "/images/service-moebelmontage.png",
  lampenmontage:            "/images/service-moebelmontage.png",
  "tv-wandhalterung-montage": "/images/service-moebelmontage.png",
  "ikea-aufbauservice":     "/images/service-moebelmontage.png",
  "gardinenstangen-montage": "/images/service-moebelmontage.png",
  // Kitchen & packing
  kuechenmontage:           "/images/service-kuechenmontage.png",
  "silikonfugen-erneuerung": "/images/service-kuechenmontage.png",
  einpackservice:           "/images/service-kuechenmontage.png",
  auspackservice:           "/images/service-kuechenmontage.png",
  "professionelles-verpacken": "/images/service-kuechenmontage.png",
  spezialverpackung:        "/images/service-kuechenmontage.png",
  "umzugskartons-lieferung": "/images/service-kuechenmontage.png",
  "umzugskartons-vermietung": "/images/service-kuechenmontage.png",
  "umzugsmaterial-lieferung": "/images/service-kuechenmontage.png",
  // Clearance & cleaning
  wohnungsentruempelung:    "/images/service-entruempelung.png",
  kellerentruempelung:      "/images/service-entruempelung.png",
  dachbodenraeumung:        "/images/service-entruempelung.png",
  garagenentruempelung:     "/images/service-entruempelung.png",
  haushaltsaufloesung:      "/images/service-entruempelung.png",
  nachlassaufloesung:       "/images/service-entruempelung.png",
  sperrmuellentsorgung:     "/images/service-entruempelung.png",
  "elektroschrott-entsorgung": "/images/service-entruempelung.png",
  "moebelspende-organisation": "/images/service-entruempelung.png",
  endreinigung:             "/images/service-entruempelung.png",
  umzugsreinigung:          "/images/service-entruempelung.png",
  teppichreinigung:         "/images/service-entruempelung.png",
  fensterreinigung:         "/images/service-entruempelung.png",
  wandreparaturen:          "/images/service-entruempelung.png",
  malerarbeiten:            "/images/service-entruempelung.png",
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = allFlatServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = (relatedSlugs[slug] ?? [])
    .map((rs) => allFlatServices.find((s) => s.slug === rs))
    .filter(Boolean) as typeof allFlatServices;

  const isExpressService = ["express-umzug", "notfallumzug", "last-minute-umzug"].includes(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://schachservice.de" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://schachservice.de/leistungen" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://schachservice.de/leistungen/${slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://schachservice.de/#business",
      name: "SCHACHSERVICE",
    },
    areaServed: { "@type": "City", name: "Mannheim" },
    url: `https://schachservice.de/leistungen/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center pt-36 pb-24 overflow-hidden bg-[#07111F]">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={serviceImageMap[slug] ?? service.image ?? "/images/service-privatumzug.png"}
            alt={service.title}
            fill
            priority
            unoptimized
            quality={100}
            sizes="100vw"
            className="object-cover brightness-[0.82] contrast-[1.05] saturate-[1.04]"
            style={{ objectPosition: "center center" }}
          />
        </div>

        {/* Single overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/75 via-[#07111F]/40 to-[#07111F]/5" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/leistungen" className="font-body text-xs text-ivory/40 hover:text-gold transition-colors">
              Leistungen
            </Link>
            <span className="text-ivory/20">/</span>
            <span className="font-body text-xs text-gold">{service.categoryLabel}</span>
          </div>
          <SectionLabel light className="mb-5">{service.categoryLabel}</SectionLabel>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            {service.title}
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed mb-10">
            {service.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            {isExpressService ? (
              /* Blitzangebot as primary CTA for express services */
              <span className="relative inline-flex shrink-0">
                <span
                  className="hidden"
                  aria-hidden="true"
                />
                <a
                  href={BLITZANGEBOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="blitzangebot_click"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-gold text-navy font-body font-bold text-sm rounded-xl transition-all duration-200 hover:bg-gold-muted hover:-translate-y-0.5"
                >
                  <Zap className="w-4 h-4 fill-navy/20" aria-hidden="true" />
                  Blitzangebot erhalten
                </a>
              </span>
            ) : null}
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className={`inline-flex items-center gap-2 h-12 px-8 font-body font-semibold text-sm rounded-xl transition-all duration-300 ${
                isExpressService
                  ? "border border-ivory/25 text-ivory hover:border-gold/50 hover:text-gold"
                  : "bg-gold text-navy hover:bg-gold-muted shadow-gold"
              }`}
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

      {/* Express urgency banner */}
      {isExpressService && (
        <section className="relative overflow-hidden bg-navy border-y border-gold/20 py-10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 120% at 50% 50%, rgba(205,163,73,0.07) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1">
                    Express-Service verfügbar
                  </p>
                  <p className="font-heading text-xl font-semibold text-ivory leading-tight">
                    Innerhalb von 24–48 Stunden
                  </p>
                  <p className="font-body text-sm text-ivory/55 mt-1">
                    Festpreis garantiert · Sofort-Besichtigung möglich · Wochenende verfügbar
                  </p>
                </div>
              </div>
              <span className="relative inline-flex shrink-0">
                <span
                  className="hidden"
                  aria-hidden="true"
                />
                <a
                  href={BLITZANGEBOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="blitzangebot_click"
                  className="inline-flex items-center gap-2.5 h-12 px-8 rounded-xl bg-gold text-navy font-body font-bold text-sm whitespace-nowrap transition-all duration-200 hover:bg-gold-muted hover:-translate-y-0.5"
                >
                  <Zap className="w-4 h-4 fill-navy/20" aria-hidden="true" />
                  Jetzt Blitzangebot anfordern
                </a>
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Description + Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Description */}
          <div>
            <SectionLabel className="mb-5">Über diesen Service</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-5">
              Was wir für Sie tun
            </h2>
            <p className="font-body text-base leading-relaxed text-muted mb-4">
              {service.description}
            </p>
            <p className="font-body text-base leading-relaxed text-muted">
              {service.longDescription}
            </p>

            {/* Highlights pills */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-xs font-body font-semibold text-gold"
                  >
                    ♟ {h}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Benefits */}
          <div>
            <SectionLabel className="mb-5">Ihre Vorteile</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-6">
              Was Sie erhalten
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-navy leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Price hint or trust strip */}
            <div className="mt-8 p-5 rounded-xl bg-ivory border border-navy/8 flex items-center gap-3">
              <span className="text-gold text-xl">♟</span>
              <p className="font-body text-sm text-navy">
                <strong className="font-semibold">
                  {service.priceHint ?? "Festpreisgarantie"}
                </strong>
                {!service.priceHint && " — Ihr Angebot ist Ihr endgültiger Preis."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Ablauf</SectionLabel>
          <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
            So läuft es ab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(service.processSteps ?? [
              { step: "01", title: "Anfrage senden", text: "Per Formular, Telefon oder E-Mail – wir antworten innerhalb von 24h." },
              { step: "02", title: "Besichtigung & Angebot", text: "Kostenloser Vor-Ort-Termin und verbindliches Festpreisangebot." },
              { step: "03", title: "Durchführung", text: "Unser Team erscheint pünktlich und arbeitet professionell und sorgfältig." },
              { step: "04", title: "Abschluss", text: "Fertig – wir verlassen den Ort erst wenn Sie zufrieden sind." },
            ]).map((s) => (
              <div key={s.step} className="relative flex flex-col gap-4 p-6 bg-white rounded-xl border border-navy/8">
                <span className="font-heading text-4xl font-semibold text-gold/20 leading-none">{s.step}</span>
                <h3 className="font-heading text-base font-semibold text-navy">{s.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <SectionLabel className="mb-5">FAQ</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-10">
              Häufige Fragen zu {service.title}
            </h2>
            <div className="space-y-1 divide-y divide-navy/8">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="font-body text-sm font-semibold text-navy mb-2">{faq.question}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="font-body text-xs font-bold tracking-[0.22em] uppercase text-gold mb-5">
              Kundenstimmen
            </p>
            <h2 className="font-heading text-2xl font-semibold text-ivory mb-10">
              Was unsere Kunden sagen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-4 p-7 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="flex gap-0.5 text-gold text-sm">★★★★★</div>
                  <p className="font-body text-sm text-ivory/80 leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-body text-xs font-semibold text-ivory">{t.name}</p>
                    <p className="font-body text-xs text-ivory/40">{t.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-ivory py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionLabel className="mb-5">Ergänzende Leistungen</SectionLabel>
            <h2 className="font-heading text-2xl font-semibold text-navy mb-8">
              Das könnte Sie auch interessieren
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
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
      )}

      {/* SEO text */}
      {service.seoText && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="font-body text-sm text-muted leading-relaxed">{service.seoText}</p>
          </div>
        </section>
      )}

      {/* City links */}
      <section className={service.seoText ? "bg-ivory py-16" : "bg-white py-16"}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-gold mb-5">
            Service verfügbar in
          </p>
          <div className="flex flex-wrap gap-3">
            {homepageCities.map((city) => (
              <Link
                key={city.id}
                href={city.href}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-body font-medium text-muted border border-navy/12 rounded-full hover:border-gold hover:text-gold transition-all duration-200"
              >
                <MapPin className="w-3 h-3 text-gold/50" />
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
