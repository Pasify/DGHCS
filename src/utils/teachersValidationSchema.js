import * as yup from "yup";
const teachersValidationSchema = yup.object().shape({
  teachersName: yup
    .string()
    .required("Teacher's name is required")
    .matches(/^[A-Za-z\s]+$/, "Teacher's name must contain only alphabets"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),
  imageFile: yup
    .mixed()
    .test("fileType", "Invalid file type", (value) => {
      if (!value) return true; // No file selected
      return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
    })
    .required("Please select an image file"),
});

export default teachersValidationSchema;
