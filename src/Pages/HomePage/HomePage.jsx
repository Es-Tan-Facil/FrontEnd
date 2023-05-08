import React from 'react'
import DonationCards from '../../Components/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import OurTrip from '../../Components/OurTrip/OurTrip'

export default function HomePage() {
  return (
    <>
      <NavBar/>
      <DonationCards />
      <WhoAreWe />
      <OurTrip />
    </>
  )
}
