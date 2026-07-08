import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/impressum" },
  title: "Impressum | SCHACHSERVICE",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="bg-ivory pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-navy mb-10">Impressum</h1>

        <div className="font-body leading-relaxed space-y-8">

          {/* Angaben gemäß § 5 TMG */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted">
              <strong className="text-navy">SCHACHSERVICE GmbH</strong><br />
              Draisstraße 69<br />
              68169 Mannheim<br />
              Deutschland
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">Kontakt</h2>
            <p className="text-muted">
              Telefon:{" "}
              <a href="tel:+4917641726196" className="text-navy hover:underline">
                +49 176 41726196
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@schachservice.com" className="text-navy hover:underline">
                info@schachservice.com
              </a>
            </p>
          </div>

          {/* Gesetzlicher Vertreter */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Gesetzlicher Vertreter
            </h2>
            <p className="text-muted">
              Geschäftsführer: Nawras Rahal
            </p>
          </div>

          {/* Steuernummer */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Steuernummer
            </h2>
            <p className="text-muted">
              37320/21862
            </p>
          </div>

          {/* Verantwortlich für den Inhalt */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted">
              Nawras Rahal<br />
              Draisstraße 69<br />
              68169 Mannheim
            </p>
          </div>

          {/* Streitschlichtung */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Streitschlichtung
            </h2>
            <p className="text-muted">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br className="mb-2" />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-muted mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Haftung für Inhalte
            </h2>
            <p className="text-muted">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          {/* Haftung für Links */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Haftung für Links
            </h2>
            <p className="text-muted">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-navy mb-3">
              Urheberrecht
            </h2>
            <p className="text-muted">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
              Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
              eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
