"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MapPin, Clock3 } from "lucide-react";
import { LEAD_URL } from "@/lib/constants";
import { BlitzangebotButton } from "@/components/ui/BlitzangebotButton";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.22 },
  },
};

const trustItems = [
  { icon: ShieldCheck, text: "Festpreisgarantie" },
  { icon: ShieldCheck, text: "Vollversichert" },
  { icon: MapPin,      text: "Kostenlose Besichtigung" },
  { icon: Clock3,      text: "Antwort noch heute" },
];

const stats = [
  { value: "15+",    label: "Jahre" },
  { value: "4.9★",   label: "Bewertung" },
  { value: "5.000+", label: "Umzüge" },
  { value: "8",      label: "Regionen" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* ── Background — cinematic slow zoom ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src="/images/hero-premium.png"
          alt="Schachservice Umzugswagen vor dem Mannheimer Wasserturm"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover brightness-[0.76] contrast-[1.12] saturate-[1.08]"
          style={{ objectPosition: "center center" }}
        />

        {/* Clean cinematic directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/88 via-[#07111F]/52 to-[#07111F]/12" />

        {/* Subtle warm gold glow — right side near landmark */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 78% 38%, rgba(205,163,73,0.16), transparent 34%)" }}
        />
      </motion.div>

      {/* ── Single soft gold ambient orb — upper right ── */}
      <motion.div
        className="pointer-events-none absolute -right-[6%] -top-[10%] h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(205,163,73,0.08), transparent 62%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-36 lg:px-8 lg:pt-40">

        {/* ── Dark luxury glass panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
          className="w-full max-w-[600px] rounded-[28px] border border-white/[0.08] bg-[rgba(10,18,32,0.56)] p-8 shadow-[0_24px_96px_rgba(0,0,0,0.40)] backdrop-blur-[16px] lg:p-11"
        >
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Overline */}
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#CDA349]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#CDA349]/75">
                Mannheim · Rhein-Neckar · Seit 2009
              </span>
            </motion.div>

            {/* Rating chip */}
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm"
            >
              <span className="text-[#CDA349]">★★★★★</span>
              <span>4.9 · geprüfte Kundenbewertungen</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mb-7 font-serif text-[clamp(2.6rem,4.8vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.044em] text-white"
            >
              Ihr Umzug.
              <br />
              <span className="text-[#8EC5FF]">Unsere Präzision.</span>
              <br />
              <span className="italic text-[#CDA349]">Mannheims Vertrauen.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mb-9 text-[1.02rem] leading-[1.85] text-white/60"
            >
              Über 15 Jahre Premium-Umzugsservice in Mannheim und der gesamten
              Metropolregion. Festpreisgarantie, geprüftes Fachpersonal und ein
              vollständiger Rundum-Service – damit Ihr Neuanfang stressfrei gelingt.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {/* Primary — Blitzangebot */}
              <BlitzangebotButton size="lg" />

              {/* Secondary — standard offer */}
              <a
                href={LEAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="quote_click"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/6 px-7 text-[0.88rem] font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/34 hover:bg-white/10 hover:text-white"
              >
                Kostenloses Angebot
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              {/* Tertiary — phone */}
              <a
                href="tel:+4917641726196"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[0.82rem] font-medium text-white/40 transition-all duration-300 hover:text-white/70"
              >
                <Phone className="h-3.5 w-3.5" />
                +49 176 41726196
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2">
              {trustItems.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/65 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-[#CDA349]" />
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/8 bg-white/4 px-2 py-4 text-center backdrop-blur-sm"
                >
                  <span className="block font-serif text-xl font-semibold text-white">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </motion.div>

        {/* ── Floating trust card ── */}
        <motion.div
          className="pointer-events-none absolute bottom-24 right-10 hidden w-[300px] rounded-[24px] border border-white/10 bg-[rgba(7,17,31,0.55)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-[10px] lg:block"
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.9, delay: 1.2 },
            scale: { duration: 0.9, delay: 1.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.35 },
          }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#CDA349]/75">
            Premium Umzug Mannheim
          </p>
          <p className="mt-3 font-serif text-2xl leading-tight text-white">
            Ruhig geplant. Stark umgesetzt.
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-xs font-medium text-white/45">Festpreis möglich</span>
            <span className="rounded-full border border-[#CDA349]/35 bg-[#CDA349]/10 px-3 py-1 text-xs font-semibold text-[#CDA349]">
              geprüft
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
