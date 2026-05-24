import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "worms")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/worms" },
  title: "Umzugsunternehmen Worms – SCHACHSERVICE",
  description: "Premium-Umzüge in Worms mit SCHACHSERVICE. Festpreisgarantie und vollständiger Rundum-Service.",
  keywords: ["Umzug Worms", "Umzugsunternehmen Worms", "Schachservice Worms"],
};

export default function WormsPage() {
  return <CityPageTemplate city={city} />;
}
