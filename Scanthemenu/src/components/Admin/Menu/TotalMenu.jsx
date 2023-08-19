import React from 'react'
import MenuManagementDetails from "../../../API/MenuManagementDetails"
import Navbar from '../Header/Navbar'
import "./Menu.css"
const TotalMenu = () => {
    return (
        <>
            <section className="menu">
                <h2>Menu Management</h2>
                <Navbar />
                <ul>
                    {
                        MenuManagementDetails.map((currElem, index) => {
                            const { Title, Price, Edit, Delete } = currElem;
                            return (
                                <li>
                                    <span>{Title}</span>
                                    <span>{Price}</span>
                                    <button>{Edit}</button>
                                    <button>{Delete}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default TotalMenu