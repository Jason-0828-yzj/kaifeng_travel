"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
