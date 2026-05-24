"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { LEAD_URL } from "@/lib/constants";
import { BlitzangebotButton } from "@/components/ui/BlitzangebotButton";

const navItems = [
  {
    label: "Leistungen",
    href: "/leistungen",
    columns: [
      {
        heading: "Umzug & Transport",
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
    href: "/regionen",
    columns: [
      {
        heading: "Baden-Württemberg",
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
        items: [
          { label: "Ludwigshafen", href: "/regionen/ludwigshafen" },
          { label: "Frankenthal",  href: "/regionen/frankenthal" },
          { label: "Worms",        href: "/regionen/worms" },
          { label: "Speyer",       href: "/regionen/speyer" },
        ],
      },
      {
        heading: "Gesamtregion",
        items: [
          { label: "Metropolregion Rhein-Neckar", href: "/regionen/rhein-neckar" },
          { label: "Alle Regionen",               href: "/regionen" },
        ],
      },
    ],
  },
] as const;

const simpleItems = [
  { label: "Preise",    href: "/preise" },
  { label: "Über uns",  href: "/ueber-uns" },
  { label: "Kontakt",   href: "/kontakt" },
];

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: premiumEase } },
  exit:    { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.15, ease: "easeIn" as const } },
};

const mobileMenuVariants = {
  hidden:  { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.35, ease: premiumEase } },
  exit:    { opacity: 0, x: "100%", transition: { duration: 0.25, ease: "easeIn" as const } },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 140);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(7,17,31,0.82)] backdrop-blur-[18px] border-b border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            : "bg-[rgba(7,17,31,0.58)] backdrop-blur-[18px] border-b border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
        )}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16"
          aria-label="Hauptnavigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <ChessKnightLogo className="w-7 h-7 text-gold transition-transform duration-300 group-hover:scale-105" />
            <span className="font-heading text-[0.95rem] font-semibold tracking-widest text-ivory uppercase">
              Schachservice
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-body font-medium tracking-wide rounded-md transition-colors duration-200",
                    activeDropdown === item.label
                      ? "text-gold"
                      : "text-white/70 hover:text-gold"
                  )}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-surface rounded-xl shadow-lifted border border-navy/8 p-6 grid grid-cols-3 gap-6"
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={scheduleClose}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10px] font-body font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                            {col.heading}
                          </p>
                          <ul className="space-y-1">
                            {col.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="flex items-center gap-2 text-sm font-body text-navy hover:text-gold transition-colors duration-150 py-0.5 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200">
                                    <ArrowRight className="w-3 h-3 text-gold" />
                                  </span>
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
                className="px-4 py-2 text-sm font-body font-medium tracking-wide text-white/70 hover:text-gold rounded-md transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              aria-label="Jetzt anrufen: +49 176 41726196"
              className="flex items-center gap-2 text-[0.8rem] font-body text-white/42 hover:text-white/75 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="tracking-wide">+49 176 41726196</span>
            </a>
            <a
              href={LEAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="quote_click"
              aria-label="Kostenloses Angebot anfragen"
              className="inline-flex items-center gap-2 h-8 px-4
                border border-white/18 text-white/65 text-xs font-body font-medium tracking-wide rounded-md
                hover:border-white/32 hover:text-white/90
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
            >
              Angebot anfragen
            </a>
            <BlitzangebotButton size="sm" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-ivory/80 hover:text-gold transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[rgba(7,17,31,0.96)] backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col border-l border-white/6"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/6">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <ChessKnightLogo className="w-7 h-7 text-gold" />
                  <span className="font-heading text-[0.9rem] font-semibold tracking-widest text-ivory uppercase">
                    Schachservice
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-md text-white/55 hover:text-gold transition-colors"
                  aria-label="Menü schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-white/5">
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between px-6 py-4 text-base font-body font-medium text-white/75 hover:text-gold transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
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
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 space-y-1">
                            {item.columns.flatMap((col) =>
                              col.items.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 py-2 text-sm text-white/45 hover:text-gold transition-colors"
                                >
                                  <ArrowRight className="w-3 h-3 text-gold/50" />
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
                    className="flex items-center px-6 py-4 text-base font-body font-medium text-white/75 hover:text-gold transition-colors border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="p-6 border-t border-white/6 space-y-3">
                <a
                  href="tel:+4917641726196"
                  data-event="phone_click"
                  aria-label="Jetzt anrufen: +49 176 41726196"
                  className="flex items-center justify-center gap-2 w-full h-11 rounded-lg border border-white/12 text-white/60 text-sm font-medium
                    hover:border-white/25 hover:text-white/90 transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +49 176 41726196
                </a>
                <a
                  href={LEAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="quote_click"
                  aria-label="Kostenloses Angebot anfragen"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full h-11 px-6
                    border border-gold/35 text-gold/85 text-sm font-body font-medium tracking-wide rounded-lg
                    hover:border-gold/60 hover:text-gold
                    transition-all duration-300
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
                >
                  Angebot anfragen
                </a>
                <BlitzangebotButton
                  size="md"
                  wrapperClassName="w-full"
                  className="w-full justify-center rounded-xl"
                />
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
