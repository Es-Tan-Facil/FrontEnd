import React from 'react'

import Header from '../../Components/Header/Header'
import background from '../../Assets/Pictures/BackgroundAmerica.svg'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'
import News from '../../Components/News/News'

export default function NewsPage() {
    return (
        <>
            <div className="containerHome">
                <img src={background} alt="imagen" />
            </div>
            <Header />
            <News />
            <ButtonBackToTop />
        </>
    )
}