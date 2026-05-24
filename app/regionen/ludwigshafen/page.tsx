import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "ludwigshafen")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/ludwigshafen" },
  title: "Umzugsunternehmen Ludwigshafen – SCHACHSERVICE",
  description: "Premium-Umzüge in Ludwigshafen mit SCHACHSERVICE. Festpreisgarantie, lokale Expertise und vollständiger Rundum-Service.",
  keywords: ["Umzug Ludwigshafen", "Umzugsunternehmen Ludwigshafen", "Schachservice"],
};

export default function LudwigshafenPage() {
  return <CityPageTemplate city={city} />;
}
