"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/variants";

const differentiators = [
  {
    number: "01",
    title: "Festpreisgarantie — keine Überraschungen",
    description:
      "Ihr Angebot ist Ihr Preis. Wir arbeiten ausschließlich mit transparenten Festpreisen – keine nachträglichen Aufschläge, keine versteckten Kosten.",
  },
  {
    number: "02",
    title: "Geprüftes Fachpersonal",
    description:
      "Jedes Teammitglied ist ausgebildet, zuverlässig und diskret. Wir behandeln Ihren Besitz mit derselben Sorgfalt wie unsere eigenen Dinge.",
  },
  {
    number: "03",
    title: "Vollkasko-Versicherungsschutz",
    description:
      "Ihr Eigentum ist während des gesamten Umzugs vollständig versichert. Für maximale Sicherheit und Ihr gutes Gefühl.",
  },
  {
    number: "04",
    title: "Mannheim ist unsere Heimat",
    description:
      "Als lokales Unternehmen kennen wir jede Straße, jeden Stadtteil, jede Parksituation. Lokale Expertise, die Zeit und Nerven spart.",
  },
];

const stats = [
  { value: "15+",    label: "Jahre Erfahrung" },
  { value: "4.9★",  label: "Google Rating" },
  { value: "5.000+",label: "Zufriedene Kunden" },
];

export function WhySchachservice() {
  return (
    <section className="bg-ivory py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: editorial text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-6">Warum Schachservice?</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3.2rem)] font-semibold text-navy leading-tight mb-6"
            >
              Nicht der günstigste —{" "}
              <em className="not-italic text-gold">der zuverlässigste</em>{" "}
              Umzug Mannheims.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-base leading-relaxed text-muted mb-12 max-w-lg"
            >
              Wir messen uns nicht am Preis, sondern an der Qualität jedes einzelnen Umzugs.
              Denn ein Umzug ist mehr als Kisten schleppen – er ist der Beginn eines neuen
              Lebensabschnitts.
            </motion.p>

            {/* Differentiators */}
            <motion.div variants={staggerContainer} className="space-y-8">
              {differentiators.map((d) => (
                <motion.div
                  key={d.number}
                  variants={fadeUp}
                  className="flex gap-5 group"
                >
                  <span className="font-heading text-[11px] font-semibold text-gold tracking-widest mt-1 flex-shrink-0">
                    {d.number}
                  </span>
                  <div>
                    <h3 className="font-body text-sm font-semibold text-navy mb-1.5 group-hover:text-gold transition-colors duration-200">
                      {d.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-muted">
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Button href="/ueber-uns" variant="outline" size="md">
                Mehr über uns
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: editorial visual column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >
            {/* Large decorative quote */}
            <div
              className="absolute -top-10 -left-6 font-heading text-[220px] leading-none text-navy/4 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Stat cards stacked */}
            <div className="relative z-10 space-y-4">
              {/* Testimonial pull-quote card */}
              <div className="bg-surface rounded-xl p-8 border border-navy/8 shadow-elegant">
                <p className="font-heading text-xl font-normal italic text-navy leading-relaxed mb-6">
                  &bdquo;Der Umzug war entspannter als ich es mir je vorgestellt hatte.
                  Das Team von Schachservice hat alles perfekt organisiert –
                  pünktlich, sorgsam und ohne einen einzigen Kratzer.&ldquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                    <span className="font-heading text-sm font-semibold text-gold">S.K.</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-navy">Sophia K.</p>
                    <p className="font-body text-xs text-muted">Mannheim-Lindenhof → Heidelberg</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-navy rounded-xl p-5 flex flex-col gap-1"
                  >
                    <span className="font-heading text-2xl font-semibold text-gold">
                      {stat.value}
                    </span>
                    <span className="font-body text-[11px] text-ivory/55 tracking-wide leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small trust strip */}
              <div className="bg-gold/10 rounded-xl px-6 py-4 border border-gold/20 flex items-center gap-3">
                <span className="text-gold text-xl">♟</span>
                <p className="font-body text-sm text-navy">
                  <strong className="font-semibold">Festpreisgarantie</strong> —
                  Ihr Angebot ist Ihr endgültiger Preis. Versprochen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
