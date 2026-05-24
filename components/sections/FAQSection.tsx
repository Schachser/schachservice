"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/variants";

const faqs = [
  {
    question: "Wie läuft ein Umzug mit SCHACHSERVICE ab?",
    answer:
      "Nach Ihrer Anfrage vereinbaren wir eine kostenlose Besichtigung vor Ort. Dabei nehmen wir alles detailliert auf und erstellen ein verbindliches Festpreisangebot. Am Umzugstag erscheint unser Team pünktlich, trägt Ihre Möbel sorgfältig aus, transportiert alles sicher und richtet in Ihrer neuen Wohnung alles nach Ihren Wünschen ein.",
  },
  {
    question: "Wie früh sollte ich meinen Umzug buchen?",
    answer:
      "Wir empfehlen eine Buchung mindestens 4–6 Wochen im Voraus, besonders in der Hauptsaison (Frühjahr und Sommer). Für Express-Umzüge stehen wir auch kurzfristig, teilweise innerhalb von 48 Stunden, zur Verfügung.",
  },
  {
    question: "Gilt für alle Umzüge ein Festpreis?",
    answer:
      "Ja – für jeden Umzug erstellen wir nach der Vor-Ort-Besichtigung ein verbindliches Festpreisangebot. Dieser Preis ändert sich nicht, egal ob der Umzug länger dauert als geplant oder unvorhergesehene Herausforderungen auftreten.",
  },
  {
    question: "Wie sind meine Möbel während des Transports versichert?",
    answer:
      "Ihr gesamtes Inventar ist während des Umzugs durch unsere Vollkaskoversicherung gedeckt. Im Schadensfall erstatten wir den vollständigen Zeitwert – schnell, unbürokratisch und ohne langes Hin und Her.",
  },
  {
    question: "Transportieren Sie auch Klaviere, Tresore und Kunstgegenstände?",
    answer:
      "Ja. Wir haben speziell ausgebildetes Personal und Equipment für Schwer- und Spezialtransporte – darunter Klaviere, Tresore, Kunstwerke und Antiquitäten. Auf Wunsch besorgen wir auch einen Außenaufzug.",
  },
  {
    question: "Helft ihr auch beim Ein- und Auspacken?",
    answer:
      "Selbstverständlich. Unser vollständiger Einpackservice umfasst das professionelle Verpacken aller Gegenstände mit hochwertigem Material, die Beschriftung aller Kartons nach Raum und Inhalt sowie das geordnete Auspacken in Ihrer neuen Wohnung.",
  },
  {
    question: "Können Sie die Halteverbotszone für mich beantragen?",
    answer:
      "Ja – und das ist in unserem Premiumservice inklusive. Wir beantragen die nötigen Haltverbotsschilder bei der Stadt Mannheim und zuständigen Behörden in anderen Städten für Sie. Sie müssen sich um nichts kümmern.",
  },
  {
    question: "Wie läuft ein Seniorenumzug ab?",
    answer:
      "Unser Seniorenumzug ist speziell auf die Bedürfnisse älterer Menschen ausgerichtet. Wir arbeiten in Ihrem Tempo, kommunizieren klar und ruhig, kümmern uns um alle organisatorischen Details und begleiten Sie auf Wunsch auch bei Behördengängen nach dem Umzug.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-navy/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-body text-base font-medium text-navy group-hover:text-gold transition-colors duration-200">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-navy/15 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all duration-200">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-gold" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-navy group-hover:text-gold transition-colors duration-200" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm leading-relaxed text-muted pb-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <section className="bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: header + CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel className="mb-5">Häufige Fragen</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,3.8vw,3rem)] font-semibold text-navy leading-tight mb-5"
            >
              Antworten auf Ihre{" "}
              <em className="not-italic text-gold">wichtigsten Fragen</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-base leading-relaxed text-muted mb-8">
              Haben Sie eine Frage, die hier nicht beantwortet wird?
              Unser Team steht Ihnen persönlich zur Verfügung.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-3">
              <Button href="/kontakt" variant="primary" size="md">
                Persönlich beraten lassen
              </Button>
              <div className="pt-2">
                <a
                  href="tel:+4917641726196"
                  className="font-body text-sm text-muted hover:text-gold transition-colors duration-200"
                >
                  oder anrufen: +49 176 41726196
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 p-6 rounded-xl bg-ivory border border-navy/8"
            >
              <p className="font-body text-xs text-muted tracking-wide uppercase font-semibold mb-3">
                Schnellantwort garantiert
              </p>
              <p className="font-body text-sm text-navy">
                Alle Anfragen werden innerhalb von{" "}
                <strong className="text-gold">24 Stunden</strong> beantwortet –
                auch am Wochenende.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
