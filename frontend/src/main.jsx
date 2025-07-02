import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import GroupPage from "./pages/GroupPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { GroupProvider } from "./providers/GroupProvider.jsx";
import { UserProvider } from "./providers/UserProvider.jsx";
import useUser from "./hooks/useUser.js";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const AppRoutes = () => {
  const user = useUser();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <HomePage /> : <RegisterPage />,
    },
    {
      path: "/group/:id",
      element: <GroupPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <GroupProvider>
      <AppRoutes />
    </GroupProvider>
  </UserProvider>,
);
