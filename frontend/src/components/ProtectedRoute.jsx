import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser.js";

const ProtectedRoute = () => {
  const user = useUser();
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
