import $axios from "axios";

export const apiUrl =
  "https://trade-a95eb-default-rtdb.europe-west1.firebasedatabase.app";

export const axios = $axios.create({
  baseURL: apiUrl,
});
