import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Sidebar from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg';
import { DataContext } from "../context/DataProvider";

const EditEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        post: "",
        email: "",
        phone: "",
        status: "active"
    });

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('usersList')) || [];
        const singleEmployee = users.find((user) => user.id == id);

        if (singleEmployee) {
            setEmployee(singleEmployee);
        }
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const { handleUpdateUser } = useContext(DataContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        const result = handleUpdateUser(employee);

        if (result) {
            navigate("/");
        }
    };

    return (
        <div className="container">
            <div className="row my-5">

                <Sidebar ProfileImage={ProfileImage} />

                <div className="col-md-9">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-success text-white">
                            Edit Employee
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleUpdate}>

                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={employee.name}
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
                                        value={employee.post}
                                        className="form-control"
                                        placeholder="Enter position"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={employee.email}
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
                                        value={employee.phone}
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
                                        value={employee.status || "active"}
                                        onChange={handleChange}
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>

                                <button className="btn btn-outline-success" style={{ marginRight: '10px' }}>
                                    Update Employee
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default EditEmployee;