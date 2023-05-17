import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState, useEffect } from 'react'
import axios from 'axios';


const BusAnimation = () => {

  const [totalKm, setTotalKm] = useState(0);
  const [posX, setPosX] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/donations/total-kms-donated')
      .then(res => {
        setTotalKm(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
   
    const maxKm = 1175;
    const maxPosX = 84;
    const newPos = (totalKm / maxKm) * maxPosX;
    setPosX(newPos);
  }, [totalKm]);

    
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