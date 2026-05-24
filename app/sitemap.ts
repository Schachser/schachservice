import type { MetadataRoute } from "next";
import { allFlatServices } from "@/lib/services";
import { cities } from "@/lib/cities";

const BASE = "https://schachservice.de";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueServiceSlugs = [...new Set(allFlatServices.map((s) => s.slug))];
  const citySlugs = cities.map((c) => c.id);

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/leistungen`,             lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/leistungen/umzug-transport`,      lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/leistungen/montage-aufbau`,       lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/leistungen/verpackung-material`,  lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/leistungen/reinigung-uebergabe`,  lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/leistungen/entruempelung`,        lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/leistungen/einlagerung`,          lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/regionen`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/preise`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ueber-uns`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kontakt`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/ratgeber`,               lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/karriere`,               lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/impressum`,              lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/datenschutz`,            lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${BASE}/agb`,                    lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];

  const ratgeberSlugs = [
    "umzugscheckliste",
    "einpacken-tipps",
    "umzug-mit-kindern",
    "ummeldung",
    "firmenumzug-planen",
    "seniorenumzug",
  ];

  const ratgeberPages: MetadataRoute.Sitemap = ratgeberSlugs.map((slug) => ({
    url: `${BASE}/ratgeber/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const servicePages: MetadataRoute.Sitemap = uniqueServiceSlugs.map((slug) => ({
    url: `${BASE}/leistungen/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const regionPages: MetadataRoute.Sitemap = citySlugs.map((id) => ({
    url: `${BASE}/regionen/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticPages, ...ratgeberPages, ...servicePages, ...regionPages];
}
