export type FoodCategory = "snack" | "meal" | "dessert" | "night-market";

export type FoodItem = {
  slug: string;
  name: string;
  category: FoodCategory;
  intro: string;
  whereToTry: string;
  tips: string[];
  image: string;
};
