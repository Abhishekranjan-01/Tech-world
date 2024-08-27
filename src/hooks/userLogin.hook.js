import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import userLogin from "../api/userLogin.api";
import useUserData from "../store/userStore";

export default function useUserLogin() {
  const setUser = useUserData((state) => state.setUser);
  const [userData, setUserData] = useState(false);
  const setUserCredentials = async function (userCredentials) {
    setUserData(userCredentials);
  };
  const { isPending, error, isLoading, isSuccess, data } = useQuery({
    queryKey: ["userData", userData],
    queryFn: userLogin,
    enabled: Boolean(userData),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    gcTime: 1,
  });

  if (!isLoading && !isPending) {
    setUserData(false);
  }
  if (!isLoading && !isPending && data) {
    console.log("Data received from api", data);

    setUser(data);
  }
  return { setUserCredentials, data, isPending, isLoading, isSuccess, error };
}
