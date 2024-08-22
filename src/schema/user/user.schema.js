import * as Yup from "yup";
export const userSchema = Yup.object({
  firstName: Yup.string()
    .max(12, "First name is too large")
    .required("First name is required"),
  lastName: Yup.string()
    .max(12, "Last name is too large")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8")
    .required("Password is required"),
});
