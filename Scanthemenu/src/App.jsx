import React from 'react'
import AdminDashboard from './Routes/Admin/AdminDashboard'
import Login from './components/Admin/AdminLogin/Login'
import Menu from './Routes/Admin/Menu'
import Order from './Routes/Admin/Order'
import Home from "./Routes/User/Home"
import Contact from "./Routes/User/Contact"
import UserMenu from "./Routes/User/Menu"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/menuManagemant' element={<Menu />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/adminDash' element={<AdminDashboard />} />
        <Route path='/adminLogin' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<UserMenu />} />
      </Routes>
    </>
  )
}


export default App