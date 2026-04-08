import { createContext, useState } from "react";
import { userList } from "../api";
import { toast } from "react-toastify";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const handleAddUser = (employee) => {
        const result = userList(employee);

        if (result.success) {
            // Success toast
            toast.success(result.message);
            return true;

        } else {
            // Error toast
            toast.error(result.message);
            return false;
        }
    };

    return (
        <DataContext.Provider value={{ handleAddUser }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;