import React from 'react'
import AdminDashboard from './Routes/Admin/AdminDashboard'
import Login from './components/Admin/AdminLogin/Login'
import Menu from './Routes/Admin/Menu'
import Order from './Routes/Admin/Order'
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/menuManagemant' element={<Menu/>} />
      <Route path='/orders' element={<Order/>} />
      <Route path='/adminDash' element={<AdminDashboard/>} />
      <Route path='/adminLogin' element={<Login/>} />
    </Routes>
    </>
  )
}


export default App