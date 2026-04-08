import { useState } from "react";
import ProfileImage from '../assets/images/profileImg.jpg';
import Sidebar from "../layouts/Sidebar";
import EmployeeDetails from '../component/EmployeeDetails';

const EmployeeList = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('usersList')) || []);

    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.post.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-3 pb-5">
            <div className="row mt-5">
                <Sidebar ProfileImage={ProfileImage} />

                <div className="col-md-9">
                    {/* SEARCH */}
                    <div className="mb-3">
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-success border-end-0">
                                <i className="fa-solid fa-magnifying-glass text-white"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control form-control-lg shadow-none border fs-6"
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