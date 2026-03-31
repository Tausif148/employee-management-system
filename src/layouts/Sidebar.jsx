import { NavLink } from "react-router";

const Sidebar = ({ ProfileImage }) => {
    return (

        <aside className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3">

                {/* Profile Section */}
                <div className="text-center mt-4 mb-4">
                    <img
                        src={ProfileImage}
                        className="rounded-circle mb-2"
                        alt="User"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <h6 className="mb-0 fw-semibold">Tausif Ahmad</h6>
                    <small className="text-muted">Admin</small>
                </div>

                {/* Navigation */}
                <ul className="nav flex-column gap-2">

                    <li>
                        <NavLink
                            to="/admin/profile"
                            className={({ isActive }) =>
                                `nav-link rounded px-3 py-2 ${isActive
                                    ? "bg-success text-white"
                                    : "text-dark"
                                }`
                            }
                        >
                            <i className="fa fa-user me-2"></i> Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/addemployee"
                            className={({ isActive }) =>
                                `nav-link rounded px-3 py-2 ${isActive
                                    ? "bg-success text-white"
                                    : "text-dark"
                                }`
                            }
                        >
                            <i className="fa fa-plus me-2"></i> Add Employees
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link rounded px-3 py-2 ${isActive
                                    ? "bg-success text-white"
                                    : "text-dark"
                                }`
                            }
                        >
                            <i className="fa fa-users me-2"></i> Employees List
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/admin/changepassword"
                            className={({ isActive }) =>
                                `nav-link rounded px-3 py-2 ${isActive
                                    ? "bg-success text-white"
                                    : "text-dark"
                                }`
                            }
                        >
                            <i className="fa fa-lock me-2"></i> Change Password
                        </NavLink>
                    </li>

                    <li>
                        <a href="#" className="nav-link text-danger rounded px-3 py-2">
                            <i className="fa fa-sign-out-alt me-2"></i> Logout
                        </a>
                    </li>

                </ul>
            </div>
        </aside>

    )
}

export default Sidebar;