import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <div className="panel px-8 py-14 text-center sm:px-10">
          <p className="eyebrow mx-auto">404</p>
          <h1 className="mt-6 ink-title text-4xl">这页好像走散了</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-[color:var(--muted)]">你可以回到首页重新规划开封行程，或者直接去景点和路线页继续浏览。</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild><Link href="/">回到首页</Link></Button>
            <Button asChild variant="secondary"><Link href="/attractions">查看景点</Link></Button>
          </div>
        </div>
      </Container>
    </section>
  );
}