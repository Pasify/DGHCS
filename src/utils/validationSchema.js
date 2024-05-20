import * as yup from "yup";
const validationSchema = yup.object().shape({
  name: yup.string().required("student full name is required"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^[a-zA-Z0-9]{5,9}$/,
      "Password must contain only letters and numbers and be between 5 and 9 characters long",
    ),
  grade: yup.string().required("Grade is required"),
});

export default validationSchema;
