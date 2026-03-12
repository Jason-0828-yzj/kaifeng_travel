import { practicalTipCards } from "@/data/city";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function TipsSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="出行判断"
          title="做决定前，先看这几条就够了"
          description="如果是第一次来开封，不必先读很多攻略。先用几条高频问题建立判断，再去选景点和路线会更轻松。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {practicalTipCards.map((item) => (
            <article key={item.title} className="panel-strong p-6">
              <h3 className="ink-title text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
