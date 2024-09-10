import useUser from "../hooks/user.hook";
import userAuth from "../api/userAuth.api";
import { useEffect } from "react";
import { Main } from "../components";

export default function Home() {
  const {
    setUserCredentials,
    data: userData,
    isLoading: userDataIsLoading,
    error: userDataError,
  } = useUser({ queryKey: "auth", apiFunction: userAuth });
  useEffect(() => {
    // setUserCredentials({});
  }, []);
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div></div>
      <Main />
    </div>
  );
}
