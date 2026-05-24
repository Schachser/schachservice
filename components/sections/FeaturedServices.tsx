"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, Wrench, Package, Home, Warehouse, Building2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";

const iconMap = {
  Truck, Wrench, Package, Home, Warehouse, Building2,
} as const;

const services = [
  {
    id: "umzug",
    icon: "Truck" as keyof typeof iconMap,
    title: "Umzug & Transport",
    description:
      "Lokal, bundesweit und international – professionelle Umzüge für Privat- und Firmenkunden mit Festpreisgarantie.",
    href: "/leistungen/umzug",
    tags: ["Lokalumzug", "Fernumzug", "Firmenumzug"],
  },
  {
    id: "montage",
    icon: "Wrench" as keyof typeof iconMap,
    title: "Montage & Aufbau",
    description:
      "Präziser Auf- und Abbau Ihrer Möbel. Von IKEA bis Maßschreinerei – mit handwerklicher Sorgfalt.",
    href: "/leistungen/montage",
    tags: ["Möbelmontage", "Küchenmontage", "TV-Halterung"],
  },
  {
    id: "verpackung",
    icon: "Package" as keyof typeof iconMap,
    title: "Verpackung & Material",
    description:
      "Professionelles Ein- und Auspacken mit geprüftem Material. Jedes Stück sicher und fachgerecht verpackt.",
    href: "/leistungen/verpackung",
    tags: ["Einpackservice", "Spezialverpackung", "Kartons"],
  },
  {
    id: "reinigung",
    icon: "Home" as keyof typeof iconMap,
    title: "Reinigung & Übergabe",
    description:
      "Besenrein und kautionssicher – wir bereiten Ihre alte Wohnung perfekt auf die Übergabe vor.",
    href: "/leistungen/reinigung",
    tags: ["Endreinigung", "Teppichreinigung", "Abnahme"],
  },
  {
    id: "entruempelung",
    icon: "Warehouse" as keyof typeof iconMap,
    title: "Entrümpelung",
    description:
      "Schnelle, diskrete und vollständige Entrümpelungen – von der Wohnung bis zur gesamten Haushaltsauflösung.",
    href: "/leistungen/entruempelung",
    tags: ["Haushaltsauflösung", "Kellerentrümpelung", "Sperrmüll"],
  },
  {
    id: "lagerung",
    icon: "Building2" as keyof typeof iconMap,
    title: "Einlagerung",
    description:
      "Kurz- oder Langzeitlagerung in gesicherten, klimatisierten Lagerhallen. Flexibel und transparent bepreist.",
    href: "/leistungen/lagerung",
    tags: ["Kurzzeitlager", "Möbellager", "Dokumentenlager"],
  },
];

export function FeaturedServices() {
  return (
    <section className="bg-ivory-soft py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-5">Unsere Leistungen</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight"
            >
              Alles aus einer Hand —{" "}
              <em className="not-italic text-gold">mit Präzision</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted hover:text-gold transition-colors duration-200 group"
            >
              Alle Leistungen entdecken
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.id} variants={scaleIn}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full bg-surface rounded-xl p-8 border border-navy/8 shadow-card hover:shadow-elegant hover:border-gold/30 transition-all duration-400"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg bg-ivory flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-muted mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 text-[10px] font-body font-medium tracking-wide uppercase text-muted bg-ivory rounded-md border border-navy/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center gap-2 text-sm font-body font-medium text-gold">
                    Mehr erfahren
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
