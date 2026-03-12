export type ItineraryStop = {
  time: string;
  title: string;
  detail: string;
  transport?: string;
  mealSuggestion?: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  duration: string;
  summary: string;
  tags: string[];
  stops: ItineraryStop[];
  recommendedReason: string;
  coverImage: string;
};
