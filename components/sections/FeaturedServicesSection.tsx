"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, Truck, Trash2, Wrench, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp } from "@/lib/variants";

const services = [
  {
    id: "privatumzug",
    title: "Privatumzug",
    tagline: "Stressfrei in die neue Wohnung – mit Festpreisgarantie und persönlicher Begleitung.",
    category: "Umzug & Transport",
    href: "/leistungen/lokalumzug",
    icon: Home,
  },
  {
    id: "firmenumzug",
    title: "Firmenumzug",
    tagline: "Minimale Ausfallzeit für Ihr Unternehmen – koordiniert, diskret und termingerecht.",
    category: "Business",
    href: "/leistungen/firmenumzug",
    icon: Building2,
  },
  {
    id: "fernumzug",
    title: "Fernumzug",
    tagline: "Deutschland- und europaweit – GPS-getrackt, vollversichert, pünktlich.",
    category: "Transport",
    href: "/leistungen/fernumzug",
    icon: Truck,
  },
  {
    id: "entruempelung",
    title: "Entrümpelung",
    tagline: "Wohnungsauflösung & Entrümpelung aus einer Hand – schnell und professionell.",
    category: "Aufräumen",
    href: "/leistungen/wohnungsentruempelung",
    icon: Trash2,
  },
  {
    id: "moebelmontage",
    title: "Möbelmontage",
    tagline: "Professioneller Auf- und Abbau aller Möbel – präzise und schonend.",
    category: "Montage",
    href: "/leistungen/moebelmontage",
    icon: Wrench,
  },
  {
    id: "kuechenmontage",
    title: "Küchenmontage",
    tagline: "Präzise Küchenmontage – fachgerecht ausgeführt, schnell abgeschlossen.",
    category: "Montage",
    href: "/leistungen/kuechenmontage",
    icon: Utensils,
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  tagline: string;
  category: string;
  href: string;
  icon: LucideIcon;
}>;

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease, delay: index * 0.08 }}
    >
      <Link
        href={service.href}
        aria-label={`${service.title} – mehr erfahren`}
        className="group flex flex-col rounded-[28px] border border-[rgba(7,17,31,0.08)] bg-white p-8 shadow-[0_2px_20px_rgba(7,17,31,0.05),0_1px_4px_rgba(7,17,31,0.04)] hover:shadow-[0_12px_48px_rgba(7,17,31,0.11),0_2px_8px_rgba(7,17,31,0.06)] hover:-translate-y-2 hover:border-[rgba(205,163,73,0.32)] transition-all duration-500"
      >
        {/* Icon */}
        <div className="mb-6 w-12 h-12 rounded-2xl bg-gold/[0.09] border border-gold/[0.16] flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
        </div>

        {/* Category + Title + Description */}
        <div className="flex-1 space-y-3">
          <p className="font-body text-[10px] font-bold tracking-[0.24em] uppercase text-gold">
            {service.category}
          </p>
          <h3 className="font-heading text-xl lg:text-2xl font-semibold text-navy leading-tight">
            {service.title}
          </h3>
          <p className="font-body text-[0.9rem] text-muted leading-relaxed">
            {service.tagline}
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 pt-6 border-t border-[rgba(7,17,31,0.06)] flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-3">
            Mehr erfahren
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
          {/* Subtle right accent */}
          <span className="w-8 h-8 rounded-full border border-[rgba(7,17,31,0.07)] flex items-center justify-center text-navy/20 group-hover:border-gold/25 group-hover:text-gold/50 transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedServicesSection() {
  return (
    <section className="bg-ivory pt-36 pb-28 lg:pt-44 lg:pb-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-5">Unsere Hauptleistungen</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight"
            >
              Premium-Service —{" "}
              <em className="not-italic text-gold">für jeden Bedarf</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted hover:text-gold transition-colors duration-200 group whitespace-nowrap"
            >
              Alle Leistungen
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-white border border-navy/8"
        >
          <p className="font-body text-sm text-muted text-center sm:text-left">
            Über <strong className="text-navy">80 Einzelleistungen</strong> — vom Umzug bis zur Behördenbegleitung.
          </p>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-ivory text-sm font-body font-medium hover:bg-slate transition-colors duration-200 whitespace-nowrap"
          >
            Alle Leistungen entdecken
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
