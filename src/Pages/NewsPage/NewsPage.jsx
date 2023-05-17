import React from 'react'
import background from '../../Assets/Pictures/BackgroundAmerica.svg'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'
import News from '../../Components/News/News'
import HeaderPages from '../../Components/HeaderPages/HeaderPages'

export default function NewsPage() {
    return (
        <>
            <div className="containerHome">
                <img src={background} alt="imagen" />
            </div>
            <HeaderPages />
            <News />
            <ButtonBackToTop />
        </>
    )
}