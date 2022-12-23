import { apiUrl } from "../lib";
import { User } from "../types";

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
};
