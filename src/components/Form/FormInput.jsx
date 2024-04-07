import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function FormInput({ inputType, inputLabel, nameType, validationSchema }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function changeVisibility() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div>
      <Input
        type={
          nameType === "password"
            ? showPassword
              ? "text"
              : "password"
            : inputType
        }
        label={inputLabel}
        color="accent"
        containerProps={{ className: "caret-primary" }}
        {...register(nameType, { validate: validationSchema[nameType] })}
        icon={
          nameType === "password" ? (
            showPassword ? (
              <BiShowAlt onClick={() => changeVisibility()} />
            ) : (
              <BiHide onClick={() => changeVisibility()} />
            )
          ) : null
        }
      />
      {errors[nameType] && (
        <Typography
          variant="small"
          color="red"
          role="alert"
          className="text-xs"
        >
          {errors[nameType]?.message}
        </Typography>
      )}
    </div>
  );
}

export default FormInput;
