"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { startTransition, useState } from "react";
import type { Attraction } from "@/types/attraction";
import { Badge } from "@/components/ui/badge";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const overlayOpacity = useTransform(smoothY, [-0.5, 0.5], [0.16, 0.32]);
  const isQingming = attraction.slug === "qingming-riverside-garden";

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x);
    pointerY.set(y);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
    startTransition(() => setIsHovering(false));
  }

  return (
    <Link href={`/attractions/${attraction.slug}`} className="block h-full">
      <motion.article
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={resetPointer}
        style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="panel-strong group flex h-full flex-col overflow-hidden transition duration-300 hover:shadow-[0_28px_84px_rgba(52,36,24,0.16)]"
      >
        <div className="relative h-56 overflow-hidden">
          <motion.div className="absolute inset-0" style={prefersReducedMotion ? undefined : { x: imageX, y: imageY, scale: isHovering ? 1.06 : 1 }}>
            <Image src={attraction.heroImage} alt={attraction.name} fill className="object-cover" />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[rgba(24,18,14,0.46)] via-transparent to-transparent"
            style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {attraction.tags.slice(0, 2).map((tag) => (
              <motion.div
                key={tag}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4 }}
              >
                <Badge variant="soft" className="bg-white/88">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
          {isQingming ? (
            <div className="absolute bottom-4 left-4 rounded-[18px] border border-white/20 bg-[rgba(38,26,18,0.62)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              清明上河园
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
          <div className="space-y-2">
            <motion.div
              className="flex items-start justify-between gap-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <h3 className="ink-title text-2xl">{attraction.name}</h3>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted)] transition group-hover:text-[color:var(--primary)]" />
            </motion.div>
            {attraction.subtitle ? <p className="text-sm text-[color:var(--muted)]">{attraction.subtitle}</p> : null}
          </div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="line-clamp-3 text-sm leading-7 text-[color:var(--muted)]"
          >
            {attraction.intro}
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-auto grid gap-3 border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--muted)] sm:grid-cols-2"
          >
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[color:var(--primary)]" />{attraction.recommendedDuration}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--primary)]" />{attraction.location}</div>
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}
