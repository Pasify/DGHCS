import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Button, Typography } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

import { useLogin } from "../context/LoginContext";
import FormInput from "../components/Form/FormInput";
import LoginValidationSchema from "../utils/loginValidationSchema";

import logo from "../assets/dghcslogo.png";
import schoolImage from "../assets/image.png";
import loginUser from "../api/loginApi";
import LoadingSpinner from "../components/LoadingSpinner";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useLogin();
  const navigate = useNavigate();

  const methods = useForm({ resolver: yupResolver(LoginValidationSchema) });

  async function handleLogin(data) {
    try {
      setIsLoading(true);
      // get data
      await login(data);

      // navigate to dashboard
      navigate("/dashboard");

      setIsLoading(false);
      // console.log(serverData);
    } catch (error) {
      toast.error(error.message, {
        duration: 8000,
        position: "top-center",
        icon: "🚩",
      });
      // setErrorMessage(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={`flex h-dvh flex-wrap items-center bg-cover  bg-no-repeat px-4`}
      style={{
        backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${schoolImage})`,
      }}
    >
      <div className="h-24 basis-full sm:h-dvh  sm:basis-1/2  ">
        <img src={logo} className="size-full object-contain drop-shadow-2xl" />
      </div>

      <div className="flex h-[70%] basis-full items-center justify-center rounded bg-white/85 backdrop-blur-lg sm:h-[90%] sm:basis-1/2">
        <Card color="transparent" shadow={false}>
          <div className="text-center">
            <Typography variant="h2" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to Login.
            </Typography>
          </div>

          <FormProvider {...methods}>
            <form
              className="mb-2 mt-8 flex w-80 max-w-screen-lg flex-col gap-6 sm:w-96"
              onSubmit={methods.handleSubmit(handleLogin)}
            >
              <FormInput
                inputType="email"
                inputLabel="Email Address"
                nameType="email"
                validationSchema={LoginValidationSchema}
                size="lg"
              />
              <FormInput
                inputType="password"
                inputLabel="Password"
                nameType="password"
                validationSchema={LoginValidationSchema}
                size="lg"
              />
              <Button
                className=" flex items-center justify-center gap-1 bg-accent"
                fullWidth
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : `login`}
              </Button>
            </form>
          </FormProvider>
          <div className="flex justify-center">
            <Link to="/" className="w-[15%]">
              <Button size="sm">&larr;</Button>
            </Link>
          </div>

          <Toaster />
        </Card>
      </div>
    </div>
  );
}
