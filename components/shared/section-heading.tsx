import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  compact = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className={cn("space-y-3", compact && "space-y-2")}>
        <h2 className="ink-title text-3xl leading-tight sm:text-4xl lg:text-[2.8rem]">{title}</h2>
        {description ? (
          <p className={cn("max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8", align === "center" && "mx-auto")}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}