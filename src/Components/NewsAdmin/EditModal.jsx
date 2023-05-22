import React from 'react';


function EditModal({ showModal, setShowModal, editedCard, setEditedCard, handleSave, handleCancel, handleInputChange }) {
    const closeModal = () => {
        setShowModal(false);
        setEditedCard(null);
    };



    return (
        showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 border-4 border-blue-500 max-w-lg w-full">
                    <h2 className="text-2xl text-blue-500 font-bold mb-4">Edita tu noticia</h2>

                    <form onSubmit={handleSave}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block font-semibold mb-2">Título</label>
                            <input type="text" name="title" value={editedCard.title} onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block font-semibold mb-2">Descripción</label>
                            <textarea name="description" value={editedCard.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded py-2 px-3"></textarea>
                        </div>
                        

                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded mr-2" onClick={handleSave}>Save</button>
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="" onClick={closeModal}></div>
            </div>
        )
    );
}

export default EditModal;