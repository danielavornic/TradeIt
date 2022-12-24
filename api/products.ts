import { apiUrl } from "lib";
import { Product } from "types";

export const products = {
  getList: async () => {
    const response = await fetch(`${apiUrl}/products.json`);
    const data = await response.json();
    const dataArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return dataArray;
  },

  add: async (product: Product) => {
    const response = await fetch(`${apiUrl}/products.json`, {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  },
};
