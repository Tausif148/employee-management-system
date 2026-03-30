
// Signup authentication 
export const userSignup = ({ name, email, password, confirmPassword }) => {
    if (!name || !email || !password || !confirmPassword) {
        return { success: false, message: "All fields are required" };
    }

    let users = localStorage.getItem('users') || '[]';
    users = JSON.parse(users);
    const isExist = users.find(item => item.email === email);

    if (isExist) {
        return { success: false, message: "Email already registered" };
    }

    users.push({ name, email, password, confirmPassword });
    // Converts the array into a string because localStorage only stores strings.
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "You have resitered successfully!" };
};


// Login authentication
export const userLogin = ({ email, password }) => {
    if (!email || !password) {
        return { success: false, message: "All fields are required" };
    }

    let users = localStorage.getItem("users");
    if (!users) {
        return { success: false, message: "No users found" };
    }

    users = JSON.parse(users);

    const isExist = users.find(user => user.email === email);
    if (!isExist) {
        return { success: false, message: "User not found" };
    }
    if (isExist.password !== password) {
        return { success: false, message: "Incorrect password" };
    }

    // store logged user
    localStorage.setItem("loggedUser", JSON.stringify(isExist));

    return { success: true, message: "Login successful", user: isExist };
};