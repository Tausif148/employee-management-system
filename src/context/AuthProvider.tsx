import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { userSignup, userLogin } from "src/api/index";
import type { User, SignupData, LoginData, ApiResult } from 'src/interface/useAuthTypes';

interface AuthContextType {
    user: User | null;
    error: string;
    success: string;
    signup: (data: SignupData) => boolean;
    login: (data: LoginData) => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | any>(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedAdmin");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const signup = ({
        name,
        email,
        password,
        confirmPassword,
    }: SignupData): boolean => {
        const result = userSignup({
            name,
            email,
            password,
            confirmPassword,
        }) as ApiResult;

        if (result.success) {
            setError("");
            setSuccess(result.message);

            setUser({
                name,
                email,
            });

            localStorage.setItem(
                "loggedAdmin",
                JSON.stringify({ name, email })
            );

            return true;
        }

        setSuccess("");
        setError(result.message);
        return false;
    };

    const login = ({ email, password }: LoginData): boolean => {
        const result = userLogin({ email, password }) as ApiResult;

        if (result.success) {
            setError("");
            setSuccess(result.message);

            setUser(result.user);

            localStorage.setItem(
                "loggedAdmin",
                JSON.stringify(result.user)
            );

            return true;
        }

        setSuccess("");
        setError(result.message);

        return false;
    };

    const logout = () => {
        localStorage.removeItem("loggedAdmin");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                success,
                signup,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;