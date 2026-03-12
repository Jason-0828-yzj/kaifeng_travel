import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Map, MoonStar } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { homeHero } from "@/data/city";

export function HeroSection() {
  return (
    <section className="overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pb-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-8">
            <span className="eyebrow">Kaifeng Travel Editorial</span>
            <div className="space-y-5">
              <h1 className="ink-title max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">{homeHero.title}</h1>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">{homeHero.subtitle}</p>
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
              <Badge>移动端友好浏览</Badge>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="panel relative overflow-hidden p-3">
              <div className="relative h-[430px] overflow-hidden rounded-[24px] sm:h-[520px]">
                <Image
                  src="/images/kaifeng/hero/kaifeng-hero-main.svg"
                  alt="开封主视觉占位图"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(21,17,13,0.62)] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
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
                      <p className="text-sm text-white/80">城市气质</p>
                      <p className="mt-1 text-lg font-semibold text-white">古都厚度与烟火日常</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
