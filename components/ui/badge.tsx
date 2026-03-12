import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors",
  {
    variants: {
      variant: {
        default: "border-[color:var(--border)] bg-white/70 text-[color:var(--foreground)]",
        soft: "border-transparent bg-[rgba(139,46,39,0.08)] text-[color:var(--primary)]",
        accent: "border-transparent bg-[rgba(123,139,121,0.14)] text-[#425143]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
