import { Link } from "react-router";

const Sidebar = ({ ProfileImage }) => {
    return (

        <aside className="col-md-3 " >
            <div className="card border-0 shadow-lg">
                <div className="card-header bg-success text-white">
                    Welcome, John Doe
                </div>
                <div className="card-body">
                    <div className="text-center mb-3">
                        <img src={ProfileImage} className="img-fluid rounded-circle" alt="Luna John" />
                    </div>
                    <div className="h5 text-center">
                        <strong>John Doe</strong>
                        <p className="h6 mt-2 text-black">Software developer</p>
                    </div>
                </div>
            </div>
            <div className="card border-0 shadow-lg mt-3">
                <div className="card-header bg-success text-white">
                    Navigation
                </div>
                <div className="card-body sidebar">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#">My Task</a>

                        </li>
                        <li className="nav-item">
                            <Link to="/changepassword">Change Password</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;