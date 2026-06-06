import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "src/context/AuthProvider";
import ProfileImage from "src/assets/images/profile-image.jpg";

const Sidebar = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext must be used within AuthProvider");
    }

    const { user, logout } = authContext;
    const navigate = useNavigate();

    const handleLogout = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        logout();
        navigate("/admin/login");
    };

      const auth = useContext(AuthContext);
    

    return (
        <div className="card border-0 shadow-sm rounded-4 p-3">
            {/* Profile Section */}
            <div className="text-center mt-4 mb-4">
                <img
                    src={ProfileImage}
                    className="rounded-circle mb-2"
                    alt="User"
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                    }}
                />

                <h6 className="mb-0 fw-semibold">
                    {user?.name || "Guest"}
                </h6>

                <small className="text-muted">Admin</small>
            </div>

            {/* Navigation */}
            <ul className="nav flex-column gap-2">
                <li>
                    <NavLink
                        to="/"
                                            onClick={() => auth?.clearMessages()}

                        className={({ isActive }) =>
                            `nav-link rounded px-3 py-2 ${isActive
                                ? "bg-success text-white"
                                : "text-dark"
                            }`
                        }
                    >
                        <i className="fa fa-users me-2"></i>
                        Employees List
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/admin/profile"
                                            onClick={() => auth?.clearMessages()}

                        className={({ isActive }) =>
                            `nav-link rounded px-3 py-2 ${isActive
                                ? "bg-success text-white"
                                : "text-dark"
                            }`
                        }
                    >
                        <i className="fa fa-user me-2"></i>
                        Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/admin/changepassword"
                                            onClick={() => auth?.clearMessages()}

                        className={({ isActive }) =>
                            `nav-link rounded px-3 py-2 ${isActive
                                ? "bg-success text-white"
                                : "text-dark"
                            }`
                        }
                    >
                        <i className="fa fa-lock me-2"></i>
                        Change Password
                    </NavLink>
                </li>

                <li>
                    <a
                        href="#"
                        onClick={handleLogout}
                        className="nav-link text-danger rounded px-3 py-2"
                    >
                        <i className="fa fa-sign-out-alt me-2"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;