export type Language = "de" | "en" | "tr";

type Dict = Record<string, string>;

/* ──────────────────────────────────────────────────────────────
   GERMAN (canonical / fallback)
────────────────────────────────────────────────────────────── */
const de: Dict = {
  // Navbar
  "nav.services":   "Leistungen",
  "nav.regions":    "Regionen",
  "nav.prices":     "Preise",
  "nav.about":      "Über uns",
  "nav.contact":    "Kontakt",
  "nav.quote":      "Angebot anfragen",
  "nav.blitz":      "Blitzangebot",
  "nav.open_menu":  "Menü öffnen",
  "nav.close_menu": "Menü schließen",
  "nav.free_quote": "Kostenloses Angebot anfragen",

  // Navbar dropdown headings
  "nav.col.moving":    "Umzug & Transport",
  "nav.col.extra":     "Weitere Services",
  "nav.col.packages":  "Pakete",
  "nav.col.bw":        "Baden-Württemberg",
  "nav.col.rlp":       "Rheinland-Pfalz",
  "nav.col.metro":     "Gesamtregion",

  // Hero – desktop
  "hero.overline":  "Mannheim · Metropolregion Rhein-Neckar · Seit 2009",
  "hero.stars":     "4.9 · 312 geprüfte Google-Bewertungen",
  "hero.h1_a":      "Ihr Umzug.",
  "hero.h1_b":      "In besten",
  "hero.h1_gold":   "Händen.",
  "hero.sub":       "Festpreisgarantie, geprüftes Fachpersonal und persönliche Betreuung von der ersten Anfrage bis zum letzten Karton — der Umzugspartner, dem Mannheim seit über 15 Jahren vertraut.",
  "hero.cta_primary":   "Kostenloses Angebot anfragen",
  "hero.cta_secondary": "Leistungen ansehen",
  "hero.cta_blitz":     "Blitzangebot erhalten",

  // Hero – mobile overline + short sub
  "hero.overline_m": "Mannheim · Rhein-Neckar · Seit 2009",
  "hero.sub_m":      "Festpreisgarantie, geprüftes Fachpersonal — der Umzugspartner, dem Mannheim seit über 15 Jahren vertraut.",
  "hero.rating_m":   "4.9 · 312 Bewertungen",

  // Trust badges
  "trust.fixed":    "Festpreisgarantie",
  "trust.insured":  "Vollversichert",
  "trust.inspect":  "Kostenlose Besichtigung",
  "trust.reply":    "Antwort in 24 Stunden",

  // Floating trust cards
  "card.experience": "15+ Jahre Erfahrung",
  "card.certified":  "Geprüfter Fachbetrieb",
  "card.moves":      "Erfolgreiche Umzüge",

  // Sticky mobile bar
  "sticky.blitz": "Blitzangebot",
  "sticky.call":  "Anrufen",

  // Footer pre-CTA strip
  "footer.strip_headline": "Bereit für Ihren Umzug?",
  "footer.strip_sub":      "Kostenloses Festpreisangebot in 24 Stunden.",
  "footer.strip_cta":      "Angebot anfragen",

  // Footer column headings
  "footer.col_services": "Leistungen",
  "footer.col_regions":  "Regionen",
  "footer.col_company":  "Unternehmen",
  "footer.col_trust":    "Vertrauen",

  // Opening hours
  "footer.hours_label":  "Öffnungszeiten",
  "footer.hours_mf":     "Mo – Fr",
  "footer.hours_sat":    "Samstag",
  "footer.hours_sun":    "Sonntag",
  "footer.hours_closed": "Geschlossen",

  // Footer trust badge labels
  "footer.trust_fixed":   "Festpreisgarantie",
  "footer.trust_insured": "Vollversichert",

  // Footer trust column items
  "footer.trust_local":   "Lokales Mannheimer Team",
  "footer.trust_ontime":  "Pünktlichkeitsversprechen",
  "footer.trust_ins":     "Versicherter Transport",
  "footer.trust_gdpr":    "Datenschutz-konform",
  "footer.trust_staff":   "Geprüfte Fachkräfte",
  "footer.trust_exp":     "15+ Jahre Erfahrung",

  // Footer bottom bar
  "footer.rights": "Alle Rechte vorbehalten.",

  // FinalCTA section
  "final.label":    "Jetzt starten",
  "final.h2_a":     "Bereit für Ihren",
  "final.h2_gold":  "sorglosen Umzug?",
  "final.sub":      "Fordern Sie jetzt Ihr kostenloses, unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.",
  "final.cta":      "Kostenloses Angebot",
  "final.whatsapp": "Per WhatsApp schreiben",

  // Language switcher UI
  "lang.de": "Deutsch",
  "lang.en": "English",
  "lang.tr": "Türkçe",
};

