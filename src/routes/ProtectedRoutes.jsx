import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import useUserData from "../store/userStore";

export default function ProtectedRoutes() {
  const user = useUserData((state) => state.user);
}
