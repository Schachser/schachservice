"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPin, Star, CheckCircle } from "lucide-react";
import { LEAD_URL } from "@/lib/constants";

/* ─── Motion ─────────────────────────────────────────────────────── */

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.18 } },
};

const rise = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease } },
};

/* ─── Trust signals ──────────────────────────────────────────────── */

const trust = [
  { icon: ShieldCheck, label: "Festpreisgarantie" },
  { icon: CheckCircle, label: "Vollversichert" },
  { icon: MapPin,      label: "Kostenlose Besichtigung" },
  { icon: Clock,       label: "Antwort in 24 Stunden" },
];

/* ─── Component ──────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row lg:min-h-screen overflow-hidden bg-[#F6F1E8]"
      aria-label="Willkommen bei SCHACHSERVICE"
    >

      {/* ════════════════════════════════════════════════════════════
          MOBILE: Rounded image card at the very top
      ════════════════════════════════════════════════════════════ */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="lg:hidden relative mt-[72px] mx-4 rounded-[20px] overflow-hidden shadow-[0_12px_48px_rgba(7,17,31,0.14)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src="/images/hero-premium.png"
          alt="Schachservice Umzugsteam vor dem Mannheimer Wasserturm"
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 92vw, 0px"
          className="object-cover object-center"
        />

        {/* Warm bottom fade to ivory — no dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, rgba(246,241,232,0.55) 100%)",
          }}
        />

        {/* Floating rating badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-sm px-3 py-2 shadow-sm">
          <div className="flex gap-px" aria-label="5 von 5 Sternen">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#CDA349] text-[#CDA349]" aria-hidden="true" />
            ))}
          </div>
          <span className="font-body text-[11px] font-semibold text-[#07111F]">
            4.9 · 312 Bewertungen
          </span>
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════════════════════
          TEXT PANEL  (full width mobile / left 53% desktop)
      ════════════════════════════════════════════════════════════ */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className={[
          /* mobile */
          "relative z-10 flex flex-col justify-center",
          "px-5 pt-8 pb-28",
          /* desktop */
          "lg:w-[53%] lg:min-h-screen lg:px-14 xl:px-20 lg:pt-32 lg:pb-24",
          /* ivory background */
          "bg-[#F6F1E8]",
        ].join(" ")}
      >
        {/* Overline */}
        <motion.div variants={rise} className="flex items-center gap-3 mb-8">
          <span className="h-px w-7 bg-[#CDA349]" aria-hidden="true" />
          <span className="font-body text-[10px] font-bold tracking-[0.32em] uppercase text-[#CDA349]/90">
            Mannheim · Metropolregion Rhein-Neckar · Seit 2009
          </span>
        </motion.div>

        {/* Rating — desktop only */}
        <motion.div
          variants={rise}
          className="hidden lg:flex items-center gap-3 mb-8"
        >
          <div className="flex gap-0.5" aria-label="4.9 von 5 Sternen">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#CDA349] text-[#CDA349]" aria-hidden="true" />
            ))}
          </div>
          <span className="font-body text-sm font-medium text-[#07111F]/55">
            4.9 · 312 geprüfte Google-Bewertungen
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={rise}
          className={[
            "font-heading font-semibold text-[#07111F] leading-[1.05] tracking-[-0.025em]",
            "text-[2.2rem] mb-5",
            "lg:text-[clamp(3.2rem,4.4vw,5.2rem)] lg:mb-7",
          ].join(" ")}
        >
          Ihr Umzug.
          <br />
          In besten{" "}
          <em className="not-italic text-[#CDA349]">Händen.</em>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={rise}
          className={[
            "font-body leading-[1.8] text-[#07111F]/62",
            "text-[0.95rem] mb-8 max-w-[38ch]",
            "lg:text-[1.06rem] lg:mb-10",
          ].join(" ")}
        >
          Festpreisgarantie, geprüftes Fachpersonal und persönliche Betreuung
          von Anfang bis Ende — der Umzugspartner, dem Mannheim seit
          über 15 Jahren vertraut.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          variants={rise}
          className="flex flex-col gap-3 mb-10 sm:flex-row sm:items-center lg:mb-12"
        >
          {/* Primary */}
          <motion.a
            href={LEAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="quote_click"
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className={[
              "inline-flex items-center justify-center gap-2.5",
              "h-14 w-full sm:w-auto px-8",
              "bg-[#CDA349] text-[#07111F]",
              "font-body font-bold text-[0.93rem] tracking-wide",
              "rounded-xl",
              "shadow-[0_4px_24px_rgba(205,163,73,0.38)]",
              "hover:bg-[#B8903A]",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CDA349] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1E8]",
            ].join(" ")}
          >
            Kostenloses Angebot anfragen
            <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          </motion.a>

          {/* Secondary */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <Link
              href="/leistungen"
              className={[
                "inline-flex items-center justify-center gap-2",
                "h-14 w-full sm:w-auto px-7",
                "border border-[#07111F]/18 text-[#07111F]",
                "font-body font-medium text-[0.93rem]",
                "rounded-xl bg-white/60",
                "hover:border-[#07111F]/35 hover:bg-white/90",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07111F]/30",
              ].join(" ")}
            >
              Leistungen ansehen
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust strip */}
        <motion.div variants={rise}>
          {/* Mobile: 2×2 grid */}
          <div className="grid grid-cols-2 gap-2.5 lg:hidden">
            {trust.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-[#07111F]/8 bg-white/70 px-3.5 py-3"
              >
                <Icon className="w-4 h-4 flex-shrink-0 text-[#CDA349]" aria-hidden="true" />
                <span className="font-body text-[11.5px] font-medium text-[#07111F]/72 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop: inline separator row */}
          <div className="hidden lg:flex items-center gap-0 flex-wrap">
            {trust.map(({ icon: Icon, label }, i) => (
              <span key={label} className="flex items-center">
                <span className="flex items-center gap-2 py-1">
                  <Icon className="w-3.5 h-3.5 text-[#CDA349]" aria-hidden="true" />
                  <span className="font-body text-[12.5px] font-medium text-[#07111F]/60">
                    {label}
                  </span>
                </span>
                {i < trust.length - 1 && (
                  <span
                    className="mx-4 h-3 w-px bg-[#07111F]/15 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ════════════════════════════════════════════════════════════
          DESKTOP: Full-height image column (right side)
      ════════════════════════════════════════════════════════════ */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hidden lg:block relative flex-1"
      >
        <Image
          src="/images/hero-premium.png"
          alt="Schachservice Umzugsteam in Mannheim"
          fill
          priority
          unoptimized
          sizes="47vw"
          className="object-cover object-center"
        />

        {/* Left-edge feather — blends image into the ivory panel */}
        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F6F1E8 0%, rgba(246,241,232,0.3) 40%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle bottom vignette for depth */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(7,17,31,0.28) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Badge — top right */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease }}
          className="absolute top-8 right-8 flex items-center gap-2 rounded-xl bg-white/92 backdrop-blur-sm px-4 py-2.5 shadow-sm border border-white/60"
        >
          <ShieldCheck className="w-4 h-4 text-[#CDA349]" aria-hidden="true" />
          <span className="font-body text-[12px] font-semibold text-[#07111F]">
            Geprüfter Fachbetrieb
          </span>
        </motion.div>

        {/* Floating testimonial card — bleeds left into text panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.15, duration: 0.7, ease }}
          className="absolute bottom-14 -left-5 w-[230px] rounded-2xl bg-white border border-[#07111F]/6 p-5 shadow-[0_12px_48px_rgba(7,17,31,0.14)]"
        >
          {/* Stars */}
          <div className="flex gap-0.5 mb-3" aria-label="5 Sterne Bewertung">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#CDA349] text-[#CDA349]" aria-hidden="true" />
            ))}
          </div>

          <p className="font-heading text-[13.5px] font-normal italic leading-snug text-[#07111F] mb-4">
            &bdquo;Kein Stress, kein Kratzer, alles perfekt organisiert.&ldquo;
          </p>

          <div className="flex items-center gap-2.5 pt-3 border-t border-[#07111F]/6">
            <div className="w-7 h-7 rounded-full bg-[#F6F1E8] flex items-center justify-center flex-shrink-0">
              <span className="font-heading text-[10px] font-semibold text-[#CDA349]">MK</span>
            </div>
            <div>
              <p className="font-body text-[11px] font-semibold text-[#07111F] leading-none">
                M. König
              </p>
              <p className="font-body text-[10px] text-[#07111F]/45 mt-0.5">
                Google · Mannheim
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stat card — lower right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease }}
          className="absolute bottom-14 right-8 rounded-2xl bg-[#07111F]/82 backdrop-blur-sm border border-white/10 px-5 py-4 text-right"
        >
          <p className="font-heading text-[2rem] font-semibold text-white leading-none">
            5.000<span className="text-[#CDA349]">+</span>
          </p>
          <p className="font-body text-[10.5px] font-medium text-white/55 mt-1 tracking-wide uppercase">
            Erfolgreiche Umzüge
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
}
