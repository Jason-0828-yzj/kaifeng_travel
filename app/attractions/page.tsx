import { AttractionFilter } from "@/components/attractions/attraction-filter";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { attractions } from "@/data/attractions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "开封景点总览",
  description: "浏览开封核心景点、夜游片区与古城漫游选择，用筛选和搜索更快找到适合这次行程的搭配。",
  path: "/attractions"
});

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="景点筛选"
        title="把想去的景点先筛出来，再决定路线"
        description="如果你是第一次来开封，先从景点偏好开始会更高效。想看历史古迹、夜游氛围、文化场景还是夜市烟火，都可以先快速缩小范围。"
        meta={["图像优先浏览", "搜索与分类筛选", "适合移动端快速决策"]}
      />
      <section className="pb-16 sm:pb-20">
        <Container>
          <AttractionFilter attractions={attractions} />
        </Container>
      </section>
    </>
  );
}
