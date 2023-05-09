import React from 'react'
import NewsCards from '../../NewsCards/NewsCards.jsx'
import carretera from '../../../Assets/Pictures/carretera.jpg';

function News() {
    let data = [{
        title: "Viaje 2023",
        subtitle: "A mar de plata",
        img: `${carretera}`
    }]
  return (
    <div id='UltimaNoticias'>
    {data.map((item) => 

    <NewsCards item={item}/>
     
    
      )}
    </div>
  )
}

export default News