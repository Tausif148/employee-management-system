import { useState } from "react";
import { Link } from "react-router";
import Sidebar from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: '',
        post: '',
        email: '',
        phone: '',
        image: null,
        status: 'active'
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            setEmployee({ ...employee, image: files[0] });
        } else {
            setEmployee({ ...employee, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee); // later send to backend
    };

    return (
        <div className="container">
            <div className="row my-5">

                <Sidebar ProfileImage={ProfileImage} />

                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-success text-white">
                            Add Employee
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter name"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Position */}
                                <div className="mb-3">
                                    <label className="form-label">Position</label>
                                    <input
                                        type="text"
                                        name="post"
                                        className="form-control"
                                        placeholder="Enter position"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Enter phone number"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Image */}
                                {/* <div className="mb-3">
                                    <label className="form-label">Profile Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div> */}

                                {/* Status */}
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                        name="status"
                                        className="form-control"
                                        onChange={handleChange}
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>

                                <button className="btn btn-success" style={{ marginRight: '10px' }}>
                                    Create Employee
                                </button>
                                <Link className="ml-3 btn btn-success" to='/'>Empoyee List</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddEmployee;