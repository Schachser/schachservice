"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle, Star } from "lucide-react";
import { LEAD_URL } from "@/lib/constants";
import { useLang } from "@/context/LanguageProvider";

/* ─────────────────────────────────────────────────────────
   Motion presets
───────────────────────────────────────────────────────── */

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const spring = { type: "spring" as const, stiffness: 340, damping: 22 };

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.085, delayChildren: 0.16 } },
};

const rise = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease } },
};

const TRUST_ICONS = [ShieldCheck, CheckCircle, MapPin, Clock] as const;
const TRUST_KEYS  = ["trust.fixed", "trust.insured", "trust.inspect", "trust.reply"] as const;

/* ─────────────────────────────────────────────────────────
   SVG knight watermark — brand paths at mega-scale
   opacity 0.027 — texture only, never decoration
───────────────────────────────────────────────────────── */

function KnightWatermark() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      className="absolute pointer-events-none select-none"
      style={{
        width: "min(58vw, 560px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -46%)",
        opacity: 0.027,
        color: "#CDA349",
      }}
    >
      <path
        d="M8 27h16M11.5 27v-3.5M20.5 27v-3.5"
        stroke="currentColor" strokeWidth="0.52" strokeLinecap="round"
      />
      <path
        d="M10 23.5h12c0-3-1.5-5-3.5-5.5l1-2.5-2.5-1 .5-2c-1.5-3-4-4-6-3.5L9 11l1.5 1.5L9 14l2 2-1 1 2 .5v6h10"
        stroke="currentColor" strokeWidth="0.52" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="12.5" cy="11.5" r="0.82" fill="currentColor" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   HeroSection
───────────────────────────────────────────────────────── */

