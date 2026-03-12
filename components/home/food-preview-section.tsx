import Link from "next/link";
import { foodScenarios } from "@/data/city";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function FoodPreviewSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Food"
            title="在开封，吃本身就是旅行体验的一部分"
            description="这里的味道不只是菜名，更是动线的一部分。正餐、小吃、夜市和临时补给，都能自然嵌进一天的行程里。"
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {foodScenarios.map((item) => (
              <article key={item.title} className="panel p-6">
                <h3 className="ink-title text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Button asChild variant="secondary">
            <Link href="/food">查看开封美食</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
