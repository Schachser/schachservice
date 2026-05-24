"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, MapPin, Truck, Star, Wrench } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";

const cards = [
  {
    icon: ShieldCheck,
    title: "Festpreisgarantie",
    description: "Ihr Angebot ist Ihr Preis – keine nachträglichen Aufschläge, keine Überraschungen.",
    accent: "text-gold",
    bg: "bg-gold/8",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert",
    description: "Ihr gesamtes Inventar ist während des Umzugs durch Vollkaskoversicherung gedeckt.",
    accent: "text-sky",
    bg: "bg-sky/10",
  },
  {
    icon: Clock,
    title: "Pünktliches Team",
    description: "Wir erscheinen zum vereinbarten Termin – immer. Pünktlichkeit ist unser Versprechen.",
    accent: "text-gold",
    bg: "bg-gold/8",
  },
  {
    icon: Star,
    title: "Saubere Planung",
    description: "Von der Halteverbotszone bis zur Ladereihenfolge – wir planen jeden Detail vorab.",
    accent: "text-sky",
    bg: "bg-sky/10",
  },
  {
    icon: MapPin,
    title: "Lokale Mannheim Expertise",
    description: "15 Jahre vor Ort – wir kennen jeden Stadtteil, jede Einfahrtsbeschränkung.",
    accent: "text-gold",
    bg: "bg-gold/8",
  },
  {
    icon: Truck,
    title: "Premium Fahrzeuge & Equipment",
    description: "Moderne, gepflegte Fahrzeuge mit professionellem Umzugsequipment der neuesten Generation.",
    accent: "text-sky",
    bg: "bg-sky/10",
  },
];

export function WhySchachserviceSection() {
  return (
    <section className="bg-navy py-28 lg:py-40 overflow-hidden relative">
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(205,163,73,0.06) 0%, transparent 70%)", transform: "translate(20%, -20%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(142,197,255,0.05) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel light className="mb-5">Warum Schachservice</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-ivory leading-tight mb-5"
          >
            Nicht der günstigste —{" "}
            <em className="not-italic text-gold">der zuverlässigste</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base leading-relaxed text-ivory/60">
            Wir messen uns nicht am Preis, sondern an der Qualität jedes einzelnen Umzugs.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={scaleIn}
                className="group flex flex-col gap-4 p-7 rounded-2xl border border-ivory/10 bg-ivory/5 hover:border-gold/30 hover:bg-ivory/8 transition-all duration-400"
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.accent}`} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ivory/55">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: "15+", label: "Jahre Erfahrung" },
            { value: "4.9★", label: "Google Rating" },
            { value: "5.000+", label: "Umzüge" },
            { value: "9", label: "Serviceregionen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-ivory/8 bg-ivory/4">
              <div className="font-heading text-3xl font-semibold text-gold mb-1">{stat.value}</div>
              <div className="font-body text-xs text-ivory/45 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
