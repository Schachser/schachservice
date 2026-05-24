import type { Metadata } from "next";
import { HeroSection }             from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "https://schachservice.de" },
};
import { TrustBar }                from "@/components/sections/TrustBar";
import { PremiumProcessSection }   from "@/components/sections/PremiumProcessSection";
import { FeaturedServicesSection } from "@/components/sections/FeaturedServicesSection";
import { PackagesSection }         from "@/components/sections/PackagesSection";
import { WhySchachserviceSection } from "@/components/sections/WhySchachserviceSection";
import { RegionMapSection }        from "@/components/sections/RegionMapSection";
import { Testimonials }            from "@/components/sections/Testimonials";
import { FAQSection }              from "@/components/sections/FAQSection";
import { FinalCTA }                from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PremiumProcessSection />
      <FeaturedServicesSection />
      <PackagesSection />
      <WhySchachserviceSection />
      <RegionMapSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
