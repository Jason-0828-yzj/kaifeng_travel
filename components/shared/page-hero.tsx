import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  children,
  compact = true
}: {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string[];
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12" : "pb-10 pt-24 sm:pb-14 sm:pt-32 lg:pb-16"}>
      <Container>
        <div className="panel-strong overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="space-y-5">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <div className="space-y-3">
                <h1 className="ink-title max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
                <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">{description}</p>
              </div>
              {meta?.length ? (
                <div className="flex flex-wrap gap-3">
                  {meta.map((item) => (
                    <Badge key={item} variant="soft">{item}</Badge>
                  ))}
                </div>
              ) : null}
            </div>
            {children ? <div className="rounded-[24px] border border-white/50 bg-white/66 p-5 shadow-sm lg:p-6">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
