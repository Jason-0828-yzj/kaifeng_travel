import type { Itinerary } from "@/types/itinerary";

export function ItineraryTimeline({ itinerary }: { itinerary: Itinerary }) {
  return (
    <div className="panel p-6 sm:p-8">
      <div className="space-y-6">
        {itinerary.stops.map((stop, index) => (
          <div key={`${itinerary.slug}-${stop.time}`} className="grid gap-4 sm:grid-cols-[96px_1fr]">
            <div className="flex items-start gap-3 sm:block">
              <div className="rounded-full bg-[rgba(139,46,39,0.1)] px-3 py-1 text-sm font-medium text-[color:var(--primary)]">{stop.time}</div>
              {index !== itinerary.stops.length - 1 ? <div className="ml-5 mt-3 hidden h-full w-px bg-[color:var(--border)] sm:block" /> : null}
            </div>
            <div className="rounded-[24px] bg-white/70 p-5">
              <h4 className="ink-title text-xl">{stop.title}</h4>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{stop.detail}</p>
              {stop.transport ? <p className="mt-3 text-sm text-[color:var(--muted)]">交通建议：{stop.transport}</p> : null}
              {stop.mealSuggestion ? <p className="mt-2 text-sm text-[color:var(--muted)]">用餐建议：{stop.mealSuggestion}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
