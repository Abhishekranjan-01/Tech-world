import { endpoint } from "../config/endpoint";
export default async function userAuth() {
  const res = await fetch(endpoint.USER.auth);

  const json = await res.json();
  if (!res.ok) {
    console.log("json AUTH WHERE FETCH EXIST:\t", json);
    throw new Error(json.error);
  }

  return json;
}
