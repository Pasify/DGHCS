import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { getToken } from "../utils/token";

function ProtectedRoutes() {
  // const { loggedInUser } = useLogin();
  const { isLoggedIn, loggedInUser } = useLogin();
  const hasToken = getToken();
  // return userHasToken ? <Outlet /> : <Navigate to="/" />;
  return isLoggedIn && hasToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
