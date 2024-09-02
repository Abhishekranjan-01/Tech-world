import { Formik, ErrorMessage } from "formik";
import { userSchema } from "../../schema/user/user.schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../hooks/user.hook";
import { useNavigate } from "react-router-dom";

export default function SignupForm({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  notify,
}) {
  const { data, error, setUserCredentials } = useUser();
  const navigate = useNavigate();

  if (data) {
    notify({
      label: `Successfully created new account!!`,
      type: "success",
      autoClose: 1800,
    });
    setTimeout(() => {
      navigate("/blogs");
      handleClose();
    }, 1800);
  }

  if (error) {
    notify({ label: `${error.message}`, type: "error" });
  }
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={(e) => {
        console.log(e);
        setUserCredentials({ ...e });
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="relative flex flex-col text-gray-700 p-4 bg-transparent rounded-xl bg-clip-border w-fit mx-auto shadow-2xl  "
        >
          {/* {!isLoading && !isPending && error && <ToastContainer />} */}
          <ToastContainer />
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sign Up
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Nice to meet you! Enter your details to register.
          </p>
          <div
            // onSubmit={(e) => {
            //   e.preventDefault();
            // }}
            // onSubmit={formik.handleSubmit}
            className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
          >
            <div className="flex flex-col gap-6 mb-1">
              <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                First Name
              </label>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="First name"
                  aria-placeholder="First_Name"
                  role="textbox"
                  name="firstName"
                  onChange={(e) =>
                    formik.setFieldValue("firstName", e.target.value)
                  }
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                {formik.getFieldMeta("firstName").touched &&
                  formik.getFieldMeta("firstName").error && (
                    <ErrorMessage name="firstName">
                      {(msg) => (
                        <p className="text-xs text-red-600 font-semibold">
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  )}
              </div>
              {/* Last Name */}
              <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Last Name
              </label>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="Last name"
                  aria-placeholder="First_Name"
                  role="textbox"
                  name="lastName"
                  onChange={(e) =>
                    formik.setFieldValue("lastName", e.target.value)
                  }
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                {formik.getFieldMeta("lastName").touched &&
                  formik.getFieldMeta("lastName").error && (
                    <ErrorMessage name="lastName">
                      {(msg) => (
                        <p className="text-xs text-red-600 font-semibold">
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  )}
              </div>

              {/*  */}
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Your Email
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="name@mail.com"
                  type="email"
                  name="email"
                  onChange={(e) =>
                    formik.setFieldValue("email", e.target.value)
                  }
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                {formik.getFieldMeta("email").touched &&
                  formik.getFieldMeta("email").error && (
                    <ErrorMessage name="email">
                      {(msg) => (
                        <p className="text-xs text-red-600 font-semibold">
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  )}
              </div>
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Password
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  placeholder="********"
                  name="password"
                  onChange={(e) =>
                    formik.setFieldValue("password", e.target.value)
                  }
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                {formik.getFieldMeta("password").touched &&
                  formik.getFieldMeta("password").error && (
                    <ErrorMessage name="password">
                      {(msg) => (
                        <p className="text-xs text-red-600 font-semibold">
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              sign up
            </button>
            <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
              Already have an account?
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
}
