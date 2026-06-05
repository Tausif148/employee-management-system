import type { IEmployee } from "../../../types/employee";
import { useEmployeeActions } from "../../../apiActions/useEmployeeActions";

// Removed local Employee interface; using shared type
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface EmployeeTableProps {
    data: IEmployee[] | [];
    onEdit: (employee: IEmployee) => void;
    refetch?: () => void;
}


const EmployeeTable = ({ data, onEdit, refetch }: EmployeeTableProps) => {
    const { tryDelete } = useEmployeeActions();

    const handleDelete = async (id: IEmployee['id']) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This employee will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#dc3545",
            confirmButtonText: "Yes, Delete",
        });

        if (!result.isConfirmed) return;

        try {
            await tryDelete(id);
            toast.success("Employee deleted successfully");
            refetch?.();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete employee");
        }
    };

    if (!data?.length) {
        return (
            <div className="col-12">
                <div className="alert alert-info text-center">
                    No Employees Found
                </div>
            </div>
        );
    }

    return (
        <>
            {data.map((employee) => (
                <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
                    key={employee.id}
                >
                    <div className="card border-0 shadow-sm h-100 position-relative">

                        {/* Status */}
                        <span className="position-absolute top-0 end-0 m-2 small d-flex align-items-center gap-1">
                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: employee.status === "Active" ? "green" : "red",
                                }}
                            />
                            <span
                                className={employee.status === "Active" ? "text-success" : "text-danger"}
                                style={{ fontSize: "11px" }}
                            >
                                {employee.status}
                            </span>
                        </span>

                        {/* Body */}
                        <div className="card-body text-center pt-3 pb-2">

                            {/* Avatar */}
                            {/* Avatar */}
                            <div className="d-flex justify-content-center mb-2">
                                {employee.image ? (
                                    <img
                                        src={employee.image}
                                        alt={employee.name}
                                        className="rounded-circle border border-success"
                                        style={{ width: 50, height: 50, objectFit: "cover" }}
                                    />
                                ) : (
                                    <div
                                        className="rounded-circle border border-success text-success d-flex align-items-center justify-content-center fw-bold"
                                        style={{ width: 50, height: 50, fontSize: 18 }}
                                    >
                                        {employee.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <h6 className="fw-bold mb-1">{employee.name}</h6>

                            {/* Position */}
                            <p className="text-muted mb-2" style={{ fontSize: "12px" }}>
                                {employee.post}
                            </p>

                            <hr className="my-2" />

                            {/* Email */}
                            <p className="mb-1 text-truncate" style={{ fontSize: "12px" }}>
                                <i className="fa-solid fa-envelope me-1 text-success"></i>
                                {employee.email}
                            </p>

                            {/* Phone */}
                            <p className="mb-0" style={{ fontSize: "12px" }}>
                                <i className="fa-solid fa-phone me-1 text-success"></i>
                                {employee.phone}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="card-footer bg-white border-0 d-flex gap-2 p-2">
                            <button
                                className="btn btn-sm btn-outline-primary w-50"
                                onClick={() => onEdit(employee)}
                            >
                                <i className="fa-solid fa-pen-to-square me-1"></i>
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-outline-danger w-50"
                                onClick={() => handleDelete(employee.id)}
                            >
                                <i className="fa-solid fa-trash me-1"></i>
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
};

export default EmployeeTable;