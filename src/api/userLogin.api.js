import { endpoint } from "../config/endpoint";
import { constants } from "../constants/constants";

export default async function userLogin({ queryKey }) {
  console.log("login queryKey where fetch exists:\t", queryKey);

  const res = await fetch(`${constants.url.projectUrl}${endpoint.USER.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ ...queryKey[1] }),
  });

  if (!res.ok) {
    throw new Error("something went wrong while login");
  }
  const json = await res.json();
  console.log("json WHERE LOGIN FETCH EXISTS", json);

  return json;
}
