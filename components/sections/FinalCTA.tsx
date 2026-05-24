"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Star, Lock } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/variants";
import { LEAD_URL, WHATSAPP_URL } from "@/lib/constants";

const trustPills = [
  { icon: Shield, text: "Festpreisgarantie" },
  { icon: Star,   text: "4.9 / 5 Google" },
  { icon: Lock,   text: "Sichere Anfrage" },
  { icon: Shield, text: "Vollversichert" },
];

export function FinalCTA() {
  return (
    <section className="relative bg-slate py-28 lg:py-40 overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(205,163,73,0.08) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(142,197,255,0.06) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(205,163,73,0.45), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8" aria-hidden="true">
            <span className="block h-px w-8 bg-gold" />
            <span className="text-xs font-body font-medium tracking-[0.22em] uppercase text-gold">
              Jetzt starten
            </span>
            <span className="block h-px w-8 bg-gold" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="final-cta-heading"
            variants={fadeUp}
            className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold text-ivory leading-tight mb-6"
          >
            Bereit für Ihren{" "}
            <em className="not-italic text-gold">sorglosen Umzug?</em>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg leading-relaxed text-ivory/65 max-w-xl mx-auto mb-12"
          >
            Fordern Sie jetzt Ihr kostenloses, unverbindliches Angebot an.
            Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              aria-label="Kostenloses Angebot anfordern"
              className="inline-flex items-center gap-2.5 h-14 px-10 bg-gold text-navy text-base font-body font-semibold tracking-wide rounded-xl hover:bg-gold-muted active:scale-[0.98] transition-all duration-300 shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-slate"
            >
              Kostenloses Angebot
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              aria-label="Jetzt anrufen: +49 176 41726196"
              className="inline-flex items-center gap-2.5 h-14 px-8 border border-ivory/20 text-ivory text-base font-body font-medium tracking-wide rounded-xl hover:border-gold/50 hover:text-gold active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +49 176 41726196
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div variants={fadeUp} className="mb-10">
            <a
              href={WHATSAPP_URL}
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#4ade80] hover:text-[#86efac] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] rounded"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Per WhatsApp schreiben
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
            aria-label="Vertrauensmerkmale"
          >
            {trustPills.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-medium text-ivory/60 border border-ivory/10 rounded-full"
              >
                <Icon className="w-3 h-3 text-gold" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex items-center justify-center gap-5 opacity-20"
            aria-hidden="true"
          >
            <div className="h-px w-24 bg-ivory" />
            <span className="text-3xl text-ivory">♟</span>
            <div className="h-px w-24 bg-ivory" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
