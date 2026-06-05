import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../../layouts/Sidebar";
import { useFetchEmployees } from "../../queries/useFetchEmployee";
import EmployeeTable from "./component/EmployeeTable";
import AddEmployee from "./component/AddEmployee";
import type { IEmployee } from "src/interface/useEmployeeTypes";


const Index = () => {
  const {
    data: employeesList = [],
    refetch,
  } = useFetchEmployees();

  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingEmployee, setEditingEmployee] =
    useState<IEmployee | null>(null);

  const filteredEmployees = (
    employeesList as IEmployee[]
  ).filter((employee) =>
    employee.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setShowModal(true);
  };

  const handleEditEmployee = (
    employee: IEmployee
  ) => {
    setEditingEmployee(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditingEmployee(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                {/* Search */}
                <div
                  className="input-group"
                  style={{ maxWidth: "720px" }}
                >
                  <span className="input-group-text bg-success text-white border-success">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search employee..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </div>

                {/* Add Button */}
                <button
                  className="btn btn-success px-4"
                  onClick={handleAddEmployee}
                >
                  <i className="fa fa-plus me-2"></i>
                  Add Employee
                </button>
              </div>
            </div>
          </div>

          {/* Employee Table */}
          <div className="row">
            <EmployeeTable
              data={filteredEmployees}
              onEdit={handleEditEmployee}
              refetch={refetch}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{
            backgroundColor:
              "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title fw-bold">
                  {editingEmployee
                    ? "Edit Employee"
                    : "Add Employee"}
                </h5>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleCloseModal}
                />
              </div>

              <div className="modal-body">
                <AddEmployee
                  employee={editingEmployee}
                  closeModal={handleCloseModal}
                  refetch={refetch}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Index;