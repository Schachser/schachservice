import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/ratgeber" },
  title: "Ratgeber – Umzugstipps & Checklisten",
  description:
    "Nützliche Tipps, Checklisten und Ratgeber rund um das Thema Umzug. Von der Planung bis zur Behördenummeldung – gut vorbereitet umziehen.",
};

const articles = [
  {
    title: "Die ultimative Umzugscheckliste",
    excerpt: "Alles, was Sie vor, während und nach dem Umzug erledigen müssen – übersichtlich und Schritt für Schritt.",
    href: "/ratgeber/umzugscheckliste",
    category: "Planung",
  },
  {
    title: "Richtig einpacken: Profi-Tipps",
    excerpt: "Wie Sie Ihre Möbel und Gegenstände sicher verpacken – ohne extra Kosten für Spezialmaterial.",
    href: "/ratgeber/einpacken-tipps",
    category: "Verpackung",
  },
  {
    title: "Umzug mit Kindern: So klappt es",
    excerpt: "Praxiserprobte Strategien, um den Umzug für die ganze Familie stressfrei zu gestalten.",
    href: "/ratgeber/umzug-mit-kindern",
    category: "Familie",
  },
  {
    title: "Ummeldung nach dem Umzug",
    excerpt: "Alle Behördengänge nach dem Umzug kompakt erklärt: Einwohnermeldeamt, KFZ, GEZ und mehr.",
    href: "/ratgeber/ummeldung",
    category: "Behörden",
  },
  {
    title: "Firmenumzug planen",
    excerpt: "Minimalste Ausfallzeit, maximale Effizienz – so planen Sie einen professionellen Büroumzug.",
    href: "/ratgeber/firmenumzug-planen",
    category: "Business",
  },
  {
    title: "Seniorenumzug: Besonderheiten",
    excerpt: "Was es beim Umzug älterer Menschen zu beachten gibt – rechtlich, praktisch und emotional.",
    href: "/ratgeber/seniorenumzug",
    category: "Senioren",
  },
];

export default function RatgeberPage() {
  return (
    <>
      <section className="bg-ivory pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel className="mb-5">Ratgeber</SectionLabel>
          <h1 className="font-heading text-[clamp(2.2rem,4.5vw,3.5rem)] font-semibold text-navy leading-tight max-w-2xl mb-6">
            Gut informiert —{" "}
            <em className="not-italic text-gold">gut umgezogen</em>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl leading-relaxed">
            Expertenwissen aus über 15 Jahren Umzugserfahrung – kompakt, praktisch und
            kostenlos für Sie aufbereitet.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col p-7 rounded-xl border border-navy/8 bg-ivory hover:border-gold/30 hover:shadow-elegant transition-all duration-300"
              >
                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-body font-semibold tracking-widest uppercase text-gold bg-gold/10 rounded-full mb-5 w-fit">
                  {article.category}
                </span>
                <h2 className="font-heading text-lg font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="font-body text-sm text-muted leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-body font-medium text-gold">
                  Artikel lesen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
