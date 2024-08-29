import { useQuery } from "@tanstack/react-query";
import { signupUser } from "../api/userSignup.api";
import { useState } from "react";
import useUserData from "../store/userStore";
import userLogout from "../api/userLogout.api";

export default function useUserLogout() {
  const setUser = useUserData((state) => state.setUser);
  const [userData, setUserData] = useState(false);
  const setUserCredentials = async function (userCredentials) {
    setUserData(userCredentials);
  };
  const { isPending, error, isLoading, isSuccess, data } = useQuery({
    queryKey: ["userData", userData],
    queryFn: userLogout,
    enabled: Boolean(userData),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    gcTime: 1,
  });

  if (!isLoading && !isPending) {
    setUserData(false);
  }
  if (!isLoading && !isPending) {
    console.log("Data received from api", data);
    setUser(null);
  }
  return { setUserCredentials, data, isPending, isLoading, isSuccess, error };
}
