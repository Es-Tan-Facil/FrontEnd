import React from 'react'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'
import NewsCards from '../../Components/NewsCards/NewsCards'
import './HomePage.css'
import BusAnimation from '../../Components/BusAnimation/BusAnimation'


export default function HomePage() {
  return (
    
    <>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <div className='news'>
      <NewsCards />
      <NewsCards />
      <NewsCards />
      </div>
    
      <OurTrip />
    <BusAnimation />
</>
  )

  
}
