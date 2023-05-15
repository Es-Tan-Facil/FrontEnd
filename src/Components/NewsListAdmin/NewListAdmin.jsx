import React, { useState, useEffect } from 'react';
import NewsCards from '../NewsCards/NewsCards.jsx';
import HTTPService from '../../Services/Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';


function NewListAdmin() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await HTTPService().getAllData();
        setCards(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews();
  }, []);

  return (


    <div  id="LastNews" className="md:h-[100vh] flex justify-center items-center flex-col">
      <Title  title="Últimas Noticias" />
      <div className="flex justify-center flex-wrap gap-12">
        {cards.reverse().map((card) => (
          <NewsCards key={card.id} card={card} />
        ))}
      </div>
    </div>


  );
}


export default NewListAdmin;