import { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import addStudentData from "../../api/addStudentData";
import validationSchema from "../../utils/validationSchema";
import FormInput from "./FormInput";
import { useStudent } from "../../context/StudentContext";
// import { object } from "yup";

function AddStudentForm() {
  // const { addStudentData } = useStudent();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    formState: { errors },
  } = methods;
  const { isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [methods, isSubmitSuccessful]);

  async function submitForm(data) {
    // addStudentData(data);
    try {
      const response = await addStudentData(data);
      toast.success(`added ${response.data.name}`);
    } catch (err) {
      toast.error("failed to add");
      console.log(err.message);
    }
  }

  return (
    <div className="m-auto  flex w-[75%] flex-col gap-10 rounded border border-midBlack2 bg-background p-10 shadow-sm">
      <div className="mt-[-4rem] rounded bg-midBlack p-3">
        <Typography variant="h4" color="white">
          Add Student
        </Typography>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          className="flex flex-col gap-6"
          // ref={ref}
        >
          <FormInput
            inputType="text"
            inputLabel="User Name"
            nameType="name"
            validationSchema={validationSchema}
          />
          <FormInput
            inputType="email"
            inputLabel="Email Address"
            nameType="email"
            validationSchema={validationSchema}
          />

          <FormInput
            inputType="password"
            inputLabel="Password"
            nameType="password"
            validationSchema={validationSchema}
          />
          <select
            name="grade"
            id="grade"
            className=" rounded-md border-[1px] border-blue-gray-200 bg-transparent p-2 text-blue-gray-500 focus-visible:border-2  focus-visible:border-blue-gray-500"
            {...methods.register("grade")}
          >
            <option value="">Select Grade</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
          </select>
          <>
            {errors.grade && (
              <Typography
                variant="small"
                color="red"
                role="alert"
                className="mt-[-1.2rem] text-xs"
              >
                {errors.grade?.message}
              </Typography>
            )}
          </>

          <Button size="md" className="bg-accent capitalize" type="submit">
            Add Student
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddStudentForm;
