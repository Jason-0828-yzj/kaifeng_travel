import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import type { Attraction } from "@/types/attraction";
import { Badge } from "@/components/ui/badge";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link href={`/attractions/${attraction.slug}`} className="group block h-full">
      <article className="panel-strong flex h-full flex-col overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_80px_rgba(52,36,24,0.14)]">
        <div className="relative h-56 overflow-hidden">
          <Image src={attraction.heroImage} alt={attraction.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,18,14,0.42)] via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {attraction.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="soft" className="bg-white/85">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="ink-title text-2xl">{attraction.name}</h3>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted)] transition group-hover:text-[color:var(--primary)]" />
            </div>
            {attraction.subtitle ? <p className="text-sm text-[color:var(--muted)]">{attraction.subtitle}</p> : null}
          </div>
          <p className="line-clamp-3 text-sm leading-7 text-[color:var(--muted)]">{attraction.intro}</p>
          <div className="mt-auto grid gap-3 border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--muted)] sm:grid-cols-2">
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[color:var(--primary)]" />{attraction.recommendedDuration}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--primary)]" />{attraction.location}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}