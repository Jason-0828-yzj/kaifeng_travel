import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-3">
        <h2 className="ink-title text-3xl leading-tight sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">{description}</p> : null}
      </div>
    </div>
  );
}
