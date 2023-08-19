import React from 'react'
import dashdata from '../../../API/DashboardDetails'
import "./Dashboard.css"
const AdminDashboardDetails = () => {
    return (
        <>
            <section className="dashboard">
                {
                    dashdata.map((currElem, index) => {
                        const { Name, Number } = currElem;
                        return (
                            <div className="widget" key={index}>
                                <h2>{Name}</h2>
                                <p>{Number}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default AdminDashboardDetails