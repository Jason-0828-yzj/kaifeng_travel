import { attractions } from "@/data/attractions";
import { AttractionCard } from "@/components/attractions/attraction-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function NearbyAttractions({ relatedSlugs }: { relatedSlugs?: string[] }) {
  const related = attractions.filter((item) => relatedSlugs?.includes(item.slug)).slice(0, 3);
  if (!related.length) return null;

  return (
    <section className="space-y-6">
      <SectionHeading title="附近还能怎么接着逛" description="如果你打算把这段行程继续延展，下面几站通常比较容易自然接上。" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {related.map((item) => (
          <AttractionCard key={item.slug} attraction={item} />
        ))}
      </div>
    </section>
  );
}
