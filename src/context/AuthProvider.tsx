import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

import { userLogin, userSignup } from "src/api";

import type {
  ApiResult,
  AuthContextType,
  LoginData,
  ProfileData,
  SignupData,
  User,
  ChangePasswordData,
} from "src/interface/useAuthTypes";

// ======================
// Context
// ======================

export const AuthContext = createContext<AuthContextType | null>(null);

// ======================
// Props
// ======================

interface AuthProviderProps {
  children: ReactNode;
}

// ======================
// Provider
// ======================

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ======================
  // Load User
  // ======================

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedAdmin");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ======================
  // Signup
  // ======================

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

    if (!result.success) {
      setSuccess("");
      setError(result.message);
      return false;
    }

    const newUser: User = {
      name,
      email,
      password,
    };

    setUser(newUser);
    setError("");
    setSuccess(result.message);

    localStorage.setItem("loggedAdmin", JSON.stringify(newUser));

    return true;
  };

  // ======================
  // Login
  // ======================

  const login = ({ email, password }: LoginData): boolean => {
    const result = userLogin({
      email,
      password,
    }) as ApiResult;

    if (!result.success) {
      setSuccess("");
      setError(result.message);
      return false;
    }

    setUser(result.user || null);
    setError("");
    setSuccess(result.message);

    localStorage.setItem("loggedAdmin", JSON.stringify(result.user));

    return true;
  };

  // ======================
  // Update Profile
  // ======================

  const profile = ({
    name,
    email,
    phone,
    address,
    bio,
  }: ProfileData): boolean => {
    const updatedUser: User = {
      ...user,
      name,
      email,
      phone,
      address,
      bio,
    };

    setUser(updatedUser);

    localStorage.setItem("loggedAdmin", JSON.stringify(updatedUser));

    setError("");
    setSuccess("Profile updated successfully");

    return true;
  };

  // ======================
  // Change paassword
  // ======================
  const changePassword = ({
    oldPassword,
    newPassword,
    confirmPassword,
  }: ChangePasswordData): boolean => {
    if (!user) {
      setSuccess("");
      setError("User not found");
      return false;
    }

    if (user.password !== oldPassword) {
      setSuccess("");
      setError("Old password is incorrect");
      return false;
    }

    if (newPassword !== confirmPassword) {
      setSuccess("");
      setError("Passwords do not match");
      return false;
    }

    // Update current user
    const updatedUser = {
      ...user,
      password: newPassword,
    };

    // Update logged in user
    setUser(updatedUser);

    localStorage.setItem("loggedAdmin", JSON.stringify(updatedUser));

    // Update admins list
    const admins = JSON.parse(localStorage.getItem("admins") || "[]");

    const updatedAdmins = admins.map((admin: User) =>
      admin.email === user.email
        ? {
            ...admin,
            password: newPassword,
          }
        : admin,
    );

    localStorage.setItem("admins", JSON.stringify(updatedAdmins));

    setError("");
    setSuccess("Password changed successfully");

    return true;
  };
  // ======================
  // Logout
  // ======================

  const logout = (): void => {
    localStorage.removeItem("loggedAdmin");

    setUser(null);
    setSuccess("");
    setError("");
  };

  // ======================
  // Clear Messages
  // ======================

  const clearMessages = (): void => {
    setSuccess("");
    setError("");
  };

  // ======================
  // Provider Value
  // ======================

  const value: AuthContextType = {
    user,
    success,
    error,
    signup,
    login,
    logout,
    profile,
    changePassword,
    clearMessages,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
