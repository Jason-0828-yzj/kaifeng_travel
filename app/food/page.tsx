import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { foodItems } from "@/data/food";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "开封美食",
  description: "从灌汤包到鼓楼夜市，把开封最具代表性的味道和适合的觅食场景整理给你。",
  path: "/food",
  image: "/images/kaifeng/food/night-market.svg"
});

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Food"
        title="味道不是配角，而是开封行程的一部分"
        description="在开封，正餐、小吃、夜市和临时补给常常会自然嵌进一天的路线里。想吃什么，往往也决定了你要把哪段时光留给这座城。"
        meta={["招牌风味", "夜市建议", "早餐与夜宵场景"]}
      />
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {foodItems.map((item) => (
              <article key={item.slug} className="panel-strong overflow-hidden">
                <div className="relative h-52">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-sm text-[color:var(--muted)]">{item.category}</p>
                    <h2 className="ink-title mt-2 text-2xl">{item.name}</h2>
                  </div>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{item.intro}</p>
                  <div className="rounded-[20px] bg-white/70 p-4 text-sm leading-7 text-[color:var(--muted)]">推荐场景：{item.whereToTry}</div>
                  <div className="space-y-2 text-sm leading-7 text-[color:var(--muted)]">
                    {item.tips.map((tip) => (
                      <p key={tip}>• {tip}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="panel-strong p-6 sm:p-7"><h2 className="ink-title text-2xl">早餐</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">如果一早就要开始跑景点，建议把早餐安排得简单但有代表性，避免在中午前就把节奏拖慢。</p></article>
            <article className="panel-strong p-6 sm:p-7"><h2 className="ink-title text-2xl">夜市与夜宵</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">鼓楼夜市更适合和夜游连起来，不建议吃得太满，留一点探索感更有意思。</p></article>
            <article className="panel-strong p-6 sm:p-7"><h2 className="ink-title text-2xl">文化语境</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">开封的饮食体验和城市气质一样，不追求夸张，而是在层层叠叠的日常里慢慢显出味道。</p></article>
          </div>
        </Container>
      </section>
    </>
  );
}