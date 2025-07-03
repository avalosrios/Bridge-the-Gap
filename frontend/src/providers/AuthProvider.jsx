import { createContext, useEffect, useState } from "react";
import { httpRequest } from "../utils/utils.js";

const authContext = createContext();

const AUTH_URL = "/api/auth/session";

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    httpRequest(AUTH_URL, "GET").then((auth) => {
      setAuth(auth.userExists);
    });
  }, [setAuth]);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
