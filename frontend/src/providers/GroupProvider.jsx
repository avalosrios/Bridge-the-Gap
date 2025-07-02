import { createContext, useEffect, useState } from "react";
import { httpRequest } from "../utils/utils.js";

const groupContext = createContext();

const GROUPS_URL = "/api/groups";

function GroupProvider(props) {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    httpRequest(GROUPS_URL, "GET")
      .then((groupList) => {
        setGroups(groupList);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setGroups]);

  return (
    <groupContext.Provider value={{ groups, setGroups, isLoading }}>
      {props.children}
    </groupContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { groupContext, GroupProvider };
