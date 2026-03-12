import { faqs } from "@/data/faq";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function FaqSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading eyebrow="FAQ" title="出发前常见问题" description="把最常见的决策点先回答掉，减少临出发前的纠结。" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="panel-strong p-6 sm:p-7">
              <h3 className="ink-title text-2xl">{item.question}</h3>
              <p className="mt-3 text-sm leading-8 text-[color:var(--muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
