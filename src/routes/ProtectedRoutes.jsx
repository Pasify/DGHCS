import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

const hasToken = function (loggedInUser) {
  return loggedInUser && loggedInUser.token;
};
function ProtectedRoutes() {
  const { loggedInUser } = useLogin();
  const userHasToken = hasToken(loggedInUser);
  return userHasToken ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
