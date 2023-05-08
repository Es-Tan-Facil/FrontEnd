import React from 'react'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import Header from '../../Components/Header/Header'


export default function HomePage() {
  return (
    
    <>
      <Header/>
      <DonationCards />
      <WhoAreWe />
      <OurTrip />
    </>
  )
}
