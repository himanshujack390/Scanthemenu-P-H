import React from 'react'
import Navbar from '../../components/User/Navbar'
import Hero from '../../components/User/Hero'
import Dishes from '../../components/User/Dishes'
import Chef from '../../components/User/Chef'
import Footer from '../../components/User/Footer'
// import CustomerReview from '../componets/CustomerReview'/
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dishes />
      <Chef />
      <Footer />
      {/* <CustomerReview /> */}

    </>
  )
}

export default Home
