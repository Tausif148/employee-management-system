import { createContext, useState, useEffect } from "react";
import { userSignup, userLogin } from '../api/index';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedAdmin");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const [user, setUser] = useState(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Signup functionality
    const signup = ({ name, email, password, confirmPassword }) => {
        const result = userSignup({ name, email, password, confirmPassword });

        if (result.success) {
            setError('');
            setSuccess(result.message);
            setUser(name, email, password, confirmPassword)
            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);
            return true;
        } else {
            setSuccess('');
            setUser(result)
            setError(result.message);
            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);
            return false;
        }
    }

    // Login functionality 
    const login = ({ email, password }) => {
        const result = userLogin({ email, password });

        if (result.success) {
            setError('');
            setSuccess(result.message);

            setUser(result.user);
            // ✅ ADD THIS
            localStorage.setItem("loggedAdmin", JSON.stringify(result.user));

            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);

            return true;
        }
        else {
            setSuccess('');
            setError(result.message);

            setTimeout(() => {
                setSuccess("");
                setError("");
            }, 4000);

            return false;
        }
    };

    // Logout functionality
    const logout = () => {
        localStorage.removeItem("loggedAdmin");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, error, success, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;    
