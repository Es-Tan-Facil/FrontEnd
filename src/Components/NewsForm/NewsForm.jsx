import React, { useState } from 'react';
import HTTPService from '../../Services/HTTPService'
import InputPhoto from '../InputPhoto/InputPhoto'
import { Alert } from "@material-tailwind/react";
import { WithRouter } from '../../Common/WithRouter';


function NewsForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: title,
            description: description,
            urlImg: urlImg
            
        }
        
        event.target.reset();

        HTTPService().createData(data)
        .then(response => {
            setShowAlert(true);
            setAlertMessage('El post se ha creado exitosamente');
            props.router.navigate("/admin");
        })
        .catch(error => {
            setShowAlert(true);
            setAlertMessage('Error al crear el post');
        });
        
        
        
    }

    return (

        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl mb-4 font-bold">Escribe Tu Post</h2>
            {showAlert && <Alert color={alertMessage.includes('Error') ? 'red' : 'blue'}>{alertMessage}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Título</label>
                    <input onChange={(event) => { setTitle(event.target.value) }} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Ingresa el título" autoFocus />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Descripción</label>
                    <textarea onChange={(event) => { setDescription(event.target.value) }} rows={7} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="description" placeholder="Cuéntanos tu experiencia..." />
                </div>
                <div className="mb-4">
                    <InputPhoto setUrlImg={setUrlImg} />
                </div>
                <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" content='Enviar' icon='like'>Enviar</button>

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cancelar</button>
                </div>
            </form>
           
        </div>
    )
}
export default WithRouter(NewsForm);