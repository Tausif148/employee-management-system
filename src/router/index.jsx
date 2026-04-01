import { createBrowserRouter } from "react-router";
import App from './../layouts/App.jsx'
import Register from "../pages/Register";
import Login from "../pages/Login";
import EmployeeList from "../pages/EmpoyeeList.jsx";
import AddEmployee from "../pages/AddEmployee.jsx";
import ChangePassword from "../pages/ChangePassword.jsx";
import Profile from "../pages/Profile.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/employee-management-system/",
                element: <EmployeeList />,
            },
            {
                path: "/addemployee",
                element: <AddEmployee />,
            },
            {
                path: "/admin/profile",
                element: <Profile />,
            },
            {
                path: "/admin/changepassword",
                element: <ChangePassword />,
            }
        ]
    },
    {
        path: "/admin/signup",
        element: <Register />,
    },
    {
        path: "/admin/login",
        element: <Login />,
    },
    {
        path: "/*",
        element: <PageNotFound />,
    },
]);

export default router;