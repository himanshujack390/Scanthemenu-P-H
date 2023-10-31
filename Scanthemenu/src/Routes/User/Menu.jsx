import React, { useState } from 'react'
import Navbar from '../../components/User/Navbar'
import MenuApi from '../../components/User/MenuApi'
import DishesCard from '../../components/User/DishesCard'
import Footer from '../../components/User/Footer'
import "../../components/User/style.css"
import "./routes.css"
import "./mediaRoutes.css"

const allValues = [...new Set(MenuApi.map((e) => e.Category)), "All"]
console.log(allValues);

const Menu = () => {
  const [items, setItems] = useState(MenuApi)
  const [nav, setNav] = useState(allValues)

  const filterItem = (category) => {
    if (category === "All") {
      return setItems(MenuApi)
    }
    const newItems = MenuApi.filter((currelem) => {
      return currelem.Category === category;
    })
    setItems(newItems)
  }
  return (
    <>
      <Navbar />
      <div className="menu_container">
        <div className="menu_nav">
          {
            nav.map((e, index) => (
              <button onClick={() => filterItem(e)} key={index}>{e}</button>
            ))
          }

        </div>

        <div className="menu_cards_container">
          {
            items.map((e, index) => {
              const { Name, Price, Description, Category, Image } = e;
              return (
                <DishesCard Name={Name} Price={Price} Description={Description} Image={Image} key={index} />
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Menu
