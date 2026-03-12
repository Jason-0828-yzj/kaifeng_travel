import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AttractionHero } from "@/components/attractions/attraction-hero";
import { AttractionHighlights } from "@/components/attractions/attraction-highlights";
import { NearbyAttractions } from "@/components/attractions/nearby-attractions";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { attractions } from "@/data/attractions";
import { itineraries } from "@/data/itineraries";
import { ItineraryCard } from "@/components/itineraries/itinerary-card";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return attractions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const attraction = attractions.find((item) => item.slug === slug);
  if (!attraction) {
    return { title: "景点不存在" };
  }

  return {
    title: attraction.name,
    description: attraction.intro,
    openGraph: {
      title: `${attraction.name} | 汴京行旅`,
      description: attraction.intro,
      images: [attraction.heroImage]
    }
  };
}

function getRelatedItineraries(slug: string) {
  if (["gulou-night-market", "bian-river-night-tour"].includes(slug)) {
    return itineraries.filter((item) => ["night-food-route", "classic-song-day-trip"].includes(item.slug));
  }
  if (["qingming-riverside-garden", "dragon-pavilion"].includes(slug)) {
    return itineraries.filter((item) => ["classic-song-day-trip", "family-friendly-route"].includes(item.slug));
  }
  return itineraries.slice(0, 2);
}

export default async function AttractionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const attraction = attractions.find((item) => item.slug === slug);
  if (!attraction) notFound();

  const relatedItineraries = getRelatedItineraries(attraction.slug);

  return (
    <>
      <AttractionHero attraction={attraction} />
      <section className="pb-12">
        <Container>
          <AttractionHighlights attraction={attraction} />
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <div className="panel p-6 sm:p-8">
            <SectionHeading title="交通与串联建议" description="如果你准备把这站放进行程里，下面这些提醒能让路线更顺。" />
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[24px] bg-white/70 p-5 text-sm leading-7 text-[color:var(--muted)]">{attraction.transportTip}</div>
              <div className="rounded-[24px] bg-white/70 p-5 text-sm leading-7 text-[color:var(--muted)]">建议出发前查看景区官方信息，尤其是票务、活动和旺季安排可能随节庆变化。</div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <SectionHeading title="这站适合放进哪些路线里" description="如果不想从零拼行程，可以直接从下面的路线进入。" />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {relatedItineraries.map((item) => (
              <ItineraryCard key={item.slug} itinerary={item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-12">
        <Container>
          <NearbyAttractions relatedSlugs={attraction.relatedSlugs} />
        </Container>
      </section>
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="panel flex flex-col gap-5 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="ink-title text-3xl">下一步就看路线怎么接</h2>
              <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">把这站放进完整行程里，通常会比单独看景点更容易做决定。</p>
            </div>
            <div className="flex gap-4">
              <Button asChild><Link href="/itineraries">去看推荐路线</Link></Button>
              <Button asChild variant="secondary"><Link href="/attractions">返回景点列表</Link></Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}