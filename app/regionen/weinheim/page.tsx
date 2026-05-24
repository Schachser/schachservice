import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "weinheim")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/weinheim" },
  title: "Umzugsunternehmen Weinheim – SCHACHSERVICE",
  description: "Premium-Umzüge in Weinheim an der Bergstraße mit SCHACHSERVICE. Festpreisgarantie und vollständiger Rundum-Service.",
  keywords: ["Umzug Weinheim", "Umzugsunternehmen Weinheim Bergstraße", "Schachservice Weinheim"],
};

export default function WeinheimPage() {
  return <CityPageTemplate city={city} />;
}
