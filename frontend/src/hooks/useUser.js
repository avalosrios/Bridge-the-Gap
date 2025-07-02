import { useContext } from "react";
import { userContext } from "../providers/UserProvider.jsx";

export default function useUser() {
  const { user, isLoading } = useContext(userContext);
  if (isLoading) {
    return { user: null, isLoading: true };
  } else {
    return { user, isLoading: false };
  }
}
