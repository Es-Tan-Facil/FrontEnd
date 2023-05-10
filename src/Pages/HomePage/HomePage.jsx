import React from 'react'
import './HomePage.css'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'
import News from '../../Components/News/News'




export default function HomePage() {
  return (
    
    <>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <News />
      <OurTrip />
    <BusAnimation />
</>
  )

  
}
