import { createContext, useContext, useEffect, useState } from "react";
import {
  clearToken,
  getToken,
  isAuthenticated as isUserAuthenticated,
  setToken,
} from "../utils/token";
import loginUser from "../api/loginApi";
import { getCurrentUser, setCurrentUser } from "../utils/storage";

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(getCurrentUser());
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  async function login(userDetails) {
    try {
      const response = await loginUser(userDetails);
      setToken(response.token);
      // set
      const { studentID, name, role } = response;
      const user = { studentID, name, role };
      setLoggedInUser(response);
      setCurrentUser(user);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
  function logOut() {
    setIsAuthenticated(false);
    clearToken();
    setLoggedInUser({});
  }
  return (
    <LoginContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        login,
        logOut,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  return context;
}
export { useLogin, LoginProvider };
