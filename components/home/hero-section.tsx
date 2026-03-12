import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Map, MoonStar } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { homeHero } from "@/data/city";

export function HeroSection() {
  return (
    <section className="overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
      <Container>
        <div className="editorial-grid items-center gap-8 lg:gap-10">
          <Reveal className="space-y-8">
            <span className="eyebrow">开封旅行提要</span>
            <div className="space-y-5">
              <h1 className="ink-title max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{homeHero.title}</h1>
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
              <Badge variant="soft">1-2 天高效路线</Badge>
              <Badge variant="accent">夜游与美食推荐</Badge>
              <Badge>移动端快速决策</Badge>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="panel-strong relative overflow-hidden p-3 sm:p-4">
              <div className="relative h-[470px] overflow-hidden rounded-[26px] sm:h-[560px]">
                <Image
                  src="/images/kaifeng/hero/kaifeng-hero-main.svg"
                  alt="开封旅行主视觉"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,17,13,0.68)] via-[rgba(21,17,13,0.1)] to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
                  <div className="rounded-[20px] bg-white/14 px-4 py-3 text-white backdrop-blur-md">
                    <p className="text-xs tracking-[0.18em] text-white/70 uppercase">旅行重点</p>
                    <p className="mt-1 text-sm font-medium">宋韵氛围、路线效率、夜游记忆点</p>
                  </div>
                  <div className="hidden rounded-[20px] bg-white/14 px-4 py-3 text-right text-white backdrop-blur-md sm:block">
                    <p className="text-xs tracking-[0.18em] text-white/70 uppercase">编辑建议</p>
                    <p className="mt-1 text-sm font-medium">第一次来，建议先住一晚</p>
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
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {homeHero.stats.map((item) => (
              <div key={item.label} className="panel px-5 py-5 sm:px-6">
                <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
                <p className="mt-2 ink-title text-2xl">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
