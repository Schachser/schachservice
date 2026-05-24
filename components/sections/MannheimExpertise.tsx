"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";

const neighborhoods = [
  "Quadrate (Innenstadt)", "Lindenhof", "Niederfeld", "Neckarstadt-West",
  "Feudenheim", "Käfertal", "Seckenheim", "Sandhofen",
  "Rheinau", "Gartenstadt", "Wallstadt", "Friedrichsfeld",
];

const regions = [
  { name: "Mannheim",     href: "/regionen/mannheim",     primary: true },
  { name: "Heidelberg",   href: "/regionen/heidelberg",   primary: false },
  { name: "Ludwigshafen", href: "/regionen/ludwigshafen", primary: false },
  { name: "Karlsruhe",    href: "/regionen/karlsruhe",    primary: false },
  { name: "Worms",        href: "/regionen/worms",        primary: false },
  { name: "Speyer",       href: "/regionen/speyer",       primary: false },
  { name: "Frankenthal",  href: "/regionen/frankenthal",  primary: false },
  { name: "Rhein-Neckar", href: "/regionen/rhein-neckar", primary: false },
];

export function MannheimExpertise() {
  return (
    <section className="bg-navy py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel light className="mb-6">Lokale Expertise</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-ivory leading-tight mb-6"
            >
              Mannheim ist{" "}
              <em className="not-italic text-gold">unsere Heimat</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-base leading-relaxed text-ivory/65 mb-10 max-w-lg"
            >
              Als in Mannheim verwurzeltes Unternehmen kennen wir nicht nur die Adressen –
              wir kennen die engen Durchfahrten der Quadrate, die Parksituation in Lindenhof,
              die Besonderheiten jedes Stadtteils. Dieses Wissen macht jeden Umzug schneller,
              günstiger und stressfreier.
            </motion.p>

            {/* Mannheim neighborhoods */}
            <motion.div variants={fadeUp}>
              <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                Stadtteile in Mannheim
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body text-ivory/70 bg-ivory/8 border border-ivory/12 rounded-full hover:border-gold/40 hover:text-gold/90 transition-colors duration-200"
                  >
                    <MapPin className="w-2.5 h-2.5 text-gold/50" />
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key local advantage */}
            <motion.div
              variants={fadeUp}
              className="mt-10 p-6 rounded-xl border border-gold/20 bg-ivory/5"
            >
              <p className="font-body text-sm leading-relaxed text-ivory/70">
                <strong className="text-gold font-semibold">Halteverbotszonen:</strong>{" "}
                Wir beantragen Haltverbotsschilder bei der Stadt Mannheim für Sie –
                automatisch, kostenlos und stressfrei.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Region map illustration */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-gold mb-6">
                Serviceregionen
              </p>
            </motion.div>

            {/* Region cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {regions.map((region, i) => (
                <motion.div key={region.name} variants={scaleIn} custom={i}>
                  <Link
                    href={region.href}
                    className={`
                      group flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                      ${region.primary
                        ? "bg-gold/15 border-gold/40 hover:bg-gold/25"
                        : "bg-ivory/5 border-ivory/12 hover:border-gold/30 hover:bg-ivory/10"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        className={`w-3.5 h-3.5 flex-shrink-0 ${region.primary ? "text-gold" : "text-ivory/40"}`}
                      />
                      <span
                        className={`font-body text-sm font-medium ${region.primary ? "text-gold" : "text-ivory/70"} group-hover:text-gold transition-colors duration-200`}
                      >
                        {region.name}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${region.primary ? "text-gold/60" : "text-ivory/20"} group-hover:text-gold/60 group-hover:translate-x-0.5 transition-all duration-200`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Decorative region overview link */}
            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href="/regionen"
                className="inline-flex items-center gap-2 font-body text-sm text-ivory/50 hover:text-gold transition-colors duration-200 group"
              >
                Alle Regionen ansehen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Decorative ring / background accent */}
            <div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-gold/10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -right-10 -top-10 w-36 h-36 rounded-full border border-gold/8 pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
