import { createContext, useContext, useEffect, useState } from "react";
import { clearToken, getToken, setToken } from "../utils/token";
import loginUser from "../api/loginApi";

const LoginContext = createContext();
function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    const token = getToken();
    token && setIsLoggedIn(true);
  }, []);

  async function login(userDetails) {
    try {
      const response = await loginUser(userDetails);
      setToken(response.token);
      setIsLoggedIn(true);

      // set data
      setLoggedInUser(response.data);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
  function logOut() {
    setIsLoggedIn(false);
    clearToken();
  }
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loggedInUser,
        setLoggedInUser,
        login,
        logOut,
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
