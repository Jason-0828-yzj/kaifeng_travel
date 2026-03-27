import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Attraction } from "@/types/attraction";

export function AttractionHero({ attraction }: { attraction: Attraction }) {
  const isQingming = attraction.slug === "qingming-riverside-garden";

  return (
    <section className="pb-8 pt-24 sm:pt-28 lg:pt-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <span className="eyebrow">景点细览</span>
            <div className="space-y-4">
              <h1 className="ink-title text-4xl leading-tight sm:text-5xl">{attraction.name}</h1>
              {attraction.subtitle ? <p className="text-lg text-[color:var(--muted)]">{attraction.subtitle}</p> : null}
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">{attraction.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {attraction.tags.map((tag) => (
                <Badge key={tag} variant="soft">{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="panel-strong overflow-hidden p-3">
            <div className="relative h-[340px] overflow-hidden rounded-[24px] sm:h-[420px]">
              <Image src={attraction.heroImage} alt={attraction.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,14,11,0.38)] via-transparent to-transparent" />
              {isQingming ? (
                <div className="absolute bottom-5 left-5 rounded-[18px] border border-white/20 bg-[rgba(38,26,18,0.62)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:bottom-6 sm:left-6">
                  清明上河园
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
