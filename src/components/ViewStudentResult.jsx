import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Typography, Button } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "./Form/FormInput";
import resultValidation from "../utils/viewStudentResultValidation";
function ViewStudentResult() {
  const [selectedTerm, setSelectedTerm] = useState("first Term");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  //   console.log(resultValidation);
  const submitForm = (data) => {
    console.log(data);
  };

  const methods = useForm({ resolver: yupResolver(resultValidation) });
  const { errors } = methods.formState;
  //   console.log(errors.department);

  return (
    <div className="m-auto  flex w-[75%] flex-col gap-10 rounded border border-midBlack2 bg-background p-10 shadow-sm">
      <div className="mt-[-4rem] rounded bg-midBlack p-3">
        <Typography variant="h4" color="white">
          Check student Result
        </Typography>
      </div>
      <div>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={methods.handleSubmit(submitForm)}
          >
            <FormInput
              inputType="text"
              inputLabel="Full Names"
              nameType="fullName"
              validationSchema={resultValidation}
              placeHolder="Full names of student e.g Elon Musk"
            />
            <FormInput
              inputType="text"
              inputLabel="Student Class"
              nameType="studentClass"
              validationSchema={resultValidation}
              placeHolder="Student's class e.g JSS1/JSS2/SS1"
            />
            <select
              {...methods.register("term")}
              className="h-10 rounded-md bg-transparent px-2 capitalize outline outline-1 outline-blue-gray-200"
              onChange={(e) => setSelectedTerm(e.target.value)}
              placeholder="select term"
              value={selectedTerm}
            >
              <option value="first term">first Term</option>
              <option value="second term ">second term</option>
              <option value="third term">third Term</option>
            </select>
            {errors.term && (
              <p className="text-sm text-red-500">{errors.term.message}</p>
            )}

            <select
              {...methods.register("department")}
              value={selectedDepartment}
              className="h-10 rounded-md bg-transparent px-2 capitalize outline outline-1 outline-blue-gray-200"
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="art">Art</option>
              <option value="commercial">Commercial</option>
              <option value="science">Science</option>
            </select>
            {errors.department && (
              <p className="text-sm text-red-500">
                {errors.department.message}
              </p>
            )}
            <Button type="submit" className="bg-accent capitalize" size="md">
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ViewStudentResult;
