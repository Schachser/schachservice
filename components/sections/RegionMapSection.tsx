"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homepageCities } from "@/lib/cities";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/variants";
import { LEAD_URL } from "@/lib/constants";

export function RegionMapSection() {
  return (
    <section className="bg-[#FAF6EF] py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-5">Serviceregionen</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight"
            >
              Metropolregion Rhein-Neckar —{" "}
              <em className="not-italic text-gold">unser Zuhause</em>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/regionen"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted hover:text-gold transition-colors duration-200 group"
            >
              Alle Regionen
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-navy/12 shadow-elegant"
            style={{ minHeight: 480 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d162000!2d8.5!3d49.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCHACHSERVICE Servicegebiet Metropolregion Rhein-Neckar"
            />
            {/* Premium overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none">
              <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-1">
                Servicegebiet
              </p>
              <p className="font-heading text-sm text-white">
                Metropolregion Rhein-Neckar & Umgebung
              </p>
            </div>
          </motion.div>

          {/* City cards */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {homepageCities.map((city) => (
              <motion.div key={city.id} variants={scaleIn}>
                <Link
                  href={city.href}
                  className={`
                    group flex flex-col gap-3 p-5 rounded-xl border transition-all duration-300
                    ${city.id === "mannheim"
                      ? "bg-navy border-navy hover:bg-slate"
                      : "bg-white border-navy/10 hover:border-gold/40 hover:shadow-card"}
                  `}
                >
                  <div className="flex items-start justify-between">
                    <MapPin
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${city.id === "mannheim" ? "text-gold" : "text-gold/60"}`}
                    />
                    <ArrowRight
                      className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 ${city.id === "mannheim" ? "text-gold/70" : "text-navy/40"}`}
                    />
                  </div>
                  <div>
                    <h3 className={`font-heading text-base font-semibold leading-tight mb-0.5 ${city.id === "mannheim" ? "text-gold" : "text-navy group-hover:text-gold transition-colors duration-200"}`}>
                      {city.name}
                    </h3>
                    <p className={`font-body text-xs leading-snug ${city.id === "mannheim" ? "text-ivory/55" : "text-muted"}`}>
                      {city.tagline}
                    </p>
                  </div>
                  {city.area && (
                    <span className={`font-body text-[10px] font-medium tracking-wide ${city.id === "mannheim" ? "text-ivory/30" : "text-navy/25"}`}>
                      {city.area}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl bg-navy/5 border border-navy/10 flex flex-col sm:flex-row items-center gap-4"
        >
          <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
          <p className="font-body text-sm text-navy text-center sm:text-left">
            <strong>Nicht dabei?</strong> Wir fahren auch darüber hinaus – kontaktieren Sie uns für eine individuelle Anfrage.
          </p>
          <a
            href={LEAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="quote_click"
            className="sm:ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold text-gold text-sm font-body font-medium hover:bg-gold hover:text-navy transition-all duration-200 whitespace-nowrap"
          >
            Region anfragen <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
