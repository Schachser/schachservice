import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { CityPageTemplate } from "@/components/city/CityPageTemplate";

const city = cities.find((c) => c.id === "frankenthal")!;

export const metadata: Metadata = {
  alternates: { canonical: "/regionen/frankenthal" },
  title: "Umzugsunternehmen Frankenthal – SCHACHSERVICE",
  description: "Premium-Umzüge in Frankenthal mit SCHACHSERVICE. Festpreisgarantie und vollständiger Rundum-Service.",
  keywords: ["Umzug Frankenthal", "Umzugsunternehmen Frankenthal", "Schachservice"],
};

export default function FrankenthalPage() {
  return <CityPageTemplate city={city} />;
}
