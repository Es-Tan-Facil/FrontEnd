import React, { useRef, useState } from 'react';
import HTTPDonationService from '../../Services/HTTPDonationService'
import { Alert } from "@material-tailwind/react";



function DonationForm(props) {
    const [name, setName] = useState('');
    const [km, setKm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
           name:name,
           kmDonated:km
            
        }
        
        event.target.reset();

        HTTPDonationService().createDonation(data)
        .then(response => {
            setShowAlert(true);
            setAlertMessage('Se ha añadido correctamente.');
            
        })
        .catch(error => {
            setShowAlert(true);
            setAlertMessage('Error al crear el post');
        });
        
        
        
    }

    return (

        <div className="max-w-md mx-auto bg-white border-4 border-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl mb-4 font-bold">Registro de Donaciones</h2>
            {showAlert && <Alert color={alertMessage.includes('Error') ? 'red' : 'blue'}>{alertMessage}</Alert>}
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre y Apellidos</label>
                    <input onChange={(event) => { setName(event.target.value) }} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Ingresa el título" autoFocus />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="km">Km</label>
                    <input onChange={(event) => { setKm(event.target.value) }} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="km" type="text" placeholder="Ingresa el título" autoFocus />
                </div>
                <div className="mb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="submit" content='Enviar' icon='like'>Enviar</button>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button">Cancelar</button>
                </div>
            </form>
           
        </div>
    )
}
export default DonationForm;