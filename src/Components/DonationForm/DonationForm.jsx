import React, { useState, useEffect } from 'react';
import HTTPDonationService from '../../Services/HTTPDonationService'
import { Alert } from "@material-tailwind/react";



function DonationForm({ setReload }) {
    const [name, setName] = useState('');
    const [km, setKm] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setName(result);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: name,
            kmDonated: km

        }


        HTTPDonationService().createDonation(data)
            .then(response => {
                setShowAlert(true);
                setAlertMessage('Se ha añadido correctamente.');
                setName('');
                setKm('');
            })
            .catch(error => {
                setShowAlert(true);
                setAlertMessage('Error al crear el post');
            });
        setReload(true)

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);

    const handleCancel = () => {
        setName('');
        setKm('');
    };

    return (

        <div className="max-w-md mx-auto bg-white border-4 border-[#51C8FC] shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl">
            <h2 className="text-xl mb-4 font-bold">Registro de Donaciones</h2>
            {showAlert && <Alert color={alertMessage.includes('Error') ? 'red' : 'blue'}>{alertMessage}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre y Apellidos</label>
                    <input onChange={handleChange} className="appearance-none border border-[#51C8FC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={name} placeholder="Ingresa el título" autoFocus />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="km">Km</label>
                    <input onChange={(event) => { setKm(event.target.value) }} className="appearance-none border border-[#51C8FC] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="km" type="text" placeholder="Ingresa el título" autoFocus />
                </div>
                <div className="mb-4">
                    <button className="bg-[#51C8FC] hover:bg-[#FFDD59] text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="submit" content='Enviar' icon='like'>Enviar</button>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-[#FFDD59] hover:bg-[#51C8FC] text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>

        </div>
    )
}
export default DonationForm;