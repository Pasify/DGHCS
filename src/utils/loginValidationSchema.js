import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "password must be at least 5 characters")
    .max(9, "password must not exceed 9 character"),
});

export default LoginValidationSchema;
