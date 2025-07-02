import { createContext, useState, useEffect } from "react";
import { httpRequest } from "../utils/utils.js";

const userContext = createContext();

const USER_URL = `/api/user`;

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    httpRequest(USER_URL, "GET")
      .then((user) => {
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setUser]);

  return (
    <userContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider };
