import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar }           from "@/components/layout/Navbar";
import { Footer }           from "@/components/layout/Footer";
import { SmoothScroll }     from "@/components/providers/SmoothScroll";
import { StickyMobileBar }  from "@/components/layout/StickyMobileBar";
import { LanguageProvider } from "@/context/LanguageProvider";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schachservice.de"),
  title: {
    default: "SCHACHSERVICE – Premium Umzugsunternehmen Mannheim",
    template: "%s | SCHACHSERVICE Mannheim",
  },
  description:
    "Ihr Premium-Umzugsunternehmen in Mannheim. Über 15 Jahre lokale Expertise, Festpreisgarantie und kompletter Rundum-Service – sorglos umziehen mit SCHACHSERVICE.",
  keywords: [
    "Umzugsunternehmen Mannheim",
    "Umzug Mannheim",
    "Möbeltransport Mannheim",
    "Firmenumzug Mannheim",
    "Entrümpelung Mannheim",
    "Umzugsfirma Mannheim",
  ],
  alternates: {
    languages: {
      "de": "https://schachservice.de",
      "x-default": "https://schachservice.de",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://schachservice.de",
    siteName: "SCHACHSERVICE",
    title: "SCHACHSERVICE – Premium Umzugsunternehmen Mannheim",
    description:
      "Über 15 Jahre Vertrauen in Mannheim. Ihr Premium-Umzugspartner für jeden Lebensabschnitt.",
  },
  twitter: { card: "summary_large_image", site: "@schachservice" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "@id": "https://schachservice.de/#business",
  name: "SCHACHSERVICE",
  alternateName: "Schachservice Mannheim",
  description:
    "Premium-Umzugsunternehmen in Mannheim und der Metropolregion Rhein-Neckar. Festpreisgarantie, über 15 Jahre Erfahrung, vollversichert.",
  url: "https://schachservice.de",
  telephone: "+4917641726196",
  email: "info@schachservice.com",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Überweisung, Bar, EC-Karte",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Draisstraße 69",
    addressLocality: "Mannheim",
    postalCode: "68169",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4875,
    longitude: 8.466,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", name: "Mannheim" },
    { "@type": "City", name: "Heidelberg" },
    { "@type": "City", name: "Ludwigshafen" },
    { "@type": "City", name: "Karlsruhe" },
    { "@type": "City", name: "Worms" },
    { "@type": "City", name: "Speyer" },
    { "@type": "City", name: "Frankenthal" },
    { "@type": "City", name: "Schwetzingen" },
    { "@type": "City", name: "Weinheim" },
  ],
  sameAs: [
    "https://www.google.com/maps/place/Schachservice+Mannheim",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3ZJQVD3QEJ"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3ZJQVD3QEJ');
        `}
      </Script>
      <body className="min-h-full flex flex-col antialiased bg-ivory text-navy">
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {/* pb-16 ensures content is not hidden behind sticky mobile bar */}
            <main className="flex-1 pb-16 lg:pb-0" id="main-content">
              {children}
            </main>
            <Footer />
            <StickyMobileBar />
            <Analytics />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
