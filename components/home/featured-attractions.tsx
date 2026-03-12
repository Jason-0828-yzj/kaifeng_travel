import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { attractions } from "@/data/attractions";
import { AttractionCard } from "@/components/attractions/attraction-card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function FeaturedAttractions() {
  const featured = attractions.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="section-space">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="精选景点"
            title="先从这 6 站开始理解开封"
            description="它们足够代表开封，也足够适合第一次来的人快速建立判断：哪些景点适合白天，哪些更适合留到夜里。"
          />
          <Button asChild variant="secondary">
            <Link href="/attractions">
              浏览全部景点
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item) => (
            <AttractionCard key={item.slug} attraction={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
