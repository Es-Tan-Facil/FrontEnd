import React from 'react'
import ImgHeader from '../ImgHeader/ImgHeader'
import NavBarPages from '../NavBarPages/NavBarPages'

function HeaderPages() {
  return (
    <div className='header md:h-[100vh]'>
        <NavBarPages />
        <ImgHeader/>
    </div>
    
  )
}

export default HeaderPages