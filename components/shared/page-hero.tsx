import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  children
}: {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="pb-10 pt-24 sm:pb-14 sm:pt-32 lg:pb-16">
      <Container>
        <div className="panel-strong overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="space-y-7">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <div className="space-y-4">
                <h1 className="ink-title max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
                <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">{description}</p>
              </div>
              {meta?.length ? (
                <div className="flex flex-wrap gap-3">
                  {meta.map((item) => (
                    <Badge key={item} variant="soft">{item}</Badge>
                  ))}
                </div>
              ) : null}
            </div>
            {children ? <div className="rounded-[28px] border border-white/50 bg-white/66 p-6 shadow-sm">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}