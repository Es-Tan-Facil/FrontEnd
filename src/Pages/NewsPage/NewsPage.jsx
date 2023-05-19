import React from 'react'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'
import News from '../../Components/News/News'
import HeaderPages from '../../Components/HeaderPages/HeaderPages'

export default function NewsPage() {
    return (
        <>
            <div data-testid="header-component">
                <HeaderPages stateImg={true}/>
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