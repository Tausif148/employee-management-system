import { Outlet } from 'react-router'
import Header from './Header.jsx'

export default function App() {
  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  )
}


