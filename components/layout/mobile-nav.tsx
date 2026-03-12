"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, siteConfig } from "@/data/city";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="打开导航"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/85 shadow-sm"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(29,26,23,0.42)] px-4 py-5"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="ml-auto flex min-h-full w-full max-w-sm flex-col rounded-[32px] bg-[rgba(250,246,240,0.98)] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="ink-title text-xl">{siteConfig.name}</p>
                  <p className="mt-1 text-sm leading-7 text-[color:var(--muted)]">适合移动端快速决策的开封旅行网站，先看路线，再决定把时间留给哪里。</p>
                </div>
                <button
                  type="button"
                  aria-label="关闭导航"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/70"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 rounded-[24px] bg-white/70 p-4 text-sm leading-7 text-[color:var(--muted)]">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(139,46,39,0.1)] text-[color:var(--primary)]">
                  <Compass className="h-4 w-4" />
                </div>
                <p>{siteConfig.location}</p>
                <p>建议优先浏览推荐路线，再回到景点页做取舍。</p>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl border border-transparent bg-white/70 px-4 py-4 transition hover:border-[color:var(--border)]",
                        "text-[color:var(--foreground)]"
                      )}
                    >
                      <span className="block text-base font-medium">{item.label}</span>
                      <span className="mt-1 block text-sm text-[color:var(--muted)]">{item.description}</span>
                    </Link>
                  </motion.div>
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