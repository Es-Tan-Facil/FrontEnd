import React from 'react'
import Header from '../../Components/Header/Header'
import background from '../../Assets/Pictures/BackgroundAmerica.svg'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'
import News from '../../Components/News/News'

export default function NewsPage() {
    return (
        <>
            <div className="containerHome">
                <img data-testid="background-img" src={background} alt="imagen" />
            </div>
            <div data-testid="header-component">
                <Header />
            </div>
            <div data-testid="news-component">
                <News />
            </div>
            <div data-testid="button-back-to-top-component">
                <ButtonBackToTop />
            </div>
        </>
    )
}