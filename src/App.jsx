import './App.css'
import Header from './layouts/Header.jsx'
import Register from './compoenents/Register.jsx'
import Login from './compoenents/Login.jsx'
import Profile from './compoenents/Profile.jsx'
import ChangePassword from './compoenents/ChangePassword.jsx'
import AddEmployee from './compoenents/AddEmployee.jsx'
import EmployeeList from './compoenents/EmpoyeeList.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Register />
      <Login />
      <Profile />
      <ChangePassword />
      <EmployeeList />
      <AddEmployee />
    </>
  )
}


