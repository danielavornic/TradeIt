import { apiUrl } from "lib";

export const mySwaps = {
  getList: async () => {
    const response = await fetch(`${apiUrl}/my-swaps.json`);
    const data = await response.json();
    const dataArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return dataArray;
  },

  add: async (mySwap: any) => {
    const response = await fetch(`${apiUrl}/my-swaps.json`, {
      method: "POST",
      body: JSON.stringify(mySwap),
    });
    const data = await response.json();
    return data;
  },
};
