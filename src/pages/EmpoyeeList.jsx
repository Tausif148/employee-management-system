import { useState } from "react";
import ProfileImage from '../assets/images/profileImg.jpg';
import Sidebar from "../layouts/Sidebar";
import EmployeeDetails from '../component/EmployeeDetails';

const EmployeeList = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [employees] = useState([
        {
            id: '1',
            img: ProfileImage,
            name: 'Tausif Ahmad',
            post: 'Software Developer',
            email: 'sheikhtousif148@gmail.com',
            phone: '8793194591',
            status: 'Active'
        },
        {
            id: '2',
            img: ProfileImage,
            name: 'Divyani Kokate',
            post: 'Web Developer',
            email: 'divyanikokate1999@gmail.com',
            phone: '9876543210',
            status: 'Inactive'
        },
        {
            id: '3',
            img: 'https://dummyjson.com/icon/sophiab/128',
            name: 'Sophia Brown',
            post: 'Accountant',
            email: 'sophia.brown@x.dummyjson.com',
            phone: '+81 210-652-2785',
            status: 'Active'
        },
        {
            id: '4',
            img: 'https://dummyjson.com/icon/jamesd/128',
            name: 'James Davis',
            post: 'Research Analyst',
            email: 'james.davis@x.dummyjson.com',
            phone: '+49 614-958-9364',
            status: 'Inactive'
        },
        {
            id: '5',
            img: 'https://dummyjson.com/icon/emmaj/128',
            name: 'Emma Miller',
            post: 'QA Engineer',
            email: 'emma.miller@x.dummyjson.com',
            phone: '+91 759-776-1614',
            status: 'Active'
        },
        {
            id: '6',
            img: 'https://dummyjson.com/icon/oliviaw/128',
            name: 'Olivia Wilson',
            post: 'Research Analyst',
            email: 'olivia.wilson@x.dummyjson.com',
            phone: '+91 607-295-6448',
            status: 'Active'
        },
        {
            id: '7',
            img: 'https://dummyjson.com/icon/alexanderj/128',
            name: 'Alexander Jones',
            post: 'Web Developer',
            email: 'alexander.jones@x.dummyjson.com',
            phone: '+61 260-824-4986',
            status: 'Inactive'
        },
        {
            id: '8',
            img: 'https://dummyjson.com/icon/avat/128',
            name: 'Ava Taylor',
            post: 'CEO',
            email: 'ava.taylor@x.dummyjson.com',
            phone: '+1 458-853-7877',
            status: 'Active'
        },
        {
            id: '9',
            img: 'https://dummyjson.com/icon/ethanm/128',
            name: 'Ethan Martinez',
            post: 'Legal Counsel',
            email: 'ethan.martinez@x.dummyjson.com',
            phone: '+92 933-608-5081',
            status: 'Inactive'
        },
        {
            id: '10',
            img: 'https://dummyjson.com/icon/isabellad/128',
            name: 'Isabella Anderson',
            post: 'CFO',
            email: 'isabella.anderson@x.dummyjson.com',
            phone: '+49 770-658-4885',
            status: 'Active'
        },
        {
            id: '11',
            img: 'https://dummyjson.com/icon/michaelw/128',
            name: 'Michael White',
            post: 'Frontend Developer',
            email: 'michael.white@x.dummyjson.com',
            phone: '+44 770-123-4567',
            status: 'Active'
        },
        {
            id: '12',
            img: 'https://dummyjson.com/icon/charlotteh/128',
            name: 'Charlotte Harris',
            post: 'UI/UX Designer',
            email: 'charlotte.harris@x.dummyjson.com',
            phone: '+61 490-567-890',
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
                <Sidebar ProfileImage={ProfileImage} />

                <div className="col-md-9">
                    {/* <div className="d-flex justify-content-between">
                        <h2>Employee List</h2>
                        <Link className="btn btn-primary bg-success d-flex align-items-center" to="/addemployee" >Add New</Link>
                    </div> */}

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