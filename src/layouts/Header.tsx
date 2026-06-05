import { NavLink } from "react-router";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import type { MouseEvent } from "react";
import { AuthContext } from 'src/context/AuthProvider';

const Header = () => {

    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext must be used inside AuthProvider");
    }

    const { user, logout } = authContext;
    const navigate = useNavigate();


    const handleLogout = (
        e: MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        logout();
        navigate("/admin/login");
    };

    return (
        <header className="shadow-sm  bg-success">
            <div className="container py-2">
                <div className="d-flex justify-content-between align-items-center">

                    {/* Logo */}
                    <NavLink to="/" className="text-white fw-bold fs-4 text-decoration-none">
                        Logo
                    </NavLink>

                    {/* Right Section */}
                    <div className="d-flex align-items-center text-white gap-3">

                        <span className="small">
                            Welcome, <strong>{user?.name || "Guest"}</strong>
                        </span>

                        <NavLink
                            to="/admin/profile"
                            className="text-white text-decoration-none small"
                        >
                            Profile
                        </NavLink>

                        <a onClick={handleLogout} href="#"
                            className="text-white text-decoration-none small"
                        >
                            Logout
                        </a>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;