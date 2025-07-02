import { useContext } from "react";
import { userContext } from "../providers/UserProvider.jsx";

export default function useUser() {
  const { user } = useContext(userContext);
  return user;
}
