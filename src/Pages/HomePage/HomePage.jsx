import React from 'react'
import './HomePage.css'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'
import NewsSection from '../../Components/NewsSection/NewsSection'




export default function HomePage() {
  return (
    
    <>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <NewsSection />
      <OurTrip />
    <BusAnimation />
</>
  )

  
}
