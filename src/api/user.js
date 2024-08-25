import { endpoint } from "../config/endpoint";
import { constants } from "../constants/constants";

export async function signupUser({ queryKey }) {
  console.log("Where fetch exists", queryKey[1]);

  const res = await fetch(
    `${constants.url.projectUrl}${endpoint.USER.signupUser}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify(queryKey[1]),
    }
  );
  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }
  return res.json();
}
