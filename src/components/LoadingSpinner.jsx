import { tailspin } from "ldrs";

tailspin.register();

// Default values shown

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <l-tailspin size="20" stroke="5" speed="1.0" color="#f8f3f3"></l-tailspin>
    </div>
  );
}

export default LoadingSpinner;
