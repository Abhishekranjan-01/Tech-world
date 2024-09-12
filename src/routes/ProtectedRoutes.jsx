import { Outlet, useNavigate } from "react-router-dom";
import useUserData from "../store/userStore";

export default function ProtectedRoutes() {
  const user = useUserData((state) => state.user);
  const navigate = useNavigate();
  if (!user?._id) {
    navigate("/");
  }
  return <Outlet />;
}
