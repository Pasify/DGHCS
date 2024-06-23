import { useEffect, useState } from "react";
import { getCurrentUser, setCurrentUser } from "../utils/storage";

function useLoggedInUser(defaultUser) {
  const [loggedInUser, setLoggedInUser] = useState(() =>
    getCurrentUser(defaultUser),
  );
  useEffect(() => {
    setCurrentUser(loggedInUser);
  }, [loggedInUser]);
  return [loggedInUser, setLoggedInUser];
}

export default useLoggedInUser;
