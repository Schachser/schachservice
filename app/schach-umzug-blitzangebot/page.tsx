import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Zap, Phone, Clock, ShieldCheck, CheckCircle,
  Truck, CalendarCheck, Timer, Star,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LEAD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/schach-umzug-blitzangebot" },
  title: "Blitzangebot Umzug Mannheim – Schnell & Zuverlässig | SCHACHSERVICE",
  description:
    "Kurzfristiger Umzug in Mannheim? Blitzangebot: In wenigen Minuten anfragen, persönliches Festpreisangebot erhalten. Expressumzug, Last-Minute, Wochenendumzug – wir sind für Sie da.",
  keywords: [
    "Blitzangebot Umzug",
    "Expressumzug Mannheim",
    "Kurzfristiger Umzug",
    "Last Minute Umzug Mannheim",
    "Wochenendumzug",
    "Schachservice",
  ],
};

/* ─── Structured data ─────────────────────────────────────────────── */

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: "https://schachservice.de" },
    { "@type": "ListItem", position: 2, name: "Blitzangebot",   item: "https://schachservice.de/schach-umzug-blitzangebot" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie schnell erhalte ich ein Blitzangebot?",
      acceptedAnswer: { "@type": "Answer", text: "In der Regel innerhalb von 1–3 Stunden nach Ihrer Anfrage. Bei dringendem Bedarf rufen wir sofort zurück." },
    },
    {
      "@type": "Question",
      name: "Wie kurzfristig kann ich einen Umzug buchen?",
      acceptedAnswer: { "@type": "Answer", text: "Wir übernehmen Umzüge mit wenigen Tagen Vorlauf. Je nach Verfügbarkeit auch noch am nächsten Tag – sprechen Sie uns einfach an." },
    },
    {
      "@type": "Question",
      name: "Gibt es einen Aufpreis für kurzfristige Buchungen?",
      acceptedAnswer: { "@type": "Answer", text: "Nein. Unser Festpreisprinzip gilt auch für Express- und Last-Minute-Buchungen. Sie zahlen was vereinbart ist – nicht mehr." },
    },
    {
      "@type": "Question",
      name: "Sind Wochenendtermine für einen Expressumzug verfügbar?",
      acceptedAnswer: { "@type": "Answer", text: "Ja. Wir sind auch samstags und sonntags im Einsatz. Wochenendtermine sind gerade für berufstätige Kunden oft die beste Lösung." },
    },
  ],
};

/* ─── Page data ───────────────────────────────────────────────────── */

const benefits = [
  {
    icon: Timer,
    title: "Angebot in wenigen Stunden",
    text: "Kein tagelanger Warteprozess. Wir prüfen Ihre Anfrage sofort und melden uns persönlich.",
  },
  {
    icon: ShieldCheck,
    title: "Festpreisgarantie",
    text: "Kein versteckter Aufpreis für Kurzfristigkeit. Der vereinbarte Preis ist verbindlich.",
  },
  {
    icon: CalendarCheck,
    title: "Auch am Wochenende",
    text: "Samstags und sonntags einsatzbereit. Für Kunden, die unter der Woche keine Zeit haben.",
  },
  {
    icon: CheckCircle,
    title: "Vollversichert",
    text: "Jeder Umzug ist mit Transportversicherung abgesichert – egal wie kurzfristig.",
  },
];

const useCases = [
  {
    icon: Zap,
    title: "Expressumzug",
    label: "Sofort-Verfügbarkeit",
    text: "Sie müssen innerhalb weniger Tage raus? Wir organisieren Ihren Expressumzug mit Festpreis und vollem Service.",
  },
  {
    icon: CalendarCheck,
    title: "Wochenendumzug",
    label: "Sa & So verfügbar",
    text: "Wochenende ist kein Problem. Viele unserer Kunden ziehen samstags um – entspannt und ohne Urlaubstag.",
  },
  {
    icon: Clock,
    title: "Last Minute Umzug",
    label: "Auch morgen möglich",
    text: "Manchmal muss es sofort gehen. Wir prüfen unsere Kapazitäten und geben Ihnen schnell Bescheid.",
  },
];

const steps = [
  {
    num: "01",
    title: "Anfrage senden",
    text: "Füllen Sie das kurze Formular aus. Angabe von Umzugsort, Ziel, Datum und Größe reicht für ein erstes Angebot.",
  },
  {
    num: "02",
    title: "Angebot erhalten",
    text: "Unser Team prüft Ihre Anfrage und schickt Ihnen ein verbindliches Festpreisangebot — meist innerhalb weniger Stunden.",
  },
  {
    num: "03",
    title: "Umzug starten",
    text: "Zusagen, Termin bestätigen — und wir übernehmen den Rest. Von der Verpackung bis zum letzten Karton.",
  },
];

