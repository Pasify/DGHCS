import * as yup from "yup";
const validationSchema = yup.object().shape({
  userName: yup.string().required("student full name is required"),
  emailAddress: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  // phoneNumber: yup
  //   .string()
  //   .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
  //   .required("Phone number is required"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 5 characters long",
    ),
});

export default validationSchema;
