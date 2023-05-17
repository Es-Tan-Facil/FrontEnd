import React from 'react'
import ContactSocial from '../../Components/ContactSocial/ContactSocial'
import HeaderPages from '../../Components/HeaderPages/HeaderPages'


export default function Contact() {
    return (
        <>
            
            <ContactSocial />
            <div data-testid="header-component">
                <HeaderPages stateImg={false} />
            </div>
            <div data-testid="contact-social-component">
                <ContactSocial />
            </div>
        </>
    )
}
