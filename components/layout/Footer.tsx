"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, ArrowRight, Clock, Shield } from "lucide-react";
import { LEAD_URL, WHATSAPP_URL } from "@/lib/constants";
import { useLang } from "@/context/LanguageProvider";

const services = [
  { label: "Privatumzug",      href: "/leistungen/lokalumzug" },
  { label: "Fernumzug",        href: "/leistungen/fernumzug" },
  { label: "Firmenumzug",      href: "/leistungen/firmenumzug" },
  { label: "Seniorenumzug",    href: "/leistungen/seniorenumzug" },
  { label: "Entrümpelung",     href: "/leistungen/wohnungsentruempelung" },
  { label: "Möbelmontage",     href: "/leistungen/moebelmontage" },
  { label: "Einpackservice",   href: "/leistungen/einpackservice" },
  { label: "Alle Leistungen",  href: "/leistungen" },
];

const regions = [
  { label: "Mannheim",     href: "/regionen/mannheim" },
  { label: "Heidelberg",   href: "/regionen/heidelberg" },
  { label: "Ludwigshafen", href: "/regionen/ludwigshafen" },
  { label: "Karlsruhe",    href: "/regionen/karlsruhe" },
  { label: "Worms",        href: "/regionen/worms" },
  { label: "Speyer",       href: "/regionen/speyer" },
  { label: "Schwetzingen", href: "/regionen/schwetzingen" },
  { label: "Weinheim",     href: "/regionen/weinheim" },
];

const company = [
  { label: "Über uns",  href: "/ueber-uns" },
  { label: "Karriere",  href: "/karriere" },
  { label: "Ratgeber",  href: "/ratgeber" },
  { label: "FAQ",       href: "/faq" },
  { label: "Preise",    href: "/preise" },
  { label: "Kontakt",   href: "/kontakt" },
];

