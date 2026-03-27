import './App.css'
import Header from './layouts/Header.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import ChangePassword from './pages/ChangePassword.jsx'
import AddEmployee from './pages/AddEmployee.jsx'
import EmployeeList from './pages/EmpoyeeList.jsx'

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


