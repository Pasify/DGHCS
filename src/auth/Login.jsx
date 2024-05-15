import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Button, Typography } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

import { useLogin } from "../context/LoginContext";
import FormInput from "../components/Form/FormInput";
import LoginValidationSchema from "../utils/loginValidationSchema";

import logo from "../assets/dghcslogo.png";
import schoolImage from "../assets/image.png";
import loginUser from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { loggedInUser, setLoggedInUser } = useLogin();
  const navigate = useNavigate();

  const methods = useForm({ resolver: yupResolver(LoginValidationSchema) });

  async function handleLogin(data) {
    try {
      // setIsLoading(true);
      const serverData = await loginUser(data);
      setLoggedInUser(serverData);
      navigate("/dashboard");
      // setIsLoading(false);
      console.log(serverData);
    } catch (error) {
      toast.error(error.message, {
        duration: 8000,
        position: "top-center",
        icon: "🚩",
      });
      setErrorMessage(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => console.log(loggedInUser), [loggedInUser]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div
      className={`flex h-dvh items-center bg-cover  bg-no-repeat px-4`}
      style={{
        backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${schoolImage})`,
      }}
    >
      <div className="basis-1/2  ">
        <img src={logo} className="size-full object-contain drop-shadow-2xl" />
      </div>

      <div className="flex h-[90%] basis-1/2 items-center justify-center rounded bg-white/85 backdrop-blur-lg">
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
                className=" bg-accent"
                fullWidth
                type="submit"
                disabled={isLoading}
              >
                login
              </Button>
            </form>
          </FormProvider>
          <Toaster />
        </Card>
      </div>
    </div>
  );
}
