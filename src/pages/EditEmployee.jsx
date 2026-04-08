
import Sidebar from "../layouts/Sidebar";
import ProfileImage from '../assets/images/profileImg.jpg';
// import { DataContext } from "../context/DataProvider";

import { ToastContainer, toast } from 'react-toastify';

const EditEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        post: "",
        email: "",
        phone: "",
        status: "active"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // const { handleEditUser } = useContext(DataContext);

    const handleAdd = (e) => {
        e.preventDefault();
        // console.log("Console from form");
        // console.log(employee); 
        // handleAddUser(employee);//  send to backend

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
                                        type="text"
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

                                <button className="btn btn-outline-success" style={{ marginRight: '10px' }}>
                                    Edit Employee
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