import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Attraction } from "@/types/attraction";

export function AttractionHero({ attraction }: { attraction: Attraction }) {
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
