import { createContext, useState, useEffect } from "react";
import { httpRequest } from "../utils/utils.js";

const userContext = createContext();

const USER_URL = "/api/user";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    httpRequest(USER_URL, "GET")
      .then((user) => {
        setUser(user);
      })
      .finally(() => {});
  }, [setUser]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserProvider };
