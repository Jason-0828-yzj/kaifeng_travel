import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { itineraries } from "@/data/itineraries";
import { ItineraryCard } from "@/components/itineraries/itinerary-card";
import { ItineraryTimeline } from "@/components/itineraries/itinerary-timeline";

export const metadata: Metadata = {
  title: "推荐路线",
  description: "用 1 日经典线、亲子轻松线和夜游美食线，帮你快速确定开封怎么玩。",
  openGraph: {
    title: "开封推荐路线 | 汴京行旅",
    description: "三条开封精选路线，适合第一次到访、家庭出游和夜游爱好者。",
    images: ["/images/kaifeng/hero/classic-route.svg"]
  }
};

export default function ItinerariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Itineraries"
        title="不必自己拼，从现成路线开始更快"
        description="如果你还没决定先去哪里，直接选一条路线会更轻松。下面三条分别照顾第一次来、家庭同行和偏爱夜景美食的不同需求。"
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
          <SectionHeading title="每条路线怎么走" description="保留清晰的时间块、交通建议和用餐建议，方便直接照着排。" />
          <div className="mt-8 space-y-8">
            {itineraries.map((item) => (
              <div key={item.slug} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="panel p-6 sm:p-8">
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