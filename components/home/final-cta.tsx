import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="pb-16 pt-8 sm:pb-20 sm:pt-10">
      <Container>
        <div className="panel-strong px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow">Ready to Plan</span>
              <h2 className="ink-title text-3xl sm:text-4xl">先决定路线，再决定停留的节奏</h2>
              <p className="max-w-2xl text-sm leading-8 text-[color:var(--muted)] sm:text-base">如果你只准备来一次，就优先看经典线；如果更在意夜色、表演和美食，就从夜游线开始。把路线先定下来，开封会更好逛。</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button asChild size="lg"><Link href="/itineraries">开始规划行程</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/attractions">查看必去景点<ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}