import * as yup from "yup";

const resultValidation = yup.object().shape({
  fullName: yup.string().required("student full Name is required"),
  studentClass: yup
    .string()
    .required("class is required")
    .matches(
      /^(JSS|SSS)[1-3]$/,
      "class must start with 'JSS' or 'SSS' followed by a class number from 1 to 3",
    ),
  term: yup.string().required("term is required"),
  department: yup.string().required("department is required"),
  // .oneOf(["Art", "science", "commercial"], "Invalid department selected"),
});
export default resultValidation;
