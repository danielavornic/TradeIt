export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  type: "swap" | "giveaway";
  category: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
