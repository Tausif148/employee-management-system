import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const signUp = () => {

    }

    const login = () => {

    }


    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;    
