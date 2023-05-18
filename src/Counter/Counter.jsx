import React, { useEffect, useState } from 'react';
import HTTPDonationService from '../Services/HTTPDonationService';

const Counter = () => {
  const [totalKms, setTotalKms] = useState(1175);

  useEffect(() => {
    const getTotalKms = async () => {
      try {
        const response = await HTTPDonationService().getTotalKms();
        const totalKmsDonated = response;
        const kmsRemaining = 1175 - totalKmsDonated;
        setTotalKms(kmsRemaining);
      } catch (error) {
        console.error('Error al obtener el total de kilómetros donados:', error);
      }
    };
    
    getTotalKms();
  }, []);



  return (
    <div>
      <h2>Contador Regresivo</h2>
      <p>Kilómetros restantes: {totalKms}</p>
    </div>
  );
};

export default Counter;
