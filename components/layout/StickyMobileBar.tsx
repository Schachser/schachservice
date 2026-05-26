"use client";

import { useState, useEffect } from "react";
import { Phone, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BLITZANGEBOT_URL } from "@/lib/constants";
import { useLang } from "@/context/LanguageProvider";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="navigation"
          aria-label="Schnellkontakt"
        >
          {/* Subtle separator */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

          <div className="bg-white/97 backdrop-blur-xl px-4 py-3 flex gap-3">

            {/* Primary: Blitzangebot */}
            <a
              href={BLITZANGEBOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blitzangebot_click"
              aria-label="Blitzangebot erhalten"
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-gold text-navy font-body font-bold text-[0.88rem] transition-colors duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 hover:bg-gold-muted"
              style={{
                boxShadow: "0 4px 20px rgba(205,163,73,0.28)",
              }}
            >
              <Zap className="w-4 h-4 fill-navy/25 flex-shrink-0" aria-hidden="true" />
              {t("sticky.blitz")}
            </a>

            {/* Secondary: Anrufen */}
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              aria-label="Jetzt anrufen: +49 176 41726196"
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl font-body font-semibold text-[0.88rem] text-[#0F172A] transition-colors duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25 focus-visible:ring-offset-1"
              style={{
                border: "1px solid #DDD4C7",
                background: "rgba(255,255,255,0.82)",
              }}
            >
              <Phone className="w-4 h-4 text-[#0F172A]/50 flex-shrink-0" aria-hidden="true" />
              {t("sticky.call")}
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
