import { MapPin, Navigation } from "lucide-react";
import { MAPS_EMBED_URL, OFFICE_ADDRESS } from "@/lib/constants";

export function MapSection() {
  return (
    <section className="bg-navy py-20" aria-label="Standort">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="font-body text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-3">
                Unser Standort
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-ivory leading-tight">
                Standort{" "}
                <em className="not-italic text-gold">Mannheim</em>
              </h2>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-ivory/5 border border-ivory/10">
              <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-ivory/40 mb-1">
                  Adresse
                </p>
                <p className="font-body text-sm font-medium text-ivory leading-relaxed">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=Draisstra%C3%9Fe+69%2C+68169+Mannheim`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-11 px-6 rounded-xl bg-gold text-navy text-sm font-body font-semibold hover:bg-gold-muted transition-all duration-200 shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label="Route zu Schachservice planen"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              Route planen
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-ivory/12 shadow-[0_8px_40px_rgba(0,0,0,0.35)]" style={{ height: 400 }}>
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Schachservice Standort – Draisstraße 69, 68169 Mannheim"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/90 to-transparent pointer-events-none">
                <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-gold mb-0.5">
                  Schachservice
                </p>
                <p className="font-heading text-sm text-white">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
