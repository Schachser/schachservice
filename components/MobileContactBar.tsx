"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.32, ease }}
          aria-label="Schnellkontakt"
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(205,163,73,0.55) 40%, rgba(205,163,73,0.55) 60%, transparent)" }}
            aria-hidden="true"
          />

          <div
            className="px-4 pt-3 pb-3 flex gap-3"
            style={{
              background: "rgba(13,18,30,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.45), 0 -2px 12px rgba(0,0,0,0.25)",
            }}
          >
            {/* WhatsApp — primary gold */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              aria-label="WhatsApp schreiben"
              className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl font-body font-bold text-[0.92rem] text-navy transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-navy"
              style={{
                background: "linear-gradient(135deg, #D4A843 0%, #CDA349 60%, #B8932F 100%)",
                boxShadow: "0 4px 20px rgba(205,163,73,0.35), 0 1px 4px rgba(205,163,73,0.2)",
                color: "#0D121E",
              }}
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              WhatsApp
            </a>

            {/* Anrufen — secondary ivory */}
            <a
              href="tel:+4917641726196"
              data-event="phone_click"
              aria-label="Jetzt anrufen"
              className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl font-body font-semibold text-[0.92rem] transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40 focus-visible:ring-offset-1 focus-visible:ring-offset-navy"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#F5F0E8",
              }}
            >
              <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "#CDA349" }} aria-hidden="true" />
              Anrufen
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
