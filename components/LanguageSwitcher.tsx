"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";
import { type Language } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const LANGS: { code: Language; flag: string; short: string; full: string }[] = [
  { code: "de", flag: "🇩🇪", short: "DE", full: "Deutsch"  },
  { code: "en", flag: "🇬🇧", short: "EN", full: "English"  },
  { code: "tr", flag: "🇹🇷", short: "TR", full: "Türkçe"   },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Props {
  variant?: "dropdown" | "pills";
}

export function LanguageSwitcher({ variant = "dropdown" }: Props) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  if (variant === "pills") {
    return (
      <div className="flex items-center gap-1" role="group" aria-label="Language / Sprache">
        {LANGS.map(({ code, flag, short }) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={cn(
              "flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-[12px] font-body font-medium transition-all duration-200",
              lang === code
                ? "bg-gold/14 text-gold border border-gold/28"
                : "text-[#1d1d1f]/45 hover:text-[#1d1d1f] hover:bg-black/[0.04] border border-transparent"
            )}
          >
            <span className="text-sm leading-none" aria-hidden="true">{flag}</span>
            <span>{short}</span>
          </button>
        ))}
      </div>
    );
  }

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language / Sprache"
        className={cn(
          "flex items-center gap-1.5 h-8 px-2.5 rounded-full text-[12px] font-body font-medium transition-all duration-200",
          open
            ? "bg-black/[0.06] text-[#1d1d1f]"
            : "text-[#1d1d1f]/42 hover:text-[#1d1d1f]/70 hover:bg-black/[0.04]"
        )}
      >
        <span className="text-sm leading-none" aria-hidden="true">{current.flag}</span>
        <span>{current.short}</span>
        <svg
          width="7" height="7" viewBox="0 0 7 7" fill="none"
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        >
          <path d="M1 2L3.5 5L6 2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.17, ease } }}
            exit={{ opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.11, ease: "easeIn" as const } }}
            className="absolute top-full right-0 mt-2 w-[130px] bg-[#FBFAF7] rounded-xl py-1 overflow-hidden"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 1px 0 rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
            role="listbox"
            aria-label="Language"
          >
            {LANGS.map(({ code, flag, full }) => {
              const active = lang === code;
              return (
                <button
                  key={code}
                  role="option"
                  aria-selected={active}
                  onClick={() => { setLang(code); setOpen(false); }}
                  className={cn(
                    "flex items-center gap-2.5 w-full px-3 py-2 text-[13px] font-body font-medium transition-colors duration-120",
                    active
                      ? "text-gold bg-gold/[0.07]"
                      : "text-[#1d1d1f]/58 hover:text-[#1d1d1f] hover:bg-black/[0.03]"
                  )}
                >
                  <span className="text-sm leading-none" aria-hidden="true">{flag}</span>
                  <span className="flex-1 text-left">{full}</span>
                  {active && <Check className="w-3 h-3 text-gold flex-shrink-0" aria-hidden="true" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
