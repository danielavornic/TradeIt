import { apiUrl } from "../lib";
import { User } from "../types";

export const user = {
  add: async ({ email, name, uid }: User) => {
    const response = await fetch(`${apiUrl}/users.json`, {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        uid,
      }),
    });
    const data = await response.json();
    return data;
  },
};
