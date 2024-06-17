import { Navigate, Outlet } from "react-router-dom";

// import { isAuthenticated } from "../utils/token";
import { useLogin } from "../context/LoginContext";
import { getToken } from "../utils/token";

function ProtectedRoutes() {
  const { isAuthenticated } = useLogin();
  // const hasToken = isAuthenticated();
  const hasToken = getToken();
  // console.log(hasToken);
  // return hasToken ? <Outlet /> : <Navigate to="/login" />;
  return isAuthenticated || hasToken ? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoutes;
