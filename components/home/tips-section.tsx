import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { practicalTipCards } from "@/data/city";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function TipsSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="出行提示"
            title="做决定前，先看这几条就够了"
            description="如果是第一次来开封，不必先读很多攻略。先用几条高频问题建立判断，再去选景点和路线会更轻松。"
          />
          <Button asChild variant="secondary">
            <Link href="/travel-tips">
              查看完整出行指南
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
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
