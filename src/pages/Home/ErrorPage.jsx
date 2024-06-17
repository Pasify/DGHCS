import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center bg-blue-gray-500">
      <h1 className="text-[2rem] font-extrabold">
        The page you are looking for could not be found 😢
      </h1>

      <Button onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
}

export default ErrorPage;
