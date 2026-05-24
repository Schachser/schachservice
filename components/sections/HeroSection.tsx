"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle, Star } from "lucide-react";
import { LEAD_URL } from "@/lib/constants";

/* ─────────────────────────────────────────────────────────────────────
   Motion presets
───────────────────────────────────────────────────────────────────── */

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.22 } },
};

const rise = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease } },
};

const fadeOnly = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.88, ease } },
};

/* ─────────────────────────────────────────────────────────────────────
   Trust signals
───────────────────────────────────────────────────────────────────── */

const trust = [
  { icon: ShieldCheck,  label: "Festpreisgarantie"      },
  { icon: CheckCircle,  label: "Vollversichert"          },
  { icon: MapPin,       label: "Kostenlose Besichtigung" },
  { icon: Clock,        label: "Antwort in 24 Stunden"   },
] as const;

/* ─────────────────────────────────────────────────────────────────────
   Chess knight watermark — Unicode ♞ in brand serif
   Renders as a large, ghosted brand identity element.
   Low opacity: functions as texture, not decoration.
───────────────────────────────────────────────────────────────────── */

function ChessKnightWatermark({
  size,
  className,
  style,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={className}
      aria-hidden="true"
      role="presentation"
      style={{
        fontFamily:
          '"Noto Sans Symbols", "Segoe UI Symbol", "Apple Color Emoji", "DejaVu Sans", serif',
        fontSize: size,
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
    >
      ♞
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   HeroSection
───────────────────────────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row lg:min-h-screen overflow-hidden bg-ivory"
      aria-label="SCHACHSERVICE – Ihr Premium-Umzugsunternehmen in Mannheim"
    >

      {/* ══════════════════════════════════════════════════════════════
          MOBILE — rounded image card pinned below navbar
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        variants={fadeOnly}
        initial="hidden"
        animate="visible"
        className="lg:hidden relative mt-[68px] mx-4 overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          borderRadius: "1.375rem",
          boxShadow: "var(--shadow-float)",
        }}
      >
        <Image
          src="/images/hero-premium.png"
          alt="Schachservice Umzugsteam in Mannheim"
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 92vw, 0px"
          className="object-cover object-center"
        />

        {/* Warm ivory fade at bottom — no dark panel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 48%, rgba(246,241,232,0.62) 100%)",
          }}
        />

        {/* Floating rating chip */}
        <div
          className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl px-3 py-2"
          style={{
            background: "rgba(255,253,249,0.93)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(221,212,199,0.6)",
            boxShadow: "0 2px 12px rgba(7,17,31,0.09)",
          }}
        >
          <div className="flex gap-[1px]" aria-label="4.9 von 5 Sternen">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
          </div>
          <span className="font-body text-[11px] font-semibold text-navy">
            4.9 · 312 Bewertungen
          </span>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════
          TEXT PANEL
          Full-width on mobile / left 54 % on desktop
      ══════════════════════════════════════════════════════════════ */}
      <div
        className={[
          "relative flex flex-col justify-center bg-ivory",
          "px-5 pt-8 pb-28",                               /* mobile */
          "lg:w-[54%] lg:min-h-screen",                    /* desktop width */
          "lg:px-14 xl:px-20 lg:pt-[8.5rem] lg:pb-24",    /* desktop spacing */
        ].join(" ")}
      >

        {/* ── Chess knight watermark ─────────────────────────────── */}
        {/* Desktop: large, bottom-right of panel, overlapping the seam */}
        <ChessKnightWatermark
          size={480}
          className="absolute hidden lg:block"
          style={{
            right: "-6%",
            bottom: "2%",
            color: "#CDA349",
            opacity: 0.038,
          }}
        />

        {/* Mobile: smaller, sits in the background of the text area */}
        <ChessKnightWatermark
          size={200}
          className="absolute lg:hidden"
          style={{
            right: "-8%",
            bottom: "12%",
            color: "#CDA349",
            opacity: 0.04,
          }}
        />

        {/* ── Content ───────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >

          {/* Overline */}
          <motion.div
            variants={rise}
            className="flex items-center gap-3 mb-7 lg:mb-9"
          >
            <span className="block h-px w-7 flex-shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-body text-[10px] font-bold tracking-[0.32em] uppercase text-gold/85">
              Mannheim · Metropolregion Rhein-Neckar · Seit 2009
            </span>
          </motion.div>

          {/* Google rating row — desktop only */}
          <motion.div
            variants={rise}
            className="hidden lg:flex items-center gap-3 mb-9"
          >
            <div className="flex gap-[2px]" aria-label="4.9 von 5 Sternen">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[15px] h-[15px] fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-[13px] font-medium text-navy/52">
              4.9 · 312 geprüfte Google-Bewertungen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={rise}
            className="font-heading font-semibold text-navy leading-[1.04] tracking-[-0.026em] mb-6 lg:mb-8"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 5rem)" }}
          >
            Ihr Umzug.
            <br />
            In besten{" "}
            <em className="not-italic text-gold">Händen.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={rise}
            className="font-body leading-[1.84] text-navy/60 mb-9 lg:mb-11"
            style={{
              fontSize: "clamp(0.925rem, 1.35vw, 1.06rem)",
              maxWidth: "39ch",
            }}
          >
            Festpreisgarantie, geprüftes Fachpersonal und persönliche
            Betreuung von der ersten Anfrage bis zum letzten Karton —
            der Umzugspartner, dem Mannheim seit über 15&nbsp;Jahren vertraut.
          </motion.p>

          {/* CTA group */}
          <motion.div
            variants={rise}
            className="flex flex-col gap-3 mb-10 sm:flex-row sm:items-center lg:mb-12"
          >
            {/* Primary — gold */}
            <motion.a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              whileHover={{ scale: 1.022, y: -1.5 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
              className={[
                "inline-flex items-center justify-center gap-2.5",
                "w-full sm:w-auto h-[54px] px-8",
                "bg-gold hover:bg-gold-muted",
                "text-navy font-body font-bold tracking-wide",
                "rounded-xl shadow-gold",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
              ].join(" ")}
              style={{ fontSize: "0.915rem" }}
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            </motion.a>

            {/* Secondary — ghost */}
            <motion.div
              whileHover={{ scale: 1.018 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: "spring", stiffness: 340, damping: 22 }}
            >
              <Link
                href="/leistungen"
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "w-full sm:w-auto h-[54px] px-7",
                  "border border-border text-navy",
                  "font-body font-medium bg-ivory-card",
                  "rounded-xl",
                  "hover:border-navy/28 hover:bg-ivory",
                  "transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/20",
                ].join(" ")}
                style={{ fontSize: "0.915rem" }}
              >
                Leistungen ansehen
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={rise}>

            {/* Mobile: 2 × 2 card grid */}
            <div className="grid grid-cols-2 gap-2.5 lg:hidden">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-ivory-card px-3.5 py-3"
                >
                  <Icon className="w-4 h-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-body text-[11.5px] font-medium text-navy/68 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: inline separator row */}
            <div className="hidden lg:flex items-center flex-wrap gap-0" role="list">
              {trust.map(({ icon: Icon, label }, i) => (
                <span key={label} className="flex items-center" role="listitem">
                  <span className="flex items-center gap-[7px] py-0.5">
                    <Icon className="w-[13px] h-[13px] flex-shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-body text-[12.5px] font-medium text-navy/55">
                      {label}
                    </span>
                  </span>
                  {i < trust.length - 1 && (
                    <span
                      className="mx-[14px] h-[11px] w-px bg-border flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          IMAGE COLUMN — desktop only, full viewport height
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        variants={fadeOnly}
        initial="hidden"
        animate="visible"
        className="hidden lg:block relative flex-1"
      >
        <Image
          src="/images/hero-premium.png"
          alt="Schachservice Premium Umzug Mannheim"
          fill
          priority
          unoptimized
          sizes="46vw"
          className="object-cover object-center"
        />

        {/* Left-edge feather — ivory bleeds into image, no hard seam */}
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F6F1E8 0%, rgba(246,241,232,0.22) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom vignette — adds cinematic depth to photo */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(7,17,31,0.32) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Geprüfter Fachbetrieb badge — top right ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.55, ease }}
          className="absolute top-8 right-8 flex items-center gap-2 rounded-xl px-4 py-2.5"
          style={{
            background: "rgba(255,253,249,0.93)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(221,212,199,0.55)",
            boxShadow: "0 2px 16px rgba(7,17,31,0.09)",
          }}
        >
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
          <span className="font-body text-[12px] font-semibold text-navy">
            Geprüfter Fachbetrieb
          </span>
        </motion.div>

        {/* ── Testimonial card — bottom left, bleeds into text panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.62, ease }}
          className="absolute bottom-14 -left-4 w-[218px] rounded-2xl p-5"
          style={{
            background: "#FFFDF9",
            border: "1px solid rgba(221,212,199,0.7)",
            boxShadow: "0 12px 48px rgba(7,17,31,0.14), 0 2px 8px rgba(7,17,31,0.06)",
          }}
        >
          {/* Stars */}
          <div className="flex gap-[2px] mb-3" aria-label="5 Sterne Bewertung">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>

          {/* Quote */}
          <p
            className="font-heading font-normal italic leading-snug text-navy mb-4"
            style={{ fontSize: "0.84rem" }}
          >
            &bdquo;Kein Stress, kein Kratzer —
            <br />
            einfach perfekt organisiert.&ldquo;
          </p>

          {/* Author row */}
          <div
            className="flex items-center gap-2.5 pt-3"
            style={{ borderTop: "1px solid rgba(221,212,199,0.6)" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#F6F1E8", border: "1px solid #DDD4C7" }}
            >
              <span className="font-heading text-[10px] font-semibold text-gold">MK</span>
            </div>
            <div>
              <p className="font-body text-[11px] font-semibold text-navy leading-none">
                M. König
              </p>
              <p className="font-body text-[10px] text-navy/42 mt-[3px]">
                Google · Mannheim
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Stats chip — bottom right ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.28, duration: 0.55, ease }}
          className="absolute bottom-14 right-8 rounded-2xl px-6 py-4 text-right"
          style={{
            background: "rgba(7,17,31,0.78)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <p className="font-heading font-semibold text-white leading-none" style={{ fontSize: "2rem" }}>
            5.000<span className="text-gold">+</span>
          </p>
          <p
            className="font-body font-medium uppercase tracking-widest mt-1"
            style={{ fontSize: "10px", color: "rgba(255,255,255,0.50)", letterSpacing: "0.16em" }}
          >
            Erfolgreiche Umzüge
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
}
