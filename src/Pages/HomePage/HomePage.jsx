import React from 'react'
import './HomePage.css'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'
import background from '../../Assets/Pictures/mapa_back.svg'
import NewsSection from '../../Components/NewsSection/NewsSection'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'




export default function HomePage() {
  return (
    
    <>
    <div className="containerHome"> 
    <img src={background} alt="imagen" />
    </div>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <NewsSection />
      <OurTrip />
      <BusAnimation />
      <ButtonBackToTop/>
</>
  )

  
}
