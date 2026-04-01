import Sidebare from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg'

const Profile = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <Sidebare ProfileImage={ProfileImage} />
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
                                        <input type="text" className="form-control" placeholder="Full Name" />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email" />
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
                                        <textarea className="form-control" rows="2"></textarea>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Bio</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>

                                </div>

                                <div className="text-start d-flex gap-2">
                                    <button className="btn btn-outline-primary px-4 mr-5">
                                        Edit Profile
                                    </button>
                                    <button className="btn btn-outline-success px-4">
                                        Update Profile
                                    </button>
                                </div>

                            </form>
                        </div>
                        {/* <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        id="name"
                                    />
                                    <small className="invalid-feedback"></small>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        id="email"
                                    />
                                    <small className="invalid-feedback"></small>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                    />
                                    <img width="150" className="img-fluid mt-4" src={ProfileImage} alt="profile-img" />
                                </div>

                                <button className="btn btn-primary bg-success mt-2">Update</button>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;