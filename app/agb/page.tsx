import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/agb" },
  title: "AGB – Allgemeine Geschäftsbedingungen | SCHACHSERVICE",
};

export default function AGBPage() {
  return (
    <section className="bg-ivory pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>
        <div className="font-body text-muted leading-relaxed">
          <p>
            Die AGB der SCHACHSERVICE GmbH werden hier vollständig veröffentlicht.
          </p>
        </div>
      </div>
    </section>
  );
}
