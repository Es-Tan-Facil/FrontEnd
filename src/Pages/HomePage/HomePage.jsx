import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import NewsCards from '../../Components/NewsCards/NewsCards'
import './HomePage.css'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'
function HomePage() {
  return (
    <>
    <NavBar/>
    <NewsCards />
    <BusAnimation />
    </>
  )
}

export default HomePage