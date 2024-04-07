import { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import validationSchema from "../../utils/validationSchema";
import FormInput from "./FormInput";

function AddStudentForm() {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { isSubmitSuccessful } = methods.formState;

  useEffect(() => {
    if (isSubmitSuccessful) methods.reset();
  }, [methods, isSubmitSuccessful]);
  function submitForm(data) {
    console.table(data);
  }
  return (
    <div className="m-auto mt-10 w-[70%] rounded bg-background p-10">
      <Typography variant="h3">Add Student</Typography>
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
