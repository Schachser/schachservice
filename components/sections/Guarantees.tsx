"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Star, CheckCircle, Truck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp } from "@/lib/variants";

const guarantees = [
  {
    icon: Shield,
    title: "Festpreisgarantie",
    description:
      "Ihr schriftliches Angebot ist Ihr endgültiger Preis. Keine nachträglichen Aufschläge, keine Überraschungen – das ist unser Versprechen.",
  },
  {
    icon: CheckCircle,
    title: "Vollkaskoversicherung",
    description:
      "Jeder Umzug ist vollständig versichert. Im unwahrscheinlichen Schadensfall erstatten wir den vollen Wert – schnell und unbürokratisch.",
  },
  {
    icon: Clock,
    title: "Pünktlichkeitsgarantie",
    description:
      "Wir erscheinen zur vereinbarten Zeit. Sollten wir mehr als 30 Minuten zu spät kommen, erhalten Sie eine Gutschrift.",
  },
  {
    icon: Star,
    title: "Geprüftes Fachpersonal",
    description:
      "Jedes Teammitglied ist ausgebildet, zuverlässig und hat einen einwandfreien Hintergrundcheck. Ihr Vertrauen ist uns heilig.",
  },
  {
    icon: Truck,
    title: "Professionelles Equipment",
    description:
      "Moderne Umzugsfahrzeuge, qualitatives Verpackungsmaterial und spezielle Transportmittel für Wertvollen – für jeden Bedarf gerüstet.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-ivory-soft py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="mb-5">Unsere Garantien</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight"
          >
            Fünf Versprechen —{" "}
            <em className="not-italic text-gold">eingehalten</em>
          </motion.h2>
        </motion.div>

        {/* Guarantees grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/8 rounded-2xl overflow-hidden border border-navy/8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="bg-surface p-8 flex flex-col gap-4 group hover:bg-ivory transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-ivory group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300">
                <g.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-base font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                {g.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted">
                {g.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-body text-sm text-muted">
            Alle Garantien sind schriftlich in Ihrem Vertrag festgehalten.
            <span className="text-gold font-medium"> Kein Kleingedrucktes.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
