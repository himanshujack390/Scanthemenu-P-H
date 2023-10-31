import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Dashboard.css"
const Navbar = () => {
    return (
        <>
            <header>
                <h1>Food Ordering Admin Panel</h1>

                <nav className='adminNavbar'>
                    <ul>
                        <li>
                            <NavLink to='/adminDash'>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders">Orders</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menuManagemant">Menu</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Navbar