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
      <Header data-testid="header" />
      <DonationCards data-testid="donation-cards" />
      <WhoAreWe data-testid="who-are-we" />
      <NewsSection data-testid="news-section" />
      <OurTrip data-testid="our-trip" />
      <BusAnimation data-testid="bus-animation" />
      <ButtonBackToTop data-testid="button-back-to-top" />
    </>
  )
}
