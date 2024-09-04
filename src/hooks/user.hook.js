import { useQuery } from "@tanstack/react-query";
// import { signupUser } from "../api/userSignup.api";
import { useState } from "react";
import useUserData from "../store/userStore";

export default function useUser({ queryKey, apiFunction }) {
  const setUser = useUserData((state) => state.setUser);
  const [userData, setUserData] = useState(false);
  const setUserCredentials = async function (userCredentials) {
    setUserData(userCredentials);
  };
  const { isPending, error, isLoading, isSuccess, data } = useQuery({
    queryKey: [`${queryKey}`, userData],
    queryFn: apiFunction,
    enabled: Boolean(userData),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 0,
    gcTime: 1,
  });

  if (!isLoading && !isPending) {
    setUserData(false);
  }
  if (data) {
    // console.log("Data received from api", data);
    setUser(data);
  }
  return { setUserCredentials, data, isPending, isLoading, isSuccess, error };
}
