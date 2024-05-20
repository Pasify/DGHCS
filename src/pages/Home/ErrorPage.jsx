import { Button } from "@material-tailwind/react";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center bg-blue-gray-500">
      <h1 className="text-[10rem] font-extrabold">{error.status}</h1>
      <h2 className="text-[3rem] font-bold">{error.error.message}</h2>
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
}

export default ErrorPage;
