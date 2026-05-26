"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/cn";
import { LEAD_URL, BLITZANGEBOT_URL } from "@/lib/constants";
import { useLang } from "@/context/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = [
  {
    label: "Leistungen",
    labelKey: "nav.services",
    href: "/leistungen",
    columns: [
      {
        heading: "Umzug & Transport",
        headingKey: "nav.col.moving",
        items: [
          { label: "Privatumzug",      href: "/leistungen/lokalumzug" },
          { label: "Fernumzug",        href: "/leistungen/fernumzug" },
          { label: "Firmenumzug",      href: "/leistungen/firmenumzug" },
          { label: "Seniorenumzug",    href: "/leistungen/seniorenumzug" },
          { label: "Klaviertransport", href: "/leistungen/klaviertransport" },
          { label: "Auslandsumzug",    href: "/leistungen/auslandsumzug" },
        ],
      },
      {
        heading: "Weitere Services",
        headingKey: "nav.col.extra",
        items: [
          { label: "Möbelmontage",    href: "/leistungen/moebelmontage" },
          { label: "Einpackservice",  href: "/leistungen/einpackservice" },
          { label: "Entrümpelung",    href: "/leistungen/wohnungsentruempelung" },
          { label: "Endreinigung",    href: "/leistungen/endreinigung" },
          { label: "Einlagerung",     href: "/leistungen/kurzzeitlagerung" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      },
      {
        heading: "Pakete",
        headingKey: "nav.col.packages",
        items: [
          { label: "Basic Paket",    href: "/preise#basic" },
          { label: "Komfort Paket",  href: "/preise#komfort" },
          { label: "Premium Paket",  href: "/preise#premium" },
          { label: "Senioren Paket", href: "/preise#senioren" },
          { label: "Business Paket", href: "/preise#business" },
        ],
      },
    ],
  },
  {
    label: "Regionen",
    labelKey: "nav.regions",
    href: "/regionen",
    columns: [
      {
        heading: "Baden-Württemberg",
        headingKey: "nav.col.bw",
        items: [
          { label: "Mannheim",     href: "/regionen/mannheim" },
          { label: "Heidelberg",   href: "/regionen/heidelberg" },
          { label: "Karlsruhe",    href: "/regionen/karlsruhe" },
          { label: "Schwetzingen", href: "/regionen/schwetzingen" },
          { label: "Weinheim",     href: "/regionen/weinheim" },
        ],
      },
      {
        heading: "Rheinland-Pfalz",
        headingKey: "nav.col.rlp",
        items: [
          { label: "Ludwigshafen", href: "/regionen/ludwigshafen" },
          { label: "Frankenthal",  href: "/regionen/frankenthal" },
          { label: "Worms",        href: "/regionen/worms" },
          { label: "Speyer",       href: "/regionen/speyer" },
        ],
      },
      {
        heading: "Gesamtregion",
        headingKey: "nav.col.metro",
        items: [
          { label: "Metropolregion Rhein-Neckar", href: "/regionen/rhein-neckar" },
          { label: "Alle Regionen",               href: "/regionen" },
        ],
      },
    ],
  },
];

const simpleItems = [
  { label: "Preise",   labelKey: "nav.prices",  href: "/preise" },
  { label: "Über uns", labelKey: "nav.about",   href: "/ueber-uns" },
  { label: "Kontakt",  labelKey: "nav.contact", href: "/kontakt" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const dropdownVariants = {
  hidden:  { opacity: 0, y: -6, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.2, ease } },
  exit:    { opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.14, ease: "easeIn" as const } },
};

const mobileMenuVariants = {
  hidden:  { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.32, ease } },
  exit:    { opacity: 0, x: "100%", transition: { duration: 0.22, ease: "easeIn" as const } },
};

