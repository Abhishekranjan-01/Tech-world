import { Button } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import { NavbarMenu } from "./components";
import { Blogs, Home } from "./pages";
import SignupForm from "./components/form/Signup.form";

function App() {
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

export default App;
