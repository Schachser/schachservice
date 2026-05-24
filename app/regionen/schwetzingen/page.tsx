import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "schwetzingen")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/schwetzingen" },
  title: "Umzugsunternehmen Schwetzingen – SCHACHSERVICE",
  description: "Premium-Umzüge in Schwetzingen mit SCHACHSERVICE. Festpreisgarantie, lokale Expertise und vollständiger Rundum-Service.",
  keywords: ["Umzug Schwetzingen", "Umzugsunternehmen Schwetzingen", "Schachservice Schwetzingen"],
};

export default function SchwetzingenPage() {
  return <CityPageTemplate city={city} />;
}
