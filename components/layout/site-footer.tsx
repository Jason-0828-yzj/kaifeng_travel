import Link from "next/link";
import { footerContent, siteConfig } from "@/data/city";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/30 py-14 sm:py-16">
      <Container>
        <div className="panel-strong p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.85fr_0.95fr]">
            <div className="space-y-4">
              <p className="ink-title text-2xl">{siteConfig.name}</p>
              <p className="max-w-md text-sm leading-7 text-[color:var(--muted)]">{footerContent.statement}</p>
              <div className="rounded-[20px] bg-white/70 px-4 py-4 text-sm leading-7 text-[color:var(--muted)]">
                <p className="font-medium text-[color:var(--foreground)]">站点说明</p>
                <p className="mt-2">当前版本基于本地 mock data 构建，适合静态部署和作品集展示，后续可平滑接入 CMS 或多语言内容源。</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">快速入口</p>
              <div className="grid gap-3 text-sm text-[color:var(--muted)]">
                {footerContent.quickLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--foreground)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[color:var(--foreground)]">{footerContent.contactLabel}</p>
              <p className="text-sm leading-7 text-[color:var(--muted)]">{footerContent.contact}</p>
              <div className="space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                {footerContent.social.map((item) => (
                  <p key={item}>{item}</p>
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