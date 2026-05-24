import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "speyer")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/speyer" },
  title: "Umzugsunternehmen Speyer – SCHACHSERVICE",
  description: "Premium-Umzüge in Speyer mit SCHACHSERVICE. Festpreisgarantie und vollständiger Rundum-Service.",
  keywords: ["Umzug Speyer", "Umzugsunternehmen Speyer", "Schachservice Speyer"],
};

export default function SpeyerPage() {
  return <CityPageTemplate city={city} />;
}
