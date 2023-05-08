import React, { useState } from 'react'
import ImgHeaderA from '../../assets/Pictures/Cabecera1.svg'
import ImgHeaderB from '../../assets/Pictures/Cabecera2.svg'
import './ImgHeader.css';

function ImgHeader() {
  const [img, setImg] = useState(true)
  const hoverHandler = () => {
    setImg(false)
  }
  const outHandler = () => {
    setImg(true)
  }
  return (
    
    <div className="outer-box">
        
      {
      img
      ?
      <img src={ImgHeaderA} 
          onMouseEnter={hoverHandler}
          />
      :
      <img src={ImgHeaderB} 
      onMouseLeave={outHandler}/>
      }
      
        
      </div>
    
      
  )
}

export default ImgHeader