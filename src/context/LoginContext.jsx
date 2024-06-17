import { createContext, useContext, useEffect, useState } from "react";
import {
  clearToken,
  getToken,
  isAuthenticated as isUserAuthenticated,
  setToken,
} from "../utils/token";
import loginUser from "../api/loginApi";

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
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
      console.log(loggedInUser);
      // set data
      setLoggedInUser(response);
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
