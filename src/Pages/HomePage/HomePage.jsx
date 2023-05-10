import React from 'react'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'
import NewsCards from '../../Components/NewsCards/NewsCards'
import './HomePage.css'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'
import background from '../../Assets/Pictures/mapa_back.svg'


export default function HomePage() {
  return (
    
    <>
    <div className="containerHome"> 
    <img src={background} alt="imagen" />
    </div>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <NewsCards />
      <OurTrip />
    <BusAnimation />
   
</>
  )

  
}
