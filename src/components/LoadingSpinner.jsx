import { Spinner } from "@material-tailwind/react";
function LoadingSpinner() {
  return (
    <div className="flex h-dvh items-center justify-center bg-transparent">
      <Spinner className="h-40 w-40 text-accent " />
    </div>
  );
}

export default LoadingSpinner;
