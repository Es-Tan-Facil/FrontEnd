import React from 'react'
import background from '../../Assets/Pictures/BackgroundAmerica.svg'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'
import News from '../../Components/News/News'
import HeaderPages from '../../Components/HeaderPages/HeaderPages'

export default function NewsPage() {
    return (
        <>
            <div className="containerHome">
                <img data-testid="background-img" src={background} alt="imagen" />
            </div>
            <div data-testid="header-component">
                <HeaderPages />
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