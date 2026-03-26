import Sidebare from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg'

const Profile = () => {
    return (

        <div className="container">
            <div className="row my-5">
                <Sidebare ProfileImage={ProfileImage} />
                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header  text-white">
                            Profile
                        </div>
                        <div className="card-body">
                            <form action="" method="post">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Name" name="name" id="" />
                                    <small className="invalid-feedback"></small>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="text" className="form-control " placeholder="Email"  name="email" id="email" />
                                    <small className="invalid-feedback"></small>
                                </div>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Image</label>
                                    <input type="file" name="image" id="image" ></input>    
                                    {/* <img width="150" className="img-fluid mt-4" src={ProfileImage} alt="profile-img" /> */}
                                </div>
                                <button className="btn btn-primary mt-2">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;