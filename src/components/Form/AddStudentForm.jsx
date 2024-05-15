import { useEffect, useRef } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import validationSchema from "../../utils/validationSchema";
import FormInput from "./FormInput";
import { useStudent } from "../../context/StudentContext";
import { object } from "yup";

function AddStudentForm() {
  const { addStudentData } = useStudent();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { isSubmitSuccessful } = methods.formState;
  // console.log(methods);
  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [methods, isSubmitSuccessful]);
  // const ref = useRef();

  function submitForm(data) {
    console.table(data);
    addStudentData(data);
    // const formData = new FormData(ref.current);
    // const data2 = Object.fromEntries(formData);
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
            nameType="userName"
            validationSchema={validationSchema}
          />
          <FormInput
            inputType="email"
            inputLabel="Email Address"
            nameType="emailAddress"
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
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
          </select>
          <Button size="md" className="bg-accent capitalize" type="submit">
            Add Student
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddStudentForm;
