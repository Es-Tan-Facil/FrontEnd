import React from 'react'
import ContactSocial from '../../Components/ContactSocial/ContactSocial'
import Header from '../../Components/Header/Header'


export default function Contact() {
    return (
        <>
            <div data-testid="header-component">
                <Header />
            </div>
            <div data-testid="contact-social-component">
                <ContactSocial />
            </div>
        </>
    )
}
