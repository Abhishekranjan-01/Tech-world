import { Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import SignupFormDialog from "../components/modal/signup.modal";
import useUserData from "../store/userStore";
import LoginFormDialog from "./modal/Login.modal";
import AddTitleAndFeatureImage from "./modal/AddTitleAndFeatureImage.modal"
import useUserLogout from "../hooks/userLogout.hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../hooks/user.hook";
import userLogout from "../api/userLogout.api";

export function NavbarMenu() {
  const { user, nullifyUser } = useUserData((state) => state);
  const {
    setUserCredentials: setUserDataForLogout,
    data: logoutData,
    error: logoutError,
  } = useUser({ queryKey: "userLogout", apiFunction: userLogout });
  const navigate = useNavigate();
  const notify = ({ label, ...props }) =>
    toast(label, { containerId: "userLoginAndSignupAlert", ...props });
  if (logoutData) {
    notify({ label: "User logout successfully", type: "success" });
    nullifyUser();
  }
  if (logoutError) {
    console.log();
    notify({ label: "User Couldn't logout", type: "error" });
    console.log(logoutError);
  }
  return (
    <Navbar fluid rounded className="fixed top-0 w-full z-50 border  shadow-lg">
      <ToastContainer containerId={"userLoginAndSignupAlert"} />
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
        {!user ? (
          <div className="flex flex-row gap-4">
            {" "}
            <LoginFormDialog notify={notify} />
            <SignupFormDialog notify={notify} />
            <AddTitleAndFeatureImage/>
          </div>
        ) : (
          // <h2>{user?.firstName}</h2>
          <button
            onClick={() => {
              // nullifyUser();
              setUserDataForLogout("logout");
            }}
            className="hidden sm:block border text-sm sm:text-base border-blue-500 rounded-lg p-2"
          >
            Logout
          </button>
        )}
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
        {user && (
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
            Logout
          </NavLink>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
