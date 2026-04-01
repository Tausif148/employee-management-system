import { createBrowserRouter } from "react-router-dom";

import App from "../layouts/App.jsx";
import Register from "../pages/Register";
import Login from "../pages/Login";
import EmployeeList from "../pages/EmployeeList.jsx";
import AddEmployee from "../pages/AddEmployee.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";
import Profile from "../pages/Profile.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import AuthGuard from "../component/AuthGuard.jsx";

const router = createBrowserRouter([
    // Public Routes
    {
        path: "/admin/login",
        element: <Login />,
    },
    {
        path: "/admin/signup",
        element: <Register />,
    },
    {
        path: "/",
        element: <App />,
        children: [
            // Protected Routes
            {
                element: <AuthGuard />,
                children: [
                    {
                        path: "/admin/profile",
                        element: <Profile />,
                    },
                    {
                        path: "/admin/changepassword",
                        element: <ChangePassword />,
                    },
                    {
                        path: "",
                        element: <EmployeeList />,
                    },
                    {
                        path: "addemployee",
                        element: <AddEmployee />,
                    }
                ],
            },
        ],
    },

    //  404
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;