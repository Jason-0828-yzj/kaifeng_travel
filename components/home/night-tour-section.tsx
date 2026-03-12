"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { nightExperience } from "@/data/city";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function NightTourSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const duskOpacity = useTransform(scrollYProgress, [0, 0.28, 0.8], [0.02, 0.26, 0.8]);
  const skyShift = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [30, -30]);
  const shimmerOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85], [0.08, 0.36, 0.7]);
  const lanternOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85], [0, 0.65, 0.92]);

  return (
    <motion.section ref={sectionRef} className="relative isolate py-14 sm:py-16 lg:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(244,235,222,0.18),rgba(27,24,34,0.92))]"
        style={{ opacity: duskOpacity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10%] h-[18rem] bg-[radial-gradient(circle_at_top,rgba(255,218,155,0.28),transparent_52%)] blur-3xl"
        style={{ y: skyShift }}
      />
      <Container>
        <div className="panel-strong relative overflow-hidden border-[rgba(255,255,255,0.18)] bg-[linear-gradient(180deg,rgba(253,247,239,0.95),rgba(28,25,33,0.94))]">
          <div className="absolute inset-0 paper-grain opacity-40" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(246,184,84,0.2),transparent_26%),radial-gradient(circle_at_18%_18%,rgba(255,248,228,0.14),transparent_32%)]"
            style={{ opacity: lanternOpacity }}
          />
          <div className="relative grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <motion.div className="absolute inset-0" style={{ y: skyShift }}>
                <Image src="/images/kaifeng/hero/night-river.svg" alt="开封夜游水岸夜景" fill className="object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,16,20,0.2)] via-transparent to-transparent" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[16%] left-[8%] h-16 w-[78%] overflow-hidden rounded-full"
                style={{ opacity: shimmerOpacity }}
              >
                <div className="river-shimmer h-full w-[180%]" />
              </motion.div>
              <motion.div
                aria-hidden
                className="lantern-glow pointer-events-none absolute left-[14%] top-[16%] h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(255,213,125,0.58),rgba(255,213,125,0.08)_42%,transparent_72%)] blur-sm"
                style={{ opacity: lanternOpacity }}
              />
              <motion.div
                aria-hidden
                className="lantern-glow pointer-events-none absolute right-[18%] top-[22%] h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(255,183,96,0.5),rgba(255,183,96,0.08)_45%,transparent_72%)] blur-sm"
                style={{ opacity: lanternOpacity }}
              />
            </div>
            <div className="relative space-y-6 p-8 text-white sm:p-10 lg:p-12">
              <span className="eyebrow border-white/12 bg-white/8 text-white/75">夜游看点</span>
              <div className="space-y-4">
                <h2 className="ink-title text-3xl leading-tight text-white sm:text-4xl">{nightExperience.title}</h2>
                <p className="max-w-2xl text-sm leading-8 text-white/72 sm:text-base">{nightExperience.description}</p>
              </div>
              <div className="grid gap-3">
                {nightExperience.bullets.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-[24px] border border-white/10 bg-white/8 px-4 py-4 text-sm text-white/90 backdrop-blur-md"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/7 p-5 text-sm leading-8 text-white/72">
                从白天的景点动线进入夜晚的水岸与灯影，是开封最容易形成“记忆点”的过渡方式。
              </div>
              <Button asChild>
                <Link href="/itineraries">
                  去看夜游路线
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
