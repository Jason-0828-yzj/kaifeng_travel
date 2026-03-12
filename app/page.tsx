import type { Metadata } from "next";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedAttractions } from "@/components/home/featured-attractions";
import { FinalCta } from "@/components/home/final-cta";
import { FoodPreviewSection } from "@/components/home/food-preview-section";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { ItineraryPreview } from "@/components/home/itinerary-preview";
import { NightTourSection } from "@/components/home/night-tour-section";
import { SeasonalBanner } from "@/components/home/seasonal-banner";
import { TipsSection } from "@/components/home/tips-section";
import { siteConfig } from "@/data/city";

export const metadata: Metadata = {
  title: "开封旅游指南",
  description: "一站了解开封的宋韵氛围、必去景点、推荐路线、夜游体验、美食与实用出行建议。",
  openGraph: {
    title: "开封旅游指南 | 汴京行旅",
    description: "用更现代的旅行视角整理开封的景点、路线、夜游和在地味道。",
    url: siteConfig.siteUrl,
    images: [siteConfig.ogImage]
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedAttractions />
      <ItineraryPreview />
      <NightTourSection />
      <FoodPreviewSection />
      <SeasonalBanner />
      <TipsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}