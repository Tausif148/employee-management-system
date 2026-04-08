
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
    // localStorage.setItem("loggedUser", JSON.stringify(isExist));

    return { success: true, message: "Login successful", user: isExist };
};


// User adding 
export const userList = (employee) => {
    const { name, post, email, phone, status } = employee;

    // Validation
    if (
        !name.trim() ||
        !post.trim() ||
        !email.trim() ||
        !phone.trim() ||
        !status.trim()
    ) {
        return { success: false, message: "All fields are required" };
    }

    // Optional: email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: "Invalid email format" };
    }

    // Optional: phone validation (10 digits)
    if (phone.length !== 10) {
        return { success: false, message: "Phone must be 10 digits" };
    }

    // Get existing data
    let usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // usersList = JSON.parse(usersList);
    // const isExist = usersList.find(item => item.email === email);

    // if (isExist) {
    //     return { success: false, message: "User already registered" };
    // }

    // Save new employee
    usersList.push(employee);

    localStorage.setItem("usersList", JSON.stringify(usersList));

    return { success: true, message: "You have added successfully!" };
};