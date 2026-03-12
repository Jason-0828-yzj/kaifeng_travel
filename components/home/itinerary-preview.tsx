import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { itineraries } from "@/data/itineraries";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ItineraryCard } from "@/components/itineraries/itinerary-card";
import { Button } from "@/components/ui/button";

export function ItineraryPreview() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Routes"
            title="三条路线，先帮你决定怎么逛"
            description="如果还没想好顺序，可以直接从现成路线开始。它们分别对应经典打卡、家庭轻松与夜游美食三种需求。"
          />
          <Button asChild variant="secondary">
            <Link href="/itineraries">
              查看全部路线
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {itineraries.map((item) => (
            <ItineraryCard key={item.slug} itinerary={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
