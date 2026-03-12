import Link from "next/link";
import { footerContent } from "@/data/city";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/30 py-14">
      <Container>
        <div className="panel p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <p className="ink-title text-2xl">汴京行旅</p>
              <p className="max-w-md text-sm leading-7 text-[color:var(--muted)]">{footerContent.statement}</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">快速入口</p>
              <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)]">
                {footerContent.quickLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--foreground)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">联系占位</p>
              <p className="text-sm text-[color:var(--muted)]">{footerContent.contact}</p>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">社交占位</p>
              <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)]">
                {footerContent.social.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)]">{footerContent.copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
