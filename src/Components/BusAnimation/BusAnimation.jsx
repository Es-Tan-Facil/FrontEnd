import React from 'react'
import background from '../../Assets/Pictures/background.svg'
import bus from '../../Assets/Pictures/bus.svg'
import './BusAnimation.css'
import { useState, useEffect } from 'react'
import HTTPDonationService from '../../Services/HTTPDonationService'
import Counter from '../Counter/Counter'


const BusAnimation = () => {

  const [totalKm, setTotalKm] = useState(0);
  const [posX, setPosX] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HTTPDonationService().getTotalKms();
        setTotalKm(response);
       } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

   useEffect(() => {
   
    const maxKm = 1175;
    const maxPosX = 84;
    const newPos = (totalKm / maxKm) * maxPosX;
    setPosX(newPos);
  }, [totalKm]);

    
  return (
    
    <div id="BusAnimation" className='md:h-[100vh] md:pt-28 h-80'>
      <div>
      <Counter />
      </div>
      
      <div>
          <img src={background} alt="" className='BackgroundImg ' /> 
      </div > 
      
      <div className="sub_div md:bottom-8 ">
        <img src={bus} alt="" className='BusImg' style={{ transform: `translate(${posX}vw)` }} />
      </div>
    </div>

  )
}

export default BusAnimation