const faqs = [
  {
    q: "Wie schnell erhalte ich ein Blitzangebot?",
    a: "In der Regel innerhalb von 1–3 Stunden nach Ihrer Anfrage. Bei besonders dringendem Bedarf rufen wir sofort zurück.",
  },
  {
    q: "Wie kurzfristig kann ich einen Umzug buchen?",
    a: "Wir übernehmen Umzüge mit wenigen Tagen Vorlauf. Je nach Verfügbarkeit auch noch am nächsten Tag – einfach anfragen.",
  },
  {
    q: "Gibt es einen Aufpreis für kurzfristige Buchungen?",
    a: "Nein. Unser Festpreisprinzip gilt auch für Express- und Last-Minute-Buchungen. Sie zahlen was vereinbart wurde.",
  },
  {
    q: "Sind Wochenendtermine für Expressumzüge verfügbar?",
    a: "Ja. Wir sind auch samstags und sonntags im Einsatz – ideal für Kunden, die unter der Woche keine Zeit haben.",
  },
  {
    q: "Was ist im Blitzangebot enthalten?",
    a: "Ein vollständiges Festpreisangebot für Ihren Umzug inklusive Transport, Auf- und Abladen sowie optionaler Verpackungsleistungen.",
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */

export default function BlitzangebotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28"
        style={{ background: "#F5F2EB" }}
      >
        {/* Ambient gold glow */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            top: "-20%", right: "-10%",
            width: "60%", height: "90%",
            background: "radial-gradient(ellipse at 65% 30%, rgba(205,163,73,0.09) 0%, transparent 62%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-8 text-xs font-body">
            <Link href="/" className="text-[#0F172A]/40 hover:text-gold transition-colors">Home</Link>
            <span className="text-[#0F172A]/25">/</span>
            <span className="text-gold font-medium">Blitzangebot</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
            style={{
              background: "rgba(205,163,73,0.10)",
              border: "1px solid rgba(205,163,73,0.28)",
            }}
          >
            <Zap className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
            <span className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-gold/90">
              Kurzfristiger Umzug
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-heading font-semibold text-[#0F172A] leading-[1.06] tracking-[-0.025em] mb-5"
            style={{ fontSize: "clamp(2.1rem, 5vw, 3.6rem)" }}
          >
            Blitzangebot für Ihren
            <br className="hidden sm:block" />
            Umzug in{" "}
            <em className="not-italic text-gold">Mannheim</em>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-[#0F172A]/56 leading-[1.84] mb-10 mx-auto"
            style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", maxWidth: "42ch" }}
          >
            In wenigen Minuten Anfrage senden und schnell ein persönliches
            Angebot erhalten. Festpreisgarantie, vollversichert, auch kurzfristig.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            {/* Primary */}
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_lead_click"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-[54px] px-9 bg-gold text-navy font-body font-bold rounded-xl transition-colors duration-200 hover:bg-gold-muted"
              style={{
                fontSize: "0.97rem",
                boxShadow: "0 6px 28px rgba(205,163,73,0.32), 0 2px 8px rgba(205,163,73,0.16)",
              }}
            >
              <Zap className="w-[18px] h-[18px] fill-navy/25 flex-shrink-0" aria-hidden="true" />
              Jetzt Blitzangebot anfragen
            </a>

            {/* Secondary: phone */}
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-[54px] px-8 font-body font-medium text-[#0F172A] rounded-xl transition-all duration-200 hover:bg-white/70"
              style={{
                fontSize: "0.95rem",
                border: "1px solid #DDD4C7",
                background: "rgba(255,255,255,0.65)",
              }}
            >
              <Phone className="w-4 h-4 text-[#0F172A]/50 flex-shrink-0" aria-hidden="true" />
              Direkt anrufen
            </a>
          </div>

          {/* Quick trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { icon: ShieldCheck, text: "Festpreisgarantie" },
              { icon: Star,        text: "4.9 Google-Bewertung" },
              { icon: CheckCircle, text: "Vollversichert" },
              { icon: Truck,       text: "15+ Jahre Erfahrung" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="w-[13px] h-[13px] text-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-[12px] font-medium text-[#0F172A]/50">{text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Blitzangebot ──────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4">Warum Blitzangebot?</SectionLabel>
            <h2 className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] font-semibold text-navy leading-tight">
              Schnell, fair und zuverlässig
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  background: "#F5F2EB",
                  border: "1px solid #E8E2D6",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(205,163,73,0.12)", border: "1px solid rgba(205,163,73,0.22)" }}
                >
                  <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-[0.97rem] font-semibold text-navy leading-snug">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed flex-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#F5F2EB" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4">Für kurzfristige Umzüge</SectionLabel>
            <h2 className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] font-semibold text-navy leading-tight">
              Wann ist das Blitzangebot die richtige Wahl?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map(({ icon: Icon, title, label, text }) => (
              <div
                key={title}
                className="relative flex flex-col gap-4 p-7 rounded-2xl bg-white"
                style={{
                  border: "1px solid #E8E2D6",
                  boxShadow: "0 2px 16px rgba(7,17,31,0.06), 0 1px 4px rgba(7,17,31,0.04)",
                }}
              >
                {/* Label pill */}
                <span
                  className="self-start inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-[10px] font-bold tracking-[0.18em] uppercase"
                  style={{
                    background: "rgba(205,163,73,0.10)",
                    border: "1px solid rgba(205,163,73,0.25)",
                    color: "#B8903A",
                  }}
                >
                  <Icon className="w-3 h-3" aria-hidden="true" />
                  {label}
                </span>

                <h3 className="font-heading text-xl font-semibold text-navy">{title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed flex-1">{text}</p>

                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="blitzangebot_lead_click"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-gold mt-auto hover:gap-2.5 transition-all duration-200"
                >
                  Jetzt anfragen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Steps ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel className="mb-4">So funktioniert es</SectionLabel>
            <h2 className="font-heading text-[clamp(1.7rem,3vw,2.4rem)] font-semibold text-navy leading-tight">
              Ihr Blitzangebot in 3 Schritten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line — desktop only */}
            <div
              className="absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px hidden md:block"
              style={{ background: "linear-gradient(to right, rgba(205,163,73,0.25), rgba(205,163,73,0.25))" }}
              aria-hidden="true"
            />

            {steps.map(({ num, title, text }, i) => (
              <div key={num} className="relative flex flex-col items-center text-center gap-5">
                {/* Number circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: i === 0 ? "#CDA349" : "#F5F2EB",
                    border: `2px solid ${i === 0 ? "#CDA349" : "#DDD4C7"}`,
                    boxShadow: i === 0 ? "0 4px 20px rgba(205,163,73,0.30)" : "none",
                  }}
                >
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: i === 0 ? "#07111F" : "#CDA349" }}
                  >
                    {num}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">{title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below steps */}
          <div className="text-center mt-14">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_lead_click"
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-10 bg-gold text-navy font-body font-bold rounded-xl transition-colors duration-200 hover:bg-gold-muted"
              style={{
                fontSize: "0.95rem",
                boxShadow: "0 4px 24px rgba(205,163,73,0.28)",
              }}
            >
              <Zap className="w-[17px] h-[17px] fill-navy/25 flex-shrink-0" aria-hidden="true" />
              Jetzt Blitzangebot anfragen
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "#F5F2EB" }}>
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionLabel className="mb-4">FAQ</SectionLabel>
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-navy mb-10">
            Häufige Fragen zum Blitzangebot
          </h2>

          <div className="divide-y divide-[#E8E2D6]">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-5">
                <h3 className="font-body text-[0.95rem] font-semibold text-navy mb-2">{q}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#E8E2D6]">
            <p className="font-body text-sm text-muted mb-4">
              Noch Fragen? Wir sind direkt erreichbar:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="blitzangebot_lead_click"
                className="inline-flex items-center justify-center gap-2 h-11 px-7 bg-gold text-navy font-body font-bold text-sm rounded-xl hover:bg-gold-muted transition-colors duration-200"
                style={{ boxShadow: "0 4px 20px rgba(205,163,73,0.26)" }}
              >
                <Zap className="w-4 h-4 fill-navy/20" aria-hidden="true" />
                Blitzangebot anfragen
              </a>
              <a
                href="tel:+4917641726196"
                className="inline-flex items-center justify-center gap-2 h-11 px-7 font-body font-medium text-sm text-[#0F172A] rounded-xl hover:bg-white/70 transition-all duration-200"
                style={{ border: "1px solid #DDD4C7", background: "rgba(255,255,255,0.65)" }}
              >
                <Phone className="w-4 h-4 text-[#0F172A]/50" aria-hidden="true" />
                +49 176 41726196
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
