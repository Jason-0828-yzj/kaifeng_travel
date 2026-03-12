import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import type { Attraction } from "@/types/attraction";
import { Badge } from "@/components/ui/badge";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Link href={`/attractions/${attraction.slug}`} className="group block">
      <article className="panel h-full overflow-hidden transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_80px_rgba(52,36,24,0.12)]">
        <div className="relative h-56 overflow-hidden">
          <Image src={attraction.heroImage} alt={attraction.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {attraction.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="soft">{tag}</Badge>
              ))}
            </div>
            <h3 className="ink-title text-2xl">{attraction.name}</h3>
            {attraction.subtitle ? <p className="text-sm text-[color:var(--muted)]">{attraction.subtitle}</p> : null}
          </div>
          <p className="text-sm leading-7 text-[color:var(--muted)]">{attraction.intro}</p>
          <div className="grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" />{attraction.recommendedDuration}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{attraction.location}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}
