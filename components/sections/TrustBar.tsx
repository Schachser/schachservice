"use client";

import { motion } from "framer-motion";
import { Star, Shield, Clock, CheckCircle, Truck } from "lucide-react";

const items = [
  { icon: Star,         value: "4.9 / 5",      label: "Google Bewertung" },
  { icon: Truck,        value: "5.000+",        label: "Umzüge durchgeführt" },
  { icon: Shield,       value: "Vollkasko",     label: "Versichert & geprüft" },
  { icon: Clock,        value: "15+ Jahre",     label: "Erfahrung in Mannheim" },
  { icon: CheckCircle,  value: "Festpreis",     label: "Keine versteckten Kosten" },
];

export function TrustBar() {
  return (
    <section className="relative bg-navy py-5 overflow-hidden">
      {/* Subtle gold shimmer line top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(205,163,73,0.5), transparent)" }}
        aria-hidden="true"
      />
      {/* Subtle gold shimmer line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(205,163,73,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-0">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-sm font-semibold text-ivory">
                  {item.value}
                </span>
                <span className="font-body text-[11px] text-ivory/50 tracking-wide">
                  {item.label}
                </span>
              </div>

              {/* Divider */}
              {i < items.length - 1 && (
                <span
                  className="hidden sm:block ml-6 w-px h-7 bg-ivory/10"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
