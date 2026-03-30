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
                path: "/",
                element: <EmployeeList />,
            },
            {
                path: "/addemployee",
                element: <AddEmployee />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/changepassword",
                element: <ChangePassword />,
            }
        ]
    },
    {
        path: "/signup",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/*",
        element: <PageNotFound />,
    },
]);

export default router;