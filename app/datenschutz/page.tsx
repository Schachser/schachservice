import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/datenschutz" },
  title: "Datenschutzerklärung | SCHACHSERVICE",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-ivory pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">Datenschutzerklärung</h1>
        <div className="font-body text-muted leading-relaxed space-y-6">
          <p>
            Der Schutz Ihrer persönlichen Daten hat bei SCHACHSERVICE höchste Priorität.
            Wir verarbeiten Ihre Daten gemäß der Datenschutz-Grundverordnung (DSGVO)
            und dem Bundesdatenschutzgesetz (BDSG).
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy">
            Verantwortliche Stelle
          </h2>
          <p>
            SCHACHSERVICE GmbH<br />
            Musterstraße 1, 68161 Mannheim<br />
            info@schachservice.com
          </p>
          <p>
            Die vollständige Datenschutzerklärung wird hier ergänzt.
          </p>
        </div>
      </div>
    </section>
  );
}
