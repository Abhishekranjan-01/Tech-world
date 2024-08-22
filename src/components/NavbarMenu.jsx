import { Navbar, Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import SignupFormDialog from "../components/modal/signup.modal";

export function NavbarMenu() {
  return (
    <Navbar fluid rounded className="fixed top-0 w-full z-50 border  shadow-lg">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/52/61/36/1000_F_152613619_kaNluqI3oUjvIhEQDcDfuksXknNJ45lf.jpg"
          className="mr-3 h-6 sm:h-9 rounded-full"
          alt="Tech world"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tech world
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {/* <Button className=" max-sm:p-0 max-sm:mx-4 text-sm sm:text-base sm:w-fit">
          Add Blog
        </Button> */}
        <SignupFormDialog />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00838F]"
              : "text-gray-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00838F]"
              : "text-gray-600"
          }
        >
          Blogs
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
