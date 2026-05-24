import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "heidelberg")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/heidelberg" },
  title: "Umzugsunternehmen Heidelberg – SCHACHSERVICE",
  description: "Premium-Umzüge in Heidelberg mit SCHACHSERVICE. Festpreisgarantie, lokale Expertise und vollständiger Rundum-Service.",
  keywords: ["Umzug Heidelberg", "Umzugsunternehmen Heidelberg", "Schachservice Heidelberg"],
};

export default function HeidelbergPage() {
  return <CityPageTemplate city={city} />;
}
