import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "FAQ – Häufig gestellte Fragen zum Umzug",
  description:
    "Antworten auf die häufigsten Fragen rund um Umzüge mit SCHACHSERVICE: Ablauf, Preise, Versicherung, Buchung und mehr.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie läuft ein Umzug mit SCHACHSERVICE ab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nach Ihrer Anfrage vereinbaren wir eine kostenlose Besichtigung vor Ort und erstellen ein verbindliches Festpreisangebot. Am Umzugstag erscheint unser Team pünktlich und erledigt alles professionell.",
      },
    },
    {
      "@type": "Question",
      name: "Gilt für alle Umzüge ein Festpreis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – für jeden Umzug erstellen wir nach der Vor-Ort-Besichtigung ein verbindliches Festpreisangebot. Dieser Preis ändert sich nicht, egal ob der Umzug länger dauert als geplant.",
      },
    },
    {
      "@type": "Question",
      name: "Wie sind meine Möbel während des Transports versichert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ihr gesamtes Inventar ist während des Umzugs durch unsere Vollkaskoversicherung gedeckt. Im Schadensfall erstatten wir den vollständigen Zeitwert – schnell und unbürokratisch.",
      },
    },
    {
      "@type": "Question",
      name: "Wie früh sollte ich meinen Umzug buchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir empfehlen eine Buchung mindestens 4–6 Wochen im Voraus, besonders in der Hauptsaison. Für Express-Umzüge stehen wir auch kurzfristig, teilweise innerhalb von 48 Stunden, zur Verfügung.",
      },
    },
    {
      "@type": "Question",
      name: "Können Sie die Halteverbotszone für mich beantragen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja – das ist in unserem Premiumservice inklusive. Wir beantragen die nötigen Haltverbotsschilder bei der Stadt Mannheim und anderen Behörden für Sie.",
      },
    },
    {
      "@type": "Question",
      name: "Transportieren Sie auch Klaviere, Tresore und Kunstgegenstände?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir haben speziell ausgebildetes Personal und Equipment für Schwer- und Spezialtransporte – darunter Klaviere, Tresore, Kunstwerke und Antiquitäten.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-ivory pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">FAQ</SectionLabel>
          <h1 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-navy leading-tight max-w-2xl">
            Häufig gestellte{" "}
            <em className="not-italic text-gold">Fragen</em>
          </h1>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </>
  );
}
