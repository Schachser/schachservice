import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/ueber-uns" },
  title: "Über uns – Ihre Mannheimer Umzugsprofis seit 2009",
  description:
    "SCHACHSERVICE steht seit 2009 für Premium-Umzüge in Mannheim. Lernen Sie unser Team kennen – Menschen mit Leidenschaft für perfekte Umzüge.",
};

const values = [
  {
    title: "Präzision",
    description:
      "Jeder Umzug wird bis ins letzte Detail geplant. Nichts wird dem Zufall überlassen.",
  },
  {
    title: "Vertrauen",
    description:
      "Wir arbeiten mit Ihrem wertvollsten Besitz. Dieses Vertrauen nehmen wir mit größtem Ernst.",
  },
  {
    title: "Heimatverbunden",
    description:
      "Mannheim ist unsere Stadt. Wir investieren in die Region und engagieren uns lokal.",
  },
  {
    title: "Transparenz",
    description:
      "Klare Kommunikation, faire Preise, keine versteckten Kosten – das ist unser Standard.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-slate pt-36 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 70% at 85% 50%, rgba(205,163,73,0.08) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel light className="mb-5">Über uns</SectionLabel>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-ivory leading-tight max-w-3xl mb-6">
            Nicht nur ein Umzugsunternehmen —{" "}
            <em className="not-italic text-gold">ein Mannheimer Versprechen</em>
          </h1>
          <p className="font-body text-lg text-ivory/65 max-w-2xl leading-relaxed">
            SCHACHSERVICE wurde 2009 in Mannheim gegründet – mit einer einfachen Überzeugung:
            Ein Umzug verdient dasselbe Niveau wie jede andere Premium-Dienstleistung.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-navy mb-6">
              Unsere Geschichte
            </h2>
            <div className="space-y-5 font-body text-base leading-relaxed text-muted">
              <p>
                Was 2009 mit einem kleinen Team und einem einzigen Fahrzeug begann,
                ist heute Mannheims vertrauenswürdigstes Premium-Umzugsunternehmen.
                Über 5.000 erfolgreiche Umzüge – jeder davon mit demselben Anspruch: perfekt.
              </p>
              <p>
                Wir sind kein anonymes Großunternehmen, das auf maximalen Durchsatz optimiert.
                Wir sind ein Team aus Mannheimern, die stolz darauf sind, Landsleuten den
                Übergang in einen neuen Lebensabschnitt zu erleichtern.
              </p>
              <p>
                Unser Firmensymbol – der Schachspringer – steht für strategisches Denken,
                unerwartete Beweglichkeit und den Mut, neue Wege zu gehen. Genau das
                bringen wir zu jedem Umzug mit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-surface rounded-xl p-6 border border-navy/8 shadow-card">
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
