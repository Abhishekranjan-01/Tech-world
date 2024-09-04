import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// import useUserLogin from "../../hooks/userLogin.hook";
import useUser from "../../hooks/user.hook";
import userLogin from "../../api/userLogin.api";

export default function LoginForm({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  notify,
}) {
  const { data, error, setUserCredentials } = useUser({
    queryKey: "loginUser",
    apiFunction: userLogin,
  });
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
    setUserCredentials({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  if (data) {
    notify({
      label: `Successfully Loggedin!!`,
      type: "success",
      autoClose: 1800,
    });
    // setTimeout(() => {
    //   navigate("/blogs");
    //   handleClose();
    // }, 1800);
  }

  if (error) {
    notify({ label: `${error.message}`, type: "error" });
    handleClose();
  }
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col text-gray-700 p-4 bg-transparent rounded-xl bg-clip-border w-fit mx-auto shadow-2xl  "
    >
      {/* {!isLoading && !isPending && error && <ToastContainer />} */}

      <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Sign in
      </h4>
      <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Nice to meet you! Enter your details to sign in.
      </p>
      <div className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
        <div className="flex flex-col gap-6 mb-1">
          {/*Email  */}
          <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Email
          </label>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              ref={emailRef}
              placeholder="name@mail.com"
              type="email"
              name="email"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
          </div>
          <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
            Password
          </label>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              ref={passwordRef}
              type="password"
              placeholder="********"
              required
              name="password"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Sign in
        </button>
        <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
          Didn't have an account?
          <a href="#" className="font-medium text-gray-900">
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
