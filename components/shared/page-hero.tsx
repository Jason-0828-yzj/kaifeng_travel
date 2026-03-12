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
    <section className="pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pt-32">
      <Container>
        <div className="panel-strong overflow-hidden px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div className="space-y-5">
              {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
              <div className="space-y-3">
                <h1 className="ink-title max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
                <p className="max-w-2xl text-sm leading-8 text-[color:var(--muted)] sm:text-base">{description}</p>
              </div>
              {meta?.length ? (
                <div className="flex flex-wrap gap-3">
                  {meta.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              ) : null}
            </div>
            {children ? <div className="rounded-[28px] border border-white/45 bg-white/70 p-5">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
