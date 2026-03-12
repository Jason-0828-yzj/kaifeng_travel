import { seasonalHighlight } from "@/data/seasonal";
import { Container } from "@/components/shared/container";

export function SeasonalBanner() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="panel overflow-hidden bg-[linear-gradient(135deg,rgba(139,46,39,0.95),rgba(75,27,23,0.92))] px-8 py-10 text-white sm:px-10 lg:px-14">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-4">
              <span className="eyebrow border-white/20 bg-white/10 text-white/80">Seasonal Note</span>
              <h2 className="ink-title text-3xl text-white sm:text-4xl">{seasonalHighlight.title}</h2>
              <p className="max-w-2xl text-sm leading-8 text-white/78 sm:text-base">{seasonalHighlight.description}</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/78">{seasonalHighlight.note}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
