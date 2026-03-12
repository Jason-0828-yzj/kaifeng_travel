import { AttractionFilter } from "@/components/attractions/attraction-filter";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { attractions } from "@/data/attractions";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "景点总览",
  description: "浏览开封核心景点、夜游片区与古城漫游选择，用筛选和搜索快速找到适合你的路线。",
  path: "/attractions"
});

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Attractions"
        title="把想去的景点先筛出来，再决定路线"
        description="如果你是第一次来开封，先从景点偏好开始会更高效。想看历史古迹、夜游氛围、文化场景，还是夜市烟火，都可以先快速缩小范围。"
        meta={["图像优先浏览", "搜索与分类筛选", "支持移动端快速决策"]}
      />
      <section className="pb-16 sm:pb-20">
        <Container>
          <AttractionFilter attractions={attractions} />
        </Container>
      </section>
    </>
  );
}