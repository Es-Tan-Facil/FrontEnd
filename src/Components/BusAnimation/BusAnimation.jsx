import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState } from 'react'
const BusAnimation = () => {

    const[posX, setPosX] = useState();
    
  return (
    <>
    <div>
    <img src={bus} alt="" className='BusImg' style={{ transform: `translate(${posX}vw)` }} />
    <img src={background} alt="" className='BackgroundImg' />
    </div>
    </>
  )
}

export default BusAnimation