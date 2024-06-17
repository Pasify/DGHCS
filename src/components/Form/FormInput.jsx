import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function FormInput({
  inputType,
  inputLabel,
  nameType,
  validationSchema,
  placeHolder,
  size,
}) {
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
        color="accent"
        containerProps={{ className: `caret-secondary ` }}
        label={inputLabel}
        placeholder={placeHolder}
        size={size}
        type={
          nameType === "password"
            ? showPassword
              ? "text"
              : "password"
            : inputType
        }
        icon={
          nameType === "password" ? (
            showPassword ? (
              <BiHide onClick={() => changeVisibility()} />
            ) : (
              <BiShowAlt onClick={() => changeVisibility()} />
            )
          ) : null
        }
        {...register(nameType, { validate: validationSchema[nameType] })}
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
