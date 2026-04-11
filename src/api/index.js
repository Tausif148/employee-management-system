
// -------------------Signup authentication -------------------
export const userSignup = ({ name, email, password, confirmPassword }) => {
    if (!name || !email || !password || !confirmPassword) {
        return { success: false, message: "All fields are required" };
    }

    let admins = localStorage.getItem('admins') || '[]';

    admins = JSON.parse(admins);
    const isExist = admins.find(item => item.email === email);

    if (isExist) {
        return { success: false, message: "Email already registered" };
    }

    admins.push({ name, email, password, confirmPassword });
    // Converts the array into a string because localStorage only stores strings.
    localStorage.setItem("admins", JSON.stringify(admins));

    return { success: true, message: "You have resitered successfully!" };
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
    let employeeList = JSON.parse(localStorage.getItem('employeeList')) || [];

    // Check duplicate (email OR name + phone)
    const isExist = employeeList.find(
        item => item.email === email ||
            (item.name === name && item.phone === phone)
    );

    if (isExist) {
        return { success: false, message: "User already exists" };
    }

    // Add unique ID
    const newId = `emp${employeeList.length + 1}`;

    const newEmployee = {
        id: newId,
        name,
        post,
        email,
        phone,
        status
    };

    // Save new employee
    employeeList.push(newEmployee);

    localStorage.setItem("employeeList", JSON.stringify(employeeList));

    return { success: true, message: "You have added successfully!" };
};


// -------------------Deleting Employee-------------------------
export const userDelete = (id) => {

    let employeeList = JSON.parse(localStorage.getItem('employeeList')) || [];

    // Remove user with matching id
    const updatedList = employeeList.filter(item => item.id !== id);

    // Save updated list back to localStorage
    localStorage.setItem('employeeList', JSON.stringify(updatedList));

    return { success: true, message: "User deleted successfully" };
};



// -------------------Updating Employee-------------------------
export const userUpdate = (employee) => {
    const users = JSON.parse(localStorage.getItem('employeeList')) || [];

    const updatedUsers = users.map((user) =>
        user.id == employee.id ? employee : user
    );

    localStorage.setItem('employeeList', JSON.stringify(updatedUsers));

    return {
        success: true,
        message: "Employee updated successfully!"
    };
};