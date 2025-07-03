import { createContext, useContext, useEffect, useState } from "react";
import { httpRequest } from "../utils/utils.js";
import { userContext } from "./UserProvider.jsx";
import useAuth from "../hooks/useAuth.js";

const userGroupContext = createContext();

const USER_GROUPS_URL = "/api/user/groups";

function UserGroupProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(userContext);
  const auth = useAuth();

  useEffect(() => {
    setIsLoading(true);
    if (!auth) return;
    httpRequest(USER_GROUPS_URL, "GET")
      .then((groups) => {
        setGroups(groups);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setGroups, user, auth]);

  return (
    <userGroupContext.Provider value={{ groups, setGroups, isLoading }}>
      {children}
    </userGroupContext.Provider>
  );
}

export { userGroupContext, UserGroupProvider };
