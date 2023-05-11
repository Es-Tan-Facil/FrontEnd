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

    <div className="h-[58.188rem]">
      <div id="LastNews" className="flex justify-center items-center flex-col py-4">
        <Title title="Últimas Noticias" />
      </div>
      <div className="flex justify-center flex-wrap mt-1.5 gap-14">
        {cards.slice(-3).map((card) => (
          <NewsCards key={card.id} card={card} />
        ))}
      </div>
    </div>


  );
}


export default NewsSection;
