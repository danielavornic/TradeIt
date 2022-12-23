import $axios from "axios";

export const axios = $axios.create({
  baseURL: "https://trade-a95eb-default-rtdb.europe-west1.firebasedatabase.app",
});
