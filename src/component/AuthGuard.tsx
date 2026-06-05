import { Outlet, Navigate } from "react-router-dom";

const AuthGuard = () => {
  const user = localStorage.getItem("loggedAdmin");

  // 🔐 Not logged in → redirect to login
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ Logged in → allow access
  return <Outlet />;
};

export default AuthGuard;