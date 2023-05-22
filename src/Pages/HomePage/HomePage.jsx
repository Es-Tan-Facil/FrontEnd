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
      <div className="containerHome hidden md:block">
        <img data-testid="background-img" src={background} alt="imagen" />
      </div>
      <div data-testid="header-component">
        <Header />
      </div>
      <div data-testid="donation-cards-component">
        <DonationCards />
      </div>
      <div data-testid="who-are-we-component">
        <WhoAreWe />
      </div>
      <div data-testid="news-section-component">
        <NewsSection />
      </div>
      <div data-testid="our-trip-component">
        <OurTrip />
      </div>
      <div data-testid="bus-animation-component">
        <BusAnimation />
      </div>
      <div data-testid="button-back-to-top-component">
        <ButtonBackToTop />
      </div>
    </>
  )
}
