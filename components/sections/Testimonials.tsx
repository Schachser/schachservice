"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";

const testimonials = [
  {
    quote:
      "Wir haben Schachservice für unseren Firmenumzug genutzt und waren absolut begeistert. Das gesamte Team war professionell, pünktlich und unglaublich sorgfältig mit unserer Büroausstattung.",
    name: "Michael Berger",
    context: "Geschäftsführer, Mannheim",
    detail: "Büroumzug · 120 Mitarbeiter",
    stars: 5,
    initial: "M.B.",
  },
  {
    quote:
      "Ich war skeptisch, ob ein Umzug mit drei Kindern und einem Klavier stressfrei sein kann. Schachservice hat mir gezeigt, dass es geht. Perfekte Organisation, freundliches Team und kein einziger Kratzer.",
    name: "Sarah Hoffmann",
    context: "Mannheim-Käfertal → Heidelberg",
    detail: "Privatumzug · Klaviertransport",
    stars: 5,
    initial: "S.H.",
  },
  {
    quote:
      "Seniorenumzüge erfordern besonderes Einfühlungsvermögen. Das Team von Schachservice hat meine Mutter mit so viel Respekt und Geduld behandelt – das werde ich nicht vergessen.",
    name: "Petra Zimmermann",
    context: "Tochter, Ludwigshafen",
    detail: "Seniorenumzug · Wohnungsauflösung",
    stars: 5,
    initial: "P.Z.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-lg">
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-5">Kundenstimmen</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight"
            >
              Was unsere Kunden{" "}
              <em className="not-italic text-gold">wirklich sagen</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold">★</span>
              ))}
            </div>
            <span className="font-heading text-sm text-navy">
              4.9 / 5 auf Google
            </span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              className="bg-surface rounded-xl p-8 border border-navy/8 shadow-card flex flex-col hover:shadow-elegant transition-shadow duration-400"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-gold/30 mb-3" aria-hidden="true" />

              {/* Quote text */}
              <p className="font-heading text-base font-normal italic text-navy leading-relaxed flex-1 mb-8">
                &bdquo;{t.quote}&ldquo;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-5 border-t border-navy/8">
                <div className="w-10 h-10 rounded-full bg-ivory-soft flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xs font-semibold text-gold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-navy leading-tight">{t.name}</p>
                  <p className="font-body text-xs text-muted leading-tight mt-0.5">{t.context}</p>
                  <p className="font-body text-[10px] text-gold/70 leading-tight mt-0.5 tracking-wide uppercase">
                    {t.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
