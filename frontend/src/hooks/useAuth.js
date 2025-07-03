import { useContext } from "react";
import { authContext } from "../providers/AuthProvider.jsx";

export default function useAuth() {
  const { auth } = useContext(authContext);
  return auth;
}
