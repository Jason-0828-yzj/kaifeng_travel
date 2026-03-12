import { Landmark, Moon, ScrollText } from "lucide-react";
import { cityHighlights } from "@/data/city";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const icons = [ScrollText, Landmark, Moon];

export function HighlightsSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Why Kaifeng"
          title="第一次来，也能很快感受到这座城的节奏"
          description="它既有古都的文化密度，也有适合普通旅行者快速进入状态的路线清晰度。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cityHighlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} className="panel p-6 sm:p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(139,46,39,0.09)] text-[color:var(--primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 ink-title text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
