import React from 'react'
import ImgHeader from '../ImgHeader/ImgHeader'
import './Header.css'
import NavBar from '../NavBar/NavBar'

function Header() {
  return (
    <div className='header md:h-[100vh]'>
        <NavBar/>
        <ImgHeader/>
    </div>
    
  )
}

export default Header