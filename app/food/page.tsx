import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { foodItems } from "@/data/food";
import { createPageMetadata } from "@/lib/metadata";

const categoryLabel: Record<string, string> = {
  meal: "正餐推荐",
  dessert: "甜口点心",
  snack: "街头小吃",
  "night-market": "夜市体验"
};

const editorialNotes = [
  {
    title: "早餐怎么安排",
    description: "如果一早就准备开始跑景点，早餐更适合选一顿简单但有代表性的热食，不必把节奏拖得太慢。"
  },
  {
    title: "夜市怎么吃更舒服",
    description: "鼓楼夜市更适合和夜游连起来，不建议一开始就吃得太满，留一点探索空间会更有意思。"
  },
  {
    title: "味道也是城市气质",
    description: "开封的食物不靠夸张取胜，而是在层层叠叠的日常里慢慢显出味道，和这座城的气质很像。"
  }
];

export const metadata = createPageMetadata({
  title: "开封美食",
  description: "从灌汤包到鼓楼夜市，把开封最有代表性的味道和更适合的觅食场景整理给你。",
  path: "/food",
  image: "/images/kaifeng/food/night-market.svg"
});

export default function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="开封味道"
        title="味道不是配角，而是开封行程的一部分"
        description="在开封，正餐、小吃、夜市和临时补给常常会自然嵌进一天的路线里。想吃什么，往往也决定了你要把哪段时间留给这座城。"
        meta={["招牌风味", "夜市建议", "早餐与夜宵场景"]}
      />
      <section className="pb-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">先把味道放进行程里想</h2>
              <p className="mt-4 text-sm leading-8 text-[color:var(--muted)]">如果白天的重点是龙亭、清明上河园和开封府，那么午餐更适合靠近景区解决；如果晚上准备看灯影、逛水岸和走夜市，就把胃口留到傍晚以后。开封的美食体验，往往不是单独列清单，而是和动线一起发生。</p>
            </article>
            <article className="panel-strong p-6 sm:p-8">
              <h2 className="ink-title text-3xl">最容易出效果的吃法</h2>
              <div className="mt-4 space-y-3 text-sm leading-8 text-[color:var(--muted)]">
                <p className="rounded-[22px] bg-white/70 px-4 py-3">中午靠近核心景区吃得简洁一点，减少来回折返。</p>
                <p className="rounded-[22px] bg-white/70 px-4 py-3">如果计划夜游，把重头戏留给鼓楼夜市和晚间宵夜。</p>
                <p className="rounded-[22px] bg-white/70 px-4 py-3">伴手礼型点心适合放在返程前再买，避免一路拎着影响节奏。</p>
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
                    <p className="text-sm text-[color:var(--muted)]">{categoryLabel[item.category]}</p>
                    <h2 className="ink-title mt-2 text-2xl">{item.name}</h2>
                  </div>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{item.intro}</p>
                  <div className="rounded-[20px] bg-white/70 p-4 text-sm leading-7 text-[color:var(--muted)]">推荐场景：{item.whereToTry}</div>
                  <div className="space-y-2 text-sm leading-7 text-[color:var(--muted)]">
                    {item.tips.map((tip) => (
                      <p key={tip}>- {tip}</p>
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
            {editorialNotes.map((item) => (
              <article key={item.title} className="panel-strong p-6 sm:p-7">
                <h2 className="ink-title text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
