import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import GroupPage from "./pages/GroupPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { GroupProvider } from "./providers/GroupProvider.jsx";
import { UserProvider } from "./providers/UserProvider.jsx";
import { UserGroupProvider } from "./providers/UserGroupsProvider.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { SearchResultsProvider } from "./providers/SearchResultsProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import useUser from "./hooks/useUser.js";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

const AppRoutes = () => {
  const { user } = useUser();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <HomePage /> : <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/group/:id",
          element: <GroupPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <UserProvider>
      <UserGroupProvider>
        <SearchResultsProvider>
          <GroupProvider>
            <AppRoutes />
          </GroupProvider>
        </SearchResultsProvider>
      </UserGroupProvider>
    </UserProvider>
  </AuthProvider>,
);
