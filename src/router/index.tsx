import { createHashRouter } from "react-router-dom";

// Common layout
import App from "../layouts/App.jsx";

// Authentication
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import AuthGuard from "src/component/AuthGuard";
import ChangePassword from "src/pages/authentication/ChangePassword.jsx";
import Profile from "../pages/authentication/Profile.jsx";

// 404
import PageNotFound from "src/pages/PageNotFound.js";

// Add New Employee
import NewEmployeeList from "../pages/employee/index";

const router = createHashRouter([
  // Public Routes
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/signup",
    element: <Register />,
  },

  // Main Layout
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <AuthGuard />,
        children: [
          {
            path: "/",
            element: <NewEmployeeList />,
          },
          {
            path: "admin/profile",
            element: <Profile />,
          },
          {
            path: "admin/changepassword",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },

  // 404
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
