import { Product } from "types/product";

export const createSlug = (text: string) => {
  const slug = text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  const random = Math.floor(Math.random() * 100);

  return `${slug}-${random}`;
};
