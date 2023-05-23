import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService.jsx';
import Title from '../Title/Title.jsx';
import EditModal from '../NewsAdmin/EditModal.jsx';
import StainTitle from '../Stain/StainTitle.jsx';

function NewsAdmin({ setReload, reload }) {
  const [cards, setCards] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedCard, setEditedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await HTTPService().getAllData();
        setCards(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
    if(reload){

    setReload(false)
    }
  }, [reload, setReload]);

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
    setShowModal(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', editedCard.title);
      formData.append('description', editedCard.description);


      const updatedCard = await HTTPService().updateData(editedCard.id, editedCard);
      setCards(cards.map((card) => (card.id === editedCard.id ? updatedCard : card)));
      setEditMode(false);
      setEditedCard(null);
      setShowModal(false);
      setReload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedCard(null);
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  return (
    <div id="NewsAdmin" className=" flex flex-col items-center w-4/5 md:w-2/5 mx-auto mb-10">
      <Title title="Noticias" />
      <StainTitle />
      <div className="flex flex-wrap gap-12 mt-10">
        {cards.reverse().map((card) => (
          <div className="border-4 border-[#51C8FC] p-5 rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl min-w-[100%]" key={card.id}>
            <img src={card.urlImg} alt={card.title} className="w-48 h-48 object-cover" />
            {editMode && editedCard && editedCard.id === card.id ? (
              <>

                <input type="text" name="title" value={editedCard.title}
                  onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3" />

                <textarea name="description" value={editedCard.description}
                  onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3">
                </textarea>

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

              </>
            ) : (
              <button
                onClick={() => handleEdit(card)}
                className="mr-2 bg-[#51C8FC] hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">Editar
              </button>
            )}
            <button onClick={() => handleDelete(card.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded">Borrar
            </button>
          </div>
        ))}
      </div>
      <EditModal
        showModal={showModal}
        setShowModal={setShowModal}
        editedCard={editedCard}
        setEditedCard={setEditedCard}
        handleSave={handleSave}
        handleCancel={handleCancel}
        handleInputChange={handleInputChange}

      />
    </div>
  );
}

export default NewsAdmin;

