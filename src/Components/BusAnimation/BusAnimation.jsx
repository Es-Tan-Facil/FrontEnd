import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState } from 'react'
const BusAnimation = () => {
    const[posX, setPosX] = useState();
        const style = { '--posX': `${posX}vw` };

  return (
    <>
    <div className='BusAnimation'>
    
      <img src={background} alt="" className='BackgroundImg' />
      <div className="sub_div">
      <img src={bus} alt="" className='BusImg' style={style} />
      </div>
    </div>
    </>
  )
}

export default BusAnimation