import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';
import NewPrototype from '../NewPrototype/NewProtype.jsx';

function News() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

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

  const startIndex = (currentPage - 1) * perPage;

  return (
    <div className="flex flex-col items-center mt-12">
      <Title title="Últimas Noticias" />
      <div className="w-4/5 mx-auto md:w-2/5 mx-auto">
        {cards.slice(startIndex, startIndex + perPage).map((item) => (
          <div key={item.id} className="mb-4 mt-10">
            <NewPrototype card={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded-md bg-blue-500 text-white mr-2"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={startIndex + perPage >= cards.length}
          className="px-2 py-1 rounded-md bg-blue-500 text-white"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default News;


