"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MapPin, Clock3, Star } from "lucide-react";
import { LEAD_URL, BLITZANGEBOT_URL } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const trustItems = [
  { icon: ShieldCheck, text: "Festpreisgarantie" },
  { icon: ShieldCheck, text: "Vollversichert" },
  { icon: MapPin,      text: "Kostenlose Besichtigung" },
  { icon: Clock3,      text: "Antwort noch heute" },
];

const stats = [
  { value: "15+",    label: "Jahre Erfahrung" },
  { value: "4.9★",   label: "Google-Bewertung" },
  { value: "5.000+", label: "Umzüge" },
  { value: "8",      label: "Regionen" },
];

export function HeroSection() {
  return (
    <section className="bg-ivory overflow-hidden">
      {/* ── Mobile layout (< lg): image card on top, text below ── */}
      <div className="lg:hidden pt-20">
        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="mx-5 mt-5 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(7,17,31,0.13)]"
          style={{ aspectRatio: "16/10" }}
        >
          <Image
            src="/images/hero-premium.png"
            alt="Schachservice Umzugswagen vor dem Mannheimer Wasserturm"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 95vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
          {/* Very light scrim for brand identity */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />

          {/* Rating badge overlay — bottom left of image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-body text-xs font-semibold text-navy">4.9 · 312 Bewertungen</span>
          </div>
        </motion.div>

        {/* Text content below image */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="px-5 pt-8 pb-10"
        >
          {/* Overline */}
          <motion.p variants={fadeUp} className="font-body text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
            Mannheim · Rhein-Neckar · Seit 2009
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-[2.1rem] font-semibold text-navy leading-[1.08] tracking-[-0.02em] mb-5"
          >
            Ihr Umzug.{" "}
            <br />
            Unsere Präzision.
            <br />
            <span className="text-gold italic">Mannheims Vertrauen.</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="font-body text-[0.95rem] leading-relaxed text-navy/60 mb-7">
            Über 15 Jahre Premium-Umzugsservice in Mannheim und der gesamten Metropolregion.
            Festpreisgarantie, geprüftes Fachpersonal, vollständiger Rundum-Service.
          </motion.p>

          {/* CTAs — full width stacked */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-7">
            <a
              href={BLITZANGEBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_click"
              className="flex items-center justify-center gap-2 h-13 w-full bg-gold text-navy font-body font-bold text-[0.93rem] rounded-xl hover:bg-gold-muted active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(205,163,73,0.30)]"
            >
              ⚡ Blitzangebot erhalten
            </a>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="flex items-center justify-center gap-2 h-13 w-full bg-white border border-navy/15 text-navy font-body font-semibold text-[0.93rem] rounded-xl hover:border-navy/30 active:scale-[0.98] transition-all duration-200"
            >
              Kostenloses Angebot
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+4917641726196"
              className="flex items-center justify-center gap-2 py-3 text-navy/45 font-body text-sm hover:text-navy/70 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +49 176 41726196
            </a>
          </motion.div>

          {/* Trust badges — 2 column grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-2">
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white rounded-xl border border-navy/8 px-3 py-3"
              >
                <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-xs font-medium text-navy/70 leading-tight">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Desktop layout (≥ lg): split panel ── */}
      <div className="hidden lg:grid lg:grid-cols-[54%_46%] lg:min-h-[92vh] lg:items-center">

        {/* Left: text panel */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="px-10 xl:px-16 pt-28 pb-20 flex flex-col justify-center"
        >
          {/* Overline */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <span className="h-px w-8 bg-gold" />
            <span className="font-body text-[10px] font-bold tracking-[0.32em] uppercase text-gold/80">
              Mannheim · Rhein-Neckar · Seit 2009
            </span>
          </motion.div>

          {/* Rating row */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-body text-sm font-medium text-navy/55">
              4.9 · 312 geprüfte Kundenbewertungen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-[clamp(3rem,4.2vw,5rem)] font-semibold text-navy leading-[1.0] tracking-[-0.03em] mb-8"
          >
            Ihr Umzug.
            <br />
            Unsere Präzision.
            <br />
            <em className="not-italic text-gold">Ihr Vertrauen.</em>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="font-body text-[1.06rem] leading-[1.8] text-navy/58 max-w-[480px] mb-10">
            Über 15 Jahre Premium-Umzugsservice in Mannheim und der gesamten
            Metropolregion. Festpreisgarantie, geprüftes Fachpersonal und ein
            vollständiger Rundum-Service — damit Ihr Neuanfang stressfrei gelingt.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={BLITZANGEBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_click"
              className="inline-flex items-center gap-2 h-13 px-8 bg-gold text-navy font-body font-bold text-[0.93rem] rounded-xl hover:bg-gold-muted active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(205,163,73,0.32)]"
            >
              ⚡ Blitzangebot erhalten
            </a>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="inline-flex items-center gap-2 h-13 px-7 bg-white border border-navy/15 text-navy font-body font-semibold text-[0.93rem] rounded-xl hover:border-navy/30 active:scale-[0.98] transition-all duration-200"
            >
              Kostenloses Angebot
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+4917641726196"
              className="inline-flex items-center gap-1.5 text-navy/40 font-body text-sm hover:text-navy/65 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +49 176 41726196
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4 max-w-[460px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading text-2xl font-semibold text-navy">{stat.value}</span>
                <span className="font-body text-[10px] font-medium text-navy/45 leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: image card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease }}
          className="relative h-full min-h-[92vh] flex items-center pr-8 xl:pr-12 py-10"
        >
          {/* Main image */}
          <div className="relative w-full h-[78vh] rounded-[2rem] overflow-hidden shadow-[0_24px_80px_rgba(7,17,31,0.16)]">
            <Image
              src="/images/hero-premium.png"
              alt="Schachservice Umzugswagen vor dem Mannheimer Wasserturm"
              fill
              priority
              unoptimized
              sizes="46vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />

            {/* Trust chip inside image */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/94 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="font-body text-xs font-semibold text-navy">Vollversichert</span>
            </div>
          </div>

          {/* Floating trust card */}
          <motion.div
            className="absolute -left-5 bottom-24 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_40px_rgba(7,17,31,0.12)] border border-navy/6 w-[210px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
          >
            <p className="font-body text-[9px] font-bold tracking-[0.22em] uppercase text-gold mb-2">
              Festpreis möglich
            </p>
            <p className="font-heading text-base font-semibold text-navy leading-tight">
              Ruhig geplant. Stark umgesetzt.
            </p>
            <div className="mt-3 pt-3 border-t border-navy/6 flex items-center justify-between">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                ))}
              </div>
              <span className="font-body text-[10px] font-semibold text-navy/50">4.9 / 5</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Trust strip — below hero on both layouts ── */}
      <div className="border-t border-navy/6 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 hidden sm:flex items-center justify-center gap-8 flex-wrap">
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gold" />
              <span className="font-body text-xs font-semibold text-navy/60">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
