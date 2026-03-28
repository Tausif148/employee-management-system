import { createBrowserRouter } from "react-router";
import App from '../App'
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/signup",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;