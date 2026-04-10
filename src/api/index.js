
// -------------------Signup authentication -------------------
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



// -------------------Login authentication-------------------
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

    return { success: true, message: "Login successful", user: isExist };
};



// -------------------Adding New Employee-------------------------
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, message: "Invalid email format" };
    }

    // Phone validation
    if (phone.length !== 10) {
        return { success: false, message: "Phone must be 10 digits" };
    }

    // Get existing data
    let usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // Check duplicate (email OR name + phone)
    const isExist = usersList.find(
        item => item.email === email ||
            (item.name === name && item.phone === phone)
    );

    if (isExist) {
        return { success: false, message: "User already exists" };
    }

    // Add unique ID
    const newId = `emp${usersList.length + 1}`;

    const newEmployee = {
        id: newId,
        name,
        post,
        email,
        phone,
        status
    };

    // Save new employee
    usersList.push(newEmployee);

    localStorage.setItem("usersList", JSON.stringify(usersList));

    return { success: true, message: "You have added successfully!" };
};


// -------------------Deleting Employee-------------------------
export const userDelete = (id) => {

    let usersList = JSON.parse(localStorage.getItem('usersList')) || [];

    // Remove user with matching id
    const updatedList = usersList.filter(item => item.id !== id);

    // Save updated list back to localStorage
    localStorage.setItem('usersList', JSON.stringify(updatedList));

    return { success: true, message: "User deleted successfully" };
};



// -------------------Updating Employee-------------------------
export const userUpdate = (employee) => {
    const users = JSON.parse(localStorage.getItem('usersList')) || [];

    const updatedUsers = users.map((user) =>
        user.id == employee.id ? employee : user
    );

    localStorage.setItem('usersList', JSON.stringify(updatedUsers));

    return {
        success: true,
        message: "Employee updated successfully!"
    };
};