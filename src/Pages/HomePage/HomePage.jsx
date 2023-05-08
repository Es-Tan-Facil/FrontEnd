import React from 'react'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'
import NavBar from '../../Components/NavBar/NavBar'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <DonationCards />
      <WhoAreWe />
      <OurTrip />
    </>
  )
}
