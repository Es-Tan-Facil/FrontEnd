import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState } from 'react'
const BusAnimation = () => {

    const[posX, setPosX] = useState(0);
    
  return (
    <>
    <div className='BusAnimation h-44 md:h-[100vh]'>
      <div className=' h-full'>
          <img src={background} alt="" className='BackgroundImg ' /> 
      </div > 
      
      <div className="sub_div md:bottom-8">
        <img src={bus} alt="" className='BusImg' style={{ transform: `translate(${posX}vw)` }} />
      </div>
    </div>
    </>
  )
}

export default BusAnimation