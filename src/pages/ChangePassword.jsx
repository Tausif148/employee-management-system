import Sidebare from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg'


const ChangePassword = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <Sidebare ProfileImage={ProfileImage} />
                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-success text-white">
                            Change Password
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="old_password" className="form-label">
                                    Old Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Old Password"
                                    name="old_password"
                                    id="old_password"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="new_password" className="form-label">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="New Password"
                                    name="new_password"
                                    id="new_password"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirm_password" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name="confirm_password"
                                    id="confirm_password"
                                />
                            </div>

                            <button className="btn btn-outline-success mt-2">
                                Chnage Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;