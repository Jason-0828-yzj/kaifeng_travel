import { Clock3, Lightbulb, MapPinned, Ticket } from "lucide-react";
import type { Attraction } from "@/types/attraction";

export function AttractionHighlights({ attraction }: { attraction: Attraction }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <article className="panel p-6 sm:p-8">
        <h2 className="ink-title text-3xl">这一站值得怎么逛</h2>
        <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">{attraction.longDescription}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {attraction.highlights.map((item) => (
            <div key={item} className="rounded-[24px] bg-white/70 p-4 text-sm leading-7 text-[color:var(--foreground)]">
              {item}
            </div>
          ))}
        </div>
      </article>

      <div className="space-y-6">
        <article className="panel p-6">
          <div className="grid gap-5 text-sm text-[color:var(--muted)]">
            <div className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 text-[color:var(--primary)]" /><div><p className="font-medium text-[color:var(--foreground)]">建议停留</p><p>{attraction.recommendedDuration}</p></div></div>
            <div className="flex gap-3"><Lightbulb className="mt-0.5 h-4 w-4 text-[color:var(--primary)]" /><div><p className="font-medium text-[color:var(--foreground)]">更推荐的时段</p><p>{attraction.bestVisitTime}</p></div></div>
            <div className="flex gap-3"><MapPinned className="mt-0.5 h-4 w-4 text-[color:var(--primary)]" /><div><p className="font-medium text-[color:var(--foreground)]">位置提示</p><p>{attraction.location}</p></div></div>
            <div className="flex gap-3"><Ticket className="mt-0.5 h-4 w-4 text-[color:var(--primary)]" /><div><p className="font-medium text-[color:var(--foreground)]">票务提醒</p><p>{attraction.ticketHint}</p></div></div>
          </div>
        </article>
        <article className="panel p-6">
          <h3 className="ink-title text-2xl">旅行提示</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
            {attraction.tips.map((tip) => (
              <li key={tip} className="rounded-[20px] bg-white/70 px-4 py-3">{tip}</li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
