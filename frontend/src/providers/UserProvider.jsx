import { createContext, useState, useEffect } from "react";
import { httpRequest } from "../utils/utils.js";
import useAuth from "../hooks/useAuth.js";

const userContext = createContext();

const USER_URL = `/api/me`;

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  useEffect(() => {
    setIsLoading(true);
    if (auth) {
      httpRequest(USER_URL, "GET")
        .then((user) => {
          setUser(user);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [auth, setUser]);

  return (
    <userContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider };
