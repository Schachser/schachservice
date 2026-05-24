import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/impressum" },
  title: "Impressum | SCHACHSERVICE",
};

export default function ImpressumPage() {
  return (
    <section className="bg-ivory pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-8">Impressum</h1>
        <div className="prose font-body text-muted leading-relaxed space-y-4">
          <p><strong className="text-navy">SCHACHSERVICE GmbH</strong></p>
          <p>Musterstraße 1<br />68161 Mannheim<br />Deutschland</p>
          <p>Telefon: +49 176 41726196<br />E-Mail: info@schachservice.com</p>
          <p>Handelsregister: HRB XXXXX<br />Amtsgericht Mannheim</p>
          <p>USt-IdNr.: DE XXXXXXXXX</p>
          <p>Geschäftsführer: [Name]</p>
        </div>
      </div>
    </section>
  );
}
