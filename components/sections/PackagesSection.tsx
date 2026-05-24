"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";
import { LEAD_URL } from "@/lib/constants";

const packages = [
  {
    id: "basic",
    name: "Basic Paket",
    tagline: "Selbst gemacht, professionell transportiert",
    price: "Ab Anfrage",
    color: "border-navy/12",
    headerBg: "bg-ivory",
    badge: null,
    features: [
      "Transport Ihrer vorbereiteten Möbel",
      "Beladen und Entladen",
      "Halteverbotszone beantragt",
      "Vollversicherung",
      "Festpreis",
    ],
    notIncluded: ["Verpackungsservice", "Möbelmontage", "Endreinigung"],
    cta: { label: "Angebot anfragen", href: "/kontakt" },
  },
  {
    id: "komfort",
    name: "Komfort Paket",
    tagline: "Rundum-Service ohne Eigenarbeit",
    price: "Ab Anfrage",
    color: "border-gold/40",
    headerBg: "bg-gold/8",
    badge: "Beliebt",
    features: [
      "Vollständiges Einpacken",
      "Transport",
      "Möbelauf- und abbau",
      "Halteverbotszone",
      "Vollversicherung",
      "Festpreis",
    ],
    notIncluded: ["Endreinigung", "Behördenbegleitung"],
    cta: { label: "Komfort anfragen", href: "/kontakt" },
  },
  {
    id: "premium",
    name: "Premium Paket",
    tagline: "Alles aus einer Hand – Sie tun nichts",
    price: "Ab Anfrage",
    color: "border-navy",
    headerBg: "bg-navy",
    badge: "Empfohlen",
    features: [
      "Vollständiges Ein- und Auspacken",
      "Transport & Möbelmontage",
      "Halteverbotszone",
      "Endreinigung alte Wohnung",
      "Vollversicherung",
      "Festpreis",
      "Persönlicher Ansprechpartner",
    ],
    notIncluded: [],
    cta: { label: "Premium anfragen", href: "/kontakt" },
    dark: true,
  },
  {
    id: "senioren",
    name: "Senioren Paket",
    tagline: "Mit Geduld und persönlicher Begleitung",
    price: "Ab Anfrage",
    color: "border-sky/40",
    headerBg: "bg-sky/10",
    badge: null,
    features: [
      "Persönlicher Umzugsbegleiter",
      "Transport & Möbelmontage",
      "Behörden-Ummeldung auf Wunsch",
      "Haushaltsauflösung möglich",
      "Vollversicherung",
      "Festpreis",
    ],
    notIncluded: [],
    cta: { label: "Senioren anfragen", href: "/kontakt" },
  },
  {
    id: "student",
    name: "Student Paket",
    tagline: "Faire Preise für kleine Haushalte",
    price: "Ab Anfrage",
    color: "border-navy/12",
    headerBg: "bg-ivory",
    badge: null,
    features: [
      "Kleine Haushalte und WG-Zimmer",
      "Transport",
      "Kurzfristige Termine",
      "Festpreis",
      "Vollversicherung",
    ],
    notIncluded: ["Einpackservice", "Endreinigung"],
    cta: { label: "Student anfragen", href: "/kontakt" },
  },
  {
    id: "business",
    name: "Business Paket",
    tagline: "Für Unternehmen – termingerecht & diskret",
    price: "Ab Anfrage",
    color: "border-slate/30",
    headerBg: "bg-slate/5",
    badge: "B2B",
    features: [
      "Projektplanung & Koordination",
      "Nacht- und Wochenendtermine",
      "IT-Equipment gesichert",
      "Akten & Archiv",
      "Vollversicherung",
      "Festpreis",
    ],
    notIncluded: [],
    cta: { label: "Business anfragen", href: "/kontakt" },
  },
];

export function PackagesSection() {
  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="mb-5">Unsere Pakete</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight mb-5"
          >
            Das richtige Paket —{" "}
            <em className="not-italic text-gold">für jede Situation</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base leading-relaxed text-muted">
            Alle Pakete beinhalten Festpreisgarantie und Vollversicherung.
            Nach Ihrer Anfrage erstellen wir ein individuelles Angebot.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={scaleIn}
              className={`relative flex flex-col rounded-2xl border-2 overflow-hidden bg-white shadow-card hover:shadow-elegant transition-shadow duration-400 ${pkg.color}`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-5 right-5">
                  <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-body font-bold tracking-wide uppercase ${pkg.dark ? "bg-gold text-navy" : "bg-gold/15 text-gold border border-gold/30"}`}>
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`px-8 py-7 ${pkg.headerBg}`}>
                <h3 className={`font-heading text-xl font-semibold mb-1 ${pkg.dark ? "text-ivory" : "text-navy"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-body text-sm ${pkg.dark ? "text-ivory/65" : "text-muted"}`}>
                  {pkg.tagline}
                </p>
                <div className={`mt-4 font-heading text-sm font-semibold ${pkg.dark ? "text-gold" : "text-gold"}`}>
                  {pkg.price}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 px-8 py-6 space-y-3">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-navy">{f}</span>
                  </div>
                ))}
                {pkg.notIncluded.length > 0 && (
                  <div className="pt-2 border-t border-navy/8 mt-4 space-y-2">
                    {pkg.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-40">
                        <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center text-xs text-muted">—</span>
                        <span className="font-body text-sm text-muted line-through">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="quote_click"
                  className="group flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-gold text-navy font-body font-medium text-sm hover:bg-gold-muted transition-colors duration-200 shadow-gold"
                >
                  {pkg.cta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center font-body text-sm text-muted"
        >
          Individuelle Pakete möglich —{" "}
          <Link href="/kontakt" className="text-gold hover:underline">
            sprechen Sie uns an
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
