// -------------------Signup authentication -------------------
export const userSignup = ({ name, email, password, confirmPassword }) => {
    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
        return { success: false, message: "All fields are required" };
    }

    // Check password match
    if (password !== confirmPassword) {
        return { success: false, message: "Passwords do not match" };
    }

    let admins = localStorage.getItem('admins') || '[]';
    admins = JSON.parse(admins);

    // Check if email already exists
    const isExist = admins.find(item => item.email === email);
    if (isExist) {
        return { success: false, message: "Email already registered" };
    }

    // Store only required data (do NOT store confirmPassword)
    admins.push({ name, email, password });

    localStorage.setItem("admins", JSON.stringify(admins));

    return { success: true, message: "You have registered successfully!" };
};


// -------------------Login authentication-------------------
export const userLogin = ({ email, password }) => {
    if (!email || !password) {
        return { success: false, message: "All fields are required" };
    }

    let admins = localStorage.getItem("admins");
    if (!admins) {
        return { success: false, message: "No admin found" };
    }

    admins = JSON.parse(admins);

    const isExist = admins.find(user => user.email === email);
    if (!isExist) {
        return { success: false, message: "Admin not found" };
    }
    if (isExist.password !== password) {
        return { success: false, message: "Incorrect password" };
    }

    return { success: true, message: "Login successful", user: isExist };
};



