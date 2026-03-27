"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Map, MoonStar } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { homeHero } from "@/data/city";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.3
  });

  const textY = useTransform(springProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 84]);
  const textOpacity = useTransform(springProgress, [0, 0.8], [1, 0.8]);
  const imageY = useTransform(springProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -92]);
  const imageScale = useTransform(springProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.08]);
  const atmosphereY = useTransform(springProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -150]);
  const veilOpacity = useTransform(springProgress, [0, 0.9], [0.12, 0.36]);
  const ribbonScale = useTransform(springProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.92, 1.12]);
  const statsY = useTransform(springProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -28]);

  return (
    <motion.section ref={sectionRef} className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
      <motion.div
        aria-hidden
        className="paper-grain pointer-events-none absolute inset-x-0 top-0 h-[44rem] opacity-60"
        style={{ y: atmosphereY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-[28rem] w-[88%] max-w-6xl rounded-[48px] bg-[radial-gradient(circle_at_top,_rgba(212,176,111,0.22),_transparent_58%),radial-gradient(circle_at_20%_35%,_rgba(123,139,121,0.14),_transparent_32%),linear-gradient(180deg,rgba(255,248,238,0.7),transparent)] blur-3xl"
        style={{ y: atmosphereY }}
      />

      <Container>
        <div className="editorial-grid items-center gap-8 lg:gap-10">
          <motion.div className="relative z-10 space-y-8" style={{ y: textY, opacity: textOpacity }}>
            <span className="eyebrow">开封旅行提要</span>
            <div className="space-y-5">
              <div className="relative inline-block">
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[-5%] top-1/2 h-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,46,39,0.12),_transparent_68%)] blur-2xl"
                  style={{ scale: ribbonScale }}
                />
                <h1 className="ink-title relative max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{homeHero.title}</h1>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">{homeHero.subtitle}</p>
              <p className="max-w-xl rounded-[24px] border border-white/50 bg-white/60 px-5 py-4 text-sm leading-7 text-[color:var(--muted)]">
                {homeHero.editorialNote}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={homeHero.primaryCta.href}>
                  {homeHero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={homeHero.secondaryCta.href}>{homeHero.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="soft">1 到 2 天高效路线</Badge>
              <Badge variant="accent">夜游与美食推荐</Badge>
              <Badge>移动端快速决策</Badge>
            </div>
          </motion.div>

          <motion.div className="relative" style={{ y: imageY, scale: imageScale }}>
            <div className="panel-strong relative overflow-hidden p-3 sm:p-4">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,224,0.16),_transparent_42%),linear-gradient(180deg,rgba(29,26,23,0.08),transparent)]"
                style={{ opacity: veilOpacity }}
              />
              <div className="relative h-[500px] overflow-hidden rounded-[26px] sm:h-[580px]">
                <motion.div className="absolute inset-0" style={{ y: atmosphereY }}>
                  <Image
                    src="/images/kaifeng/hero/kaifeng-hero-main.jpg"
                    alt="开封旅行主视觉"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,17,13,0.68)] via-[rgba(21,17,13,0.12)] to-transparent" />
                <div className="absolute inset-x-[9%] bottom-[18%] h-14 overflow-hidden rounded-full opacity-75">
                  <div className="river-shimmer h-full w-[180%]" />
                </div>
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
                  <div className="rounded-[20px] bg-white/14 px-4 py-3 text-white backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/70">旅行重点</p>
                    <p className="mt-1 text-sm font-medium">宋韵氛围、路线效率、夜游记忆点</p>
                  </div>
                  <div className="lantern-glow hidden rounded-[20px] bg-white/14 px-4 py-3 text-right text-white backdrop-blur-md sm:block">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/70">编辑建议</p>
                    <p className="mt-1 text-sm font-medium">第一次来，建议至少住一晚</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[24px] bg-white/14 p-5 text-white backdrop-blur-md">
                      <p className="text-sm text-white/75">怎么用这份网站</p>
                      <p className="mt-2 text-xl font-semibold">先看路线，再回到景点页做删减，会比从零查攻略轻松很多。</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[20px] bg-white/14 p-4 backdrop-blur-md">
                        <Map className="mb-3 h-5 w-5 text-white" />
                        <p className="text-sm text-white/80">核心景点</p>
                        <p className="mt-1 text-lg font-semibold text-white">一线串联更高效</p>
                      </div>
                      <div className="rounded-[20px] bg-white/14 p-4 backdrop-blur-md">
                        <MoonStar className="mb-3 h-5 w-5 text-white" />
                        <p className="text-sm text-white/80">夜间体验</p>
                        <p className="mt-1 text-lg font-semibold text-white">灯影、水岸、夜市</p>
                      </div>
                      <div className="rounded-[20px] bg-white/14 p-4 backdrop-blur-md">
                        <Clock3 className="mb-3 h-5 w-5 text-white" />
                        <p className="text-sm text-white/80">建议节奏</p>
                        <p className="mt-1 text-lg font-semibold text-white">白天看城，晚上入戏</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-8" style={{ y: statsY }}>
          <div className="grid gap-4 md:grid-cols-3">
            {homeHero.stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel px-5 py-5 sm:px-6"
              >
                <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
                <p className="mt-2 ink-title text-2xl">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}