export function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown  = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 130);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#FBFAF7]/98 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_2px_16px_rgba(0,0,0,0.04)]"
            : "bg-[#FBFAF7]/90 backdrop-blur-xl border-b border-black/[0.05]"
        )}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease }}
      >
        <nav
          className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-14"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <ChessKnightLogo className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading text-[0.87rem] font-semibold tracking-[0.13em] text-[#0F172A] uppercase">
              Schachservice
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={cn(
                    "flex items-center gap-[5px] px-3.5 py-2 text-[13px] font-body font-medium rounded-lg transition-colors duration-200",
                    activeDropdown === item.label
                      ? "text-[#1d1d1f]"
                      : "text-[#1d1d1f]/55 hover:text-[#1d1d1f]"
                  )}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {t(item.labelKey)}
                  <ChevronDown
                    className={cn(
                      "w-[11px] h-[11px] transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] bg-[#FBFAF7]/98 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10),0_1px_0_rgba(0,0,0,0.04)] border border-black/[0.06] p-6 grid grid-cols-3 gap-6"
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10px] font-body font-bold tracking-[0.2em] uppercase text-gold/75 mb-3">
                            {t(col.headingKey)}
                          </p>
                          <ul className="space-y-0.5">
                            {col.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="flex items-center gap-2 text-[13px] font-body text-[#1d1d1f]/55 hover:text-[#1d1d1f] py-1.5 px-2 rounded-lg hover:bg-black/[0.03] transition-all duration-150 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <ArrowRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-150" />
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {simpleItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-[13px] font-body font-medium text-[#1d1d1f]/55 hover:text-[#1d1d1f] rounded-lg transition-colors duration-200"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <div className="h-4 w-px bg-black/[0.10]" aria-hidden="true" />
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              aria-label="Jetzt anrufen"
              className="flex items-center gap-1.5 text-[12px] font-body font-medium text-[#1d1d1f]/42 hover:text-[#1d1d1f]/70 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+49 176 41726196</span>
            </a>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              className="text-[12px] font-body font-medium text-[#1d1d1f]/50 hover:text-[#1d1d1f]/80 transition-colors duration-200"
            >
              {t("nav.quote")}
            </a>
            <a
              href={BLITZANGEBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_click"
              className="inline-flex items-center gap-1.5 h-8 px-4 bg-gold text-navy text-[12px] font-body font-bold rounded-full hover:bg-gold-muted transition-all duration-200"
              style={{ boxShadow: "0 2px 12px rgba(205,163,73,0.28)" }}
            >
              <Zap className="w-3 h-3 fill-navy/25 flex-shrink-0" aria-hidden="true" />
              {t("nav.blitz")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[#1d1d1f]/55 hover:text-[#1d1d1f] hover:bg-black/[0.04] transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label={t("nav.open_menu")}
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-[340px] bg-[#FBFAF7] flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.13)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-black/[0.06]">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <ChessKnightLogo className="w-6 h-6 text-gold" />
                  <span className="font-heading text-[0.85rem] font-semibold tracking-[0.13em] text-[#0F172A] uppercase">
                    Schachservice
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[#1d1d1f]/38 hover:text-[#1d1d1f] hover:bg-black/[0.04] transition-colors"
                  aria-label={t("nav.close_menu")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-black/[0.05]">
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between px-5 py-4 text-[0.93rem] font-body font-semibold text-[#0F172A] hover:text-gold transition-colors"
                    >
                      {t(item.labelKey)}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-[#1d1d1f]/28 transition-transform duration-200",
                          mobileExpanded === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-3 space-y-0.5">
                            {item.columns.flatMap((col) =>
                              col.items.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2.5 py-2 px-2 text-[13px] text-[#1d1d1f]/52 hover:text-gold rounded-lg hover:bg-gold/5 transition-colors"
                                >
                                  <ArrowRight className="w-3 h-3 text-gold/50 flex-shrink-0" />
                                  {link.label}
                                </Link>
                              ))
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {simpleItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-5 py-4 text-[0.93rem] font-body font-semibold text-[#0F172A] hover:text-gold transition-colors border-b border-black/[0.05]"
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}

                {/* Language switcher row */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.05]">
                  <span className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-[#1d1d1f]/35">
                    {t("lang.de") === "Deutsch" ? "Sprache" : t("lang.de") === "English" ? "Language" : "Dil"}
                  </span>
                  <LanguageSwitcher variant="pills" />
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="p-5 border-t border-black/[0.06] space-y-2.5 bg-white/50">
                <a
                  href={BLITZANGEBOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="blitzangebot_click"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-11 px-6 bg-gold text-navy text-sm font-body font-bold rounded-xl hover:bg-gold-muted transition-all duration-200"
                  style={{ boxShadow: "0 4px 16px rgba(205,163,73,0.26)" }}
                >
                  <Zap className="w-4 h-4 fill-navy/25 flex-shrink-0" aria-hidden="true" />
                  {t("hero.cta_blitz")}
                </a>
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="quote_click"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full h-11 px-6 font-body font-medium text-sm text-[#0F172A] rounded-xl transition-all duration-200 hover:bg-white/70"
                  style={{ border: "1px solid #DDD4C7", background: "rgba(255,255,255,0.65)" }}
                >
                  {t("nav.free_quote")}
                </a>
                <a
                  href="tel:+4917641726196"
                  data-event="phone_click"
                  className="flex items-center justify-center gap-2 w-full h-10 rounded-xl text-[#0F172A]/50 text-sm font-body font-medium hover:text-[#0F172A]/80 transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  +49 176 41726196
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ChessKnightLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 27h16M11.5 27v-3.5M20.5 27v-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 23.5h12c0-3-1.5-5-3.5-5.5l1-2.5-2.5-1 .5-2c-1.5-3-4-4-6-3.5L9 11l1.5 1.5L9 14l2 2-1 1 2 .5v6h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}
