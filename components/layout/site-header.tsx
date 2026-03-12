"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/data/city";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[rgba(248,242,233,0.72)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-sm font-semibold text-[color:var(--primary-foreground)] shadow-[0_16px_36px_rgba(139,46,39,0.22)]">
            汴
          </div>
          <div>
            <p className="ink-title text-lg">{siteConfig.name}</p>
            <p className="text-xs text-[color:var(--muted)]">一份更适合快速做决定的开封旅行指南</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "bg-white text-[color:var(--foreground)] shadow-sm" : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/itineraries">开始规划</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
