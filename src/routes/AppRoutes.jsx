import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarMenu } from "../components";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import ProtectedRoutes from "./ProtectedRoutes";
import PublishBlog from "../pages/PublishBlog";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/publishBlog" element={<PublishBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<SignupForm />} /> */}
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}
