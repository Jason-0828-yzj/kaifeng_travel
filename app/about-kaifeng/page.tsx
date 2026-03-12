import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { aboutKaifengSections } from "@/data/city";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
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
      <section className="pb-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="panel-strong p-6 sm:p-8">
              <p className="text-sm text-[color:var(--muted)]">开封的吸引力</p>
              <h2 className="mt-3 ink-title text-3xl">它不是高强度的目的地，而是一座适合慢慢进入状态的城。</h2>
            </article>
            <article className="panel-strong p-6 sm:p-8">
              <p className="text-sm leading-8 text-[color:var(--muted)]">
                很多人来到开封，最初是为了某个熟悉的名字，比如清明上河园、开封府或铁塔。但真正留下印象的，往往不是单一景点，而是整座城的气口：白天看得见历史轮廓，夜里又仍然保留日常烟火。
              </p>
            </article>
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {aboutKaifengSections.map((section) => (
              <article key={section.title} className="panel-strong p-6 sm:p-7">
                <h2 className="ink-title text-2xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">{section.content}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">适合怎样的旅行者</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">
                如果你喜欢那种既能看文化、又不用一直处在赶路状态的旅行方式，开封会很合适。它适合第一次来中原古城的人，也适合想把夜景、美食和步行节奏一起纳入考虑的人。
              </p>
            </article>
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">为什么仍然值得来</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">
                因为这里并不需要你花很多力气去“理解”。只要愿意走进园林、水岸、府衙、夜市和街巷之间，开封会自然把它的层次一点点交给你。
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
