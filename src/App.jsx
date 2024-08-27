import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import useUserData from "./store/userStore";
const queryClient = new QueryClient();
function App() {
  const nullifyUser = useUserData((state) => state.nullifyUser);
  useEffect(() => {
    nullifyUser();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <AppRoutes />
      </>
    </QueryClientProvider>
  );
}

export default App;
