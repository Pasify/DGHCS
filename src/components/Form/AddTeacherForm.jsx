import { Typography, Button } from "@material-tailwind/react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import FormInput from "./FormInput";
import teachersValidationSchema from "../../utils/teachersValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
function AddTeacherForm() {
  const methods = useForm({
    resolver: yupResolver(teachersValidationSchema),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(teachersValidationSchema),
  });
  return (
    <div className="m-auto  flex w-[75%] flex-col gap-10 rounded border border-midBlack2 bg-background p-10 shadow-sm">
      <div className="mt-[-4rem] rounded bg-midBlack p-3">
        <Typography variant="h4" color="white">
          Add Teacher
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit()}>
          <FormInput
            inputType="text"
            inputLabel="Teachers Name"
            nameType="teachersName"
            validationSchema={teachersValidationSchema}
          />
          <FormInput
            inputLabel="Description"
            inputType="text"
            nameType="description"
            validationSchema={teachersValidationSchema}
          />
          <input
            accept="images/*"
            type="file"
            name="imageFile"
            className="w-[40%] rounded border border-midBlack2 p-4"
            {...register("imageFile")}
          />
          <Button size="md" className="bg-accent capitalize" type="submit">
            Add teacher
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddTeacherForm;
