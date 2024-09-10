import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarMenu } from "../components";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<SignupForm />} /> */}
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}
