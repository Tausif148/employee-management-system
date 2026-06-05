interface Admin {
    name: string;
    email: string;
    password: string;
}

interface SignupParams {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginParams {
    email: string;
    password: string;
}

interface AuthResult {
    success: boolean;
    message: string;
    user?: Admin;
}

// -------------------Signup authentication -------------------
export const userSignup = ({ name, email, password, confirmPassword }: SignupParams): AuthResult => {
    if (!name || !email || !password || !confirmPassword) {
        return { success: false, message: "All fields are required" };
    }

    if (password !== confirmPassword) {
        return { success: false, message: "Passwords do not match" };
    }

    const admins: Admin[] = JSON.parse(localStorage.getItem('admins') || '[]');

    const isExist = admins.find(item => item.email === email);
    if (isExist) {
        return { success: false, message: "Email already registered" };
    }

    admins.push({ name, email, password });
    localStorage.setItem("admins", JSON.stringify(admins));

    return { success: true, message: "You have registered successfully!" };
};

// -------------------Login authentication-------------------
export const userLogin = ({ email, password }: LoginParams): AuthResult => {
    if (!email || !password) {
        return { success: false, message: "All fields are required" };
    }

    const admins: Admin[] = JSON.parse(localStorage.getItem("admins") || '[]');

    if (!admins.length) {
        return { success: false, message: "No admin found" };
    }

    const isExist = admins.find(user => user.email === email);
    if (!isExist) {
        return { success: false, message: "Admin not found" };
    }
    if (isExist.password !== password) {
        return { success: false, message: "Incorrect password" };
    }

    return { success: true, message: "Login successful", user: isExist };
};