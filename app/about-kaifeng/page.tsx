import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { aboutKaifengSections } from "@/data/city";

export const metadata: Metadata = {
  title: "认识开封",
  description: "从古都尺度、宋文化氛围与城市日常出发，理解为什么今天的旅行者仍会被开封打动。",
  openGraph: {
    title: "认识开封 | 汴京行旅",
    description: "一篇更适合现代旅行者阅读的开封城市短叙事。",
    images: ["/images/kaifeng/hero/kaifeng-hero-main.svg"]
  }
};

export default function AboutKaifengPage() {
  return (
    <>
      <PageHero
        eyebrow="City Story"
        title="为什么今天的人，仍然会被开封打动"
        description="它不是一座只适合背历史的城市。真正让人记住开封的，往往是古都的尺度、宋风的生活感，以及夜晚亮起来以后那种亲近而不张扬的气质。"
        meta={["古都身份", "宋文化氛围", "现代旅行吸引力"]}
      />
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutKaifengSections.map((section) => (
              <article key={section.title} className="panel p-6 sm:p-7">
                <h2 className="ink-title text-2xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">{section.content}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}