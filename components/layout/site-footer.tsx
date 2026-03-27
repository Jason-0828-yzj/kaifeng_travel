import Link from "next/link";
import { footerContent } from "@/data/city";
import { photoCredits } from "@/data/photo-credits";
import { Container } from "@/components/shared/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/30 py-14">
      <Container>
        <div className="panel-strong p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
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
              <p className="text-sm font-semibold text-[color:var(--foreground)]">使用说明</p>
              <div className="space-y-3 text-sm text-[color:var(--muted)]">
                {footerContent.notes.map((item) => (
                  <p key={item} className="rounded-[20px] bg-white/70 px-4 py-3">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <details className="mt-8 rounded-[24px] border border-[color:var(--border)] bg-white/55 p-5 text-sm text-[color:var(--muted)]">
            <summary className="cursor-pointer font-medium text-[color:var(--foreground)]">图片来源</summary>
            <p className="mt-3 leading-7">本版已替换部分景点实拍图，来源均为 Wikimedia Commons；对应许可与作者信息请以各来源页为准。</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {photoCredits.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1.5 transition hover:text-[color:var(--foreground)]"
                >
                  {item.label} · {item.source}
                </a>
              ))}
            </div>
          </details>

          <div className="mt-10 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)]">{footerContent.copyright}</div>
        </div>
      </Container>
    </footer>
  );
}
