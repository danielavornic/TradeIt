export interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
  type: "swap" | "giveaway";
  category?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
