import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';
import InputPhoto from '../InputPhoto/InputPhoto.jsx';
import EditModal from './EditModal.jsx';

function NewsAdmin() {
  const [cards, setCards] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedCard, setEditedCard] = useState(null);

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

  const handleDelete = async (cardId) => {
    try {
      const response = await HTTPService().deleteData(cardId);
      setCards(cards.filter((card) => card.id !== cardId));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (card) => {
    setEditMode(true);
    setEditedCard(card);
  };

  const handleSave = async () => {
    try {
      const updatedCard = await HTTPService().updateData(editedCard.id, editedCard);
      setCards(cards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
      setEditMode(false);
      setEditedCard(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedCard(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="NewsAdmin" className="md:h-[100vh] flex flex-col items-center">
      <Title title="Últimas Noticias" />
      <div className="flex flex-wrap gap-12">
        {cards.reverse().map((card) => (
          <div key={card.id}>
            <img src={card.urlImg} alt={card.title} className="w-48 h-48 object-cover" />
            {editMode && editedCard && editedCard.id === card.id ? (
              <>
                <input type="text" name="title" value={editedCard.title} onChange={handleInputChange} />
                <textarea name="description" value={editedCard.description} onChange={handleInputChange}></textarea>
              </>
            ) : (
              <>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </>
            )}
            <small>{card.date}</small>
            {editMode && editedCard && editedCard.id === card.id ? (
              <>
                <button onClick={handleSave} className="mr-2 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">Guardar</button>
                <button onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Cancelar</button>
              </>
            ) : (
              <button onClick={() => handleEdit(card)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Editar</button>
            )}
            <button onClick={() => handleDelete(card.id)} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Borrar</button>
          </div>
        ))}
      </div>
      {editMode && editedCard && (
        <EditModal
          showModal={editMode}
          setShowModal={setEditMode}
          editedCard={editedCard}
          setEditedCard={setEditedCard}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default NewsAdmin;

