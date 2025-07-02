import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser.js";

const ProtectedRoute = () => {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