/* ──────────────────────────────────────────────────────────────
   ENGLISH
────────────────────────────────────────────────────────────── */
const en: Dict = {
  "nav.services":   "Services",
  "nav.regions":    "Regions",
  "nav.prices":     "Prices",
  "nav.about":      "About",
  "nav.contact":    "Contact",
  "nav.quote":      "Request quote",
  "nav.blitz":      "Flash quote",
  "nav.open_menu":  "Open menu",
  "nav.close_menu": "Close menu",
  "nav.free_quote": "Request free quote",

  "nav.col.moving":   "Moving & Transport",
  "nav.col.extra":    "Additional services",
  "nav.col.packages": "Packages",
  "nav.col.bw":       "Baden-Württemberg",
  "nav.col.rlp":      "Rhineland-Palatinate",
  "nav.col.metro":    "Metro region",

  "hero.overline": "Mannheim · Rhine-Neckar Metro · Since 2009",
  "hero.stars":    "4.9 · 312 verified Google reviews",
  "hero.h1_a":     "Your Move.",
  "hero.h1_b":     "In the best",
  "hero.h1_gold":  "Hands.",
  "hero.sub":      "Fixed price guarantee, certified professionals and personal care from the first inquiry to the last box — the moving partner Mannheim has trusted for over 15 years.",
  "hero.cta_primary":   "Request free quote",
  "hero.cta_secondary": "Our services",
  "hero.cta_blitz":     "Get flash quote",

  "hero.overline_m": "Mannheim · Rhine-Neckar · Since 2009",
  "hero.sub_m":      "Fixed price guarantee, certified professionals — the moving partner Mannheim has trusted for over 15 years.",
  "hero.rating_m":   "4.9 · 312 reviews",

  "trust.fixed":   "Fixed price guarantee",
  "trust.insured": "Fully insured",
  "trust.inspect": "Free inspection",
  "trust.reply":   "Reply within 24 hours",

  "card.experience": "15+ years experience",
  "card.certified":  "Certified company",
  "card.moves":      "Successful moves",

  "sticky.blitz": "Flash quote",
  "sticky.call":  "Call",

  "footer.strip_headline": "Ready for your move?",
  "footer.strip_sub":      "Free fixed-price quote within 24 hours.",
  "footer.strip_cta":      "Request quote",

  "footer.col_services": "Services",
  "footer.col_regions":  "Regions",
  "footer.col_company":  "Company",
  "footer.col_trust":    "Why us",

  "footer.hours_label":  "Opening hours",
  "footer.hours_mf":     "Mon – Fri",
  "footer.hours_sat":    "Saturday",
  "footer.hours_sun":    "Sunday",
  "footer.hours_closed": "Closed",

  "footer.trust_fixed":   "Fixed price guarantee",
  "footer.trust_insured": "Fully insured",

  "footer.trust_local":  "Local Mannheim team",
  "footer.trust_ontime": "Punctuality promise",
  "footer.trust_ins":    "Insured transport",
  "footer.trust_gdpr":   "GDPR compliant",
  "footer.trust_staff":  "Certified professionals",
  "footer.trust_exp":    "15+ years experience",

  "footer.rights": "All rights reserved.",

  "final.label":    "Get started",
  "final.h2_a":     "Ready for your",
  "final.h2_gold":  "stress-free move?",
  "final.sub":      "Request your free, no-obligation quote now. We'll get back to you personally within 24 hours.",
  "final.cta":      "Free quote",
  "final.whatsapp": "Message on WhatsApp",

  "lang.de": "Deutsch",
  "lang.en": "English",
  "lang.tr": "Türkçe",
};

