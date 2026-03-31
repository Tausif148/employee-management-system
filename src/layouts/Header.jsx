import { Link, NavLink } from "react-router";

const Header = () => {


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
                            Welcome, <strong>Tausif Ahmad</strong>
                        </span>

                        <NavLink
                            to="/admin/profile"
                            className="text-white text-decoration-none small"
                        >
                            Profile
                        </NavLink>

                        <NavLink
                            to="/login"
                            className="text-white text-decoration-none small"
                        >
                            Logout
                        </NavLink>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;