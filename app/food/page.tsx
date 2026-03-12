import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { foodItems } from "@/data/food";
import { createMetadata } from "@/lib/metadata";

const foodCategoryLabels = {
  snack: "街巷小吃",
  meal: "正式用餐",
  dessert: "伴手风味",
  "night-market": "夜市体验"
} as const;

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
        eyebrow="开封味道"
        title="味道不是配角，而是开封行程的一部分"
        description="在开封，正餐、小吃、夜市和临时补给常常会自然嵌进一天的路线里。想吃什么，往往也决定了你要把哪段时光留给这座城。"
        meta={["招牌风味", "夜市建议", "早餐与夜宵场景"]}
      />
      <section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">先想一天的节奏，再决定吃什么</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">
                开封的美食体验并不只是“专门去吃一顿”。很多时候，真正适合留下印象的，是把早餐、午后的补给、夜游后的宵夜自然放进行程里，让味道和城市氛围一起发生。
              </p>
            </article>
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">第一次来更适合这样吃</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                <p className="rounded-[20px] bg-white/70 px-4 py-3">白天以景点周边的简洁正餐为主，把时间留给核心路线。</p>
                <p className="rounded-[20px] bg-white/70 px-4 py-3">傍晚和夜间再去鼓楼一带，夜景、散步和夜宵更容易连成完整体验。</p>
                <p className="rounded-[20px] bg-white/70 px-4 py-3">伴手礼和轻甜口味更适合安排在返程前，不必在最热闹的时段专门折返。</p>
              </div>
            </article>
          </div>
        </Container>
      </section>
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
                    <p className="text-sm text-[color:var(--muted)]">{foodCategoryLabels[item.category]}</p>
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
            <article className="panel-strong p-6 sm:p-7"><h2 className="ink-title text-2xl">城市气味</h2><p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">开封的饮食体验和城市气质一样，不追求夸张，而是在层层叠叠的日常里慢慢显出味道。</p></article>
          </div>
          <div className="mt-6 panel-strong p-6 sm:p-8">
            <h2 className="ink-title text-3xl">如果只留一顿给开封</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-[color:var(--muted)]">
              更推荐把这顿留给傍晚到夜间。白天看城、傍晚入夜、夜市收尾，是最容易让开封从“看过”变成“记住了”的节奏。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
