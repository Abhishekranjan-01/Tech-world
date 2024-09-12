import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import useUserData from "./store/userStore";
import useUser from "./hooks/user.hook";
import userAuth from "./api/userAuth.api";

function App() {
  const nullifyUser = useUserData((state) => state.nullifyUser);
  const {
    setUserCredentials,
    data: userData,
    isLoading: userDataIsLoading,
    error: userDataError,
  } = useUser({ queryKey: "auth", apiFunction: userAuth });

  useEffect(() => {
    // nullifyUser();
    setUserCredentials(true);
  }, []);
  return <AppRoutes />;
}

export default App;