const legal = [
  { label: "Impressum",   href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB",         href: "/agb" },
];

export function Footer() {
  const { t } = useLang();

  const hours = [
    { dayKey: "footer.hours_mf",  time: "07:00 – 19:00 Uhr" },
    { dayKey: "footer.hours_sat", time: "08:00 – 16:00 Uhr" },
    { dayKey: "footer.hours_sun", timeKey: "footer.hours_closed" },
  ];

  const trustItems = [
    "footer.trust_local",
    "footer.trust_ontime",
    "footer.trust_ins",
    "footer.trust_gdpr",
    "footer.trust_staff",
    "footer.trust_exp",
  ];

  return (
    <footer className="bg-navy text-ivory/80" aria-label="Fußzeile">

      {/* Pre-footer CTA strip */}
      <div className="border-b border-ivory/8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-base font-semibold text-ivory">{t("footer.strip_headline")}</p>
            <p className="font-body text-sm text-ivory/50 mt-0.5">{t("footer.strip_sub")}</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              aria-label="Kostenloses Angebot anfragen"
              className="inline-flex items-center gap-2 h-10 px-6 rounded-lg bg-gold text-navy text-sm font-body font-semibold hover:bg-gold-muted transition-all duration-200 shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {t("footer.strip_cta")} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_URL}
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-[#25D366]/40 text-[#4ade80] text-sm font-body font-medium hover:border-[#25D366]/70 hover:bg-[#25D366]/8 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column (2 cols) */}
          <div className="lg:col-span-2 space-y-6 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded" aria-label="SCHACHSERVICE Startseite">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-gold" aria-hidden="true">
                <path d="M8 27h16M11.5 27v-3.5M20.5 27v-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 23.5h12c0-3-1.5-5-3.5-5.5l1-2.5-2.5-1 .5-2c-1.5-3-4-4-6-3.5L9 11l1.5 1.5L9 14l2 2-1 1 2 .5v6h10"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12.5" cy="11.5" r="1" fill="currentColor" />
              </svg>
              <span className="font-heading text-lg font-semibold tracking-widest text-ivory uppercase">
                Schachservice
              </span>
            </Link>

            <p className="font-body text-sm leading-relaxed text-ivory/55 max-w-xs">
              Ihr vertrauensvoller Umzugspartner in Mannheim und der Metropolregion Rhein-Neckar.
              Sorgfalt, Präzision und persönliche Begleitung seit über 15 Jahren.
            </p>

            {/* Google Rating */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ivory/5 border border-ivory/10 w-fit">
              <div className="flex gap-0.5" aria-label="4.9 von 5 Sternen Google Bewertung">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-gold text-sm" aria-hidden="true">★</span>
                ))}
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-ivory leading-none">4.9 / 5</p>
                <p className="font-body text-[10px] text-ivory/40 mt-0.5">312 Google-Bewertungen</p>
              </div>
            </div>

            {/* Contact */}
            <address className="not-italic space-y-2.5 text-sm">
              <a
                href="tel:+4917641726196"
                data-event="phone_click"
                aria-label="Telefon: +49 176 41726196"
                className="flex items-center gap-3 text-ivory/65 hover:text-gold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                <Phone className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" aria-hidden="true" />
                +49 176 41726196
              </a>
              <a
                href="mailto:info@schachservice.de"
                aria-label="E-Mail: info@schachservice.de"
                className="flex items-center gap-3 text-ivory/65 hover:text-gold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                <Mail className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" aria-hidden="true" />
                info@schachservice.de
              </a>
              <span className="flex items-center gap-3 text-ivory/65">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0" aria-hidden="true" />
                Draisstraße 69, 68169 Mannheim
              </span>
            </address>

            {/* Opening hours */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-3.5 h-3.5 text-gold/60" aria-hidden="true" />
                <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-gold/70">
                  {t("footer.hours_label")}
                </p>
              </div>
              <dl className="space-y-1">
                {hours.map((h) => {
                  const day  = t(h.dayKey);
                  const time = "timeKey" in h ? t(h.timeKey!) : h.time;
                  const closed = "timeKey" in h;
                  return (
                    <div key={h.dayKey} className="flex items-center justify-between gap-6">
                      <dt className="font-body text-xs text-ivory/50 w-16">{day}</dt>
                      <dd className={`font-body text-xs font-medium ${closed ? "text-ivory/30" : "text-ivory/70"}`}>
                        {time}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {(["footer.trust_fixed", "footer.trust_insured"] as const).map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase text-gold border border-gold/20 rounded-full"
                >
                  <Shield className="w-3 h-3" aria-hidden="true" />
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              {t("footer.col_services")}
            </p>
            <ul className="space-y-2" role="list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-1.5 text-sm font-body text-ivory/55 hover:text-gold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/0 group-hover:text-gold/70 transition-all duration-200 -ml-3 group-hover:ml-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              {t("footer.col_regions")}
            </p>
            <ul className="space-y-2" role="list">
              {regions.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center gap-1.5 text-sm font-body text-ivory/55 hover:text-gold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/0 group-hover:text-gold/70 transition-all duration-200 -ml-3 group-hover:ml-0" aria-hidden="true" />
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              {t("footer.col_company")}
            </p>
            <ul className="space-y-2" role="list">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="group flex items-center gap-1.5 text-sm font-body text-ivory/55 hover:text-gold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded py-0.5"
                  >
                    <ArrowRight className="w-3 h-3 text-gold/0 group-hover:text-gold/70 transition-all duration-200 -ml-3 group-hover:ml-0" aria-hidden="true" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local trust column */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-5">
              {t("footer.col_trust")}
            </p>
            <ul className="space-y-3" role="list">
              {trustItems.map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" aria-hidden="true" />
                  <span className="font-body text-xs text-ivory/55">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(205,163,73,0.25), transparent)" }} />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-ivory/35">
          © {new Date().getFullYear()} SCHACHSERVICE. {t("footer.rights")}
        </p>
        <nav className="flex items-center gap-4 flex-wrap justify-center" aria-label="Rechtliches">
          {legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs text-ivory/35 hover:text-gold/70 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
