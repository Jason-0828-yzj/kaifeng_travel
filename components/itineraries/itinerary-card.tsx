import Image from "next/image";
import { Clock3, Users } from "lucide-react";
import type { Itinerary } from "@/types/itinerary";
import { Badge } from "@/components/ui/badge";

export function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <article className="panel overflow-hidden">
      <div className="relative h-56">
        <Image src={itinerary.coverImage} alt={itinerary.title} fill className="object-cover" />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {itinerary.tags.map((tag) => (
              <Badge key={tag} variant="soft">{tag}</Badge>
            ))}
          </div>
          <h3 className="ink-title text-2xl">{itinerary.title}</h3>
          <p className="text-sm text-[color:var(--muted)]">{itinerary.subtitle}</p>
        </div>
        <p className="text-sm leading-7 text-[color:var(--muted)]">{itinerary.summary}</p>
        <div className="grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
          <div className="flex items-center gap-2"><Users className="h-4 w-4" />{itinerary.audience}</div>
          <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" />{itinerary.duration}</div>
        </div>
      </div>
    </article>
  );
}
