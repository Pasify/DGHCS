import { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import validationSchema from "../../utils/validationSchema";
import FormInput from "./FormInput";
import { useStudent } from "../../context/StudentContext";

function AddStudentForm() {
  const { addStudentData } = useStudent();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [methods, isSubmitSuccessful]);
  function submitForm(data) {
    console.table(data);
    addStudentData(data);
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
            inputType="number"
            inputLabel="Phone Number"
            nameType="phoneNumber"
            validationSchema={validationSchema}
          />
          <FormInput
            inputType="password"
            inputLabel="Password"
            nameType="password"
            validationSchema={validationSchema}
          />
          <Button
            size="md"
            className="bg-accent capitalize"
            onClick={methods.handleSubmit(submitForm)}
          >
            Add Student
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddStudentForm;
