import { useContext } from "react";
import { userGroupContext } from "../providers/UserGroupsProvider.jsx";

export default function useUserGroups() {
  const { groups, isLoading } = useContext(userGroupContext);
  if (isLoading) {
    return { groups: null, isLoading: true };
  } else {
    return { groups, isLoading: false };
  }
}
