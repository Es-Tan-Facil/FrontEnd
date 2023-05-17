import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';




function NewsAdmin() {
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
    }, [HTTPService]);


    async function handleEdit(news) {
        try {
          const updatedNews = { ...news, title: "Updated Title" }; 
          const response = await HTTPService().updateData(news.id, updatedNews); 
          console.log(response); 
        } catch (error) {
          console.error(error);
        }
      }
      
    const handleDelete = async (cardId) => {
        try {
            const response = await HTTPService().deleteData(cardId);
            setCards(cards.filter((card) => card.id !== cardId));
        } catch (error) {
            console.log(error);
        }
    };





    return (


        <div id="NewsAdmin" className="md:h-[100vh] flex flex-col items-center">
            <Title title="Últimas Noticias" />
            <div className="flex flex-wrap gap-12">
                {cards.reverse().map((card) => (
                    <div key={card.id}>
                        <img src={card.urlImg} alt={card.title} className="w-48 h-48 object-cover" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        <small>{card.date}</small>
                        <button onClick={() => handleEdit(card.id)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Editar</button>
                        <button onClick={() => handleDelete(card.id)} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Borrar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default NewsAdmin;