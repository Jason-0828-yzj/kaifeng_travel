"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/data/city";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="打开导航"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/80"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(29,26,23,0.35)] px-4 py-6"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="ml-auto flex min-h-full w-full max-w-sm flex-col rounded-[32px] bg-[rgba(250,246,240,0.98)] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="ink-title text-xl">汴京行旅</p>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">更适合移动端快速决策的开封旅行指南</p>
                </div>
                <button
                  type="button"
                  aria-label="关闭导航"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-transparent bg-white/70 px-4 py-4 text-base text-[color:var(--foreground)] transition hover:border-[color:var(--border)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Button asChild className="mt-6 w-full">
                <Link href="/itineraries" onClick={() => setOpen(false)}>
                  开始规划行程
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
