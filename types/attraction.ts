export type AttractionCategory =
  | "historic-site"
  | "park"
  | "night-tour"
  | "culture"
  | "food-area";

export type Attraction = {
  slug: string;
  name: string;
  subtitle?: string;
  intro: string;
  longDescription: string;
  tags: string[];
  category: AttractionCategory;
  recommendedDuration: string;
  bestVisitTime: string;
  location: string;
  ticketHint: string;
  transportTip: string;
  highlights: string[];
  tips: string[];
  heroImage: string;
  gallery?: string[];
  relatedSlugs?: string[];
  featured?: boolean;
};
