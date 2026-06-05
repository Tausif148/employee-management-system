import { useContext } from "react";
import { AuthContext } from "src/context/AuthProvider";
import Sidebare from "src/layouts/Sidebar";

const Profile = () => {
    const auth = useContext(AuthContext);

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-3">
                    <Sidebare />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-success text-white">
                            Profile
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Full Name" defaultValue={auth?.user?.name || ""} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email" defaultValue={auth?.user?.email || ""} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Role</label>
                                        <input type="text" className="form-control" value="Admin" disabled />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Address</label>
                                        <textarea className="form-control" rows={2} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Bio</label>
                                        <textarea className="form-control" rows={3} />
                                    </div>
                                </div>
                                <div className="text-start d-flex gap-2">
                                    <button type="button" className="btn btn-outline-success px-4">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;