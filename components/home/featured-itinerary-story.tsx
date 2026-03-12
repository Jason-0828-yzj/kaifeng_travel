"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MoveRight, Sparkles, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Itinerary } from "@/types/itinerary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedItineraryStory({ itinerary }: { itinerary: Itinerary }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stopRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const stops = stopRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!stops.length || !progressRef.current) return;

        gsap.set(stops, { opacity: 0.42, y: 36 });
        gsap.set(stops[0], { opacity: 1, y: 0 });

        gsap.to(progressRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=160",
            end: "bottom bottom-=140",
            scrub: true
          }
        });

        stops.forEach((stop, index) => {
          ScrollTrigger.create({
            trigger: stop,
            start: "top center+=80",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index)
          });

          gsap.to(stop, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stop,
              start: "top 82%"
            }
          });
        });
      });

      return () => media.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [itinerary.stops, prefersReducedMotion]);

  return (
    <div ref={sectionRef} className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <div className="panel-strong overflow-hidden">
          <div className="relative h-56 overflow-hidden">
            <Image src={itinerary.coverImage} alt={itinerary.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,18,14,0.68)] via-[rgba(24,18,14,0.18)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-sm text-white/70">卷轴式路线展开</p>
              <h3 className="mt-2 ink-title text-3xl text-white">{itinerary.title}</h3>
            </div>
          </div>
          <div className="space-y-5 p-6 sm:p-7">
            <div className="flex flex-wrap gap-2">
              {itinerary.tags.map((tag) => (
                <Badge key={tag} variant="soft" className="bg-[rgba(139,46,39,0.08)]">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm leading-8 text-[color:var(--muted)]">{itinerary.summary}</p>
            <div className="grid gap-3 text-sm text-[color:var(--muted)]">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[color:var(--primary)]" />
                {itinerary.audience}
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[color:var(--primary)]" />
                {itinerary.duration}
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-[color:var(--primary)]" />
                <span>{itinerary.recommendedReason}</span>
              </div>
            </div>

            <div className="rounded-[28px] border border-[color:var(--border)] bg-white/70 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-[color:var(--foreground)]">路线进度</p>
                <p className="text-sm text-[color:var(--muted)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(itinerary.stops.length).padStart(2, "0")}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-[32px_1fr] gap-4">
                <div className="relative flex justify-center">
                  <div className="h-full w-px rounded-full bg-[rgba(89,69,52,0.14)]" />
                  <div
                    ref={progressRef}
                    className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,rgba(139,46,39,0.95),rgba(212,176,111,0.65))]"
                    style={{ transform: "translateX(-50%) scaleY(0)" }}
                  />
                </div>
                <div className="space-y-5">
                  {itinerary.stops.map((stop, index) => (
                    <div key={`${itinerary.slug}-nav-${stop.time}`} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 rounded-full border transition-colors duration-300",
                          index <= activeIndex
                            ? "border-[color:var(--primary)] bg-[color:var(--primary)]"
                            : "border-[rgba(89,69,52,0.25)] bg-[rgba(255,255,255,0.75)]"
                        )}
                      />
                      <div>
                        <p className="text-xs text-[color:var(--muted)]">{stop.time}</p>
                        <p
                          className={cn(
                            "mt-1 text-sm transition-colors duration-300",
                            index === activeIndex ? "text-[color:var(--foreground)]" : "text-[color:var(--muted)]"
                          )}
                        >
                          {stop.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/itineraries">
                去看完整路线
                <MoveRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-5 lg:space-y-8">
        {itinerary.stops.map((stop, index) => (
          <motion.article
            key={`${itinerary.slug}-${stop.time}`}
            ref={(node) => {
              stopRefs.current[index] = node;
            }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="panel-strong overflow-hidden p-6 sm:p-8 lg:min-h-[64svh]"
          >
            <div className="grid gap-6 lg:grid-cols-[112px_1fr]">
              <div className="space-y-3">
                <p className="rounded-full bg-[rgba(139,46,39,0.1)] px-3 py-1 text-center text-sm font-medium text-[color:var(--primary)]">
                  {stop.time}
                </p>
                <div className="hidden text-sm leading-7 text-[color:var(--muted)] lg:block">
                  第 {index + 1} 站
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="ink-title text-3xl">{stop.title}</h3>
                  <p className="text-sm leading-8 text-[color:var(--muted)]">{stop.detail}</p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {stop.transport ? (
                    <div className="rounded-[24px] bg-white/72 px-4 py-4 text-sm leading-7 text-[color:var(--muted)]">
                      交通建议：{stop.transport}
                    </div>
                  ) : null}
                  {stop.mealSuggestion ? (
                    <div className="rounded-[24px] bg-white/72 px-4 py-4 text-sm leading-7 text-[color:var(--muted)]">
                      用餐建议：{stop.mealSuggestion}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
