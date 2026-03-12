import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { aboutKaifengSections } from "@/data/city";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "认识开封",
  description: "从古都尺度、宋文化氛围与城市日常出发，理解为什么今天的旅行者仍会被开封打动。",
  path: "/about-kaifeng"
});

export default function AboutKaifengPage() {
  return (
    <>
      <PageHero
        eyebrow="城市故事"
        title="为什么今天的人，仍然会被开封打动"
        description="它不是一座只适合背历史的城市。真正让人记住开封的，往往是古都的尺度、宋风的生活感，以及夜晚亮起来以后那种亲近而不张扬的气质。"
        meta={["古都身份", "宋文化氛围", "现代旅行吸引力"]}
      />
      <section className="pb-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">开封的迷人，不只因为它曾是都城</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">更重要的是，这座城依然保留着一种适合步行、停留和慢慢体会的尺度。你不会觉得自己在一个巨大景区里赶场，而是在一座仍有生活感的古城中移动。景点、老街、夜市与湖水之间的距离刚刚好，既有文化厚度，也给普通旅行者留出了喘息感。</p>
            </article>
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">它的宋风，是可以被走进的</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">有些城市的历史只存在于展板和说明里，开封更像把它们放进了日常。园林、府衙、寺塔、汴河和夜市一起工作，让旅行者不是“读到”历史，而是“进入”一种氛围。</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutKaifengSections.map((section) => (
              <article key={section.title} className="panel-strong p-6 sm:p-7">
                <h2 className="ink-title text-2xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">{section.content}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="panel-strong p-6 sm:p-8">
            <h2 className="ink-title text-3xl">所以它特别适合什么样的旅行者</h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-[color:var(--muted)]">如果你喜欢一座城市同时提供文化线索、步行友好感和夜晚的情绪价值，开封会很容易让人产生好感。它不会逼着你做很多功课，却能在一天到两天的停留里，给出足够完整的体验层次。</p>
          </div>
        </Container>
      </section>
    </>
  );
}
