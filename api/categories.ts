import { apiUrl } from "../lib";

export const categories = {
  getList: async () => {
    const response = await fetch(`${apiUrl}/categories.json`);
    const data = await response.json();
    const dataArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return dataArray;
  },
};

export const product = {
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
