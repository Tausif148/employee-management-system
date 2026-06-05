
export interface User {
    name: string;
    email: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface Employee {
    id?: number;
    name: string;
    email: string;
    phone: string;
    post: string;
    status: string;
    image?: string;
}

export interface ApiResult {
    success: boolean;
    message: string;
    user?: User;
}