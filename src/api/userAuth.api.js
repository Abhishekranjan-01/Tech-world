import { endpoint } from "../config/endpoint";
export default async function userAuth({ queryKey }) {
  const res = await fetch(`${endpoint.rootUrl}${endpoint.USER.auth}`, {
    method: "POST",
    credentials: "include",
  });

  const json = await res.json();
  if (!res.ok) {
    console.log("json userAuth AUTH WHERE FETCH EXIST:\t", json);
    throw new Error(json.error);
  }

  return json;
}
