import { useContext } from "react";
import { UserContext } from "../providers/UserProvider.jsx";

export default function useUser() {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) {
    return { user: null, isLoading: true };
  } else {
    return { user, isLoading: false };
  }
}
