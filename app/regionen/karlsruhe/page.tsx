import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "karlsruhe")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/karlsruhe" },
  title: "Umzugsunternehmen Karlsruhe – SCHACHSERVICE",
  description: "Premium-Umzüge in Karlsruhe mit SCHACHSERVICE. Festpreisgarantie und vollständiger Rundum-Service.",
  keywords: ["Umzug Karlsruhe", "Umzugsunternehmen Karlsruhe", "Schachservice Karlsruhe"],
};

export default function KarlsruhePage() {
  return <CityPageTemplate city={city} />;
}
