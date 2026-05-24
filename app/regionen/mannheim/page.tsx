import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "mannheim")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/mannheim" },
  title: "Umzugsunternehmen Mannheim – SCHACHSERVICE",
  description:
    "SCHACHSERVICE – Ihr Premium-Umzugsunternehmen in Mannheim. Festpreisgarantie, lokale Expertise in allen Stadtteilen, über 15 Jahre Erfahrung. Kostenlos anfragen.",
  keywords: ["Umzugsunternehmen Mannheim", "Umzug Mannheim", "Möbeltransport Mannheim", "Schachservice"],
};

export default function MannheimPage() {
  return <CityPageTemplate city={city} />;
}
