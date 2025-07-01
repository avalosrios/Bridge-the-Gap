import { useContext, useEffect, useState } from "react";
import { httpRequest } from "../utils/utils";
import { groupContext } from "../providers/GroupProvider";

const GROUPS_URL = "/api/groups";

export default function useGroups() {
  const { groups, setGroups } = useContext(groupContext);
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
  return { groups, isLoading };
}
