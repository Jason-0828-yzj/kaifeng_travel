import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { itineraries } from "@/data/itineraries";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ItineraryCard } from "@/components/itineraries/itinerary-card";
import { Button } from "@/components/ui/button";
import { FeaturedItineraryStory } from "@/components/home/featured-itinerary-story";

export function ItineraryPreview() {
  const [featuredItinerary, ...otherItineraries] = itineraries;

  return (
    <section className="section-space">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="推荐路线"
            title="先决定怎么走，再决定把时间留给哪里"
            description="如果还没想好顺序，可以先从一条成熟路线进入。我们把第一天最容易出效果的动线做成了卷轴式展开，帮助你边看边判断节奏。"
          />
          <Button asChild variant="secondary">
            <Link href="/itineraries">
              查看全部路线
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <FeaturedItineraryStory itinerary={featuredItinerary} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {otherItineraries.map((item) => (
            <ItineraryCard key={item.slug} itinerary={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
