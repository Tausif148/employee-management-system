
const Sidebar = ({ ProfileImage }) => {
   return (
        <>
            <div className="col-md-3" >
                <div className="card border-0 shadow-lg">
                    <div className="card-header  text-white">
                        Welcome, John Doe
                    </div>
                    <div className="card-body">
                        <div className="text-center mb-3">
                            <img src={ProfileImage} className="img-fluid rounded-circle" alt="Luna John" />
                        </div>
                        <div className="h5 text-center">
                            <strong>John Doe</strong>
                            <p className="h6 mt-2 text-muted">Software developer</p>
                        </div>
                    </div>
                </div>
                <div className="card border-0 shadow-lg mt-3">
                    <div className="card-header  text-white">
                        Navigation
                    </div>
                    <div className="card-body sidebar">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="profile.html">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="my-reviews.html">My Task</a>
                            </li>
                            <li className="nav-item">
                                <a href="change-password.html">Change Password</a>
                            </li>
                            <li className="nav-item">
                                <a href="login.html">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;