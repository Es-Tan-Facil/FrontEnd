import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState } from 'react'
const BusAnimation = () => {

    const[posX, setPosX] = useState(20);
    
  return (
    <>
    <div className='BusAnimation'>
      <img src={background} alt="" className='BackgroundImg' />
      <div className="sub_div bottom-1 md:bottom-8">
        <img src={bus} alt="" className='BusImg' style={{ transform: `translate(${posX}vw)` }} />
      </div>
    </div>
    </>
  )
}

export default BusAnimation