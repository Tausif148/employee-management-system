import { createHashRouter } from "react-router-dom";

import App from "../layouts/App.jsx";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthGuard from "../component/AuthGuard.jsx";
import EmployeeList from "../pages/EmployeeList.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";
import Profile from "../pages/Profile.jsx";
import AddEmployee from "../pages/AddEmployee.jsx";
import EditEmployee from "../pages/EditEmployee.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

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
                        path: "admin/profile",
                        element: <Profile />,
                    },
                    {
                        path: "admin/changepassword",
                        element: <ChangePassword />,
                    },
                    {
                        path: "",   // default route
                        element: <EmployeeList />,
                    },
                    {
                        path: "addemployee",
                        element: <AddEmployee />,
                    },
                    {
                        path: "editemployee/:id",
                        element: <EditEmployee />,
                    }
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