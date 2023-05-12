import React, { useState, useEffect } from 'react';
import NewsCards from '../NewsCards/NewsCards.jsx';
import HTTPService from '../../Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';


function NewsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await HTTPService().getAllData();
        console.info(response);
        setCards(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews();
  }, []);

  return (


    <div  id="LastNews" className="flex justify-center items-center flex-col">
      <Title  title="Últimas Noticias" />
      <div className="flex justify-center flex-wrap gap-12">
        {cards.slice(-3).map((card) => (
          <NewsCards key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}


export default NewsSection;