export function HeroSection() {
  const { scrollY } = useScroll();
  const imageParallaxY = useTransform(scrollY, [0, 700], [0, -52]);
  const { t } = useLang();

  const trust = TRUST_ICONS.map((icon, i) => ({ icon, label: t(TRUST_KEYS[i]) }));

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5F2EB" }}
      aria-label="SCHACHSERVICE – Ihr Premium-Umzugsunternehmen in Mannheim"
    >

      {/* Global ambient gold glow — top right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-15%", right: "-8%",
          width: "62%", height: "90%",
          background:
            "radial-gradient(ellipse at 68% 28%, rgba(205,163,73,0.10) 0%, transparent 62%)",
        }}
      />

      {/* Knight watermark — centered, behind all content */}
      <KnightWatermark />

      {/* ════════════════════════════════════════════════════════
          MOBILE
      ════════════════════════════════════════════════════════ */}
      <div className="lg:hidden">

        {/* 1 — Cinematic image card */}
        <motion.div
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden mx-3"
          style={{
            marginTop: "64px",
            aspectRatio: "16 / 9",
            borderRadius: "1.5rem",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.13), 0 6px 20px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          <Image
            src="/images/hero-premium.png"
            alt="Schachservice Umzugsteam in Mannheim"
            fill
            priority
            unoptimized
            sizes="calc(100vw - 24px)"
            className="object-cover object-center"
          />
          {/* Warm ivory fade — bottom only, no dark overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 45%, rgba(245,242,235,0.52) 100%)",
            }}
          />
          {/* Rating chip */}
          <div
            className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.93)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(232,226,214,0.6)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex gap-[1px]" aria-label="4.9 von 5 Sternen">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-[11.5px] font-semibold text-[#111827]">
              {t("hero.rating_m")}
            </span>
          </div>
        </motion.div>

        {/* 2–6 — Text + CTAs + Trust */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-4 pt-6 pb-32"
        >
          {/* Overline */}
          <motion.div variants={rise} className="flex items-center gap-2.5 mb-5">
            <span className="block h-px w-6 flex-shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-gold/82">
              {t("hero.overline_m")}
            </span>
          </motion.div>

          {/* 2 — Headline */}
          <motion.h1
            variants={rise}
            className="font-heading font-semibold text-[#0F172A] leading-[1.06] tracking-[-0.022em] mb-4"
            style={{ fontSize: "clamp(2.1rem, 8.5vw, 2.7rem)" }}
          >
            {t("hero.h1_a")}
            <br />
            {t("hero.h1_b")}{" "}
            <em className="not-italic text-gold">{t("hero.h1_gold")}</em>
          </motion.h1>

          {/* 3 — Short subtext */}
          <motion.p
            variants={rise}
            className="font-body text-[#0F172A]/56 mb-8 leading-[1.78]"
            style={{ fontSize: "1rem", maxWidth: "34ch" }}
          >
            {t("hero.sub_m")}
          </motion.p>

          {/* 4 — PRIMARY: Angebot */}
          <motion.div variants={rise} className="mb-9">
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="flex items-center justify-center gap-2 w-full h-[50px] rounded-xl font-body font-medium text-[#0F172A] transition-all duration-200 active:scale-[0.98]"
              style={{
                fontSize: "0.95rem",
                border: "1px solid #DDD4C7",
                background: "rgba(255,255,255,0.68)",
              }}
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            </a>
          </motion.div>

          {/* 6 — Trust badges 2 × 2 */}
          <motion.div variants={rise} className="grid grid-cols-2 gap-2.5">
            {trust.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl px-3.5 py-3"
                style={{
                  border: "1px solid #E8E2D6",
                  background: "rgba(255,255,255,0.60)",
                }}
              >
                <Icon className="w-[15px] h-[15px] flex-shrink-0 text-gold" aria-hidden="true" />
                <span className="font-body text-[12px] font-medium text-[#0F172A]/65 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
          DESKTOP
      ════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex min-h-screen items-center">

        {/* Left: text column — 52% */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-[52%] px-14 xl:px-20 pt-[7.5rem] pb-20"
        >
          {/* Overline */}
          <motion.div variants={rise} className="flex items-center gap-3 mb-8">
            <span className="block h-px w-7 flex-shrink-0 bg-gold" aria-hidden="true" />
            <span className="font-body text-[10px] font-bold tracking-[0.32em] uppercase text-gold/82">
              {t("hero.overline")}
            </span>
          </motion.div>

          {/* Stars */}
          <motion.div variants={rise} className="flex items-center gap-3 mb-9">
            <div className="flex gap-[2px]" aria-label="4.9 von 5 Sternen">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[14px] h-[14px] fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-[12.5px] font-medium text-[#0F172A]/48">
              {t("hero.stars")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={rise}
            className="font-heading font-semibold text-[#0F172A] leading-[1.04] tracking-[-0.028em] mb-7"
            style={{ fontSize: "clamp(2.8rem, 4.5vw, 5.2rem)" }}
          >
            {t("hero.h1_a")}
            <br />
            {t("hero.h1_b")}{" "}
            <em className="not-italic text-gold">{t("hero.h1_gold")}</em>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={rise}
            className="font-body leading-[1.88] text-[#0F172A]/54 mb-10"
            style={{
              fontSize: "clamp(0.935rem, 1.3vw, 1.05rem)",
              maxWidth: "40ch",
            }}
          >
            {t("hero.sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={rise} className="flex items-center gap-3 mb-11 flex-wrap">
            {/* Primary: Angebot */}
            <motion.a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              whileHover={{ scale: 1.022, y: -1.5 }}
              whileTap={{ scale: 0.975 }}
              transition={spring}
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-8 bg-gold text-navy font-body font-bold rounded-xl transition-colors duration-200 hover:bg-gold-muted"
              style={{
                fontSize: "0.915rem",
                boxShadow: "0 4px 24px rgba(205,163,73,0.30)",
              }}
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Trust strip — inline with separators */}
          <motion.div variants={rise} className="flex items-center flex-wrap gap-0" role="list">
            {trust.map(({ icon: Icon, label }, i) => (
              <span key={label} className="flex items-center" role="listitem">
                <span className="flex items-center gap-[7px] py-0.5">
                  <Icon className="w-[13px] h-[13px] flex-shrink-0 text-gold" aria-hidden="true" />
                  <span className="font-body text-[12px] font-medium text-[#0F172A]/50">
                    {label}
                  </span>
                </span>
                {i < trust.length - 1 && (
                  <span
                    className="mx-[14px] h-[11px] w-px bg-[#DDD4C7] flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: elevated image card — 48% */}
        <div className="relative w-[48%] flex items-center justify-center py-16 pr-10 xl:pr-16">

          {/* Localised ambient glow directly behind card */}
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              inset: 0,
              background:
                "radial-gradient(ellipse at 52% 50%, rgba(205,163,73,0.13) 0%, transparent 58%)",
            }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, delay: 0.08, ease }}
            className="relative w-full"
            style={{
              position: "relative",
              borderRadius: "2rem",
              aspectRatio: "4 / 3",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.12), 0 8px 28px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            {/* Parallax image wrapper — extends beyond card so movement doesn't expose edges */}
            <motion.div
              style={{
                position: "absolute",
                top: "-10%",
                left: 0,
                right: 0,
                bottom: "-10%",
                y: imageParallaxY,
              }}
            >
              <Image
                src="/images/hero-premium.png"
                alt="Schachservice Premium Umzug Mannheim"
                fill
                priority
                unoptimized
                sizes="48vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Subtle warm vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.17) 100%)",
              }}
            />

            {/* ── Floating trust cards ────────────────────── */}

            {/* Top-left: experience chip */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92, duration: 0.48, ease }}
              className="absolute top-5 left-5 flex items-center gap-2 rounded-2xl px-3.5 py-2"
              style={{
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(232,226,214,0.55)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              }}
            >
              <span className="font-body text-[12px] font-semibold text-[#0F172A]">
                {t("card.experience")}
              </span>
            </motion.div>

            {/* Top-right: certified badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.48, ease }}
              className="absolute top-5 right-5 flex items-center gap-2 rounded-2xl px-3.5 py-2"
              style={{
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(232,226,214,0.55)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-body text-[12px] font-semibold text-[#0F172A]">
                {t("card.certified")}
              </span>
            </motion.div>

            {/* Bottom-left: testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.18, duration: 0.58, ease }}
              className="absolute bottom-5 left-5 w-[212px] rounded-2xl p-4"
              style={{
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(232,226,214,0.50)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              }}
            >
              <div className="flex gap-[2px] mb-2.5" aria-label="5 Sterne Bewertung">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p
                className="font-heading font-normal italic leading-snug text-[#0F172A] mb-3"
                style={{ fontSize: "0.82rem" }}
              >
                &bdquo;Kein Stress, kein Kratzer —
                <br />
                einfach perfekt organisiert.&ldquo;
              </p>
              <div
                className="flex items-center gap-2.5 pt-2.5"
                style={{ borderTop: "1px solid rgba(232,226,214,0.60)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F5F2EB", border: "1px solid #E8E2D6" }}
                >
                  <span className="font-heading text-[9px] font-semibold text-gold">MK</span>
                </div>
                <div>
                  <p className="font-body text-[11px] font-semibold text-[#0F172A] leading-none">
                    M. König
                  </p>
                  <p className="font-body text-[10px] text-[#0F172A]/40 mt-[2px]">
                    Google · Mannheim
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom-right: stats chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.32, duration: 0.52, ease }}
              className="absolute bottom-5 right-5 rounded-2xl px-5 py-3.5 text-right"
              style={{
                background: "rgba(15,23,42,0.82)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="font-heading font-semibold text-white leading-none"
                style={{ fontSize: "1.85rem" }}
              >
                5.000<span style={{ color: "#CDA349" }}>+</span>
              </p>
              <p
                className="font-body font-medium uppercase tracking-[0.16em] mt-1"
                style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)" }}
              >
                {t("card.moves")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
