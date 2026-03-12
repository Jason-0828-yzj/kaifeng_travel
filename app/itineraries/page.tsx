import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { itineraries } from "@/data/itineraries";
import { ItineraryCard } from "@/components/itineraries/itinerary-card";
import { ItineraryTimeline } from "@/components/itineraries/itinerary-timeline";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "推荐路线",
  description: "用一日经典线、亲子轻松线和夜游美食线，帮助你更快决定开封该怎么安排。",
  path: "/itineraries",
  image: "/images/kaifeng/hero/classic-route.svg"
});

export default function ItinerariesPage() {
  return (
    <>
      <PageHero
        eyebrow="推荐路线"
        title="不必自己拼，从现成路线开始更快"
        description="如果你还没决定先去哪里，直接选一条路线会更轻松。下面三条分别照顾第一次来访、家庭同行和偏爱夜景美食的不同需求。"
        meta={["一日经典宋文化线", "亲子轻松游", "夜游美食线"]}
      />
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {itineraries.map((item) => (
              <ItineraryCard key={item.slug} itinerary={item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <SectionHeading title="每条路线怎么走" description="保留清晰的时间块、交通建议和用餐建议，方便直接照着安排。" />
          <div className="mt-8 space-y-8">
            {itineraries.map((item) => (
              <div key={item.slug} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="panel-strong p-6 sm:p-8">
                  <h2 className="ink-title text-3xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-8 text-[color:var(--muted)]">{item.summary}</p>
                  <div className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                    <p>适合谁：{item.audience}</p>
                    <p>预计时长：{item.duration}</p>
                    <p>推荐理由：{item.recommendedReason}</p>
                  </div>
                </div>
                <ItineraryTimeline itinerary={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
