import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { nightExperience } from "@/data/city";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function NightTourSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="panel-strong overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[320px]">
              <Image src="/images/kaifeng/hero/night-river.svg" alt="开封夜游水岸夜景" fill className="object-cover" />
            </div>
            <div className="space-y-6 p-8 sm:p-10 lg:p-12">
              <span className="eyebrow">夜游看点</span>
              <div className="space-y-4">
                <h2 className="ink-title text-3xl leading-tight sm:text-4xl">{nightExperience.title}</h2>
                <p className="text-sm leading-8 text-[color:var(--muted)] sm:text-base">{nightExperience.description}</p>
              </div>
              <div className="grid gap-3">
                {nightExperience.bullets.map((item) => (
                  <div key={item} className="rounded-[24px] bg-white/70 px-4 py-4 text-sm text-[color:var(--foreground)]">{item}</div>
                ))}
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
    </section>
  );
}
