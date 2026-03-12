import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-full border border-[color:var(--border)] bg-white/85 px-4 py-3 text-sm text-[color:var(--foreground)] shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
