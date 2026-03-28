import { useState } from "react";
import ProfileImage from '../assets/images/profileImg.jpg';
import EmployeeDetails from './EmployeeDetails';

const EmployeeList = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [employees] = useState([
        {
            id: '1',
            img: ProfileImage,
            name: 'Tausif Ahmad',
            post: 'Software developer',
            email: 'sheikhtousif148@gmail.com',
            phone: '8793194591',
            status: 'Active'

        },
        {
            id: '2',
            img: ProfileImage,
            name: 'Divyani Kokate',
            post: 'Web developer',
            email: 'divyanikokate1999@gmail.com',
            phone: '9876543210',
            status: 'Inactive'
        }
    ]);

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.post.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-3 pb-5">
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                        <h2>Employee List</h2>
                        <button className="btn btn-primary bg-success">Add New</button>
                    </div>

                    {/* SEARCH */}
                    <div className="mt-4 mb-3">
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-success border-end-0">
                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control form-control-lg shadow-none border"
                                placeholder="Search employee..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* LIST */}
                    <div className="row mt-4">
                        {filteredEmployees.length > 0 ? (
                            filteredEmployees.map(emp => (
                                <EmployeeDetails
                                    key={emp.id}
                                    img={emp.img}
                                    name={emp.name}
                                    post={emp.post}
                                    email={emp.email}
                                    phone={emp.phone}
                                    status={emp.status}
                                />
                            ))
                        ) : (
                            <p className="text-center mt-4">No employees found</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployeeList;