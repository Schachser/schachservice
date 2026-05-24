"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp } from "@/lib/variants";
import { LEAD_URL } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    description:
      "Kontaktieren Sie uns unverbindlich – per Telefon, E-Mail oder Formular. Wir antworten innerhalb von 24 Stunden mit einer persönlichen Einschätzung.",
    image: "/images/process-1.png",
    alt: "Anfrage beim Umzugsunternehmen senden",
    gradient: "from-[#07111F] to-[#12355B]",
  },
  {
    number: "02",
    title: "Planung & Angebot",
    description:
      "Unser Experte kommt zu Ihnen nach Hause, nimmt alles genau auf und erstellt ein verbindliches Festpreisangebot – ohne versteckte Kosten.",
    image: "/images/process-2.png",
    alt: "Umzugsplanung und Festpreisangebot",
    gradient: "from-[#CDA349] to-[#B8903A]",
  },
  {
    number: "03",
    title: "Umzugstag",
    description:
      "Unser Team erscheint pünktlich, arbeitet strukturiert und behandelt Ihren Besitz mit größter Sorgfalt. Sie können entspannen.",
    image: "/images/process-3.png",
    alt: "Professioneller Umzugstag mit Schachservice",
    gradient: "from-[#12355B] to-[#07111F]",
  },
  {
    number: "04",
    title: "Einzug & Abschluss",
    description:
      "Möbel aufgebaut, alles eingeräumt, Verpackung entsorgt. Wir verlassen Ihre neue Wohnung erst wenn Sie vollständig zufrieden sind.",
    image: "/images/process-4.png",
    alt: "Einzug und Abschluss des Umzugs",
    gradient: "from-[#07111F] to-[#CDA349]",
  },
];

export function PremiumProcessSection() {
  return (
    <section className="bg-[#FAF6EF] py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-20"
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
            Ihr Umzug in{" "}
            <em className="not-italic text-gold">4 Schritten</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-base leading-relaxed text-muted">
            Klar strukturiert, immer transparent – so wissen Sie zu jedem Zeitpunkt
            was als Nächstes passiert.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-navy/8 shadow-card hover:shadow-elegant transition-shadow duration-500 ${i > 0 ? "mt-6" : ""}`}
              >
                {/* Image side */}
                <div className={`relative h-64 lg:h-auto min-h-[320px] bg-[#07111F] ${isEven ? "lg:order-2" : ""}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover brightness-[1.08] contrast-[1.03] saturate-[1.05]"
                    onError={() => {}}
                  />
                  {/* Subtle readability gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: i === 1
                        ? "linear-gradient(to top, rgba(205,163,73,0.25), rgba(205,163,73,0.08) 40%, transparent)"
                        : "linear-gradient(to top, rgba(7,17,31,0.35), rgba(7,17,31,0.08) 40%, transparent)",
                    }}
                  />
                  {/* Step number overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-[6rem] lg:text-[8rem] font-semibold text-white/8 leading-none select-none">
                      {step.number}
                    </span>
                  </div>
                  {/* Step badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] font-body font-bold tracking-[0.22em] uppercase text-white">
                      Schritt {step.number}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`flex flex-col justify-center p-10 lg:p-14 bg-white ${isEven ? "lg:order-1" : ""}`}>
                  <div className="mb-4">
                    <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-navy leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                  {i === 0 && (
                    <div className="mt-8">
                      <a
                        href={LEAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-event="quote_click"
                        className="group/link inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
                      >
                        Jetzt Anfrage senden
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
