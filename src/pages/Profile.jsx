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
                                    {/* <img width="150" className="img-fluid mt-4" src={ProfileImage} alt="profile-img" /> */}
                                </div>

                                <button className="btn btn-primary bg-success mt-2">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;