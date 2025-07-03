import { createContext, useState, useEffect } from "react";
import { httpRequest } from "../utils/utils.js";

export const UserContext = createContext({
  user: null,
  loading: false,
  isLoading: () => {},
});

const USER_URL = `/api/user`;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (user == null) {
      setIsLoading(false);
      return;
    }
    httpRequest(USER_URL, "GET")
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setUser, user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
