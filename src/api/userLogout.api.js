import { endpoint } from "../config/endpoint";
export default async function userLogout() {
  const res = await fetch(`${endpoint.rootUrl}${endpoint.USER.logout}`, {
    method: "POST",
    credentials: "include",
  });

  const json = await res.json();
  if (!res.ok) {
    console.log("json AUTH WHERE FETCH EXIST:\t", json);
    throw new Error(json.error);
  }

  return json;
}
