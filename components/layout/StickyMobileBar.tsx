"use client";

import { Phone, Zap } from "lucide-react";
import { WHATSAPP_URL, BLITZANGEBOT_URL } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Schnellkontakt"
    >
      {/* Subtle top shadow separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="bg-white/96 backdrop-blur-xl border-t border-navy/8 grid grid-cols-3">
        {/* Anrufen */}
        <a
          href="tel:+4917641726196"
          data-event="phone_click"
          aria-label="Jetzt anrufen: +49 176 41726196"
          className="flex flex-col items-center justify-center gap-1 py-3.5 text-navy hover:text-gold hover:bg-ivory/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span className="font-body text-[10px] font-semibold tracking-wide">Anrufen</span>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          data-event="whatsapp_click"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Per WhatsApp anfragen"
          className="flex flex-col items-center justify-center gap-1 py-3.5 border-x border-navy/8 text-[#25D366] hover:bg-[#25D366]/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-inset"
        >
          {/* WhatsApp icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="font-body text-[10px] font-semibold tracking-wide">WhatsApp</span>
        </a>

        {/* Blitzangebot */}
        <a
          href={BLITZANGEBOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="blitzangebot_click"
          aria-label="Blitzangebot erhalten"
          className="flex flex-col items-center justify-center gap-1 py-3.5 bg-gold text-navy hover:bg-gold-muted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
        >
          <Zap className="w-5 h-5 fill-navy/20" aria-hidden="true" />
          <span className="font-body text-[10px] font-bold tracking-wide">Blitzangebot</span>
        </a>
      </div>
    </div>
  );
}
