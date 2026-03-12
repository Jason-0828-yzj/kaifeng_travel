import { MapPinned } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { MapPlaceholder } from "@/components/shared/map-placeholder";
import { faqs } from "@/data/faq";
import { travelTipSections } from "@/data/city";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "出行指南",
  description: "集中查看怎么到开封、什么时候去、住哪里更方便，以及第一次来更适合怎么安排。",
  path: "/travel-tips",
  image: "/images/kaifeng/hero/family-route.svg"
});

const groups = [
  { title: "怎么到开封", items: travelTipSections.arrivals },
  { title: "什么时候去更舒服", items: travelTipSections.bestSeason },
  { title: "建议玩几天", items: travelTipSections.duration },
  { title: "住哪里更方便", items: travelTipSections.stays },
  { title: "常见提醒", items: travelTipSections.reminders }
];

export default function TravelTipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Tips"
        title="把出发前真正需要知道的事集中看完"
        description="这一页优先回答最影响决策的问题：怎么到、什么时候去、住哪里更顺、第一次来应该怎么安排。"
        meta={["交通建议", "住宿片区", "季节提醒"]}
      >
        <div className="space-y-3 text-sm leading-7 text-[color:var(--muted)]">
          <div className="flex items-start gap-3"><MapPinned className="mt-1 h-4 w-4 text-[color:var(--primary)]" />建议优先围绕鼓楼、龙亭湖和清明上河园周边安排行程与住宿。</div>
          <div className="flex items-start gap-3"><MapPinned className="mt-1 h-4 w-4 text-[color:var(--primary)]" />若计划夜游，请把返程交通和演出时间一起考虑。</div>
        </div>
      </PageHero>
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {groups.map((group) => (
                <article key={group.title} className="panel-strong p-6">
                  <h2 className="ink-title text-2xl">{group.title}</h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                    {group.items.map((item) => (
                      <p key={item} className="rounded-[20px] bg-white/70 px-4 py-3">{item}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <MapPlaceholder />
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="panel-strong p-6 sm:p-8">
            <h2 className="ink-title text-3xl">FAQ</h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {faqs.slice(0, 4).map((item) => (
                <article key={item.question} className="rounded-[24px] bg-white/70 p-5">
                  <h3 className="ink-title text-xl">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}