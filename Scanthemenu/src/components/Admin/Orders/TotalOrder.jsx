import React from 'react'

const TotalOrder = () => {
  return (
    <>
      <section className="orders">
            <h2>Orders</h2>
            <table>
                <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Items Ordered</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>#123</td>
                    <td>John Doe</td>
                    <td>Pizza, Burger</td>
                    <td>Processing</td>
                </tr>
              
            </table>
        </section>
    </>
  )
}

export default TotalOrder