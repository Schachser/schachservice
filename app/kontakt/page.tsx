import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Shield, Star, Lock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QuoteForm }    from "@/components/forms/QuoteForm";
import { MapSection }   from "@/components/sections/MapSection";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/kontakt" },
  title: "Kostenloses Angebot anfragen – Kontakt",
  description:
    "Fordern Sie Ihr kostenloses Festpreisangebot bei SCHACHSERVICE an. Antwort in 24 Stunden. Per Formular, Telefon oder WhatsApp.",
  robots: { index: true, follow: true },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 176 41726196",
    href: "tel:+4917641726196",
    event: "phone_click",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@schachservice.de",
    href: "mailto:info@schachservice.de",
    event: undefined,
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Draisstraße 69, 68169 Mannheim",
    href: undefined,
    event: undefined,
  },
  {
    icon: Clock,
    label: "Erreichbarkeit",
    value: "Mo–Fr 07–19 Uhr · Sa 08–16 Uhr",
    href: undefined,
    event: undefined,
  },
];

const trustPoints = [
  { icon: Shield, text: "Festpreisgarantie – keine Nachschläge" },
  { icon: Star,   text: "4.9 / 5 auf Google (312 Bewertungen)" },
  { icon: Lock,   text: "Datenschutz & sichere Anfrage" },
  { icon: Shield, text: "Vollversicherter Transport" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://schachservice.de" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://schachservice.de/kontakt" },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-ivory min-h-screen pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left: info column (2/5) */}
            <div className="lg:col-span-2">
              <SectionLabel className="mb-5">Kontakt</SectionLabel>
              <h1 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-semibold text-navy leading-tight mb-5">
                Ihr Umzug beginnt{" "}
                <em className="not-italic text-gold">hier</em>
              </h1>
              <p className="font-body text-base leading-relaxed text-muted mb-10 max-w-sm">
                Füllen Sie unser Formular aus oder kontaktieren Sie uns direkt.
                Wir erstellen Ihnen ein kostenloses Festpreisangebot –
                persönlich und ohne Verpflichtung.
              </p>

              {/* Contact details */}
              <ul className="space-y-4 mb-10" aria-label="Kontaktinformationen">
                {contactDetails.map(({ icon: Icon, label, value, href, event }) => (
                  <li key={label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-white border border-navy/8 flex items-center justify-center flex-shrink-0 shadow-card"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-semibold text-muted tracking-[0.15em] uppercase">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          data-event={event}
                          className="font-body text-sm font-medium text-navy hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-sm font-medium text-navy">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                data-event="whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Per WhatsApp anfragen"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#1a9e4e] hover:bg-[#25D366]/18 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] mb-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="font-body text-xs font-bold">Per WhatsApp schreiben</p>
                  <p className="font-body text-[10px] text-[#1a9e4e]/70">Schnelle Antwort garantiert</p>
                </div>
              </a>

              {/* Trust points */}
              <div className="space-y-2.5" aria-label="Vertrauenselemente">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-sm text-muted">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: multi-step form (3/5) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-navy/8 shadow-elegant">
                <div className="mb-6 pb-6 border-b border-navy/8 flex items-center justify-between">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-navy">
                      Kostenloses Angebot
                    </h2>
                    <p className="font-body text-xs text-muted mt-1">
                      Unverbindlich · Antwort in 24 Stunden
                    </p>
                  </div>
                  <div className="flex gap-0.5" aria-label="4.9 von 5 Sternen">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-gold text-sm" aria-hidden="true">★</span>
                    ))}
                  </div>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
