"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { attractionCategories } from "@/data/attractions";
import type { Attraction } from "@/types/attraction";
import { AttractionCard } from "@/components/attractions/attraction-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function AttractionFilter({ attractions }: { attractions: Attraction[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof attractionCategories)[number]["value"]>("all");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const keyword = deferredQuery.trim().toLowerCase();
    return attractions.filter((item) => {
      const matchCategory = category === "all" || item.category === category;
      const searchField = [item.name, item.subtitle, item.intro, item.tags.join(" ")].join(" ").toLowerCase();
      const matchKeyword = !keyword || searchField.includes(keyword);
      return matchCategory && matchKeyword;
    });
  }, [attractions, category, deferredQuery]);

  return (
    <div className="space-y-6">
      <div className="panel p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} className="pl-11" placeholder="搜索你想去的景点、体验或关键词" />
          </div>
          <div className="flex flex-wrap gap-3">
            {attractionCategories.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setCategory(item.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  category === item.value ? "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]" : "bg-white/80 text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <AttractionCard key={item.slug} attraction={item} />
          ))}
        </div>
      ) : (
        <div className="panel flex min-h-56 flex-col items-center justify-center px-6 text-center">
          <h3 className="ink-title text-2xl">还没找到匹配内容</h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted)]">可以试试更短的关键词，或者先切回“全部”筛选，看哪些景点更适合这次开封行程。</p>
        </div>
      )}
    </div>
  );
}