/* ──────────────────────────────────────────────────────────────
   TURKISH
────────────────────────────────────────────────────────────── */
const tr: Dict = {
  "nav.services":   "Hizmetler",
  "nav.regions":    "Bölgeler",
  "nav.prices":     "Fiyatlar",
  "nav.about":      "Hakkımızda",
  "nav.contact":    "İletişim",
  "nav.quote":      "Teklif al",
  "nav.blitz":      "Hızlı teklif",
  "nav.open_menu":  "Menüyü aç",
  "nav.close_menu": "Menüyü kapat",
  "nav.free_quote": "Ücretsiz teklif al",

  "nav.col.moving":   "Taşıma & Nakliyat",
  "nav.col.extra":    "Diğer hizmetler",
  "nav.col.packages": "Paketler",
  "nav.col.bw":       "Baden-Württemberg",
  "nav.col.rlp":      "Rheinland-Pfalz",
  "nav.col.metro":    "Metro bölge",

  "hero.overline": "Mannheim · Rhein-Neckar · 2009'dan beri",
  "hero.stars":    "4.9 · 312 doğrulanmış Google değerlendirmesi",
  "hero.h1_a":     "Taşınmanız.",
  "hero.h1_b":     "En iyi",
  "hero.h1_gold":  "ellerde.",
  "hero.sub":      "Sabit fiyat garantisi, sertifikalı profesyoneller ve ilk talepten son kutuya kadar kişisel destek — Mannheim'ın 15 yılı aşkın süredir güvendiği taşıma ortağı.",
  "hero.cta_primary":   "Ücretsiz teklif al",
  "hero.cta_secondary": "Hizmetlerimiz",
  "hero.cta_blitz":     "Hızlı teklif al",

  "hero.overline_m": "Mannheim · Rhein-Neckar · 2009'dan beri",
  "hero.sub_m":      "Sabit fiyat garantisi, sertifikalı profesyoneller — Mannheim'ın 15 yılı aşkın süredir güvendiği taşıma ortağı.",
  "hero.rating_m":   "4.9 · 312 değerlendirme",

  "trust.fixed":   "Sabit fiyat garantisi",
  "trust.insured": "Tam sigortalı",
  "trust.inspect": "Ücretsiz keşif",
  "trust.reply":   "24 saatte yanıt",

  "card.experience": "15+ yıl deneyim",
  "card.certified":  "Onaylı firma",
  "card.moves":      "Başarılı taşıma",

  "sticky.blitz": "Hızlı teklif",
  "sticky.call":  "Ara",

  "footer.strip_headline": "Taşınmaya hazır mısınız?",
  "footer.strip_sub":      "24 saatte ücretsiz sabit fiyat teklifi.",
  "footer.strip_cta":      "Teklif al",

  "footer.col_services": "Hizmetler",
  "footer.col_regions":  "Bölgeler",
  "footer.col_company":  "Şirket",
  "footer.col_trust":    "Neden biz",

  "footer.hours_label":  "Çalışma saatleri",
  "footer.hours_mf":     "Pzt – Cum",
  "footer.hours_sat":    "Cumartesi",
  "footer.hours_sun":    "Pazar",
  "footer.hours_closed": "Kapalı",

  "footer.trust_fixed":   "Sabit fiyat garantisi",
  "footer.trust_insured": "Tam sigortalı",

  "footer.trust_local":  "Yerel Mannheim ekibi",
  "footer.trust_ontime": "Dakiklik garantisi",
  "footer.trust_ins":    "Sigortalı nakliyat",
  "footer.trust_gdpr":   "KVKK uyumlu",
  "footer.trust_staff":  "Sertifikalı personel",
  "footer.trust_exp":    "15+ yıl deneyim",

  "footer.rights": "Tüm haklar saklıdır.",

  "final.label":    "Hemen başlayın",
  "final.h2_a":     "Stressiz taşınmaya",
  "final.h2_gold":  "hazır mısınız?",
  "final.sub":      "Şimdi ücretsiz, bağlayıcı olmayan teklifinizi isteyin. 24 saat içinde kişisel olarak size geri döneceğiz.",
  "final.cta":      "Ücretsiz teklif",
  "final.whatsapp": "WhatsApp'ta yaz",

  "lang.de": "Deutsch",
  "lang.en": "English",
  "lang.tr": "Türkçe",
};

export const translations: Record<Language, Dict> = { de, en, tr };

/** Resolve a key, falling back to German if the key is missing. */
export function resolve(lang: Language, key: string): string {
  return translations[lang][key] ?? translations["de"][key] ?? key;
}
