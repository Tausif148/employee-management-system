import { createContext } from "react";
import { userDelete, userList, userUpdate } from "../api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    // Context add user
    const handleAddUser = (employee) => {
        const result = userList(employee);

        if (result.success) {
            toast.success(result.message);
            return true;
        } else {
            toast.error(result.message);
            return false;
        }
    };


    // Context delete user 
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This user will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#dc3545",
            confirmButtonText: "Yes, delete"
        }).then((res) => {

            if (res.isConfirmed) {
                const result = userDelete(id);

                Swal.fire({
                    title: result.success ? "Deleted!" : "Error!",
                    text: result.message,
                    icon: result.success ? "success" : "error"
                });
                return true;
            }
        });
    };


    // Context update user
    const handleUpdateUser = (employee) => {
        const result = userUpdate(employee);

        if (result.success) {
            toast.success(result.message);
            return true;
        } else {
            toast.error(result.message);
            return false;
        }
    };


    return (
        <DataContext.Provider value={{ handleAddUser, handleDeleteUser, handleUpdateUser }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;