import React from 'react'
import NavBarPages from '../../NavBarsComponents/NavBarPages/NavBarPages'
import ImgHeaderPages from '../ImgHeaderPages/ImgHeaderPages'

function HeaderPages({stateImg}) {
  return (
    <div className='header md:h-[100vh]'>
        <NavBarPages />
        <ImgHeaderPages img={stateImg} />
    </div>
    
  )
}

export default HeaderPages