"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp } from "@/lib/variants";

const steps = [
  {
    number: "01",
    title: "Anfrage & Beratung",
    description:
      "Kontaktieren Sie uns unverbindlich – per Telefon, E-Mail oder über unser Formular. Wir melden uns innerhalb von 24 Stunden mit einer persönlichen Einschätzung.",
    duration: "Tag 1",
  },
  {
    number: "02",
    title: "Vor-Ort-Besichtigung",
    description:
      "Unser Experte kommt zu Ihnen nach Hause, nimmt alles genau auf und erstellt ein detailliertes, unverbindliches Festpreisangebot.",
    duration: "Tag 2–5",
  },
  {
    number: "03",
    title: "Planung & Vorbereitung",
    description:
      "Wir planen Ihren Umzugstag bis ins Detail – von der Halteverbotsszone bis zur optimalen Beladungsreihenfolge. Sie erhalten alle Informationen im Voraus.",
    duration: "Wochen vorher",
  },
  {
    number: "04",
    title: "Professioneller Umzugstag",
    description:
      "Unser Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihren Besitz mit größter Sorgfalt. Sie können entspannen – wir haben alles im Griff.",
    duration: "Umzugstag",
  },
  {
    number: "05",
    title: "Einrichten & Einleben",
    description:
      "Möbel aufgebaut, Kartons ausgepackt, alles am richtigen Platz. Wir verlassen Ihre neue Wohnung erst, wenn Sie vollständig zufrieden sind.",
    duration: "Abschluss",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel className="mb-5">Unser Ablauf</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight mb-5"
          >
            Ihr Umzug — in{" "}
            <em className="not-italic text-gold">fünf durchdachten Schritten</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base leading-relaxed text-muted">
            Jeder Umzug folgt einem bewährten Prozess. So wissen Sie zu jedem Zeitpunkt,
            was als Nächstes passiert — und können sich vollständig auf Ihren Neustart konzentrieren.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-gold/30 via-gold/20 to-transparent hidden lg:block"
            aria-hidden="true"
          />

          <motion.div
            className="space-y-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex gap-6 lg:gap-10 items-start group"
              >
                {/* Step number node */}
                <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                  <div className="w-18 h-18 rounded-full border-2 border-gold/30 bg-ivory flex items-center justify-center group-hover:border-gold group-hover:bg-gold/8 transition-all duration-300">
                    <span className="font-heading text-sm font-semibold text-gold tracking-widest">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pb-14 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 mt-4">
                    <h3 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <span className="sm:ml-auto inline-flex items-center px-3 py-1 text-[10px] font-body font-medium tracking-[0.16em] uppercase text-gold bg-gold/8 border border-gold/20 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
