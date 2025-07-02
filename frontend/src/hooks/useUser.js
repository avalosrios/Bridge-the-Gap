import { useContext } from "react";
import { userContext } from "../providers/UserProvider.jsx";

export default function useGroups() {
  const { user } = useContext(userContext);
  return user;
}
