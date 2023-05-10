import React, { useState } from 'react'
import ImgHeaderA from '../../Assets/Pictures/Cabecera1.svg'
import ImgHeaderB from '../../Assets/Pictures/Cabecera2.svg'
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
    
    <div className="outer-box md:h-4/5 ">
        
      {
      img
      ?
      <img src={ImgHeaderA} 
<<<<<<< .merge_file_13yq72
          onMouseEnter={hoverHandler} alt=''/>
=======
          onMouseEnter={hoverHandler} alt=''
          />
>>>>>>> .merge_file_6GZf8u
      :
      <img src={ImgHeaderB} 
      onMouseLeave={outHandler} alt=''/>
      }
      
        
      </div>
    
      
  )
}

export default ImgHeader